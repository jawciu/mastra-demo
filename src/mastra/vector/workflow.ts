/**
 * Vector's meeting pipeline as a Mastra workflow:
 *   build-context (deterministic, no AI) -> extract (pass 1) -> decide (pass 2, tools)
 * In Vector this ran inside a Next.js `after()` hook behind a webhook.
 * Here each step is visible in Studio with its own span.
 */
import { createStep, createWorkflow } from '@mastra/core/workflows';
import { RequestContext } from '@mastra/core/request-context';
import { z } from 'zod';
import { buildOrchestratorContext, getMeeting, listMeetingSlugs, matchMeetingToOnboarding } from './context';
import { ExtractionSchema } from './agents';

const DraftSchema = z.object({
  tool: z.string(),
  args: z.record(z.string(), z.unknown()),
  status: z.string(),
  reason: z.string().optional(),
});

const ContextOut = z.object({
  slug: z.string(),
  matched: z.boolean(),
  onboarding: z.string().nullable(),
  signal: z.string(),
  context: z.any(),
});

const buildContext = createStep({
  id: 'build-context',
  description: 'Match the meeting to an onboarding and assemble the context the model sees. No AI.',
  inputSchema: z.object({ slug: z.string().describe(`One of: ${listMeetingSlugs().join(', ')}`) }),
  outputSchema: ContextOut,
  execute: async ({ inputData }) => {
    const meeting = getMeeting(inputData.slug);
    if (!meeting) throw new Error(`Unknown meeting slug "${inputData.slug}". Try one of: ${listMeetingSlugs().join(', ')}`);
    const { onboarding, signal } = matchMeetingToOnboarding(meeting);
    return {
      slug: inputData.slug,
      matched: onboarding != null,
      onboarding: onboarding ? `${onboarding.companyName} (${onboarding.key})` : null,
      signal,
      context: buildOrchestratorContext(meeting, onboarding),
    };
  },
});

const extract = createStep({
  id: 'extract',
  description: 'Pass 1. Structured extraction of every commitment, verbatim. No decisions.',
  inputSchema: ContextOut,
  outputSchema: ContextOut.extend({ extraction: ExtractionSchema }),
  execute: async ({ inputData, mastra }) => {
    const agent = mastra.getAgent('vectorExtractor');
    const response = await agent.generate(JSON.stringify(inputData.context), {
      structuredOutput: { schema: ExtractionSchema },
    });
    return { ...inputData, extraction: response.object };
  },
});

const decide = createStep({
  id: 'decide',
  description: 'Pass 2. Resolve facts to ids and propose drafts through tools. Every draft waits for a human.',
  inputSchema: ContextOut.extend({ extraction: ExtractionSchema }),
  outputSchema: z.object({
    slug: z.string(),
    matched: z.boolean(),
    onboarding: z.string().nullable(),
    meetingTone: z.string(),
    extractedItems: z.number(),
    drafts: z.array(DraftSchema),
    summary: z.string(),
  }),
  execute: async ({ inputData, mastra }) => {
    const base = {
      slug: inputData.slug,
      matched: inputData.matched,
      onboarding: inputData.onboarding,
      meetingTone: inputData.extraction.meetingTone,
      extractedItems: inputData.extraction.actionItems.length,
    };
    if (!inputData.matched) {
      return { ...base, drafts: [], summary: `No onboarding matched (${inputData.signal}). Extraction kept, nothing drafted. In Vector this lands in the "needs your input" inbox.` };
    }
    const requestContext = new RequestContext<{ vector: unknown }>();
    requestContext.set('vector', inputData.context);
    const agent = mastra.getAgent('vectorOrchestrator');
    const response = await agent.generate(JSON.stringify({ ...inputData.context, extraction: inputData.extraction }), {
      requestContext,
    });
    const resultsById = new Map<string, { status?: string; reason?: string }>();
    for (const r of response.toolResults ?? []) {
      const payload = r.payload as { toolCallId: string; result?: { status?: string; reason?: string } };
      resultsById.set(payload.toolCallId, payload.result ?? {});
    }
    const drafts = (response.toolCalls ?? []).map((c) => {
      const payload = c.payload as { toolCallId: string; toolName: string; args: Record<string, unknown> };
      const res = resultsById.get(payload.toolCallId);
      return { tool: payload.toolName, args: payload.args, status: res?.status ?? 'unknown', reason: res?.reason };
    });
    return { ...base, drafts, summary: response.text?.trim() || `${drafts.length} drafts proposed.` };
  },
});

export const meetingToDrafts = createWorkflow({
  id: 'meeting-to-drafts',
  description: "Vector's meeting-to-drafts pipeline. Pick a meeting slug, get reviewed-not-applied task drafts.",
  inputSchema: buildContext.inputSchema,
  outputSchema: decide.outputSchema,
})
  .then(buildContext)
  .then(extract)
  .then(decide)
  .commit();

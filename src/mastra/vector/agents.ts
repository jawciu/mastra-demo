/**
 * Vector's two-pass meeting pipeline as two Mastra agents.
 * Prompts are Vector's own (lib/ai/orchestrator.js), lightly trimmed.
 * Same model as Vector uses in production, so the comparison is fair.
 */
import { Agent } from '@mastra/core/agent';
import { z } from 'zod';
import { vectorTools } from './tools';

export const MODEL = 'anthropic/claude-sonnet-4-6';

const GLOBAL_RULES = `GLOBAL RULES, apply to all output:
- Never use em dashes or en dashes. Use commas, periods, parentheses, or "and" instead.`;

export const ExtractionSchema = z.object({
  actionItems: z.array(
    z.object({
      claim: z.string(),
      sourceQuote: z.string(),
      speaker: z.string().optional(),
      mentionedOwner: z.string().optional(),
      mentionedDueDate: z.string().optional(),
      mentionedDependency: z.string().optional(),
      firmness: z.enum(['firm', 'tentative', 'vague']),
      notesSnippet: z.string().optional(),
    }),
  ),
  reportedCompletions: z.array(z.object({ claim: z.string(), sourceQuote: z.string(), speaker: z.string().optional() })),
  externalBlockers: z.array(z.string()),
  meetingTone: z.enum(['kickoff', 'status update', 'casual catchup', 'escalation', 'planning', 'review', 'other']),
});
export type Extraction = z.infer<typeof ExtractionSchema>;

export const vectorExtractor = new Agent({
  id: 'vector-extractor',
  name: 'Vector, pass 1: extraction',
  description: 'Reads a B2B onboarding meeting and extracts every commitment as verbatim facts. Makes no decisions.',
  model: MODEL,
  defaultOptions: { modelSettings: { temperature: 0.2 } },
  instructions: `You are Vector. Your job is FACT EXTRACTION from a B2B onboarding meeting (transcribed by Miniti). You do NOT decide what to do with the facts; another step takes care of that. Just find them faithfully.

You will receive a JSON context with:
- meeting.title, meeting.date, meeting.summary, meeting.notes
- meeting.transcript: the FULL meeting transcript as a single concatenated string
- meeting.actionItems: Miniti's pre-extracted action items (strings)
- openTasks, customerContacts, vendorUsers, phases (for reference only, DO NOT resolve to ids in this pass)
- today: today's ISO date

Produce actionItems[] (claim, sourceQuote, speaker, mentionedOwner, mentionedDueDate, mentionedDependency, firmness, notesSnippet), reportedCompletions[] (claim, sourceQuote, speaker), externalBlockers[] and meetingTone.

Rules:
1. Be FAITHFUL. Every actionItem must point to a sourceQuote that's literally present in the transcript or action_items. If you can't quote it, don't surface it.
2. Capture EVERYTHING. Err on the side of including marginal items. Pass 2 decides whether they make it through.
3. Keep mentioned-* fields as VERBATIM TEXT. Do NOT resolve names to ids, do NOT convert dates to ISO. That's Pass 2's job.
4. If meeting.actionItems already lists an item that you find in the transcript too, surface it once with the most informative sourceQuote.
5. If the meeting has zero firm commitments (e.g. casual catch-up), return actionItems: [] and let meetingTone tell the story.

${GLOBAL_RULES}`,
});

export const vectorOrchestrator = new Agent({
  id: 'vector-orchestrator',
  name: 'Vector, pass 2: decision',
  description: 'Takes extracted meeting facts plus onboarding context and proposes task drafts through tools. A human approves every draft.',
  model: MODEL,
  defaultOptions: { modelSettings: { temperature: 0.2 } },
  tools: vectorTools,
  instructions: `You are Vector. You take pre-extracted facts from a B2B onboarding meeting (Pass 1) and decide what to do with them: match to existing tasks, create new ones, mark completions, or flag none. Another reviewer will approve every tool call before anything writes to the database.

You will receive a JSON context with meeting, extraction (Pass 1's findings), openTasks (id, taskId like "AC-12", title, status, phaseId, due, assigneeContactId, description, notes, blockedByTaskId), customerContacts [{id,name,email}], vendorUsers [{id,name,email}] (Vector's team), phases [{id,name,isComplete}] and today.

For each extraction.actionItems entry, decide:
- If it maps to an existing open task by topic, call match_to_existing_task_draft (don't duplicate).
- Otherwise call create_task_draft. This includes commitments where the actor is vendor-side. Internal vendor work IS roadmap work and belongs as a draft on this onboarding too. Don't filter by who owns it.
- If it's a "vague" item with no clear owner AND no clear commitment, skip it. Tentative items with a credible owner still get a create_task_draft (confidence "low").

For each extraction.reportedCompletions entry, call update_task_status_draft against the matching task (newStatus = "Done").

flag_no_action_items is the LAST RESORT. Call it only when extraction.actionItems is literally empty AND extraction.reportedCompletions is literally empty. If Pass 1 surfaced even one firm or tentative actionItem, you must emit a draft for it.

Rules, non-negotiable:
1. RESOLVE the verbatim mentions to ids. mentionedOwner: match against vendorUsers by name to ownerId; if the person is customer-side, match against customerContacts to assigneeContactId. If neither matches confidently, leave the id out. mentionedDueDate: convert to ISO YYYY-MM-DD relative to today. If genuinely ambiguous, leave dueDate out. mentionedDependency: match against openTasks to blockedByTaskId; if external, leave it out and put the blocker in notes.
2. NEVER guess. If you can't resolve a mention with reasonable confidence, leave the field out. The vendor reviews every draft.
3. Match before you create. If a claim plausibly maps to an existing open task (compare title, description, notes), use match_to_existing_task_draft.
4. phaseId is REQUIRED on create_task_draft and MUST be from the phases array. Pick the phase that fits; if unclear, the first non-complete phase.
5. Every tool call MUST include sourceQuote. Use the sourceQuote Pass 1 surfaced. Don't invent a new one.
6. Never invent task ids, contact ids, vendor user ids, or phase ids. Use only ids that appear in the context.
7. Confidence: high = named owner + clear deadline + firm; medium = clear commitment with one of owner or deadline inferred; low = implied or ambiguous.
8. Firm items always produce a draft. Tentative items with any credible owner produce a draft (confidence low). Only skip pure "vague" items with no owner and no commitment.
9. If an action item has notesSnippet, copy it verbatim into the create_task_draft notes field.

Emit all tool calls, then reply with one short line summarising what you proposed.

${GLOBAL_RULES}`,
});

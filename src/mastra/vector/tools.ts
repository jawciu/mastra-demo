/**
 * Vector's four orchestrator tools, ported from lib/ai/orchestrator.js.
 * In Vector these were hand-written JSON Schema and were never executed:
 * each call became a PendingAIChange row for a human to approve.
 * Here they are Zod schemas, and `execute` does what Vector's webhook did
 * after the model answered: validate every id against the context and
 * queue the draft for review. Toggle "Require tool approval" in Studio to
 * see Mastra's own approval flow on top.
 */
import { createTool } from '@mastra/core/tools';
import { z } from 'zod';
import type { OrchestratorContext } from './context';

const confidence = z.enum(['low', 'medium', 'high']);
const priority = z.enum(['low', 'medium', 'high']);

type Draft = Record<string, unknown>;

function contextFrom(requestContext: unknown): OrchestratorContext | null {
  const rc = requestContext as { get?: (k: string) => unknown } | undefined;
  const ctx = rc?.get?.('vector');
  return (ctx as OrchestratorContext) ?? null;
}

function queued(tool: string, draft: Draft, problems: string[]) {
  return problems.length
    ? { status: 'dropped' as const, tool, reason: problems.join('; '), draft }
    : { status: 'pending_review' as const, tool, draft };
}

const result = z.object({
  status: z.enum(['pending_review', 'dropped']),
  tool: z.string(),
  reason: z.string().optional(),
  draft: z.record(z.string(), z.unknown()),
});

export const createTaskDraft = createTool({
  id: 'create_task_draft',
  description:
    'Propose creating a new task. Use when an action item is a fresh commitment not covered by any existing open task. Fill in as many fields as the extraction supports; leave the rest out.',
  inputSchema: z.object({
    title: z.string().max(80).describe('Short imperative task title, max 80 chars.'),
    description: z.string().optional().describe('Optional longer description of what the task entails.'),
    ownerId: z.number().int().optional().describe('Vendor team-mate who owns this work. MUST be an id from vendorUsers. Omit if not determinable.'),
    assigneeContactId: z.number().int().optional().describe('Customer-side person responsible. MUST be an id from customerContacts. Omit if not determinable.'),
    dueDate: z.string().optional().describe('ISO date YYYY-MM-DD if a deadline was committed. Omit if not.'),
    phaseId: z.number().int().describe('REQUIRED. Must match a phase id from the phases array.'),
    priority,
    blockedByTaskId: z.number().int().optional().describe('The single most blocking open task this depends on. MUST be an id from openTasks. Omit if no internal dependency (note external blockers in notes instead).'),
    notes: z.string().optional().describe('Verbatim transcript snippet from extraction.notesSnippet plus any external blockers. Max ~200 chars.'),
    sourceQuote: z.string().describe('REQUIRED. Verbatim. Use extraction.sourceQuote.'),
    confidence,
  }),
  outputSchema: result,
  execute: async (input, { requestContext }) => {
    const ctx = contextFrom(requestContext);
    const problems: string[] = [];
    if (ctx) {
      if (!ctx.phases.some((p) => p.id === input.phaseId)) problems.push(`phaseId ${input.phaseId} not in context`);
      if (input.ownerId != null && !ctx.vendorUsers.some((u) => u.id === input.ownerId)) problems.push(`ownerId ${input.ownerId} not in context`);
      if (input.assigneeContactId != null && !ctx.customerContacts.some((c) => c.id === input.assigneeContactId)) problems.push(`assigneeContactId ${input.assigneeContactId} not in context`);
      if (input.blockedByTaskId != null && !ctx.openTasks.some((t) => t.id === input.blockedByTaskId)) problems.push(`blockedByTaskId ${input.blockedByTaskId} not in context`);
    }
    return queued('create_task_draft', input, problems);
  },
});

export const matchToExistingTaskDraft = createTool({
  id: 'match_to_existing_task_draft',
  description: 'Propose updating an existing open task instead of creating a duplicate. Use when an action item maps to a task already in the openTasks list.',
  inputSchema: z.object({
    taskId: z.number().int().describe('Must be an id from openTasks'),
    action: z.enum(['reassign', 'reprioritise', 'update_due_date']),
    newPriority: priority.optional().describe('For reprioritise'),
    newDueDate: z.string().optional().describe('ISO date for update_due_date'),
    sourceQuote: z.string(),
    confidence,
  }),
  outputSchema: result,
  execute: async (input, { requestContext }) => {
    const ctx = contextFrom(requestContext);
    const problems: string[] = [];
    if (ctx && !ctx.openTasks.some((t) => t.id === input.taskId)) problems.push(`taskId ${input.taskId} not in context`);
    return queued('match_to_existing_task_draft', input, problems);
  },
});

export const updateTaskStatusDraft = createTool({
  id: 'update_task_status_draft',
  description: 'Propose marking an existing task as Done (or another status) when the transcript reports completion.',
  inputSchema: z.object({
    taskId: z.number().int().describe('Must be an id from openTasks'),
    newStatus: z.enum(['Not started', 'In progress', 'Under investigation', 'Blocked', 'Done']),
    sourceQuote: z.string(),
    confidence,
  }),
  outputSchema: result,
  execute: async (input, { requestContext }) => {
    const ctx = contextFrom(requestContext);
    const problems: string[] = [];
    if (ctx && !ctx.openTasks.some((t) => t.id === input.taskId)) problems.push(`taskId ${input.taskId} not in context`);
    return queued('update_task_status_draft', input, problems);
  },
});

export const flagNoActionItems = createTool({
  id: 'flag_no_action_items',
  description: 'Call exactly once if the meeting has no concrete action items worth surfacing.',
  inputSchema: z.object({
    reason: z.string().describe("Brief explanation (e.g. 'casual catch-up', 'all items already covered by existing tasks')"),
  }),
  outputSchema: result,
  execute: async (input) => queued('flag_no_action_items', input, []),
});

// Mastra exposes tools to the model under their registry KEY, not their id.
// Keep the keys identical to Vector's tool names so the ported prompts still apply.
export const vectorTools = {
  create_task_draft: createTaskDraft,
  match_to_existing_task_draft: matchToExistingTaskDraft,
  update_task_status_draft: updateTaskStatusDraft,
  flag_no_action_items: flagNoActionItems,
};

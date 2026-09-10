/**
 * Two deterministic scorers for the meeting-to-drafts workflow. No judge model,
 * so they cost nothing and give the same answer every run.
 *
 *  draftCoverage     did every action item Miniti pre-extracted get a draft?
 *  quoteFaithfulness does every sourceQuote actually appear in the transcript?
 */
import { createScorer } from '@mastra/core/evals';
import { getMeeting } from './context';

type Draft = { tool: string; args: Record<string, unknown>; status: string };
type WorkflowOutput = { slug: string; matched: boolean; drafts: Draft[] };
type GroundTruth = { expectedActionItems?: string[] } | null | undefined;

const STOP = new Set(['the', 'a', 'an', 'to', 'for', 'of', 'and', 'on', 'in', 'by', 'with', 'from', 'at', 'is', 'be', 'will', 'our', 'their', 'this', 'that', 'it', 'as', 'or']);
const words = (s: string) => new Set(s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)));
const overlap = (a: string, b: string) => {
  const wa = words(a), wb = words(b);
  if (!wa.size) return 0;
  let hit = 0;
  for (const w of wa) if (wb.has(w)) hit++;
  return hit / wa.size;
};
const draftText = (d: Draft) => [d.args.title, d.args.sourceQuote, d.args.notes, d.args.description].filter((x): x is string => typeof x === 'string').join(' ');

function expectedFor(run: { input?: unknown; output?: unknown; groundTruth?: unknown }): string[] {
  const gt = run.groundTruth as GroundTruth;
  if (gt?.expectedActionItems?.length) return gt.expectedActionItems;
  const slug = (run.output as WorkflowOutput)?.slug ?? (run.input as { slug?: string })?.slug;
  return slug ? [...(getMeeting(slug)?.action_items ?? [])] : [];
}

export const draftCoverage = createScorer({
  id: 'draftCoverage',
  description: "Share of Miniti's pre-extracted action items that ended up as a create or match draft. 0 if the agent flagged 'no action items' while items existed.",
})
  .preprocess(({ run }) => {
    const out = run.output as WorkflowOutput;
    const expected = expectedFor(run);
    const drafts = (out?.drafts ?? []).filter((d) => d.tool === 'create_task_draft' || d.tool === 'match_to_existing_task_draft');
    const flagged = (out?.drafts ?? []).some((d) => d.tool === 'flag_no_action_items');
    const missed = expected.filter((item) => !drafts.some((d) => overlap(item, draftText(d)) >= 0.4));
    return { expected, drafts: drafts.length, flagged, missed, matched: out?.matched ?? false };
  })
  .generateScore(({ results }) => {
    const r = results.preprocessStepResult;
    if (!r.matched) return r.expected.length ? 0 : 1;
    if (!r.expected.length) return r.flagged || r.drafts === 0 ? 1 : 0.5;
    if (r.flagged) return 0;
    return (r.expected.length - r.missed.length) / r.expected.length;
  })
  .generateReason(({ results, score }) => {
    const r = results.preprocessStepResult;
    if (!r.matched) return 'Meeting did not match an onboarding, so nothing could be drafted.';
    if (r.flagged) return 'Agent called flag_no_action_items although Miniti listed action items.';
    return `${r.expected.length - r.missed.length}/${r.expected.length} expected items covered by ${r.drafts} drafts (score ${score.toFixed(2)}).` + (r.missed.length ? ` Missed: ${r.missed.map((m: string) => `"${m}"`).join('; ')}` : '');
  });

export const quoteFaithfulness = createScorer({
  id: 'quoteFaithfulness',
  description: 'Share of drafts whose sourceQuote appears verbatim (normalised) in the transcript or action items. Catches invented evidence.',
})
  .preprocess(({ run }) => {
    const out = run.output as WorkflowOutput;
    const meeting = getMeeting(out?.slug ?? '');
    const haystack = [
      ...(meeting?.transcript ?? []).map((t) => t.text),
      ...(meeting?.action_items ?? []),
      meeting?.summary ?? '',
      meeting?.notes ?? '',
    ].join('\n').toLowerCase().replace(/\s+/g, ' ');
    const quoted = (out?.drafts ?? []).filter((d) => typeof d.args.sourceQuote === 'string');
    const bad = quoted.filter((d) => {
      const q = String(d.args.sourceQuote).toLowerCase().replace(/\s+/g, ' ').trim();
      const probe = q.length > 60 ? q.slice(0, 60) : q;
      return probe.length > 0 && !haystack.includes(probe);
    });
    return { quoted: quoted.length, bad: bad.map((d) => String(d.args.sourceQuote).slice(0, 80)) };
  })
  .generateScore(({ results }) => {
    const r = results.preprocessStepResult;
    return r.quoted === 0 ? 1 : (r.quoted - r.bad.length) / r.quoted;
  })
  .generateReason(({ results }) => {
    const r = results.preprocessStepResult;
    if (r.quoted === 0) return 'No drafts carried a sourceQuote.';
    return r.bad.length ? `${r.bad.length}/${r.quoted} quotes not found in the meeting: ${r.bad.map((q: string) => `"${q}"`).join('; ')}` : `All ${r.quoted} quotes trace to the transcript.`;
  });

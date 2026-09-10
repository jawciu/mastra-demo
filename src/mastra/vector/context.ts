/**
 * Vector's onboarding world, rebuilt from its demo fixtures, plus the
 * context builder the orchestrator sees. Mirrors lib/integrations/miniti.js
 * in Vector (matchMeetingToOnboarding + buildOrchestratorContext).
 */
import { MEETINGS } from './data/meetings';
import { COMPANIES } from './data/companies';

export type Meeting = (typeof MEETINGS)[number];

export interface Phase { id: number; name: string; isComplete: boolean; sortOrder: number }
export interface Contact { id: number; name: string; email: string | null }
export interface VendorUser { id: number; name: string; email: string }
export interface Task {
  id: number;
  taskId: string;
  title: string;
  status: string;
  phaseId: number;
  due: string | null;
  assigneeContactId: number | null;
  description: string | null;
  notes: string | null;
  blockedByTaskId: number | null;
}
export interface Onboarding {
  id: number;
  key: string;
  companyName: string;
  domain: string;
  prefix: string;
  status: string;
  phases: Phase[];
  contacts: Contact[];
  tasks: Task[];
}

export interface OrchestratorContext {
  today: string;
  meeting: {
    id: string;
    title: string;
    date: string;
    summary: string | null;
    actionItems: string[];
    keyDecisions: string[];
    notes: string | null;
    transcript: string;
  };
  openTasks: Task[];
  phases: Phase[];
  customerContacts: Contact[];
  vendorUsers: VendorUser[];
}

/** Vector's own team, taken from the vendor-side attendees in the fixtures. */
export const VENDOR_USERS: VendorUser[] = (() => {
  const seen = new Map<string, VendorUser>();
  for (const m of MEETINGS) {
    for (const a of m.attendees ?? []) {
      if (a.domain === 'vector.test' && !seen.has(a.email)) {
        seen.set(a.email, { id: seen.size + 1, name: a.name, email: a.email });
      }
    }
  }
  return [...seen.values()];
})();

/** Deterministic numeric ids so the model can reference them like Vector does. */
export const ONBOARDINGS: Onboarding[] = COMPANIES.flatMap((company, ci) =>
  company.onboardings.map((ob, oi) => {
    const id = (ci + 1) * 100 + oi;
    const phases: Phase[] = [...ob.phases]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((p, i) => ({ id: id * 10 + i, name: p.name, isComplete: p.isComplete, sortOrder: p.sortOrder }));
    const contacts: Contact[] = ob.contacts.map((c, i) => ({ id: id * 100 + i, name: c.name, email: c.email ?? null }));
    const byNumber = new Map<number, number>();
    ob.tasks.forEach((t) => byNumber.set(t.number, id * 1000 + t.number));
    const tasks: Task[] = ob.tasks.map((t) => ({
      id: id * 1000 + t.number,
      taskId: t.key,
      title: t.title,
      status: t.status,
      phaseId: phases.find((p) => p.name === t.phaseName)?.id ?? phases[0].id,
      due: t.due ?? null,
      assigneeContactId: null,
      description: t.description || null,
      notes: t.notes || null,
      blockedByTaskId: t.blockedByNumber != null ? (byNumber.get(t.blockedByNumber) ?? null) : null,
    }));
    return { id, key: ob.key, companyName: company.name, domain: company.domain, prefix: company.prefix, status: ob.status, phases, contacts, tasks };
  }),
);

export function getMeeting(slug: string): Meeting | undefined {
  return MEETINGS.find((m) => m.slug === slug);
}

export function listMeetingSlugs(): string[] {
  return MEETINGS.map((m) => m.slug);
}

/** Same heuristic order as Vector: attendee domain, then company name in the title. No AI. */
export function matchMeetingToOnboarding(meeting: Meeting): { onboarding: Onboarding | null; signal: string } {
  const domains = new Set((meeting.attendees ?? []).map((a) => a.domain?.toLowerCase()).filter((d) => d && d !== 'vector.test'));
  const byDomain = ONBOARDINGS.find((o) => domains.has(o.domain.toLowerCase()));
  if (byDomain) return { onboarding: byDomain, signal: `attendee domain ${byDomain.domain}` };
  const title = (meeting.title ?? '').toLowerCase();
  const byTitle = ONBOARDINGS.find((o) => title.includes(o.companyName.toLowerCase()));
  if (byTitle) return { onboarding: byTitle, signal: `title mentions ${byTitle.companyName}` };
  return { onboarding: null, signal: 'no match' };
}

export function meetingDate(meeting: Meeting, today = new Date()): string {
  const d = new Date(today);
  d.setDate(d.getDate() - (meeting.daysAgo ?? 0));
  return d.toISOString().slice(0, 10);
}

export function buildOrchestratorContext(meeting: Meeting, onboarding: Onboarding | null, today = new Date()): OrchestratorContext {
  const transcript = Array.isArray(meeting.transcript)
    ? meeting.transcript.map((t) => t?.text).filter(Boolean).join('\n')
    : '';
  return {
    today: today.toISOString().slice(0, 10),
    meeting: {
      id: meeting.id,
      title: meeting.title,
      date: meetingDate(meeting, today),
      summary: meeting.summary ?? null,
      actionItems: [...(meeting.action_items ?? [])],
      keyDecisions: [...(meeting.key_decisions ?? [])],
      notes: meeting.notes ?? null,
      transcript,
    },
    openTasks: onboarding ? onboarding.tasks.filter((t) => t.status !== 'Done') : [],
    phases: onboarding ? onboarding.phases : [],
    customerContacts: onboarding ? onboarding.contacts : [],
    vendorUsers: VENDOR_USERS,
  };
}

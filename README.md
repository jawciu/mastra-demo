# mastra-demo

I rebuilt the agent from my own product inside [Mastra](https://mastra.ai) to see how its Studio compares with the observability and approval flow I built by hand.

The product is [Vector](https://vector.quest), a B2B onboarding tool I designed and built solo in TypeScript. When a customer meeting is transcribed, Vector's agent reads it and proposes task drafts: create this, update that, mark this done. Every draft waits in an inbox for a human. Vector logs each model call to its own table and shows cost, latency and failures on an admin page I designed.

This repo is the same pipeline, written the Mastra way, on Vector's demo data (all fictional).

## What's here

| Path | What it is |
| --- | --- |
| `src/mastra/vector/context.ts` | Vector's onboarding world (12 companies, tasks, phases, contacts) and the deterministic meeting matcher. No AI. |
| `src/mastra/vector/agents.ts` | Vector's two passes as two agents: extraction (structured output) and decision (tools). Same prompts, same model. |
| `src/mastra/vector/tools.ts` | The four draft tools, now Zod schemas. In Vector they were hand-written JSON Schema. |
| `src/mastra/vector/workflow.ts` | `meeting-to-drafts`: build context, extract, decide. Three spans in Studio instead of one webhook handler. |
| `src/mastra/vector/scorers.ts` | Two deterministic scorers: did every action item get a draft, and does every quoted source exist in the transcript. |
| `src/mastra/vector/data/` | 27 meeting transcripts and the onboarding snapshot, generated from Vector's fixtures. |
| `scripts/seed-dataset.mjs` | Seeds the 27 meetings as a dataset so experiments can run against them. |

The starter agent from `create-mastra` is left as it came.

## Run it

```bash
cp .env.example .env        # add ANTHROPIC_API_KEY
npm install
npm run dev                 # Studio at http://localhost:4111
node scripts/seed-dataset.mjs
```

Then in Studio: Workflows, meeting-to-drafts, run with `{ "slug": "01-kickoff-modal" }`. Or Datasets, vector-meetings, Run Experiment with both scorers.

From the terminal:

```bash
npx mastra api workflow run start meeting-to-drafts '{"inputData":{"slug":"01-kickoff-modal"}}'
```

## What I noticed

Written up separately as part of a job application. Short version: the framework is good and the types earn their keep. Studio needs a designer, which is the job.

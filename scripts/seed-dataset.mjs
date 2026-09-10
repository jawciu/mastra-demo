// Seeds the "vector-meetings" dataset into a running Mastra server (default localhost:4111).
// Each item: input { slug } for the meeting-to-drafts workflow, groundTruth = Miniti's action items.
// Usage: node scripts/seed-dataset.mjs [baseUrl]
import { MEETINGS } from '../src/mastra/vector/data/meetings.ts';

const base = (process.argv[2] ?? 'http://localhost:4111') + '/api';
const json = (r) => r.ok ? r.json() : r.text().then((t) => { throw new Error(`${r.status} ${r.url}: ${t}`); });

const existing = await fetch(`${base}/datasets`).then(json);
const list = existing.datasets ?? existing;
let dataset = (Array.isArray(list) ? list : []).find((d) => d.name === 'vector-meetings');
if (!dataset) {
  dataset = await fetch(`${base}/datasets`, {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      name: 'vector-meetings',
      description: "27 Miniti meetings from Vector's demo data. Ground truth = the action items Miniti pre-extracted.",
      targetType: 'workflow', targetIds: ['meeting-to-drafts'],
      scorerIds: ['draftCoverage', 'quoteFaithfulness'],
    }),
  }).then(json);
  console.log('created dataset', dataset.id);
} else {
  console.log('dataset exists', dataset.id);
}
const items = MEETINGS.map((m) => ({
  externalId: m.slug,
  input: { slug: m.slug },
  groundTruth: { expectedActionItems: m.action_items, title: m.title },
}));
const res = await fetch(`${base}/datasets/${dataset.id}/items/batch`, {
  method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ items }),
}).then(json);
console.log('added', Array.isArray(res) ? res.length : (res.items?.length ?? JSON.stringify(res).slice(0, 200)), 'items');
console.log(`Studio: http://localhost:4111/datasets/${dataset.id}`);

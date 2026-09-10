// Generated from Vector's demo fixtures (fictional data). Do not edit by hand.
export const MEETINGS = [
 {
  "id": "5323FBBB-B5CE-4FA1-A54E-AEDA0F7E211C",
  "title": "Vector × Modal — implementation kickoff",
  "duration_seconds": 3145,
  "language": "en",
  "summary": "Kickoff for the Modal implementation. Agreed an 8-week timeline to go-live with the analytics platform on top of their existing dbt Core project (GitHub, ~140 models on Snowflake). Priya wants self-serve dashboards for engineering leadership first; the AI analyst pilot comes after the semantic layer is trustworthy. Immediate blockers: read-only Snowflake service account and repo access for Vector.",
  "action_items": [
   "Erin to provision a read-only Snowflake service account scoped to the ANALYTICS schema by Wednesday",
   "Theo to send the Vector Cloud static IP list for Modal's warehouse network policy",
   "Jonas to grant Vector read access to the dbt repo on GitHub",
   "Maya to share the 8-week implementation plan and weekly sync invite"
  ],
  "key_decisions": [
   "Go-live target set at 8 weeks from today",
   "Phase 1 audience is engineering leadership dashboards; AI analyst pilot deferred to phase 2",
   "Weekly sync every Tuesday at 4pm CET"
  ],
  "topics": [
   "kickoff",
   "snowflake",
   "dbt project",
   "timeline",
   "service account"
  ],
  "discussion_flow": [
   "intros",
   "current stack walkthrough",
   "goals and success criteria",
   "timeline",
   "technical prerequisites",
   "next steps"
  ],
  "notes": "Strong data team — Jonas maintains the dbt project solo and knows it inside out. Erin owns Snowflake and Okta. Priya is the exec sponsor and wants weekly progress visibility.",
  "speaker_count": 5,
  "speaker_names": {
   "-1": "You",
   "0": "Priya Raman",
   "1": "Jonas Beck",
   "2": "Erin Castillo",
   "3": "Theo Okonkwo"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Thanks everyone for making time. Goal for today is to align on what success looks like and unblock the technical setup so Theo can start this week.",
    "timestamp": 4.2
   },
   {
    "speaker": "Priya Raman",
    "text": "Great. From our side the headline is that engineering leadership is flying blind — every metrics question turns into a notebook someone runs by hand.",
    "timestamp": 21.8
   },
   {
    "speaker": "You",
    "text": "That's the exact pattern we see a lot. Can you walk us through the current stack?",
    "timestamp": 43.0
   },
   {
    "speaker": "Jonas Beck",
    "text": "Sure. Everything lands in Snowflake, dbt Core project on GitHub, about a hundred and forty models. CI runs on merge to main. It's healthy — tests pass, docs are decent.",
    "timestamp": 55.6
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "That's a great starting point. If the project compiles clean we can have the semantic layer scaffolded within days of getting repo access.",
    "timestamp": 92.4
   },
   {
    "speaker": "Erin Castillo",
    "text": "What exactly do you need from the warehouse side?",
    "timestamp": 118.0
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "A read-only service account scoped to your ANALYTICS schema, and our static egress IPs added to your network policy. I'll send the IP list right after this call.",
    "timestamp": 126.5
   },
   {
    "speaker": "Erin Castillo",
    "text": "Fine on both. I can have the service account done by Wednesday. Network policy change goes through a quick review but it's routine.",
    "timestamp": 158.3
   },
   {
    "speaker": "You",
    "text": "Perfect. Jonas, for the repo — read access for our GitHub app is enough, we never push to your repo.",
    "timestamp": 187.9
   },
   {
    "speaker": "Jonas Beck",
    "text": "Easy, I'll add it today. One question — do you build on top of our existing metrics definitions or do we redefine everything?",
    "timestamp": 201.2
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "We read what you have. Where you already have .yml metric definitions we import them; the gaps we fill together in a working session.",
    "timestamp": 219.7
   },
   {
    "speaker": "Priya Raman",
    "text": "On scope — I want leadership dashboards first. Deployment velocity, GPU utilisation revenue, top customer accounts. The AI analyst thing is exciting but I don't want it answering questions off a semantic layer we don't trust yet.",
    "timestamp": 258.1
   },
   {
    "speaker": "You",
    "text": "Completely agree, that's our recommended order anyway. Semantic layer first, dashboards second, AI analyst pilot to a small group once parity is proven.",
    "timestamp": 297.5
   },
   {
    "speaker": "Priya Raman",
    "text": "Then let's say eight weeks to go-live for the dashboard tier. Is that realistic?",
    "timestamp": 330.0
   },
   {
    "speaker": "You",
    "text": "With a project in this shape, yes. The long pole is usually access provisioning, and Erin just volunteered to crush that this week.",
    "timestamp": 341.8
   },
   {
    "speaker": "Erin Castillo",
    "text": "No pressure.",
    "timestamp": 362.2
   },
   {
    "speaker": "You",
    "text": "Maya will send over the implementation plan and a weekly sync invite — proposing Tuesdays 4pm your time. Any objections?",
    "timestamp": 371.0
   },
   {
    "speaker": "Priya Raman",
    "text": "Tuesday works. Let's move.",
    "timestamp": 392.6
   },
   {
    "speaker": "You",
    "text": "Great kickoff, everyone. Summary and action items will be in your inbox within the hour.",
    "timestamp": 401.3
   }
  ],
  "attendees": [
   {
    "email": "maya@vector.test",
    "name": "Maya Lindqvist",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "priya@modal.com",
    "name": "Priya Raman",
    "domain": "modal.com"
   },
   {
    "email": "jonas@modal.com",
    "name": "Jonas Beck",
    "domain": "modal.com"
   },
   {
    "email": "erin@modal.com",
    "name": "Erin Castillo",
    "domain": "modal.com"
   }
  ],
  "slug": "01-kickoff-modal",
  "daysAgo": 52
 },
 {
  "id": "148658D8-1AB1-4ED5-A0C8-667AD1A844CC",
  "title": "Flock Freight kickoff — Vector implementation",
  "duration_seconds": 2870,
  "language": "en",
  "summary": "Kickoff with Flock Freight. They run dbt on BigQuery with Looker as the current BI layer and want to consolidate shipper-facing and internal reporting onto Vector, with Looker retired by end of quarter. Colin Marsh (Analytics Lead) is the internal champion and will drive the migration list. Main risks called out: Looker content sprawl (300+ saved Looks, most stale) and a finance close period in three weeks where the data team goes dark.",
  "action_items": [
   "Colin to export the Looker usage report and shortlist the 20 dashboards actually worth migrating",
   "Jess to create the BigQuery service account for Vector with read access to the analytics dataset",
   "Ines to schedule the recurring Thursday sync and share the migration workbook",
   "Caroline to send the mutual go-live checklist template"
  ],
  "key_decisions": [
   "Migrate top-20 dashboards only; everything else is archived, not migrated",
   "Looker sunset target is end of quarter",
   "Colin is the single point of contact for content decisions"
  ],
  "topics": [
   "kickoff",
   "bigquery",
   "looker migration",
   "dbt",
   "timeline"
  ],
  "discussion_flow": [
   "intros",
   "current reporting landscape",
   "migration scope debate",
   "risks",
   "roles",
   "next steps"
  ],
  "notes": "Colin is an enthusiastic champion — he pitched this internally for six months. Watch the finance close window in ~3 weeks; the data team will be unavailable for most of that week.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Colin Marsh",
   "1": "Jess Ortega",
   "2": "Ines Ferreira"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Welcome everyone. Colin, you've been championing this internally for a while — want to set the scene?",
    "timestamp": 6.1
   },
   {
    "speaker": "Colin Marsh",
    "text": "Happily. Short version: we've got dbt in good shape on BigQuery, but the BI layer on top is chaos. Three hundred plus saved Looks, nobody knows which ones are load-bearing.",
    "timestamp": 18.9
   },
   {
    "speaker": "You",
    "text": "Classic content sprawl. Our strong recommendation is to migrate the top twenty by usage and archive the rest — migrating everything just moves the mess.",
    "timestamp": 57.4
   },
   {
    "speaker": "Colin Marsh",
    "text": "Completely agree, and I've been saying the same thing. I'll pull the usage report this week and make the shortlist. I'm happy to be the bad guy on archiving.",
    "timestamp": 84.0
   },
   {
    "speaker": "Jess Ortega",
    "text": "From the platform side, what access do you need? Our BigQuery project has separate datasets for raw and analytics.",
    "timestamp": 112.7
   },
   {
    "speaker": "You",
    "text": "Read-only on the analytics dataset only — we never touch raw. A dedicated service account, and read access to the dbt repo so the semantic layer can import your metric definitions.",
    "timestamp": 129.3
   },
   {
    "speaker": "Jess Ortega",
    "text": "Fine. Service account is a same-day thing once I have your setup doc.",
    "timestamp": 164.8
   },
   {
    "speaker": "Ines Ferreira",
    "text": "I'll send the technical setup doc and a migration workbook today. Proposing Thursdays for the weekly sync?",
    "timestamp": 178.2
   },
   {
    "speaker": "Colin Marsh",
    "text": "Thursdays work. One thing to flag — finance close hits in about three weeks and my team basically disappears for that week. Plan around it.",
    "timestamp": 196.5
   },
   {
    "speaker": "You",
    "text": "Noted, we'll front-load the technical setup so that week is a natural pause. What's the appetite for the AI analyst features?",
    "timestamp": 224.9
   },
   {
    "speaker": "Colin Marsh",
    "text": "Curious but cautious. Shippers asking free-text questions about their own freight spend is the dream, but internal users first.",
    "timestamp": 248.0
   },
   {
    "speaker": "You",
    "text": "Sensible. We'll scope an internal pilot group once the semantic layer is validated. Target for Looker sunset?",
    "timestamp": 279.4
   },
   {
    "speaker": "Colin Marsh",
    "text": "End of quarter. Leadership already approved not renewing the contract, so there's a real deadline behind this one.",
    "timestamp": 301.8
   },
   {
    "speaker": "You",
    "text": "A real deadline is the best project manager. Let's recap actions: Colin owns the top-20 shortlist, Jess the service account, Ines sends the sync invite and workbook, and I'll get you our go-live checklist.",
    "timestamp": 330.2
   },
   {
    "speaker": "Jess Ortega",
    "text": "Sounds right.",
    "timestamp": 368.5
   },
   {
    "speaker": "Colin Marsh",
    "text": "Great to finally get this moving. Thanks all.",
    "timestamp": 374.1
   }
  ],
  "attendees": [
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "ines@vector.test",
    "name": "Ines Ferreira",
    "domain": "vector.test"
   },
   {
    "email": "colin@flockfreight.com",
    "name": "Colin Marsh",
    "domain": "flockfreight.com"
   },
   {
    "email": "jess@flockfreight.com",
    "name": "Jess Ortega",
    "domain": "flockfreight.com"
   }
  ],
  "slug": "02-kickoff-flockfreight",
  "daysAgo": 49
 },
 {
  "id": "5870711D-CE91-47F8-A227-05F41FF8796F",
  "title": "Function Health × Vector — onboarding kickoff",
  "duration_seconds": 3310,
  "language": "en",
  "summary": "Kickoff with Function Health. Their Snowflake instance holds lab-result-adjacent data, so nothing connects until their infosec team completes a vendor security review — Miriam Lowe owns that process and estimates two to three weeks. Agreed to run the security review and the non-connected setup (dbt repo walkthrough, metric definitions on sample data) in parallel so the timeline doesn't fully stall. Rachel wants member-growth and lab-operations dashboards as the first deliverable.",
  "action_items": [
   "Miriam to open the vendor security review ticket and send Vector the security questionnaire",
   "Caroline to return the completed questionnaire with the SOC 2 Type II report attached",
   "David to walk Theo through the dbt project structure in a working session next week",
   "Maya to draft a phased plan that keeps non-connected workstreams moving during the review"
  ],
  "key_decisions": [
   "No warehouse connection of any kind until the security review clears — hard gate from infosec",
   "Semantic layer design will proceed on sample data in parallel with the review",
   "First dashboard scope: member growth and lab operations"
  ],
  "topics": [
   "kickoff",
   "security review",
   "snowflake",
   "compliance",
   "dbt"
  ],
  "discussion_flow": [
   "intros",
   "goals",
   "data sensitivity and compliance gate",
   "parallel workstream plan",
   "next steps"
  ],
  "notes": "Health data means infosec is a hard gate here, not a formality. Miriam was clear that the review queue is deep and escalation goes through their CISO. Rachel is pragmatic and wants us to keep momentum on everything that doesn't touch the warehouse.",
  "speaker_count": 5,
  "speaker_names": {
   "-1": "You",
   "0": "Rachel Kim",
   "1": "David Osei",
   "2": "Miriam Lowe",
   "3": "Theo Okonkwo"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Thanks for joining, everyone. We know health data raises the stakes here, so we've brought our security documentation to the kickoff rather than waiting to be asked.",
    "timestamp": 5.5
   },
   {
    "speaker": "Rachel Kim",
    "text": "Appreciated. Quick context: we run everything on Snowflake and dbt, and the analytics backlog is enormous — member growth, lab operations, panel utilisation. The team is drowning in ad-hoc requests.",
    "timestamp": 24.3
   },
   {
    "speaker": "Miriam Lowe",
    "text": "Before we get into any of that I need to set expectations. Any vendor touching our warehouse goes through a full security review. Lab results are in there. No connection happens before that clears — no exceptions.",
    "timestamp": 68.9
   },
   {
    "speaker": "You",
    "text": "Understood, and we'd expect nothing less. What does the review involve and what's the realistic timeline?",
    "timestamp": 102.4
   },
   {
    "speaker": "Miriam Lowe",
    "text": "Our questionnaire, your SOC 2 report, a data-flow diagram, and sign-off from our CISO. The queue is deep right now — I'd say two to three weeks if your responses are clean.",
    "timestamp": 116.0
   },
   {
    "speaker": "You",
    "text": "We'll turn the questionnaire around within two business days of receiving it, SOC 2 Type II attached. Theo, what can move in parallel without a connection?",
    "timestamp": 154.7
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Quite a lot. David can walk me through the dbt project — reading the repo doesn't touch the warehouse. We can design the semantic layer and even prototype metric definitions against sample data.",
    "timestamp": 175.2
   },
   {
    "speaker": "David Osei",
    "text": "Repo access I can grant today, that's just GitHub. The project is around ninety models, staging and marts split cleanly.",
    "timestamp": 213.6
   },
   {
    "speaker": "Miriam Lowe",
    "text": "Repo access is fine as long as no seed files contain real member data. Please verify that, David.",
    "timestamp": 239.1
   },
   {
    "speaker": "David Osei",
    "text": "They don't, but I'll double-check and strip anything questionable.",
    "timestamp": 254.8
   },
   {
    "speaker": "Rachel Kim",
    "text": "So the shape is: security review runs its course, and meanwhile you two design the semantic layer on sample data so we're ready to connect the moment Miriam signs off?",
    "timestamp": 270.3
   },
   {
    "speaker": "You",
    "text": "Exactly. The review becomes the critical path but not a dead stop. Maya will draft the phased plan reflecting that.",
    "timestamp": 296.9
   },
   {
    "speaker": "Rachel Kim",
    "text": "Good. On outcomes — the first thing leadership will ask for is the member growth dashboard. If we nail that, everything else gets easier internally.",
    "timestamp": 322.5
   },
   {
    "speaker": "You",
    "text": "Then that's our flagship deliverable. Miriam, can you open the review ticket this week and send us the questionnaire?",
    "timestamp": 351.0
   },
   {
    "speaker": "Miriam Lowe",
    "text": "I'll open it tomorrow. Fair warning — I have four other vendor reviews in the queue ahead of you.",
    "timestamp": 367.4
   },
   {
    "speaker": "You",
    "text": "Understood. We'll be the fastest questionnaire response you've ever seen. Thanks everyone — recap and plan to follow.",
    "timestamp": 384.2
   }
  ],
  "attendees": [
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "maya@vector.test",
    "name": "Maya Lindqvist",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "rachel@functionhealth.com",
    "name": "Rachel Kim",
    "domain": "functionhealth.com"
   },
   {
    "email": "david@functionhealth.com",
    "name": "David Osei",
    "domain": "functionhealth.com"
   },
   {
    "email": "miriam@functionhealth.com",
    "name": "Miriam Lowe",
    "domain": "functionhealth.com"
   }
  ],
  "slug": "03-kickoff-functionhealth",
  "daysAgo": 47
 },
 {
  "id": "E62C0740-9D9A-443C-BF0F-9B0D8956519E",
  "title": "Loop Returns implementation kickoff",
  "duration_seconds": 2705,
  "language": "en",
  "summary": "Kickoff with Loop Returns. Snowflake plus dbt Cloud, currently reporting out of Tableau workbooks the merchants team doesn't trust because numbers drift between workbooks. Primary goal is a single governed source of truth for merchant retention and refund metrics, with self-serve exploration for the merchant success team. Dana sponsors; Marcus is hands-on with dbt.",
  "action_items": [
   "Marcus to provision the Snowflake read-only service account against the ANALYTICS database",
   "Marcus to invite Vector's GitHub app to the dbt repo",
   "Sam to send the semantic layer workshop agenda for next week",
   "Dana to nominate 3 pilot users from the merchant success team"
  ],
  "key_decisions": [
   "Success metric for the project: merchant success team self-serves weekly reporting without analyst involvement",
   "Refund and retention metric definitions must be signed off by finance before dashboards ship",
   "Weekly sync on Wednesdays"
  ],
  "topics": [
   "kickoff",
   "snowflake",
   "dbt cloud",
   "tableau",
   "metric governance"
  ],
  "discussion_flow": [
   "intros",
   "why now",
   "stack overview",
   "governance requirements",
   "pilot group",
   "next steps"
  ],
  "notes": "The trust problem is the story here: three Tableau workbooks compute refund rate three different ways. Finance sign-off on definitions is a hard requirement from Dana.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Dana Whitmore",
   "1": "Marcus Oyelaran",
   "2": "Caroline Jaworsky"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Thanks for making time, both. Dana, you said something in the sales cycle that stuck with me — 'we have three versions of refund rate and they're all wrong'. Start there?",
    "timestamp": 7.8
   },
   {
    "speaker": "Dana Whitmore",
    "text": "Ha, painfully accurate. Three Tableau workbooks, three different refund rate calculations, and the merchant success team has stopped trusting all of them. Every QBR starts with an argument about whose number is right.",
    "timestamp": 22.4
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "The dbt side is actually solid — fct_orders and fct_returns are well tested. The drift happens downstream where each workbook re-implements the logic on top.",
    "timestamp": 61.0
   },
   {
    "speaker": "You",
    "text": "Which is exactly what a semantic layer kills. Define refund rate once in the dbt project, every surface reads the same definition. That's the core of what we'll build in week one and two.",
    "timestamp": 94.7
   },
   {
    "speaker": "Dana Whitmore",
    "text": "One hard requirement: finance signs off on the definitions before anything ships to the merchant success team. I'm not relitigating refund rate a fourth time.",
    "timestamp": 133.2
   },
   {
    "speaker": "You",
    "text": "Completely reasonable — we'll build the sign-off into the plan as an explicit gate. Marcus, on access: read-only Snowflake service account and repo access for our GitHub app.",
    "timestamp": 160.5
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "Both easy. I'll do the service account against the ANALYTICS database today and the GitHub invite right after this call.",
    "timestamp": 190.9
   },
   {
    "speaker": "Caroline Jaworsky",
    "text": "That would make you the fastest-provisioning customer this quarter, for the record.",
    "timestamp": 214.3
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "Challenge accepted.",
    "timestamp": 222.0
   },
   {
    "speaker": "You",
    "text": "Dana, for the pilot — who actually explores data day-to-day on the merchant success side?",
    "timestamp": 228.6
   },
   {
    "speaker": "Dana Whitmore",
    "text": "I'll nominate three of the senior MS folks. If they can answer their own retention questions without filing an analyst ticket, this project pays for itself.",
    "timestamp": 244.1
   },
   {
    "speaker": "You",
    "text": "That's our success metric then — MS self-serves weekly reporting, zero analyst tickets. Sam will send the semantic layer workshop agenda; proposing Wednesdays for the weekly sync.",
    "timestamp": 275.8
   },
   {
    "speaker": "Dana Whitmore",
    "text": "Wednesdays work. Good energy on this one — let's keep it.",
    "timestamp": 309.4
   },
   {
    "speaker": "You",
    "text": "Recap and actions in your inbox shortly. Thanks all.",
    "timestamp": 318.9
   }
  ],
  "attendees": [
   {
    "email": "sam@vector.test",
    "name": "Sam Whitfield",
    "domain": "vector.test"
   },
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "dana@loopreturns.com",
    "name": "Dana Whitmore",
    "domain": "loopreturns.com"
   },
   {
    "email": "marcus@loopreturns.com",
    "name": "Marcus Oyelaran",
    "domain": "loopreturns.com"
   }
  ],
  "slug": "04-kickoff-loopreturns",
  "daysAgo": 45
 },
 {
  "id": "9706A55A-C0FF-46D1-A7C8-72AF5D05F540",
  "title": "Modal technical working session — warehouse + repo connection",
  "duration_seconds": 3480,
  "language": "en",
  "summary": "Working session with Modal to complete the technical setup. Snowflake connection verified live on the call using the service account Erin provisioned; first full compile of the dbt project succeeded after fixing one env var default. Jonas and Theo scaffolded the first metrics block on fct_compute_usage.yml. Remaining setup item is the network policy entry for the EU failover IP range.",
  "action_items": [
   "Erin to add the EU failover IP range to the Snowflake network policy",
   "Jonas to merge the metrics block PR for fct_compute_usage.yml after CI passes",
   "Theo to enable scheduled hourly refresh once the failover IPs are allowed",
   "Theo to document the env var default fix in the shared runbook"
  ],
  "key_decisions": [
   "Metric definitions live in the dbt repo as .yml, owned by Modal — Vector reads, never writes",
   "Hourly refresh schedule for compute usage models, daily for the rest"
  ],
  "topics": [
   "snowflake connection",
   "dbt compile",
   "metrics block",
   "network policy"
  ],
  "discussion_flow": [
   "connection test",
   "compile troubleshooting",
   "metrics block pairing",
   "refresh scheduling",
   "wrap-up"
  ],
  "notes": "Compile initially failed on a missing env var default (SNOWFLAKE_WAREHOUSE fallback) — fixed in dbt_project.yml on the call. Jonas is very fast; pairing sessions with him are high-leverage.",
  "speaker_count": 3,
  "speaker_names": {
   "-1": "You",
   "0": "Jonas Beck",
   "1": "Erin Castillo"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Let's do this live — Erin, the service account credentials landed safely, so I'm going to run the connection test now.",
    "timestamp": 3.9
   },
   {
    "speaker": "Erin Castillo",
    "text": "Fingers crossed. Network policy has your primary IP range since Monday.",
    "timestamp": 16.2
   },
   {
    "speaker": "You",
    "text": "Connection is green. Warehouse, database, schema all resolve. Now pulling the repo and running the first compile.",
    "timestamp": 41.7
   },
   {
    "speaker": "Jonas Beck",
    "text": "This is the moment of truth for a hundred and forty models.",
    "timestamp": 68.0
   },
   {
    "speaker": "You",
    "text": "Compile error — it can't resolve SNOWFLAKE_WAREHOUSE. Your profiles rely on an env var we don't inject.",
    "timestamp": 95.5
   },
   {
    "speaker": "Jonas Beck",
    "text": "Ah right, CI sets that. Give it a default in dbt_project.yml — one line. Pushing now.",
    "timestamp": 118.3
   },
   {
    "speaker": "You",
    "text": "Re-running... and that's a clean compile. A hundred and forty-two models, zero errors. Nice project, honestly.",
    "timestamp": 176.9
   },
   {
    "speaker": "Jonas Beck",
    "text": "It's had love. OK, metrics next?",
    "timestamp": 204.4
   },
   {
    "speaker": "You",
    "text": "Yes — let's scaffold the first metrics block on fct_compute_usage. I'll share my screen and we'll write the .yml together so your team owns the pattern.",
    "timestamp": 213.0
   },
   {
    "speaker": "Jonas Beck",
    "text": "So gpu_hours as a sum measure, active_workspaces as count distinct, and compute_revenue with the filter on billable is true. That maps cleanly.",
    "timestamp": 258.6
   },
   {
    "speaker": "You",
    "text": "Exactly. Open a PR with this block, and once CI passes and it merges, those three metrics show up in Vector automatically on the next sync.",
    "timestamp": 301.2
   },
   {
    "speaker": "Jonas Beck",
    "text": "PR is up. I love that the definition lives in our repo — that was a selling point internally.",
    "timestamp": 340.8
   },
   {
    "speaker": "Erin Castillo",
    "text": "One thing from me before we wrap — your connection doc mentions an EU failover IP range that I haven't added yet. Do I need to?",
    "timestamp": 371.5
   },
   {
    "speaker": "You",
    "text": "Yes please, otherwise refreshes will fail whenever we route through the EU region. Same policy, second CIDR entry. I'll hold off enabling the hourly schedule until that's in.",
    "timestamp": 392.0
   },
   {
    "speaker": "Erin Castillo",
    "text": "I'll do it tomorrow morning and confirm in the channel.",
    "timestamp": 428.7
   },
   {
    "speaker": "You",
    "text": "Then we're basically done with technical setup a week early. I'll write up the env var fix in the runbook. Great session, both.",
    "timestamp": 441.3
   }
  ],
  "attendees": [
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "jonas@modal.com",
    "name": "Jonas Beck",
    "domain": "modal.com"
   },
   {
    "email": "erin@modal.com",
    "name": "Erin Castillo",
    "domain": "modal.com"
   }
  ],
  "slug": "05-technical-modal",
  "daysAgo": 40
 },
 {
  "id": "76EBBAEA-609B-4DB6-8A0C-2632ACB392CF",
  "title": "Flock Freight weekly sync",
  "duration_seconds": 1740,
  "language": "en",
  "summary": "Healthy weekly sync. BigQuery service account and dbt repo connection are done; first compile clean. Colin finished the Looker usage audit — top-20 shortlist is ready and leadership approved the archive-the-rest approach. Next up: define the first ten metrics in the dbt project, starting with shipment margin and carrier utilisation. Finance close starts next week, so the following sync is cancelled.",
  "action_items": [
   "Colin to draft the first 10 metric definitions in the dbt .yml with Theo's review",
   "Ines to move the migration workbook items for the top-20 dashboards into the project plan",
   "Colin to send the archive announcement to Looker users before close week",
   "Skip next week's sync (finance close) — resume the week after"
  ],
  "key_decisions": [
   "Top-20 dashboard shortlist approved by leadership; remaining Looker content will be archived with 30 days notice",
   "Next week's sync cancelled for finance close"
  ],
  "topics": [
   "weekly sync",
   "looker audit",
   "metric definitions",
   "finance close"
  ],
  "discussion_flow": [
   "setup status",
   "audit results",
   "metrics planning",
   "close week logistics"
  ],
  "notes": "Colin remains highly engaged — he did the usage audit ahead of schedule. Watch for momentum loss during close week.",
  "speaker_count": 3,
  "speaker_names": {
   "-1": "You",
   "0": "Colin Marsh",
   "1": "Jess Ortega"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Morning both. Status from our side: service account works, repo is connected, and the first compile came back clean on Friday. Technical setup is done.",
    "timestamp": 5.2
   },
   {
    "speaker": "Jess Ortega",
    "text": "Nice. That closes out my items for this phase, I think.",
    "timestamp": 28.8
   },
   {
    "speaker": "Colin Marsh",
    "text": "And I come bearing the Looker usage audit. Of the three hundred and twelve saved pieces of content, ninety-one percent haven't been opened in ninety days. The top twenty covers essentially all real usage.",
    "timestamp": 39.4
   },
   {
    "speaker": "You",
    "text": "That's even more concentrated than usual. Did leadership bless the archive plan?",
    "timestamp": 82.1
   },
   {
    "speaker": "Colin Marsh",
    "text": "Yes — approved in Monday's ops review. I'll send the archive announcement with thirty days notice, but I want it out before close week so it's not buried.",
    "timestamp": 94.6
   },
   {
    "speaker": "You",
    "text": "Good call. Next milestone is the metric definitions — the first ten in the dbt yml. Shipment margin and carrier utilisation are the obvious anchors. Colin, do you want to draft and have Theo review?",
    "timestamp": 130.9
   },
   {
    "speaker": "Colin Marsh",
    "text": "Yes, I want my fingerprints on those definitions. I'll draft this week; margin logic has some subtlety around shared truckload consolidation that I should write down properly anyway.",
    "timestamp": 168.3
   },
   {
    "speaker": "You",
    "text": "Perfect. Ines will fold the top-20 migration into the project plan as individual items so we can track dashboard-by-dashboard.",
    "timestamp": 209.7
   },
   {
    "speaker": "Colin Marsh",
    "text": "One admin thing — finance close starts Monday. The whole data team is on close support, so let's cancel next week's sync rather than have me stare at you apologetically.",
    "timestamp": 234.5
   },
   {
    "speaker": "You",
    "text": "Cancelled. We'll keep building on our side — the migration scaffolding doesn't need you until definitions land. Anything else?",
    "timestamp": 266.0
   },
   {
    "speaker": "Jess Ortega",
    "text": "Nothing from me.",
    "timestamp": 285.4
   },
   {
    "speaker": "Colin Marsh",
    "text": "All good. Talk in two weeks.",
    "timestamp": 289.9
   }
  ],
  "attendees": [
   {
    "email": "ines@vector.test",
    "name": "Ines Ferreira",
    "domain": "vector.test"
   },
   {
    "email": "colin@flockfreight.com",
    "name": "Colin Marsh",
    "domain": "flockfreight.com"
   },
   {
    "email": "jess@flockfreight.com",
    "name": "Jess Ortega",
    "domain": "flockfreight.com"
   }
  ],
  "slug": "06-sync-flockfreight",
  "daysAgo": 35
 },
 {
  "id": "34F0DAC4-7E18-43CF-9FCB-831FD18AC18B",
  "title": "Function Health weekly sync",
  "duration_seconds": 1595,
  "language": "en",
  "summary": "Weekly sync with Function Health. Vector returned the security questionnaire in two days with the SOC 2 Type II report and a data-flow diagram; the review is now with Miriam's infosec queue awaiting CISO sign-off. Parallel workstream is going well — Theo and David finished the semantic layer design on sample data and drafted metric definitions for member growth. Everything downstream (service account, warehouse connection, live dashboards) remains gated on the review.",
  "action_items": [
   "Miriam to chase the review ticket in this week's infosec triage and report back",
   "David to open the draft PR with the member growth metrics block so it's ready to merge on approval",
   "Maya to prepare the connection runbook so cutover happens same-day when the review clears"
  ],
  "key_decisions": [
   "Member growth metrics PR will be staged as a draft and merged the day the review clears"
  ],
  "topics": [
   "weekly sync",
   "security review",
   "semantic layer",
   "member growth metrics"
  ],
  "discussion_flow": [
   "review status",
   "parallel workstream progress",
   "staging plan",
   "next steps"
  ],
  "notes": "Review submitted and clean; now purely a queue problem on their side. Rachel is starting to feel timeline pressure from leadership.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Rachel Kim",
   "1": "David Osei",
   "2": "Miriam Lowe"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Hi all. Quick status from us: questionnaire went back to Miriam in two business days as promised, with SOC 2 and the data-flow diagram attached.",
    "timestamp": 4.8
   },
   {
    "speaker": "Miriam Lowe",
    "text": "Confirmed received, and honestly one of the cleaner submissions I've processed. It's in the queue for CISO review now. I can't commit to a date — there are three vendors ahead of you.",
    "timestamp": 27.5
   },
   {
    "speaker": "Rachel Kim",
    "text": "Is there anything that gets it moving faster? Leadership asked me twice this week when the member growth dashboard lands.",
    "timestamp": 63.0
   },
   {
    "speaker": "Miriam Lowe",
    "text": "I'll flag it in Thursday's triage as onboarding-blocking. That's the legitimate lever. Please don't go around the process — that resets the clock.",
    "timestamp": 84.2
   },
   {
    "speaker": "You",
    "text": "Understood, we won't. Meanwhile the parallel track is healthy — Theo, David, where did the working session land?",
    "timestamp": 112.9
   },
   {
    "speaker": "David Osei",
    "text": "Really good shape. Semantic layer design is done on sample data. I've got the member growth metrics drafted — new members, activation rate, retest bookings — as a metrics block ready to go.",
    "timestamp": 128.4
   },
   {
    "speaker": "You",
    "text": "Can you open that as a draft PR now? Then the day Miriam's review clears, we merge, connect, and the dashboard goes live the same day rather than starting a two-week build.",
    "timestamp": 170.6
   },
   {
    "speaker": "David Osei",
    "text": "Draft PR by tomorrow. I like the same-day cutover framing.",
    "timestamp": 204.1
   },
   {
    "speaker": "Rachel Kim",
    "text": "That framing helps me too — I can tell leadership everything is staged and the review is the only gate.",
    "timestamp": 218.8
   },
   {
    "speaker": "You",
    "text": "Exactly the message. Maya will prep the connection runbook so cutover day is boring. Miriam, we'll hear from you after Thursday triage?",
    "timestamp": 242.3
   },
   {
    "speaker": "Miriam Lowe",
    "text": "I'll post in the shared channel either way.",
    "timestamp": 268.0
   },
   {
    "speaker": "You",
    "text": "Perfect. Short and productive — see everyone next week.",
    "timestamp": 276.5
   }
  ],
  "attendees": [
   {
    "email": "maya@vector.test",
    "name": "Maya Lindqvist",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "rachel@functionhealth.com",
    "name": "Rachel Kim",
    "domain": "functionhealth.com"
   },
   {
    "email": "david@functionhealth.com",
    "name": "David Osei",
    "domain": "functionhealth.com"
   },
   {
    "email": "miriam@functionhealth.com",
    "name": "Miriam Lowe",
    "domain": "functionhealth.com"
   }
  ],
  "slug": "07-sync-functionhealth",
  "daysAgo": 33
 },
 {
  "id": "85B5A1F4-6E70-46DB-8D28-B6832664C6A8",
  "title": "Loop Returns — semantic layer working session",
  "duration_seconds": 3620,
  "language": "en",
  "summary": "Working session with Marcus on the Loop Returns semantic layer. Added the metrics block to fct_orders.yml and fct_returns.yml: refund_rate, return_rate, exchange_rate, and net_revenue_retained, each with a single canonical definition. The refund_rate definition surfaced the exact discrepancy that plagued the Tableau workbooks — whether to count exchanges in the denominator — and the group resolved it pending finance sign-off. Draft dashboard wired to the new metrics for the finance review.",
  "action_items": [
   "Marcus to merge the fct_orders.yml and fct_returns.yml metrics PR after CI",
   "Sam to build the definition comparison sheet (old workbook logic vs new canonical) for the finance sign-off meeting",
   "Dana to book the finance sign-off meeting for next week"
  ],
  "key_decisions": [
   "refund_rate excludes exchanges from the numerator; exchange_rate is its own metric — pending finance ratification",
   "net_revenue_retained becomes the headline retention metric on the merchant dashboard"
  ],
  "topics": [
   "semantic layer",
   "metrics block",
   "refund rate",
   "fct_orders",
   "finance sign-off"
  ],
  "discussion_flow": [
   "metrics scaffolding",
   "refund rate definition debate",
   "exchange handling",
   "dashboard preview",
   "sign-off prep"
  ],
  "notes": "The exchanges-in-denominator question was the root cause of the three-workbooks problem all along. Great session — Marcus writes very clean yml.",
  "speaker_count": 2,
  "speaker_names": {
   "-1": "You",
   "0": "Marcus Oyelaran"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Ready to make refund rate mean one thing? Screen is shared — we're starting in fct_orders.yml.",
    "timestamp": 4.4
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "Been ready for two years. Let's do it.",
    "timestamp": 15.0
   },
   {
    "speaker": "You",
    "text": "First the easy ones: total_orders as a count, gross_revenue as a sum on order_total. Then the interesting one — refund_rate. What goes in the numerator?",
    "timestamp": 24.7
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "And here's the whole war. Workbook A counts exchanges as refunds, workbook B doesn't, workbook C counts them at the item level. That's why the three numbers never matched.",
    "timestamp": 58.3
   },
   {
    "speaker": "You",
    "text": "So the discrepancy was never a data bug — it was three unstated definitions. What does the business actually want refund_rate to mean?",
    "timestamp": 96.8
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "Money out the door. An exchange keeps the revenue, so it shouldn't count as a refund. Exchanges deserve their own metric.",
    "timestamp": 121.4
   },
   {
    "speaker": "You",
    "text": "Agreed — so refund_rate is refunded orders excluding exchanges over completed orders, and we add exchange_rate as a separate measure. Writing both blocks now.",
    "timestamp": 149.0
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "Add a description field on each saying exactly that, please. The definition being readable in the repo is half the point.",
    "timestamp": 187.6
   },
   {
    "speaker": "You",
    "text": "Done, with the rationale in the description. Now fct_returns.yml — return_rate and net_revenue_retained. For NRR I'm doing revenue kept after refunds over gross, as a ratio metric.",
    "timestamp": 210.2
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "That one's the headline for the merchant dashboard. Dana will want it front and centre.",
    "timestamp": 256.9
   },
   {
    "speaker": "You",
    "text": "Compiling... clean. Metrics show up in the catalog. Let me wire a quick draft dashboard so finance reviews real numbers instead of yml.",
    "timestamp": 278.5
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "The refund_rate here reads 4.1 percent versus 5.3 in the old workbook A. That difference is exactly the exchanges. Finance is going to ask about that gap.",
    "timestamp": 324.0
   },
   {
    "speaker": "You",
    "text": "Good catch — I'll build a comparison sheet showing old logic versus new so the sign-off meeting has the reconciliation in front of them. Nothing kills trust like an unexplained delta.",
    "timestamp": 361.7
   },
   {
    "speaker": "Marcus Oyelaran",
    "text": "Perfect. I'll get the PR through CI today and ask Dana to book finance for next week.",
    "timestamp": 402.3
   },
   {
    "speaker": "You",
    "text": "Great session. One refund rate to rule them all.",
    "timestamp": 425.8
   }
  ],
  "attendees": [
   {
    "email": "sam@vector.test",
    "name": "Sam Whitfield",
    "domain": "vector.test"
   },
   {
    "email": "marcus@loopreturns.com",
    "name": "Marcus Oyelaran",
    "domain": "loopreturns.com"
   }
  ],
  "slug": "08-technical-loopreturns",
  "daysAgo": 30
 },
 {
  "id": "F0B36F65-6F5B-4D27-B3E1-1511476CF3FC",
  "title": "Huel weekly sync — subscription metrics + SSO",
  "duration_seconds": 1820,
  "language": "en",
  "summary": "Weekly sync with Huel. Subscription metrics (active subscribers, churn rate, reactivation rate, AOV) are merged and validated against last month's board pack — numbers reconcile. Dashboard build for the DTC team is 70% done. Okta SAML SSO config started but stuck on an attribute mapping mismatch; Oliver and Theo will pair on it Thursday. Freya raised early interest in the AI analyst for the CX team's ad-hoc questions.",
  "action_items": [
   "Oliver and Theo to pair on the Okta SAML attribute mapping Thursday",
   "Ines to share the AI analyst pilot one-pager with Freya",
   "Freya to review the draft DTC dashboard and comment by Friday",
   "Oliver to add the subscription cohort model to the nightly job"
  ],
  "key_decisions": [
   "Subscription metric definitions validated against the board pack — signed off",
   "SSO must be live before the DTC team rollout; password logins are a no-go for wider release"
  ],
  "topics": [
   "weekly sync",
   "subscription metrics",
   "okta sso",
   "dashboard build",
   "ai analyst"
  ],
  "discussion_flow": [
   "metrics validation",
   "dashboard progress",
   "sso blocker",
   "ai analyst interest",
   "actions"
  ],
  "notes": "Healthy account. The SSO attribute mismatch is the only open technical issue — NameID format on the Okta side. Freya pulling the AI analyst conversation forward herself is a good sign.",
  "speaker_count": 3,
  "speaker_names": {
   "-1": "You",
   "0": "Freya Dalton",
   "1": "Oliver Nash"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Hello hello. Big week — the subscription metrics merged. Freya, did the validation against the board pack come out clean?",
    "timestamp": 5.1
   },
   {
    "speaker": "Freya Dalton",
    "text": "It did. Active subscribers, churn, reactivation — all within rounding of the January board numbers. I'm calling those definitions signed off.",
    "timestamp": 19.6
   },
   {
    "speaker": "You",
    "text": "Excellent. That unblocks the DTC dashboard, which is about seventy percent built. I'd love your comments on the draft by Friday if possible.",
    "timestamp": 52.3
   },
   {
    "speaker": "Freya Dalton",
    "text": "Will do. The cohort view is the one the team will live in, so I'll look hardest at that.",
    "timestamp": 78.9
   },
   {
    "speaker": "Oliver Nash",
    "text": "Related — the cohort model needs to go on the nightly job or that view will be stale by lunchtime. I'll sort the schedule this week.",
    "timestamp": 97.4
   },
   {
    "speaker": "You",
    "text": "Good. Now the less fun one: SSO. Where are we with Okta?",
    "timestamp": 121.0
   },
   {
    "speaker": "Oliver Nash",
    "text": "Stuck, mildly. The SAML assertion is coming through but Vector rejects it — I think the NameID format is set to unspecified when you expect email address. I've stared at the mapping screen long enough to want a second pair of eyes.",
    "timestamp": 133.7
   },
   {
    "speaker": "You",
    "text": "That's almost certainly it — we see that exact mismatch a lot with Okta defaults. Theo can pair with you Thursday and it should be a fifteen-minute fix.",
    "timestamp": 176.2
   },
   {
    "speaker": "Oliver Nash",
    "text": "Thursday works. Once it's green I'll switch off password logins per Freya's edict.",
    "timestamp": 204.5
   },
   {
    "speaker": "Freya Dalton",
    "text": "It's a firm edict — no wider rollout on passwords. Separate topic while I have you: the CX team keeps asking me one-off questions about subscriber behaviour. Is the AI analyst thing real enough for them yet?",
    "timestamp": 220.8
   },
   {
    "speaker": "You",
    "text": "It's real, and with your definitions now signed off you're actually a great candidate. Let me have Ines send you the pilot one-pager — the usual shape is a five-person pilot group with guardrails on which models it can query.",
    "timestamp": 251.4
   },
   {
    "speaker": "Freya Dalton",
    "text": "Send it over. If it saves my team the CX ticket queue, I'll be your loudest reference.",
    "timestamp": 292.0
   },
   {
    "speaker": "You",
    "text": "Noted and screenshotted. Recap: Thursday SSO pairing, dashboard comments Friday, cohort model on nightly, pilot one-pager to Freya. See you next week.",
    "timestamp": 310.6
   }
  ],
  "attendees": [
   {
    "email": "ines@vector.test",
    "name": "Ines Ferreira",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "freya@huel.com",
    "name": "Freya Dalton",
    "domain": "huel.com"
   },
   {
    "email": "oliver@huel.com",
    "name": "Oliver Nash",
    "domain": "huel.com"
   }
  ],
  "slug": "09-sync-huel",
  "daysAgo": 27
 },
 {
  "id": "95B7E943-052B-4784-8859-741338F6B4F9",
  "title": "Sylvera dashboard migration — working session 3",
  "duration_seconds": 3260,
  "language": "en",
  "summary": "Third migration working session with Sylvera. Rebuilt the carbon ratings coverage dashboard and the project pipeline dashboard on Vector; both now read from the semantic layer instead of bespoke Looker derived tables. Two Looker dashboards remain: portfolio exposure (complex, custom SQL) and the exec weekly. Agreed the portfolio exposure logic moves into dbt as a proper mart model rather than being ported as raw SQL. Parity checks against Looker are green for 7 of 9 dashboards.",
  "action_items": [
   "Tom to build stg_portfolio_exposure and the mart model in dbt to replace the Looker custom SQL",
   "Theo to rebuild the exec weekly dashboard once the exposure mart lands",
   "Amara to run the side-by-side parity review on the ratings coverage dashboard with her team",
   "Theo to add the two remaining dashboards to the parity tracker"
  ],
  "key_decisions": [
   "Portfolio exposure logic moves into dbt as a mart model — no raw SQL ports",
   "Parity sign-off will be dashboard-by-dashboard, tracked in the shared checklist"
  ],
  "topics": [
   "dashboard migration",
   "parity checks",
   "dbt mart model",
   "looker sunset"
  ],
  "discussion_flow": [
   "migration status",
   "ratings coverage rebuild",
   "portfolio exposure SQL problem",
   "mart model decision",
   "parity tracking"
  ],
  "notes": "7 of 9 dashboards at parity. The portfolio exposure custom SQL was 400 lines of window functions — moving it into dbt is more work now but the right call. Go-live is realistically 3-4 weeks out.",
  "speaker_count": 3,
  "speaker_names": {
   "-1": "You",
   "0": "Amara Diallo",
   "1": "Tom Hale"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Session three. Scoreboard first: seven of nine dashboards rebuilt and passing parity. Today I want to crack the two stragglers.",
    "timestamp": 4.6
   },
   {
    "speaker": "Amara Diallo",
    "text": "The ratings coverage rebuild looks great by the way — my team compared it against Looker on Friday and the numbers line up. I'll do the formal side-by-side this week so we can tick the sign-off box.",
    "timestamp": 22.9
   },
   {
    "speaker": "You",
    "text": "Perfect. Now, portfolio exposure. Tom, I opened the Looker dashboard and found four hundred lines of custom SQL with window functions inside a derived table. My condolences.",
    "timestamp": 58.7
   },
   {
    "speaker": "Tom Hale",
    "text": "Yeah, that's three years of accumulated 'just one more CTE'. It works, but nobody fully understands it anymore, including its author. Who is me.",
    "timestamp": 91.2
   },
   {
    "speaker": "You",
    "text": "The tempting move is to port the SQL as-is. I want to argue against that: this logic belongs in dbt as a proper mart model with tests, and the dashboard becomes a thin view on top.",
    "timestamp": 118.5
   },
   {
    "speaker": "Tom Hale",
    "text": "Agreed honestly — migrating it untested just relocates the risk. I can split it into a staging model and an exposure mart. Two days of work, maybe three with tests.",
    "timestamp": 157.0
   },
   {
    "speaker": "Amara Diallo",
    "text": "Does that delay go-live? The exec weekly depends on exposure numbers too.",
    "timestamp": 196.8
   },
   {
    "speaker": "You",
    "text": "It shifts the exec weekly rebuild behind the mart model, so roughly a week. But we skip a whole class of parity bugs — porting untestable SQL is how migrations go sideways late.",
    "timestamp": 211.3
   },
   {
    "speaker": "Amara Diallo",
    "text": "A predictable week now beats a mystery month later. Approved.",
    "timestamp": 248.9
   },
   {
    "speaker": "Tom Hale",
    "text": "I'll have stg_portfolio_exposure up for review by Thursday, mart and tests early next week.",
    "timestamp": 262.4
   },
   {
    "speaker": "You",
    "text": "And I'll rebuild the exec weekly the day the mart lands — most of the layout is reusable from the old one. That puts all nine dashboards on the parity tracker.",
    "timestamp": 285.0
   },
   {
    "speaker": "Amara Diallo",
    "text": "Which means go-live conversation soon. Can we get the checklist review on the calendar for a couple of weeks out?",
    "timestamp": 318.6
   },
   {
    "speaker": "You",
    "text": "Yes — I'll send a go-live review invite. If parity stays green we're looking at three to four weeks to switch off Looker.",
    "timestamp": 340.1
   },
   {
    "speaker": "Tom Hale",
    "text": "I've been waiting a year to write that decommission ticket.",
    "timestamp": 371.5
   },
   {
    "speaker": "You",
    "text": "Save it as a treat. Thanks both — actions in the recap.",
    "timestamp": 380.0
   }
  ],
  "attendees": [
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "amara@sylvera.com",
    "name": "Amara Diallo",
    "domain": "sylvera.com"
   },
   {
    "email": "tom@sylvera.com",
    "name": "Tom Hale",
    "domain": "sylvera.com"
   }
  ],
  "slug": "10-technical-sylvera",
  "daysAgo": 24
 },
 {
  "id": "1D816D0F-B837-4FA9-B3EC-953F20A38786",
  "title": "Function Health weekly sync — security review escalation",
  "duration_seconds": 1470,
  "language": "en",
  "summary": "Difficult sync. The security review has now been sitting with Function Health's infosec queue for nearly three weeks with no CISO sign-off; the flag in triage didn't move it. Everything downstream is still blocked: no service account, no warehouse connection, no live dashboards. Rachel committed to a direct escalation to the CISO with the exec sponsor CC'd. Vector offered a 30-minute architecture Q&A with the CISO to shortcut written back-and-forth. Timeline slips at least two weeks even in the best case.",
  "action_items": [
   "Rachel to escalate the security review directly to the CISO with the exec sponsor copied",
   "Miriam to send the CISO's open questions to Vector in writing today",
   "Caroline to offer two slots this week for the 30-minute CISO architecture Q&A",
   "Maya to revise the project plan with a two-week slip and share it before Friday"
  ],
  "key_decisions": [
   "Escalation goes exec-to-CISO rather than waiting another triage cycle",
   "Project plan officially slips two weeks; revised go-live to be confirmed after the review clears"
  ],
  "topics": [
   "security review",
   "escalation",
   "timeline slip",
   "blocked"
  ],
  "discussion_flow": [
   "review status",
   "impact on timeline",
   "escalation options",
   "revised plan"
  ],
  "notes": "Three weeks stuck. Nothing wrong with our submission — the CISO simply hasn't gotten to it and had two clarifying questions nobody forwarded to us. Rachel is frustrated but constructive. This account is at risk of losing exec momentum.",
  "speaker_count": 3,
  "speaker_names": {
   "-1": "You",
   "0": "Rachel Kim",
   "1": "Miriam Lowe"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Let's talk about the elephant. The review has been in the queue for nearly three weeks. Miriam, where does it actually stand?",
    "timestamp": 5.9
   },
   {
    "speaker": "Miriam Lowe",
    "text": "It's with the CISO for final sign-off and has been for eight days. He had two clarifying questions on your data-flow diagram — retention of query results, and where the metadata cache lives.",
    "timestamp": 21.4
   },
   {
    "speaker": "You",
    "text": "Those questions never reached us. We could have answered both the same day — query results aren't retained, and the metadata cache is region-pinned to your Snowflake region.",
    "timestamp": 59.8
   },
   {
    "speaker": "Miriam Lowe",
    "text": "That's fair criticism. They sat in his notes rather than coming back through the ticket. I'll send them to you in writing today.",
    "timestamp": 88.2
   },
   {
    "speaker": "Rachel Kim",
    "text": "Meanwhile I've had the member growth dashboard on 'next two weeks' for a month and my exec sponsor is asking whether this project is real. I need this unstuck.",
    "timestamp": 110.7
   },
   {
    "speaker": "You",
    "text": "Two suggestions. One: an exec-to-CISO escalation tends to move these queues more than another triage flag. Two: we offer your CISO a thirty-minute live architecture Q&A — verbal answers close loops that written rounds drag out.",
    "timestamp": 141.3
   },
   {
    "speaker": "Rachel Kim",
    "text": "I'll do the escalation today and copy our sponsor. Miriam, no offence to the process, but I'm going over it.",
    "timestamp": 189.6
   },
   {
    "speaker": "Miriam Lowe",
    "text": "None taken — escalation through the sponsor is part of the process. And the Q&A offer will help; he prefers talking to reading.",
    "timestamp": 208.0
   },
   {
    "speaker": "You",
    "text": "Then Caroline will send two slots for this week. Being honest about the plan: even if sign-off lands this week, we've lost enough runway that go-live slips about two weeks.",
    "timestamp": 232.5
   },
   {
    "speaker": "Rachel Kim",
    "text": "Understood. Give me the revised plan in writing before Friday — a real date I can defend beats an optimistic one I can't.",
    "timestamp": 264.9
   },
   {
    "speaker": "You",
    "text": "You'll have it. For what it's worth, everything on our side stays staged — the day this clears, connection and the metrics merge happen same-day.",
    "timestamp": 286.4
   },
   {
    "speaker": "Rachel Kim",
    "text": "That staging is the only reason I'm still calm. Let's get it done.",
    "timestamp": 311.8
   }
  ],
  "attendees": [
   {
    "email": "maya@vector.test",
    "name": "Maya Lindqvist",
    "domain": "vector.test"
   },
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "rachel@functionhealth.com",
    "name": "Rachel Kim",
    "domain": "functionhealth.com"
   },
   {
    "email": "miriam@functionhealth.com",
    "name": "Miriam Lowe",
    "domain": "functionhealth.com"
   }
  ],
  "slug": "11-sync-functionhealth",
  "daysAgo": 19
 },
 {
  "id": "7B074087-7625-4B21-8769-1E02D6BB8D2E",
  "title": "Flock Freight weekly sync",
  "duration_seconds": 1130,
  "language": "en",
  "summary": "Thin sync. Colin no-showed for the second consecutive week — finance close ended but he hasn't resurfaced; Jess joined alone and couldn't speak to the migration decisions. The first-10 metric definitions Colin was drafting haven't appeared, the archive announcement hasn't gone out, and the top-20 migration is stalled without his dashboard-by-dashboard input. Jess suspects he's been pulled onto an internal carrier-pricing project. Agreed Ines will reach Colin directly and, failing that, ask Dana-level management who now owns the migration decisions.",
  "action_items": [
   "Ines to email Colin directly to re-confirm he still owns the migration shortlist and metric definitions",
   "Jess to ask internally who is covering analytics decisions while Colin is on the pricing project",
   "Ines to propose a shortened catch-up call with Colin rather than waiting for next week's sync",
   "Hold the metrics workstream — do not draft definitions on Vector's side without customer ownership"
  ],
  "key_decisions": [
   "No proxy decisions: dashboard migration choices wait for Colin or a named replacement, not Vector guesses"
  ],
  "topics": [
   "weekly sync",
   "stalled migration",
   "champion unavailable",
   "metric definitions"
  ],
  "discussion_flow": [
   "attendance",
   "blocked items review",
   "root cause discussion",
   "re-engagement plan"
  ],
  "notes": "Champion risk is now real: Colin unresponsive for 2+ weeks, portal untouched since before close week, and his two critical deliverables (metric definitions, archive announcement) are stalled. Jess is helpful but explicitly not empowered to make content decisions.",
  "speaker_count": 2,
  "speaker_names": {
   "-1": "You",
   "0": "Jess Ortega"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Morning Jess. Just us again? I was hoping Colin would resurface now close week is over.",
    "timestamp": 4.1
   },
   {
    "speaker": "Jess Ortega",
    "text": "Just me, sorry. I pinged him an hour ago — nothing. Honestly I've barely seen him in the office channels either.",
    "timestamp": 14.8
   },
   {
    "speaker": "You",
    "text": "OK, let's be straight about impact. The first ten metric definitions were his; not started as far as we can tell. The archive announcement hasn't gone out. And the top-20 migration needs his call on each dashboard. All three are stalled.",
    "timestamp": 38.5
   },
   {
    "speaker": "Jess Ortega",
    "text": "That matches what I see. Between us — I think he got pulled onto the carrier pricing project after close. It's the CEO's pet initiative this quarter, so it eats people.",
    "timestamp": 79.3
   },
   {
    "speaker": "You",
    "text": "That would explain the silence. The thing is, this project's deadline is real too — the Looker contract non-renewal doesn't move just because attention did.",
    "timestamp": 114.6
   },
   {
    "speaker": "Jess Ortega",
    "text": "I know. I wish I could just make the calls, but I genuinely can't — I don't know which dashboards the ops team lives in. That's exactly the knowledge Colin has.",
    "timestamp": 140.2
   },
   {
    "speaker": "You",
    "text": "Understood, and we shouldn't guess on your behalf — wrong migrations are worse than late ones. Here's what I propose: Ines emails Colin directly today, warm but explicit about the three stalled items. If there's no response by Thursday, we ask his management who owns these decisions now.",
    "timestamp": 170.9
   },
   {
    "speaker": "Jess Ortega",
    "text": "Do that. And I'll quietly ask around about the pricing project staffing — if he's seconded for the quarter, better we all know now.",
    "timestamp": 221.5
   },
   {
    "speaker": "You",
    "text": "Agreed. Offer him a twenty-minute catch-up instead of the full sync too — lower the cost of re-engaging.",
    "timestamp": 248.0
   },
   {
    "speaker": "Jess Ortega",
    "text": "Good idea. Sorry this one's gone quiet — it started so well.",
    "timestamp": 271.4
   },
   {
    "speaker": "You",
    "text": "They usually come back. But two silent weeks is exactly when to act, not week six. Thanks for holding the fort, Jess.",
    "timestamp": 285.7
   }
  ],
  "attendees": [
   {
    "email": "ines@vector.test",
    "name": "Ines Ferreira",
    "domain": "vector.test"
   },
   {
    "email": "jess@flockfreight.com",
    "name": "Jess Ortega",
    "domain": "flockfreight.com"
   }
  ],
  "slug": "12-sync-flockfreight",
  "daysAgo": 16
 },
 {
  "id": "01173C33-57B6-4489-90E5-AB0DB1407047",
  "title": "Loop Returns weekly sync",
  "duration_seconds": 1988,
  "language": "en",
  "summary": "Weekly sync with Loop Returns. Semantic layer is in good shape — return-rate signed off, refund-latency still under debate with finance. The dashboard inventory slipped and is now the long pole because the exec KPI rebuild depends on it. Agreed Derek gets the top-20 Looker inventory over to Vector by Thursday so Sam can start the migration batches. Infosec review is moving; Priya has the SSO metadata request in flight.",
  "action_items": [
   "Derek to send the top-20 Looker dashboard inventory to Vector by Thursday",
   "Sofia to close out the refund-latency metric definition with finance this week",
   "Sam to start migration batch 1 once the inventory lands",
   "Priya to confirm the Okta SAML metadata is ready for the SSO configuration"
  ],
  "key_decisions": [
   "Dashboard inventory is the current critical-path blocker for the exec KPI rebuild",
   "Refund-latency metric stays out of the go-live set until finance signs the definition"
  ],
  "topics": [
   "semantic layer",
   "dashboard inventory",
   "migration batches",
   "sso"
  ],
  "discussion_flow": [
   "action-item review",
   "metric sign-off status",
   "dashboard inventory blocker",
   "sso progress",
   "next steps"
  ],
  "notes": "Healthy engagement from all three. Derek is the workhorse; Sofia unblocks decisions fast. Refund-latency is the only definitional debate left and it's a finance question, not a data one.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Sofia Marchetti",
   "1": "Derek Huang",
   "2": "Priya Shah"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Morning all. Quick action-item pass first, then I want to talk about the dashboard inventory because it's starting to block the rebuild.",
    "timestamp": 3.1
   },
   {
    "speaker": "Sofia Marchetti",
    "text": "Good news on metrics — return-rate is signed off. Refund-latency is still going back and forth with finance over whether we count business days or calendar days.",
    "timestamp": 24.7
   },
   {
    "speaker": "You",
    "text": "Let's keep refund-latency out of the go-live set until that's settled — no point migrating a number two teams disagree on. Can you close it this week?",
    "timestamp": 51.2
   },
   {
    "speaker": "Sofia Marchetti",
    "text": "Yes, I'll force the decision in Thursday's finance review.",
    "timestamp": 78.0
   },
   {
    "speaker": "You",
    "text": "Derek, the exec KPI rebuild is waiting on your dashboard inventory — the top 20 we're migrating first. Where's that?",
    "timestamp": 92.5
   },
   {
    "speaker": "Derek Huang",
    "text": "Fair. It slipped because I was heads-down on the CI checks. I can get the top-20 list over by Thursday — I've already got usage stats on which Looker dashboards actually get opened.",
    "timestamp": 108.3
   },
   {
    "speaker": "You",
    "text": "Perfect, usage-ranked is exactly right. The day that lands I'll start migration batch one.",
    "timestamp": 141.9
   },
   {
    "speaker": "Priya Shah",
    "text": "On SSO — I've got the Okta SAML metadata request in with our identity team. Should have it back early next week.",
    "timestamp": 163.4
   },
   {
    "speaker": "You",
    "text": "Great, that keeps SSO off the critical path. Anything blocking any of you from our side?",
    "timestamp": 188.1
   },
   {
    "speaker": "Derek Huang",
    "text": "No, staging access is working well. The compile is clean now.",
    "timestamp": 202.6
   },
   {
    "speaker": "You",
    "text": "Then we're in good shape. Recap and actions to follow — thanks everyone.",
    "timestamp": 219.0
   }
  ],
  "attendees": [
   {
    "email": "sam@vector.test",
    "name": "Sam Whitfield",
    "domain": "vector.test"
   },
   {
    "email": "sofia@loopreturns.com",
    "name": "Sofia Marchetti",
    "domain": "loopreturns.com"
   },
   {
    "email": "derek@loopreturns.com",
    "name": "Derek Huang",
    "domain": "loopreturns.com"
   },
   {
    "email": "priya@loopreturns.com",
    "name": "Priya Shah",
    "domain": "loopreturns.com"
   }
  ],
  "slug": "13-sync-loopreturns",
  "daysAgo": 14
 },
 {
  "id": "A11F2F7E-B3EC-4801-8899-A1761FF0797C",
  "title": "Sylvera developer training — metrics-as-code workflow",
  "duration_seconds": 3540,
  "language": "en",
  "summary": "Ran the developer training session for Sylvera's analytics engineering team — 8 attendees. Covered the metrics-as-code workflow end to end: defining metrics in dbt .yml, the review and CI gate, and how the semantic layer surfaces them in Vector. Team is comfortable; the main open question was how to handle the AI analyst guardrails for the ratings mart. Agreed to record the session and share the sandbox project so engineers can practise before go-live.",
  "action_items": [
   "Theo to share the recording and the training sandbox dbt project with the Sylvera team",
   "James to have each analytics engineer add one practice metric to the sandbox before go-live",
   "Ines to schedule a follow-up office-hours slot the week of go-live for live questions"
  ],
  "key_decisions": [
   "Analytics engineers own metric definitions going forward; Vector reviews via PR",
   "AI analyst will be scoped to the ratings mart for the initial launch"
  ],
  "topics": [
   "training",
   "metrics-as-code",
   "dbt yml",
   "ci gate",
   "ai analyst guardrails"
  ],
  "discussion_flow": [
   "workflow overview",
   "live metric definition demo",
   "ci and review gate",
   "semantic layer walkthrough",
   "ai analyst guardrails q&a",
   "practice assignment"
  ],
  "notes": "Engaged group. James is clearly the internal champion — he answered half the questions before Theo could. The guardrails discussion showed they take the AI analyst seriously and want it constrained at launch, which is the right instinct.",
  "speaker_count": 3,
  "speaker_names": {
   "-1": "You",
   "0": "Freya Nilsson",
   "1": "James Whitmore"
  },
  "training": {
   "talk_ratio_you": 0.58,
   "speakers": [
    {
     "speaker": "You",
     "is_you": true,
     "word_count": 4120,
     "fillers_per_minute": 1.1
    },
    {
     "speaker": "James Whitmore",
     "is_you": false,
     "word_count": 1640
    },
    {
     "speaker": "Freya Nilsson",
     "is_you": false,
     "word_count": 720
    }
   ]
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Welcome everyone. By the end of this hour you'll have defined a metric, put it through review, and seen it show up live in the platform. Let's start with the mental model: metrics are code, they live in your dbt project, they get reviewed like code.",
    "timestamp": 5.0
   },
   {
    "speaker": "James Whitmore",
    "text": "That's the part I like — no more spreadsheet of 'official' definitions that nobody trusts.",
    "timestamp": 38.4
   },
   {
    "speaker": "You",
    "text": "Exactly. Let me define one live. Here's the ratings-coverage metric in the .yml — name, description, the aggregation, and the dimensions it can be sliced by. I commit, CI runs the tests, and on merge it's in the semantic layer.",
    "timestamp": 61.7
   },
   {
    "speaker": "Freya Nilsson",
    "text": "And if someone defines it wrong, the CI catches it before it reaches anyone?",
    "timestamp": 112.9
   },
   {
    "speaker": "You",
    "text": "Right — a bad definition fails the tests and never merges. The review gate is where a second engineer sanity-checks the business logic.",
    "timestamp": 128.3
   },
   {
    "speaker": "James Whitmore",
    "text": "Question on the AI analyst — when we turn it on, can it query any metric, or can we fence it?",
    "timestamp": 166.1
   },
   {
    "speaker": "You",
    "text": "You fence it. For launch I'd scope it to the ratings mart only — a tight, well-tested surface — then widen once you trust the answers.",
    "timestamp": 184.8
   },
   {
    "speaker": "James Whitmore",
    "text": "Let's do that. Ratings mart only for launch.",
    "timestamp": 214.2
   },
   {
    "speaker": "You",
    "text": "I'll share the recording and a sandbox project so everyone can practise. Homework: each of you adds one practice metric before go-live. James, can you nudge the team on that?",
    "timestamp": 231.5
   },
   {
    "speaker": "James Whitmore",
    "text": "Consider it nudged.",
    "timestamp": 260.0
   },
   {
    "speaker": "Freya Nilsson",
    "text": "This was genuinely useful. Can we get one more office-hours slot near go-live for the inevitable last-minute questions?",
    "timestamp": 271.6
   },
   {
    "speaker": "You",
    "text": "Ines will put an office-hours slot on the calendar for go-live week. Thanks all — great session.",
    "timestamp": 298.9
   }
  ],
  "attendees": [
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "ines@vector.test",
    "name": "Ines Ferreira",
    "domain": "vector.test"
   },
   {
    "email": "freya@sylvera.com",
    "name": "Freya Nilsson",
    "domain": "sylvera.com"
   },
   {
    "email": "james@sylvera.com",
    "name": "James Whitmore",
    "domain": "sylvera.com"
   }
  ],
  "slug": "14-training-sylvera",
  "daysAgo": 11
 },
 {
  "id": "B3E66796-9F00-4B68-B432-11C905DD428F",
  "title": "ChowNow weekly sync — parity crunch",
  "duration_seconds": 2210,
  "language": "en",
  "summary": "Weekly sync with ChowNow ahead of go-live in ~10 days. Down to the last 3 dashboards showing small variances against Tableau. Traced two of them to a timezone cast — order timestamps are stored UTC but the Tableau extracts were localised to Pacific, so day-boundary counts drift. Kevin will confirm the third is the same root cause. Once the fix is validated we can run the go-live readiness review. SSO and guardrails are already done; parity is the only open gate.",
  "action_items": [
   "Kevin to confirm the third dashboard variance is the same timezone-cast root cause by Wednesday",
   "Caroline to push the timezone fix to staging and re-run the parity checks",
   "Lucia to give final parity sign-off once all three dashboards match",
   "Sandra to keep the go-live comms draft ready to send the moment parity signs off"
  ],
  "key_decisions": [
   "Order-timestamp metrics standardise on UTC in the semantic layer; the dashboard localises for display",
   "Go-live readiness review is gated only on parity sign-off — everything else is green"
  ],
  "topics": [
   "parity sign-off",
   "timezone cast",
   "go-live readiness",
   "self-serve rollout"
  ],
  "discussion_flow": [
   "parity status",
   "timezone-cast diagnosis",
   "remaining variance",
   "go-live gating",
   "comms readiness"
  ],
  "notes": "Genuine crunch but well-managed. Kevin is sharp — he'd already half-diagnosed the timezone issue before the call. Lucia is ready to sign the moment numbers match. The readiness review can't start until parity clears, so this is the single blocker.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Lucia Herrera",
   "1": "Kevin O'Rourke",
   "2": "Sandra Kim"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Ten days out. The only thing standing between us and the readiness review is parity, so let's spend the whole call there. Kevin, where are we?",
    "timestamp": 3.8
   },
   {
    "speaker": "Kevin O'Rourke",
    "text": "Three dashboards still off, all by tiny amounts on day-boundary counts. I think it's timezones — our order timestamps are UTC in the warehouse, but the old Tableau extracts were localised to Pacific, so an order at 11pm Pacific lands on the next day in ours.",
    "timestamp": 26.4
   },
   {
    "speaker": "You",
    "text": "That would do it exactly. The right fix is to standardise the metric on UTC in the semantic layer and localise only at display time — not to bend the model to match the old extract.",
    "timestamp": 63.1
   },
   {
    "speaker": "Kevin O'Rourke",
    "text": "Agreed. Two of the three are definitely this. Let me confirm the third is the same and not a separate bug — I'll have that by Wednesday.",
    "timestamp": 98.7
   },
   {
    "speaker": "You",
    "text": "I'll push the timezone fix to staging today and re-run the parity checks. If all three line up, Lucia, are you good to sign off?",
    "timestamp": 124.0
   },
   {
    "speaker": "Lucia Herrera",
    "text": "The second the numbers match I'll sign. I don't want to be the one holding up go-live over a rounding difference, but I also won't sign on a variance I can't explain — and now we can explain it.",
    "timestamp": 149.5
   },
   {
    "speaker": "You",
    "text": "That's the right bar. Sandra, keep the rollout comms drafted so we can send the moment parity clears — I don't want comms to be the new bottleneck.",
    "timestamp": 181.2
   },
   {
    "speaker": "Sandra Kim",
    "text": "Comms are drafted and scheduled as a draft — one click when you give the word.",
    "timestamp": 203.9
   },
   {
    "speaker": "You",
    "text": "Then the plan is: Kevin confirms Wednesday, I validate the fix, Lucia signs, we book the readiness review. Thanks all.",
    "timestamp": 218.0
   }
  ],
  "attendees": [
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "lucia@chownow.com",
    "name": "Lucia Herrera",
    "domain": "chownow.com"
   },
   {
    "email": "kevin@chownow.com",
    "name": "Kevin O'Rourke",
    "domain": "chownow.com"
   },
   {
    "email": "sandra@chownow.com",
    "name": "Sandra Kim",
    "domain": "chownow.com"
   }
  ],
  "slug": "15-sync-chownow",
  "daysAgo": 9
 },
 {
  "id": "A3E4BE10-7B82-4B8D-8DFF-FC5E0AD5D88C",
  "title": "ChowNow go-live readiness review",
  "duration_seconds": 2670,
  "language": "en",
  "summary": "Go-live readiness review for ChowNow's self-serve rollout. Walked the readiness checklist: SSO (Okta SAML) done and tested, role-based permissions mapped, AI analyst guardrails configured and scoped to the orders mart. Parity is the last open gate — two of the three timezone-cast dashboards now match after the staging fix; the third is being retested. Agreed a provisional go-live date one week out, firmly conditional on Lucia's parity sign-off. Set a rollback plan and a day-one support rota.",
  "action_items": [
   "Kevin to finish retesting the third dashboard and report parity numbers by Friday",
   "Lucia to give final parity sign-off, which unblocks the readiness review completion",
   "Caroline to lock the provisional go-live date once parity signs off",
   "Sandra to confirm the day-one support rota and send rollout comms on go-live morning"
  ],
  "key_decisions": [
   "Provisional go-live set for one week out, conditional on parity sign-off",
   "Rollback plan: keep Tableau read-only for two weeks post-launch as a fallback",
   "AI analyst launches scoped to the orders mart only; wider access is a fast-follow"
  ],
  "topics": [
   "go-live readiness",
   "parity sign-off",
   "sso",
   "permissions",
   "rollback plan"
  ],
  "discussion_flow": [
   "readiness checklist walkthrough",
   "sso and permissions sign-off",
   "parity status",
   "go-live date decision",
   "rollback and support plan"
  ],
  "notes": "Everything green except parity, and parity is on a short leash. The team is disciplined about not going live on an unexplained variance, which is exactly right for a self-serve launch where numbers will be trusted without a human in the loop. Keeping Tableau as a two-week fallback is cheap insurance.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Lucia Herrera",
   "1": "Kevin O'Rourke",
   "2": "Sandra Kim"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Readiness review. I'll walk the checklist top to bottom and we mark each item green, amber, or blocked. SSO first — Okta SAML is configured and I tested a login this morning. Green.",
    "timestamp": 4.5
   },
   {
    "speaker": "Sandra Kim",
    "text": "Confirmed on our side too — I logged in with a rollout-group account and landed in the right workspace.",
    "timestamp": 33.2
   },
   {
    "speaker": "You",
    "text": "Permissions — roles are mapped, ops team gets the self-serve dashboards, finance gets the restricted set. Green. Guardrails — AI analyst is scoped to the orders mart only for launch. Green. That leaves parity.",
    "timestamp": 58.9
   },
   {
    "speaker": "Kevin O'Rourke",
    "text": "Two of the three are matching now after your staging fix. The third I'm retesting — it's the same timezone family, I just want the numbers in front of me before I call it.",
    "timestamp": 96.4
   },
   {
    "speaker": "You",
    "text": "So parity is amber, not blocked — we have a known cause and a fix in flight. I'd set a provisional go-live one week out, hard-conditional on Lucia signing parity. Objections?",
    "timestamp": 131.7
   },
   {
    "speaker": "Lucia Herrera",
    "text": "None. I'll sign the moment Kevin's third dashboard matches. I'm not going to gate a launch on a variance we understand and have fixed.",
    "timestamp": 168.0
   },
   {
    "speaker": "You",
    "text": "Then let's talk safety. Rollback plan: we keep Tableau read-only for two weeks after launch. If anything looks wrong, people have a reference and we're not scrambling.",
    "timestamp": 194.3
   },
   {
    "speaker": "Sandra Kim",
    "text": "Sensible. I'll set up a day-one support rota — someone from data and someone from Vector on call for the first day.",
    "timestamp": 226.8
   },
   {
    "speaker": "You",
    "text": "Good. So: Kevin retests by Friday, Lucia signs, I lock the date, Sandra sends comms go-live morning. This was a clean review — we're one green checkbox from launch.",
    "timestamp": 251.0
   }
  ],
  "attendees": [
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "lucia@chownow.com",
    "name": "Lucia Herrera",
    "domain": "chownow.com"
   },
   {
    "email": "kevin@chownow.com",
    "name": "Kevin O'Rourke",
    "domain": "chownow.com"
   },
   {
    "email": "sandra@chownow.com",
    "name": "Sandra Kim",
    "domain": "chownow.com"
   }
  ],
  "slug": "16-golive-chownow",
  "daysAgo": 5
 },
 {
  "id": "35B03403-9C7D-43C5-B22C-8CBC64B49123",
  "title": "Weekly check-in",
  "duration_seconds": 1425,
  "language": "en",
  "summary": "Short status call. Warehouse service account is now provisioned and the project compiles clean in staging. Agreed to define the first batch of metrics next week and to book a working session to review naming conventions. One open item on the network policy change is with their platform team.",
  "action_items": [
   "Send over the first-batch metric list for review",
   "Book a working session to agree naming conventions",
   "Chase the platform team on the network policy change"
  ],
  "key_decisions": [
   "First metric batch scoped to the core fact table for next week"
  ],
  "topics": [
   "warehouse connection",
   "metrics",
   "naming conventions",
   "network policy"
  ],
  "discussion_flow": [
   "status update",
   "compile confirmation",
   "next steps"
  ],
  "notes": "Meeting was started ad hoc without a calendar invite. Speaker labels are unresolved. No customer named on the call — mostly a quick internal-feeling status sync.",
  "speaker_count": 2,
  "transcript": [
   {
    "speaker": "You",
    "text": "Quick one today — mainly want to confirm the connection is stable before we start on metrics.",
    "timestamp": 2.4
   },
   {
    "speaker": "Speaker 1",
    "text": "It's stable. The service account got provisioned yesterday and the project compiled clean on the first try in staging.",
    "timestamp": 19.1
   },
   {
    "speaker": "You",
    "text": "That's the milestone I wanted. Next week let's define the first batch of metrics against the core fact table and then do a working session on naming.",
    "timestamp": 41.7
   },
   {
    "speaker": "Speaker 1",
    "text": "Works for me. One thing still open — the network policy change is sitting with our platform team, I'll chase it.",
    "timestamp": 68.3
   },
   {
    "speaker": "You",
    "text": "Great. I'll send the first-batch metric list over for you to review and we'll book the naming session. Short and sweet — thanks.",
    "timestamp": 89.9
   }
  ],
  "slug": "17-ambiguous-untitled",
  "daysAgo": 3
 },
 {
  "id": "FAF26EEB-2ABE-42F4-BDDF-BD9721FD3ECA",
  "title": "Implementation working session",
  "duration_seconds": 2015,
  "language": "en",
  "summary": "Working session on the semantic layer. Reviewed the first dashboard rebuild against the existing report and found a small discrepancy in an aggregation that traces back to a duplicated join. Agreed to move the logic into a proper mart model with tests rather than patching the dashboard query. Next session will cover the executive dashboard once the mart lands.",
  "action_items": [
   "Split the aggregation logic into a staging model and a mart model with tests",
   "Re-run the side-by-side comparison once the mart is in place",
   "Schedule the next working session for the executive dashboard"
  ],
  "key_decisions": [
   "Aggregation logic moves into a tested mart model instead of a dashboard-level fix"
  ],
  "topics": [
   "semantic layer",
   "dashboard rebuild",
   "mart model",
   "aggregation discrepancy"
  ],
  "discussion_flow": [
   "rebuild review",
   "discrepancy diagnosis",
   "mart model decision",
   "next session"
  ],
  "notes": "Ad hoc session, no calendar event attached, so attendees and speaker names didn't resolve. The customer isn't named anywhere on the recording — this one will need to be assigned manually.",
  "speaker_count": 2,
  "transcript": [
   {
    "speaker": "You",
    "text": "Let's compare the rebuilt dashboard against your existing report side by side. Most tiles match, but this one aggregation is off by a bit.",
    "timestamp": 3.6
   },
   {
    "speaker": "Speaker 1",
    "text": "I see it. That number's been slightly weird for a while honestly. Any idea why?",
    "timestamp": 26.2
   },
   {
    "speaker": "You",
    "text": "Looks like a duplicated join fanning out the rows — the old query masks it with a distinct further down. I'd rather not carry that forward.",
    "timestamp": 44.9
   },
   {
    "speaker": "Speaker 1",
    "text": "Agreed, don't replicate the bug. Put it in a real model?",
    "timestamp": 71.0
   },
   {
    "speaker": "You",
    "text": "Exactly — a staging model plus a mart model with tests, and the dashboard becomes a thin view. Then we re-run the side-by-side and it should tie out cleanly.",
    "timestamp": 85.4
   },
   {
    "speaker": "Speaker 1",
    "text": "I'll build the staging and mart models this week. Next session we do the executive dashboard?",
    "timestamp": 118.7
   },
   {
    "speaker": "You",
    "text": "Perfect. I'll get the next working session on the calendar once the mart lands. Good progress today.",
    "timestamp": 141.3
   }
  ],
  "slug": "18-ambiguous-generic",
  "daysAgo": 2
 },
 {
  "id": "C7A41E92-3D6B-4F18-9E0A-2B5D8C1447FA",
  "title": "Vector × Raycast — implementation kickoff",
  "duration_seconds": 2874,
  "language": "en",
  "summary": "Kickoff for the Raycast implementation. They are migrating off Metabase onto Vector, with dbt Core on BigQuery as the source of truth. Priya wants the executive KPI dashboard live before the company all-hands in September, and an AI analyst pilot for the growth team after parity is proven. Three access prerequisites came out of the call: a read-only BigQuery service account, Vector's static IPs on their network policy, and read access to the dbt repo. Marta flagged that anything touching production access has to clear their internal security review first, which she could not put a date on.",
  "action_items": [
   "Marta to provision a read-only BigQuery service account scoped to the ANALYTICS schema",
   "Marta to add Vector Cloud static IPs to the BigQuery network policy",
   "Felix to grant Vector read access to the dbt project repo on GitHub",
   "Maya to send the implementation plan and set up a weekly sync",
   "Felix to export the list of top 20 Metabase dashboards by view count"
  ],
  "key_decisions": [
   "Go-live target is the September all-hands — executive KPI dashboard must be live by then",
   "Phase 1 is dashboard parity with Metabase; AI analyst pilot deferred until parity is signed off",
   "fct_installs is the first fact table to get a metrics block"
  ],
  "topics": [
   "kickoff",
   "bigquery",
   "metabase migration",
   "dbt",
   "security review",
   "timeline"
  ],
  "discussion_flow": [
   "intros",
   "current stack walkthrough",
   "goals and success criteria",
   "timeline",
   "technical prerequisites",
   "security review process",
   "next steps"
  ],
  "notes": "Priya is the exec sponsor and clearly has the mandate. Felix knows the dbt project well and is keen. Marta is the constraint — she owns both BigQuery and Google Workspace, and she was noticeably careful about committing to dates because of their security review process. Worth watching.",
  "speaker_count": 5,
  "speaker_names": {
   "-1": "You",
   "0": "Priya Raman",
   "1": "Felix Gruber",
   "2": "Marta Silva",
   "3": "Theo Okonkwo"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Thanks for making the time, everyone. The goal today is to agree what success looks like and get the technical prerequisites moving so Theo isn't blocked next week.",
    "timestamp": 5.1
   },
   {
    "speaker": "Priya Raman",
    "text": "Sounds right. The short version of why we're here — Metabase has become a graveyard. Four hundred odd dashboards, nobody knows which ones are trustworthy, and every number in a leadership meeting gets argued with.",
    "timestamp": 24.7
   },
   {
    "speaker": "You",
    "text": "That's the pattern we see constantly. Felix, can you walk us through what's underneath it?",
    "timestamp": 48.3
   },
   {
    "speaker": "Felix Gruber",
    "text": "Everything lands in BigQuery. We run dbt Core, about ninety models, repo's on GitHub. The models are in decent shape — it's the presentation layer that's rotted.",
    "timestamp": 59.9
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "That's a good starting point, honestly. If the project compiles clean we can scaffold the semantic layer within days of getting repo access.",
    "timestamp": 94.2
   },
   {
    "speaker": "Priya Raman",
    "text": "What do you actually need from us to start?",
    "timestamp": 121.5
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Three things. A read-only service account on BigQuery scoped to your ANALYTICS schema. Our static egress IPs added to your network policy. And read access to the dbt repo — we never push, we only read.",
    "timestamp": 129.8
   },
   {
    "speaker": "Marta Silva",
    "text": "I can do all three technically. I want to set expectations though — anything that grants an external party access to production data has to go through our security review. That's not me being difficult, it's policy.",
    "timestamp": 163.4
   },
   {
    "speaker": "You",
    "text": "Completely understood. How long does that review typically take?",
    "timestamp": 194.0
   },
   {
    "speaker": "Marta Silva",
    "text": "It varies. I'd rather not give you a number I can't hold to. I'll open the ticket this week and chase it.",
    "timestamp": 202.6
   },
   {
    "speaker": "Priya Raman",
    "text": "Marta, can you make it a priority? The whole timeline hangs off it.",
    "timestamp": 228.1
   },
   {
    "speaker": "Marta Silva",
    "text": "I'll do what I can.",
    "timestamp": 241.9
   },
   {
    "speaker": "You",
    "text": "Let's plan around it rather than wait on it. Felix, is there anything we can do with the repo alone, before warehouse access clears?",
    "timestamp": 250.3
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Repo access alone gets us a long way. I can compile the project and draft the first metrics without ever touching the warehouse. The data connection is only needed when we validate numbers.",
    "timestamp": 268.7
   },
   {
    "speaker": "Felix Gruber",
    "text": "Repo read access I can probably get done faster — it's source code, not customer data. Different risk profile. I'll push on that one.",
    "timestamp": 297.2
   },
   {
    "speaker": "Priya Raman",
    "text": "Good. On scope — I want the executive KPI dashboard live before our September all-hands. That's the thing I'll be judged on.",
    "timestamp": 330.6
   },
   {
    "speaker": "You",
    "text": "That's the anchor then. Parity first, AI analyst pilot after. I wouldn't put an AI analyst in front of your growth team on a semantic layer nobody trusts yet.",
    "timestamp": 361.4
   },
   {
    "speaker": "Priya Raman",
    "text": "Agreed. Prove the numbers, then get clever.",
    "timestamp": 389.0
   },
   {
    "speaker": "Felix Gruber",
    "text": "Which fact table do you want to start with? I'd say fct_installs — it's our cleanest and it's what leadership asks about most.",
    "timestamp": 401.7
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Perfect. We'll put the first metrics block on fct_installs and use it as the template for the rest.",
    "timestamp": 418.3
   },
   {
    "speaker": "You",
    "text": "Maya will send the implementation plan and a weekly sync invite. Felix, could you also export your top twenty Metabase dashboards by view count? That tells us what actually matters versus what merely exists.",
    "timestamp": 437.9
   },
   {
    "speaker": "Felix Gruber",
    "text": "Happy to. I suspect the answer is embarrassing.",
    "timestamp": 462.5
   },
   {
    "speaker": "You",
    "text": "It always is. Thanks everyone — summary and actions in your inbox within the hour.",
    "timestamp": 474.1
   }
  ],
  "attendees": [
   {
    "email": "maya@vector.test",
    "name": "Maya Lindqvist",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "priya@raycast.com",
    "name": "Priya Raman",
    "domain": "raycast.com"
   },
   {
    "email": "felix@raycast.com",
    "name": "Felix Gruber",
    "domain": "raycast.com"
   },
   {
    "email": "marta@raycast.com",
    "name": "Marta Silva",
    "domain": "raycast.com"
   }
  ],
  "slug": "19-kickoff-raycast",
  "daysAgo": 9
 },
 {
  "id": "9F2C6D80-14AB-4E53-B7C1-6A3E9D2F5188",
  "title": "Raycast technical working session — warehouse + repo access",
  "duration_seconds": 2361,
  "language": "en",
  "summary": "Technical session to unblock connectivity. Nothing has been provisioned yet — the BigQuery service account and the network policy change are both sitting in Raycast's security review queue, and the dbt repo access Felix hoped to fast-track was pulled into the same review. Theo cannot connect the repo or run a compile until that clears, so the semantic layer work is stalled before it started. Marta could not give a date. Priya did not attend.",
  "action_items": [
   "Marta to chase the security review ticket and get an ETA by end of week",
   "Felix to check whether repo read access can be split out of the security review as a separate lower-risk request",
   "Theo to prepare the dbt compile and metrics scaffolding offline so it can run the moment access lands",
   "Maya to flag the access delay to Priya directly"
  ],
  "key_decisions": [
   "Semantic layer work is formally blocked pending Raycast's security review",
   "Vector will prepare everything that does not require live access, so nothing else is lost to the wait"
  ],
  "topics": [
   "bigquery",
   "service account",
   "network policy",
   "github repo",
   "security review",
   "blocked"
  ],
  "discussion_flow": [
   "access status check",
   "security review process",
   "what can proceed without access",
   "risk to timeline",
   "next steps"
  ],
  "notes": "This is the second call in a row where access was the whole agenda. Marta is doing her best but clearly does not control the review queue. Priya's absence is notable given she called the timeline the thing she'd be judged on. Timeline risk is real and growing.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Felix Gruber",
   "1": "Marta Silva",
   "2": "Theo Okonkwo"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Morning. Priya sends apologies, she's double-booked. Let's get straight into it — Theo, where are we on connectivity?",
    "timestamp": 6.4
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Nowhere, unfortunately. I have no BigQuery service account, no IP allowlisting, and no repo access. I genuinely can't start.",
    "timestamp": 18.9
   },
   {
    "speaker": "Marta Silva",
    "text": "That's on our side and I'm sorry. All three requests are in the security review queue. I opened the tickets the day after kickoff.",
    "timestamp": 41.2
   },
   {
    "speaker": "You",
    "text": "Felix, I thought repo access might move faster since it's source code rather than customer data?",
    "timestamp": 66.7
   },
   {
    "speaker": "Felix Gruber",
    "text": "So did I. Security bundled it with the other two. Their argument is that the dbt project contains column names and business logic, so it's treated as sensitive by default.",
    "timestamp": 75.3
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "That's a defensible position, it's just an expensive one for us. Repo access alone would let me compile the project and draft the whole first metrics block without touching a single row of data.",
    "timestamp": 103.8
   },
   {
    "speaker": "Felix Gruber",
    "text": "I'll go back and try to split it out as a separate request with a lower risk rating. No promises.",
    "timestamp": 131.5
   },
   {
    "speaker": "You",
    "text": "Marta, is there any ETA at all on the review? Even a bad one is more useful than none.",
    "timestamp": 152.0
   },
   {
    "speaker": "Marta Silva",
    "text": "I asked. The queue is long and there's a compliance audit running in parallel that's eating the team. I'll chase it again but I can't promise you a date this week.",
    "timestamp": 161.4
   },
   {
    "speaker": "You",
    "text": "Okay. I want to be straight with you both — the September all-hands date Priya anchored on assumes we start building this week. Every day of review is a day off the build.",
    "timestamp": 190.6
   },
   {
    "speaker": "Marta Silva",
    "text": "Understood. I'll escalate internally.",
    "timestamp": 218.3
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "In the meantime I'll do everything that doesn't need access. I'll write the metrics definitions for fct_installs against the schema Felix described, get the CI checks scaffolded, and stage it all. When access lands we run it the same day rather than starting from zero.",
    "timestamp": 231.7
   },
   {
    "speaker": "Felix Gruber",
    "text": "That helps. I can send you the fct_installs schema and our naming conventions doc so you're not guessing.",
    "timestamp": 269.1
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Perfect, that's most of what I need.",
    "timestamp": 288.4
   },
   {
    "speaker": "You",
    "text": "Maya, can you take the action of raising this with Priya directly? She should hear from us that her date is at risk, and hear it early rather than late.",
    "timestamp": 299.0
   },
   {
    "speaker": "Marta Silva",
    "text": "I'd appreciate that, honestly. It'll carry more weight coming from you than from me.",
    "timestamp": 322.8
   },
   {
    "speaker": "You",
    "text": "Then let's do that. Same time next week, and hopefully we're talking about metrics instead of tickets.",
    "timestamp": 338.2
   }
  ],
  "attendees": [
   {
    "email": "maya@vector.test",
    "name": "Maya Lindqvist",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "felix@raycast.com",
    "name": "Felix Gruber",
    "domain": "raycast.com"
   },
   {
    "email": "marta@raycast.com",
    "name": "Marta Silva",
    "domain": "raycast.com"
   }
  ],
  "slug": "20-technical-raycast",
  "daysAgo": 7
 },
 {
  "id": "4B8E0A57-72CD-4916-A3F5-C0D71E9B6234",
  "title": "Raycast weekly sync — access still blocked",
  "duration_seconds": 968,
  "language": "en",
  "summary": "Short weekly sync, and a thin one. Only Felix joined from Raycast — Marta was pulled into their compliance audit and Priya did not attend for the second week running. No movement on the security review, so the BigQuery service account, the network policy change and the dbt repo access all remain outstanding. Felix's attempt to split repo access into a separate lower-risk request was rejected. Everything downstream of connectivity is now blocked: the dbt compile, the semantic layer, the metrics validation, the dashboard migration and the SSO work. Felix said the team would come back to us once the audit is finished but could not say when that is.",
  "action_items": [
   "Felix to send an update once the compliance audit finishes and the security queue reopens",
   "Maya to escalate to Priya and propose moving the go-live date if access does not land within a week"
  ],
  "key_decisions": [
   "Repo access will not be split out — it stays bundled in the full security review",
   "Vector will pause active build work on Raycast until access lands"
  ],
  "topics": [
   "blocked",
   "security review",
   "compliance audit",
   "timeline risk",
   "escalation"
  ],
  "discussion_flow": [
   "attendance",
   "access status",
   "what is now blocked",
   "timeline",
   "next steps"
  ],
  "notes": "Concerning. Second consecutive call without Priya, and now Marta is absent too. Felix is engaged but has no authority to unblock any of this. The phrase he used was 'we'll come back to you' — which in practice means we have lost control of the timeline. If we don't hear anything in the next few days this needs an exec-level escalation, not another weekly sync.",
  "speaker_count": 3,
  "speaker_names": {
   "-1": "You",
   "0": "Felix Gruber",
   "1": "Theo Okonkwo"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Hi Felix. Is Marta joining us?",
    "timestamp": 3.8
   },
   {
    "speaker": "Felix Gruber",
    "text": "No — she's been pulled onto the compliance audit full time. And Priya's travelling. It's just me today, sorry.",
    "timestamp": 9.6
   },
   {
    "speaker": "You",
    "text": "No problem. Any movement on the security review?",
    "timestamp": 26.1
   },
   {
    "speaker": "Felix Gruber",
    "text": "None. And the split request I tried to raise got rejected — they won't separate repo access from the warehouse access. It all goes through together or not at all.",
    "timestamp": 33.4
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "So we're still at zero. No service account, no IPs, no repo.",
    "timestamp": 58.9
   },
   {
    "speaker": "Felix Gruber",
    "text": "Correct. I know how that sounds.",
    "timestamp": 68.2
   },
   {
    "speaker": "You",
    "text": "I'm not going to pretend it's fine. Let me lay out what this actually costs, because I don't think it's visible on your side. Theo?",
    "timestamp": 74.7
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Everything is downstream of connectivity. I can't connect the repo, so I can't compile. I can't compile, so the semantic layer can't be validated. Without a validated semantic layer we can't migrate a single dashboard, we can't do parity sign-off, and the AI analyst pilot is meaningless. The SSO and permissions work also assumes a working connection. That's essentially the whole project sitting behind one ticket.",
    "timestamp": 88.3
   },
   {
    "speaker": "Felix Gruber",
    "text": "When you put it like that. I'll be honest, I don't think anyone internally has connected those dots.",
    "timestamp": 137.5
   },
   {
    "speaker": "You",
    "text": "That's usually the problem. It looks like one IT ticket, so it gets one IT ticket's worth of urgency.",
    "timestamp": 151.0
   },
   {
    "speaker": "Felix Gruber",
    "text": "Look — realistically, the audit has another couple of weeks in it and the security team isn't going to look at anything until it's done. Let us come back to you once that's cleared. I don't want to keep taking your time with a call that's the same every week.",
    "timestamp": 166.8
   },
   {
    "speaker": "You",
    "text": "I'd rather keep the slot, even if it's five minutes. Going quiet is how projects die.",
    "timestamp": 203.4
   },
   {
    "speaker": "Felix Gruber",
    "text": "Fair. But I can't promise Marta or Priya will be on it.",
    "timestamp": 217.9
   },
   {
    "speaker": "You",
    "text": "Understood. Then here's what I'll do — I'll write to Priya directly. Her September date does not survive another two weeks of this, and she should be the one deciding whether to move it or to push the review. That's not a decision you or I should be making for her.",
    "timestamp": 226.5
   },
   {
    "speaker": "Felix Gruber",
    "text": "That's probably the right call. Thanks for being straight about it.",
    "timestamp": 268.1
   },
   {
    "speaker": "You",
    "text": "Thanks Felix. We'll be ready to move fast the moment you unblock us.",
    "timestamp": 281.7
   }
  ],
  "attendees": [
   {
    "email": "maya@vector.test",
    "name": "Maya Lindqvist",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "felix@raycast.com",
    "name": "Felix Gruber",
    "domain": "raycast.com"
   }
  ],
  "slug": "21-sync-raycast",
  "daysAgo": 5
 },
 {
  "id": "E1D93B44-8A07-42FC-95B2-7F60C3A8D591",
  "title": "Vector × beehiiv — onboarding kickoff",
  "duration_seconds": 2695,
  "language": "en",
  "summary": "Kickoff for the beehiiv implementation. They run dbt Core on Snowflake with the repo on GitHub, and are moving off Looker. Marcus wants subscription and revenue metrics to be the first thing modelled — fct_subscriptions is the anchor fact table. Aisha raised early that their existing metric naming is inconsistent across teams and will need a cleanup pass before anything is migrated, which she expects to be contentious. Access requests were agreed with no obvious obstacles: Snowflake service account, static IPs on the network policy, and repo read access. Okta SSO to be configured before the wider rollout.",
  "action_items": [
   "Aisha to provision a read-only Snowflake service account scoped to the ANALYTICS schema",
   "Aisha to add Vector Cloud static IPs to the Snowflake network policy",
   "Aisha to grant Vector read access to the dbt repo on GitHub",
   "Marcus to nominate a decision-maker for metric naming disputes",
   "Sam to send the implementation plan and weekly sync invite"
  ],
  "key_decisions": [
   "fct_subscriptions is the first fact table to get a metrics block",
   "Metric naming conventions will be agreed before dashboard migration begins, not during",
   "Okta is the SSO provider; SSO lands before company-wide rollout"
  ],
  "topics": [
   "kickoff",
   "snowflake",
   "looker migration",
   "dbt",
   "metric naming",
   "okta"
  ],
  "discussion_flow": [
   "intros",
   "current stack walkthrough",
   "goals and success criteria",
   "metric naming concerns",
   "technical prerequisites",
   "next steps"
  ],
  "notes": "Healthy kickoff. Marcus is decisive and Aisha is technically strong and refreshingly blunt about the mess in their metric definitions. The naming cleanup is the thing most likely to cause friction — she predicted a fight between growth and finance over how 'active subscriber' is defined, and I believe her.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Marcus Bell",
   "1": "Aisha Diallo",
   "2": "Sam Whitfield"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Thanks for joining. Let's use the hour to agree on what we're building, in what order, and what we need from you to start.",
    "timestamp": 4.9
   },
   {
    "speaker": "Marcus Bell",
    "text": "Straightforward from our side. Looker costs us a fortune, nobody outside the data team can use it, and every dashboard is a bespoke artefact. We want self-serve that actually gets served.",
    "timestamp": 20.3
   },
   {
    "speaker": "Sam Whitfield",
    "text": "What does the stack look like underneath?",
    "timestamp": 47.6
   },
   {
    "speaker": "Aisha Diallo",
    "text": "Snowflake, dbt Core, repo on GitHub. Around a hundred and ten models. It's fine. The models are not the problem.",
    "timestamp": 55.1
   },
   {
    "speaker": "You",
    "text": "Go on — what is the problem?",
    "timestamp": 78.4
   },
   {
    "speaker": "Aisha Diallo",
    "text": "The definitions. Growth calls an active subscriber one thing, finance calls it another, and both of them are in production dashboards with the same label. If you migrate that mess into a semantic layer you've just made the mess authoritative.",
    "timestamp": 84.9
   },
   {
    "speaker": "Sam Whitfield",
    "text": "That's exactly right, and it's the single most valuable thing anyone has said in a kickoff this month. We should fix the definitions before we migrate, not during.",
    "timestamp": 116.2
   },
   {
    "speaker": "Marcus Bell",
    "text": "That'll be a fight.",
    "timestamp": 143.7
   },
   {
    "speaker": "Aisha Diallo",
    "text": "It'll be a fight whether we have it now or in three months. Now is cheaper.",
    "timestamp": 148.0
   },
   {
    "speaker": "You",
    "text": "Then let's have it now. Marcus, the thing we need from you is a name — who is the person who gets to settle a definition dispute when growth and finance disagree?",
    "timestamp": 158.5
   },
   {
    "speaker": "Marcus Bell",
    "text": "It should be me. Let me confirm that's politically survivable and come back to you.",
    "timestamp": 187.3
   },
   {
    "speaker": "You",
    "text": "Perfect. Which fact table do we start with?",
    "timestamp": 209.8
   },
   {
    "speaker": "Marcus Bell",
    "text": "Subscriptions. That's the business. fct_subscriptions is where everything interesting lives.",
    "timestamp": 216.4
   },
   {
    "speaker": "Aisha Diallo",
    "text": "Agreed, and it's also where the naming inconsistency is worst. So we'll hit the hard problem first.",
    "timestamp": 234.1
   },
   {
    "speaker": "Sam Whitfield",
    "text": "That's the right order. On access — I need a read-only Snowflake service account scoped to ANALYTICS, our static egress IPs on your network policy, and read access to the dbt repo.",
    "timestamp": 249.6
   },
   {
    "speaker": "Aisha Diallo",
    "text": "All three are mine. I can get them done this week — none of it needs a committee.",
    "timestamp": 281.2
   },
   {
    "speaker": "Sam Whitfield",
    "text": "That is a lovely sentence to hear.",
    "timestamp": 297.5
   },
   {
    "speaker": "Marcus Bell",
    "text": "One more thing — SSO. We're an Okta shop and I don't want a second set of credentials floating around before we roll this out company-wide.",
    "timestamp": 306.8
   },
   {
    "speaker": "You",
    "text": "Noted. We'll get Okta SAML configured before the wider rollout rather than after — retrofitting SSO once people have accounts is unpleasant.",
    "timestamp": 331.4
   },
   {
    "speaker": "Marcus Bell",
    "text": "Good. Then I think we're aligned.",
    "timestamp": 358.9
   },
   {
    "speaker": "You",
    "text": "Sam will send the plan and a weekly sync. Aisha, ping us the moment the service account is live and we'll start the same day.",
    "timestamp": 366.2
   }
  ],
  "attendees": [
   {
    "email": "sam@vector.test",
    "name": "Sam Whitfield",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "marcus@beehiiv.com",
    "name": "Marcus Bell",
    "domain": "beehiiv.com"
   },
   {
    "email": "aisha@beehiiv.com",
    "name": "Aisha Diallo",
    "domain": "beehiiv.com"
   }
  ],
  "slug": "22-kickoff-beehiiv",
  "daysAgo": 6
 },
 {
  "id": "6C05F79E-B2A1-4D3C-8E64-91AB57D0C3E2",
  "title": "beehiiv semantic layer working session — fct_subscriptions",
  "duration_seconds": 3402,
  "language": "en",
  "summary": "Working session on the first metrics block. Aisha delivered all three access prerequisites within two days of kickoff, so Theo had the repo connected and a clean dbt compile running before the call. The session was spent on fct_subscriptions naming, and Aisha's prediction was correct — growth and finance have materially different definitions of an active subscriber, differing on whether to include subscribers in a payment-failure grace period. The metrics block is on hold until Marcus rules. Everything else on the semantic layer progressed.",
  "action_items": [
   "Marcus to rule on whether payment-failure grace-period subscribers count as active",
   "Aisha to pull the numbers both ways so the decision is made against real figures rather than opinion",
   "Theo to land the uncontested metrics on fct_subscriptions and leave active_subscribers stubbed",
   "Theo to set up CI checks on semantic layer changes"
  ],
  "key_decisions": [
   "Uncontested metrics ship now; active_subscribers is stubbed pending Marcus's ruling",
   "Grace-period definition will be decided against real numbers, not in the abstract",
   "CI checks go in before any dashboard migration begins"
  ],
  "topics": [
   "semantic layer",
   "fct_subscriptions",
   "metric naming",
   "active subscriber",
   "dbt compile",
   "ci"
  ],
  "discussion_flow": [
   "access confirmed",
   "dbt compile results",
   "metrics walkthrough",
   "active subscriber dispute",
   "what ships now",
   "next steps"
  ],
  "notes": "Night and day compared to some accounts — Aisha turned around all three access requests in under 48 hours and the project compiled clean first try. The active_subscriber dispute is exactly the fight she predicted at kickoff. Blocking the metrics block on it is the right call; shipping a metric that two departments disagree on would poison the semantic layer on day one.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Aisha Diallo",
   "1": "Theo Okonkwo",
   "2": "Sam Whitfield"
  },
  "transcript": [
   {
    "speaker": "Sam Whitfield",
    "text": "Before anything else — Aisha, you got us all three access items in two days. That is genuinely the fastest turnaround we've had this year.",
    "timestamp": 7.2
   },
   {
    "speaker": "Aisha Diallo",
    "text": "It's not hard when nobody's in the way.",
    "timestamp": 22.6
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "It made a real difference. Repo's connected, project compiles clean, all hundred and eleven models. No warnings worth mentioning.",
    "timestamp": 29.4
   },
   {
    "speaker": "Sam Whitfield",
    "text": "Then let's spend the time on the thing you flagged at kickoff. fct_subscriptions.",
    "timestamp": 51.8
   },
   {
    "speaker": "Aisha Diallo",
    "text": "Right. So I went and pulled every definition of active subscriber currently in production. There are four. Two of them are the same thing written differently, which leaves two that genuinely disagree.",
    "timestamp": 60.3
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "What's the axis of disagreement?",
    "timestamp": 92.7
   },
   {
    "speaker": "Aisha Diallo",
    "text": "Grace period. When a subscriber's card fails we keep serving them for fourteen days while we retry. Growth counts those people as active — they're reading the newsletter, they're engaged. Finance does not — no money has arrived.",
    "timestamp": 99.1
   },
   {
    "speaker": "Sam Whitfield",
    "text": "And both are defensible, which is what makes it a real dispute rather than a bug.",
    "timestamp": 138.5
   },
   {
    "speaker": "Aisha Diallo",
    "text": "Exactly. Growth isn't wrong. Finance isn't wrong. But the executive dashboard can't show two different subscriber counts with the same label.",
    "timestamp": 146.9
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "How big is the gap in practice? If it's a rounding error nobody will fight about it.",
    "timestamp": 174.2
   },
   {
    "speaker": "Aisha Diallo",
    "text": "I don't have the number in front of me. I'd guess low single digit percent but I genuinely don't know, and I don't want to guess in a room where it might get quoted.",
    "timestamp": 182.6
   },
   {
    "speaker": "Sam Whitfield",
    "text": "Then let's get the number before the argument. Can you pull it both ways?",
    "timestamp": 209.4
   },
   {
    "speaker": "Aisha Diallo",
    "text": "Yes. Give me a day.",
    "timestamp": 221.0
   },
   {
    "speaker": "Sam Whitfield",
    "text": "That's the right shape. Marcus said at kickoff he'd own the ruling — this is the first thing to send him, with both numbers attached. A decision against real figures is a decision. A decision in the abstract is a preference.",
    "timestamp": 228.7
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "So what do I do with the metrics block in the meantime? I don't want to sit on my hands.",
    "timestamp": 267.3
   },
   {
    "speaker": "Aisha Diallo",
    "text": "Most of the metrics aren't disputed. Churn, MRR, new subscriptions, reactivations — nobody argues about those.",
    "timestamp": 278.9
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Then I'll land the uncontested ones and stub active_subscribers with a comment pointing at the open decision. The moment Marcus rules, it's a one-line change.",
    "timestamp": 296.4
   },
   {
    "speaker": "Sam Whitfield",
    "text": "Good. And put the CI checks in now, before any migration starts — I don't want a semantic layer change landing without a test once the dashboards depend on it.",
    "timestamp": 324.1
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Already scoped. That's this week.",
    "timestamp": 348.8
   },
   {
    "speaker": "Aisha Diallo",
    "text": "This is the conversation I've been trying to have internally for a year, incidentally. It took an external party asking the question.",
    "timestamp": 356.2
   },
   {
    "speaker": "Sam Whitfield",
    "text": "It usually does. Nobody wants to be the one who reopens a definition everyone's quietly been living with.",
    "timestamp": 379.5
   }
  ],
  "attendees": [
   {
    "email": "sam@vector.test",
    "name": "Sam Whitfield",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "aisha@beehiiv.com",
    "name": "Aisha Diallo",
    "domain": "beehiiv.com"
   }
  ],
  "slug": "23-technical-beehiiv",
  "daysAgo": 3
 },
 {
  "id": "A82F5C31-6E49-4B70-9D18-3C7E0B4A9F26",
  "title": "Vector × Ashby — embedded analytics kickoff",
  "duration_seconds": 2810,
  "language": "en",
  "summary": "Kickoff for the Ashby embedded analytics rollout. They run dbt Core on Snowflake, repo on GitHub, and are moving reporting off Mode. The distinguishing requirement is that Ashby wants to embed Vector dashboards inside their own product for their customers, not just use them internally — so row-level permissions are a first-class concern rather than an afterthought. Nate wants the executive KPI dashboard internally first to prove parity, then embedding. fct_pipeline is the anchor fact table. Access was agreed with no obstacles and Ritu committed to having everything provisioned within the week.",
  "action_items": [
   "Ritu to provision a read-only Snowflake service account scoped to the ANALYTICS schema",
   "Ritu to add Vector Cloud static IPs to the Snowflake network policy",
   "Ritu to grant Vector read access to the dbt project repo on GitHub",
   "Caroline to send the implementation plan and weekly sync invite",
   "Nate to confirm which customer-facing metrics are in scope for embedding"
  ],
  "key_decisions": [
   "Internal parity first, customer-facing embedding second — embedding does not start until parity is signed off",
   "fct_pipeline is the first fact table to get a metrics block",
   "Okta is the SSO provider; row-level permissions are in scope from day one, not deferred"
  ],
  "topics": [
   "kickoff",
   "snowflake",
   "mode migration",
   "embedded analytics",
   "row-level permissions",
   "okta"
  ],
  "discussion_flow": [
   "intros",
   "current stack walkthrough",
   "embedding requirement",
   "goals and success criteria",
   "technical prerequisites",
   "next steps"
  ],
  "notes": "Different shape to our usual onboarding — the end users are Ashby's customers, not Ashby's staff, so permissions and multi-tenancy are the real project. Nate is pragmatic and clear about sequencing. Ritu is fast and unblocked. Low-risk account on current evidence.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Nate Coleman",
   "1": "Ritu Sharma",
   "2": "Theo Okonkwo"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Thanks for the time. I want to spend most of this on the embedding requirement, because it makes your project meaningfully different from a standard rollout.",
    "timestamp": 5.6
   },
   {
    "speaker": "Nate Coleman",
    "text": "Agreed, and I'm glad you led with that. The internal use case is real but it's not the reason we bought. Our customers want analytics inside Ashby, and right now we hand-build every one of those views.",
    "timestamp": 22.1
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "So the end user is a recruiter at one of your customers, looking at their own hiring pipeline, inside your product.",
    "timestamp": 51.4
   },
   {
    "speaker": "Nate Coleman",
    "text": "Exactly. And they must never, under any circumstances, see another customer's data.",
    "timestamp": 63.8
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Then row-level permissions aren't a phase-three nicety, they're load-bearing from the first dashboard. That changes how I'd sequence this.",
    "timestamp": 72.3
   },
   {
    "speaker": "You",
    "text": "It does. Nate, how do you want to order it? My instinct is prove parity internally before you put anything in front of a paying customer.",
    "timestamp": 94.7
   },
   {
    "speaker": "Nate Coleman",
    "text": "That's my instinct too. If our own exec dashboard doesn't match Mode, I'm certainly not shipping it to customers. Internal parity first. Embedding second.",
    "timestamp": 111.2
   },
   {
    "speaker": "You",
    "text": "Good. That's the plan then.",
    "timestamp": 139.5
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Ritu, what's underneath? Warehouse, repo, models?",
    "timestamp": 146.9
   },
   {
    "speaker": "Ritu Sharma",
    "text": "Snowflake, dbt Core, GitHub. Around eighty models. fct_pipeline is the one you want — it's every candidate stage transition and it's what every customer question ultimately reduces to.",
    "timestamp": 154.3
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Then that's where the first metrics block goes. What do you need from us to get me access?",
    "timestamp": 186.0
   },
   {
    "speaker": "Ritu Sharma",
    "text": "Nothing, I can just do it. Read-only service account on ANALYTICS, your IPs on the network policy, repo read access. I'll have it done this week.",
    "timestamp": 195.7
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "That is a refreshingly short answer.",
    "timestamp": 219.4
   },
   {
    "speaker": "Ritu Sharma",
    "text": "We're a small team. There's nobody to ask.",
    "timestamp": 226.8
   },
   {
    "speaker": "Nate Coleman",
    "text": "One thing I do need to go away and figure out — exactly which metrics we're comfortable exposing to customers. Some of what's in fct_pipeline is benchmarking data across our whole book, and that's commercially sensitive.",
    "timestamp": 238.2
   },
   {
    "speaker": "You",
    "text": "That's an important call and it's yours to make, not ours. Can you come back with a scoped list of customer-facing metrics before we start the embedding phase?",
    "timestamp": 269.5
   },
   {
    "speaker": "Nate Coleman",
    "text": "Yes. I'll have it well before you need it.",
    "timestamp": 293.1
   },
   {
    "speaker": "You",
    "text": "Perfect. I'll send the plan and a weekly sync. Ritu, ping us the moment access lands and Theo will start the same day.",
    "timestamp": 301.6
   }
  ],
  "attendees": [
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "nate@ashbyhq.com",
    "name": "Nate Coleman",
    "domain": "ashbyhq.com"
   },
   {
    "email": "ritu@ashbyhq.com",
    "name": "Ritu Sharma",
    "domain": "ashbyhq.com"
   }
  ],
  "slug": "24-kickoff-ashby",
  "daysAgo": 36
 },
 {
  "id": "D40B7A16-C583-49E2-B1F7-2E86039C5A4D",
  "title": "Ashby weekly sync — parity check + embedding scope",
  "duration_seconds": 2144,
  "language": "en",
  "summary": "Weekly sync. The semantic layer is done and the executive KPI dashboard is close to parity with Mode, with one open discrepancy: time-to-hire is running about a day and a half lower in Vector because Mode counts calendar days and the dbt model counts business days. Nate confirmed the dbt definition is the correct one and Mode has been wrong for two years, so parity will be declared against the corrected number with a note to the exec team. Team dashboard migration is deliberately on hold until that lands. Okta SSO configuration is underway. Nate delivered the customer-facing metric list, which excludes all cross-customer benchmarking fields as expected.",
  "action_items": [
   "Ritu to document the business-day vs calendar-day discrepancy for the exec team so nobody thinks the number dropped",
   "Nate to sign off parity on the executive KPI dashboard once the note is circulated",
   "Theo to unblock team dashboard migration as soon as parity is signed off",
   "Theo to finish Okta SAML configuration and test with a non-admin account",
   "Caroline to schedule the AI analyst pilot walkthrough for the recruiting ops team"
  ],
  "key_decisions": [
   "The dbt business-day definition of time-to-hire is authoritative; Mode's calendar-day figure was wrong and will not be replicated",
   "Team dashboard migration stays on hold until executive parity is signed off",
   "Cross-customer benchmarking fields are excluded from anything customer-facing"
  ],
  "topics": [
   "parity",
   "time-to-hire",
   "mode migration",
   "okta sso",
   "embedding scope",
   "ai analyst"
  ],
  "discussion_flow": [
   "parity status",
   "time-to-hire discrepancy",
   "what stays blocked",
   "sso progress",
   "embedding metric list",
   "next steps"
  ],
  "notes": "Textbook example of a migration surfacing a bug in the thing being migrated from. Nate handled it well — he could have asked us to bug-for-bug replicate Mode and instead chose to fix the number. The on-hold status on team dashboards is intentional and healthy, not a stall.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Nate Coleman",
   "1": "Ritu Sharma",
   "2": "Theo Okonkwo"
  },
  "transcript": [
   {
    "speaker": "You",
    "text": "Theo, where are we on the exec dashboard?",
    "timestamp": 4.3
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Rebuilt and matching, with one exception. Time-to-hire comes out about a day and a half lower in Vector than in Mode, consistently, across every segment.",
    "timestamp": 11.8
   },
   {
    "speaker": "Nate Coleman",
    "text": "Consistently is interesting. A random discrepancy is a bug, a consistent one is a definition.",
    "timestamp": 39.2
   },
   {
    "speaker": "Ritu Sharma",
    "text": "It's a definition. I dug into it yesterday. The dbt model counts business days between application and offer. The Mode query counts calendar days. Nobody noticed because nobody ever put the two numbers side by side.",
    "timestamp": 47.6
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "So which is right?",
    "timestamp": 78.1
   },
   {
    "speaker": "Nate Coleman",
    "text": "Business days. Unambiguously. If a candidate sits over a weekend that's not our recruiters being slow. The dbt model is correct and the Mode dashboard has been overstating time-to-hire for about two years.",
    "timestamp": 84.9
   },
   {
    "speaker": "You",
    "text": "I want to flag the awkward part, because it'll land on you rather than us. The moment you switch, your headline recruiting metric improves by a day and a half overnight, and it will look like someone is massaging the number.",
    "timestamp": 112.4
   },
   {
    "speaker": "Nate Coleman",
    "text": "Yes. That's exactly what it'll look like.",
    "timestamp": 141.0
   },
   {
    "speaker": "Ritu Sharma",
    "text": "I'll write it up properly. What the old query did, what the new one does, why business days is the right basis, and a chart showing both series so it's obvious the shape didn't change, only the level.",
    "timestamp": 149.7
   },
   {
    "speaker": "You",
    "text": "That's exactly right, and send it before the dashboard goes live rather than after. Explaining a number change in advance is a memo; explaining it afterwards is a defence.",
    "timestamp": 178.3
   },
   {
    "speaker": "Nate Coleman",
    "text": "Noted. Once that circulates I'll sign off parity.",
    "timestamp": 203.6
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "I've kept the team dashboard migration on hold deliberately until that happens. No point migrating forty dashboards onto a metric definition that might still change.",
    "timestamp": 214.2
   },
   {
    "speaker": "You",
    "text": "Right call. Keep it there.",
    "timestamp": 241.8
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "SSO is in progress. Okta SAML is configured, I want to test it end to end with a non-admin account before I call it done — admin accounts hide permission bugs.",
    "timestamp": 249.5
   },
   {
    "speaker": "Nate Coleman",
    "text": "Use mine, I'm not an admin in Vector.",
    "timestamp": 277.0
   },
   {
    "speaker": "Nate Coleman",
    "text": "Also — I've got the customer-facing metric list for you. Pipeline volume, stage conversion, time-in-stage, offer acceptance. All scoped to the customer's own data. Everything benchmark-related is out.",
    "timestamp": 286.4
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "That's a clean list and every one of those is already in the semantic layer. Embedding will be quick once permissions are locked.",
    "timestamp": 318.9
   },
   {
    "speaker": "You",
    "text": "Good week. I'll get the AI analyst walkthrough booked with recruiting ops.",
    "timestamp": 340.2
   }
  ],
  "attendees": [
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "nate@ashbyhq.com",
    "name": "Nate Coleman",
    "domain": "ashbyhq.com"
   },
   {
    "email": "ritu@ashbyhq.com",
    "name": "Ritu Sharma",
    "domain": "ashbyhq.com"
   }
  ],
  "slug": "25-sync-ashby",
  "daysAgo": 4
 },
 {
  "id": "7E19C4D2-05FA-4638-8B93-D1C6427E0A85",
  "title": "Modal weekly sync — dashboard migration + SSO",
  "duration_seconds": 2287,
  "language": "en",
  "summary": "Weekly sync. The semantic layer and CI checks are complete and the executive KPI dashboard rebuild is underway. Migration of the team dashboards has been paused pending an unresolved question about GPU cost attribution — the finance view allocates idle GPU time to the team that reserved the capacity, while the platform view allocates it to no one, and the two produce materially different cost-per-team numbers. Elena is taking the decision. Google Workspace SAML SSO configuration is in progress. The AI analyst pilot is running with a small group and early feedback is positive, though Jonah flagged that it answers confidently on metrics that are not yet in the semantic layer, which needs guardrails.",
  "action_items": [
   "Elena to rule on whether idle GPU time is attributed to the reserving team or left unallocated",
   "Jonah to pull cost-per-team both ways so the decision is made against real numbers",
   "Theo to add guardrails so the AI analyst refuses questions outside the semantic layer rather than guessing",
   "Theo to finish Google Workspace SAML configuration",
   "Elena to nominate the second wave of AI analyst pilot users"
  ],
  "key_decisions": [
   "Team dashboard migration stays paused until GPU cost attribution is settled",
   "AI analyst must decline out-of-scope questions rather than answer them speculatively",
   "Parity sign-off is a hard gate before company-wide rollout"
  ],
  "topics": [
   "dashboard migration",
   "gpu cost attribution",
   "sso",
   "ai analyst",
   "guardrails",
   "parity"
  ],
  "discussion_flow": [
   "semantic layer status",
   "cost attribution problem",
   "sso progress",
   "ai analyst feedback",
   "guardrails",
   "next steps"
  ],
  "notes": "Solid account. The cost attribution question is a genuine business decision rather than a technical blocker, and Elena is the right person to take it. Jonah's guardrails observation is sharp and worth generalising — an AI analyst that confidently answers off a metric it doesn't have is worse than one that says no.",
  "speaker_count": 4,
  "speaker_names": {
   "-1": "You",
   "0": "Elena Petrova",
   "1": "Jonah Fields",
   "2": "Theo Okonkwo"
  },
  "transcript": [
   {
    "speaker": "Theo Okonkwo",
    "text": "Semantic layer's done, CI checks are green, and I'm most of the way through the exec KPI rebuild. The blocker is one level up from me.",
    "timestamp": 6.1
   },
   {
    "speaker": "Elena Petrova",
    "text": "Go on.",
    "timestamp": 27.4
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Cost per team. When a team reserves GPU capacity and doesn't use all of it, who pays for the idle time? Your finance model charges it to the reserving team. The platform team's own dashboard leaves it unallocated. Both are in production and they disagree by a lot.",
    "timestamp": 33.8
   },
   {
    "speaker": "Jonah Fields",
    "text": "Not by a little, either. For some teams it's a thirty percent swing in their reported cost.",
    "timestamp": 71.2
   },
   {
    "speaker": "Elena Petrova",
    "text": "Of course it is. Those two dashboards were built eighteen months apart by people who never spoke.",
    "timestamp": 80.6
   },
   {
    "speaker": "You",
    "text": "Which is the honest number, in your view?",
    "timestamp": 96.3
   },
   {
    "speaker": "Elena Petrova",
    "text": "It depends what you're using it for, which is the annoying answer. If I'm asking whether a team is being wasteful, charging them for idle reservations is exactly right — that's the behaviour I want to discourage. If I'm asking what a team actually consumed, it's wrong.",
    "timestamp": 104.9
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "Then it might be two metrics rather than one. Reserved cost and consumed cost, both defined, both visible, and it's clear which is which.",
    "timestamp": 146.5
   },
   {
    "speaker": "Elena Petrova",
    "text": "That's better than what I was about to say. Let me sit with it for a day.",
    "timestamp": 172.0
   },
   {
    "speaker": "You",
    "text": "Jonah, could you pull cost-per-team both ways in the meantime? Elena's decision is easier against real figures than in the abstract.",
    "timestamp": 180.7
   },
   {
    "speaker": "Jonah Fields",
    "text": "Yes. I'll have it tomorrow.",
    "timestamp": 204.1
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "And I'll hold the team dashboard migration until it's settled. Migrating forty dashboards onto a cost metric that's about to change would be an expensive mistake.",
    "timestamp": 211.8
   },
   {
    "speaker": "You",
    "text": "Agreed. What's the read on the AI analyst pilot?",
    "timestamp": 238.4
   },
   {
    "speaker": "Jonah Fields",
    "text": "Broadly good. People like it. One thing worries me though — I asked it a question about something we haven't modelled yet, and instead of saying it didn't know, it gave me a confident answer that it had clearly constructed from adjacent tables. It was wrong, and it was wrong very fluently.",
    "timestamp": 246.9
   },
   {
    "speaker": "Theo Okonkwo",
    "text": "That's a guardrails gap and it's on us. It should refuse anything that isn't backed by a defined metric. I'd rather it be unhelpful than confidently wrong.",
    "timestamp": 288.3
   },
   {
    "speaker": "Elena Petrova",
    "text": "Strongly agree. One confidently wrong number in a leadership meeting and nobody trusts the tool again.",
    "timestamp": 314.7
   },
   {
    "speaker": "You",
    "text": "Theo will take that as a priority. Elena, if you can nominate the second pilot wave we'll have them ready once guardrails are in.",
    "timestamp": 328.2
   }
  ],
  "attendees": [
   {
    "email": "theo@vector.test",
    "name": "Theo Okonkwo",
    "domain": "vector.test"
   },
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "elena@modal.com",
    "name": "Elena Petrova",
    "domain": "modal.com"
   },
   {
    "email": "jonah@modal.com",
    "name": "Jonah Fields",
    "domain": "modal.com"
   }
  ],
  "slug": "26-sync-modal",
  "daysAgo": 6
 },
 {
  "id": "B5741E0C-9D26-4A83-97F1-6082C3E5B14A",
  "title": "Huel weekly sync — order metrics + Entra SSO",
  "duration_seconds": 2019,
  "language": "en",
  "summary": "Weekly sync. Work on the fct_orders metrics block is progressing but the subscription revenue definition is still open: Huel's finance team recognises subscription revenue on dispatch, while the growth team reports it on order placement, and the gap is material during promotional periods when orders spike days before dispatch. Chloe is pulling both series. Microsoft Entra SAML configuration is underway and Raj hit a group-claim mapping issue that is slowing the role and permission work, which is why that task is on hold. Dashboard migration is progressing well and the Tableau inventory is nearly complete.",
  "action_items": [
   "Oliver to rule on whether subscription revenue is recognised on dispatch or on order placement",
   "Chloe to pull both revenue series across the last two promotional periods to quantify the gap",
   "Raj to fix the Entra group-claim mapping so roles come through on the SAML assertion",
   "Ines to unblock role and permission mapping once group claims are working",
   "Chloe to finish the Tableau dashboard inventory"
  ],
  "key_decisions": [
   "Role and permission mapping stays on hold until Entra group claims are fixed — no manual role assignment as a workaround",
   "Revenue recognition basis will be decided against the promotional-period numbers, not in principle",
   "Parity sign-off against Tableau is a hard gate before the wider rollout"
  ],
  "topics": [
   "fct_orders",
   "revenue recognition",
   "entra sso",
   "group claims",
   "tableau migration",
   "permissions"
  ],
  "discussion_flow": [
   "metrics block status",
   "revenue recognition dispute",
   "sso and group claims",
   "dashboard migration",
   "next steps"
  ],
  "notes": "Two open definitional questions, both real, both being handled properly. Raj is competent and the Entra issue is genuinely fiddly rather than neglect. The temptation to work around the group-claim problem by assigning roles by hand was raised and correctly rejected — it would have created a permissions model nobody could audit.",
  "speaker_count": 5,
  "speaker_names": {
   "-1": "You",
   "0": "Oliver Bennett",
   "1": "Chloe Ashworth",
   "2": "Raj Mehta",
   "3": "Ines Ferreira"
  },
  "transcript": [
   {
    "speaker": "Ines Ferreira",
    "text": "Chloe, where are we on the fct_orders metrics block?",
    "timestamp": 5.2
   },
   {
    "speaker": "Chloe Ashworth",
    "text": "Most of it is landed. Order volume, AOV, repeat rate, churn — all defined and tested. Subscription revenue is the one I can't close.",
    "timestamp": 12.7
   },
   {
    "speaker": "Ines Ferreira",
    "text": "Because?",
    "timestamp": 38.1
   },
   {
    "speaker": "Chloe Ashworth",
    "text": "Finance recognises it on dispatch. Growth reports it on order placement. Ninety-five percent of the time those are the same day and nobody cares. But during a promotion, orders spike and dispatch lags by three or four days, and suddenly the two numbers are meaningfully apart in exactly the week everyone is staring at the dashboard.",
    "timestamp": 42.9
   },
   {
    "speaker": "Oliver Bennett",
    "text": "That explains an argument I sat through in January and did not understand at the time.",
    "timestamp": 88.4
   },
   {
    "speaker": "You",
    "text": "This is the most common thing we find, honestly. Two teams have been quietly right about different things for years and it only surfaces when someone tries to write the definition down.",
    "timestamp": 97.0
   },
   {
    "speaker": "Oliver Bennett",
    "text": "For the exec dashboard it has to be dispatch. That's what we report externally and I'm not having two versions of revenue in the building.",
    "timestamp": 118.6
   },
   {
    "speaker": "Chloe Ashworth",
    "text": "Growth won't love that. Their whole promotional readout is based on placement.",
    "timestamp": 143.2
   },
   {
    "speaker": "You",
    "text": "Then let's not force them to give it up — define both, name them precisely, and make the exec dashboard use the dispatch one. Growth keeps their metric, it just stops being called the same thing.",
    "timestamp": 151.8
   },
   {
    "speaker": "Oliver Bennett",
    "text": "That's reasonable. Chloe, pull both series over the last two promotions so I can see the size of the gap before I commit.",
    "timestamp": 180.3
   },
   {
    "speaker": "Chloe Ashworth",
    "text": "On it.",
    "timestamp": 204.7
   },
   {
    "speaker": "Ines Ferreira",
    "text": "Raj, SSO?",
    "timestamp": 210.5
   },
   {
    "speaker": "Raj Mehta",
    "text": "Entra SAML is configured and authentication works. The problem is group claims — the assertion is coming through without the group memberships, so Vector sees a valid user with no role.",
    "timestamp": 217.9
   },
   {
    "speaker": "Ines Ferreira",
    "text": "Which is why the role and permission mapping is stuck.",
    "timestamp": 251.4
   },
   {
    "speaker": "Raj Mehta",
    "text": "Exactly. It's a claims configuration thing on our side, not a Vector problem. I've had it before, it's fiddly but it's solvable. Give me a few days.",
    "timestamp": 258.0
   },
   {
    "speaker": "Chloe Ashworth",
    "text": "Could we not just assign the roles by hand in the meantime so we're not blocked?",
    "timestamp": 283.6
   },
   {
    "speaker": "Raj Mehta",
    "text": "We could, and then in six months nobody will remember which roles are real and which ones I typed in manually. I'd rather wait.",
    "timestamp": 292.1
   },
   {
    "speaker": "You",
    "text": "Agreed, and I'd have argued the same. A permissions model you can't audit is worse than a delayed one.",
    "timestamp": 316.8
   },
   {
    "speaker": "Ines Ferreira",
    "text": "Then it stays on hold. Chloe, how's the Tableau inventory?",
    "timestamp": 334.5
   },
   {
    "speaker": "Chloe Ashworth",
    "text": "Nearly done. Around sixty dashboards, of which maybe eighteen are actually used. The rest are archaeology.",
    "timestamp": 342.2
   }
  ],
  "attendees": [
   {
    "email": "ines@vector.test",
    "name": "Ines Ferreira",
    "domain": "vector.test"
   },
   {
    "email": "caroline@vector.test",
    "name": "Caroline Jaworsky",
    "domain": "vector.test"
   },
   {
    "email": "oliver@huel.com",
    "name": "Oliver Bennett",
    "domain": "huel.com"
   },
   {
    "email": "chloe@huel.com",
    "name": "Chloe Ashworth",
    "domain": "huel.com"
   },
   {
    "email": "raj@huel.com",
    "name": "Raj Mehta",
    "domain": "huel.com"
   }
  ],
  "slug": "27-sync-huel",
  "daysAgo": 4
 }
];

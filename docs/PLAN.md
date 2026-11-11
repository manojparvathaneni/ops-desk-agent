# Build plan

One system, twelve weekends. Weekdays are for the course, the books and exercises. Weekends are for building with what the weekdays covered.

## Rules

* One project and one repo for all twelve weeks.
* I type the code. The coding agent reviews, commits and tags.
* Every build ends with something committed and tagged.
* From week 2, save five test prompts with the expected behavior every weekend. They go in `evals`.
* Thursday ends with a short build brief for the weekend. Briefs go in `docs/briefs`.
* The plan is fixed through Jan 31, 2027. Monday reviews adjust pace and catch up, and they don't add topics. New ideas go on the parked list.
* Exercises and experiments live in a separate practice repo. This repo holds the twelve builds and nothing else.

## Weekend builds

| Week | Saturday | Sunday |
|---|---|---|
| 1, Nov 14 | Init the project, install the SDK, send one request from a typed CLI | Error handling, key through an environment variable, typed functions, README |
| 2, Nov 21 | Chat loop with message history and a system prompt | Streaming output, first five test prompts |
| 3, Nov 28 | Shipment data model with Zod, draft a customer reply, validate the output | Put it behind one HTTP endpoint, five more test prompts |
| 4, Dec 5 | Function calling with shipment lookup tools and a Tavily web search tool | Docker, deploy behind Caddy on a real domain, first demo |
| 5, Dec 12 | Agent loop by hand with stop conditions and a turn limit | Error recovery and tests, then compare with the Claude Agent SDK |
| 6, Dec 19 | MCP server that exposes the shipment tools and the web search tool | Connect it to a Claude client and test each tool |
| 7, Dec 26 | Postgres on cooper, reachable only over Tailscale. Schema, load seed data, point the tools at it | Conversation memory tables |
| 8, Jan 2 | Golden set of about thirty cases, code graders and one model grader | Script that runs evals on every change, record the baseline |
| 9, Jan 9 | Tracing on every model and tool call | Read the traces, find the slowest step, second demo |
| 10, Jan 16 | Ingest documents, retrieve with full text search, measure | Add pgvector with OpenAI embeddings, measure again and compare |
| 11, Jan 23 | Basic web chat UI against the API | Guardrails: input validation, an escalation path that emails a human through AgentMail, cost and latency limits |
| 12, Jan 30 | Red team pass on the deployed app, including injection through web search results, fix findings | Final demo and write up |

## Weekday learning

| Weeks | Focus |
|---|---|
| 1 to 4 | "TypeScript: From First Steps to Professional" by Anjana Vakil, with Total TypeScript exercises on the same topics |
| 4 to 5 | Selected sections of Anjana Vakil's JavaScript projects course, implemented in TypeScript |
| 5 to 8 | Remaining Total TypeScript chapters, with matching chapters of Programming TypeScript |
| 6 | MCP docs |
| 9 | Observability reading and OpenTelemetry for Node |
| 10 | Postgres full text search, pgvector, embeddings |
| 11 to 12 | Browser basics, guardrails, red team preparation |

Designing Data-Intensive Applications runs alongside as slower reading.

## Friday exploration

Friday evening is for exploring how good engineers work with coding agents. It is reading and trying things out, and it does not produce code for the weekday study or the weekend builds.

* Catch up comes first. If a weekday item slipped, Friday goes to that.
* One topic per Friday, 60 to 90 minutes.
* It ends with a short note on what I tried and what I would keep.
* Experiments happen in the practice repo. Nothing from them enters this repo before Jan 31, 2027.
* After a heavy week I skip it and rest. Skipped Fridays are not made up.

| Friday | Topic |
|---|---|
| Nov 13 | Matt Pocock's skills repo: the README and the grill-me, tdd and codebase-design skills |
| Nov 20 | Matt Pocock's skills repo: install it in the practice repo and run one skill end to end |
| Nov 27 | pstack from the Cursor plugins repo |
| Dec 4 | Compound engineering |
| Dec 11 | Compound writing |
| Dec 18 | No slop repos and engineering practices for agent harnesses |
| Dec 25 and Jan 1 | Rest |
| Jan 8 onward | Chosen at the Monday review |

## Design decisions

* Claude for everything that generates or reasons. Embeddings are the one exception and use OpenAI.
* Embeddings sit behind one function, and the model name is stored beside each vector.
* No vector index at first. An exact scan is fast at this size.
* Retrieval starts with full text search. Vectors get added only after evals can measure the difference.
* The agent loop is written by hand before any SDK does it for me.
* Outside services are limited to four, and each one arrives inside a build that already exists: Tavily for web search in week 4, one of my domains for the deployment in week 4, Tailscale for private access to Postgres in week 7, and AgentMail for escalation email in week 11.
* Web search results are untrusted input. They get the same treatment as documents in the red team pass.

## Parked until this cycle ends on Jan 31, 2027

Nothing on this list starts before the final demo. It gets reviewed at the Monday review on Feb 1, 2027, when the next cycle is chosen.

* Go
* Other courses and certifications
* Porting one feature to a popular AI framework
* A locally hosted embedding model
* A personal assistant agent that messages me each day and tracks my progress, built from the parts this project teaches
* Perplexity API, since Tavily already covers web search
* Cloudflare Workers, a different runtime from Node

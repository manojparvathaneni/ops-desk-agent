# Build plan

One system, twelve weekends. Weekdays are for the course, the books and exercises. Weekends are for building with what the weekdays covered.

## Rules

* One project and one repo for all twelve weeks.
* I type the code. The coding agent reviews, commits and tags.
* Every build ends with something committed and tagged.
* From week 2, save five test prompts with the expected behavior every weekend. They go in `evals`.
* Thursday ends with a short build brief for the weekend. Briefs go in `docs/briefs`.
* The plan changes only at a Monday review, and only at a four week boundary. New ideas go on the parked list.

## Weekend builds

| Week | Saturday | Sunday |
|---|---|---|
| 1, Nov 14 | Init the project, install the SDK, send one request from a typed CLI | Error handling, key through an environment variable, typed functions, README |
| 2, Nov 21 | Chat loop with message history and a system prompt | Streaming output, first five test prompts |
| 3, Nov 28 | Shipment data model with Zod, draft a customer reply, validate the output | Put it behind one HTTP endpoint, five more test prompts |
| 4, Dec 5 | Function calling with shipment lookup tools | Docker, deploy behind Caddy, first demo |
| 5, Dec 12 | Agent loop by hand with stop conditions and a turn limit | Error recovery and tests, then compare with the Claude Agent SDK |
| 6, Dec 19 | MCP server that exposes the shipment tools | Connect it to a Claude client and test each tool |
| 7, Dec 26 | Postgres schema, load seed data, point the tools at it | Conversation memory tables |
| 8, Jan 2 | Golden set of about thirty cases, code graders and one model grader | Script that runs evals on every change, record the baseline |
| 9, Jan 9 | Tracing on every model and tool call | Read the traces, find the slowest step, second demo |
| 10, Jan 16 | Ingest documents, retrieve with full text search, measure | Add pgvector with OpenAI embeddings, measure again and compare |
| 11, Jan 23 | Basic web chat UI against the API | Guardrails: input validation, escalation path, cost and latency limits |
| 12, Jan 30 | Red team pass on the deployed app, fix findings | Final demo and write up |

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

## Design decisions

* Claude for everything that generates or reasons. Embeddings are the one exception and use OpenAI.
* Embeddings sit behind one function, and the model name is stored beside each vector.
* No vector index at first. An exact scan is fast at this size.
* Retrieval starts with full text search. Vectors get added only after evals can measure the difference.
* The agent loop is written by hand before any SDK does it for me.

## Parked until after the second demo

* Go
* Other courses and certifications
* Porting one feature to a popular AI framework
* A locally hosted embedding model

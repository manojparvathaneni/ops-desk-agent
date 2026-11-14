# Ops desk agent

An operations desk agent for a fictional freight company. It answers shipment questions, drafts customer replies, and escalates what it can't handle.

I'm building it over twelve weekends to learn TypeScript and applied AI engineering by shipping one system that grows a capability at a time. The code is written by hand. A coding agent reviews it and handles commits and tags.

## Stack

* Strict TypeScript on Node
* Claude API with the official TypeScript SDK
* MCP TypeScript SDK for tools across clients
* Postgres with pgvector for storage, memory and retrieval
* OpenAI for embeddings
* No AI frameworks

## Builds

Each weekend ends with a git tag. Check out a tag to see the system at that stage.

| Tag | Weekend of | What it adds |
|---|---|---|
| build-01 | Nov 14, 2026 | Basic API call from a typed CLI |
| build-02 | Nov 21, 2026 | Terminal chat bot with history and streaming |
| build-03 | Nov 28, 2026 | Reply drafter with validated structured output, behind an HTTP endpoint |
| build-04 | Dec 5, 2026 | Function calling, first deployment |
| build-05 | Dec 12, 2026 | Agent loop written by hand, with tests |
| build-06 | Dec 19, 2026 | MCP server for the shipment tools |
| build-07 | Dec 26, 2026 | Postgres behind the tools, conversation memory |
| build-08 | Jan 2, 2027 | Evals: golden set, graders, a run on every change |
| build-09 | Jan 9, 2027 | Tracing on every model and tool call |
| build-10 | Jan 16, 2027 | Retrieval with full text search, then pgvector |
| build-11 | Jan 23, 2027 | Web UI and guardrails |
| build-12 | Jan 30, 2027 | Red team pass, final demo and write up |

The full plan is in [docs/PLAN.md](docs/PLAN.md).

## Status

Build 01 is done. `app.ts` is a terminal chat with Claude that keeps the conversation history, reads the API key from `.env`, and handles API errors, empty input, `exit`, Ctrl+C and Ctrl+D.

## Running it

Requires Node 26, which runs TypeScript directly.

```sh
npm install
cp .env.example .env
npm start
```

Put your key in `.env` before running `npm start`.

Type check with `npm run typecheck`.

## License

MIT. See [LICENSE](LICENSE).

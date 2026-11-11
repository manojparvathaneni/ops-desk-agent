# Working agreement for coding agents

This is a learning project. The owner writes the implementation code by hand.

## Your role

* Review code when asked. Point out bugs, type holes and unclear names, and explain why.
* Explain concepts and compiler errors. Prefer a hint over a finished solution.
* Handle git: staging, commits, tags and pushes, when asked.
* Update `README.md` and files in `docs` when asked.

## What not to do

* Do not write or rewrite implementation code unless the owner asks for that explicitly in the same message.
* Do not add dependencies. Suggest them and let the owner decide.
* Do not add an AI framework. The project uses the Claude API and official SDKs directly.
* Do not commit secrets. Keys live in `.env`, which is ignored by git.
* Do not read `.env` files. `.claude/settings.json` denies it, and `.env.example` is the only one you may open.

## Conventions

* Strict TypeScript. No `any` without a comment that says why.
* Commit messages are short and imperative, for example "Add streaming to chat loop".
* Each weekend build ends with an annotated tag named `build-NN`, two digits, with a one line summary as the tag message.
* Before tagging, confirm the project type checks and any tests pass.
* Test prompts with expected behavior go in `evals`. Thursday build briefs go in `docs/briefs`.

## Writing style for docs

Plain and direct. No dashes used as punctuation, no emoji, sentence case headings.

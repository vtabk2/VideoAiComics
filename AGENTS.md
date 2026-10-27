# AGENTS.md instructions

<!-- CODEGRAPH_START -->
## CodeGraph

In repositories indexed by CodeGraph (a `.codegraph/` directory exists at the repo root), reach for it BEFORE grep/find or reading files when you need to understand or locate code:

- **MCP tool** (when available): `codegraph_explore` answers most code questions in one call — the relevant symbols' verbatim source plus the call paths between them, including dynamic-dispatch hops grep can't follow. Name a file or symbol in the query to read its current line-numbered source.
- **Shell** (always works): `codegraph explore "<symbol names or question>"` prints the same output.

If there is no `.codegraph/` directory, skip CodeGraph entirely — indexing is the user's decision.
<!-- CODEGRAPH_END -->

## Runtime AI skills

The `skills/` directory contains instructions for AI content generation. Before creating any image, audio, or video:

1. Identify the task type, such as character, background, hook, thumbnail, voice, or video.
2. Read the relevant skill files from `skills/` before preparing the prompt.
3. Apply those instructions together with the chapter's prompt and project settings.
4. Save the final prompt and generated assets in the correct project or chapter directory.

Do not generate an image or video before reading the applicable skill. If no applicable skill exists, report that clearly before proceeding with a fallback.

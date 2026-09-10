# Farmacia Ortopedia Albiñana

Astro 7 static site for Farmacia Ortopedia Albiñana, a pharmacy in Bétera, Spain. Content (blogs, brands, services, offers) is JSON-driven via Astro Content Collections. Bilingual: Spanish (default) / English (`/en/*`).

See [CLAUDE.md](./CLAUDE.md) for architecture details (i18n routing, content collections, styling conventions).

## Commands

Package manager is **pnpm**.

| Command             | Action                                    |
| :------------------ | :----------------------------------------- |
| `pnpm install`       | Install dependencies                       |
| `pnpm dev`           | Start local dev server at `localhost:4321` |
| `pnpm build`         | Build production site to `./dist/`         |
| `pnpm preview`       | Preview the production build locally       |
| `pnpm astro check`   | Type-check                                 |

## Editing content

Blogs, brands, services, and offers are hand-edited JSON under `src/content/*/`. See [CLAUDE.md](./CLAUDE.md#editing-content-json-directly) for the field conventions (e.g. the fixed `discount` patterns for offers).

## Claude Code skills

`.claude/skills/` has skills for the recurring content-editing workflows:

- **`add-blog`** — add a new blog post from pasted article text plus an image already placed in `public/blogs/`.
- **`add-offer`** — add one or more promotional offers from pasted lines (date range, brand, discount).

Use them from Claude Code by describing the task normally (e.g. pasting a new blog or a list of offers) — they trigger automatically.

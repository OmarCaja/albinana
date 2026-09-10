# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro 7 static site for **Farmacia Ortopedia Albiñana**, a pharmacy in Bétera, Spain. Content (blogs, brands, services, offers) is JSON-driven via Astro Content Collections. Bilingual: Spanish (default) / English.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml` is the lockfile — don't use npm/yarn).

```bash
pnpm install       # install dependencies
pnpm dev           # dev server at localhost:4321
pnpm build         # build to ./dist/
pnpm preview       # preview the production build
pnpm astro check   # type-check
```

There is no test suite or linter configured.

## Architecture

### i18n routing — pages are NOT duplicated per language

Spanish is the default locale with no URL prefix; English is served under `/en/*` (`astro.config.mjs`, `prefixDefaultLocale: false`). The `/en/*` route files do **not** reimplement the page — they just re-export the Spanish one as a component, e.g. `src/pages/en/index.astro` is only:

```astro
---
import Page from '../index.astro';
---
<Page />
```

The actual page component (in `src/pages/...`, without the `en/` prefix) detects the language itself at render time via `getLangFromUrl(Astro.url)` from `src/i18n/translations.ts`, then picks the right string/content field. When adding a new page or route, follow this pattern: build the page once under `src/pages/<route>`, then add a thin `src/pages/en/<route>` wrapper that imports and renders it — don't hand-write a parallel English page.

`useTranslations(lang)` returns a `t(key)` lookup against the `ui` dictionary in `translations.ts`; `getAlternateUrl` builds the hreflang-alternate links consumed by `Layout.astro`.

### Content collections (`src/content.config.ts`)

All four collections load from hand-edited JSON via `astro/loaders`' `file()` loader — there is no CMS:

- `blogs` ← `src/content/blogs/blogs.json`
- `brands` ← `src/content/brands/brands.json` (custom `parser` unwraps the top-level `marcas` key)
- `services` ← `src/content/services/services.json` (custom `parser` unwraps the top-level `servicios` key)
- `offers` ← `src/content/offers/offers.json`

Bilingual content fields use a `_en` suffix convention (`title` / `title_en`, `content` / `content_en`, etc.) with Spanish as the fallback when the `_en` field is missing. Follow this convention for any new translatable field instead of introducing a separate localization mechanism.

### Editing content JSON directly

**Blogs** (`src/content/blogs/blogs.json`): `id` becomes the URL slug (`/blogs/<id>`). `content`/`content_en` are raw HTML strings (`<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`) rendered by the blog template — don't add a markdown pipeline for this. Remove any test/mock blog entries before they ship.

**Offers** (`src/content/offers/offers.json`): new entries need a unique incrementing `id`, `startDate`/`endDate` (`YYYY-MM-DD`), `brand`, `products`/`products_en`, and `discount`. The `discount` field must match one of these exact patterns — the front-end parses it into human copy via `src/i18n/translations.ts`, it is never displayed raw:

| Pattern | Renders as |
|---|---|
| `"3X2"` | "Take 3 products and pay for only 2." |
| `"2nd UD 30%"` | "30% on the second unit." |
| `"2nd UD 10€"` | "10€ off the second unit." |
| `"20%"` | "20% direct discount." |
| `"3€"` | "3€ direct discount." |
| `"10€ IN 2UD"` | "10€ discount for 2 units." (has ISDIN/month-specific variants) |
| `"1UD 3€ 2UD 8€"` | "3€ on 1 unit or 8€ on 2 units." |
| `"20% IN PURCHASES > 10€"` | "20% discount for purchases over 10€." |
| `"50% X OTRO PRODUCTO"` | "50% off with the purchase of another product from the brand." |

Never put a free-text discount description directly in `discount` (e.g. `"20% (> 10€)"`) — add a new pattern and a matching translation/parsing case instead.

### Styling consistency

Reuse existing CSS custom properties from `src/styles/global.css` (`--color-primary`, `--glass-bg`, `--glass-border`, `--spacing-*`, border-radius tokens, etc.) rather than hardcoding values. Before adding or changing a component, check an existing analogous one (`OfferCard.astro`, `BlogCard.astro`) for the established pattern.

### Spanish copy conventions

Use sentence case, not Title Case: "23 de mayo: Día mundial contra el melanoma", not "23 de Mayo: Día Mundial contra el Melanoma". Don't write words in all caps for emphasis (avoid "LAS CAUSAS"; use "Las causas").

### Adding a new section

When enabling a new top-level section (e.g. a new content type with its own nav entry), remember to add its link to `src/components/HamburgerMenu.astro` — it's not derived automatically from routes.

## Claude Code skills

`.claude/skills/` has repeatable-workflow skills for this repo's content-editing tasks — prefer these over ad-hoc edits when the request matches:

- **`add-blog`**: turns a pasted article (title + Spanish body text) plus an image already dropped into `public/blogs/<folder>/` into a new `src/content/blogs/blogs.json` entry — derives the slug, matches the existing HTML/image-tag template, translates to English, and verifies with `pnpm build`.
- **`add-offer`**: turns pasted promo lines (date range, brand, discount description) into new `src/content/offers/offers.json` entries — converts dates, maps the discount description to one of the fixed `discount` patterns (adding a new pattern when needed), and verifies with `pnpm build`.

## Language rules

All code, identifiers, and comments must be in English. UI copy in the `ui` dictionaries (`src/i18n/translations.ts`) and content JSON stays in Spanish/English as appropriate — don't translate the Spanish content strings into code-style English.

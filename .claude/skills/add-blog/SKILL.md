---
name: add-blog
description: Add a new blog post to this Astro site (Farmacia Ortopedia Albiñana) from pasted article text plus an image the user has already dropped into public/blogs/. Use this whenever the user pastes blog content and asks to publish/add it as a new blog "like the existing ones", mentions "nuevo blog"/"nueva entrada de blog", or references a new image for a blog post — even if they don't explicitly say "use the blog skill". Handles slug/id generation, HTML formatting matching the existing template, bilingual translation, image placement, and verifies with a build.
---

# Add blog

The user runs a pharmacy blog and periodically pastes a full article (title +
body text, in Spanish) asking for it to be published "like the other blogs".
They've usually already dropped the accompanying image somewhere under
`public/blogs/`. Turn that into a new entry in
`src/content/blogs/blogs.json`.

## Steps

1. **Read the last 2-3 entries of `src/content/blogs/blogs.json`** to see the
   current total count and the most recent `id`, `content` HTML shape, and
   image-tag style — this is your template, copy it exactly (same inline
   `style` attribute on `<img>`, same tag vocabulary: `<h2>`, `<h3>`, `<p>`,
   `<ul>`, `<li>`, `<strong>` only, no markdown, no extra classes).

2. **Find the image.** The user places it in `public/blogs/<some-folder>/`
   before asking — the folder name does **not** always match the blog's
   final `id` (e.g. an existing post has id `cuidar-la-piel-despues-del-verano`
   but its image lives in `public/blogs/rutina-despues-del-verano/`). Find it
   by recency, not by name-guessing:
   ```bash
   find public/blogs -type f -newer src/content/blogs/blogs.json
   ```
   If that finds nothing (image added before the last JSON edit) fall back to
   `ls -lt` across `public/blogs/*/` and pick the newest file, or ask the
   user which folder it's in. Don't move or rename the image or its folder —
   reference it wherever it already sits.

3. **Derive the `id`** (URL slug) from the Spanish title: lowercase, strip
   accents (á→a, é→e, ñ→n, etc.), spaces and punctuation → single hyphens.
   Check it doesn't collide with an existing `id` in the JSON.

4. **Convert the pasted body into `content` HTML.** Keep the user's actual
   wording — don't rewrite or pad their content — just wrap it in the same
   tag structure the existing posts use (an `<h2>` per section heading,
   `<p>` for paragraphs, `<ul>/<li>` for lists, `<strong>` for emphasis).
   Insert the image once, right after the opening paragraph or first
   section (matching where recent posts place it), as:
   ```html
   <img src="/blogs/<image-folder>/<image-file>" alt="<short ES description>" style="max-width:400px; width:100%; height:auto; border-radius:12px; margin:20px 0; display:block; box-shadow:0 4px 10px rgba(0,0,0,0.1);" />
   ```
   Apply the Spanish copy conventions from `CLAUDE.md`: sentence case, no
   all-caps emphasis.

5. **Translate to English** for `title_en`, `description_en`, `content_en`
   — same HTML structure, same `<img>` tag but with an English `alt`. Keep
   brand/product names as-is.

6. **Write `description`/`description_en`**: one sentence, ~90-110
   characters, summarizing the post (match the length of recent entries).

7. **Set `pubDate`** to today (`YYYY-MM-DD`) unless the user gives a
   different date.

8. **Append the entry** to `blogs.json` with fields in this order: `id`,
   `title`, `title_en`, `description`, `description_en`, `pubDate`,
   `content`, `content_en`. Don't set the schema's `image`/`tags` fields —
   recent posts leave them unset and embed the image directly in `content`
   instead.

9. **Verify with a build**, not just a read of the JSON:
   ```bash
   pnpm build
   ```
   Then check `dist/blogs/<id>/index.html` and `dist/en/blogs/<id>/index.html`
   render the title, translated content, and that the `<img>` src resolves
   (file exists under `public/blogs/...` matching the src path). Clean up
   `dist/` afterward — it's a build artifact, not checked in.

## Notes

- No test suite/linter exists for this repo (`pnpm astro check` may try to
  install `@astrojs/check` interactively the first time — skip it and rely
  on `pnpm build`).
- Don't add a nav entry or anything to `HamburgerMenu.astro` — blogs are
  listed automatically from the collection, this only applies to new
  top-level sections.
- If several blogs are pasted in one message, process them all in one pass —
  one JSON diff, one build check at the end.
- Remove any test/mock blog entries before they ship (per `CLAUDE.md`).

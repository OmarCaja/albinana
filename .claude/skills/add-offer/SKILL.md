---
name: add-offer
description: Add one or more pharmacy promotional offers to this Astro site (Farmacia Ortopedia Albiñana) from raw pasted lines like "28/9/26 A 11/10/26  ISDIN  10€ EN LA 2ª UD FOTOPROTECTORES E ISDINCEUTICS" (dates, brand, discount description, tab- or space-separated). Use this whenever the user pastes new offers to add, mentions "nueva oferta"/"nuevas ofertas", or wants offers.json updated — even if they don't explicitly say "use the offer skill". Handles date conversion, discount-pattern matching (adding new patterns when needed), bilingual product names, and verifies with a build.
---

# Add offer

The user runs a pharmacy and pastes new promotional offers roughly twice a
week, usually copied straight from a supplier email or flyer. Each line has
the same shape: a date range, a brand, and a free-text discount description
in Spanish, e.g.:

```
28/9/26 A 11/10/26	ISDIN	10€ EN LA 2ª UD FOTOPROTECTORES E ISDINCEUTICS
1/9/26 A 31/12/26	CERAVE	50% DTO EN SOLARES X COMPRA OTRO PRODUCTO DE LA MARCA
```

Turn each line into an entry in `src/content/offers/offers.json`. The
frontend never shows `discount` raw — it pattern-matches it in
`src/pages/offers/index.astro` and looks up human copy in
`src/i18n/translations.ts`. That's why `discount` must be a short code, not
the free-text description.

## Steps

1. **Read the last few entries of `src/content/offers/offers.json`** to get
   the next `id` (plain incrementing string, e.g. last is `"57"` → next is
   `"58"`).

2. **Parse each line**: `startDate`/`endDate` from `DD/M/YY A DD/M/YY` →
   `YYYY-MM-DD` (20YY century), `brand` as given, and split the rest into
   `products`/`discount`.

3. **Translate `products` → `products_en`.** Keep brand/product-line names
   (ISDIN, ISDINCEUTICS, Si-Nails, etc.) verbatim, translate the generic
   Spanish words (FOTOPROTECTORES → SUNSCREENS, SOLARES → SUNSCREENS,
   CHAMPÚS → SHAMPOOS, DESODORANTES → DEODORANTS, etc.).

4. **Map the discount description to a `discount` code.** Check the table
   below (also documented in `../../../CLAUDE.md`) — reuse an existing
   pattern whenever the description matches one, even loosely (e.g. "2ª UD"
   phrasing, "X compra otro producto", "en compras superiores a"). Read the
   actual matching logic in `src/pages/offers/index.astro` (search for
   `discountUpper`) before assuming a pattern fits — the regexes are exact.

   | Pattern | Renders as (ES) |
   |---|---|
   | `"3X2"` | Llévate 3 y paga 2 |
   | `"2ªUD 30%"` | 30% en la segunda unidad |
   | `"2ªUD 10€"` | 10€ en la segunda unidad |
   | `"20%"` | 20% de descuento directo |
   | `"3€"` | 3€ de descuento directo |
   | `"10€ EN 2UD"` | 10€ en la compra de 2 unidades (ISDIN/April have variants) |
   | `"1UD 3€ 2UD 8€"` | 3€ en 1ud u 8€ en 2ud |
   | `"1UD X 2UD Y"` (any values) | X en la 1ª unidad, Y en la 2ª unidad |
   | `"1UD X 2UD Y 3UD Z"` | stepped 1ª/2ª/3ª unidad |
   | `"X€ EN 1UD O Y€ EN 2UD"` | X€ en 1 unidad o Y€ en 2 unidades |
   | `"PCT% EN COMPRAS > AMOUNT€"` | PCT% en compras superiores a AMOUNT€ |
   | `"50% X OTRO PRODUCTO"` | 50% dto. por la compra de otro producto de la marca |

5. **If nothing fits, add a new pattern** rather than writing free text into
   `discount` (this is a hard rule in `CLAUDE.md` — the field is parsed, not
   displayed). Adding one means touching all three:
   - `src/pages/offers/index.astro` — add an `else if` branch matching the
     new `discountUpper` shape, before the generic `%`/`€` fallback branches
     (order matters: more specific patterns must come first).
   - `src/i18n/translations.ts` — add the ES and EN template strings (both
     `ui` dictionaries).
   - `CLAUDE.md` — add a row to the pattern table so it stays the source of
     truth for future offers.
   Pick a `discount` code in the same terse style as the existing ones
   (short, uppercase, space-separated) — don't invent a new syntax family
   when an existing one (e.g. the `X€ EN NUD` stepped-discount shape) can be
   generalized instead.

6. **Append the new entries** to `offers.json` (don't worry about merging
   contiguous duplicate offers — `index.astro` already merges identical
   adjacent-date entries at render time).

7. **Verify with a build**, not just a visual read of the JSON — the
   discount-parsing logic is regex-based and easy to get subtly wrong (e.g.
   forgetting a pattern is checked before a broader one that would swallow
   it):
   ```bash
   pnpm build
   ```
   Then grep the rendered `dist/offers/index.html` and
   `dist/en/offers/index.html` for the expected ES/EN copy to confirm each
   new offer rendered the intended sentence, not a raw fallback. Clean up
   `dist/` afterward (it's a build artifact, not checked in).

## Notes

- No test suite/linter exists for this repo (`pnpm astro check` will try to
  install `@astrojs/check` interactively the first time — skip it and rely
  on `pnpm build` instead unless the user has that dependency installed).
- Spanish copy conventions: sentence case, no all-caps for emphasis (this
  only applies to prose you write, not to `brand`/`products` fields, which
  the site already uppercases/formats itself).
- When several new offers arrive in one paste, process them all in one pass
  — one JSON diff, one build check at the end, not per-offer.

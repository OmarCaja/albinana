# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Local residents of Bétera, Spain, checking the pharmacy's hours, current promotional offers, available services, and orthopedic products before or instead of visiting in person. Secondary: existing customers returning to check offers and brand stock.

## Product Purpose

Marketing/informational site for Farmacia Ortopedia Albiñana, a physical pharmacy in Bétera. It surfaces the pharmacy's services, brand catalog, blog content, and time-limited promotional offers, and drives visitors to visit or contact the physical store. There is no e-commerce or online purchasing.

## Positioning

Specialized orthopedic advice and technical-aid rental (wheelchairs, walkers, crutches) that a typical general pharmacy does not offer, combined with personalized in-person guidance.

## Operating Context

Content (blogs, brands, services, offers) is hand-edited JSON, not a CMS — non-technical updates go through a developer editing `src/content/*/*.json`. Offers are time-boxed (`startDate`/`endDate`) and tied to specific brands and discount patterns. Bilingual: Spanish (default, no URL prefix) and English (`/en/*`), with Spanish as the fallback when an English field is missing.

## Capabilities and Constraints

- Static site (Astro), no backend, no online checkout or accounts.
- Blog content is raw HTML strings, not markdown.
- Offer discounts must match a fixed set of known patterns (see `CLAUDE.md`) so the front end can render human copy; free-text discount descriptions are not supported without adding a new pattern.
- No CMS: all content changes are JSON edits in the repo.

## Brand Commitments

Name: Farmacia Ortopedia Albiñana. No documented logo/color/typography guideline exists yet in the repo.

## Evidence on Hand

Real brand logos under `public/brands/`, real service and blog copy in `src/content/`. No customer testimonials, case studies, or press are present — do not fabricate them.

## Product Principles

1. Local and practical first: hours, location, and current offers must be easy to find, not buried under marketing flourish.
2. Trustworthy, plain-language health/orthopedic information — no hype, no unverifiable claims.
3. Bilingual parity: every user-facing surface must work equally in Spanish and English via the existing `_en` field convention.
4. Content changes happen via JSON edits; design and templates should stay simple enough for that workflow to keep working without a CMS.

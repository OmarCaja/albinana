# OpenCode Agent Guidelines

This file provides essential context for OpenCode agents working with this Astro.js repository.

## Project Overview

This is an Astro.js website for "Farmacia Ortopedia Albiñana", a pharmacy in Bétera, Spain. The site is built with:
- Astro 6.x
- Static-first architecture
- JSON-driven content (products, blogs, offers)
- Multi-language support (Spanish/English)

## Key Commands

```bash
# Development
pnpm dev                 # Start local dev server at localhost:4321

# Build & Preview
pnpm build               # Build production site to ./dist/
pnpm preview             # Preview build locally

# Astro CLI
pnpm astro               # Run Astro CLI commands

# Install dependencies
pnpm install             # Install project dependencies
```

## Content Structure

Content is managed through the Astro Content API with JSON files:

- `src/content/blogs/blogs.json` - Blog posts
- `src/content/brands/brands.json` - Brand information  
- `src/content/services/services.json` - Service details
- `src/content/offers/offers.json` - Offer information

Collections are defined in `src/content.config.ts`

## Multi-language Support

The site supports Spanish (es) and English (en) translations through:
- `src/i18n/translations.ts` - Translation dictionaries
- URL structure: `/es/` or `/en/` for language prefixes
- Translation keys used in components and pages

## Key Files & Directories

- `src/pages/index.astro` - Main homepage
- `src/layouts/Layout.astro` - Page layout component
- `src/components/` - Reusable UI components
- `src/styles/global.css` - Global CSS styles

## Framework Quirks

- Content is loaded via `astro:content` with JSON files
- Pages use language prefixes (`/es/`, `/en/`) for multi-language support
- Components are built with Astro's `.astro` format
- Multi-language pages follow the pattern: `/en/blogs/[...slug].astro`

## Project Rules and Considerations

### Design Consistency
All pages and elements must maintain exactly the same style, typography, borders (`border-radius`, `glass-border`), colors (`var(--color-primary)`, `var(--glass-bg)`, etc.), font sizes, spacing (`var(--spacing-*)`) and margins. Before creating or modifying components or pages, review `src/styles/global.css` and existing similar components (such as `OfferCard.astro` or `BlogCard.astro`) to ensure absolute consistency.

### Offer Management (`src/content/offers/offers.json`)
To add new promotions, the `offers.json` file must be modified by adding a new object to the array with the following structure:
```json
{
  "id": "Unique (increment the last ID)",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "brand": "BRAND NAME",
  "products": "PRODUCT OR RANGE",
  "products_en": "PRODUCT OR RANGE",
  "discount": "STANDARD_FORMAT_OF_THE_DISCOUNT"
}
```

### Supported Discount Formats
To ensure discounts are rendered correctly with friendly (human-readable) translations on the website, the following exact patterns **must** be used in the `discount` property:
1. **3x2:** `"3X2"` -> Renders "Take 3 products and pay for only 2."
2. **Discount on second unit:** `"2nd UD 30%"` (or any percentage) -> Renders "30% on the second unit."
3. **Direct percentage discount:** `"20%"` -> Renders "20% direct discount."
4. **Direct euro discount:** `"3€"` -> Renders "3€ direct discount."
5. **Discount for multiple units:** `"10€ IN 2UD"` -> Renders "10€ discount for 2 units." (with specific variations if the brand is ISDIN or depending on the month).
6. **Mixed stepped discount:** `"1UD 3€ 2UD 8€"` -> Renders "3€ on 1 unit or 8€ on 2 units."
7. **Percentage discount for purchases over a threshold:** `"20% IN PURCHASES > 10€"` -> Renders "20% discount for purchases over 10€."

### Blog Management (`src/content/blogs/blogs.json`)
To create or modify blog entries, the array in `src/content/blogs/blogs.json` is edited directly.
The structure that each object must follow is as follows:
```json
{
  "id": "slug-url-of-the-blog",
  "title": "Title in Spanish",
  "title_en": "Title in English",
  "description": "Short description",
  "description_en": "Short description",
  "pubDate": "YYYY-MM-DD",
  "content": "<h2>Spanish HTML content</h2>...",
  "content_en": "<h2>English HTML content</h2>..."
}
```
- The `id` will be used as the final URL (`/blogs/your-slug`).
- The `content` supports HTML tags (such as `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`), and these will be automatically parsed and styled by the corresponding `.astro` template.
- Always ensure that test data or mock blogs are cleaned up in production.

### Corrections and Lessons Learned
- Never input long, unprocessed texts directly into the `discount` property of offers (e.g., avoid `"20% (> 10€)"`). Instead, create a pattern and process it in the front-end logic using the translation system (`src/i18n/translations.ts`).
- When a new main functionality is enabled on the website (such as the Blogs section), ensure that the corresponding link is added to the main navigation menu (e.g., `src/components/HamburgerMenu.astro`).
- Never use Title Case in Spanish (e.g., avoid "23 de Mayo: Día Mundial contra el Melanoma"). Use Sentence case where only the first word of the sentence is capitalized (e.g., "23 de mayo: Día mundial contra el melanoma"). Also, do not use all caps blocks like "LAS CAUSAS" or "MELANOMA"; always use lowercase ("Las causas", "melanoma").
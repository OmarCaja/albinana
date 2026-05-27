# Project Rules and Considerations

> [!IMPORTANT]
> **Golden Rule of the Project:** Design consistency. It is essential that all pages and elements of the website maintain exactly the same style, typography, borders (`border-radius`, `glass-border`), colors (`var(--color-primary)`, `var(--glass-bg)`, etc.), font sizes, spacing (`var(--spacing-*)`) and margins. Before creating or modifying components or pages, review `src/styles/global.css` and existing similar components (such as `OfferCard.astro` or `BlogCard.astro`) to ensure absolute consistency.

This file contains the main guidelines for the maintenance and scalability of the project. It should always be consulted before making modifications.

## Documentation Language

All project documentation must be written in English to ensure consistency and maintainability across the codebase.

## Offer Management (`src/content/offers/offers.json`)

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

To ensure discounts are rendered correctly with friendly (human-readable) translations on the website (managed in `src/pages/offers/index.astro`), the following exact patterns **must** be used in the `discount` property:

1. **3x2:** `"3X2"` -> Renders "Take 3 products and pay for only 2."
2. **Discount on second unit:** `"2nd UD 30%"` (or any percentage) -> Renders "30% on the second unit."
3. **Direct percentage discount:** `"20%"` -> Renders "20% direct discount."
4. **Direct euro discount:** `"3€"` -> Renders "3€ direct discount."
5. **Discount for multiple units:** `"10€ IN 2UD"` -> Renders "10€ discount for 2 units." (with specific variations if the brand is ISDIN or depending on the month).
6. **Mixed stepped discount:** `"1UD 3€ 2UD 8€"` -> Renders "3€ on 1 unit or 8€ on 2 units."
7. **Percentage discount for purchases over a threshold:** `"20% IN PURCHASES > 10€"` -> Renders "20% discount for purchases over 10€."

### Considerations when adding new promotion types

If there is a need to add a discount format that **does not** fit the above list, follow these steps:

1. **DO NOT** directly input long or descriptive text into the `discount` property of `offers.json`. Use a short and predictable pattern.
2. Go to the file `src/i18n/translations.ts` and add the new translation function or key for supported languages (`es` and `en`).
3. Go to `src/pages/offers/index.astro` and update the `getFullOfferText()` function by adding a new `else if` that captures your new pattern via `includes()` or regular expressions, and extracting variable data (percentages, prices) to pass them to the corresponding translation.

This ensures that the website interface always provides consistent, friendly text with correct multi-language support.

## Blog Management (`src/content/blogs/blogs.json`)

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
**Considerations:**
- The `id` will be used as the final URL (`/blogs/your-slug`).
- The `content` supports HTML tags (such as `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`), and these will be automatically parsed and styled by the corresponding `.astro` template.
- Always ensure that test data or mock blogs are cleaned up in production.

## Corrections and Lessons Learned (To Avoid)

*(This section will be updated as errors are detected or new conventions are established after corrections to avoid repeating failures in the future).*

- **Unreadable texts in JSON**: Never input long, unprocessed texts directly into the `discount` property of offers (e.g., avoid `"20% (> 10€)"`). Instead, create a pattern and process it in the front-end logic using the translation system (`src/i18n/translations.ts`).
- **Leaving menus inaccessible or orphaned**: When a new main functionality is enabled on the website (such as the Blogs section), ensure that the corresponding link is added to the main navigation menu (e.g., `src/components/HamburgerMenu.astro`).
- **Excessive use of capital letters (Title Case / All Caps)**: Never use Title Case in Spanish (e.g., avoid "23 de Mayo: Día Mundial contra el Melanoma"). Use Sentence case where only the first word of the sentence is capitalized (e.g., "23 de mayo: Día mundial contra el melanoma"). Also, do not use all caps blocks like "LAS CAUSAS" or "MELANOMA"; always use lowercase ("Las causas", "melanoma").

## Astro and MCP Usage

This project is a website built with Astro.js, a modern static site generation platform. For any development or modification of the project that requires technical information about Astro, the `Astro_docs_search_astro_docs` MCP must always be used to consult the official documentation and maintain implementation consistency with the framework's best practices.

- **Important**: Before implementing any functionality in Astro, information must be searched in the official documentation using the `Astro_docs_search_astro_docs` command.
- **Recommended process**: If a specific functionality in Astro needs to be implemented, first consult the official documentation through the MCP before any changes.
- **Maintenance**: Project updates must follow the guidelines and best practices documented in the official Astro documentation to ensure technical consistency and code quality.

(End of file - total 81 lines)
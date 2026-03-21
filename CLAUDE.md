# CLAUDE.md

## 🧠 Agent Rules (Highest Priority)

- Follow this file strictly unless explicitly instructed otherwise.
- Do NOT ignore these rules even if the user prompt is ambiguous.
- Prioritize consistency with the existing codebase over introducing new patterns.
- Do not over-engineer solutions.

---

## 🌍 Language Rules

- All code, comments, variable names, and documentation MUST be written in English.
- NEVER mix Spanish (or other languages) inside code.
- User-facing content (UI text) may remain in Spanish if already written that way.
- Chat responses may follow the user's language, but code must always be English.

---

## ⚡ Project Overview

This is an Astro.js website for **Farmacia Ortopedia Albiñana**, a pharmacy in Bétera, Spain.

- Astro 6.x project
- Static-first architecture
- Component-based structure
- JSON-driven content (products, blogs, offers)

---

## 🏗️ Architecture & Principles

- Prefer server-first rendering
- Minimize client-side JavaScript
- Keep components small, reusable, and focused
- Avoid global state unless strictly necessary
- Favor simplicity over abstraction

---

## 🏗️ Project Structure

```
/
├── src/
│   ├── pages/              # Page components (index.astro, blogs, products)
│   ├── components/         # Reusable components (Header, Footer, Hero, etc.)
│   ├── layouts/            # Page layouts
│   ├── content/            # Content files (blogs, products, offers)
│   ├── styles/             # Global CSS styles
└── package.json            # Dependencies and scripts
```

---

## 📂 Collections & Content Import

### Creating Collections

- Define collections in `src/content.config.ts` using the Astro Content API
- Example:

```ts
import { defineCollection, z } from "astro:content";

export const collections = {
  blogs: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
    }),
  }),
  products: defineCollection({
    schema: z.object({
      name: z.string(),
      price: z.number(),
      available: z.boolean(),
    }),
  }),
};
```

### Importing collections

```ts
import { getCollection } from "astro:content";

const posts = (await getCollection("blogs")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);
```

---

## 🧩 Component Guidelines

- Use clear, descriptive names:
  - ProductCard.astro
  - Avoid names like Card1.astro

- One responsibility per component
- Avoid large monolithic components
- Reuse existing components whenever possible

---

## 🎯 Code Style Rules

### General
- Keep code clean and readable
- Avoid deep nesting
- Prefer early returns

### Naming
- Use descriptive English names:
  - getProductData
  - isAvailable
- Avoid unnecessary abbreviations

### Astro Templates
- Use semantic HTML
- Avoid unnecessary wrapper elements
- Keep markup easy to scan

---

## 🎨 Styling Rules

- Prefer scoped styles inside `.astro` components
- Use global styles only when necessary
- Reuse existing CSS variables
- Avoid inline styles unless required

---

## ⚙️ JavaScript Usage

- Only use client-side JavaScript when necessary
- Prefer Astro directives:
  - client:load
  - client:idle
  - client:visible

- Keep scripts small and focused

---

## 🔌 MCP Usage Rules

- Prefer MCP for:
  - File creation
  - Refactoring
  - Multi-file updates

- Be explicit and deterministic
- Do NOT suggest manual steps if MCP can perform the task
- Do NOT scan the entire project unless explicitly required

---

## 📚 Documentation & Tools

### Astro Docs
- Use `mcp__astro-docs__search_astro_docs` for Astro-related questions

### Library Docs
- Use:
  1. `mcp__context7__resolve-library-id`
  2. `mcp__context7__query-docs`

- Prefer official documentation over assumptions

---

## 🚫 Strict Anti-Patterns

Do NOT:

- Introduce unnecessary dependencies
- Rewrite working code without reason
- Add unused code
- Mix languages in code
- Create overly complex abstractions
- Re-analyze the entire project unnecessarily

---

## 🧪 Debugging & Refactoring

### Bug Fixing
- Identify root cause before fixing
- Avoid superficial fixes

### Refactoring
- Do not change behavior unless requested
- Focus on readability and structure

---

## 📦 Dependencies

- Prefer built-in Astro features
- If adding a dependency:
  - Justify it
  - Choose lightweight, maintained options

---

## 📝 Output Expectations

- Provide production-ready code
- Keep explanations brief and relevant
- Do not include unnecessary commentary

---

## 🔁 Consistency Rule

- Always match existing patterns in the codebase
- Do not introduce new patterns unless clearly beneficial

---

## 🚀 Performance Awareness

- Keep pages lightweight
- Avoid unnecessary JavaScript
- Optimize for fast load times

---

## 🧠 Context Optimization Rule

- Do NOT re-analyze the entire project unless explicitly asked
- Focus only on relevant files for each task
- Assume this document represents the project standards

---
name: Farmacia Ortopedia Albiñana
description: A calm, clinical pharmacy site in stark black and one trust-blue accent, on a pale sky ground.
colors:
  ink: "#000000"
  ink-deep: "#111111"
  trust-blue: "#0095c8"
  trust-blue-soft: "rgba(0, 149, 200, 0.08)"
  coral-alert: "#f87171"
  coral-alert-soft: "rgba(248, 113, 113, 0.05)"
  slate: "#2d3748"
  slate-soft: "#4a5568"
  pale-sky: "#e9fcff"
  paper: "#ffffff"
  sky-muted: "#bce9f8"
  glass-surface: "rgba(255, 255, 255, 0.75)"
  glass-border: "rgba(0, 0, 0, 0.05)"
typography:
  display:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "Outfit, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    letterSpacing: "-0.01em"
    lineHeight: 1.2
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  sm: "10px"
  md: "20px"
  lg: "32px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  xl: "4rem"
  2xl: "6rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.trust-blue}"
    typography: "{typography.action}"
    padding: "0.5rem 0"
  button-primary-hover:
    textColor: "{colors.ink}"
  card-glass:
    backgroundColor: "{colors.glass-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  badge-discount:
    backgroundColor: "{colors.coral-alert}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.7rem"
---

# Design System: Farmacia Ortopedia Albiñana

## Overview

**Creative North Star: "The Clinical Calm"**

The system reads as a quiet, trustworthy advisor rather than a shop window: absolute black carries authority in headings and the footer, one sky-blue accent stands in for care and guidance on every link and highlight, and everything else recedes into pale sky and white. Cards float as frosted glass — translucent, gently blurred, barely shadowed — so content feels lightly lifted off the page rather than boxed in. There is no ornament competing for attention: no gradients beyond a whisper-soft accent wash, no filled buttons, no heavy iconography.

Density stays comfortable rather than dense: generous section padding (`--section-padding: 5rem`), wide line lengths capped for readability (`max-width: 45ch` on subtitles, 65–75ch implied for body copy), and a single accent color kept rare enough that its every appearance reads as "this matters" — a link, a live offer, a call to action.

**Key Characteristics:**
- Absolute black + one trust-blue accent; no secondary hue.
- Frosted-glass cards (blur + hairline border + whisper shadow) as the one recurring surface pattern.
- Text-style buttons (no fill, no border) that shift from blue to black on hover.
- Generous whitespace and capped line lengths over dense information packing.
- Rounded, soft geometry throughout (10–32px radii); no sharp corners anywhere.

## Colors

A near-monochrome palette (black, white, pale sky-blue) with exactly one accent hue carrying all interactive and emphasis meaning, plus a single alert color reserved for time-sensitive discount badges.

### Primary
- **Absolute Ink** (`#000000`): Headings (`h1`–`h6`), hero title, footer background. Carries all typographic authority; never used as a fill for interactive elements.
- **Ink Deep** (`#111111`): Reserved near-black for any surface needing to sit just off pure black (declared, lightly used).

### Secondary
- **Trust Blue** (`#0095c8`): The single accent. Used for all links, button text, active states, the offer "live" pulse dot, and brand labels. Its soft tint (`rgba(0, 149, 200, 0.08)`) washes card headers and note callouts.

### Neutral
- **Slate** (`#2d3748`): Primary body text color.
- **Slate Soft** (`#4a5568`): Secondary/muted text — subtitles, descriptions, meta labels.
- **Pale Sky** (`#e9fcff`): Page background (`html`/`body`).
- **Paper** (`#ffffff`): Card and surface base beneath the glass tint.
- **Sky Muted** (`#bce9f8`): Lower-emphasis surface accent (secondary blue for de-emphasized areas).
- **Glass Surface** (`rgba(255, 255, 255, 0.75)`) / **Glass Border** (`rgba(0, 0, 0, 0.05)`): The translucent card fill and its hairline edge; always paired with backdrop blur.

### Status
- **Coral Alert** (`#f87171`): Reserved exclusively for the discount badge on offer cards. Never used for body copy, links, or general emphasis — its rarity is what signals "time-limited."

### Named Rules
**The One Accent Rule.** Trust Blue is the only hue permitted for interactive or emphasis meaning. A second accent color must not be introduced without revising this document; use black, white, or the pale-sky neutrals for everything else.

## Typography

**Display Font:** Outfit (with system-ui, -apple-system, sans-serif fallback)
**Body Font:** Inter (with system-ui, -apple-system, sans-serif fallback)

**Character:** Outfit's geometric, tightly-tracked headlines (letter-spacing as tight as -0.06em) give the display layer a confident, almost pharmaceutical-label precision; Inter's neutral body text keeps long-form content plainly legible. The pairing never competes — display appears only in headings, hero copy, and button text; body text carries everything else.

### Hierarchy
- **Display / Hero** (700, `clamp(2.2rem, 6vw, 4.5rem)`, line-height 1–1.15): Page titles and hero headline. Letter-spacing runs from -0.04em to -0.06em depending on scale; capped at ~20ch on the hero for a tight, deliberate wrap.
- **Title** (700, 1.35–1.4rem, line-height 1.2): Card and section titles (`.card-title`, `.offer-title`, `.service-title`).
- **Subtitle** (400, `clamp(1rem, 2.5vw, 1.4rem)`, line-height 1.35–1.4): Supporting copy under a page or hero title, capped at 35–45ch.
- **Body** (400–500, 0.95–1.1rem, line-height 1.4–1.6): Paragraph and description text (`.text-editorial`, `.card-desc`, `.service-description`).
- **Label** (600, 0.7–0.85rem, letter-spacing 0.05–0.15em, uppercase): Meta text — dates, brand labels, block labels. Always Inter, always uppercase, always wide-tracked.
- **Action** (600, 1rem, letter-spacing -0.01em): Button and link text. Uses the *display* font (Outfit), not body — the one deliberate crossover between the two families.

### Named Rules
**The Tight Headline Rule.** Display text always runs negative letter-spacing (-0.04em to -0.06em) and near-1.0 line-height; loosened, airy headings are off-brand for this system.

## Layout

Content sits in a centered container (`max-width: 1600px`, horizontal padding 2rem, widening to 4rem at ≥1024px). Card grids use `auto-fit` with a `minmax` floor (300px for standard cards, 200px for brand logos, tightening to 150px on mobile) rather than fixed column counts, so grids reflow naturally at any width. Vertical rhythm comes from a small fixed spacing scale (0.25rem–6rem) rather than ad-hoc values; sections use a consistent 5rem top/bottom padding (`--section-padding`), with the first section after the fixed header adding 3rem of extra top clearance to clear it. The hero commits to `min-height: 70vh` so it always reads as a distinct opening beat, not a slice of scrolling content.

## Elevation & Depth

Flat with soft glass lift: the system deliberately avoids drop shadows as a primary depth cue. The one recurring elevation is the frosted-glass card — a translucent white fill (`--glass-bg`), a hairline border (`--glass-border`), and a 20px backdrop blur — paired with a barely-there ambient shadow. Depth reads through translucency and blur, not shadow weight; two stronger shadow tokens (`--shadow-lg`, `--shadow-premium`) exist in the stylesheet but are not currently used anywhere and should not be treated as active vocabulary until a component actually needs that much lift.

### Shadow Vocabulary
- **Subtle** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.02)`): The only shadow in active use. Applied to every glass card as a whisper of lift, never as a focal effect.

### Named Rules
**The No-Heavy-Shadow Rule.** If a component needs to feel elevated, reach for the glass treatment (blur + hairline border) before reaching for a stronger shadow. A heavy drop shadow is a signal something is off-system.

## Shapes

Soft, rounded geometry throughout, scaled to the element's size: small controls and badges use a 10px radius, cards and inputs use 20px, and the largest glass-card containers use a generous 32px. No sharp corners appear anywhere in the implemented system, and no components use borders as their primary edge — the hairline `glass-border` is the only stroke, always paired with the blur, never used alone as a card outline.

## Components

Every interactive element stays quiet and confident: no filled buttons, no heavy borders, no busy iconography. Emphasis comes from color (Trust Blue), rarity, and generous spacing — not from chrome.

### Buttons
- **Shape:** No radius; buttons are inline text, not boxes.
- **Primary:** Trust Blue text (`color-accent`), Outfit font, 600 weight, no background, no border, `0.5rem 0` padding (vertical breathing room only).
- **Hover / Focus:** Text color shifts from Trust Blue to Absolute Ink; no scale, shadow, or background change.
- There is no filled/solid button variant anywhere in the implemented system — all CTAs, including the hero's four actions, use the same text-link style.

### Cards (Glass Card pattern)
- **Corner Style:** 32px radius (`--border-radius-lg`).
- **Background:** Glass Surface (`rgba(255,255,255,0.75)`) over the page's pale-sky ground.
- **Shadow Strategy:** Subtle only (see Elevation & Depth); no hover lift on most cards, though the service card nudges up 2px with a slight background brighten on hover.
- **Border:** 1px Glass Border hairline, always present.
- **Internal Padding:** `--spacing-lg` (2rem), applied via `.card-content`.
- **Variants:** Offer and blog cards add a top meta strip (date/brand label) on Trust-Blue-soft background above the content; brand cards drop the meta strip and center a logo image instead; the service card replaces static content with an expand/collapse disclosure (`grid-template-rows` transition) revealing description and a detail link.

### Badges
- **Discount badge:** Coral Alert background, white text, 10px radius, uppercase, wide letter-spacing, positioned absolute top-left of the offer card. The only place Coral Alert appears.

### Navigation
- **Header:** Fixed, 60px tall, glass background with saturate+blur, hairline bottom border; carries a 2px Trust Blue reading-progress bar along its bottom edge.
- **Menu:** Full-screen overlay hamburger menu (not a horizontal nav bar); links stagger in on open.
- **Footer:** Solid Absolute Ink background (the one place black is a fill, not text), white text at full and 60%-opacity tiers.

## Do's and Don'ts

### Do:
- **Do** keep Trust Blue as the only accent color; every new interactive or emphasis element reaches for it before any new hue.
- **Do** build new surfaces from the glass-card pattern (blur + hairline border + subtle shadow) rather than introducing a new card treatment.
- **Do** use Outfit for headings and button/action text, Inter for everything else, with tight negative letter-spacing on display text.
- **Do** keep buttons as text-style links with no fill or border; the blue-to-black hover shift is the only state change they need.

### Don't:
- **Don't** introduce a second accent hue or a filled/solid button — both are off-system for this design.
- **Don't** reach for a strong drop shadow; depth comes from glass blur, not shadow weight.
- **Don't** use Coral Alert outside the discount badge context — it's a scarce, single-purpose status color.
- **Don't** use sharp corners; every surface in this system is rounded (10–32px).

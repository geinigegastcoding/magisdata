# Website Design Portfolio Cases - Design

## Purpose

Replace generic outcome-based cases with four webdesign portfolio projects based on supplied screenshots. Pages demonstrate MagisData's design thinking, SEO structure, AEO/GEO readiness, interaction choices, and lessons learned.

## Portfolio Entries

- BuitenLijn: website design concept for a landscaping company.
- Dakbedrijf Hoogstad: website design concept for a roofing company.
- OrbitFlow: website design concept for a social growth platform.
- Nexora IT Solutions: website design concept for an IT consultancy.

## Page Architecture

The existing `/cases` collection remains the hub. Its navigation label is `Portfolio`, with image-led cards linking to four detailed `/cases/website-design-*` pages.

Each detail page contains:

- compact screenshot preview beside the introduction, with full artwork lower on the page;
- audience, challenge, and intended visitor action;
- structured design approach;
- SEO/AEO/GEO rationale;
- interaction decisions and personal reflection;
- previous/next project navigation.

## Trust And SEO Rules

- Do not state performance figures or outcomes as achieved results.
- Describe the webdesign work, structure and lessons without a sales-led case-study framing.
- Set unique metadata, canonical URLs, breadcrumbs, portfolio article schema and screenshot social images.
- Use flat surfaces and borders; never use glow effects.

## Verification

Run `npm run typecheck` and `npm run build`. Confirm old generic case URLs and claimed-result copy no longer surface in touched site areas.

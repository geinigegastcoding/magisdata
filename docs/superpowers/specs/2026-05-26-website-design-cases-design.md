# Website Design Portfolio Cases - Design

## Purpose

Replace generic outcome-based cases with four truthful website design portfolio concepts based on supplied screenshots. Pages should demonstrate MagisData's design thinking, SEO structure, AEO/GEO readiness, and conversion planning without presenting fictional businesses or embedded metrics as client proof.

## Portfolio Entries

- BuitenLijn: website design concept for a landscaping company.
- Dakbedrijf Hoogstad: website design concept for a roofing company.
- OrbitFlow: website design concept for a social growth platform.
- Nexora IT Solutions: website design concept for an IT consultancy.

## Page Architecture

The existing `/cases` collection remains the hub. Its positioning changes to `Website design`, with image-led cards linking to four detailed `/cases/website-design-*` pages.

Each detail page contains:

- prominent screenshot and concept disclosure;
- audience, challenge, and intended visitor action;
- structured design approach;
- SEO/AEO/GEO rationale;
- conversion decisions and relevant service links;
- contact call to action.

## Trust And SEO Rules

- Never call concept businesses clients or claim the sites are live.
- Never repeat screenshot testimonials, review scores, logos, or performance figures as verified proof.
- Set unique metadata, canonical URLs, breadcrumbs, portfolio article schema, contextual internal links, and screenshot social images.
- Describe target outcomes as design intent, not achieved business results.

## Verification

Run `npm run typecheck` and `npm run build`. Confirm old generic case URLs and claimed-result copy no longer surface in touched site areas.

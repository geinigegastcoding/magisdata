# Keyword Pages Upload Guide

These pages are draft-ready only. They are not in `app/`, not linked from sitemap, and not production routes yet.

The rendered pages are written as real visitor pages. There are no visible "draft" labels in the page content. The safety control is technical: draft metadata uses `noindex` until you intentionally publish.

## What Is In This Folder

- `Keywoard-pages/_shared/keyword-page-data.ts`  
  All 250 complete page drafts, metadata copy, FAQs, schema intent, links, checklists, conversion sections, ranking-intent sections, and technical SEO notes.

- `Keywoard-pages/_shared/keyword-draft-page.tsx`  
  Reusable visual page renderer. It includes draft `noindex` metadata for safety and visible page sections for direct answer, examples, checklist, comparison, FAQ, internal links, and technical SEO.

- `Keywoard-pages/routes/<slug>/page.tsx`  
  One draft route file per page.

- `Keywoard-pages/page_manifest.md`  
  Full list of draft route files and intended production paths.

## Page Type Rule

Use this before publishing:

- Visitor wants to buy or compare a service: publish as an actual page.
- Visitor wants to learn, fix, or understand something: publish as an insight/blog guide.

Current draft classification:

- Actual pages: branch/location money pages, local SEO city pages, pricing city pages, package-choice pages, AI-vindbaarheid branch pages.
- Insight guides: branch problem guides, branch checklists, Google Business Profile guides, technical/conversion guides.

## Recommended First Upload Order

Publish only a few per day.

1. `website-laten-maken-voor-kappers-voorschoten`
2. `website-laten-maken-voor-loodgieters-voorschoten`
3. `website-laten-maken-voor-elektriciens-voorschoten`
4. `website-laten-maken-voor-hoveniers-voorschoten`
5. `website-laten-maken-voor-kappers-leiden`
6. `website-laten-maken-voor-loodgieters-leiden`
7. `website-laten-maken-voor-elektriciens-leiden`
8. `website-laten-maken-voor-hoveniers-leiden`
9. `lokale-seo-voor-ondernemers-voorschoten`
10. `lokale-seo-voor-ondernemers-leiden`
11. `google-business-profile-optimaliseren-voorschoten`
12. `google-business-profile-optimaliseren-leiden`
13. `wat-kost-een-website-laten-maken-in-voorschoten`
14. `wat-kost-een-website-laten-maken-in-leiden`

## How To Publish One Actual Page

Example: publish `website-laten-maken-voor-kappers-voorschoten`.

1. Create this folder:

```text
app/website-laten-maken-voor-kappers-voorschoten/
```

2. Copy this file:

```text
Keywoard-pages/routes/website-laten-maken-voor-kappers-voorschoten/page.tsx
```

to:

```text
app/website-laten-maken-voor-kappers-voorschoten/page.tsx
```

3. In the copied production file, keep the import as-is for now:

```ts
import { KeywordDraftPage, keywordPageMetadata } from "@/Keywoard-pages/_shared/keyword-draft-page";
```

4. Before indexing, update `keywordPageMetadata` behavior or create production metadata so `robots.index` becomes `true`.

Current safety default:

```ts
robots: {
  index: false,
  follow: false
}
```

Production setting when ready:

```ts
robots: {
  index: true,
  follow: true
}
```

5. Add internal links from relevant hub pages only when you want the page discoverable.

6. Add sitemap entry only when you want search engines to find it.

## How To Publish One Insight Guide

Example: publish `google-business-profile-optimaliseren-leiden`.

1. Create this folder:

```text
app/inzichten/google-business-profile-optimaliseren-leiden/
```

2. Copy this file:

```text
Keywoard-pages/routes/google-business-profile-optimaliseren-leiden/page.tsx
```

to:

```text
app/inzichten/google-business-profile-optimaliseren-leiden/page.tsx
```

3. Keep it out of sitemap until you are ready.

4. Add it to `/inzichten` listing only when you want visitors to browse to it.

## Before Each Page Goes Live

Check:

- H1 matches one clear intent.
- Intro answers the query in first 100 words.
- Page has real branch, city, checklist, pricing, AI, or troubleshooting value.
- No fake reviews, results, ratings, logos, or office claims.
- CTA matches intent.
- Internal links are useful.
- Metadata title and description are unique.
- Schema matches visible content.
- Page is not added to sitemap until chosen.
- `robots.index` is changed only for the page you publish.
- `alternates.canonical` points to the final production path.
- Page has at least one incoming internal link from a relevant hub.
- Page has at least one outgoing internal link to service, pricing, contact, and a related support page.
- FAQ schema only marks up FAQ content visible on the page.

## Sitemap Step

When ready, add the production route to `content/seo.ts` or the existing sitemap route source used by the site.

Do not bulk-add all 250 pages. Add only pages that passed quality check and are internally linked.

## After Publishing

Track in Google Search Console:

- index status
- impressions
- clicks
- CTR
- average position
- queries shown
- form submissions or contact events

After 90 days:

- Keep: relevant impressions and useful query matches.
- Improve: indexed but weak CTR or poor match.
- Merge/noindex: no value, no impressions, or overlap with stronger page.

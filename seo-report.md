# MagisData Full-Scope SEO Audit Report

**Audit date:** 2026-06-12  
**Repository:** `/workspace/magisdata`  
**Site scope:** Public MagisData marketing website only  
**Primary market:** Netherlands / Dutch-language B2B and service-business search  
**Audit mode:** Codebase and content audit with three parallel sub-agent workstreams  
**Output:** Findings, severity, impact, evidence, and recommended roadmap for SEO, GEO, AEO, content quality, technical SEO, and lead generation.

---

## 1. Executive summary

MagisData has a strong baseline for a modern SEO-focused marketing website. The site is built with crawlable Next.js App Router pages, centralized route metadata, sitemap generation, robots output, `llms.txt`, structured-data helpers, semantic templates, optimized image variants, and a clear brand position around websites, SEO, AEO, GEO, AI-vindbaarheid, conversion, and strategic online growth.

The strongest SEO assets are:

- A coherent positioning system: websites are framed as infrastructure for clarity, ranking, trust, and lead generation.
- Centralized SEO route data in `content/seo.ts`, reducing metadata drift across pages.
- A clear service/topic architecture with core services, local pages, industry pages, portfolio pages, insights, pricing, and contact.
- Honest trust posture: the portfolio is explicitly described as design work and not as invented client proof.
- Strong AEO/GEO foundations: direct-answer blocks, FAQ sections, `llms.txt`, schema helpers, and copy that explains AI-search concepts.
- Minimal client-side JavaScript outside consent and contact-form behavior.

The most important risks are:

1. **High — Thin/templated landing-page risk.** Several branch and city pages are generated from the same factory, so they need more unique local/industry substance before they can rank well without looking like doorway-style SEO pages.
2. **High — Thin insight/article depth.** The insight detail pages are currently short and not deep enough to establish topical authority for SEO, AI-vindbaarheid, GEO, AEO, and conversion.
3. **High — Build reliability risk.** The production build can fail because `next/font/google` must fetch Inter from Google Fonts during build. If CI/CD cannot fetch that resource, SEO-critical static output cannot be generated.
4. **High — Redirect typo.** One redirect rule uses `301!`, which is likely malformed and can break redirect consolidation for `/seo-services`.
5. **Medium — Structured-data relevance.** Legal and thank-you pages can emit `HowTo`/`FAQPage` schema through a shared template even when the page type does not match that rich-result intent.
6. **Medium — E-E-A-T depth.** The site is honest and clear, but it needs more visible founder, methodology, author, review, and proof-process detail to compete in advisory SEO spaces.
7. **Medium — Consent/performance issue.** GA is loaded after interactive even before analytics consent is granted, adding third-party JS and network cost to every page.
8. **Medium — Pricing/legal clarity.** Pricing copy should clarify BTW, contract term, renewal, ownership, support boundaries, hosting/domain inclusion, and what happens after the first year.

Overall SEO readiness estimate:

| Area | Current state | Ranking readiness |
| --- | --- | --- |
| Technical crawlability | Strong | High |
| Metadata/canonicals | Strong | High |
| Structured data | Good but over-broad in places | Medium/High |
| Performance/CWV risk | Good baseline, several fixable risks | Medium/High |
| Service-page copy | Good foundation | Medium/High |
| Local/city page copy | Needs unique depth | Medium |
| Industry page copy | Needs unique depth | Medium |
| Insight/topical authority | Too thin | Low/Medium |
| E-E-A-T | Honest but underdeveloped | Medium |
| Conversion/lead-gen copy | Good, needs sharper offer definition | Medium/High |
| GEO/AEO readiness | Good foundation, needs examples/comparisons | Medium/High |

---

## 2. Audit method and sub-agent log

The audit used the main agent plus three parallel sub-agents.

### 2.1 Workstream A — Metadata, route coverage, schema, indexability

**Assigned focus:** route coverage, metadata, canonical/Open Graph/Twitter, sitemap, robots, `llms.txt`, JSON-LD/schema, indexability, international/language signals, and App Router implementation.

**Main conclusions:**

- Route coverage is strong and centralized.
- Sitemap and metadata generation are implemented well.
- `/bedankt` is excluded from the sitemap through `indexable: false`.
- Schema helpers are useful but too broadly applied for legal/thank-you pages.
- `lastModified` values are stale or generic for many routes.
- Homepage lacks page-specific JSON-LD beyond the global organization/local business/website graph.
- Language signals are generally valid but inconsistent between `nl`, `nl-NL`, and `nl_NL`.
- Unknown dynamic slugs and custom 404 metadata could be more explicitly noindex.

### 2.2 Workstream B — Content, ranking potential, E-E-A-T, lead generation

**Assigned focus:** visible copy, keyword targeting, search intent, E-E-A-T, topical authority, internal linking, duplicate/thin content risk, and Dutch market clarity.

**Main conclusions:**

- Homepage and service positioning are strategically strong.
- The site avoids fake proof and unsupported claims better than many small-agency websites.
- Industry and location landing pages are the biggest duplicate/thin-content risk because several are built from a shared page factory.
- Insights are too short for topical authority.
- E-E-A-T needs more human detail, methods, author notes, and proof of expertise.
- Pricing and legal pages need more Dutch commercial clarity.
- Several Dutch spelling/diacritic issues and English/jargon phrases should be cleaned up.

### 2.3 Workstream C — Technical SEO, performance, accessibility

**Assigned focus:** crawlable semantic HTML, heading hierarchy, image optimization and alt text, Core Web Vitals risks, client component risks, accessibility signals, redirects, headers, assets, and build config.

**Main conclusions:**

- Semantic HTML and headings are generally strong.
- Image implementation is mostly good, with AVIF/WebP variants and descriptive alt text.
- `next/font/google` caused `npm run build` to fail when Inter could not be fetched.
- GA script is loaded before consent is granted.
- The homepage LCP image should receive explicit priority.
- Below-the-fold CTA imagery should lazy-load.
- Large source PNG files remain public.
- Asset cache headers should be added.
- Cookie dialog focus management and reduced-motion handling can improve accessibility.

### 2.4 Commands and inspection log

Commands used by the main agent and sub-agents included:

```bash
pwd && rg --files -g 'AGENTS.md' -g '!node_modules' -g '!dist' -g '!build'
cat AGENTS.md
rg --files -g '!node_modules' -g '!*.png' -g '!*.jpg' -g '!*.webp' -g '!*.avif'
sed -n '1,260p' content/seo.ts
sed -n '1,220p' app/layout.tsx
sed -n '1,220p' app/sitemap.ts
sed -n '1,180p' app/robots.ts
sed -n '1,260p' content/pages.ts
sed -n '1,240p' content/landing-pages.ts
rg -n "slug:|makeAudiencePage\(|makeGrowthPage\(" content/landing-pages.ts content/pages.ts
rg -n "^\"use client\"|framer-motion|<img|<Image|loading=|priority|alt=|metadataForPath|JsonLd|FAQPage|HowTo|Service|Organization|LocalBusiness|WebSite|canonical|alternates|robots|sitemap|gtag|Google" app components content schemas public next.config.mjs
find app -path '*/page.tsx' -print | sort
find public/assets -maxdepth 1 -type f
rg -n "continuiteit|geindexeerd|orienteren|Technologieen|capabilities|authority-site|Enterprise CTA" content app components
npm run typecheck
npm run build
```

`npm run typecheck` passed during the sub-agent technical audit. `npm run build` failed because the build attempted to fetch Inter from Google Fonts through `next/font/google` and the request to `fonts.googleapis.com` failed in the audit environment.

---

## 3. Site inventory and route coverage

### 3.1 Route inventory

The site currently exposes the following App Router pages:

| Route | Role | SEO intent |
| --- | --- | --- |
| `/` | Homepage | Website laten maken, SEO, AI-vindbaarheid, meer aanvragen |
| `/diensten` | Service hub | Service discovery and internal linking hub |
| `/prijzen` | Pricing | Commercial comparison and package lead-gen |
| `/webontwikkeling` | Core service | Website laten maken / professional website |
| `/seo-diensten` | Core service | SEO diensten / SEO bureau / zoekmachine optimalisatie |
| `/geo-optimalisatie` | Core service | GEO / generative engine optimization |
| `/aeo-optimalisatie` | Core service | AEO / answer engine optimization |
| `/ai-infrastructuur` | Core service | AI automatisering / workflows |
| `/strategisch-advies` | Core service | Website advies / SEO advies / online growth plan |
| `/website-onderhoud` | Landing/service | Website onderhoud / updates / beveiliging |
| `/lokale-seo` | Landing/service | Lokale SEO / local search |
| `/seo-bureau-leiden` | Local landing | SEO bureau Leiden |
| `/ai-vindbaarheid` | Landing/service | AI vindbaarheid / ChatGPT / Perplexity / Google |
| `/online-marketing-bureau` | Landing/service | Online marketing bureau |
| `/conversie-optimalisatie` | Landing/service | CRO / meer aanvragen uit website |
| `/website-voor-loodgieters` | Industry landing | Website voor loodgieters |
| `/website-voor-elektriciens` | Industry landing | Website voor elektriciens |
| `/website-voor-kappers` | Industry landing | Website voor kappers |
| `/website-voor-hoveniers` | Industry landing | Website voor hoveniers |
| `/website-laten-maken-leiden` | City landing | Website laten maken Leiden |
| `/website-laten-maken-den-haag` | City landing | Website laten maken Den Haag |
| `/website-laten-maken-rotterdam` | City landing | Website laten maken Rotterdam |
| `/cases` | Portfolio hub | Webdesign portfolio / design decisions |
| `/cases/[slug]` | Portfolio detail | Case/design detail pages |
| `/inzichten` | Insight hub | SEO, AI-vindbaarheid, website education |
| `/inzichten/[slug]` | Insight detail | Article pages |
| `/over-ons` | About | Brand trust / methodology |
| `/contact` | Lead-gen | Contact and free website plan |
| `/status` | Trust/support | Availability |
| `/privacybeleid` | Legal | Privacy policy |
| `/algemene-voorwaarden` | Legal | Terms |
| `/bedankt` | Post-conversion | Thank-you page, noindex |

### 3.2 Route coverage verdict

**Verdict:** Strong.

The route set covers a good commercial SEO architecture:

- Core service pages.
- Commercial pricing page.
- Local SEO pages.
- City landing pages.
- Industry landing pages.
- Portfolio proof/decision pages.
- Informational articles.
- Trust pages.
- Contact/conversion page.
- Legal and post-conversion pages.

The main issue is not coverage, but **depth and uniqueness**. There are enough pages to create topical authority, but several pages need deeper content to earn rankings in competitive Dutch searches.

---

## 4. Metadata, canonicals, social previews, sitemap, robots, and llms.txt

### 4.1 Positives

- `content/seo.ts` centralizes the SEO route model, including path, title, description, keywords, priority, frequency, modified date, optional image data, and indexability.
- `metadataForPath()` creates consistent titles, descriptions, keywords, canonical paths, language alternates, robots directives, Open Graph, and Twitter metadata.
- `sitemap.ts` maps indexable routes into canonical absolute URLs.
- `/bedankt` is excluded from sitemap via `indexable: false`.
- `robots.ts` allows crawlers and points to the sitemap.
- `llms.txt` is generated from sitemap route data and describes the brand, services, target market, contact details, and important URLs.

### 4.2 Metadata title and description quality

Most titles and descriptions are good because they combine commercial keyword phrases with user benefit. Strong examples include:

- Homepage: “Website laten maken voor SEO en AI-vindbaarheid.”
- `/webontwikkeling`: “Website laten maken voor SEO, vertrouwen en meer aanvragen.”
- `/seo-diensten`: “SEO diensten voor betere vindbaarheid in Google en AI.”
- `/geo-optimalisatie`: “GEO optimalisatie voor AI-zoekmachines en AI-vindbaarheid.”
- `/aeo-optimalisatie`: “AEO optimalisatie voor AI Overviews en duidelijke antwoorden.”

Potential improvements:

- Add stronger local specificity to `/seo-bureau-leiden`, `/website-laten-maken-leiden`, `/website-laten-maken-den-haag`, and `/website-laten-maken-rotterdam` descriptions.
- Avoid overloading too many concepts in one title when the page has a narrower intent.
- Review all title lengths after final copy changes. Some titles may be close to truncation in Google depending on pixel width.

### 4.3 Canonical implementation

**Verdict:** Strong.

Canonical metadata is generated centrally through `metadataForPath()`. That is the right pattern because the sitemap, route metadata, and `llms.txt` can share a single source of truth.

Recommended refinement:

- Standardize language alternates to `nl-NL` if the site wants Netherlands-specific Dutch rather than generic Dutch.
- Keep Open Graph locale as `nl_NL` because Open Graph uses underscore locale formatting.

### 4.4 Sitemap freshness

**Issue severity:** Medium.

A global `lastModified` value is reused across many pages. This is acceptable for a small static site initially, but it becomes less trustworthy as content changes. `/status` already has a more recent `updatedAt` value than the global SEO date, so sitemap freshness is already inconsistent.

Recommended fix:

- Add per-page `dateModified` where possible.
- Use `currentStatus.updatedAt` for `/status`.
- Add `dateModified` to landing pages or derive from content update metadata.
- Keep global `lastModified` only as a fallback.

### 4.5 Robots and AI bot access

**Verdict:** Strong but strategic.

The site explicitly allows search bots and several AI/LLM-related bots. That aligns with the stated GEO/AEO mission.

Recommended refinement:

- Periodically review bot policy. AI crawler policies change frequently.
- If the company later publishes proprietary content that should not be used for AI training, separate discoverability from training permissions.

### 4.6 `llms.txt`

**Verdict:** Strong.

`llms.txt` is a positive GEO/AEO asset because it summarizes:

- Language.
- Market.
- Target audience.
- Services.
- Contact details.
- Important URLs.
- Brand tone and positioning.

Recommended refinements:

- Add a short “Do not claim” section, e.g. no guaranteed rankings, no invented case outcomes, portfolio is design work.
- Add an “Ideal citations” section describing which pages answer which questions.
- Keep it generated from the same source of truth, but consider adding curated route groupings for AI systems.

---

## 5. Structured data / JSON-LD audit

### 5.1 Positives

The schema system is well organized and includes helpers for:

- `Organization`
- `LocalBusiness`
- `WebSite`
- `BreadcrumbList`
- `WebPage`
- `FAQPage`
- `HowTo`
- `Service`
- `Article`
- `CollectionPage`
- graph wrapper

The root layout emits a global graph for organization, local business, and website. Content pages emit page-specific schema. Portfolio and insight pages emit article/collection schema.

### 5.2 Issue: schema is too broad on legal and thank-you pages

**Severity:** Medium.

The shared `ContentPage` schema pipeline can emit `FAQPage` and `HowTo` on pages that are not actually how-to pages, including legal pages and the thank-you page.

Why this matters:

- Structured data should describe visible page content accurately.
- Legal pages are not service how-to pages.
- A noindex thank-you page does not need rich-result-oriented schema.
- Overusing schema can reduce confidence in markup quality.

Recommended fix:

- For `schemaKind === "service"`, allow `Service`, `FAQPage`, and `HowTo` if the steps are genuinely procedural.
- For `schemaKind === "page"`, emit only `WebPage` and `BreadcrumbList` by default.
- For noindex pages, keep schema minimal or omit it.

### 5.3 Issue: homepage lacks page-specific JSON-LD

**Severity:** Low/Medium.

The homepage gets global organization/local business/website schema from the layout, but it does not appear to emit a homepage-specific `WebPage` node.

Recommended fix:

Add homepage JSON-LD using the existing `graphSchema()` pattern:

- `WebPage` for `/`.
- Optional `FAQPage` if answer-style homepage questions are visible.
- Optional `ItemList` for core services if the homepage visibly lists them.

### 5.4 Issue: `sameAs` is empty

**Severity:** Low.

`LocalBusiness` schema includes `sameAs: []`. Empty `sameAs` does not help entity reconciliation.

Recommended fix:

- Remove it until verified public profiles exist, or
- Add authoritative profiles only if they are real and intended as entity references.

### 5.5 Issue: LocalBusiness schema can be stronger

**Severity:** Low.

The LocalBusiness schema includes address locality and country, but could include verified details such as:

- postal code,
- address region,
- contact point,
- opening hours,
- service area details,
- geo coordinates,
- Google Business Profile URL.

Do not add any unverified business data just for SEO.

### 5.6 Issue: Service schema offers are not machine-actionable

**Severity:** Low.

`Service` schema includes an `Offer` with price currency and a descriptive price specification, but no actual price/min/max price. This is not necessarily invalid, but it is less useful.

Recommended fix:

- Move concrete offer markup to `/prijzen` where package prices are visible.
- Remove generic `offers` from service schema unless a real min price or package price is shown on the same page.

---

## 6. Technical SEO, crawlability, performance, and accessibility

### 6.1 Positives

- The site uses static export, which is positive for crawlability and hosting simplicity.
- Most pages are server-rendered by default.
- Only two client components were found: consent manager and contact form.
- Header and footer links are real crawlable links.
- Mobile navigation uses native `details`/`summary` rather than a JavaScript-only menu.
- Most pages use semantic structures such as `main`, `section`, `article`, `header`, `footer`, `nav`, `figure`, `figcaption`, `dl`, `details`, and `summary`.
- Heading hierarchy is generally clean: one page-level H1, then H2/H3 sections.
- Images commonly use AVIF/WebP, width/height attributes, and descriptive alt text.

### 6.2 High issue: build depends on Google Fonts fetch

**Severity:** High.  
**Impact:** Production builds can fail when Google Fonts is unavailable or blocked. That means sitemap, robots, static HTML, and metadata output may not be generated.

Evidence from audit:

- `npm run build` failed because `next/font/google` could not fetch Inter from `fonts.googleapis.com`.

Recommended fix:

- Replace `next/font/google` with `next/font/local` and commit approved local font files.
- Keep `display: swap` behavior.
- If local fonts are not possible, ensure CI/CD has stable outbound access to Google Fonts, but local fonts are more robust.

### 6.3 High issue: malformed redirect

**Severity:** High.  
**Impact:** The `/seo-services` redirect may fail because the status token is `301!` instead of `301`.

Recommended fix:

```txt
/seo-services /seo-diensten 301
```

After deployment, test with:

```bash
curl -I https://magisdata.nl/seo-services
```

### 6.4 Medium issue: GA script loads before consent

**Severity:** Medium.  
**Impact:** Third-party GA script is loaded after interactive even though analytics consent defaults to denied. This creates network and main-thread cost before the visitor grants analytics consent.

Recommended fix:

- Remove the default external GA `<Script src=...>` from the root layout.
- Inject the GA script only inside the consent utility after `analytics_granted`.
- Keep consent defaults before interactive if needed.

### 6.5 Medium issue: homepage LCP image lacks explicit priority

**Severity:** Medium.  
**Impact:** The homepage hero image is likely an LCP candidate. It uses eager loading, but could be prioritized more explicitly.

Recommended fix:

- Add `fetchPriority="high"` to the likely LCP image.
- Consider `decoding="async"` on non-LCP images.
- Validate with Lighthouse or WebPageTest.

### 6.6 Medium issue: below-the-fold CTA image loads eagerly by default

**Severity:** Medium.  
**Impact:** A lower-page image without a `loading` attribute can compete with critical resources.

Recommended fix:

- Add `loading="lazy"` and `decoding="async"` to below-the-fold CTA imagery.

### 6.7 Medium issue: large source PNGs remain in `public/assets`

**Severity:** Medium.  
**Impact:** Large original PNG assets are publicly deployable and can increase deploy size, accidental bandwidth, and asset surface area.

Recommended fix:

- Move source PNGs to a non-public source folder such as `Buildtools/source-assets/`.
- Keep only optimized runtime assets under `public/assets`.
- Update conversion script paths accordingly.

### 6.8 Medium issue: no long-term cache headers for `/assets/*`

**Severity:** Medium.  
**Impact:** Repeat visitors may not benefit from optimal static asset caching.

Recommended fix:

```txt
/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

Only use immutable caching if filenames change when content changes.

### 6.9 Medium issue: contact form has no no-JS fallback

**Severity:** Medium.  
**Impact:** If JavaScript fails, the lead form cannot submit because submission is handled by client-side fetch.

Recommended fix:

- Add progressive enhancement with native form attributes:

```tsx
<form action="https://formspree.io/f/mgolbyvp" method="POST" ...>
```

- Keep JS enhancement for better UX.

### 6.10 Low issue: consent dialog accessibility

**Severity:** Low.  
**Impact:** Dialog has role and `aria-modal`, but should manage focus more robustly.

Recommended fix:

- Move initial focus into the dialog.
- Trap focus while open.
- Provide Escape behavior if privacy requirements allow it.
- Ensure settings can be reopened from footer accessibly.

### 6.11 Low issue: reduced-motion support

**Severity:** Low.  
**Impact:** Global smooth scrolling should respect `prefers-reduced-motion`.

Recommended fix:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

### 6.12 Low issue: unused Framer Motion dependency

**Severity:** Low.  
**Impact:** `framer-motion` is installed but was not found in reviewed source imports. It may increase install and dependency maintenance overhead.

Recommended fix:

- Remove if not planned.
- If planned, keep motion restrained and add reduced-motion support.

---

## 7. Content quality, keyword targeting, and ranking potential

### 7.1 Overall content verdict

The site has a strong strategic voice: calm, premium, engineered, and practical. It avoids hype and unsupported claims. The copy is suitable for a high-trust web/SEO advisory brand.

However, ranking potential depends on depth. The content currently reads as strong marketing architecture, but not yet as deep topical authority. Competitive pages need:

- more specific examples,
- stronger Dutch market context,
- longer educational sections,
- clear “what is included / not included” boundaries,
- comparison blocks,
- proof of methodology,
- richer FAQs,
- internal links with more descriptive anchors.

### 7.2 Keyword architecture

Core keyword clusters are well chosen:

- Website laten maken.
- SEO bureau / SEO diensten.
- Lokale SEO.
- SEO bureau Leiden.
- GEO optimalisatie.
- AEO optimalisatie.
- AI vindbaarheid.
- Online marketing bureau.
- Conversie optimalisatie.
- Website onderhoud.
- Industry-specific website pages.
- City-specific website pages.

Cannibalization risk:

- `/ai-vindbaarheid`, `/geo-optimalisatie`, and `/aeo-optimalisatie` overlap conceptually.
- `/seo-diensten`, `/lokale-seo`, and `/seo-bureau-leiden` overlap if local scope is not differentiated.
- `/webontwikkeling` and city/industry website pages can overlap unless the latter have unique local/industry intent.

Recommended fix:

Add a visible comparison table or block to AI/GEO/AEO pages:

| Page | Owns this intent | Should not try to own |
| --- | --- | --- |
| AI-vindbaarheid | Umbrella: being understandable and citeable in AI search | Detailed answer formatting only |
| GEO | Entity/context/source structure for generative systems | Basic SEO services |
| AEO | Direct answer blocks and question-answer extraction | Entire AI-search strategy |

Add similar differentiation to SEO pages:

| Page | Owns this intent |
| --- | --- |
| SEO diensten | Broad SEO service offering |
| Lokale SEO | Local search mechanics, service area, GBP, NAP, reviews |
| SEO bureau Leiden | Leiden/regional commercial intent |

### 7.3 Duplicate/thin page risk

**Severity:** High.

The `makeWebsitePage` helper creates similar structures for branch and city landing pages. This is efficient, but ranking depends on unique local/industry content. The current pages have differentiated titles, descriptions, direct answers, and some custom deliverables, but they still share too many default sections, steps, and FAQ patterns.

Most affected pages:

- `/website-voor-loodgieters`
- `/website-voor-elektriciens`
- `/website-voor-kappers`
- `/website-voor-hoveniers`
- `/website-laten-maken-leiden`
- `/website-laten-maken-den-haag`
- `/website-laten-maken-rotterdam`

Recommended fix for every branch/city page:

- Add at least one unique section that cannot be copied to another page.
- Add examples of queries and decision moments for that audience.
- Add unique proof/process language.
- Add realistic limitations and service boundaries.
- Add internal links to matching services, cases, and contact CTAs.

### 7.4 E-E-A-T and trust

**Severity:** Medium.

The site is honest, which is a major trust asset. It avoids invented proof and uses clear disclaimers. But E-E-A-T should be more visible.

Gaps:

- About page is mostly philosophy rather than human/professional proof.
- Insights lack author bios or methodology notes.
- Portfolio detail pages explain design decisions but could better show how those decisions map to search intent and conversion doubts.
- There is little explicit editorial policy or “how advice is produced” explanation.

Recommended additions:

- “Wie achter MagisData zit” section on `/over-ons`.
- Founder role and areas of practical expertise.
- “Hoe we websites beoordelen” methodology.
- “Waarom we geen resultaatclaims zonder bron publiceren.”
- Author/method note on every insight.
- More annotated design decisions in cases.

### 7.5 Lead generation copy

**Severity:** Medium.

The CTA “Vraag gratis websiteplan aan” is strong but needs a clearer deliverable.

Recommended definition:

> Binnen één werkdag krijg je een korte richting: de grootste blokkade, drie praktische prioriteiten en de logische vervolgstap voor je website, vindbaarheid of contactroute.

Apply consistently across:

- Homepage hero.
- Final CTA.
- Contact page.
- Header CTA.
- Pricing CTA.
- Service page CTAs.

Consider intent-specific CTA variants:

| Page type | Suggested CTA |
| --- | --- |
| Website pages | Vraag gratis websiteplan aan |
| SEO pages | Vraag SEO-scan aan |
| CRO page | Vraag frictie-audit aan |
| Pricing page | Vraag pakketadvies |
| Strategic advice | Vraag groeirichting aan |

---

## 8. Page-by-page SEO audit

### 8.1 Homepage `/`

**Severity:** Medium.  
**Verdict:** Strong commercial homepage; needs more proof and local clarity above the fold.

Ranking intent:

- Website laten maken.
- SEO / vindbaarheid.
- Meer aanvragen.
- Local entrepreneur website support.

What works:

- The H1 combines “website laten maken,” “vindbaarheid,” and “meer aanvragen.”
- The hero CTA is clear.
- The page frames website, SEO, marketing, conversion, and advice as one system.
- It avoids unsupported result claims.

Issues:

- Local/Dutch positioning could be more explicit near the hero.
- The top section promotes AI/GEO/AEO but does not quickly explain why MagisData is credible there.
- “Tips, trends en inspiratie” is less authority-oriented than the rest of the brand.

Recommendations:

- Add compact local trust line: “Gevestigd in Voorschoten, werkend voor ondernemers in Nederland, met extra focus op Leiden en omgeving.”
- Add one approach sentence: “We combineren servicepagina’s, technische SEO, duidelijke antwoorden en contactroutes.”
- Rename “Tips, trends en inspiratie” to “Praktische inzichten over websites, SEO en AI-vindbaarheid.”
- Add homepage-specific JSON-LD.

### 8.2 Diensten `/diensten`

**Severity:** Low/Medium.  
**Verdict:** Useful service hub; can become a stronger SEO hub with clearer intent segmentation.

What works:

- Strong explanation that website, SEO, conversion, and strategy must work together.
- Good internal linking potential.

Issues:

- Page title is user-friendly but not very keyword-dense for a services hub.
- Service categories could be more explicitly segmented by user intent.

Recommendations:

Add a “Kies je ingang” block:

- Ik wil een website laten maken.
- Ik wil beter gevonden worden.
- Ik wil meer aanvragen uit bestaande bezoekers.
- Ik wil weten waar ik moet beginnen.

### 8.3 Webontwikkeling `/webontwikkeling`

**Severity:** Low.  
**Verdict:** One of the stronger service pages.

What works:

- Clear direct answer.
- Good audience-fit and not-for positioning.
- Explains more than design: copy, load time, proof placement, mobile contact, SEO basis.

Recommendations:

- Add “Website laten maken in jouw regio” section linking to Leiden, Den Haag, Rotterdam, and local SEO.
- Add a checklist: “Wat staat er in je websiteplan?”

### 8.4 SEO diensten `/seo-diensten`

**Severity:** Medium.  
**Verdict:** Good practical SEO positioning but needs more depth for competitive keywords.

What works:

- Metadata targets SEO services and SEO bureau intent well.
- Internal links connect to local SEO and SEO article content.

Issues:

- Visible content is likely too general for competitive “SEO diensten” and “SEO bureau Nederland” queries.

Recommendations:

Add deeper sections:

- Technical SEO.
- Service-page SEO.
- Local SEO.
- Content hubs and internal linking.
- Measurement and lead quality.
- What MagisData does not promise.
- SEO timeline and realistic expectations.

### 8.5 GEO optimalisatie `/geo-optimalisatie`

**Severity:** Medium.  
**Verdict:** Strategically valuable, but needs clearer plain-Dutch examples.

What works:

- Good metadata around GEO, generative engines, AI search, AI SEO.
- Internal links support AI/SEO cluster.

Issues:

- GEO is emerging jargon; users need concrete examples.
- Must avoid implying guaranteed AI mentions.

Recommendations:

Add “GEO in gewone taal” with examples:

- consistent entity facts,
- service definitions,
- source-like passages,
- proof close to claims,
- internal links between services, cases, FAQs, and insights.

### 8.6 AEO optimalisatie `/aeo-optimalisatie`

**Severity:** Medium.  
**Verdict:** Good concept page; needs direct answer examples.

Recommendations:

Add answer-block templates for:

- Wat is [dienst]?
- Voor wie is [dienst] geschikt?
- Wat kost [dienst] ongeveer?
- Hoe verloopt [proces]?
- Wanneer is dit niet geschikt?

### 8.7 AI infrastructuur `/ai-infrastructuur`

**Severity:** Medium.  
**Verdict:** Useful offer, but route/search wording may be less common than “AI automatisering.”

Issues:

- “AI infrastructuur” is premium but may not match SME search demand as well as “AI automatisering.”
- Need concrete examples without drifting into SaaS/backend scope.

Recommendations:

Add practical automation examples:

- lead intake summary,
- FAQ response drafts,
- content briefing,
- follow-up checklist,
- CRM/email handoff where applicable.

Add “Niet geschikt voor” boundaries:

- no full SaaS platform,
- no risky autonomous decisions,
- no unsupported sensitive-data handling.

### 8.8 Strategisch advies `/strategisch-advies`

**Severity:** Low.  
**Verdict:** Strong support page for uncertain prospects.

Recommendations:

- Add natural keyword variants: website advies, SEO advies, online marketing advies voor MKB.
- Clarify whether “groeiplan” and “websiteplan” are the same first-step offer.

### 8.9 Website onderhoud `/website-onderhoud`

**Severity:** Medium.  
**Verdict:** Good service page; needs clarity around scope, SLA, and website types.

Issues:

- “continuiteit” should be “continuïteit.”
- Clarify whether this applies to existing sites, MagisData-built sites, WordPress, Next.js, or static sites.
- Add response time, backup frequency, monitoring type, and excluded emergency work.

Recommendations:

- Add “Voor welke websites?” section.
- Add “Wat valt buiten onderhoud?” section.
- Use Dutch terms: updates, back-ups, beveiligingscontrole, herstelpunt, reactietijd.

### 8.10 Lokale SEO `/lokale-seo`

**Severity:** Low/Medium.  
**Verdict:** Strong and honest local SEO page.

What works:

- Rejects copied place-name pages.
- Explains service plus place, NAP consistency, local questions, and region context.

Recommendations:

Add a Dutch local SEO checklist:

- Google Bedrijfsprofiel.
- NAP.
- Servicegebied.
- Lokale servicepagina’s.
- Reviews.
- Interne links.
- Schema.

### 8.11 SEO bureau Leiden `/seo-bureau-leiden`

**Severity:** High.  
**Verdict:** Valuable local commercial page, but too light for the competitiveness of the query.

Issues:

- Could be adapted to another city with limited changes.
- Needs Voorschoten/Leiden relevance and local business examples.
- Needs local query examples and proof/process content.

Recommendations:

Add sections:

- SEO voor bedrijven in Leiden en omgeving.
- Waarom MagisData vanuit Voorschoten relevant is voor Leiden.
- Wanneer een Leiden-pagina zin heeft.
- Voorbeelden van lokale zoekintentie: dienst + Leiden, dienst + regio, probleem + nabij.
- Waarom geen gekopieerde plaatsnaampagina’s.
- Google Business Profile, reviews, NAP, and service-area guidance.

### 8.12 AI-vindbaarheid `/ai-vindbaarheid`

**Severity:** Low/Medium.  
**Verdict:** Strong concept page; needs examples and typo fix.

Issues:

- “geindexeerd” should be “geïndexeerd.”
- Needs before/after examples of vague versus AI-readable copy.

Recommendations:

Add:

- AI-vindbaarheid checklist.
- “Wat AI-systemen veilig kunnen samenvatten.”
- Comparison with GEO and AEO.

### 8.13 Online marketing bureau `/online-marketing-bureau`

**Severity:** Low.  
**Verdict:** Good differentiation from generic ads/social agencies.

Recommendations:

Add visible “Wat we niet doen”:

- geen losse social posts,
- geen advertentiebeheer zonder websitebasis,
- geen groeibeloftes zonder meetbasis.

### 8.14 Conversie optimalisatie `/conversie-optimalisatie`

**Severity:** Low.  
**Verdict:** Strong page; aligns well with lead-generation search intent.

Recommendations:

- Add “Wanneer eerst CRO, wanneer eerst SEO?” comparison.
- Add lead-gen checklist: first-screen clarity, proof above hesitation, CTA hierarchy, form weight, mobile contact.

### 8.15 Industry page: website voor loodgieters

**Severity:** Medium/High.  
**Verdict:** Good start; needs more unique plumber-specific search intent.

Recommendations:

- Add “Spoed versus gepland werk.”
- Add emergency availability boundaries without claiming 24/7 if not true.
- Add sections around lekkage, verstopping, CV/leidingwerk if appropriate for target clients.
- Add mobile call route and service-area proof guidance.

### 8.16 Industry page: website voor elektriciens

**Severity:** Medium.  
**Recommendations:**

- Add safety/certification trust language if applicable.
- Add query examples: storing, inspectie, groepenkast, laadpaal, installatie.
- Add “project versus storing” section.

### 8.17 Industry page: website voor kappers

**Severity:** Medium.  
**Recommendations:**

- Add treatment menu clarity.
- Add price indication guidance.
- Add appointment booking, cancellation/no-show, location/parking/opening-hours content.
- Add mobile booking route emphasis.

### 8.18 Industry page: website voor hoveniers

**Severity:** Medium.  
**Recommendations:**

- Add tuinontwerp, tuinaanleg, tuinonderhoud, seizoensvraag, project gallery, before/after proof, and onderhoudscontract versus eenmalige aanleg content.
- Link to the hoveniers portfolio example with clear “ontwerpvoorbeeld” language.

### 8.19 City page: website laten maken Leiden

**Severity:** Medium.  
**Verdict:** Good because it mentions Voorschoten near Leiden, but needs more local uniqueness.

Recommendations:

- Add “Voor ondernemers in Leiden en omgeving.”
- Explain working process for local/regional clients.
- Add nearby towns only if truly serviced.
- Add local service-business examples.

### 8.20 City page: website laten maken Den Haag

**Severity:** High.  
**Verdict:** Needs stronger local justification to avoid city-name landing-page feel.

Recommendations:

- Add city-specific positioning for professional services, local services, and B2B.
- Explain regional competition and service-area content.
- Avoid pretending to have a Den Haag office unless verified.

### 8.21 City page: website laten maken Rotterdam

**Severity:** High.  
**Verdict:** Needs deeper Rotterdam-specific positioning.

Recommendations:

- Add “Rotterdamse concurrentie vraagt om scherpe positionering.”
- Add examples by industry.
- Explain proof expectations for high-trust service businesses.
- Avoid generic city text.

### 8.22 Prijzen `/prijzen`

**Severity:** Medium.  
**Verdict:** Helpful and transparent, but needs Dutch pricing clarity.

Issues:

- Clarify BTW.
- Clarify contract length and renewal.
- Clarify hosting/domain inclusion.
- Clarify maintenance/support boundaries.
- Clarify ownership.
- “Meest gekozen” should only be used if supported by real data.

Recommendations:

Add a pricing note:

- Bedragen inclusief/exclusief BTW.
- Wat is inbegrepen.
- Wat is niet inbegrepen.
- Wat gebeurt na het eerste jaar.
- Of en wanneer opzeggen mogelijk is.
- Wie eigenaar blijft van domein, content, ontwerp, en code.

### 8.23 Over ons `/over-ons`

**Severity:** Medium.  
**Verdict:** Good philosophy, not enough human proof.

Recommendations:

Add sections:

- Wie achter MagisData zit.
- Hoe we websites beoordelen.
- Waar onze adviezen op gebaseerd zijn.
- Waarom we geen resultaatclaims zonder bron publiceren.
- Waar we wel en niet bij helpen.

### 8.24 Contact `/contact`

**Severity:** Low.  
**Verdict:** Strong lead-gen page.

Issues:

- “Gratis websiteplan” needs a clearer deliverable.
- “Nog orienteren?” should be “Nog oriënteren?”

Recommendations:

Add a micro-section:

- Je krijgt: grootste blokkade, drie prioriteiten, logische vervolgstap.
- We vragen: URL, doel, korte context.
- We doen niet: automatische nieuwsbrief, verkooppraat, verplicht gesprek.

### 8.25 Portfolio index `/cases`

**Severity:** Low.  
**Verdict:** Strong and honest portfolio framing.

Recommendations:

- Add grouping/filtering by type: local service, urgent service, SaaS/software, technical B2B.
- Add “Wat je uit deze case kunt leren.”
- Repeat disclosure where needed.

### 8.26 Portfolio detail pages `/cases/[slug]`

**Severity:** Medium.  
**Verdict:** Good decision-focused content; some Dutch-market wording needs polish.

Issues:

- English/jargon terms: “capabilities,” “authority-site,” “Enterprise CTA-hierarchie.”
- Missing Dutch accents: “Technologieen,” “orienterende.”

Recommendations:

Replace with:

- capabilities → mogelijkheden / expertises.
- authority-site → autoriteitswebsite.
- Enterprise CTA-hierarchie → CTA-structuur voor zakelijke besluitvorming.
- Technologieen → Technologieën.
- orienterende → oriënterende.

Add short above-the-fold disclaimer on detail pages: “Ontwerpvoorbeeld, geen resultaatclaim.”

### 8.27 Inzichten index `/inzichten`

**Severity:** Medium.  
**Verdict:** Good hub framing but too few articles.

Recommendations:

Create clusters:

- Website laten maken.
- SEO / lokale SEO.
- AI-vindbaarheid / GEO / AEO.
- Conversie / lead generation.
- Pricing / decision guides.

Suggested pillar articles:

- Wat kost een website laten maken in Nederland?
- Lokale SEO checklist voor dienstverleners.
- GEO versus AEO versus SEO.
- Waarom je website geen aanvragen oplevert.
- Wat moet er op een servicepagina staan?

### 8.28 Insight detail pages `/inzichten/[slug]`

**Severity:** High.  
**Verdict:** Biggest topical authority gap.

Issues:

- Article bodies are very short.
- No author bio.
- No sources/method note.
- No examples/screenshots/checklists.
- Limited internal links.

Recommendations:

Expand each article to 900–1,500 words with:

- definition,
- search intent,
- step-by-step checklist,
- examples,
- common mistakes,
- when to ask for help,
- links to services and related insights,
- author/method note,
- FAQ block.

### 8.29 Legal pages `/privacybeleid` and `/algemene-voorwaarden`

**Severity:** Medium.  
**Verdict:** Practical and transparent, but not complete as legal documents.

Recommendations:

- Add “Laatst bijgewerkt.”
- Review legally before relying on them as binding terms.
- Expand terms around ownership, third-party tools, payment period, cancellation, acceptance, liability, support, maintenance, hosting, and domain handling.

### 8.30 Bedankt `/bedankt`

**Severity:** Low.  
**Verdict:** Good post-conversion reassurance.

Recommendations:

- Add links to pricing, portfolio, and services.
- Add line: “Wil je iets toevoegen? Mail gerust...”
- Keep noindex.

### 8.31 Status `/status`

**Severity:** Low.  
**Verdict:** Useful trust page.

Recommendations:

- Keep updated date current or remove exact date if not maintained.
- Add working days, response time, and contact options.
- Use status date in sitemap metadata.

### 8.32 404 `/not-found`

**Severity:** Low.  
**Verdict:** Functional but can recover more visitors.

Recommendations:

- Add links to Diensten, Contact, Inzichten, and Portfolio.
- Add explicit noindex metadata.

---

## 9. Dutch language and terminology audit

### 9.1 Fix spelling/diacritics

The audit found visible Dutch text issues:

| Current | Recommended |
| --- | --- |
| continuiteit | continuïteit |
| geindexeerd | geïndexeerd |
| orienteren | oriënteren |
| orienterende | oriënterende |
| Technologieen | Technologieën |

### 9.2 Replace English or agency jargon

| Current | Recommended |
| --- | --- |
| capabilities | mogelijkheden / expertises |
| authority-site | autoriteitswebsite |
| Enterprise CTA-hierarchie | CTA-structuur voor zakelijke besluitvorming |
| Tips, trends en inspiratie | Praktische inzichten over websites, SEO en AI-vindbaarheid |

---

## 10. Internal linking audit

### 10.1 Positives

- Internal links are managed through a content map.
- Related links exist across service, local, industry, portfolio, and insight pages.
- Footer navigation supports silos for services, portfolio, branches, region, and knowledge.

### 10.2 Improvements

Current labels such as “Webontwikkeling,” “SEO diensten,” and “AI vindbaarheid” are fine, but more descriptive anchors can support relevance.

Recommended anchor improvements:

| Current anchor | Stronger anchor |
| --- | --- |
| Webontwikkeling | Website laten maken met SEO-basis |
| SEO diensten | SEO diensten voor servicepagina’s |
| Conversie optimalisatie | Meer aanvragen uit je website |
| Lokale SEO | Lokale SEO voor dienstverleners |
| AI vindbaarheid | AI-vindbaarheid verbeteren |

Also consider replacing the visible label “Interne links” with “Ook relevant” or “Verder lezen,” because it is more user-friendly.

---

## 11. Priority roadmap

### Priority 1 — Fix technical blockers and obvious SEO hygiene

1. Replace `301!` with `301` in `_redirects`.
2. Self-host fonts or remove `next/font/google` build dependency.
3. Stop loading GA script until analytics consent is granted.
4. Add explicit noindex metadata for custom 404 and unknown dynamic slugs.
5. Make schema conditional so legal/thank-you pages do not emit irrelevant `HowTo` schema.

### Priority 2 — Reduce thin/duplicate landing-page risk

1. Add unique sections to all industry landing pages.
2. Add unique local sections to Leiden, Den Haag, and Rotterdam pages.
3. Expand `/seo-bureau-leiden` with local market substance.
4. Add examples, boundaries, and query-intent blocks.
5. Strengthen internal links between local SEO, SEO bureau Leiden, website laten maken Leiden, and contact.

### Priority 3 — Build topical authority

1. Expand existing insight articles to 900–1,500 words each.
2. Add 6–10 new cluster articles around website costs, service pages, local SEO, AEO/GEO/SEO comparison, AI-vindbaarheid, and conversion.
3. Add author/method notes to insights.
4. Add FAQs and internal links to every insight.

### Priority 4 — Strengthen E-E-A-T

1. Expand `/over-ons` with founder and methodology detail.
2. Add editorial standards or “how we create advice” content.
3. Annotate portfolio case decisions more clearly.
4. Add proof-safe disclaimers to case detail pages.

### Priority 5 — Improve conversion copy

1. Define “gratis websiteplan” clearly and consistently.
2. Add “what you get / what we need / what we do not do” near contact form.
3. Use intent-specific CTAs by page type.
4. Clarify pricing terms, BTW, ownership, renewal, hosting, support, and package boundaries.

### Priority 6 — Performance and accessibility refinements

1. Add `fetchPriority="high"` to the homepage LCP image.
2. Lazy-load below-the-fold CTA image.
3. Add `/assets/*` cache headers.
4. Move source PNGs out of public assets.
5. Add no-JS form fallback.
6. Improve consent dialog focus management.
7. Add reduced-motion CSS.

---

## 12. Suggested 90-day SEO execution plan

### Weeks 1–2: Technical fixes and hygiene

- Fix redirect typo.
- Fix build dependency on Google Fonts.
- Fix GA consent loading.
- Add cache headers.
- Add noindex metadata for 404/unknown slugs.
- Adjust schema emission by page type.
- Fix visible spelling/terminology issues.

### Weeks 3–4: High-intent commercial pages

- Expand `/seo-bureau-leiden`.
- Expand `/seo-diensten`.
- Expand `/website-laten-maken-leiden`.
- Add AI/GEO/AEO comparison blocks.
- Clarify “gratis websiteplan.”

### Weeks 5–6: Industry and city pages

- Add unique content to plumber, electrician, hairdresser, and gardener pages.
- Add unique local content to Den Haag and Rotterdam pages.
- Add matching FAQs and internal links.

### Weeks 7–9: Insight authority cluster

- Expand three existing insights.
- Publish at least four pillar/support articles:
  - Wat kost een website laten maken in Nederland?
  - Lokale SEO checklist voor dienstverleners.
  - GEO versus AEO versus SEO.
  - Waarom je website geen aanvragen oplevert.

### Weeks 10–12: E-E-A-T, proof, and conversion

- Expand `/over-ons`.
- Add author/method notes.
- Add case-detail disclaimers and more annotated decisions.
- Improve pricing terms.
- Improve contact form lead-offer explanation.
- Run post-change build, Lighthouse, and Search Console checks after deployment.

---

## 13. Final verdict

MagisData is already built on a strong SEO architecture. The site is not suffering from a lack of pages or basic metadata; it is mainly at the stage where ranking growth depends on **depth, uniqueness, proof, and operational reliability**.

The site can plausibly rank for branded, lower-competition service, AI-vindbaarheid, and niche webdesign queries with its current structure. To compete for harder commercial terms such as “SEO bureau Leiden,” “website laten maken Den Haag,” “website laten maken Rotterdam,” “SEO diensten,” and broader authority terms around AEO/GEO/AI search, the site needs more specific content, stronger E-E-A-T, richer insights, and a few technical fixes.

The most important next action is not adding more generic pages. It is improving existing high-intent pages until each one is genuinely useful, specific, locally credible, and hard to copy.





MagisData SEO Playbook
Executive summary
MagisData already has a better foundation than many small agency sites. The live public crawl shows a coherent commercial structure with dedicated service pages, sector pages, region pages, a portfolio hub, an insights hub, clear contact details, pricing pages, and a founder-led About page. The site also shows unusual honesty for the niche: the homepage and case pages explicitly say portfolio work is not being presented as verified client results, and the privacy page states that GA4 loads only after consent. That is a trust-positive starting point. 

The main problem is not “basic SEO hygiene” anymore. It is market position, proof, and page strength. In sampled local SERPs for terms such as “website laten maken Leiden”, “webdesign Leiden”, and “SEO bureau Leiden”, competitors like Leiden Webdesign, Secure Design, Proseo, Online Tigers, onScreen, Projectie, Ranking Masters, and Convident appeared prominently, while MagisData did not appear in the sampled top results. Those competitors typically show stronger external proof, such as years of experience, testimonials, review counts, or larger case libraries. 

MagisData does, however, have a clear opening. In sampled search results for emerging topics, the site already appeared for “AEO optimalisatie”, and it has dedicated pages for AI-vindbaarheid, GEO, AEO, and local SEO. That suggests the fastest path is not trying to win broad agency terms first. The faster path is to become the most credible, evidence-backed option for websites + SEO for local service businesses in the Leiden/Voorschoten region, with AI-ready information architecture as a differentiator rather than the main headline promise. That is an inference from the current site structure, the observed SERP gaps, and the fact that MagisData already has strong topical coverage on AEO/GEO/AI-vindbaarheid. 

The core playbook, therefore, is straightforward. Make fewer pages do more work. Upgrade local and vertical pages from “well-written templates” into pages with real proof, local detail, and first-hand expertise. Build a compliant Google Business Profile, gather visible reviews, earn local and regional mentions, publish highly specific service-business content tied to Leiden-region demand, and tighten technical signals around canonicals, redirects, internal links, schema, and CWV. Google’s own documentation strongly supports that direction: Google’s ranking systems reward helpful, reliable, people-first content, use page-level signals, use crawlable links and structured data to understand pages, and use relevance, distance, prominence, links, and reviews for local ranking. 

My highest-confidence conclusion is this: MagisData should stop acting like a broad “everything digital” agency first, and start acting like the best-documented local growth specialist for service businesses around Leiden, with AI-ready structure as the proof of modern expertise. If you do that, you create a realistic route to rankings, not just a better-looking site. This conclusion is an inference from the site’s current architecture, your current lack of sampled visibility on core local head terms, and the observed strengths of competing pages. 

What the live crawl shows
This review is based on a live crawl of public pages visible through the site’s navigation, footer, and indexed search results. I could verify public page existence, page titles as rendered in search/browser fetches, visible H1s, internal-link structure, and several redirect behaviours. I could not directly verify raw HTML for every page, robots.txt, sitemap XML, current canonical tags, or current structured data output for every URL in this browsing environment, so those items are treated as assumptions to validate in Search Console and Google’s Rich Results Test. Google itself recommends the Page Indexing report, URL Inspection, and the Rich Results Test for those checks. 

Public URL inventory discovered in the crawl
Group	Public URLs discovered	What this means
Core commercial	/, /diensten, /over-ons, /prijzen, /contact, /status	A complete commercial backbone exists, including pricing transparency, founder/about context, and contact capture. 
Main services	/seo-diensten, /lokale-seo, /ai-vindbaarheid, /geo-optimalisatie, /aeo-optimalisatie, /strategisch-advies, plus pages for web development, online marketing, conversion optimisation, website maintenance, and AI automation/infrastructure linked from the site	The topical architecture is broad and commercially rich, but broadness also raises a focus risk if proof is thin. 
Portfolio	/cases, plus four public case pages for IT consultancy, hoveniersbedrijf, dakbedrijf, and social platform	The portfolio is useful for design/process proof, but the site repeatedly clarifies these are design portfolio pieces, not verified client result stories. That honesty is good, but it creates a conversion-proof gap. 
Insights	/inzichten, plus at least three public articles on low enquiries, SEO without jargon, and AI-vindbaarheid	The content hub exists and articles are visibly dated/updated, which is a strong base for topical authority if expanded carefully. 
Industry landing pages	/website-voor-loodgieters, /website-voor-elektriciens, /website-voor-kappers, /website-voor-hoveniers	MagisData is already signalling a vertical strategy for service businesses. That is strategically promising. 
Location landing pages	/website-laten-maken-leiden, /website-laten-maken-den-haag, /website-laten-maken-rotterdam	Regional expansion has started, but the local pages are structurally very similar and need more unique local evidence before expanding further. 
Legal / privacy	/privacybeleid, /algemene-voorwaarden	Legal basics are present. The privacy page states consent-based GA4 loading and use of Formspree for contact forms. 

Metadata and content observations that matter most
Several high-value pages are already aimed at useful search intent. The homepage title is “Website laten maken voor SEO en AI-vindbaarheid”; the services hub is “Diensten voor websites, SEO, GEO, AEO en AI”; the SEO page targets “SEO diensten”; the local SEO page targets “Lokale SEO”; and the AI pages explicitly target “AI vindbaarheid”, “GEO”, and “AEO”. That means the site is not missing topical intent coverage. It is missing enough authority and differentiation to win the more competitive local-commercial SERPs. 

The site’s strongest existing on-site trust signals are consistent NAP/contact details, the named founder page for Daniël Magis, public pricing, and visible update dates on content and status pages. Those are all useful. Google’s documentation also encourages clear authorship and high-trust content signals when readers would expect them. 

The main content weakness is repetition. The Leiden, Den Haag, and Rotterdam pages share almost identical scaffolding, FAQs, CTA patterns, and structural blocks, with only part of the local context changing. The same is true for several industry pages. That does not mean Google will automatically penalise them. It does mean these pages are vulnerable if they are expanded into a scaled set without adding first-hand local/industry evidence. Google’s people-first guidance explicitly warns against producing lots of pages simply to attract search traffic and asks whether content demonstrates first-hand expertise and substantial value compared with competing results. 

Redirect hygiene is partly in place. I could confirm that legacy URLs such as /strategic-consulting, /insights/ai-vindbaarheid, and /cases/lokale-dienstverlener redirect to current Dutch URLs. I also saw a more concerning case: /seo-services redirected to /seo-diensten, but the fetched page variant showed older navigation/content elements than the currently linked /seo-diensten page. That suggests at least one cache, rendering, or deployment inconsistency worth fixing before link equity and canonicals are trusted. 

There is also a brand-entity issue. In sampled brand searches, unrelated “Magic Data” results and other “Magis” entities also appeared. MagisData did appear, but not in a clean, undisputed, dominant way. That makes brand disambiguation and founder-entity building more important than they would be for a completely unique brand name. 

What Google wants and what that means for MagisData
Google’s own guidance is very consistent here. Search success comes from content that is helpful, reliable, and people-first; content that clearly shows who created it; content that demonstrates first-hand expertise; and pages that are easy for Google to crawl, understand, and consolidate. Google also states that its ranking systems work mainly at the page level, though some site-wide signals are also used. In practice, that means MagisData will rank by building fewer, stronger, more evidence-backed pages, not by expanding a large grid of near-identical city and trade pages. 

Google also says titles should make the main page title clear, meta descriptions should be unique and relevant, links should be crawlable and descriptive, canonicals should consolidate duplicates clearly, robots.txt is for crawl management rather than hiding pages from Google, and noindex only works if pages remain crawlable. Those are the rules MagisData should follow while tightening the site technically. 

For page experience, Google is equally clear: Core Web Vitals matter, but there is no single “page experience signal”, and good CWV scores alone do not make a page rank. The current stable Core Web Vitals are LCP, INP, and CLS, with “good” thresholds at or below 2.5 seconds, 200 milliseconds, and 0.1 respectively. The practical implication for MagisData is simple: improve performance because it helps users and conversions, but do not treat page-speed work as the primary ranking strategy. 

For local SEO, Google states that local ranking is mainly driven by relevance, distance, and prominence, and that prominence is influenced by factors such as links and reviews. Google also says complete business information, verification, current hours, replies to reviews, and rich profile content help local visibility. That means any local ranking play for Leiden has to combine website work with GBP, reviews, and local mentions. Local landing pages alone are not enough. 

For AI-driven search experiences, Google’s guidance is not “make separate AI content”. It is closer to “make your existing content understandable, controllable, and useful”. Google says AI features in Search use the same crawl controls as Search, and site owners can use standard controls such as nosnippet, max-snippet, data-nosnippet, or noindex when needed. That fits MagisData’s AEO/GEO positioning well, but it also means those pages need to be grounded in normal Search quality, not hype terminology alone. 

SERP and competitor reality in Leiden and nearby
What the sampled SERPs show
The sampled local-commercial SERPs are crowded, and they reward specific trust patterns. For “website laten maken Leiden” and “webdesign Leiden”, pages from Leiden Webdesign, Secure Design, Studio Projectie, onScreen, Maintain Design, SAM Design, Vrijdag Online, and Convident surfaced. For “SEO bureau Leiden” and “SEO Leiden”, competitors including Proseo, Online Tigers, Ranking Masters, SAM Online Marketing, Designated, Smoop, and Connect Your World surfaced. In the sampled result set, MagisData did not surface on those core terms. 

The niche AI-related SERPs are more open. In the sampled search for “AEO optimalisatie”, MagisData did appear. In sampled GEO-related SERPs, broader marketing thought-leadership pages and agency pages dominated. That suggests MagisData has a real chance to own long-tail AI-search terminology, but it still needs more trust and proof to convert that visibility into broader commercial rankings. 

Competitor comparison
Competitor	Sampled query fit	What they show well	Why they currently beat or challenge MagisData	What MagisData should copy without copying them
Leiden Webdesign	Webdesign / website terms in Leiden	Local contact details, testimonials, project examples, straightforward service menu	Strong local relevance and visible customer voice. 
Add visible customer proof and local social proof to service pages.
Proseo	SEO Leiden	Since-1999 positioning, explicit local network, local linkbuilding angle	Shows tenure, local knowledge, and clear SEO specialism. 
Build a clear “why Leiden-region businesses hire MagisData” page with local proof and local partnerships.
Secure Design	Webdesign Leiden	10+ years of experience, platform breadth, portfolio/reviews CTA	Experience and the promise of professionalism are prominent early. 
Put expertise and proof earlier on landing pages, not just in About.
Online Tigers	SEO bureau Leiden	Owner-led positioning, practical plans, “meetable results” language	Feels specialist, personal, and outcome-focused. 
Lean harder into founder-led strategy and outcomes, not a generic service stack.
Convident	Webdesign Leiden	227 reviews, 4.8 rating, broad case set, full-service credibility	Heavy review proof and scale cues create instant trust. 
You do not need scale; you do need externally verifiable proof.

Keyword opportunity map
The table below uses qualitative demand bands rather than exact search volume, because I do not have MagisData’s Search Console or Keyword Planner data. The bands are a practical inference from the sampled SERPs, the competitiveness of the result pages, and how well the keyword fits MagisData’s current assets.

Keyword / theme	Demand band	Intent	Recommended asset	Priority	Why now
website laten maken Leiden	Medium to High	Bottom-funnel	Rebuild the existing Leiden page with proof, local examples, comparisons, pricing cues, review snippets, and internal links	Very high	MagisData has the page, but sampled SERPs show strong competition and no sampled visibility. 
webdesign Leiden	Medium to High	Bottom-funnel	New dedicated page or stronger secondary optimisation of the Leiden page	High	This term shows strong dedicated competitors. 
SEO bureau Leiden	High	Bottom-funnel	New dedicated service + city page, linked from /seo-diensten and /lokale-seo	Very high	Competitors are highly specialised here; MagisData needs an explicit page, not just general SEO messaging. 
lokale SEO Leiden	Medium	Bottom-funnel	Dedicated Leiden-local page or section within the future SEO Leiden page	High	Google’s local ranking rules make this commercially important, and MagisData already has a local SEO service page. 
website voor loodgieters	Medium	Bottom-funnel vertical	Upgrade existing page with trade-specific proof, FAQs, cost/process details, and a real case	High	The term has clear commercial SERP competition and MagisData already has the page. 
website voor hoveniers	Low to Medium	Bottom-funnel vertical	Upgrade existing page and connect it tightly to the existing hoveniers portfolio case	High	This is one of MagisData’s best verticals because it already has both a sector page and a supporting design case. 
website voor elektriciens	Low to Medium	Bottom-funnel vertical	Upgrade existing page; add safety/process proof and real examples	Medium	Existing page is relevant, but the market also contains strong template or specialist competition. 
AEO optimalisatie	Low to Medium	Bottom-funnel topical	Strengthen the current page and support it with FAQs, definitions, comparisons, and examples	High	MagisData already surfaced in the sampled SERP, so this is a near-term authority win. 
GEO optimalisatie	Low to Medium	Mid / bottom-funnel topical	Keep current page, but add evidence, examples, and linked thought leadership	Medium	Competition exists, but it remains less mature than classic SEO or local web design SERPs. 
AI vindbaarheid	Medium emerging	Mid-funnel	Strengthen current page and publish supporting articles/case observations	High	MagisData already has a clear service page and article support here. 
SEO voor loodgieters / SEO voor hoveniers / SEO voor elektriciens	Low to Medium	Mid / bottom-funnel vertical	New cluster pages under the SEO service hub	Medium	These matched extensions are a natural bridge between MagisData’s trade pages and its SEO expertise. This is an inference from current architecture. 
meer aanvragen via je website / similar problem-solution queries	Medium	Top-funnel	Expand the insights cluster around low-enquiry diagnosis and conversion structure	Medium	The site already publishes on this theme and it fits Google’s people-first guidance well. 

The growth playbook for content, local SEO, and authority
The positioning shift that will make ranking easier
Right now, the site simultaneously sells website builds, SEO, local SEO, online marketing, AI-vindbaarheid, GEO, AEO, AI automation, maintenance, and strategic advice. That breadth is not inherently wrong, but it is too wide to be the clearest possible signal for a young authority site that is not yet winning the biggest local SERPs. The site itself already points toward a more focused answer: service businesses, local visibility, practical clarity, and founder-led execution. 

My recommendation is to make the homepage and top nav communicate this hierarchy:

Primary promise: websites and SEO for local service businesses in the Leiden region.
Differentiator: built for Google and AI-driven search experiences.
Secondary offers: AEO, GEO, AI-vindbaarheid, strategic advice, and automation for clients who already trust the primary offer.

That is a strategic inference, but it aligns with both Google’s people-first focus and the local SERP reality you are competing in. 

Recommended site cluster
Home: Websites + SEO for local service businesses

Core service hub

Proof hub

Insights hub

Local hub

Industry hub

SEO services

Local SEO

Web development

AEO

GEO

AI visibility

SEO bureau Leiden

Website laten maken Leiden

Website laten maken Voorschoten

Leiden-region FAQ / service-area proof

Website + SEO voor loodgieters

Website + SEO voor hoveniers

Website + SEO voor elektriciens

Website + SEO voor kappers

Verified case studies

Review hub

About Daniël Magis

Pricing

Cost guides

Comparison pages

Buyer FAQs

AI-search thought leadership



Show code
This structure intentionally reduces fragmentation and helps every new page reinforce a smaller set of authority themes. That is consistent with Google’s guidance to have a primary site purpose and to avoid scaled content that exists mainly to chase search traffic. 

Upgrade the pages you already have before adding many more
The existing vertical and city pages should be rebuilt in this order:

First, strengthen Leiden and two verticals — specifically website laten maken Leiden, website voor hoveniers, and website voor loodgieters. Those are the pages with the clearest commercial fit and, in the hoveniers case, the strongest supporting portfolio asset. 

Each upgraded landing page should include:

a sharper H1 and intro aimed at one commercial query;
clear “who this is for / when this is a fit / when it is not” sections;
a short pricing anchor or range;
a visible founder byline or “reviewed by” note where appropriate;
one locally or vertically specific case, teardown, or example;
service-area clarity;
FAQs based on sales objections;
strong internal links to the parent SEO or web-development service page and to supporting articles;
one primary CTA only. 
A useful editorial rule: if a page cannot include real local context, real vertical context, or real process evidence, it should not be published yet. That rule is not directly from Google, but it is the safest on-site interpretation of Google’s people-first and first-hand expertise guidance. 

Content clusters that can actually build authority
MagisData should build content in three layers, not one giant blog.

Local commercial support content should directly support Leiden-region money pages. Examples:

“How much should a business website in Leiden cost?”
“Website laten maken of eerst je bestaande site verbeteren in Leiden?”
“SEO bureau Leiden vs freelancer: what should a local service business choose?”
“What local businesses in Leiden need on a homepage to get more enquiries”
These pages support commercial intent and help Google understand the entity relationship between MagisData, Leiden, websites, SEO, and local service businesses. 

Vertical authority content should support one industry at a time. For example, the hoveniers cluster could include:

“What a hovenier homepage should say in the first five seconds”
“The best page structure for a hoveniersbedrijf website”
“How local SEO works for landscapers in the Leiden region”
“Before/after teardown: why this trade website does or does not convert”
That is how existing vertical pages become topical clusters rather than standalone brochures. It also gives you room to demonstrate first-hand design and conversion expertise, which is one of Google’s quality signals. 

AI-search authority content should remain on the site, but narrower and more concrete. Instead of generic “what is GEO?” thought leadership, publish pages like:

“How a local service business can become easier for AI systems to cite”
“What AEO changes on a service page actually help conversions”
“How to structure FAQs so both Google and AI assistants understand them”
“What ChatGPT, Perplexity, and Google AI Overviews need to recognise a local business correctly”
This keeps your AI angle meaningful and commercially adjacent, rather than abstract. It also matches Google’s guidance that AI-search visibility still starts with understandable, useful content. 

Example title and meta templates
Google recommends clear main titles and unique, relevant meta descriptions. Use that to tighten every important landing page. 

Page	Recommended title	Recommended meta description
Home	`Website laten maken in Leiden + SEO voor lokale bedrijven	MagisData`
Future SEO Leiden page	`SEO bureau Leiden voor lokale servicebedrijven	MagisData`
Existing Leiden web page	`Website laten maken Leiden voor meer aanvragen	MagisData`
Existing plumbers page	`Website voor loodgieters met lokale SEO en snelle contactroute	MagisData`
Existing AEO page	`AEO optimalisatie voor servicepagina’s en AI-antwoorden	MagisData`

Google Business Profile and citation strategy
If MagisData has no active Business Profile, claiming and verifying one is a priority. Google says verified, complete, accurate profiles are more likely to appear in local results, and local ranking depends on relevance, distance, and prominence. 

The biggest caveat is the address. The website publicly lists Suze Groenewegerf 25, Voorschoten, and public property sites describe that address as a residential home. If clients do not visit that location in person, Google’s own business guidelines say a service-area business should hide its address and only show its service area. Google also says online-only businesses are not eligible, and profiles should reflect real in-person customer contact. 

So the GBP recommendation is:

If customers meet you at the address, use a normal location profile.
If customers do not meet you there, treat MagisData as a service-area business, hide the address, and set service areas around the real operating radius. Google says service areas should not generally extend much beyond about two hours’ driving time from the business base. 
For categories, Google says to pick the most specific categories that describe what the business is, not everything it has. Because categories are dynamic inside GBP, I would not hard-code a single answer in this report. Instead, choose the primary category based on dominant revenue. If most revenue comes from building sites, a web-design category is likely the right primary fit. If the dominant service is SEO, an internet-marketing or SEO-adjacent category may be better. Then use secondary categories only for real, delivered services. 

For citations and prominence, do not chase junk directory volume. Use a small set of trustworthy Dutch and local corroboration sources first:

KvK search listing / business registration consistency;
BV Leiden membership/profile if relevant;
Ondernemersvereniging Voorschoten;
Ondernemend Leiden and other real local business associations or partnerships;
reputable partner, supplier, or client pages that mention MagisData by name and service. 
That recommendation is based on Google’s statement that local prominence is influenced by links and reviews, and that Google also detects business/category information from your website and mentions about your business around the web. 

Review strategy that will actually move local trust
Reviews help twice: they influence conversion, and Google says more reviews and positive ratings can help local ranking. Google also encourages replying to reviews. 

MagisData should not ask for generic “great service” reviews. Ask for specific, process-oriented reviews that reinforce the entity you want Google and humans to understand:

what kind of business the client runs;
what MagisData actually did;
what the site/content/SEO process felt like;
what changed after the work;
why a local business should trust you.
That will create better review-topic richness and better conversion copy for the site.

Review request email template

text
Copy
Subject: Quick favour about your experience with MagisData

Hi [Name],

Thanks again for working with me on [project / website / SEO work].

Would you be open to leaving a short Google review? The most helpful reviews mention:
- what kind of business you run,
- what I helped you with,
- how the process felt,
- and what improved for you.

Here’s the link: [GBP review link]

Thank you,
Daniël
Review request WhatsApp / SMS

text
Copy
Hi [Name] — would you mind leaving a short Google review for MagisData? Specific details about the project and how the process felt help the most. Here’s the link: [GBP review link]
Reply to every review within a few days, using natural language and relevant service terms without stuffing them. That aligns with Google’s review guidance and improves human trust. 

Founder-entity building and brand disambiguation
MagisData should build Daniël Magis as a corroborated public expert entity. The site already has a founder page, and a LinkedIn profile exists that identifies Daniël Magis as Founder & CEO of MagisData. That is useful, but it needs more external corroboration because the brand SERP is not yet cleanly owned. 

Do the following:

create a dedicated /daniel-magis or enhanced about/founder page with biography, methods, areas of expertise, service focus, and links to public profiles;
add article bylines and “reviewed by Daniël Magis” where appropriate;
make sure LinkedIn, website, GBP, and any local memberships describe the business in the same language;
publish one original founder-led column per month on local/digital growth themes for service businesses;
pursue one interview, guest article, podcast appearance, or panel contribution per month;
sign case-study introductions and teardown articles personally, with real observations.
Google’s people-first documentation explicitly recommends clear authorship, background on creators, and signalling “who” created content where readers expect it. 

Backlink and local-link acquisition tactics
The safest link strategy for MagisData is entity-building links, not generic “SEO links”. Google’s local ranking guidance makes this especially sensible because prominence uses links and web mentions. 

High-value tactics for MagisData:

Local business associations: apply for profiles, member pages, and event participation via BV Leiden and Ondernemersvereniging Voorschoten. 
Local knowledge contributions: publish practical columns for Leiden-region entrepreneur communities or partner businesses. This can strengthen both links and brand search demand. 
Partner and supplier citations: ask hosting partners, software implementers, photographers, or copy collaborators to link to real project or partner pages.
Case-based outreach: instead of asking for links, create “what changed and why” case summaries that clients are happy to reference.
Resource links: publish genuinely useful assets such as a “homepage checklist for local service businesses” or “Leiden local SEO checklist” that people can cite.
Founder's viewpoint links: one strong expert byline on a reputable local or marketing site is worth more than dozens of weak directories.
Local partnership outreach template

text
Copy
Subject: Practical article idea for [Organisation / Site]

Hi [Name],

I run MagisData and work with local businesses on websites, local SEO, and clearer online positioning.

I had an idea for a practical contribution your audience might actually use:
[working title]

It would be concrete, non-promotional, and based on real patterns I see with local service businesses.

If useful, I can send a short outline first.

Best,
Daniël Magis
MagisData
Client case-study outreach template

text
Copy
Subject: Short case story about our project?

Hi [Name],

I’m building out MagisData’s proof pages a bit more carefully and wanted to ask whether you’d be comfortable contributing a short, factual case summary.

Nothing exaggerated — just:
- what the starting point was,
- what we changed,
- and what felt better afterwards.

If easier, I can draft it and you can correct anything.

Thanks,
Daniël
Technical implementation, KPIs, and the 90-day roadmap
Technical checklist
Area	What “good” looks like	Why it matters
Indexation baseline	Verify all money pages in Page Indexing and URL Inspection, then request indexing only where needed	Google’s Page Indexing report and URL Inspection are the right tools for coverage and live-indexability checks. 
Sitemap	Ensure a clean XML sitemap contains only canonical, indexable URLs and is submitted in Search Console	Google treats sitemaps as hints, and recommends using them to surface preferred canonical URLs. 
Robots / noindex logic	Never rely on robots.txt to remove pages from search; use noindex only on crawlable pages	Google says robots.txt is not a mechanism for keeping pages out of Google, and noindex requires crawl access. 
Canonicals	Self-referencing canonical on every indexable page; consolidate legacy/duplicate paths cleanly	Google recommends clear canonical signals and sitemap support for canonical preferences. 
Redirect hygiene	Audit all old English/legacy paths; make sure every old route 301s to the live equivalent and does not serve stale variants	I observed working redirects, but also one suspect old/new SEO page inconsistency. 
Titles and descriptions	One unique title and one unique meta description per priority page; strong title/H1 alignment	Google recommends clear main titles and unique, relevant meta descriptions. 
Internal links	Every priority page linked from hubs and related pages with descriptive anchors	Google uses links to discover pages and understand relevance. 
Structured data	Add organisation/professional-service, service, article, breadcrumb, and FAQ where visible and accurate	Google uses structured data to understand pages and enable richer search features. 
Mobile parity	Same content, titles, descriptions, and critical signals on mobile as desktop	Google’s mobile-first guidance recommends metadata parity. 
Page experience / CWV	Improve LCP, INP, and CLS on core templates; prioritise field data, not vanity scores	Google uses CWV as part of page experience, but not as a standalone ranking shortcut. 
AI/Search controls	Audit snippet controls only if needed; do not accidentally limit useful AI/Search visibility	Google says AI features in Search use the same crawl and snippet controls as Search. 

Recommended schema templates
Use structured data to clarify the entity, service, and content relationships on the site. Google’s documentation supports structured data for understanding content and showing richer results. 

Homepage entity template

json
Copy
{
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": "https://magisdata.nl/#org",
  "name": "MagisData",
  "url": "https://magisdata.nl/",
  "description": "MagisData builds websites and SEO systems for local service businesses.",
  "founder": {
    "@type": "Person",
    "name": "Daniël Magis"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "contact@magisdata.nl",
    "telephone": "+31-6-42280029"
  },
  "areaServed": [
    { "@type": "City", "name": "Leiden" },
    { "@type": "City", "name": "Voorschoten" },
    { "@type": "AdministrativeArea", "name": "Zuid-Holland" }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/daniel-magis-4088262bb"
  ],
  "serviceType": [
    "Webdesign",
    "SEO",
    "Lokale SEO",
    "AEO",
    "GEO"
  ]
}
If MagisData is treated as a service-area business and does not serve customers at the residential address, omit a public street address from homepage schema and rely on areaServed. That recommendation follows Google’s service-area business guidance. 

Service page template

json
Copy
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://magisdata.nl/seo-bureau-leiden#service",
  "name": "SEO bureau Leiden",
  "provider": {
    "@id": "https://magisdata.nl/#org"
  },
  "serviceType": "Local SEO and on-page SEO",
  "areaServed": {
    "@type": "City",
    "name": "Leiden"
  },
  "url": "https://magisdata.nl/seo-bureau-leiden",
  "description": "SEO services for local service businesses in Leiden, including service pages, local SEO, internal linking and content structure."
}
Article page template

json
Copy
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How local service businesses in Leiden can get more enquiries from their website",
  "author": {
    "@type": "Person",
    "name": "Daniël Magis"
  },
  "publisher": {
    "@id": "https://magisdata.nl/#org"
  },
  "datePublished": "2026-06-15",
  "dateModified": "2026-06-15",
  "mainEntityOfPage": "https://magisdata.nl/inzichten/website-meer-aanvragen-leiden"
}
Publishing workflow
Keyword / query pattern

Intent map

Page brief

First-hand inputs and proof

Draft with clear titles, FAQs, and CTA

On-page SEO and schema

Publish and internally link

GBP/review/citation support

GSC + GBP measurement

Iterate based on impressions, clicks, calls, and enquiries



Show code
This workflow reflects Google’s emphasis on helpful content, crawlable architecture, and measurable page-level improvement. 

KPI framework
Use Search Console, GBP Performance, and your own lead tracking as the main SEO dashboard. Google’s documentation confirms that Search Console’s Performance report is the right source for clicks, impressions, CTR, and position; GBP provides performance/insights data; and a generative AI report is rolling out to some site owners. 

KPI	Source	Starting action	Suggested 90-day target
Indexed priority pages	GSC Page Indexing + URL Inspection	Confirm all core money pages and top articles are indexed	100% of priority pages indexed
Non-brand impressions	GSC Performance	Separate brand vs non-brand query sets	+50% from baseline
Top 20 keyword entries	GSC / manual rank tracking	Track Leiden and 2 vertical clusters	8 to 12 priority queries in top 20
Top 10 keyword entries	GSC / manual rank tracking	Track local-commercial terms separately	3 to 5 priority queries in top 10
Organic enquiries	CRM / form log / call log	Add source capture to forms and calls	+30% qualified organic leads
GBP actions	GBP Performance	Track calls, website clicks, discovery searches	Upward month-on-month trend
Review count and rating	GBP	Start systematic review requests	10+ new relevant reviews while keeping strong rating
Local referring domains	Ahrefs/Majestic/manual	Track real local and partner citations	+5 to 10 high-quality local/industry mentions
Article-to-service assists	GSC + analytics	Track internal journeys from insights to service pages	Measurable assists from content cluster
AI-search impressions	GSC generative AI report if available	Monitor rollout/access	Establish baseline and trend

The 90-day roadmap
Timing	Owner	Priority tasks	KPI link
Days 1–15	Founder + Developer	Audit redirects/canonicals; validate indexation of all core money pages; submit sitemap; fix any stale legacy route issues; add bylines and author consistency; define the primary positioning line for the homepage	Indexed pages, crawl health, title/canonical consistency
Days 1–15	Founder	Decide GBP model: location vs service-area business; claim/verify profile; set correct categories, service areas, description, hours, services	GBP visibility, calls, discovery searches
Days 15–30	Founder + Content	Rebuild /website-laten-maken-leiden, create /seo-bureau-leiden, and upgrade /website-voor-hoveniers with stronger proof and FAQs	Query impressions, CTR, top 20 entries
Days 15–30	Founder	Start review programme with recent/strongest clients; respond to all reviews	Review count, rating
Days 30–45	Founder + Content	Upgrade /website-voor-loodgieters; publish two support articles for Leiden + one for hoveniers	Keyword footprint, internal assists
Days 30–45	Developer	Add organisation/service/article/breadcrumb schema to priority templates; tighten internal-link blocks	Rich-result readiness, crawl understanding
Days 45–60	Founder	Join/pursue local association profiles and partner mentions; pitch one local article/interview	Local referring domains, brand searches
Days 45–60	Founder + Content	Rework homepage messaging around the chosen wedge; reduce “everything agency” feel; make proof more visible	CTR, conversion rate
Days 60–75	Founder + Content	Upgrade /lokale-seo, /seo-diensten, and /ai-vindbaarheid; publish one practical AI-search article tied to service businesses	Non-brand impressions, topical authority
Days 60–75	Founder	Launch case-study capture workflow for every completed project	Proof assets, conversion rate
Days 75–90	Founder + Content	Decide which city pages deserve stronger build-out and which should wait; only scale where you have proof	Better page quality, lower thin-page risk
Days 75–90	Founder + Developer	Review performance, prune weak experiments, and start second-wave pages only from winning clusters	Top 10 entries, qualified leads

Prioritised action list
Priority	Action	Owner	Why it comes first	Success signal
Critical	Create or rebuild SEO bureau Leiden	Founder + Content	You need an explicit answer to a core local-commercial query	First impressions/clicks on Leiden SEO terms
Critical	Rebuild Website laten maken Leiden with real proof	Founder + Content	Existing page exists, but sampled competition is strong	Higher CTR and better ranking trend
Critical	Set up compliant GBP	Founder	Local visibility cannot rely on website pages alone	Discovery searches, calls, reviews
Critical	Fix redirect/canonical inconsistencies	Developer	Mixed signals waste trust and equity	Clean URL inspection/canonical results
Very high	Collect 10+ high-quality reviews	Founder	Trust and local prominence depend on proof	Review count/rating growth
Very high	Build one real vertical proof cluster	Founder + Content	Vertical pages need evidence to rank and convert	Improved vertical query footprint
Very high	Add author/founder entity signals	Founder + Developer	Helps E-E-A-T and brand disambiguation	Better branded SERP control
High	Add structured data on core templates	Developer	Helps Google understand entities, services, and articles	Clean Rich Results Test / better understanding
High	Earn local association and partner mentions	Founder	Prominence and local corroboration need off-site signals	New local referring domains
High	Keep AI topics as a differentiator, not the homepage’s main identity	Founder	AI pages can win niche trust, but local website + SEO is the larger commercial engine	Stronger conversion from local-commercial traffic

Open questions and limitations
A few important things remain unverified because they require access to MagisData’s own tooling or raw-source checks. I could not directly confirm the current XML sitemap, robots.txt contents, self-referencing canonicals on every URL, current schema output, or live field CWV data for the domain. Those should be checked in Search Console, URL Inspection, the Core Web Vitals report, PageSpeed Insights/CrUX, and the Rich Results Test. Google’s documentation explicitly points to those tools for that work. 

I also could not verify the current Business Profile state for MagisData directly, only the official Google guidance that should govern it. Because the website lists a residential-looking Voorschoten address, the GBP setup decision matters: if customers do not visit there, Google says to hide the address and use a service area instead. 

Finally, the keyword table uses qualitative demand bands, not exact volume numbers, because I did not have access to MagisData’s Search Console data or Keyword Planner exports. The right way to refine those priorities is to combine this playbook with actual GSC query data after the first indexation and content clean-up pass. Google’s Performance report is the right place to do that. 


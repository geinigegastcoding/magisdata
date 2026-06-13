# MagisData SEO Ranking Plan

Source inputs: `seo-report.md`, `text-report.md`, read-only sub-agent reviews, and local inspection of `app/`, `components/`, `content/`, `schemas/`, `public/_redirects`, `public/_headers`, and `next.config.mjs`.

Goal: make MagisData more likely to rank for high-intent Dutch searches by improving technical reliability, page specificity, topical authority, local trust, AI-search extractability, and conversion clarity. This plan avoids fake testimonials, invented client results, invented metrics, doorway pages, and unsupported ranking promises.

## Strategic Direction

MagisData should stop trying to look like a broad everything-agency first. The clearest ranking wedge is:

> MagisData is a Dutch website and SEO partner for local service businesses, with AI-ready structure through SEO, AEO, GEO, AI-vindbaarheid, and conversion-focused websites.

That positioning gives the site a realistic path:

1. Win brand/entity clarity for MagisData and Daniel Magis.
2. Win Leiden-region commercial intent first.
3. Build one or two strong vertical clusters before scaling more city or industry pages.
4. Use AI-vindbaarheid, AEO, and GEO as differentiators, not vague hype.
5. Turn the insight section into real topical authority instead of short blog cards.
6. Strengthen off-site trust through GBP, reviews, local mentions, and founder/entity signals.

## Ranking Principles

Every priority page must satisfy these rules before more pages are added:

- One primary search intent per page.
- One clear H1 aligned with the intent.
- A 40-60 word direct answer near the top.
- Unique local, service, industry, or proof context.
- Visible author/founder or method signal where trust matters.
- FAQ questions that match real buyer/search questions.
- Internal links to hub, support, proof, and contact pages.
- Schema that only describes visible, accurate page content.
- No fake client result, review, logo, rating, or guarantee.
- Clear CTA with next-step expectation.

## Priority 0: Measurement And Baseline

Before rewriting, create a baseline. Without this, improvement cannot be judged.

### Actions

1. Set up or confirm Google Search Console.
2. Set up or confirm Bing Webmaster Tools.
3. Submit `https://magisdata.nl/sitemap.xml`.
4. Export current GSC data for:
   - queries,
   - pages,
   - impressions,
   - clicks,
   - CTR,
   - average position,
   - indexed pages,
   - excluded pages.
5. Create a simple keyword tracking sheet for the target queries listed below.
6. Create a monthly AI visibility sheet for ChatGPT, Perplexity, Gemini/Google, and Bing/Copilot style results.
7. Add lead source capture to form handling later if not already available.

### Success Signals

- All priority pages known as indexed, not guessed.
- Baseline non-brand impressions recorded.
- Baseline branded search state recorded.
- Baseline AI-citation state recorded.
- Baseline organic enquiries recorded.

## Priority 1: Technical Crawl, Build, And Trust Hygiene

Technical SEO is already strong, but several issues can limit crawl reliability, performance, or structured-data trust.

### 1. Remove Google Fonts Build Dependency

Issue: `app/layout.tsx` imports Inter through `next/font/google`. The SEO report found `npm run build` can fail when Google Fonts cannot be fetched.

Likely files:

- `app/layout.tsx`
- `app/globals.css`
- new local font asset directory if needed

Future implementation:

- Replace `next/font/google` with `next/font/local`.
- Commit approved local font files.
- Keep `display: swap` behavior.
- Confirm build no longer fetches `fonts.googleapis.com`.

Impact:

- More reliable static export.
- Safer sitemap, robots, metadata, and HTML generation.
- Less CI/CD dependency on external network availability.

Verification:

- `npm run typecheck`
- `npm run build`
- Confirm build logs show no Google Fonts fetch.

### 2. Verify Redirect Hygiene

Report said `/seo-services` had `301!`, but current `public/_redirects` shows valid `301`. Treat this as live deployment verification, not an assumed current code bug.

Likely file:

- `public/_redirects`

Future checks:

- Verify `/seo-services` redirects to `/seo-diensten`.
- Verify English legacy routes redirect to Dutch live routes.
- Verify no redirect chains.
- Verify www to non-www redirect works.

Verification after deploy:

- `curl -I https://magisdata.nl/seo-services`
- `curl -I https://www.magisdata.nl/seo-services`
- `curl -I https://magisdata.nl/web-development`
- `curl -I https://magisdata.nl/insights/seo-zonder-jargon`

Success:

- Every legacy route returns one 301 to the final canonical URL.

### 3. Make Schema Selective And Accurate

Issue: `components/content-page.tsx` currently emits `FAQPage` and `HowTo` broadly. Legal and thank-you pages should not get rich-result-oriented HowTo/FAQ schema unless the page genuinely matches that schema.

Likely files:

- `components/content-page.tsx`
- `components/landing-route-page.tsx`
- `schemas/seo.ts`
- `app/page.tsx`
- `app/prijzen/page.tsx`

Future implementation:

- For `schemaKind === "service"`:
  - allow `Service`,
  - allow `FAQPage` only when visible FAQ is substantial,
  - allow `HowTo` only if the page is genuinely instructional.
- For `schemaKind === "page"`:
  - emit `WebPage` and `BreadcrumbList` by default.
- For noindex or thank-you pages:
  - omit rich-result schema.
- Remove or refine generic `Service.offers.availability: InStock`.
- Put concrete offer/pricing schema only on `/prijzen` if visible pricing and terms are clear.
- Add homepage `WebPage` JSON-LD.
- Consider homepage visible `ItemList` for core services if it mirrors visible sections.

Impact:

- Cleaner structured-data trust.
- Lower risk of schema spam signals.
- Better page/entity understanding.

Verification:

- Google Rich Results Test.
- Schema.org Validator.
- Rendered DOM check for JSON-LD.
- `rg -n "FAQPage|HowTo|Service|Offer|availability" app components schemas content`

### 4. Improve Sitemap Freshness And Language Signals

Issue: many routes share global `lastModified`. That weakens freshness accuracy once pages are updated.

Likely files:

- `content/seo.ts`
- `content/pages.ts`
- `content/landing-pages.ts`
- `content/status.ts`
- `app/sitemap.ts`
- `schemas/seo.ts`

Future implementation:

- Add per-page `dateModified` for landing pages.
- Use insight and case `dateModified` values.
- Use `currentStatus.updatedAt` for `/status`.
- Keep global `lastModified` only as fallback.
- Standardize language alternates:
  - use `nl-NL` if targeting Netherlands-specific Dutch,
  - keep Open Graph locale as `nl_NL`,
  - keep `x-default`.

Verification:

- Inspect generated `/sitemap.xml`.
- Check URL Inspection canonical and sitemap data.
- Confirm no noindex page is in sitemap.

### 5. Load GA Only After Consent

Issue: `app/layout.tsx` currently loads the external GA script after interactive even before analytics consent is granted. Consent defaults deny storage, but third-party JS still loads.

Likely files:

- `app/layout.tsx`
- `lib/analytics-consent.ts`
- `components/consent-manager.tsx`

Future implementation:

- Remove default external GA script from layout.
- Keep consent default script if needed.
- Inject `gtag/js` only inside consent utility after `analytics_granted`.
- Confirm no Google Analytics network calls before consent.

Impact:

- Better privacy alignment.
- Less third-party JavaScript on first load.
- Better INP/main-thread budget.

Verification:

- DevTools Network before consent: no `googletagmanager.com`.
- Accept analytics: GA loads and events fire.
- Refuse analytics: GA never loads.

### 6. Improve Asset Caching And Public Asset Surface

Likely files:

- `public/_headers`
- `public/assets/*`

Future implementation:

- Add immutable cache headers for `/assets/*` if host supports `_headers`.
- Keep hashed/variant image assets cacheable.
- Move unused source PNGs out of public if they are not intentionally referenced.
- Keep intentional assets such as `logo.png` and `og-image.png`.

Verification:

- `rg "Case1.png|Case2.png|Case3.png|Case4.png|Founder.png|Founder-removebg.png|girl.png" app components content schemas public`
- Live response headers for `/assets/case1-1122.webp`.

### 7. Tune LCP And Image Loading

Likely files:

- `components/homepage-sections.tsx`
- `app/cases/[slug]/page.tsx`
- `app/over-ons/page.tsx`
- `app/contact/page.tsx`

Future implementation:

- Add `fetchPriority="high"` to the likely homepage LCP image.
- Add accurate `sizes` where responsive image sets exist.
- Keep explicit width and height.
- Lazy-load below-fold decorative/CTA images, especially final CTA `girl.webp`.
- Avoid loading large portfolio images eagerly unless above the fold.

Verification:

- Lighthouse.
- PageSpeed Insights.
- WebPageTest filmstrip.
- Chrome Performance trace.

## Priority 2: Content Focus And Page Quality

The biggest ranking blocker is not route count. It is that several routes are not yet deep, specific, and hard to copy.

### Core Page Pattern

Use this pattern on every money page:

1. Intent-focused H1.
2. 40-60 word direct answer.
3. Who this is for.
4. Who this is not for.
5. Deliverables with concrete nouns.
6. Process steps.
7. Proof-safe example or design note.
8. Common objections.
9. FAQ with natural Dutch questions.
10. Internal links to hub, support, proof, and contact.
11. CTA with next-step clarity.

### Highest Priority Page Work

#### `/seo-bureau-leiden`

Role: local commercial money page.

Target queries:

- SEO bureau Leiden
- SEO specialist Leiden
- lokale SEO Leiden
- zoekmachine optimalisatie Leiden

Needed upgrades:

- Make Leiden search intent explicit in H1, intro, direct answer, metadata, and FAQs.
- Explain what MagisData does for local service businesses around Leiden.
- Add a section for service-area reality: Voorschoten, Leiden, Zuid-Holland.
- Add a section on local SEO work:
  - service pages,
  - GBP,
  - reviews,
  - citations,
  - NAP consistency,
  - internal links,
  - content around real customer questions.
- Add a "not for" block:
  - no fake location pages,
  - no ranking guarantees,
  - no copied city text.
- Link to:
  - `/lokale-seo`,
  - `/website-laten-maken-leiden`,
  - `/seo-diensten`,
  - `/contact`,
  - future local SEO insight article.

Success:

- Page gets impressions for Leiden SEO terms.
- Page can stand alone as the best answer to "SEO bureau Leiden".

#### `/website-laten-maken-leiden`

Role: local website-build money page.

Target queries:

- website laten maken Leiden
- webdesign Leiden
- website laten maken voor MKB Leiden
- website laten maken lokale ondernemer Leiden

Needed upgrades:

- Add stronger Leiden/Voorschoten context.
- Explain why local service websites need:
  - clear service pages,
  - mobile contact route,
  - proof blocks,
  - local SEO foundations,
  - page speed,
  - pricing clarity.
- Add a sample page structure for a Leiden service business.
- Add FAQ about location, service area, pricing, timeline, SEO basis, and ownership.
- Tie it to `/seo-bureau-leiden` and `/lokale-seo`.

Success:

- Higher CTR for local website-build queries.
- More local buyer clarity before contact.

#### `/inzichten/[slug]`

Role: topical authority support.

Current issue: articles are too short. They read useful, but not authority-level.

Future article standard:

- 900-1,500 words minimum for priority articles.
- Named author/founder signal.
- Last updated date.
- Clear table of sections if article grows long.
- Direct answer at top.
- Concrete examples.
- FAQ section.
- Related service links.
- One mid-article CTA.
- No filler, no generic AI-sounding advice.

Priority rewrites:

1. `/inzichten/seo-zonder-jargon`
   - target: SEO uitleg voor ondernemers, SEO zonder jargon, wat is SEO voor lokale bedrijven.
   - add: service-page examples, intent map, internal link examples.
2. `/inzichten/website-meer-aanvragen`
   - target: website krijgt weinig aanvragen, meer aanvragen via website.
   - add: 5-second test, trust checklist, mobile CTA audit, form friction.
3. `/inzichten/ai-vindbaarheid`
   - target: AI-vindbaarheid, bedrijf vindbaar in ChatGPT, AI search optimalisatie.
   - add: entity consistency, answer blocks, llms.txt, schema, examples.

Success:

- More non-brand impressions.
- More internal assists from insights to service pages.
- AI tools can cite specific passages.

## Priority 3: Cluster Architecture

Build fewer clusters with more depth.

### Cluster 1: Local Website And SEO

Hub:

- `/lokale-seo`

Money pages:

- `/seo-bureau-leiden`
- `/website-laten-maken-leiden`

Support content:

- local SEO checklist for service businesses,
- Leiden website checklist,
- Google Business Profile guide,
- service-area business vs visible address explanation,
- review request process article.

Internal links:

- `/lokale-seo` links to both Leiden pages.
- Leiden pages link to each other.
- Leiden pages link to `/contact`.
- Supporting articles link back to local money pages.

Do not scale Den Haag or Rotterdam further until Leiden pages have more proof and impressions.

### Cluster 2: Websites For Service Businesses

Hub:

- `/webontwikkeling`

Vertical pages:

- `/website-voor-hoveniers`
- `/website-voor-loodgieters`
- `/website-voor-elektriciens`
- `/website-voor-kappers`

Best first vertical:

- `/website-voor-hoveniers`, because it already has a matching portfolio/design example.

Needed upgrades:

- one real or proof-safe example per vertical,
- industry-specific buyer questions,
- service-page structure examples,
- mobile contact route,
- relevant local SEO explanation,
- no generic swapped-audience wording.

Hold rule:

- Do not add new industry pages until at least one current vertical page reaches a high quality bar.

### Cluster 3: AI-Vindbaarheid, AEO, And GEO

Hub:

- `/ai-vindbaarheid`

Support pages:

- `/geo-optimalisatie`
- `/aeo-optimalisatie`
- `/inzichten/ai-vindbaarheid`

Needed upgrades:

- Define AI-vindbaarheid as the broad topic.
- Define GEO as entity/context/citation readiness.
- Define AEO as direct-answer/FAQ/query extraction.
- Add comparison table: SEO vs AEO vs GEO vs AI-vindbaarheid.
- Add examples of answer blocks.
- Add "what this does not guarantee".
- Add machine-readable file plan: `llms.txt`, future `services.md`, future `pricing.md`.

Success:

- Better visibility for emerging lower-competition AI terms.
- Clearer AI citations and less confusion between GEO/AEO.

### Cluster 4: Conversion And Website Quality

Hub:

- `/conversie-optimalisatie`

Support:

- `/inzichten/website-meer-aanvragen`
- `/prijzen`
- `/contact`
- portfolio detail pages.

Needed upgrades:

- Show where conversion breaks:
  - first screen,
  - proof,
  - offer clarity,
  - CTA,
  - form,
  - mobile path.
- Avoid conversion guarantee language.
- Use "improves conditions for contact" language.

Success:

- Better conversion from organic visits.
- Clearer buyer confidence.

### Cluster 5: Proof, Founder, And Method

Hub:

- `/over-ons`

Support:

- `/cases`
- case detail pages,
- insights with bylines,
- future founder page if needed.

Needed upgrades:

- Make Daniel Magis entity stronger.
- Add author/reviewer patterns to insights.
- Add clearer methodology.
- Keep portfolio framed as design work unless client proof is verified.
- Add real proof only when available:
  - client-approved case summaries,
  - project screenshots,
  - review snippets,
  - process artifacts,
  - before/after structure examples without fabricated outcomes.

Success:

- Better brand disambiguation.
- Better E-E-A-T.
- More trust before contact.

## Priority 4: CTA, Copy, And Claim Discipline

### CTA Standard

Default primary CTA:

- `Vraag gratis websiteplan aan`

Allowed intent-specific CTAs:

- `Vraag SEO-scan aan` on SEO-heavy pages.
- `Vraag pakketadvies` on pricing.
- `Bespreek automatisering` on AI automation.

Reduce or avoid fragmented variants:

- `Vraag gratis groeiplan aan`
- `Start gratis websiteplan`
- `Vertaal dit naar je website`
- `Laat je website meekijken`

Rule:

- One primary offer should dominate the site. Service-specific CTAs can exist, but only when they match page intent.

### Claim Cleanup

Replace or soften:

- `Meest gekozen` -> `Aanbevolen startpunt` unless real sales data proves it.
- `We zorgen dat klanten je bedrijf sneller vinden` -> `We verbeteren de basis waardoor klanten je bedrijf makkelijker kunnen vinden`.
- `meetbare groei` -> `meetbare contactacties`, `meetbare verbeterpunten`, or `meetbare online basis`.
- `bezoekers omzet in aanvragen` -> `bezoekers helpt de stap naar een aanvraag te zetten`.

Keep:

- no guarantee language,
- proof disclaimers,
- calm premium tone,
- practical service specificity.

### Terminology House Style

Apply consistently in visible copy, metadata, schema, and `llms.txt`.

Preferred terms:

- `website- en SEO-bureau`
- `SEO-diensten`
- `AI-vindbaarheid`
- `GEO-optimalisatie`
- `AEO-optimalisatie`
- `conversie-optimalisatie`
- `website laten maken`
- `lokale SEO`

Spelling fixes to apply later:

- `continuiteit` -> `continuiteit` with correct Dutch spelling if using Unicode.
- `commerciele` -> correct Dutch spelling if using Unicode.
- `geindexeerd` -> correct Dutch spelling if using Unicode.
- `orienteren` -> correct Dutch spelling if using Unicode.
- `Technologieen` -> correct Dutch spelling if using Unicode.

Note: if files remain ASCII-only, choose phrasing that avoids required diacritics rather than introducing inconsistent mojibake.

## Priority 5: AI SEO, GEO, And AEO

### AI Citation Goal

Make AI systems able to safely summarize MagisData as:

> A Dutch website and SEO partner for local service businesses, focused on fast websites, local SEO, AI-vindbaarheid, AEO, GEO, and clearer contact routes.

### Page-Level AI Pattern

Every AI-relevant page should include:

- definition,
- who it is for,
- what MagisData does,
- what it does not guarantee,
- deliverables,
- process,
- examples,
- FAQ,
- related links.

### `/llms.txt` Improvements

Likely file:

- `app/llms.txt/route.ts`

Add later:

- `Best answer sources`: map query families to exact URLs.
- `Do not claim`: no guaranteed rankings, no invented outcomes, portfolio is design work.
- `Entity facts`: business name, founder, location/service area, services, contact.
- `Citation-safe summary`: one short paragraph AI can reuse.
- `Last updated` from real content date.

### Future Machine-Readable Files

Only add these after visible site content is aligned:

- `/services.md`: services, audience, deliverables, exclusions.
- `/pricing.md`: packages, prices, VAT note, support limits, renewal/ownership notes.
- `/proof.md`: portfolio disclaimer, proof policy, review policy.

Rule:

- Machine-readable files must mirror real visible pages. Do not create hidden claims for AI.

### AI Visibility Testing Matrix

Run monthly.

| Cluster | Test queries | Target page | Platforms |
| --- | --- | --- | --- |
| Brand/entity | wat is MagisData; wie is Daniel Magis | `/over-ons`, `/llms.txt` | Google, ChatGPT, Perplexity |
| AI SEO | AI vindbaarheid verbeteren; bedrijf vindbaar maken in ChatGPT | `/ai-vindbaarheid` | ChatGPT, Perplexity, Google |
| GEO | wat is GEO optimalisatie; GEO bureau Nederland | `/geo-optimalisatie` | ChatGPT, Perplexity |
| AEO | wat is AEO optimalisatie; optimaliseren voor AI Overviews | `/aeo-optimalisatie` | Google, Gemini |
| Local SEO | lokale SEO voor dienstverleners; SEO bureau Leiden | `/lokale-seo`, `/seo-bureau-leiden` | Google, Maps, ChatGPT |
| Local website | website laten maken Leiden; website laten maken Den Haag | location pages | Google, Bing |
| Industry | website voor hoveniers; website voor loodgieters | industry pages | Google, Perplexity |
| Pricing | MagisData prijzen; kosten website laten maken | `/prijzen`, future `/pricing.md` | ChatGPT, Perplexity |

Track:

- cited yes/no,
- cited URL,
- competitor URLs,
- answer wording,
- incorrect claims,
- missing facts,
- source sentiment.

## Priority 6: Local SEO, GBP, Reviews, And Authority

Website changes alone will not win local search. Local rankings need relevance, distance, and prominence signals.

### Google Business Profile

Business decision needed:

- If clients visit the listed address, use a normal location profile.
- If clients do not visit the address, use a service-area business and hide the address.

Actions:

- Claim/verify GBP.
- Set accurate name, phone, URL, services, hours, service area, and category.
- Choose category based on real dominant service.
- Add real photos if available.
- Add service descriptions matching site language.
- Link GBP to the site.
- Use the same NAP across site and public profiles.

Risk:

- The site lists a residential-looking Voorschoten address. Do not expose it as a customer-visit location unless true.

### Reviews

Goal:

- 10+ specific, real, useful Google reviews over time.

Review request prompt:

- what kind of business the client runs,
- what MagisData helped with,
- how the process felt,
- what became clearer or better,
- why another local business could trust MagisData.

Rules:

- Never script false outcomes.
- Never offer incentives that violate platform rules.
- Reply to every review naturally.
- Do not stuff keywords in replies.

### Local Mentions And Links

Prioritize entity-building links, not generic SEO links.

Targets:

- Leiden/Voorschoten business associations.
- Real local partner pages.
- Supplier/collaborator mentions.
- Guest articles for local entrepreneur audiences.
- Client-approved project mentions.
- Founder interviews or practical columns.

Avoid:

- low-quality directories,
- paid spam links,
- fake awards,
- fake review platforms,
- irrelevant link swaps.

## Page-Level Target Map

| Page | Role | Primary target | Required next improvement |
| --- | --- | --- | --- |
| `/` | main positioning | website laten maken, lokale dienstverleners | focus message around local service websites + SEO, show proof/method earlier |
| `/diensten` | service hub | services overview | clarify service order and link to priority clusters |
| `/webontwikkeling` | core money page | website laten maken | add stronger examples, ownership/scope, service-business use cases |
| `/seo-diensten` | core money page | SEO diensten | deepen intent map, examples, internal links to Leiden/local |
| `/lokale-seo` | local hub | lokale SEO | add GBP, service area, reviews, citations, fake-location warnings |
| `/seo-bureau-leiden` | local money page | SEO bureau Leiden | make it the strongest Leiden SEO page |
| `/website-laten-maken-leiden` | local money page | website laten maken Leiden | deepen local examples, proof, process, pricing cues |
| `/website-laten-maken-den-haag` | local page | website laten maken Den Haag | deepen only if true service-area substance exists |
| `/website-laten-maken-rotterdam` | local page | website laten maken Rotterdam | deepen only if true service-area substance exists |
| `/website-voor-hoveniers` | vertical money page | website voor hoveniers | connect to portfolio and add industry-specific proof structure |
| `/website-voor-loodgieters` | vertical money page | website voor loodgieters | add emergency vs planned-work intent |
| `/website-voor-elektriciens` | vertical support | website voor elektriciens | add safety/project intent and proof needs |
| `/website-voor-kappers` | vertical support | website voor kappers | add booking, treatments, local salon context |
| `/ai-vindbaarheid` | AI hub | AI vindbaarheid | make broad AI visibility hub, link AEO/GEO clearly |
| `/geo-optimalisatie` | AI support | GEO optimalisatie | add entity/citation examples and comparison table |
| `/aeo-optimalisatie` | AI support | AEO optimalisatie | add answer-block examples and AI Overview framing |
| `/conversie-optimalisatie` | CRO money page | conversie optimalisatie website | add friction audit, mobile CTA, proof-safe examples |
| `/prijzen` | decision page | website kosten, SEO pakket prijs | clarify VAT, ownership, renewal, scope, support |
| `/over-ons` | E-E-A-T/entity | MagisData, Daniel Magis | add stronger founder expertise, method, public profiles |
| `/cases` | proof hub | webdesign portfolio | keep disclaimer, connect cases to vertical/service pages |
| `/inzichten` | content hub | SEO/AI website insights | make cluster routing clearer, link AI-vindbaarheid to `/ai-vindbaarheid` |
| `/contact` | conversion | contact MagisData | clarify next step, source capture, clickable email if acceptable |

## 90-Day Execution Roadmap

### Days 1-15: Safety And Baseline

Owner: developer + founder.

Tasks:

- Confirm GSC and Bing Webmaster Tools.
- Submit sitemap.
- Export baseline data.
- Remove Google Fonts build dependency.
- Verify redirects live.
- Confirm all priority pages are indexable.
- Decide GBP model: location or service-area business.
- Standardize CTA wording plan.
- Create terminology house style.

Success:

- `npm run build` reliable.
- All priority pages inspected in GSC.
- GBP decision made.
- Baseline recorded.

### Days 16-30: Local Commercial Core

Owner: founder + content + developer.

Tasks:

- Rebuild `/seo-bureau-leiden`.
- Rebuild `/website-laten-maken-leiden`.
- Strengthen `/lokale-seo` with GBP, NAP, reviews, citations, service-area content.
- Tighten internal links among local pages.
- Update metadata for local intent.
- Begin review request workflow.

Success:

- Leiden pages no longer feel templated.
- GSC impressions start for local query set.
- GBP live or in verification.

### Days 31-45: Authority Content

Owner: founder + content.

Tasks:

- Expand `/inzichten/seo-zonder-jargon`.
- Expand `/inzichten/website-meer-aanvragen`.
- Expand `/inzichten/ai-vindbaarheid`.
- Add author/founder signal to insights.
- Add visible updated date and FAQs.
- Link each insight to service pages and contact.

Success:

- Insight pages become citation-worthy.
- More internal paths from article to service page.
- AI systems can extract clear answers.

### Days 46-60: Schema, AI Search, And Pricing Clarity

Owner: developer + founder.

Tasks:

- Make schema selective.
- Add homepage WebPage schema.
- Improve `llms.txt`.
- Clarify `/prijzen`:
  - VAT,
  - renewal,
  - ownership,
  - support,
  - hosting/domain inclusion,
  - what happens after year one.
- Replace `Meest gekozen` if unproven.
- Add or plan future `/pricing.md` only after visible pricing is clear.

Success:

- Rich Results Test clean.
- Pricing creates fewer buyer questions.
- AI-readable content mirrors visible content.

### Days 61-75: Vertical Proof Cluster

Owner: founder + content.

Tasks:

- Upgrade `/website-voor-hoveniers`.
- Tie it strongly to `/cases/website-design-hoveniersbedrijf`.
- Upgrade `/website-voor-loodgieters`.
- Add industry-specific FAQs and service-structure examples.
- Decide whether electrician/kappers pages deserve the same depth now or should wait.

Success:

- At least one vertical cluster feels genuinely specific.
- Industry pages no longer read like template swaps.

### Days 76-90: Off-Site Authority And Iteration

Owner: founder.

Tasks:

- Collect first batch of real Google reviews.
- Reply to reviews.
- Align LinkedIn, GBP, site, and local profiles.
- Pursue 3-5 real local/partner mentions.
- Pitch one practical local article or interview.
- Review GSC data and adjust page priorities.
- Decide whether Den Haag/Rotterdam deserve deeper investment or should stay lower priority.

Success:

- More local prominence signals.
- Clear second-wave priorities based on data.
- No scaling of thin city pages.

## KPI Framework

Track monthly.

| KPI | Source | Target direction |
| --- | --- | --- |
| Indexed priority pages | GSC Page Indexing | 100% indexed for approved priority pages |
| Non-brand impressions | GSC Performance | upward month over month |
| Non-brand clicks | GSC Performance | upward month over month |
| CTR on priority pages | GSC Performance | improve after title/meta/content updates |
| Top 20 entries | rank tracker/manual | more priority terms entering top 20 |
| Top 10 entries | rank tracker/manual | first local/AI/vertical wins |
| Organic enquiries | form/call tracking | more qualified organic enquiries |
| GBP discovery searches | GBP Performance | upward trend |
| GBP calls/clicks | GBP Performance | upward trend |
| Review count/quality | GBP | 10+ specific reviews over time |
| Local/industry referring domains | Ahrefs/manual/GSC links | 5-10 real mentions over time |
| AI citation rate | manual AI matrix | more correct citations |
| AI description accuracy | manual AI matrix | fewer incorrect/missing facts |

## Verification Checklist Before Publishing SEO Changes

For each changed page:

- Primary keyword is clear.
- H1 and title match intent.
- Meta description is unique and useful.
- Direct answer exists if relevant.
- Page has enough unique substance.
- No invented proof or unsupported outcome claim.
- Internal links point to relevant hub/support/proof pages.
- Schema matches visible content.
- Images have useful alt text or are decorative.
- Mobile layout is readable.
- CTA explains next step.
- Page is in sitemap if indexable.
- Page is noindex/excluded if not indexable.

Technical checks:

- `npm run typecheck`
- `npm run build`
- Rich Results Test for priority templates.
- PageSpeed Insights for homepage and one service page.
- GSC URL Inspection after deployment.

## Important Risks

- Ranking cannot be guaranteed. This plan improves probability and quality signals.
- Thin city/industry pages can hurt trust if scaled too fast.
- AI visibility depends on third-party sources, not only site content.
- GBP address setup must match real customer-visit reality.
- Reviews and proof must be real and approved.
- Schema overuse is worse than no schema.
- Pricing/legal/privacy copy must match actual operations.
- The current redirect issue in the report appears fixed in repo, but live deploy still needs verification.

## Highest-Confidence Next Moves

1. Fix build reliability by self-hosting fonts.
2. Rebuild `/seo-bureau-leiden`.
3. Rebuild `/website-laten-maken-leiden`.
4. Strengthen `/lokale-seo`.
5. Expand all three insight articles.
6. Set up compliant GBP and review workflow.
7. Make schema selective.
8. Improve `llms.txt`.
9. Clarify pricing and remove unproven labels.
10. Build one strong vertical proof cluster, starting with hoveniers.

Core rule: make fewer pages do more work before adding more pages.

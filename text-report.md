# MagisData full site content scope check

Date: 2026-06-12
Scope: public MagisData marketing website only
Review method: coordinated sub-agent review plus local consolidation across `app/`, `components/`, `content/`, `schemas/`, and public AI/SEO utility routes.

## 1. Executive summary

The site content is strategically coherent and generally aligned with the MagisData brand: calm, premium, practical, SEO/AEO/GEO-aware, and restrained about proof. The strongest assets are the clear service architecture, direct-answer style content blocks, cautious portfolio disclaimers, strong internal linking, and useful `llms.txt` support for AI discovery.

The main content risks are not structural; they are polish and consistency issues:

1. CTA wording is fragmented across “websiteplan,” “groeiplan,” “scan,” “pakketadvies,” and article-specific CTAs.
2. Dutch terminology and hyphenation need one house style, especially around `website- en SEO-bureau`, `SEO-diensten`, `AI-vindbaarheid`, `GEO-optimalisatie`, `AEO-optimalisatie`, and `conversie-optimalisatie`.
3. Some phrases may imply outcomes or usage data without proof, including `Meest gekozen`, `meetbare groei`, and strong conversion/findability promises.
4. Portfolio content is careful overall, but still mixes “cases,” “portfolio,” “ik,” “we,” and client-like phrasing that could imply real commissioned outcomes.
5. Location and industry landing pages are useful but templated; Den Haag and Rotterdam need more unique local substance to avoid a doorway-page feel.
6. Legal/privacy statements are concrete enough that they should be verified operationally before being treated as final legal copy.
7. Accessibility and utility text are mostly strong, but cookie modal labeling, non-clickable footer email, and image alt wording need review.

## 2. Review coverage

### 2.1 Files and areas reviewed

The review covered the following public text surfaces:

- `app/`: route files, route-level visible copy, metadata delegation, `not-found`, `robots`, `sitemap`, and `llms.txt`.
- `components/`: header, footer, homepage sections, shared content templates, contact form, CTAs, breadcrumbs, logo, related links, consent manager, and JSON-LD rendering component.
- `content/`: homepage content, service/page content, landing pages, SEO metadata, internal link clusters, and status copy.
- `schemas/`: JSON-LD builders and structured-data text.
- `Buildtools/BRAND_INFO.md`: brand positioning and tone reference.

### 2.2 Sub-agent work split

Three sub-agents reviewed separate content scopes:

1. `content/` review: content models, service pages, landing pages, SEO metadata, internal links, status copy, themes, claims, and duplication.
2. `app/` review: route/page text, route metadata delegation, pricing, cases, insights, contact, layout metadata, robots, sitemap, and route/link consistency.
3. `components/` + `schemas/` + `llms.txt` review: shared UI copy, header/footer/forms/CTA text, structured data, accessibility text, and AI-readable utility copy.

## 3. Content inventory

### 3.1 Primary route and page text

Reviewed public routes include:

- `/`
- `/diensten`
- `/webontwikkeling`
- `/seo-diensten`
- `/geo-optimalisatie`
- `/aeo-optimalisatie`
- `/ai-infrastructuur`
- `/strategisch-advies`
- `/ai-vindbaarheid`
- `/online-marketing-bureau`
- `/conversie-optimalisatie`
- `/lokale-seo`
- `/seo-bureau-leiden`
- `/website-onderhoud`
- `/website-laten-maken-leiden`
- `/website-laten-maken-den-haag`
- `/website-laten-maken-rotterdam`
- `/website-voor-loodgieters`
- `/website-voor-elektriciens`
- `/website-voor-hoveniers`
- `/website-voor-kappers`
- `/cases`
- `/cases/[slug]`
- `/inzichten`
- `/inzichten/[slug]`
- `/prijzen`
- `/over-ons`
- `/contact`
- `/status`
- `/privacybeleid`
- `/algemene-voorwaarden`
- `/bedankt`
- `not-found`
- `robots.txt`
- `sitemap.xml`
- `llms.txt`

### 3.2 Reusable component text

Reviewed shared UI copy includes:

- Desktop and mobile navigation labels.
- Header CTA.
- Footer service, branch, region, knowledge, contact, legal, and cookie links.
- Contact form labels, select options, success state, error state, submit CTA, and proof row.
- Homepage hero, service cards, process copy, proof/result section, customer questions, portfolio highlights, and final CTA.
- Shared content-page CTA defaults, direct-answer labels, FAQ rendering, breadcrumbs, related links, and proof cards.
- Cookie consent dialog copy and button labels.
- Logo and image alt text where visible in shared components.

### 3.3 Structured and machine-readable content

Reviewed SEO/GEO/AEO text surfaces include:

- `content/seo.ts` route metadata, titles, descriptions, keywords, sitemap flags, and robots flags.
- `schemas/seo.ts` organization, local business, website, webpage, FAQ, how-to, service, article, case study, and collection schemas.
- `app/llms.txt/route.ts` AI-readable positioning, service summaries, contact details, important URLs, and AI-system summary.
- `app/robots.ts` AI crawler and search crawler policy.
- `app/sitemap.ts` route sitemap entries and language alternates.

## 4. Brand and messaging assessment

### 4.1 What works well

- The copy consistently frames websites as business infrastructure rather than visual decoration.
- Service positioning connects websites, SEO, AEO, GEO, AI visibility, conversion, and strategic advice without sounding overly playful or cheap.
- The tone is mostly calm, premium, direct, and low-hype.
- Direct-answer sections support AEO/GEO and are useful for both users and AI systems.
- Local SEO copy is unusually responsible because it warns against fake locations, copied city pages, and keyword stuffing.
- Portfolio language often avoids invented client results and includes explicit disclaimers.
- The `llms.txt` file is a strong AI-discovery asset because it summarizes the business, service scope, contact details, and important URLs.

### 4.2 What needs tightening

- Several pages repeat the same soft terms: `helder`, `duidelijk`, `vertrouwen`, `aanvragen`, `zonder technische taal`. These are on-brand, but some pages need more concrete examples to avoid sameness.
- The homepage and metadata cover many service pillars at once. This supports topical breadth but can dilute first-impression focus.
- Portfolio/case language alternates between individual `ik`, agency `we`, and client-like project framing.
- Some landing pages inherit templated language that works for trades but reads awkwardly for broad audiences like `ondernemers`.

## 5. High-priority findings

### 5.1 Standardize CTA wording

Current CTA variants include:

- `Vraag gratis websiteplan aan`
- `Gratis websiteplan`
- `Vraag websiteplan aan`
- `Start gratis websiteplan`
- `Vraag gratis groeiplan aan`
- `Vraag gratis scan aan`
- `Vraag advies over pakket`
- `Bespreek automatisering`
- `Vertaal dit naar je website`

Recommendation:

- Use `Vraag gratis websiteplan aan` as the default site-wide primary CTA.
- Use service-specific alternatives only when the page intent clearly requires them, such as pricing package advice or SEO scan.
- Add support copy that explains the free website plan can include website, SEO, AEO/GEO, conversion, and next-step advice so the offer still fits non-website service pages.

### 5.2 Fix unproven or outcome-like claims

Phrases to review or soften:

- `Meest gekozen` on pricing implies real preference/sales data. Replace with `Aanbevolen startpunt`, `Populaire middenroute`, or another non-data claim unless there is proof.
- `We zorgen dat klanten je bedrijf sneller vinden` sounds like a findability result promise. Prefer `We verbeteren de basis waardoor klanten je bedrijf makkelijker kunnen vinden`.
- `meetbare groei` is broad. Prefer `meetbare contactacties`, `meetbare verbeterpunten`, or `meetbare online basis`.
- `bezoekers omzet in aanvragen` is a strong conversion claim. Prefer `bezoekers helpt de stap naar een aanvraag te zetten`.
- CRO headings around `meer resultaat` and `meer aanvragen` are acceptable if paired with the existing no-guarantee language, but could be softened for maximum claim discipline.

### 5.3 Clarify portfolio reality and voice

Current strengths:

- The site already includes careful wording such as no verified customer result or review claims.
- Case detail content focuses on design choices, structure, SEO lessons, and conversion intent rather than fabricated outcomes.

Issues:

- Route naming uses `/cases`, while visible copy often says `Portfolio` or `Webdesign portfolio`.
- Portfolio pages use first person `ik` while most of the business site uses `we` or `MagisData`.
- Phrases such as `Voor [brand] ontwierp ik...` and `BuitenLijn vroeg om...` can imply commissioned client work.
- Some conversion-choice copy reads like observed results rather than intended rationale.

Recommendations:

- Use `Portfolio` as the visible section label and keep `/cases` only as the route if needed.
- Either convert case copy to `we/MagisData`, or explicitly introduce it as founder-led design notes by Daniël Magis.
- If these are design examples rather than commissioned projects, replace client-brief wording with concept wording such as `Het uitgangspunt voor dit ontwerp was...`.
- Use `bedoeld om...` for design rationale instead of wording that implies measured conversion impact.

### 5.4 Fix `/inzichten` AI-vindbaarheid link consistency

Issue:

- The insights cluster titled `AI-vindbaarheid` links to `/geo-optimalisatie`, while a dedicated `/ai-vindbaarheid` route exists.

Recommendation:

- Point the `AI-vindbaarheid` cluster to `/ai-vindbaarheid`, or rename the cluster to `GEO-optimalisatie` if `/geo-optimalisatie` is intentional.

### 5.5 Verify privacy/legal operational claims

The privacy and legal content makes concrete claims about:

- Formspree contact processing.
- GA4 consent behavior.
- No advertising tags.
- Contact request retention period of 12 months.
- Administrative retention according to legal obligations.
- Terms content that is intentionally light and not legal advice.

Recommendation:

- Confirm the actual operational setup and business policy before publishing this as final legal/privacy copy.
- Consider legal review if the terms page is intended to function as formal general terms.

## 6. Medium-priority findings

### 6.1 Dutch spelling, accents, and terminology

Suggested corrections:

- `continuiteit` → `continuïteit`
- `commerciele` → `commerciële`
- `Technologieen` → `Technologieën`
- `geindexeerd` → `geïndexeerd`
- `orienteren` / `orienterende` → `oriënteren` / `oriënterende`
- `ideeen` → `ideeën`
- `website en SEO bureau` → `website- en SEO-bureau`
- `SEO diensten` → `SEO-diensten`
- `GEO optimalisatie` → `GEO-optimalisatie`
- `AEO optimalisatie` → `AEO-optimalisatie`
- `conversie optimalisatie` → `conversie-optimalisatie` or `conversieoptimalisatie`; choose one style and use it consistently.
- `AI vindbaarheid` → `AI-vindbaarheid` for visible copy, while keeping unhyphenated variants only where useful as SEO keyword variants.

### 6.2 Response-time wording

Current wording varies between:

- `Reactie binnen een werkdag`
- `Op werkdagen reageren we binnen een werkdag`
- `Meestal binnen een werkdag`
- `We reageren op werkdagen binnen een werkdag`

Recommendation:

- Use one safer formulation everywhere, such as `Meestal binnen één werkdag op werkdagen`.

### 6.3 Location page uniqueness

The Leiden page is the strongest location page because it includes specific local context around Voorschoten/Leiden. Den Haag and Rotterdam are more generic.

Recommendation:

- Add more unique local context to Den Haag and Rotterdam pages:
  - typical service-area expectations;
  - local buyer concerns;
  - relevant proof requirements;
  - commuting/nearby-region context if useful;
  - concrete examples of page structures for local service businesses.

### 6.4 Landing-page template awkwardness

Issue:

- `makeWebsitePage` uses the raw `audience` value in headings and FAQs. This works for `loodgieters`, `hoveniers`, `kappers`, and `elektriciens`, but can produce weaker phrasing for broad audiences like `ondernemers`.

Recommendation:

- Add optional template fields such as `audienceLabel`, `detailTitle`, `faqQuestion`, and `placeContext` so local pages can override generated wording.

### 6.5 Footer taxonomy

Issue:

- The footer category `Kennis` includes insights, article links, Over MagisData, Contact, Prijzen, Status, Privacybeleid, and Algemene voorwaarden. This weakens information scent.

Recommendation:

- Split footer groups into clearer clusters:
  - `Kennis`: insights and article links.
  - `Bedrijf`: Over MagisData, Contact, Prijzen, Status.
  - `Juridisch`: Privacybeleid, Algemene voorwaarden.

### 6.6 Pricing copy and format

Issues:

- Pricing labels include `Meest gekozen`, which needs proof or replacement.
- Price formatting such as `EUR 300 / jaar` is understandable but less polished for Dutch buyers.
- VAT/exclusions are not clearly surfaced in the reviewed app copy.

Recommendations:

- Use a Dutch-friendly format such as `€300 per jaar`, `of €30 p/m`, `€1.000 eenmalig`, and `€20 p/m`.
- Clarify whether prices are excluding VAT if applicable.
- Replace unproven package popularity labels with advisory labels.

## 7. Lower-priority findings

### 7.1 Reduce technical or English labels

Potential replacements:

- `Copy` → `Tekst` or `Websitecopy`.
- `NAP-controle` → `Naam, adres en telefoon` or `Bedrijfsgegevens controleren`.
- `Website -> vindbaarheid -> aanvragen` → `Website → vindbaarheid → aanvragen` or `Van website naar vindbaarheid naar aanvragen`.

### 7.2 Make proof language more concrete

The content is rightly careful, but repeated abstract proof terms could be made more concrete. Add examples where useful:

- `reviews als je die aantoonbaar mag gebruiken`;
- projectvoorbeelden;
- voor/na-structuur zonder resultaatclaim;
- werkgebied;
- certificaten or keurmerken only if real;
- duidelijke contactopties;
- response expectations;
- pricing/availability signals.

### 7.3 Simplify portfolio disclaimers

The disclaimer is important but appears in multiple similar forms. Consider one clear disclaimer near the top of `/cases`, then shorter labels on cards/details.

Example direction:

`Ontwerpportfolio — bedoeld om structuur, copy en visuele keuzes te tonen. Geen klantreview of geverifieerde resultaatclaim.`

### 7.4 Article advice around reviews

Insight article copy recommends using reviews as proof. This is valid general marketing advice, but because project rules prohibit invented testimonials, safer wording is:

`Gebruik bewijs zoals cases, klantvragen, projectvoorbeelden of reviews wanneer je die aantoonbaar mag gebruiken.`

## 8. SEO, AEO, and GEO observations

### 8.1 Strengths

- The site has strong topical architecture across services, local SEO, AI visibility, AEO, GEO, conversion, web development, pricing, cases, and insights.
- Direct-answer blocks are strong AEO assets.
- Internal links reinforce service and topical clusters.
- Structured data is implemented through centralized schema helpers.
- `llms.txt` gives AI systems a useful summary of MagisData and important routes.
- `robots.ts` intentionally allows search and AI crawlers, aligning with GEO/AEO discoverability goals.
- The sitemap includes Dutch and `x-default` language alternates.

### 8.2 Risks and opportunities

- Keyword arrays are broad and sometimes exact-match heavy. The visible body copy is more natural; avoid expanding keyword lists unnecessarily.
- Metadata should mirror the finalized terminology house style.
- Schema names/descriptions should match visible page H1/H2 terminology after terminology cleanup.
- `lastModified` is hardcoded in schema helpers and may become stale unless it is updated as part of content releases.
- `sameAs` is empty in organization schema; omit it until real public profiles exist.
- `HowTo` schema appears broadly generated from content steps. Only emit it when the visible page is genuinely instructional.
- `FAQPage` schema is valuable but should only be emitted when the Q&A content is visible and substantial.
- Service schema `availability: InStock` may feel product-like for custom services. Consider omitting or replacing if capacity varies.

## 9. Accessibility and utility text observations

### 9.1 Strengths

- Breadcrumbs use a clear aria label and current-page marker.
- Header navigation labels are clear.
- Contact form labels are visible and understandable.
- Cookie consent copy is concise and user-facing.
- Portfolio image alt text often describes the design rather than inventing outcomes.

### 9.2 Issues and recommendations

- Footer email is obfuscated plain text, not a clickable email route. This may reduce usability for keyboard and screen-reader users.
- Cookie dialog should use `aria-labelledby` tied to its heading if it remains a modal dialog.
- If the consent panel behaves like a modal, focus handling should match modal expectations; otherwise reconsider `aria-modal`.
- The logo `aria-label` could be localized to `MagisData homepagina`.
- Decorative icons should consistently be marked `aria-hidden` when they do not add meaning.
- Contact form currently depends on an external heading ID for `aria-labelledby`; if reused elsewhere, pass the ID as a prop or provide an internal heading.
- Image alt text such as `Vriendelijke medewerker van MagisData` should only be used if the image is genuinely a MagisData employee. If illustrative or stock, use neutral alt text or mark it decorative.

## 10. Recommended action plan

### 10.1 First pass: consistency and risk cleanup

1. Create a terminology house style and apply it to visible copy, metadata, `llms.txt`, and schema text.
2. Standardize primary CTA wording around `Vraag gratis websiteplan aan`.
3. Replace or prove `Meest gekozen`.
4. Soften outcome-like claims in homepage service cards, metadata, and CRO/web-development language.
5. Standardize response-time wording.
6. Fix spelling and diacritic issues.
7. Fix the `/inzichten` AI-vindbaarheid link.

### 10.2 Second pass: portfolio and landing pages

1. Decide whether portfolio is `cases`, `portfolio`, or founder design notes.
2. Adjust first-person vs team voice intentionally.
3. Clarify whether portfolio projects are commissioned work or concept/design examples.
4. Make Den Haag and Rotterdam pages more locally specific.
5. Add landing-page template overrides to avoid awkward generated copy.

### 10.3 Third pass: SEO/AEO/GEO and accessibility

1. Align metadata and schema descriptions with final terminology.
2. Make `FAQPage` and `HowTo` schema more selective.
3. Review `lastModified`, `sameAs`, and service availability schema fields.
4. Improve cookie dialog accessibility text/labels.
5. Review footer taxonomy and contact email usability.

## 11. Overall assessment

MagisData’s website content is in a strong strategic position. It has a clear point of view, credible SEO/AEO/GEO architecture, and a restrained tone that matches the premium brand direction. The site does not need a broad rewrite. It needs a focused editorial cleanup: terminology, CTA consistency, proof discipline, portfolio framing, local-page uniqueness, and accessibility/legal polish.

If those issues are resolved, the content foundation should support authority positioning, search discoverability, AI-readability, and lead generation without drifting into unsupported claims or generic web-agency copy.
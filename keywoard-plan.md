# MagisData Keyword Page Plan

Source: `magisdata_keyword_page_plan.xlsx`
Created: 2026-06-14
Scope: public MagisData marketing website only.

Important note: workbook says Ahrefs keyword metrics were not available. Treat this as strategic keyword and page backlog, not volume-backed keyword research. Publish only pages that pass quality gate. Do not bulk publish thin pages.

## Goal

Build keyword pages that can rank, help real visitors, and generate qualified leads without doorway-page risk.

This plan uses 130 keyword targets and 250 page ideas from workbook. Best first wedge:

1. Voorschoten and Leiden.
2. Existing strong branches: kappers, loodgieters, elektriciens, hoveniers.
3. Pricing and package choice pages.
4. Local SEO and Google Business Profile guides.
5. AI-vindbaarheid, GEO, and AEO pages once entity/content structure is strong.

## Non-Negotiable Rules

Every page must pass this before publish:

- One search intent per page.
- One primary keyword.
- One clear H1 matching intent.
- Direct answer in first 100 words.
- Unique branch, city, or problem context.
- Practical checklist, examples, or decision help.
- No fake testimonials, logos, scores, reviews, or outcome claims.
- No copied city page with only place name swapped.
- Clear next step with soft CTA.
- Internal links to hub, service page, pricing, related page, and contact.
- Accurate schema only for visible content.
- Metadata written for clicks, not keyword stuffing.
- Mobile-first readability.
- Page useful even if visitor never contacts MagisData.

If page cannot meet this, keep it as draft or noindex until improved.

## Strategy

MagisData should rank by owning one clear niche first:

> Websites, SEO, local findability, and AI-ready content structure for Dutch local service businesses.

That means page plan should not look like generic webdesign SEO spam. Each page must show that MagisData understands how local service customers choose:

- What service do I need?
- Can I trust this business?
- Does this business work in my area?
- What does it cost?
- How do I contact without friction?
- Can Google and AI systems understand the page clearly?

## Cluster Summary

| Cluster | Count | Role | Hub | Publish rule |
|---|---:|---|---|---|
| Website + branche + plaats | 80 keyword rows, 120 page ideas | High-intent money pages | `/branches/` or existing branch pages | Publish only with strong branch plus local detail |
| Website + plaats | 15 keyword rows | Local website service pages | `/regio/` or existing city pages | Use as city/service pages, not thin location swaps |
| Lokale SEO | 13 keyword rows | Local findability authority | `/lokale-seo` | Mix commercial and practical checklist content |
| Lokale SEO + plaats | 15 page ideas | Local SEO city pages | `/lokale-seo` | Publish first Voorschoten and Leiden |
| Google Business Profile + plaats | 15 page ideas | Practical local SEO guides | `/lokale-seo/google-business-profile` | Must include actual GBP checklist |
| Prijs/keuze | 10 keyword rows | High-conversion pricing content | `/prijzen` | Be transparent and explain when not to buy more |
| Prijs + plaats | 15 page ideas | Local pricing search intent | `/prijzen` | Needs scope examples, not fake market prices |
| Keuzehulp + plaats | 15 page ideas | Package selection support | `/prijzen` | Decision page, not sales push |
| AI/GEO/AEO | 10 keyword rows | Differentiation and AI search | `/ai-vindbaarheid` | Use definitions, answer blocks, FAQ, entities |
| AI/GEO/AEO + branche | 20 page ideas | Industry AI visibility | `/ai-vindbaarheid` | Needs branch-specific entity map |
| Branche probleem | 40 page ideas | Helpful mid-funnel guides | `/inzichten/` | Diagnose real problems, then link to money pages |
| Techniek/conversie | 10 page ideas | Utility and trust | `/inzichten/` or service pages | Practical checks, examples, soft CTA |

## Recommended URL Architecture

Current repo uses mostly flat routes. For scale, use folders to avoid messy root namespace.

Recommended future structure:

```text
/
|-- diensten
|-- webontwikkeling
|-- seo-diensten
|-- lokale-seo
|-- ai-vindbaarheid
|-- geo-optimalisatie
|-- aeo-optimalisatie
|-- prijzen
|-- branches
|   |-- kappers
|   |-- loodgieters
|   |-- elektriciens
|   |-- hoveniers
|   |-- ...
|-- regio
|   |-- voorschoten
|   |-- leiden
|   |-- wassenaar
|   |-- oegstgeest
|   |-- ...
|-- inzichten
|   |-- waarom-krijgt-mijn-kappers-website-weinig-aanvragen
|   |-- website-checklist-voor-kappers-die-meer-klanten-willen
|   |-- google-business-profile-optimaliseren-leiden
|   |-- ...
|-- contact
```

If keeping current flat route pattern, still group pages in content data by `cluster`, `branch`, `city`, and `intent` so sitemap, related links, breadcrumbs, and schema stay controlled.

## Global Page Checklist

Use this for every page.

### Search Intent

- Identify user stage: ready-to-buy, commercial research, informational, diagnostic.
- Put searcher's actual problem in intro.
- Avoid generic "we build websites" opening.
- Answer the exact query before pitching.

### Metadata

- Title: primary keyword near front, brand at end if space allows.
- Meta description: problem, useful outcome, low-pressure CTA.
- Canonical: self-canonical for unique pages.
- Open Graph title and description match page intent.
- `lastModified` per page, not only global fallback.

### Heading Structure

- H1: exact page promise.
- H2 order:
  1. Direct answer.
  2. Who this page is for.
  3. Specific problem.
  4. What good page/SEO structure needs.
  5. Examples or checklist.
  6. Pricing/scope or decision section where relevant.
  7. Internal links/next steps.
  8. FAQ.

### Useful Content

Each page needs at least one of:

- Branch-specific checklist.
- City-specific context.
- Before/after page structure example.
- Decision tree.
- Pricing scope explanation.
- Google Business Profile checklist.
- AI/GEO entity map.
- Technical troubleshooting checklist.

### Trust

- Explain process.
- Explain limits.
- Say when MagisData is not needed or when smaller package is enough.
- Use portfolio as design examples only unless verified client proof exists.
- No invented results.

### Conversion

- One primary CTA.
- One secondary CTA max.
- CTA must match user stage:
  - Money page: `Vraag gratis websiteplan aan`
  - SEO/local pages: `Vraag gratis scan aan`
  - Pricing pages: `Vraag pakketadvies aan`
  - AI pages: `Vraag AI-vindbaarheid check aan`
  - Guides: `Stuur je huidige pagina mee voor korte feedback`
- Repeat CTA after direct answer, after proof/checklist, and near bottom.
- Explain what happens after form submit.

### Internal Links

Each page should link to:

- Homepage.
- Relevant service hub.
- Relevant branch hub.
- Relevant city or local SEO page.
- Pricing page.
- Contact page.
- One supporting guide.
- One next commercial page.

Use descriptive anchors:

- Good: `website laten maken voor kappers`
- Good: `lokale SEO voor ondernemers in Leiden`
- Bad: `klik hier`
- Bad: `lees meer`

### Schema

Use only schema that matches visible content.

- Money/service pages: `Service`, `WebPage`, `BreadcrumbList`, optional `FAQPage`.
- Guides: `Article` or `BlogPosting`, `BreadcrumbList`, optional `FAQPage`.
- How-to/checklist pages: `HowTo` only if steps are real visible steps.
- Pricing pages: `Service` or `Offer` only if visible offer details are accurate.
- Local pages: avoid fake `LocalBusiness` branch offices unless real address/location exists.
- All pages: no review/rating schema unless real verified reviews exist.

### Technical

- Page indexable only after quality gate.
- In sitemap only after publish.
- No duplicate title or description.
- No orphan pages.
- Fast LCP image or no heavy hero image.
- Mobile CTA visible without clutter.
- Images use descriptive alt text.
- No glow effects, no heavy decorative backgrounds.

## Page Type Plans

### 1. Branche + Plaats Money Pages

Backlog: 120 pages.
Goal: capture high-intent local service searches.
Main risk: doorway pages.

Core page pattern:

- H1: `Website laten maken voor {branche} in {plaats}`
- Direct answer: what kind of site this branch needs in this place.
- Branch problem: what blocks trust or enquiries for this branch.
- Local context: service area, buyer behavior, practical local examples.
- Required page sections: services, proof, pricing/indication, FAQ, contact route.
- Mobile route: call, form, booking, WhatsApp only if relevant.
- SEO route: service pages, local terms, NAP consistency, internal links.
- Decision section: when simple site is enough vs growth site.
- CTA: free website plan.

Required unique content per page:

- 3 branch-specific visitor questions.
- 3 branch-specific trust elements.
- 2 local examples tied to place.
- 1 page structure recommendation for that branch.
- 1 FAQ about price/planning/contact.

Do not publish if only `{branche}` and `{plaats}` changed.

Branch-specific notes:

| Branch | Must cover |
|---|---|
| Kappers | Treatments, prices, booking route, style, opening times |
| Loodgieters | Urgency, service area, mobile call CTA, leak/stoppage categories |
| Elektriciens | Safety, certifications if real, fault diagnosis, emergency routing |
| Hoveniers | Garden design, maintenance, seasonal work, project photos |
| Dakdekkers | Leak urgency, inspection, renovation, warranty language if true |
| Schilders | Indoor/outdoor work, maintenance plans, quote request |
| Stukadoors | Finish types, m2 scope, planning, quote variables |
| Schoonheidssalons | Treatments, ambience, prices, booking, trust |
| Fysiotherapeuten | Complaints, treatments, referrals, appointment route |
| Rijscholen | Lesson packages, trial lesson, area, instructor trust |
| Restaurants | Menu, reservations, opening hours, location, atmosphere |
| Tandartspraktijken | Treatments, emergency care, registration, trust |
| Makelaars | Valuation, local property context, sales approach |
| Boekhouders | Services, tariffs, target audience, intake |
| Coaches | Audience, method, sessions, intake/fit |
| Personal trainers | Packages, location, intake, programs, proof boundaries |
| Klusbedrijven | Jobs covered, availability, region, quote route |
| Installateurs | Installation, maintenance, fault reports, certificates if real |
| Fotografen | Portfolio, packages, style, availability |
| Advocatenkantoren | Practice areas, intake, discretion, trust |

City-specific notes:

| Place | Use carefully |
|---|---|
| Voorschoten | Best first local wedge. Mention local service businesses, nearby Leiden market, simple contact routes. |
| Leiden | Strongest current local SEO anchor. Mention competitive local search and service-area clarity. |
| Wassenaar | Premium/local trust angle. Avoid fake local office claims. |
| Oegstgeest | Nearby service-area angle. Tie to professional local services. |
| Leiderdorp | Local service-area expansion. Needs unique reason before publish. |
| Katwijk | Coastal/regional service-area angle. Needs real examples. |

Recommended rollout:

1. Publish Voorschoten and Leiden only for 4 strongest branches first.
2. Add branch hubs before publishing all 120.
3. Add Wassenaar/Oegstgeest only after pages have local examples.
4. Keep Leiderdorp/Katwijk drafts until first pages show impressions or leads.

### 2. Branche Probleem Guides

Backlog: 40 pages.
Goal: rank for problem-aware searches and support money pages.

Two patterns:

- `Waarom krijgt mijn website als {branche} weinig aanvragen?`
- `Website-checklist voor {branche}: wat moet erop staan?`

Core page pattern:

- H1: exact problem or checklist title.
- Direct answer: top 3 likely reasons.
- Diagnosis sections:
  - unclear offer,
  - weak proof,
  - poor mobile CTA,
  - no local page,
  - thin service pages,
  - weak FAQ,
  - no pricing/scope guidance.
- Branch checklist.
- Example page structure.
- Fix priority: quick wins, bigger fixes, when rebuild makes sense.
- CTA: send current page for short feedback.

Use these pages as internal-link engines:

- Link to matching branch money page.
- Link to `/webontwikkeling`.
- Link to `/lokale-seo`.
- Link to `/prijzen`.
- Link to `/contact`.

Quality rule: each guide needs concrete branch examples. A kappers guide should not read like a loodgieters guide.

### 3. Lokale SEO + Plaats Pages

Backlog: 15 pages.
Goal: rank for local SEO service intent by city.

Core page pattern:

- H1: `Lokale SEO voor ondernemers in {plaats}`
- Direct answer: what local SEO means for that place.
- Explain local SEO system:
  - service pages,
  - work area,
  - Google Business Profile,
  - reviews,
  - NAP,
  - internal links,
  - local content,
  - sitemap/indexation.
- Show what not to do:
  - fake city pages,
  - copied pages,
  - fake addresses,
  - keyword stuffing.
- Add local checklist.
- CTA: free scan.

Publish order:

1. Voorschoten.
2. Leiden.
3. Wassenaar.
4. Oegstgeest.
5. Leiderdorp.
6. Rest only when unique examples exist.

### 4. Google Business Profile + Plaats Guides

Backlog: 15 pages.
Goal: practical local SEO value.

Core page pattern:

- H1: `Google Business Profile optimaliseren in {plaats}`
- Direct answer: profile completeness and website consistency matter.
- Checklist:
  - primary category,
  - secondary categories,
  - business description,
  - services,
  - opening hours,
  - service area,
  - photos,
  - reviews,
  - questions and answers,
  - links to service pages,
  - UTM tracking if used,
  - consistent NAP.
- Add `common mistakes` section.
- Add `how website supports GBP` section.
- CTA: free scan.

Do not imply MagisData owns or controls Google ranking. Explain influence, not guarantee.

### 5. Prijs + Plaats Pages

Backlog: 15 pages.
Goal: win price-comparison intent without fake local price claims.

Core page pattern:

- H1: `Wat kost een website laten maken in {plaats}?`
- Direct answer: cost depends on scope, pages, content, SEO, design depth, maintenance.
- Explain package types:
  - compact website,
  - growth website,
  - authority/content system.
- Explain what changes price:
  - number of pages,
  - copywriting,
  - local SEO,
  - branch pages,
  - images/assets,
  - forms/automation,
  - maintenance.
- Include `when not to buy more` section.
- CTA: package advice.

No fake average prices for city. Use MagisData package logic and scope drivers.

### 6. Keuzehulp + Plaats Pages

Backlog: 15 pages.
Goal: help visitors choose Start/Groei/Autoriteit without pressure.

Core page pattern:

- H1: `Welk websitepakket past bij jouw bedrijf in {plaats}?`
- Direct answer: choose based on business stage, service complexity, SEO ambition, proof needed.
- Decision matrix:
  - Start: online basis and contact.
  - Groei: multiple services, local SEO, stronger structure.
  - Autoriteit: content ecosystem, AI/GEO/AEO, bigger authority build.
- Scenarios:
  - new local business,
  - existing site not converting,
  - multiple services,
  - competitive local market,
  - wants AI visibility.
- CTA: package advice.

This page must reduce anxiety, not push biggest package.

### 7. AI/GEO/AEO + Branche Pages

Backlog: 20 pages.
Goal: make MagisData own AI visibility language for local branches.

Core page pattern:

- H1: `AI-vindbaarheid voor {branche}`
- Direct answer: AI systems need clear entities, services, region, proof, FAQs, and structured content.
- Explain:
  - what AI-vindbaarheid means,
  - how it differs from SEO,
  - what content AI can cite,
  - why branch-specific clarity matters.
- Entity map:
  - business name,
  - service categories,
  - locations/service area,
  - common customer questions,
  - proof assets,
  - pricing/scope signals,
  - contact route.
- Add answer blocks for real customer questions.
- CTA: AI-vindbaarheid check.

Must include branch-specific AI answer examples. Otherwise it is generic AI SEO page.

### 8. Techniek/Conversie Guides

Backlog: 10 pages.
Goal: earn trust with useful troubleshooting content.

Core pattern:

- Direct answer.
- Checklist.
- What user can fix themselves.
- When to ask for help.
- Link to relevant service.
- Soft CTA for short feedback.

These pages should be practical enough to save visitor time.

## Exact Page Backlog

### A. Branche + Plaats Money Pages - 120

Use this matrix. Every combination is one page.

Branches:

1. kappers
2. loodgieters
3. elektriciens
4. hoveniers
5. dakdekkers
6. schilders
7. stukadoors
8. schoonheidssalons
9. fysiotherapeuten
10. rijscholen
11. restaurants
12. tandartspraktijken
13. makelaars
14. boekhouders
15. coaches
16. personal trainers
17. klusbedrijven
18. installateurs
19. fotografen
20. advocatenkantoren

Places and IDs:

| Place | IDs | URL pattern |
|---|---|---|
| Voorschoten | 1-20 | `/website-laten-maken-voor-{branche}-voorschoten` |
| Leiden | 21-40 | `/website-laten-maken-voor-{branche}-leiden` |
| Wassenaar | 41-60 | `/website-laten-maken-voor-{branche}-wassenaar` |
| Oegstgeest | 61-80 | `/website-laten-maken-voor-{branche}-oegstgeest` |
| Leiderdorp | 81-100 | `/website-laten-maken-voor-{branche}-leiderdorp` |
| Katwijk | 101-120 | `/website-laten-maken-voor-{branche}-katwijk` |

First publish set:

| ID | Page |
|---:|---|
| 1 | Website laten maken voor kappers in Voorschoten |
| 2 | Website laten maken voor loodgieters in Voorschoten |
| 3 | Website laten maken voor elektriciens in Voorschoten |
| 4 | Website laten maken voor hoveniers in Voorschoten |
| 21 | Website laten maken voor kappers in Leiden |
| 22 | Website laten maken voor loodgieters in Leiden |
| 23 | Website laten maken voor elektriciens in Leiden |
| 24 | Website laten maken voor hoveniers in Leiden |

Only expand beyond these after first set is strong and internally linked.

### B. Branche Probleem Guides - 40

| ID | Page |
|---:|---|
| 121 | Waarom krijgt mijn website als kapper weinig aanvragen? |
| 122 | Website-checklist voor kappers: wat moet erop staan? |
| 123 | Waarom krijgt mijn website als loodgieter weinig aanvragen? |
| 124 | Website-checklist voor loodgieters: wat moet erop staan? |
| 125 | Waarom krijgt mijn website als elektricien weinig aanvragen? |
| 126 | Website-checklist voor elektriciens: wat moet erop staan? |
| 127 | Waarom krijgt mijn website als hovenier weinig aanvragen? |
| 128 | Website-checklist voor hoveniers: wat moet erop staan? |
| 129 | Waarom krijgt mijn website als dakdekker weinig aanvragen? |
| 130 | Website-checklist voor dakdekkers: wat moet erop staan? |
| 131 | Waarom krijgt mijn website als schilder weinig aanvragen? |
| 132 | Website-checklist voor schilders: wat moet erop staan? |
| 133 | Waarom krijgt mijn website als stukadoor weinig aanvragen? |
| 134 | Website-checklist voor stukadoors: wat moet erop staan? |
| 135 | Waarom krijgt mijn website als schoonheidssalon weinig aanvragen? |
| 136 | Website-checklist voor schoonheidssalons: wat moet erop staan? |
| 137 | Waarom krijgt mijn website als fysiotherapeut weinig aanvragen? |
| 138 | Website-checklist voor fysiotherapeuten: wat moet erop staan? |
| 139 | Waarom krijgt mijn website als rijschool weinig aanvragen? |
| 140 | Website-checklist voor rijscholen: wat moet erop staan? |
| 141 | Waarom krijgt mijn website als restaurant weinig aanvragen? |
| 142 | Website-checklist voor restaurants: wat moet erop staan? |
| 143 | Waarom krijgt mijn website als tandartspraktijk weinig aanvragen? |
| 144 | Website-checklist voor tandartspraktijken: wat moet erop staan? |
| 145 | Waarom krijgt mijn website als makelaar weinig aanvragen? |
| 146 | Website-checklist voor makelaars: wat moet erop staan? |
| 147 | Waarom krijgt mijn website als boekhouder weinig aanvragen? |
| 148 | Website-checklist voor boekhouders: wat moet erop staan? |
| 149 | Waarom krijgt mijn website als coach weinig aanvragen? |
| 150 | Website-checklist voor coaches: wat moet erop staan? |
| 151 | Waarom krijgt mijn website als personal trainer weinig aanvragen? |
| 152 | Website-checklist voor personal trainers: wat moet erop staan? |
| 153 | Waarom krijgt mijn website als klusbedrijf weinig aanvragen? |
| 154 | Website-checklist voor klusbedrijven: wat moet erop staan? |
| 155 | Waarom krijgt mijn website als installateur weinig aanvragen? |
| 156 | Website-checklist voor installateurs: wat moet erop staan? |
| 157 | Waarom krijgt mijn website als fotograaf weinig aanvragen? |
| 158 | Website-checklist voor fotografen: wat moet erop staan? |
| 159 | Waarom krijgt mijn website als advocatenkantoor weinig aanvragen? |
| 160 | Website-checklist voor advocatenkantoren: wat moet erop staan? |

### C. Lokale SEO + Google Business Profile Pages - 30

| ID | Page |
|---:|---|
| 161 | Lokale SEO voor ondernemers in Voorschoten |
| 162 | Google Business Profile optimaliseren in Voorschoten |
| 163 | Lokale SEO voor ondernemers in Leiden |
| 164 | Google Business Profile optimaliseren in Leiden |
| 165 | Lokale SEO voor ondernemers in Wassenaar |
| 166 | Google Business Profile optimaliseren in Wassenaar |
| 167 | Lokale SEO voor ondernemers in Oegstgeest |
| 168 | Google Business Profile optimaliseren in Oegstgeest |
| 169 | Lokale SEO voor ondernemers in Leiderdorp |
| 170 | Google Business Profile optimaliseren in Leiderdorp |
| 171 | Lokale SEO voor ondernemers in Katwijk |
| 172 | Google Business Profile optimaliseren in Katwijk |
| 173 | Lokale SEO voor ondernemers in Noordwijk |
| 174 | Google Business Profile optimaliseren in Noordwijk |
| 175 | Lokale SEO voor ondernemers in Leidschendam |
| 176 | Google Business Profile optimaliseren in Leidschendam |
| 177 | Lokale SEO voor ondernemers in Voorburg |
| 178 | Google Business Profile optimaliseren in Voorburg |
| 179 | Lokale SEO voor ondernemers in Den Haag |
| 180 | Google Business Profile optimaliseren in Den Haag |
| 181 | Lokale SEO voor ondernemers in Rijswijk |
| 182 | Google Business Profile optimaliseren in Rijswijk |
| 183 | Lokale SEO voor ondernemers in Delft |
| 184 | Google Business Profile optimaliseren in Delft |
| 185 | Lokale SEO voor ondernemers in Zoetermeer |
| 186 | Google Business Profile optimaliseren in Zoetermeer |
| 187 | Lokale SEO voor ondernemers in Alphen aan den Rijn |
| 188 | Google Business Profile optimaliseren in Alphen aan den Rijn |
| 189 | Lokale SEO voor ondernemers in Rotterdam |
| 190 | Google Business Profile optimaliseren in Rotterdam |

### D. Pricing And Package Choice Pages - 30

| ID | Page |
|---:|---|
| 191 | Wat kost een website laten maken in Voorschoten? |
| 192 | Welk websitepakket past bij jouw bedrijf in Voorschoten? |
| 193 | Wat kost een website laten maken in Leiden? |
| 194 | Welk websitepakket past bij jouw bedrijf in Leiden? |
| 195 | Wat kost een website laten maken in Wassenaar? |
| 196 | Welk websitepakket past bij jouw bedrijf in Wassenaar? |
| 197 | Wat kost een website laten maken in Oegstgeest? |
| 198 | Welk websitepakket past bij jouw bedrijf in Oegstgeest? |
| 199 | Wat kost een website laten maken in Leiderdorp? |
| 200 | Welk websitepakket past bij jouw bedrijf in Leiderdorp? |
| 201 | Wat kost een website laten maken in Katwijk? |
| 202 | Welk websitepakket past bij jouw bedrijf in Katwijk? |
| 203 | Wat kost een website laten maken in Noordwijk? |
| 204 | Welk websitepakket past bij jouw bedrijf in Noordwijk? |
| 205 | Wat kost een website laten maken in Leidschendam? |
| 206 | Welk websitepakket past bij jouw bedrijf in Leidschendam? |
| 207 | Wat kost een website laten maken in Voorburg? |
| 208 | Welk websitepakket past bij jouw bedrijf in Voorburg? |
| 209 | Wat kost een website laten maken in Den Haag? |
| 210 | Welk websitepakket past bij jouw bedrijf in Den Haag? |
| 211 | Wat kost een website laten maken in Rijswijk? |
| 212 | Welk websitepakket past bij jouw bedrijf in Rijswijk? |
| 213 | Wat kost een website laten maken in Delft? |
| 214 | Welk websitepakket past bij jouw bedrijf in Delft? |
| 215 | Wat kost een website laten maken in Zoetermeer? |
| 216 | Welk websitepakket past bij jouw bedrijf in Zoetermeer? |
| 217 | Wat kost een website laten maken in Alphen aan den Rijn? |
| 218 | Welk websitepakket past bij jouw bedrijf in Alphen aan den Rijn? |
| 219 | Wat kost een website laten maken in Rotterdam? |
| 220 | Welk websitepakket past bij jouw bedrijf in Rotterdam? |

### E. AI/GEO/AEO + Branche Pages - 20

| ID | Page |
|---:|---|
| 221 | AI-vindbaarheid voor kappers |
| 222 | AI-vindbaarheid voor loodgieters |
| 223 | AI-vindbaarheid voor elektriciens |
| 224 | AI-vindbaarheid voor hoveniers |
| 225 | AI-vindbaarheid voor dakdekkers |
| 226 | AI-vindbaarheid voor schilders |
| 227 | AI-vindbaarheid voor stukadoors |
| 228 | AI-vindbaarheid voor schoonheidssalons |
| 229 | AI-vindbaarheid voor fysiotherapeuten |
| 230 | AI-vindbaarheid voor rijscholen |
| 231 | AI-vindbaarheid voor restaurants |
| 232 | AI-vindbaarheid voor tandartspraktijken |
| 233 | AI-vindbaarheid voor makelaars |
| 234 | AI-vindbaarheid voor boekhouders |
| 235 | AI-vindbaarheid voor coaches |
| 236 | AI-vindbaarheid voor personal trainers |
| 237 | AI-vindbaarheid voor klusbedrijven |
| 238 | AI-vindbaarheid voor installateurs |
| 239 | AI-vindbaarheid voor fotografen |
| 240 | AI-vindbaarheid voor advocatenkantoren |

### F. Techniek/Conversie Guides - 10

| ID | Page |
|---:|---|
| 241 | Website onderhoud voor kleine bedrijven: wat moet maandelijks gecontroleerd worden? |
| 242 | Website snelheid verbeteren: simpele controlepunten voor lokale ondernemers |
| 243 | Contactformulier werkt niet: checklist voordat je aanvragen misloopt |
| 244 | Meer aanvragen via je website zonder direct advertenties te kopen |
| 245 | Homepage-opbouw voor lokale dienstverleners: boven de vouw tot contact |
| 246 | Dienstenpagina maken voor SEO: wat moet erop staan? |
| 247 | Website redesign zonder je vindbaarheid te slopen |
| 248 | AI automatisering voor intake en opvolging bij kleine bedrijven |
| 249 | FAQ-pagina voor lokale SEO: welke vragen leveren echt waarde? |
| 250 | Website vertrouwen verbeteren: bewijs, beloftes en contactinformatie op de juiste plek |

## Keyword Map Priorities

### P1 Targets

Start with P1 because these are closest to revenue or local authority:

- Website + branche + plaats pages for Voorschoten, Leiden, Wassenaar, Oegstgeest.
- Website + plaats pages for Voorschoten, Leiden, Wassenaar, Oegstgeest, Leiderdorp, Katwijk.
- Lokale SEO for Voorschoten and Leiden.
- Google Business Profile optimaliseren Leiden.
- Pricing/choice keywords around website cost, packages, subscription, maintenance.
- AI zoekmachine optimalisatie Leiden.

### P2 Targets

Use after P1 base exists:

- AI/GEO/AEO education pages.
- AI-vindbaarheid branch pages.
- Local SEO pages for larger surrounding cities.
- Technical/conversion guides.
- Google Business Profile guides for secondary cities.

### P3 Targets

Only after stronger pages exist:

- Broad conversion pages like `meer aanvragen via website voor lokaal bedrijf`.
- Broad diagnostic pages like `website krijgt weinig aanvragen lokale ondernemer`.

These need strong examples and internal links or they will be too generic.

## Internal Linking Architecture

### Hub Pages To Strengthen First

- `/diensten`
- `/webontwikkeling`
- `/seo-diensten`
- `/lokale-seo`
- `/ai-vindbaarheid`
- `/geo-optimalisatie`
- `/aeo-optimalisatie`
- `/prijzen`
- `/contact`

### Hub To Spoke Rules

`/webontwikkeling` should link to:

- strongest branch pages,
- strongest city pages,
- pricing,
- website checklist guides,
- contact.

`/lokale-seo` should link to:

- local SEO city pages,
- GBP guides,
- branch local SEO guides,
- city website pages,
- free scan CTA.

`/prijzen` should link to:

- pricing city pages,
- package chooser pages,
- website cost guides,
- contact.

`/ai-vindbaarheid` should link to:

- GEO and AEO pages,
- AI/GEO/AEO keyword pages,
- AI branch pages,
- FAQ/schema guide pages.

### Spoke To Hub Rules

Every spoke page links back to one commercial hub:

- Branch money page -> `/webontwikkeling`, `/lokale-seo`, `/prijzen`
- Problem guide -> matching branch page, `/webontwikkeling`, `/contact`
- Local SEO page -> `/lokale-seo`, local website page, GBP guide
- GBP guide -> local SEO page, `/lokale-seo`, `/contact`
- Pricing city page -> `/prijzen`, `/webontwikkeling`, package chooser
- Package chooser -> `/prijzen`, relevant pricing city page, `/contact`
- AI branch page -> `/ai-vindbaarheid`, `/geo-optimalisatie`, `/aeo-optimalisatie`

## Content Quality Gate

Before publish, answer these:

1. Would a local business owner learn something useful in 2 minutes?
2. Is page different from other pages beyond title/place/branch?
3. Does it answer search intent immediately?
4. Does it avoid fake claims?
5. Does it include one concrete example, checklist, or decision rule?
6. Does CTA feel natural for the visitor stage?
7. Does page link to and from relevant hubs?
8. Does page have unique title and meta description?
9. Is schema accurate?
10. Is page mobile-readable?

Minimum publish score: 8/10.

## 30-Day Work Plan

Workbook includes 30-day sprint IDs, but groups too many mixed page types per day. Use safer staged sprint below.

### Week 1 - Foundation

- Finalize URL strategy.
- Add content model fields: cluster, branch, city, primaryKeyword, intent, priority, sourceId, dateModified.
- Build branch hub structure.
- Build city/regio hub structure.
- Improve existing `/lokale-seo`, `/prijzen`, `/ai-vindbaarheid` internal links.
- Create page quality checklist in repo docs or content template.

### Week 2 - First Money Pages

Publish only 8 P1 pages:

- kappers Voorschoten
- loodgieters Voorschoten
- elektriciens Voorschoten
- hoveniers Voorschoten
- kappers Leiden
- loodgieters Leiden
- elektriciens Leiden
- hoveniers Leiden

Each gets:

- 800-1200 useful words.
- 5-7 H2 sections.
- 4 FAQ items.
- 6-10 internal links.
- unique meta.
- schema.

### Week 3 - Support Content

Publish guides that support those 8 pages:

- why little enquiries guide for each of 4 branches.
- checklist guide for each of 4 branches.
- local SEO Voorschoten.
- local SEO Leiden.
- GBP Voorschoten.
- GBP Leiden.
- website cost Voorschoten.
- website cost Leiden.

### Week 4 - AI And Conversion Differentiators

Publish:

- AI-vindbaarheid for kappers.
- AI-vindbaarheid for loodgieters.
- AI-vindbaarheid for elektriciens.
- AI-vindbaarheid for hoveniers.
- website vertrouwen verbeteren.
- dienstenpagina maken voor SEO.
- contactformulier werkt niet.
- homepage-opbouw voor lokale dienstverleners.

Then pause. Measure impressions, indexing, engagement, and enquiries before publishing next batch.

## Measurement Plan

### Before Publish

- Confirm baseline in Google Search Console.
- Confirm sitemap includes only quality pages.
- Confirm no duplicate titles.
- Confirm no orphan pages.
- Record target keyword, URL, date published, status.

### After Publish

Check weekly for first 8 weeks:

- indexed yes/no,
- impressions,
- clicks,
- average position,
- CTR,
- form submissions,
- page engagement,
- query variants appearing,
- pages with no impressions.

### Keep, Improve, Or Noindex

After 90 days:

- Keep: impressions and relevant query matches.
- Improve: indexed but low CTR or weak average position.
- Merge: overlapping with stronger page.
- Noindex/remove: no value, no impressions, no unique content.

## AI Search And AEO Rules

Each AI/GEO/AEO page needs extractable content:

- Short definition block.
- Branch-specific entity list.
- FAQ with natural questions.
- Comparison table where useful.
- Clear citations only when using real sources.
- Last updated date.
- Author/founder signal.
- Structured data.

Answer block example:

```text
AI-vindbaarheid voor kappers betekent dat je website duidelijk uitlegt welke behandelingen je aanbiedt, in welke regio je werkt, hoe klanten boeken, welke prijzen of indicaties gelden, en welke vragen klanten vaak stellen. Daardoor kunnen zoekmachines en AI-systemen je bedrijf beter begrijpen en correcter samenvatten.
```

## Copy Rules

Use Dutch, clear, calm, practical.

Prefer:

- "helpt"
- "maakt duidelijk"
- "verbetert de basis"
- "kan bijdragen aan"
- "geeft richting"

Avoid:

- "garandeert"
- "domineer Google"
- "explosieve groei"
- "meest gekozen" unless proven
- fake scarcity
- fake local office claims
- fake client results

## Final Publishing Rule

This workbook is backlog, not publish queue.

Best route:

1. Build fewer pages.
2. Make each page genuinely useful.
3. Interlink hard.
4. Measure.
5. Expand only where impressions or business logic prove demand.

Publishing all 250 fast is high risk. Publishing 20 excellent pages first is stronger for SEO, AI search, trust, and conversion.

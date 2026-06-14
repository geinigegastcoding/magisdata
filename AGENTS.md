# AGENTS.md

Project: `magisdata`  
Scope: this repo is only the public MagisData website. No SaaS app logic, no backend platform work, no unrelated tooling.
Use all relevant skills to complete your goal.
## Mission

Build and maintain a premium, high-performance marketing website for MagisData focused on:
- authority positioning
- SEO + GEO + AEO discoverability
- lead generation
- clear strategic messaging

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Structured data via local schema helpers  
## Important Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build check: `npm run build`
- Type check: `npm run typecheck`
- Asset pipeline: `npm run convert:assets`
- Optional asset helpers:
  - `npm run download:stock`
  - `npm run extract:logo`

## Repo Map

- `app/`: routes, metadata, sitemap, robots, llms.txt, page composition
- `components/`: reusable UI and section components
- `content/`: structured content for services/insights/case studies/FAQs
- `schemas/`: JSON-LD builders
- `public/assets/`: optimized web assets
- `Buildtools/`: brand, layout, and source design references
- `scripts/`: asset/download/transform scripts

## Working Rules
- Always make sure you use the correct font inter.
- Keep changes scoped and minimal. Preserve existing structure and patterns.
- Prefer updating content/data files before hardcoding text in components.
- Keep semantic HTML and metadata quality high for SEO/AEO/GEO.
- Maintain performance-first behavior (optimized images, clean bundles, minimal client-side JS where possible).
- Preserve brand tone: calm, strategic, engineered, premium; avoid hypey or playful styling.
- Use accent color (amber) with restraint, matching design guidance.
- Treat supplied design examples as portfolio webdesign work; describe the design and lessons without inventing client results.
- Do not publish invented testimonials, client logos, performance metrics, review scores, or outcome claims as fact.
- Never use glow effects in the website design: no glowing shadows, blurred color orbs, neon halos, or radial glow backgrounds.
- When a question is necessary, use `ask_user_question` or `AskUserTool` when such a tool is available in the active mode; otherwise ask one short direct question.
- If you find something wrong fix it or find something that shouldn't be there like dark colors a different font or the ugly blue color change or remove it.
## Out Of Scope

Do not add/don't:
- unrelated products, dashboards, auth systems, or APIs
- generic template pages not tied to MagisData website goals
- broad refactors not required for current task
- open a dev server (I will do that myself.)
- dark colors
- The ugly dark blue color like this (39, 76, 126) or something similar.

## Change Checklist (Before Finishing)

1. Run relevant checks (`npm run typecheck` and/or `npm run build` for substantial changes).
2. Confirm links/routes/metadata still match website intent.
3. Confirm copy and visuals align with `Buildtools` brand docs.
4. Summarize what changed and any caveats.

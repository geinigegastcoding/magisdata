# Website Design Cases Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish four search-ready webdesign portfolio pages using supplied screenshots.

**Architecture:** Extend existing `caseStudies` content data with project-story and reflection fields and render them through current collection/detail routes. Update metadata, schema, navigation, and homepage showcase so `/cases` reads as an editorial portfolio with compact image previews and project navigation.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, local JSON-LD helpers.

---

### Task 1: Portfolio Content Model

**Files:**
- Modify: `content/pages.ts`

- [ ] Replace generic case records with four webdesign entries and fields for screenshots, audience, challenge, approach, SEO rationale, interaction decisions, story, and lessons learned.

### Task 2: Case Collection And Detail Presentation

**Files:**
- Modify: `app/cases/page.tsx`
- Modify: `app/cases/[slug]/page.tsx`

- [ ] Present screenshot-led project cards on the hub and structured design explanations on each detail page.
- [ ] Keep long artwork below core explanation and include previous/next project navigation.

### Task 3: Discoverability And Navigation

**Files:**
- Modify: `content/seo.ts`
- Modify: `schemas/seo.ts`
- Modify: `content/internal-links.ts`
- Modify: `components/site-footer.tsx`
- Modify: `components/homepage-sections.tsx`

- [ ] Generate unique canonical metadata/social images and schema for each portfolio page.
- [ ] Replace old case links with portfolio links and remove glow styling from site surfaces.

### Task 4: Verification

**Files:**
- Verify: all modified source files

- [ ] Run `npm run typecheck` and expect exit code `0`.
- [ ] Run `npm run build` and expect exit code `0`.
- [ ] Search for retired case slugs and unverified old homepage outcome wording; expect no remaining surfaced references in updated components/content.

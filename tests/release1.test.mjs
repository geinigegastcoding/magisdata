import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

function read(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

test("retired intent and legacy case URLs redirect to canonical pages", () => {
  const redirects = read("public/_redirects");

  [
    "/website-laten-maken /webontwikkeling 301",
    "/seo-website-laten-maken /webontwikkeling 301",
    "/seo-bureau /seo-diensten 301",
    "/ai-seo-bureau /ai-vindbaarheid 301",
    "/cases/lokale-dienstverlener /cases 301",
    "/cases/adviesbureau /cases 301",
    "/cases/groeiende-webshop /cases 301"
  ].forEach((rule) => assert.match(redirects, new RegExp(rule.replaceAll("/", "\\/"))));

  const landingPages = read("content/landing-pages.ts");
  ["website-laten-maken", "seo-website-laten-maken", "seo-bureau", "ai-seo-bureau"].forEach(
    (slug) => assert.doesNotMatch(landingPages, new RegExp(`slug: "${slug}"`))
  );
});

test("analytics is gated by consent and has no automatic layout loader", async () => {
  const layout = read("app/layout.tsx");
  assert.doesNotMatch(layout, /analyticsLoader/);
  assert.match(layout, /ConsentManager/);

  const analytics = await import("../lib/analytics-consent.ts");
  assert.equal(analytics.normalizeConsent("analytics_granted"), "analytics_granted");
  assert.equal(analytics.normalizeConsent("broken"), "unset");
  assert.equal(analytics.mayTrack("denied"), false);
  assert.equal(analytics.mayTrack("analytics_granted"), true);
});

test("status and privacy expose factual user-facing information", () => {
  assert.ok(existsSync(new URL("../app/status/page.tsx", import.meta.url)));
  assert.match(read("content/status.ts"), /Beschikbaar voor gesprek/);

  const privacy = read("content/landing-pages.ts");
  assert.match(privacy, /Formspree/);
  assert.match(privacy, /12 maanden/);
  assert.match(privacy, /toestemming/);
});

test("homepage no longer presents invented customer proof", () => {
  const homepage = read("components/homepage-sections.tsx");
  assert.doesNotMatch(homepage, /man-review|Tevreden klant|Vijf sterren/);
  assert.doesNotMatch(read("content/homepage.ts"), /trustLogos|Meetbaar resultaat/);
});

test("optimized assets and security headers are shipped", () => {
  ["case1-1122.webp", "case2-1086.webp", "case3-935.webp", "case4-748.webp", "founder-672.webp"].forEach(
    (asset) => assert.ok(existsSync(new URL(`../public/assets/${asset}`, import.meta.url)), asset)
  );
  const headers = read("public/_headers");
  assert.match(headers, /Strict-Transport-Security/);
  assert.match(headers, /Content-Security-Policy/);
});

test("top-level landing pages are concrete static routes for export-safe 404s", () => {
  assert.equal(existsSync(new URL("../app/[slug]/page.tsx", import.meta.url)), false);

  const landingPages = read("content/landing-pages.ts");
  const slugs = [...landingPages.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);

  slugs.forEach((slug) => {
    assert.ok(existsSync(new URL(`../app/${slug}/page.tsx`, import.meta.url)), `${slug} has static route`);
  });
});

import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname } from "node:path";
import test from "node:test";

function read(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

function listFiles(url) {
  return readdirSync(url, { withFileTypes: true }).flatMap((entry) => {
    const childUrl = new URL(entry.name + (entry.isDirectory() ? "/" : ""), url);
    return entry.isDirectory() ? listFiles(childUrl) : [childUrl];
  });
}

test("retired intent and legacy case URLs return 410 gone", () => {
  const redirects = read("public/_redirects");

  [
    "/website-laten-maken 410",
    "/seo-website-laten-maken 410",
    "/seo-bureau 410",
    "/seo-services 410",
    "/ai-seo-bureau 410",
    "/cases/lokale-dienstverlener 410",
    "/cases/adviesbureau 410",
    "/cases/groeiende-webshop 410"
  ].forEach((rule) => assert.match(redirects, new RegExp(rule.replaceAll("/", "\\/"))));

  const landingPages = read("content/landing-pages.ts");
  ["website-laten-maken", "seo-website-laten-maken", "seo-bureau", "seo-services", "ai-seo-bureau"].forEach(
    (slug) => assert.doesNotMatch(landingPages, new RegExp(`slug: "${slug}"`))
  );
});

test("legacy English SEO slug is not exposed as an indexable route", () => {
  const seo = read("content/seo.ts");
  assert.doesNotMatch(seo, /path: "\/seo-services"/);

  const sitemap = read("app/sitemap.ts");
  assert.match(sitemap, /sitemapRoutes/);

  const redirects = read("public/_redirects");
  assert.match(redirects, /\/seo-services 410/);
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

test("source image assets stay out of public while required compatibility images remain", () => {
  const nonWebpImages = listFiles(new URL("../public/assets/", import.meta.url))
    .filter((fileUrl) => [".avif", ".gif", ".jpg", ".jpeg", ".png", ".svg"].includes(extname(fileUrl.pathname).toLowerCase()))
    .map((fileUrl) => decodeURIComponent(fileUrl.pathname).replace(/^.*\/public\//, "public/"));

  assert.deepEqual(nonWebpImages.sort(), [
    "public/assets/logo-icon.png",
    "public/assets/logo.png",
    "public/assets/og-image.png"
  ]);

  ["009d08e1cbbf429993a8afa653e35164", "795d6da37449446c99c964505aee53e6"].forEach((key) => {
    assert.equal(read(`public/${key}.txt`).trim(), key);
  });
});

test("email contact UI avoids Cloudflare email-protection crawl links", () => {
  assert.doesNotMatch(read("components/site-footer.tsx"), /mailto:/);
  assert.doesNotMatch(read("app/contact/page.tsx"), /mailto:/);
});

test("top-level landing pages are concrete static routes for export-safe 404s", () => {
  assert.equal(existsSync(new URL("../app/[slug]/page.tsx", import.meta.url)), false);

  const landingPages = read("content/landing-pages.ts");
  const slugs = [...landingPages.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);

  slugs.forEach((slug) => {
    assert.ok(existsSync(new URL(`../app/${slug}/page.tsx`, import.meta.url)), `${slug} has static route`);
  });
});

test("pricing page is discoverable and lists core package groups", () => {
  assert.ok(existsSync(new URL("../app/prijzen/page.tsx", import.meta.url)));

  const seo = read("content/seo.ts");
  assert.match(seo, /path: "\/prijzen"/);
  assert.match(seo, /Prijzen voor websites, SEO en AI-automatisering/);

  const header = read("components/site-header.tsx");
  assert.match(header, /href: "\/prijzen"/);
  assert.match(header, /label: "Prijzen"/);

  const pricingPage = read("app/prijzen/page.tsx");
  ["Websites", "SEO, AEO en GEO", "AI automatisering", "Groeigesprek"].forEach((group) => {
    assert.match(pricingPage, new RegExp(group));
  });
  assert.match(pricingPage, /Gratis scan vooraf/);
  assert.match(pricingPage, /name: "Eerste groeigesprek"/);
  assert.match(pricingPage, /price: "Gratis"/);
});

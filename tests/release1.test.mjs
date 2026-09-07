import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname } from "node:path";
import { registerHooks } from "node:module";
import test from "node:test";

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(new URL(`../${specifier.slice(2)}.ts`, import.meta.url).href, context);
    }
    return nextResolve(specifier, context);
  }
});

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
  assert.doesNotMatch(layout, /GoogleAnalytics|googletagmanager/);
  assert.match(layout, /ConsentManager/);

  const analytics = await import("../lib/analytics-consent.ts");
  assert.equal(analytics.normalizeConsent("analytics_granted"), "analytics_granted");
  assert.equal(analytics.normalizeConsent("broken"), "unset");
  assert.equal(analytics.mayTrack("denied"), false);
  assert.equal(analytics.mayTrack("analytics_granted"), true);

  const originalWindow = globalThis.window;
  const originalDocument = globalThis.document;
  const scripts = [];
  globalThis.window = {
    localStorage: {
      getItem() { throw new Error("Storage unavailable"); },
      setItem() { throw new Error("Storage unavailable"); }
    },
    dispatchEvent() {}
  };
  globalThis.document = {
    cookie: "",
    createElement() { return { remove() {} }; },
    head: { appendChild(script) { scripts.push(script); } }
  };
  try {
    analytics.loadAnalytics();
    analytics.setConsent("denied");
    assert.equal(scripts.length, 0, "No Google loader before approval or after refusal");
    analytics.setConsent("analytics_granted");
    analytics.loadAnalytics();
    assert.equal(scripts.length, 1, "Approval loads Google once, including when storage is blocked");
    assert.equal(analytics.readConsent(), "analytics_granted");
    analytics.trackEvent("generate_lead");
    const eventCount = () => window.dataLayer.filter((args) => args[0] === "event").length;
    assert.equal(eventCount(), 1);
    analytics.setConsent("denied");
    analytics.trackEvent("generate_lead");
    assert.equal(eventCount(), 1, "Revoking consent stops subsequent lead tracking");
    assert.equal(window["ga-disable-G-H6G8TMGDWY"], true);
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
    if (originalDocument === undefined) delete globalThis.document;
    else globalThis.document = originalDocument;
  }
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
    "public/assets/agency_office_cover.jpg",
    "public/assets/analytics_dashboard.jpg",
    "public/assets/logo-icon.png",
    "public/assets/logo.png",
    "public/assets/logos/anthropic.svg",
    "public/assets/logos/gemini.svg",
    "public/assets/logos/googlecloud.svg",
    "public/assets/logos/openai.svg",
    "public/assets/magisdata-hero.png",
    "public/assets/og-image.png",
    "public/assets/redesign/social-cover.png"
  ]);

  const verificationKey = "1443730e4f0c44769884d4ba3fc7351f";
  assert.equal(read(`public/${verificationKey}.txt`).trim(), verificationKey);
});

test("email contact UI avoids Cloudflare email-protection crawl links", () => {
  assert.doesNotMatch(read("components/site-footer.tsx"), /mailto:/);
  assert.doesNotMatch(read("app/contact/page.tsx"), /mailto:/);
});

test("top-level landing pages are concrete static routes for export-safe 404s", async () => {
  assert.equal(existsSync(new URL("../app/[slug]/page.tsx", import.meta.url)), false);

  const { landingPages } = await import("../content/landing-pages.ts");
  const slugs = landingPages.map((page) => page.slug);

  slugs.forEach((slug) => {
    assert.ok(existsSync(new URL(`../app/${slug}/page.tsx`, import.meta.url)), `${slug} has static route`);
  });
});

test("AI services remain discoverable without advertising retired package pages", async () => {
  const { getSeoRoute, seoRoutes } = await import("../content/seo.ts");
  for (const path of ["/", "/diensten", "/over-ons", "/contact"]) {
    assert.match(getSeoRoute(path).title, /AI/, `${path} communicates current AI positioning`);
  }
  assert.ok(!seoRoutes.some((route) => route.path === "/prijzen"));
  assert.doesNotMatch(read("components/site-header.tsx"), /\/prijzen/);
  assert.match(read("components/site-footer.tsx"), /href="\/diensten\/?"/);
  const services = read("app/diensten/page.tsx");
  for (const offering of ["Audit", "Build", "Enable"]) assert.match(services, new RegExp(offering));
  assert.match(services, /href="\/contact\/?"/);
});

test("sitemap entries resolve to existing pages and titles stay within 70 characters", async () => {
  const { seoRoutes, sitemapRoutes } = await import("../content/seo.ts");
  const { default: sitemap } = await import("../app/sitemap.ts");
  const { caseStudies } = await import("../content/pages.ts");
  const { articles } = await import("../content/articles.ts");
  const dynamicPaths = new Set([
    ...caseStudies.map((item) => `/cases/${item.slug}`),
    ...articles.map((item) => `/inzichten/${item.slug}`)
  ]);
  assert.equal(new Set(sitemapRoutes.map((route) => route.path)).size, sitemapRoutes.length);
  for (const route of sitemapRoutes) {
    const file = `../app${route.path === "/" ? "" : route.path}/page.tsx`;
    assert.ok(dynamicPaths.has(route.path) || existsSync(new URL(file, import.meta.url)), `${route.path} has a real route`);
  }
  for (const route of seoRoutes) {
    assert.ok(route.title.length <= 70, `${route.path}: title is ${route.title.length} characters`);
  }
  assert.ok(!sitemapRoutes.some((route) => route.path === "/bedankt"), "Submission confirmation remains non-indexable");
  assert.deepEqual(sitemap().map((entry) => entry.url), sitemapRoutes.map((route) => `https://magisdata.nl${route.path}`));
});

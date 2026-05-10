import type { MetadataRoute } from "next";
import { caseStudies, insights, servicePages } from "@/content/site-content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/services", "/about", "/contact", "/insights", "/case-studies"];
  const serviceRoutes = servicePages.map((service) => `/${service.slug}`);
  const insightRoutes = insights.map((post) => `/insights/${post.slug}`);
  const caseRoutes = caseStudies.map((study) => `/case-studies/${study.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes, ...caseRoutes].map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("services") ? 0.9 : 0.7
  }));
}

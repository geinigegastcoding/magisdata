import type { MetadataRoute } from "next";
import { seoRoutes, sitemapLastModified } from "@/content/seo";
import { absoluteUrl } from "@/schemas/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return seoRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: sitemapLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}

import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/content/seo";
import { absoluteUrl } from "@/schemas/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        nl: absoluteUrl(route.path),
        "x-default": absoluteUrl(route.path)
      }
    }
  }));
}

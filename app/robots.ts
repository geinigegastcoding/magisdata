import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-User",
          "Google-Extended",
          "GoogleOther",
          "Bingbot"
        ],
        allow: "/"
      }
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  };
}

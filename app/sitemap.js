import { getAllPosts } from "../lib/blog";

export const dynamic = "force-static";

export default function sitemap() {
  const blogPosts = getAllPosts().map((post) => ({
    url: `https://magisdata.nl/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://magisdata.nl",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://magisdata.nl/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "content", "blog");

function ensureBlogDirectory() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

export function getAllPosts() {
  return ensureBlogDirectory()
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        publishedAt: data.publishedAt ?? null,
        author: data.author ?? "MagisData",
        coverImage: data.coverImage ?? null,
        featured: Boolean(data.featured),
        tags: Array.isArray(data.tags) ? data.tags : [],
      };
    })
    .sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) {
        return 0;
      }

      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(blogDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    publishedAt: data.publishedAt ?? null,
    author: data.author ?? "MagisData",
    coverImage: data.coverImage ?? null,
    featured: Boolean(data.featured),
    tags: Array.isArray(data.tags) ? data.tags : [],
    contentHtml: processedContent.toString(),
  };
}

export function formatBlogDate(dateString) {
  if (!dateString) {
    return "";
  }

  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}


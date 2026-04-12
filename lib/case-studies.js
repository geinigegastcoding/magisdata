import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudiesDirectory = path.join(process.cwd(), "content", "case-studies");

function ensureCaseStudiesDirectory() {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(caseStudiesDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

export function getAllCaseStudies() {
  return ensureCaseStudiesDirectory()
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(caseStudiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        outcome: data.outcome ?? "",
        image: data.image ?? "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        order: Number.isFinite(data.order) ? data.order : 999,
      };
    })
    .sort((a, b) => a.order - b.order);
}

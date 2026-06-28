import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const sourceRoot = "scripts/source-assets/public-originals";

const responsiveJobs = [
  { source: `${sourceRoot}/Case1.png`, name: "case1", widths: [640, 768, 1122] },
  { source: `${sourceRoot}/Case2.png`, name: "case2", widths: [640, 768, 1086] },
  { source: `${sourceRoot}/Case3.png`, name: "case3", widths: [480, 768, 935] },
  { source: `${sourceRoot}/Case4.png`, name: "case4", widths: [480, 748] },
  { source: `${sourceRoot}/Founder-removebg.png`, name: "founder", widths: [336, 672] }
];

const directJobs = [
  { source: `${sourceRoot}/girl.png`, output: "public/assets/girl.webp" },
  { source: `${sourceRoot}/logo-icon.png`, output: "public/assets/logo.webp" },
  { source: `${sourceRoot}/logo-icon.png`, output: "public/assets/logo-icon.webp" },
  { source: `${sourceRoot}/logo-icon.png`, output: "public/assets/logo-96.webp", width: 96 },
  { source: `${sourceRoot}/logo-icon.png`, output: "public/assets/logo-112.webp", width: 112 },
  { source: `${sourceRoot}/logo.png`, output: "public/assets/logo-full.webp", width: 1200 },
  { source: `${sourceRoot}/og-image.png`, output: "public/assets/og-image.webp" }
];

await mkdir("public/assets", { recursive: true });

for (const job of responsiveJobs) {
  for (const width of job.widths) {
    const resized = sharp(job.source).resize({ width, withoutEnlargement: true });
    await resized.clone().webp({ quality: 78, effort: 5 }).toFile(`public/assets/${job.name}-${width}.webp`);
  }
}

for (const job of directJobs) {
  const pipeline = sharp(job.source);
  const image = job.width ? pipeline.resize({ width: job.width, withoutEnlargement: true }) : pipeline;
  await image.webp({ quality: 82, effort: 5 }).toFile(job.output);
}

console.log(`Converted ${responsiveJobs.length + directJobs.length} source images to WebP assets.`);

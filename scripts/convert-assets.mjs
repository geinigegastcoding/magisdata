import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const jobs = [
  { source: "public/assets/Case1.png", name: "case1", widths: [640, 1122] },
  { source: "public/assets/Case2.png", name: "case2", widths: [640, 1086] },
  { source: "public/assets/Case3.png", name: "case3", widths: [480, 935] },
  { source: "public/assets/Case4.png", name: "case4", widths: [480, 748] },
  { source: "public/assets/Founder-removebg.png", name: "founder", widths: [336, 672] }
];

await mkdir("public/assets", { recursive: true });

for (const job of jobs) {
  for (const width of job.widths) {
    const resized = sharp(job.source).resize({ width, withoutEnlargement: true });
    await resized.clone().webp({ quality: 78, effort: 5 }).toFile(`public/assets/${job.name}-${width}.webp`);
    await resized.clone().avif({ quality: 48, effort: 5 }).toFile(`public/assets/${job.name}-${width}.avif`);
  }
}

console.log(`Converted ${jobs.length} source images to responsive WebP and AVIF assets.`);

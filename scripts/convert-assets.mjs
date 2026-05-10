import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const assetsDir = path.join(root, "public", "assets");
const sources = [
  {
    input: path.join(root, "Buildtools", "Site_Layout.jpeg"),
    output: path.join(assetsDir, "site-layout-reference.webp"),
    width: 1600
  }
];

await fs.mkdir(assetsDir, { recursive: true });

await Promise.all(
  sources.map(async ({ input, output, width }) => {
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(output);
  })
);

console.log(`Converted ${sources.length} assets to WebP.`);

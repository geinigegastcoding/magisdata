import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDir = path.join(root, "public", "assets");
const logoSource = path.join(root, "Buildtools", "Logo.png");

await fs.mkdir(outputDir, { recursive: true });

await sharp(logoSource)
  .extract({ left: 58, top: 430, width: 1144, height: 374 })
  .resize({ width: 540, withoutEnlargement: false })
  .webp({ quality: 92, effort: 6 })
  .toFile(path.join(outputDir, "magisdata-logo.webp"));

await sharp(logoSource)
  .extract({ left: 58, top: 430, width: 300, height: 374 })
  .resize({ width: 128, withoutEnlargement: false })
  .webp({ quality: 92, effort: 6 })
  .toFile(path.join(outputDir, "magisdata-mark.webp"));

console.log("Extracted MagisData logo assets to public/assets.");

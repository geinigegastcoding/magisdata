import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const assetsDir = path.join(root, "public", "assets");

const assets = [
  {
    name: "hero-dashboard.webp",
    url: "https://images.unsplash.com/photo-1771923082503-0a3381c46cef?auto=format&fit=crop&fm=jpg&q=80&w=1800",
    width: 1400
  },
  {
    name: "architecture-dark.webp",
    url: "https://images.unsplash.com/photo-1768382880068-37533aea4286?auto=format&fit=crop&fm=jpg&q=80&w=1800",
    width: 1400
  },
  {
    name: "strategy-meeting.webp",
    url: "https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?auto=format&fit=crop&fm=jpg&q=80&w=1800",
    width: 1400
  },
  {
    name: "workflow-desk.webp",
    url: "https://images.unsplash.com/photo-1754039985001-ccafee437736?auto=format&fit=crop&fm=jpg&q=80&w=1800",
    width: 1400
  },
  {
    name: "focused-workspace.webp",
    url: "https://images.unsplash.com/photo-1751200065687-a126e7c304da?auto=format&fit=crop&fm=jpg&q=80&w=1800",
    width: 1400
  }
];

await fs.mkdir(assetsDir, { recursive: true });

for (const asset of assets) {
  const response = await fetch(asset.url);
  if (!response.ok) {
    throw new Error(`Failed to download ${asset.name}: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await sharp(buffer)
    .resize({ width: asset.width, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(path.join(assetsDir, asset.name));
}

console.log(`Downloaded and converted ${assets.length} stock assets.`);

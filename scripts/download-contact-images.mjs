/**
 * Download Contact page images from Figma.
 * Usage: set FIGMA_ACCESS_TOKEN=... && node scripts/download-contact-images.mjs
 */

import fs from "fs";
import path from "path";

const FILE_KEY = "eqh3HSOKgO0vw3TIfig6bQ";
const OUT_DIR = path.join(process.cwd(), "public/images/contact");

const ASSETS = [
  { nodeId: "2020:1384", file: "contact-hero.jpg" },
  { nodeId: "2020:1517", file: "branches-map.png", format: "png" },
];

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error("Missing FIGMA_ACCESS_TOKEN");
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const ids = ASSETS.map((a) => a.nodeId).join(",");
const imagesRes = await fetch(
  `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=2`,
  { headers: { "X-Figma-Token": token } },
);

if (!imagesRes.ok) {
  console.error("Figma API error:", imagesRes.status, await imagesRes.text());
  process.exit(1);
}

const { images } = await imagesRes.json();

for (const asset of ASSETS) {
  const url = images[asset.nodeId];
  if (!url) {
    console.warn(`No URL for ${asset.file}`);
    continue;
  }
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`Failed ${asset.file}`);
    continue;
  }
  fs.writeFileSync(
    path.join(OUT_DIR, asset.file),
    Buffer.from(await res.arrayBuffer()),
  );
  console.log("Saved", asset.file);
}

console.log("Done.");

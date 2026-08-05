/**
 * Download Process page images from Figma.
 * Usage: set FIGMA_ACCESS_TOKEN=... && node scripts/download-process-images.mjs
 */

import fs from "fs";
import path from "path";

const FILE_KEY = "eqh3HSOKgO0vw3TIfig6bQ";
const OUT_DIR = path.join(process.cwd(), "public/images/process");

const ASSETS = [
  { nodeId: "2020:920", file: "process-hero.jpg" },
  { nodeId: "2020:1078", file: "award-1.png", format: "png" },
  { nodeId: "2020:1081", file: "award-2.png", format: "png" },
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
  fs.writeFileSync(path.join(OUT_DIR, asset.file), Buffer.from(await res.arrayBuffer()));
  console.log("Saved", asset.file);
}

console.log("Done.");

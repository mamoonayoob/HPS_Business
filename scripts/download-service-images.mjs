/**
 * Download per-service hero + overview images from Figma.
 *
 * Usage:
 *   set FIGMA_ACCESS_TOKEN=your_token
 *   node scripts/download-service-images.mjs
 */

import fs from "fs";
import path from "path";

const FILE_KEY = "eqh3HSOKgO0vw3TIfig6bQ";
const OUT_DIR = path.join(process.cwd(), "public/images/services");

/** slug -> { hero, overview } node IDs and output filenames */
const SERVICES = [
  {
    slug: "freight-forwarding",
    heroNode: "2045:6",
    overviewNode: "2045:35",
    heroFile: "freight-forwarding-hero.jpg",
    overviewFile: "freight-forwarding-overview.jpg",
  },
  {
    slug: "supply-chain",
    heroNode: "2045:241",
    overviewNode: "2045:270",
    heroFile: "supply-chain-hero.jpg",
    overviewFile: "supply-chain-overview.jpg",
  },
  {
    slug: "transportation",
    heroNode: "2045:474",
    overviewNode: "2045:505",
    heroFile: "transportation-hero.jpg",
    overviewFile: "transportation-overview.jpg",
  },
  {
    slug: "customs-compliance",
    heroNode: "2045:710",
    overviewNode: "2045:741",
    heroFile: "customs-compliance-hero.jpg",
    overviewFile: "customs-compliance-overview.jpg",
  },
  {
    slug: "warehousing-distribution",
    heroNode: "2045:954",
    overviewNode: "2045:983",
    heroFile: "warehousing-hero.jpg",
    overviewFile: "warehousing-overview.jpg",
  },
  {
    slug: "packaging-packing",
    heroNode: "2045:1188",
    overviewNode: "2045:1220",
    heroFile: "packaging-hero.jpg",
    overviewFile: "packaging-overview.jpg",
  },
  {
    slug: "import-export-consolidation",
    heroNode: "2045:1428",
    overviewNode: "2045:1458",
    heroFile: "import-export-hero.jpg",
    overviewFile: "import-export-overview.jpg",
  },
  {
    slug: "cash-on-delivery",
    heroNode: "2045:1661",
    overviewNode: "2045:1690",
    heroFile: "cod-hero.jpg",
    overviewFile: "cod-overview.jpg",
  },
  {
    slug: "domestic-movement",
    heroNode: "2045:1889",
    overviewNode: "2045:1918",
    heroFile: "domestic-hero.jpg",
    overviewFile: "domestic-overview.jpg",
  },
  {
    slug: "secure-warehousing",
    heroNode: "2045:2123",
    overviewNode: "2045:2151",
    heroFile: "secure-warehousing-hero.jpg",
    overviewFile: "secure-warehousing-overview.jpg",
  },
  {
    slug: "b2b-service",
    heroNode: "2045:2356",
    overviewNode: "2045:2384",
    heroFile: "b2b-hero.jpg",
    overviewFile: "b2b-overview.jpg",
  },
  {
    slug: "door-to-door-delivery",
    heroNode: "2063:37",
    overviewNode: "2063:65",
    heroFile: "door-to-door-hero.jpg",
    overviewFile: "door-to-door-overview.jpg",
  },
];

const token = process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error(
    "Missing FIGMA_ACCESS_TOKEN. Create one at https://www.figma.com/developers/api#access-tokens",
  );
  process.exit(1);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const nodeMap = SERVICES.flatMap((service) => [
  { file: service.heroFile, nodeId: service.heroNode },
  { file: service.overviewFile, nodeId: service.overviewNode },
]);

const ids = nodeMap.map((entry) => entry.nodeId).join(",");

const imagesRes = await fetch(
  `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=jpg&scale=2`,
  { headers: { "X-Figma-Token": token } },
);

if (!imagesRes.ok) {
  console.error("Figma API error:", imagesRes.status, await imagesRes.text());
  process.exit(1);
}

const { images } = await imagesRes.json();

for (const entry of nodeMap) {
  const url = images[entry.nodeId];
  if (!url) {
    console.warn(`No image URL for ${entry.file} (${entry.nodeId})`);
    continue;
  }

  const filePath = path.join(OUT_DIR, entry.file);
  const imgRes = await fetch(url);
  if (!imgRes.ok) {
    console.warn(`Failed to download ${entry.file}`);
    continue;
  }

  fs.writeFileSync(filePath, Buffer.from(await imgRes.arrayBuffer()));
  console.log("Saved", entry.file);
}

console.log("Done.");

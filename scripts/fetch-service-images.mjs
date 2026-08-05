/**
 * Download distinct logistics images for each service page.
 * Run: node scripts/fetch-service-images.mjs
 *
 * For exact Figma assets use: node scripts/download-service-images.mjs
 * (requires FIGMA_ACCESS_TOKEN)
 */

import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "public/images/services");

const IMAGES = [
  {
    file: "freight-forwarding-hero.jpg",
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbcd?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "freight-forwarding-overview.jpg",
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "supply-chain-hero.jpg",
    url: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "supply-chain-overview.jpg",
    url: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "transportation-hero.jpg",
    url: "https://images.unsplash.com/photo-1601584119947-0fe9c195551a?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "transportation-overview.jpg",
    url: "https://images.unsplash.com/photo-1519005058253-48e8c8d4a8b8?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "customs-compliance-hero.jpg",
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "customs-compliance-overview.jpg",
    url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "warehousing-hero.jpg",
    url: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "warehousing-overview.jpg",
    url: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "packaging-hero.jpg",
    url: "https://images.unsplash.com/photo-1607083206869-4c1652453330?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "packaging-overview.jpg",
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "import-export-hero.jpg",
    url: "https://images.unsplash.com/photo-1494412574642-677277261964?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "import-export-overview.jpg",
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbcd?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "cod-hero.jpg",
    url: "https://images.unsplash.com/photo-1566574397770-9e9e7f7e2388?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "cod-overview.jpg",
    url: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "domestic-hero.jpg",
    url: "https://images.unsplash.com/photo-1519005058253-48e8c8d4a8b8?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "domestic-overview.jpg",
    url: "https://images.unsplash.com/photo-1601584119947-0fe9c195551a?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "secure-warehousing-hero.jpg",
    url: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "secure-warehousing-overview.jpg",
    url: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "b2b-hero.jpg",
    url: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "b2b-overview.jpg",
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&h=850&q=85",
  },
  {
    file: "door-to-door-hero.jpg",
    url: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=2400&h=900&q=85",
  },
  {
    file: "door-to-door-overview.jpg",
    url: "https://images.unsplash.com/photo-1566574397770-9e9e7f7e2388?auto=format&fit=crop&w=1400&h=850&q=85",
  },
];

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const { file, url } of IMAGES) {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`Failed ${file}: ${res.status}`);
    continue;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(OUT_DIR, file), buffer);
  console.log(`Saved ${file} (${buffer.length} bytes)`);
}

console.log("Done.");

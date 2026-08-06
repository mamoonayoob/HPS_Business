import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const logoPath = path.join(root, "public/images/logo.png");
const appDir = path.join(root, "src/app");
const publicDir = path.join(root, "public");

await mkdir(appDir, { recursive: true });

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

async function writeSquareIcon(outputPath, size) {
  await sharp(logoPath)
    .resize(size, size, {
      fit: "contain",
      background: transparent,
    })
    .png()
    .toFile(outputPath);
}

await writeSquareIcon(path.join(appDir, "icon.png"), 512);
await writeSquareIcon(path.join(appDir, "apple-icon.png"), 180);
await writeSquareIcon(path.join(publicDir, "favicon-32x32.png"), 32);
await writeSquareIcon(path.join(publicDir, "favicon-16x16.png"), 16);

const icoBuffer = await pngToIco([
  path.join(publicDir, "favicon-16x16.png"),
  path.join(publicDir, "favicon-32x32.png"),
]);
writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);

console.log("Favicons generated in src/app and public/");

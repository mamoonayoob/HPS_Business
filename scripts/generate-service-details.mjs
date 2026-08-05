import fs from "fs";
import path from "path";

const xml = fs.readFileSync(
  "C:/Users/T15/.cursor/projects/c-Users-T15-Desktop-HPS/agent-tools/0d8494a1-5743-4cd2-aab1-ab4b9d8079bb.txt",
  "utf8",
);

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'");

const pageMarkers = [
  { slug: "freight-forwarding", title: "Freight Forwarding", start: 'name="FREIGHT FORWARDING"' },
  { slug: "supply-chain", title: "Supply Chain", start: 'name="Supply Chain" x="18192"' },
  { slug: "transportation", title: "Transportation", start: 'name="Transportation" x="20496"' },
  { slug: "customs-compliance", title: "Customs & Compliance", start: 'name="CUSTOMS &amp; COMPLIANCE"' },
  { slug: "warehousing-distribution", title: "Warehousing & Distribution", start: 'name="WAREHOUSING &amp; DISTRIBUTION"' },
  { slug: "packaging-packing", title: "Packaging and Packing", start: 'name="PACKAGING AND PACKING"' },
  { slug: "import-export-consolidation", title: "Import / Export Consolidation", start: 'name="IMPORT / EXPORT CONSOLIDATION"' },
  { slug: "cash-on-delivery", title: "Cash on Delivery", start: 'name="CASH ON DELIVERY"' },
  { slug: "domestic-movement", title: "Domestic Movement", start: 'name="DOMESTIC MOVEMENT"' },
  { slug: "secure-warehousing", title: "Secure Warehousing", start: 'name="SECURE WAREHOUSING"' },
  { slug: "b2b-service", title: "B2B Service", start: 'name="B2B SERVICE"' },
  { slug: "door-to-door-delivery", title: "Door to Door Delivery", start: 'name="DOOR TO DOOR DELIVERY"' },
];

const skip = new Set([
  "Text",
  "LET'S CONNECT FOR ANY QUERY",
  "EMAIL ADDRESS",
  "PASSWORD",
  "Create Shipment",
  "STEP-2",
  "Recipient Details",
  "Sender Details",
  "PickUp Contact Details",
  "CONTACT PERSON",
]);

const textRegex =
  /<text id="[^"]+" name="([^"]+)"[^/]*\/>|<text id="[^"]+" name="([^"]+)"[^>]*>([^<]*)<\/text>/g;

function extractTexts(part) {
  const texts = [];
  let m;
  while ((m = textRegex.exec(part)) !== null) {
    const raw = decode(m[1] || m[2] || "");
    const inline = m[3] ? decode(m[3]) : "";
    const value = inline || raw;
    if (
      value &&
      !skip.has(value) &&
      !value.startsWith("Heading") &&
      !value.startsWith("Button") &&
      !value.startsWith("YOUR ") &&
      !value.startsWith("SELECT A SERVICE") &&
      !value.startsWith("SUBJECT") &&
      !value.startsWith("MESSAGE") &&
      !value.startsWith("John Doe") &&
      !value.startsWith("john@") &&
      !value.startsWith("Choose a service") &&
      !value.startsWith("How can we help") &&
      !value.startsWith("Write your message") &&
      !value.includes("ΓÇó") &&
      value.length > 3
    ) {
      texts.push(value);
    }
  }
  return texts;
}

const services = [];

for (let i = 0; i < pageMarkers.length; i++) {
  const marker = pageMarkers[i];
  const startIdx = xml.indexOf(marker.start);
  const endIdx =
    i + 1 < pageMarkers.length
      ? xml.indexOf(pageMarkers[i + 1].start)
      : xml.length;
  const part = xml.slice(startIdx, endIdx === -1 ? xml.length : endIdx);
  const texts = extractTexts(part);

  let cursor = 0;
  const heroTitle =
    texts.find((t) => t === marker.title.toUpperCase() || t === marker.title) ??
    marker.title.toUpperCase();
  if (texts[cursor] === heroTitle) cursor++;

  const overviewHeading = texts[cursor++];
  const overviewHighlight = texts[cursor++];
  const featureItems = [];
  while (cursor < texts.length) {
    const title = texts[cursor];
    const desc = texts[cursor + 1];
    if (!desc || desc.length < 40) break;
    featureItems.push({ title, description: desc });
    cursor += 2;
  }

  services.push({
    slug: marker.slug,
    title: marker.title,
    heroTitle,
    overviewHeading,
    overviewHighlight,
    features: featureItems.slice(0, 6),
  });
}

const outPath = path.join(process.cwd(), "src/config/service-details.generated.json");
fs.writeFileSync(outPath, JSON.stringify(services, null, 2));
console.log("Wrote", outPath, "with", services.length, "services");

import fs from "fs";

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
  { slug: "freight-forwarding", start: 'name="FREIGHT FORWARDING"' },
  { slug: "supply-chain", start: 'name="Supply Chain" x="18192"' },
  { slug: "transportation", start: 'name="Transportation" x="20496"' },
  { slug: "customs-compliance", start: 'name="CUSTOMS &amp; COMPLIANCE"' },
  { slug: "warehousing-distribution", start: 'name="WAREHOUSING &amp; DISTRIBUTION"' },
  { slug: "packaging-packing", start: 'name="PACKAGING AND PACKING"' },
  { slug: "import-export-consolidation", start: 'name="IMPORT / EXPORT CONSOLIDATION"' },
  { slug: "cash-on-delivery", start: 'name="CASH ON DELIVERY"' },
  { slug: "domestic-movement", start: 'name="DOMESTIC MOVEMENT"' },
  { slug: "secure-warehousing", start: 'name="SECURE WAREHOUSING"' },
  { slug: "b2b-service", start: 'name="B2B SERVICE"' },
  { slug: "door-to-door-delivery", start: 'name="DOOR TO DOOR DELIVERY"' },
];

const textRegex =
  /<text id="[^"]+" name="([^"]+)"[^/]*\/>|<text id="[^"]+" name="([^"]+)"[^>]*>([^<]*)<\/text>/g;

function extractSection(xmlPart) {
  const texts = [];
  let m;
  while ((m = textRegex.exec(xmlPart)) !== null) {
    const raw = decode(m[1] || m[2] || "");
    const inline = m[3] ? decode(m[3]) : "";
    const value = inline || raw;
    if (
      value &&
      value !== "Text" &&
      !value.startsWith("Heading") &&
      !value.startsWith("Button") &&
      !value.startsWith("Link") &&
      !value.startsWith("SVG") &&
      !value.startsWith("Container") &&
      !value.startsWith("Row ") &&
      !value.startsWith("Label") &&
      !value.startsWith("Input") &&
      !value.startsWith("Options") &&
      !value.startsWith("Textarea") &&
      !value.startsWith("Horizontal Divider") &&
      !value.startsWith("Gradient") &&
      !value.startsWith("Vertical Divider") &&
      !value.startsWith("Stat Badge") &&
      !value.startsWith("Send Us A Message") &&
      !value.startsWith("Fill out the form") &&
      !value.startsWith("YOUR ") &&
      !value.startsWith("SELECT A SERVICE") &&
      !value.startsWith("SUBJECT") &&
      !value.startsWith("MESSAGE") &&
      !value.startsWith("John Doe") &&
      !value.startsWith("john@example.com") &&
      !value.startsWith("Choose a service") &&
      !value.startsWith("How can we help") &&
      !value.startsWith("Write your message") &&
      value.length > 2
    ) {
      texts.push(value);
    }
  }
  return texts;
}

for (let i = 0; i < pageMarkers.length; i++) {
  const startIdx = xml.indexOf(pageMarkers[i].start);
  const endIdx =
    i + 1 < pageMarkers.length
      ? xml.indexOf(pageMarkers[i + 1].start)
      : xml.length;
  if (startIdx === -1) {
    console.log("MISSING", pageMarkers[i].slug);
    continue;
  }
  const part = xml.slice(startIdx, endIdx === -1 ? xml.length : endIdx);
  const texts = extractSection(part);
  console.log("\n===", pageMarkers[i].slug, "===", texts.length, "texts");
  console.log(texts.slice(0, 25).join("\n---\n"));
}

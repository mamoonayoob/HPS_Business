/** Split uppercase headings: last word (or last 2 if 4+ words) becomes accent line. */
export function splitHeading(title: string): { lead: string; accent: string } {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) {
    return { lead: title, accent: "" };
  }
  const accentCount = words.length >= 4 ? 2 : 1;
  return {
    lead: words.slice(0, -accentCount).join(" "),
    accent: words.slice(-accentCount).join(" "),
  };
}

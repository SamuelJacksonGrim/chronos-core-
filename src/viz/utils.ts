// small helpers used by the SVG generator
export const escapeXml = (s: string) =>
  (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const uid = (prefix = "") =>
  `${prefix}${Math.random().toString(36).slice(2, 9)}`;

export function approxTextWidth(text: string, avgCharPx = 7) {
  // rough estimate for layout without DOM measurement
  // avgCharPx default tuned for monospace-ish compact labels
  return Math.max(24, Math.ceil(text.length * avgCharPx));
}

export function centerRect(x: number, y: number, w: number, h: number) {
  return { left: x - w / 2, top: y - h / 2, right: x + w / 2, bottom: y + h / 2 };
}

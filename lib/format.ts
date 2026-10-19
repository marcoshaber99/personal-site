const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-02-28" -> "Feb 2026" (short) or "28 February 2026" (long). */
export function formatDate(iso: string, style: "short" | "long" = "short") {
  const [y, m, d] = iso.split("-").map(Number);
  const month = MONTHS[(m ?? 1) - 1] ?? "";
  if (style === "long") return `${d} ${month} ${y}`;
  return `${month.slice(0, 3)} ${y}`;
}

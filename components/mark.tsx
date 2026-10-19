type MarkColor = "yellow" | "green" | "blue" | "red" | "purple";

/* Colour names are kept for the existing posts; all render as a quiet highlight. */
export function Mark({
  children,
}: {
  children: React.ReactNode;
  color?: MarkColor;
}) {
  return (
    <mark className="rounded-[2px] bg-foreground/[0.08] px-1 py-0.5 text-foreground">
      {children}
    </mark>
  );
}

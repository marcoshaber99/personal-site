export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center rounded-[3px] border border-border bg-muted px-1.5 py-0.5 font-mono text-xs font-medium text-foreground/80">
      {children}
    </kbd>
  );
}

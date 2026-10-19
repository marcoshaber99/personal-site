import { ArrowUpRight } from "lucide-react";

export function LinkCard({ href, title }: { href: string; title: string }) {
  const domain = new URL(href).hostname.replace("www.", "");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group my-2 flex items-center justify-between gap-3 border-b border-border py-2.5 font-normal no-underline transition-colors hover:border-foreground/40"
    >
      <span className="flex min-w-0 items-baseline gap-2">
        <span className="truncate text-sm text-foreground">{title}</span>
        <span className="shrink-0 text-xs text-muted-foreground">{domain}</span>
      </span>
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
      />
    </a>
  );
}

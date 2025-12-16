import { ExternalLink } from "lucide-react";

export function LinkCard({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const domain = new URL(href).hostname.replace("www.", "");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-3 py-2 px-3 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors no-underline"
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors truncate">
          {title}
        </span>
        <span className="text-xs text-neutral-400 flex-shrink-0">
          {domain}
        </span>
      </div>
      <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 flex-shrink-0 transition-colors" />
    </a>
  );
}

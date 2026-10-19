import { Info, Lightbulb, AlertTriangle } from "lucide-react";

type CalloutType = "info" | "tip" | "warning";

const icons: Record<CalloutType, typeof Info> = {
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
};

export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: CalloutType;
}) {
  const Icon = icons[type];
  return (
    <aside className="my-6 flex gap-3 border-l-2 border-foreground/60 pl-4 text-[15px] leading-6 text-foreground/85">
      <Icon
        aria-hidden="true"
        strokeWidth={1.5}
        className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
      />
      <div className="[&>p]:m-0">{children}</div>
    </aside>
  );
}

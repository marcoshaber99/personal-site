import { Info, Lightbulb, AlertTriangle } from "lucide-react";

type CalloutType = "info" | "tip" | "warning";

const calloutStyles: Record<
  CalloutType,
  { icon: typeof Info; className: string }
> = {
  info: {
    icon: Info,
    className:
      "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100",
  },
  tip: {
    icon: Lightbulb,
    className:
      "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/50 text-green-900 dark:text-green-100",
  },
  warning: {
    icon: AlertTriangle,
    className:
      "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/50 text-amber-900 dark:text-amber-100",
  },
};

export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: CalloutType;
}) {
  const { icon: Icon, className } = calloutStyles[type];

  return (
    <div
      className={`my-6 flex gap-3 rounded-lg border p-4 text-sm ${className}`}
    >
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <div className="[&>p]:m-0">{children}</div>
    </div>
  );
}

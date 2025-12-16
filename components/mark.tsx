type MarkColor = "yellow" | "green" | "blue" | "red" | "purple";

const colorClasses: Record<MarkColor, string> = {
  yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-100",
  green: "bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100",
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100",
  red: "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100",
};

export function Mark({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: MarkColor;
}) {
  return (
    <mark
      className={`px-1.5 py-0.5 rounded-sm font-medium ${colorClasses[color]}`}
    >
      {children}
    </mark>
  );
}

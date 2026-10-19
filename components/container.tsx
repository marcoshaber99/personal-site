import { cn } from "@/lib/utils";

export const CONTAINER_MAX = "48rem";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-3xl px-6", className)}>
      {children}
    </div>
  );
}

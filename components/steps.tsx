import React from "react";

export function Steps({ children }: { children: React.ReactNode }) {
  return <div className="steps-container my-6">{children}</div>;
}

export function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="step relative ml-3 border-l border-border pb-8 pl-8 last:pb-0">
      <div className="step-number absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-xs font-medium tabular-nums text-background" />
      <h4 className="mb-2 font-medium text-foreground">{title}</h4>
      <div className="text-[15px] leading-7 text-muted-foreground [&>p]:my-2">
        {children}
      </div>
    </div>
  );
}

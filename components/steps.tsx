import React from "react";

export function Steps({ children }: { children: React.ReactNode }) {
  return <div className="steps-container">{children}</div>;
}

export function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="step relative pl-8 pb-8 last:pb-0 border-l-2 border-neutral-200 dark:border-neutral-700 ml-3">
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-xs font-bold flex items-center justify-center step-number" />
      <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
        {title}
      </h4>
      <div className="text-neutral-600 dark:text-neutral-400 text-sm [&>p]:my-2">
        {children}
      </div>
    </div>
  );
}

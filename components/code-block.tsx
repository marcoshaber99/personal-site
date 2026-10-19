"use client";
import React, { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const textOf = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (!node) return "";
    if (Array.isArray(node)) return node.map(textOf).join("");
    if (React.isValidElement(node)) return textOf(node.props.children);
    return "";
  };

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <div
      className={`group relative my-6 rounded-[4px] border border-border bg-muted/60 ${className ?? ""}`}
    >
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(textOf(children));
          setCopied(true);
        }}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute right-2.5 top-2.5 z-10 inline-flex h-7 w-7 items-center justify-center rounded-[3px] text-muted-foreground opacity-0 transition-opacity hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" strokeWidth={1.75} />
        ) : (
          <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
        )}
      </button>
      <div className="overflow-x-auto">
        <pre className="!m-0 block overflow-visible !border-0 !bg-transparent p-4 font-mono text-[13px] leading-relaxed sm:text-sm">
          {children}
        </pre>
      </div>
    </div>
  );
}

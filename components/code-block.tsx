"use client";
import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CodeBlock({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return node.toString();
    if (!node) return "";
    if (Array.isArray(node)) return node.map(getTextContent).join("");
    if (React.isValidElement(node)) return getTextContent(node.props.children);
    return "";
  };

  const copyToClipboard = async () => {
    const codeText = getTextContent(children);
    await navigator.clipboard.writeText(codeText);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div 
      className={`relative group my-5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-[#f8f9fa] dark:bg-[#0e0e0e] ${className || ""}`}
    >
      <div className="absolute top-2.5 right-2.5 z-20">
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800"
          onClick={copyToClipboard}
        >
          {isCopied ? (
            <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
          )}
        </Button>
      </div>
      <div className="overflow-x-auto">
        <pre className="text-[13px] sm:text-sm font-mono block p-4 leading-relaxed !m-0 !bg-transparent !border-0 overflow-visible">
          {children}
        </pre>
      </div>
    </div>
  );
}
import type { MDXComponents } from "mdx/types";
import { ExternalLink } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";

const Spacer = ({
  size = "medium",
}: {
  size?: "small" | "medium" | "large";
}) => {
  const sizeClasses = {
    small: "spacer-sm",
    medium: "spacer-md",
    large: "spacer-lg",
  };
  return <div className={sizeClasses[size]} />;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ className, children }) => {
      if (className?.includes("language-")) {
        return (
          <CodeBlock className={className}>{children as string}</CodeBlock>
        );
      }
      return (
        <code className="text-[#24292e] dark:text-[#d6deeb] px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800">
          {children}
        </code>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-4 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-4 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-4 mb-4">{children}</h3>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-blue-600 dark:text-green-400 hover:text-blue-800 dark:hover:text-green-300 underline decoration-blue-600 dark:decoration-green-400 decoration-2 underline-offset-2 transition-colors duration-200 inline-flex items-center"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
        {href?.startsWith("http") && <ExternalLink className="ml-1 h-4 w-4" />}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside">{children}</ol>
    ),
    Spacer,
    ...components,
  };
}

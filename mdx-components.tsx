import type { MDXComponents } from "mdx/types";
import { ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { Wobbly } from "@/components/wobbly";

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

const Underline = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      textDecoration: "underline",
      textDecorationThickness: "1px",
      textUnderlineOffset: "2px",
      display: "inline-block",
    }}
  >
    {children}
  </span>
);

const Emphasis = ({
  children,
  color = "default",
}: {
  children: React.ReactNode;
  color?: "default" | "red" | "green" | "blue";
}) => {
  const colorClasses = {
    default: "text-primary dark:text-primary-dark",
    red: "text-red-700 dark:text-red-400",
    green: "text-green-800 dark:text-green-400",
    blue: "text-blue-700 dark:text-blue-400",
  };

  return (
    <span className={`font-semibold  ${colorClasses[color]}`}>{children}</span>
  );
};

const Italic = ({ children }: { children: React.ReactNode }) => (
  <em className="italic">{children}</em>
);

const Highlighter = ({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "green" | "red" | "purple";
}) => {
  const colorClasses = {
    yellow:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200",
    green:
      "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
    red: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200",
    purple:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200",
  };

  return (
    <span className={`px-1 py-0.5 rounded ${colorClasses[color]}`}>
      {children}
    </span>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ className, children }) => {
      return <CodeBlock className={className}>{children as string}</CodeBlock>;
    },
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mt-4 mb-4 font-mono">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mt-4 mb-4 font-mono">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-4 mb-4 font-mono">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold mt-4 mb-4 font-mono">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-bold mt-4 mb-4 font-mono">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-lg font-bold mt-4 mb-4 font-mono">{children}</h6>
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
    Underline,
    Emphasis,
    Italic,
    Highlighter,
    Wobbly,
    ...components,
  };
}

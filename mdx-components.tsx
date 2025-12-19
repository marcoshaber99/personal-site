import type { MDXComponents } from "mdx/types";
import { ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { Mark } from "@/components/mark";
import { Callout } from "@/components/callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ className, children }) => {
      if (!className) {
        return (
          <code className="px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 font-mono text-sm">
            {children}
          </code>
        );
      }
      return <code className={className}>{children}</code>;
    },
    pre: ({ children, className }) => <CodeBlock className={className}>{children}</CodeBlock>,
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
    Mark,
    Callout,
    ...components,
  };
}

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { Mark } from "@/components/mark";
import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";
import { Kbd } from "@/components/kbd";
import { Steps, Step } from "@/components/steps";
import { LinkCard } from "@/components/link-card";
import BlogSchema from "@/components/blog-schema";
import rehypePrism from "rehype-prism-plus";

const components: MDXRemoteProps["components"] = {
  Mark,
  Callout,
  Kbd,
  Steps,
  Step,
  LinkCard,
  code: ({ className, children }) => {
    if (!className) {
      return (
        <code className="px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 font-mono text-sm">
          {children}
        </code>
      );
    }
    return <CodeBlock className={className}>{children as string}</CodeBlock>;
  },
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
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Marco Haber"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogSchema slug={slug} />
      <article>
          <h1 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {post.date} · {post.readTime} min read
          </p>
          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote
              source={post.content}
              components={components}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
                },
              }}
            />
          </div>
      </article>
    </>
  );
}

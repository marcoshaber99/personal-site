import { notFound } from "next/navigation";
import { Metadata } from "next";
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
import Link from "next/link";
import { Container } from "@/components/container";
import { formatDate } from "@/lib/format";

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
        <code className="rounded-[3px] bg-muted px-1.5 py-0.5 font-mono text-[0.875em] font-normal text-foreground">
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
      className="link font-normal text-foreground"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
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

  const ogImage = `/og/${slug}-og.webp`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Marco Haber"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
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
    <Container>
      <BlogSchema slug={slug} />
      <article className="pt-6 sm:pt-10">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Writing
        </Link>
        <h1 className="mt-8 font-display text-[2.25rem] leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem]">
          {post.title}
        </h1>
        <p className="mt-4 text-sm tabular-nums text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date, "long")}</time>
          <span aria-hidden="true"> · </span>
          {post.readTime} min read
        </p>
        <div className="prose prose-neutral mt-12 max-w-none dark:prose-invert prose-headings:font-medium prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-7 prose-p:text-foreground/85 prose-strong:font-medium prose-strong:text-foreground prose-img:rounded-[3px] prose-hr:border-border prose-blockquote:border-l-border prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-muted-foreground">
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
    </Container>
  );
}

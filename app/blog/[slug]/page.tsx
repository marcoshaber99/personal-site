import { notFound } from "next/navigation";
import { blogPosts } from "@/data/content";
import { Metadata } from "next";
import BlogSchema from "@/components/blog-schema";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

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
  params: { slug: string };
}) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  let PostContent;
  try {
    PostContent = (await import(`../../../app/blog/${params.slug}/page.mdx`))
      .default;
  } catch (e) {
    notFound();
  }

  return (
    <>
      <BlogSchema slug={params.slug} />
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <article className="mt-4">
          <h1 className="text-3xl font-bold mb-4 text-primary dark:text-orange-400">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            {post.date} • {post.readTime} min read
          </p>
          <div className="prose dark:prose-invert">
            <PostContent />
          </div>
        </article>
      </div>
    </>
  );
}

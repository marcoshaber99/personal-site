import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about web development, React, Next.js, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Home
      </Link>

      <h1 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
        Blog
      </h1>
      <p className="text-muted-foreground mb-10">
        Thoughts on web development, tools, and things I&apos;m learning.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <h2 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-green-400 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-muted-foreground flex-shrink-0">
                  {post.date}
                </time>
              </div>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

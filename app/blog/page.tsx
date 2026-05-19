import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogPostsList } from "@/components/blog-posts-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about web development, React, Next.js, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <div className="flex items-center gap-3 sm:gap-4 mb-3">
        <h1 className="font-pp-regular text-3xl sm:text-4xl tracking-tight text-neutral-900 dark:text-neutral-100">
          Blog
        </h1>
        <div className="h-px flex-grow bg-gradient-to-r from-neutral-200 via-green-500/20 to-neutral-200 dark:from-neutral-800 dark:via-green-400/20 dark:to-neutral-800" />
      </div>
      <p className="text-muted-foreground mb-10">
        Thoughts on web development, tools, and things I&apos;m learning.
      </p>

      <BlogPostsList posts={posts} />
    </div>
  );
}

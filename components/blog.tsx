import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { BlogPostsList } from "./blog-posts-list";
import { SectionTitle } from "./section-title";

const MAX_POSTS_ON_HOME = 2;

export default function Blog() {
  const allPosts = getAllPosts();
  const posts = allPosts.slice(0, MAX_POSTS_ON_HOME);

  return (
    <section className="relative">
      <SectionTitle title="Blog" />
      <BlogPostsList posts={posts} />
      <div className="mt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all posts
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

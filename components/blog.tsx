import Link from "next/link";
import { blogPosts } from "@/data/content";
import { ArrowRightIcon } from "lucide-react";

export default function Blog() {
  // Sort blog posts by date in descending order
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="mt-8 w-full">
      <h2 className="heading dark:text-green-400 mb-6">blog</h2>
      <div className="space-y-4">
        {sortedPosts.map((post) => (
          <div
            key={post.slug}
            className="group rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-3 border hover:border-green-200/50 bg-background"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <h3 className="text-base font-medium text-primary group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {post.date} • {post.readTime} min read
              </p>
              <p className="text-sm dark:text-neutral-400 mt-2 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-500 transition-colors mt-2">
                Read more <ArrowRightIcon className="h-3 w-3" />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

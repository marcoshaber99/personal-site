import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export function BlogPostsList({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <ul className="-mt-5 divide-y divide-border">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="group block py-5">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-medium leading-6 text-foreground transition-colors group-hover:text-muted-foreground">
                {post.title}
              </h3>
              <time
                dateTime={post.date}
                className="shrink-0 text-sm tabular-nums text-muted-foreground"
              >
                {formatDate(post.date)}
              </time>
            </div>
            <p className="mt-1.5 text-sm leading-6 text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

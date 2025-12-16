"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogPostsList({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="grid gap-3 sm:gap-4">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neutral-100 dark:from-neutral-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <Link
            href={`/blog/${post.slug}`}
            className="relative block rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 sm:p-5 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 bg-background/40"
          >
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2 sm:line-clamp-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-neutral-500">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center text-sm text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform duration-200">
                Read more
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

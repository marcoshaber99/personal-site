import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogPostsList } from "./blog-posts-list";
import { Section } from "./section";

const MAX_POSTS_ON_HOME = 3;

export default function Blog() {
  const posts = getAllPosts().slice(0, MAX_POSTS_ON_HOME);

  return (
    <Section id="writing" label="Writing">
      <BlogPostsList posts={posts} />
      <Link
        href="/blog"
        className="link mt-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        All writing
      </Link>
    </Section>
  );
}

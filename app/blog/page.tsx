import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogPostsList } from "@/components/blog-posts-list";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on web development, tools, and things I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <div className="pt-6 sm:pt-10">
        <h1 className="font-display text-[2.5rem] leading-none tracking-tight text-foreground sm:text-[3rem]">
          Writing
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Notes on web development, tools, and things I&apos;m learning.
        </p>
      </div>
      <div className="mt-14">
        <BlogPostsList posts={posts} />
      </div>
    </Container>
  );
}

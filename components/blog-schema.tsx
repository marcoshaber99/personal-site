import { blogPosts } from "@/data/content";

export default function BlogSchema({ slug }: { slug: string }) {
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Marco Haber",
    },
    description: post.excerpt,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

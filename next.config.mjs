import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism-plus";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/lllwu0d4dv/**", // specific to my uploadthing dashboard
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

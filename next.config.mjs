import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism-plus";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
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

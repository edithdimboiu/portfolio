import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/blog/20250819",
        destination: "/blog/what-being-a-good-developer-means-to-me",
        permanent: true,
      },
      {
        source: "/blog/20250822",
        destination:
          "/blog/technical-debt-common-ground-accounting-software-development",
        permanent: true,
      },
      {
        source: "/blog/20250925",
        destination: "/blog/javascript-array-loops-in-depth",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,

  options: {
    remarkPlugins: [remarkGfm],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

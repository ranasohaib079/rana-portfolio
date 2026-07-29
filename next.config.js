const createMDX = require("@next/mdx");
const remarkFrontmatter = require("remark-frontmatter").default;
const remarkMdxFrontmatter = require("remark-mdx-frontmatter").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Strip the YAML frontmatter from the rendered body. Metadata is still
    // read separately by gray-matter in src/lib/blog.ts.
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  },
});

module.exports = withMDX(nextConfig);

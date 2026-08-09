import createMDX from '@next/mdx';

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    light: 'github-light',
    dark: 'github-dark-dimmed',
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
  images: {
    /**
     * nextJS 14 export does not work with anything else I've tried.
     *
     * Many people have problems with images:
     * @see https://github.com/vercel/next.js/discussions/19065
     */
    unoptimized: true,
  },
};

const withMDX = createMDX({
  // Plugins are named as strings rather than imported: Next 16 builds with
  // Turbopack, which cannot pass JavaScript functions through to Rust.
  options: {
    remarkPlugins: ['remark-gfm', 'remark-frontmatter'],
    rehypePlugins: [['rehype-pretty-code', options]],
  },
});

export default withMDX(nextConfig);

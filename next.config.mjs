import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

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
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withMDX(nextConfig);

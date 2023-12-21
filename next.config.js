const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure `pageExtensions` to include MDX files
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

module.exports = withMDX(nextConfig);

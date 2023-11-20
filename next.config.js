const withExportImages = require('next-export-optimize-images');
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    // required to enable MDX
    mdxRs: true,
  },
  output: 'export',
};

/**
 * `withExportImages` optimizes images for `next export` and solves:
 * @see https://github.com/vercel/next.js/discussions/19065
 */
withExportImages(nextConfig);

module.exports = withMDX(withExportImages);

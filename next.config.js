const withExportImages = require('next-export-optimize-images');
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  output: 'export',
};

/**
 * `withExportImages` optimizes images for `next export` and solves:
 * @see https://github.com/vercel/next.js/discussions/19065
 */
withExportImages(nextConfig);

module.exports = withMDX(withExportImages);

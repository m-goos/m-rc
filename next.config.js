const withExportImages = require('next-export-optimize-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
};

/**
 * `withExportImages` optimizes images for `next export` and solves:
 * @see https://github.com/vercel/next.js/discussions/19065
 */
module.exports = withExportImages(nextConfig);

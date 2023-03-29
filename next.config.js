/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /**
     * required for `npm run export`
     * images are optimized by `sharp`, if width & height are set
     * */
    unoptimized: true,
  },
};

module.exports = nextConfig;

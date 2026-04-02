/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
};

module.exports = nextConfig;

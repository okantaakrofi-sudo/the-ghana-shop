/** @type {import('next').NextConfig} */
const nextConfig = {
  /* 1. Image Optimization: 
     This allows Next.js to resize and optimize your product 
     photos for faster loading in the UAE.
  */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // For high-end stock photos
      },
      {
        protocol: 'https',
        hostname: 'api.placeholder.com', // For the mockups we built
      },
    ],
  },

  /* 2. Powered By Header:
     Disabling this adds a tiny bit of security to your site.
  */
  poweredByHeader: false,

  /* 3. React Strict Mode:
     Keeps your code clean and helps catch bugs early 
     during development.
  */
  reactStrictMode: true,
};

export default nextConfig;

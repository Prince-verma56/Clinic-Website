/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch potential bugs in development
  swcMinify: true,       // Enables faster and smaller production builds

  // Image optimization setup
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,  // Keep it false to allow Next.js to optimize automatically
    domains: [
      'https://dr-devesh-homeoclinic.vercel.app/',  // Replace with your actual domain (when deployed)
      'res.cloudinary.com', // Example if you use external images
    ],
  },

  // Experimental (optional performance enhancements)
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['three', 'framer-motion'],
  },

  // Optional if you’ll use static regeneration for pages
  output: 'standalone', // Makes deployment faster and lighter
};

export default nextConfig;

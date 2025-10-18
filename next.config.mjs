/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch potential bugs in development
  swcMinify: true,       // Enables faster and smaller production builds

  // ✅ Correct Image Optimization Setup
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false, // keep it false for Next.js to handle optimization
    domains: [
      'dr-devesh-homeoclinic.vercel.app',
      'res.cloudinary.com',
    ],
  },

  // Experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['three', 'framer-motion'],
  },

  // Static output optimization
  output: 'standalone',
};

export default nextConfig;

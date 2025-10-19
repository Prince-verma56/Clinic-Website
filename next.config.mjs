/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Corrected image optimization config for Next 15
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dr-devesh-homeoclinic.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },

  // ✅ Removed deprecated "swcMinify"
  // SWC minification is always enabled by default in modern Next.js

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['three', 'framer-motion'],
  },

  // ✅ For faster Vercel builds
  output: 'standalone',
};

export default nextConfig;

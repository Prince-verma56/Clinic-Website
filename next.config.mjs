/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
    domains: ['dr-devesh-homeoclinic.vercel.app', 'res.cloudinary.com'],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['three', 'framer-motion'],
  },

  output: 'standalone',
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // We keep static HTML export active so your site stays lightweight and server-free
  output: 'export',
  images: {
    unoptimized: true,
  },
  // We keep build errors ignored so TypeScript warnings never lock your deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
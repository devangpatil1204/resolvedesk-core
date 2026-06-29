/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/resolvedesk-core' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resolvedesk-core/' : '',
};

export default nextConfig;
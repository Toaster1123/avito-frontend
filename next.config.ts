import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cataas.com', 'www.avito.st'],
  },
};

export default nextConfig;

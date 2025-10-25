import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Partial Prerendering (PPR) is disabled for production deployment
    // Uncomment the line below to enable it in development with Next.js canary
    // ppr: 'incremental',
  },
};

export default nextConfig;

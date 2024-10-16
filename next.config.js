/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: '/Lamiiine.github.io',
  assetPrefix: '/Lamiiine.github.io',
};

module.exports = nextConfig;
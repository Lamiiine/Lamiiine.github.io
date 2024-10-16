const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static export
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: '/Lamiiine.github.io', // Replace with your repository name if using GitHub Pages
  assetPrefix: '/Lamiiine.github.io', // Replace with your repository name
};

module.exports = withContentlayer(nextConfig);

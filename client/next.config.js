/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;

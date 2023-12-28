const { withLogtail } = require('@logtail/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  }
};

module.exports = nextConfig;

module.exports = withLogtail(nextConfig);

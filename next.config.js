/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/overview",
        },
      ],
    };
  },
};

module.exports = nextConfig;

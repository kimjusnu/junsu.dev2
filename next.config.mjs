/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/junsu.dev2",
  assetPrefix: "/junsu.dev2/",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

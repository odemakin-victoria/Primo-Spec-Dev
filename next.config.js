/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fedskillstest.ct.digital"],
    unoptimized: true, // allows static export to work with next/image

  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TS errors during build
  },
	eslint: {
    ignoreDuringBuilds: true, // ✅ Skip ESLint errors during build
  },
	output: 'standalone',
	assetPrefix: "./",
  basePath: "",
};

module.exports = nextConfig;

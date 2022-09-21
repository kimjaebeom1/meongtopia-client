/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  historyApiFallback: true,
  generateBuildId: () => "meongtopia",
};

module.exports = nextConfig;

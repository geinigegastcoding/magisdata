/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    inlineCss: true
  },
  reactStrictMode: true
};

export default nextConfig;

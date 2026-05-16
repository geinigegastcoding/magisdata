/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.magisdata.nl"
          }
        ],
        destination: "https://magisdata.nl/:path*",
        permanent: true
      },
      {
        source: "/webontwikkeling",
        destination: "/website-laten-maken",
        permanent: true
      },
      {
        source: "/seo",
        destination: "/seo-services",
        permanent: true
      },
      {
        source: "/over-magisdata",
        destination: "/about",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_PATH: process.env.API_PATH || "http://127.0.0.1:8084",
    PANEL_URL: process.env.PANEL_URL || "http://127.0.0.1:3002",
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return [
      { source: "/dashboard", destination: process.env.PANEL_URL || "http://127.0.0.1:3002", permanent: false },
      { source: "/docs", destination: "/blog", permanent: true },
    ];
  },
};

module.exports = nextConfig;

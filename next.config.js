/** @type {import('next').NextConfig} */
const nextConfig = {
  env : {
    API_PATH : 'http://127.0.0.1:8083'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextuipro.nyc3.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**/**',
        search: '',
      },
    ],
  },
};

module.exports = nextConfig;

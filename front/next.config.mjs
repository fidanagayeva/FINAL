/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      domains: ['plnts.com', 'plnts-api.ams3.digitaloceanspaces.com'],
  },
};

export default nextConfig;

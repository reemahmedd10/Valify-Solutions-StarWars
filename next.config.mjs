/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'starwars-visualguide.com',
        pathname: '/assets/img/**',
      },
    ],
  },
};

export default nextConfig;


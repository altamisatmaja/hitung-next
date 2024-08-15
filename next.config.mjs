/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saceternity.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "avataaars.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

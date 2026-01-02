import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["is1-ssl.mzstatic.com", "play-lh.googleusercontent.com", "img1.wsimg.com"],
    remotePatterns: [
      { protocol: "https", hostname: "is1-ssl.mzstatic.com" },
      { protocol: "https", hostname: "play-lh.googleusercontent.com" },
      { protocol: "https", hostname: "img1.wsimg.com" },
    ],
  },
};

export default nextConfig;

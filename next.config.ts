import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false, // Nonaktifkan ikon build activity
  },
};

export default nextConfig;

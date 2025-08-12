import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // désactive ESLint lors du build
  },
};

export default nextConfig;

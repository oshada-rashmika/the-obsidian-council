import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  cacheComponents: true,
  experimental: {
    ppr: true,
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;

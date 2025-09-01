import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: '/genesis',
  assetPrefix: '/genesis/',
  trailingSlash: true,
};

export default nextConfig;

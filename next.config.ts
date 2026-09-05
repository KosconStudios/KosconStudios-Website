import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/KosconStudios-Website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
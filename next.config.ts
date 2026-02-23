import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables the "out" folder
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "happy.techstrota.com",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;

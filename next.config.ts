import { output } from "framer-motion/client";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;

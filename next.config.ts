import { output } from "framer-motion/client";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.techstrota.com",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;

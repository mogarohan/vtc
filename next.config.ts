const nextConfig = {
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

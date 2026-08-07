import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow mobile / other devices on your LAN to load dev JS + HMR (Next.js 16+).
  // Update the IP if your machine gets a different address on the network.
  allowedDevOrigins: ["192.168.55.210", "localhost", "127.0.0.1"],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Next.js to optimize images served from these external hosts.
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "media.craiyon.com" },
    ],
  },
  // Strip console.* calls from the production build (keeps warnings/errors).
  compiler: {
    removeConsole: { exclude: ["error", "warn"] },
  },
};

export default nextConfig;

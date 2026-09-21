import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The technology logos in /public/logos are static, trusted SVGs we ship
    // ourselves. CSP below keeps them inert regardless.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  /* config options here */
};

export default nextConfig;

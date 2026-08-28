/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    // Placeholder project imagery ships as locally-generated SVGs until real
    // photography/screenshots are supplied — safe to optimize since they're
    // authored by this repo's own script, not user-uploaded content.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["reinisvaravs.com"],
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  devIndicators: false,
};

export default nextConfig;

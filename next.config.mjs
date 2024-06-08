/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "llanoplast.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

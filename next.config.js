/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.app.goo.gl",
      "lh3.googleusercontent.com",
      "imgur.com",
      "www.w3schools.com",
      "variety.com",
    ],
  },
};

module.exports = nextConfig;

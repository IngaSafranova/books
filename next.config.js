/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/b/isbn/**",
      },
      {
        protocol: "http",
        hostname: "googleapis.com",
        port: "",
        pathname: "/books/v1/volumes/**",
      },
      {
        protocol: 'http',
        hostname: 'books.google.com',
        port: '',
        pathname: '/books/**'
      }
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;

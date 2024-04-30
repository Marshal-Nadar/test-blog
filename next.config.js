/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  trailingSlash: true,
};

module.exports = nextConfig;

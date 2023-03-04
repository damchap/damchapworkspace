/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['@damchap/ui'],
  }
}

module.exports = nextConfig

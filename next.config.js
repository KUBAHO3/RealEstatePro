/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains:['images.pexels.com','bayut-production.s3.eu-central-1.amazonaws.com']
  }
}

module.exports = nextConfig

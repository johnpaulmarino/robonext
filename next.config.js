/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  env: {
    GATSBY_PAGE: process.env.GATSBY_PAGE,
  }
}


module.exports = nextConfig;

//const withOptimizedImages = require('next-optimized-images')
//module.exports.withOptimizedImages = withOptimizedImages({})
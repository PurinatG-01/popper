/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    appEnv: process.env.APP_ENV,
    apiUrl: process.env.API_URL,
  },
}

module.exports = nextConfig

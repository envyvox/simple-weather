/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEATHER_API_URL: process.env.WEATHER_API_URL,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
};

module.exports = nextConfig;

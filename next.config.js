/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['scontent-bcn1-1.cdninstagram.com'],
  },
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig

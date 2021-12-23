/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['frymburk.com', 'www.frymburk.com', 'localhost'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/prehled',
        permanent: true,
      },
    ]
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

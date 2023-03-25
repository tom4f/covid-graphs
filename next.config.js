/** @type {import('next').NextConfig} */
const path = require('path')
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
  compiler: {
    //Enables the styled-components SWC transform
    styledComponents: true
  },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  async redirects() {
    return [
      {
        source: '/signin',
        destination: 'http://gempakhub.com/web/#/login.html',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;


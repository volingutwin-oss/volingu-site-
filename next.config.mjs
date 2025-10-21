/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Оптимизация производительности
  compress: true, // Включить сжатие gzip
  poweredByHeader: false, // Убрать X-Powered-By header
  reactStrictMode: true, // Строгий режим React для выявления проблем
  swcMinify: true, // Использовать SWC для минификации (быстрее)
}

export default nextConfig

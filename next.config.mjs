/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Оптимизация производительности
  compress: true, // Включить сжатие gzip
  poweredByHeader: false, // Убрать X-Powered-By header
  reactStrictMode: true, // Строгий режим React для выявления проблем
  swcMinify: true, // Использовать SWC для минификации (быстрее)
  
  // Дополнительные оптимизации
  experimental: {
    optimizeCss: true, // Оптимизация CSS
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'], // Оптимизация импортов
  },
  
  // Оптимизация изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Настройки для продакшена
  output: 'standalone',
  trailingSlash: false,
  
  // Исправление проблем с ресурсами
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  generateEtags: false,
  poweredByHeader: false,
  
  // Оптимизация сборки
  webpack: (config, { isServer }) => {
    // Оптимизация для клиентской стороны
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    // Оптимизация бандла
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }
    
    return config
  },
}

export default nextConfig

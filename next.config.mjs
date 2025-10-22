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

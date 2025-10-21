"use client"

import { useState } from "react"
import { BlogCard } from "./blog-card"

interface Article {
  id: number
  title: string
  description: string
  category: string
  date: string
  readTime: string
  icon: string
  gradient: string
  href?: string
}

interface ArticlesCarouselProps {
  articles: Article[]
}

export function ArticlesCarousel({ articles }: ArticlesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const articlesPerView = 1 // Показываем 1 статью одновременно для лучшей видимости
  const maxIndex = Math.max(0, articles.length - articlesPerView)

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  return (
    <div style={{ 
      position: 'relative',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      borderRadius: '2rem',
      padding: '2rem',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      border: '1px solid rgba(255,255,255,0.2)'
    }}>
      {/* Carousel Container */}
      <div style={{ 
        overflow: 'hidden',
        borderRadius: '1.5rem',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out'
        }}>
          {articles.map((article, index) => (
            <div 
              key={article.id}
              style={{
                minWidth: '100%',
                flex: '0 0 100%'
              }}
            >
              <BlogCard
                title={article.title}
                description={article.description}
                category={article.category}
                date={article.date}
                readTime={article.readTime}
                icon={article.icon}
                gradient={article.gradient}
                href={article.href}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        style={{
          position: 'absolute',
          left: '-60px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: 'none',
          background: currentIndex === 0 
            ? 'rgba(107, 114, 128, 0.3)' 
            : 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
          color: 'white',
          cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: currentIndex === 0 
            ? 'none' 
            : '0 4px 15px rgba(139, 92, 246, 0.3)',
          opacity: currentIndex === 0 ? 0.5 : 1
        }}
        onMouseEnter={(e) => {
          if (currentIndex !== 0) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)'
          }
        }}
        onMouseLeave={(e) => {
          if (currentIndex !== 0) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)'
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)'
          }
        }}
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
        style={{
          position: 'absolute',
          right: '-60px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: 'none',
          background: currentIndex >= maxIndex 
            ? 'rgba(107, 114, 128, 0.3)' 
            : 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
          color: 'white',
          cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: currentIndex >= maxIndex 
            ? 'none' 
            : '0 4px 15px rgba(139, 92, 246, 0.3)',
          opacity: currentIndex >= maxIndex ? 0.5 : 1
        }}
        onMouseEnter={(e) => {
          if (currentIndex < maxIndex) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)'
          }
        }}
        onMouseLeave={(e) => {
          if (currentIndex < maxIndex) {
            e.currentTarget.style.background = 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)'
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)'
          }
        }}
      >
        →
      </button>

      {/* Dots Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '2rem'
      }}>
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentIndex 
                ? 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)' 
                : '#d1d5db',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: index === currentIndex 
                ? '0 2px 8px rgba(139, 92, 246, 0.4)' 
                : 'none'
            }}
            onMouseEnter={(e) => {
              if (index !== currentIndex) {
                e.currentTarget.style.background = '#9ca3af'
                e.currentTarget.style.transform = 'scale(1.2)'
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentIndex) {
                e.currentTarget.style.background = '#d1d5db'
                e.currentTarget.style.transform = 'scale(1)'
              }
            }}
          />
        ))}
      </div>

      {/* Mobile Navigation (Touch) */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '1.5rem'
      }}>
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            border: 'none',
            background: currentIndex === 0 
              ? 'rgba(107, 114, 128, 0.3)' 
              : 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
            color: 'white',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            fontSize: '0.875rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            opacity: currentIndex === 0 ? 0.5 : 1
          }}
        >
          ← Назад
        </button>
        
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            border: 'none',
            background: currentIndex >= maxIndex 
              ? 'rgba(107, 114, 128, 0.3)' 
              : 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
            color: 'white',
            cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
            fontSize: '0.875rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            opacity: currentIndex >= maxIndex ? 0.5 : 1
          }}
        >
          Далее →
        </button>
      </div>
    </div>
  )
}

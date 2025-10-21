"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp, SlideInLeft } from "@/components/scroll-animations"
import { BlogCard } from "@/components/blog-card"
import { ArticlesCarousel } from "@/components/articles-carousel"
import { Footer } from "@/components/footer"
import { useState } from "react"

const blogArticles = [
  {
    id: 1,
    title: "ChatGPT для бизнеса: полное руководство",
    description: "Как правильно использовать ChatGPT в бизнесе, какие задачи можно автоматизировать и как избежать типичных ошибок.",
    category: "ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ",
    date: "12 декабря 2025",
    readTime: "6 мин чтения",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)",
    href: "/blog/chatgpt-dlya-biznesa"
  },
  {
    id: 2,
    title: "Голосовые роботы vs живые операторы",
    description: "Сравниваем эффективность голосовых роботов и живых операторов. Когда стоит использовать автоматизацию, а когда лучше оставить человека.",
    category: "ГОЛОСОВЫЕ БОТЫ",
    date: "10 декабря 2025",
    readTime: "5 мин чтения",
    icon: "📞",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
    href: "/blog/golosovye-roboty-vs-operatory"
  },
  {
    id: 3,
    title: "Топ-5 мессенджеров для бизнеса в 2025",
    description: "Анализируем популярные мессенджеры и их возможности для бизнеса. В каких каналах лучше всего размещать чат-ботов.",
    category: "ЧАТ-БОТЫ",
    date: "8 декабря 2025",
    readTime: "7 мин чтения",
    icon: "💬",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)",
    href: "/blog/top-5-messendzherov"
  },
  {
    id: 4,
    title: "Персонализация email-рассылок с AI",
    description: "Как искусственный интеллект помогает создавать персонализированные email-кампании и увеличивать конверсию в 3 раза.",
    category: "EMAIL-МАРКЕТИНГ",
    date: "5 декабря 2025",
    readTime: "9 мин чтения",
    icon: "📧",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)",
    href: "/blog/personalizatsiya-email"
  },
  {
    id: 5,
    title: "Как увеличить конверсию сайта на 40%",
    description: "Практические советы по оптимизации конверсии сайта с помощью виджетов, чат-ботов и других инструментов автоматизации.",
    category: "КОНВЕРСИЯ",
    date: "3 декабря 2025",
    readTime: "6 мин чтения",
    icon: "🎯",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)",
    href: "/blog/uvelichenie-konversii"
  },
  {
    id: 6,
    title: "ROI автоматизации: как считать правильно",
    description: "Подробный гайд по расчету возврата инвестиций в автоматизацию. Какие метрики учитывать и как избежать ошибок в расчетах.",
    category: "ROI",
    date: "1 декабря 2025",
    readTime: "8 мин чтения",
    icon: "💰",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)",
    href: "/blog/roi-avtomatizatsii"
  }
]

export default function BlogPage() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{
        padding: '8rem 1rem 4rem',
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Декоративные элементы */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '180px',
          height: '180px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1.5rem',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                lineHeight: '1.2'
              }}>
                БЛОГ VOLINGU
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '700px',
                margin: '0 auto',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                lineHeight: '1.6'
              }}>
                Полезные статьи об автоматизации бизнеса, искусственном интеллекте и современных технологиях для роста вашей компании
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
                РЕКОМЕНДУЕМАЯ СТАТЬЯ
              </h2>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                Самая популярная статья этого месяца
              </p>
            </div>
          </FadeIn>

          <SlideInUp delay={0.2}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
              borderRadius: '2rem',
              padding: '3rem',
              boxShadow: '0 25px 50px rgba(107, 70, 193, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 35px 70px rgba(107, 70, 193, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(107, 70, 193, 0.15)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <div style={{
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                    color: '#6b46c1',
                    padding: '0.5rem 1rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    display: 'inline-block'
                  }}>
                    АВТОМАТИЗАЦИЯ БИЗНЕСА
                  </div>
                  <h3 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                    Как нейросотрудники увеличивают продажи на 85%
                  </h3>
                  <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1.1rem' }}>
                    Реальные кейсы наших клиентов и конкретные цифры роста продаж после внедрения AI-ассистентов. Узнайте, как автоматизация коммуникаций может кардинально изменить ваш бизнес.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ color: '#8b5cf6', fontSize: '0.875rem', fontWeight: '500' }}>15 декабря 2025</div>
                    <div style={{ color: '#d1d5db', fontSize: '0.875rem' }}>•</div>
                    <div style={{ color: '#8b5cf6', fontSize: '0.875rem', fontWeight: '500' }}>8 мин чтения</div>
                  </div>
                  <button 
                    onClick={() => window.location.href = '/blog/chatgpt-dlya-biznesa'}
                    style={{
                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
                      color: 'white',
                      padding: '1rem 2.5rem',
                      borderRadius: '1.5rem',
                      border: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4), 0 4px 15px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(34, 197, 94, 0.5), 0 8px 25px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)'
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4), 0 4px 15px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}>
                    ЧИТАТЬ СТАТЬЮ
                  </button>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '250px',
                    height: '200px',
                    background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)',
                    borderRadius: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '4rem',
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-50%',
                      width: '100%',
                      height: '100%',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      filter: 'blur(20px)'
                    }}></div>
                    <span style={{ position: 'relative', zIndex: 1 }}>📈</span>
                  </div>
                </div>
              </div>
            </div>
          </SlideInUp>
        </div>
      </section>

      {/* Articles Carousel */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
                ВСЕ СТАТЬИ
              </h2>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                Экспертные материалы о современных технологиях автоматизации
              </p>
            </div>
          </FadeIn>

          <ArticlesCarousel articles={blogArticles} />
        </div>
      </section>


      <Footer />
    </div>
  )
}


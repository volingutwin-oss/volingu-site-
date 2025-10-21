"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp } from "@/components/scroll-animations"
import { MissionCard } from "@/components/mission-card"
import { StatCard } from "@/components/stat-card"
import { ValueCard } from "@/components/value-card"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '1.5rem',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}>
              О компании Volingu
          </h1>
            <p style={{ 
              fontSize: '1.5rem', 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: '2rem', 
              maxWidth: '700px', 
              margin: '0 auto 2rem auto',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
            Мы создаем умных нейросотрудников для автоматизации бизнес-процессов
          </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
              Наша миссия
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
              Помогаем бизнесу расти быстрее, автоматизируя рутинные задачи с помощью искусственного интеллекта
            </p>
          </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <MissionCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
              }
              title="Фокус на результате"
              description="Каждое решение направлено на увеличение прибыли и снижение затрат клиента"
              delay={0}
            />

            <MissionCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                </svg>
              }
              title="Инновации"
              description="Используем самые передовые технологии AI для решения бизнес-задач"
              delay={100}
            />

            <MissionCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
              title="Партнерство"
              description="Работаем как надежный партнер, а не просто поставщик услуг"
              delay={200}
            />
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
              Наши достижения
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Цифры, которые говорят сами за себя
            </p>
          </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <StatCard
              number="500+"
              label="Довольных клиентов"
              color="#667eea"
              delay={0}
            />

            <StatCard
              number="1000+"
              label="Нейросотрудников создано"
              color="#667eea"
              delay={100}
            />

            <StatCard
              number="85%"
              label="Средний рост продаж"
              color="#667eea"
              delay={200}
            />

            <StatCard
              number="24/7"
              label="Работа без перерывов"
              color="#667eea"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '6rem 1rem', background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
              Наши ценности
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          </FadeIn>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '300px' }}>
              <ValueCard
                title="Качество"
                description="Мы не идем на компромиссы в качестве наших решений. Каждый нейросотрудник проходит тщательное тестирование."
                delay={0}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '300px' }}>
              <ValueCard
                title="Надежность"
                description="Наши системы работают стабильно 24/7. Мы гарантируем 99.9% времени доступности."
                delay={100}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '300px' }}>
              <ValueCard
                title="Прозрачность"
                description="Мы всегда честны с клиентами и предоставляем полную информацию о работе наших решений."
                delay={200}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '300px' }}>
              <ValueCard
                title="Инновации"
                description="Мы постоянно изучаем новые технологии и внедряем их в наши решения для максимальной эффективности."
                delay={300}
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
            Готовы работать с нами?
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
            Свяжитесь с нами и узнайте, как мы можем помочь вашему бизнесу
          </p>
            <a href="/contact" style={{ 
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              color: 'white', 
              padding: '1rem 2rem', 
              border: 'none', 
              borderRadius: '0.5rem', 
              fontSize: '1.125rem', 
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)'
            }}>
            Связаться с нами
          </a>
          </FadeIn>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


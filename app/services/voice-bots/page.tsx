"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInLeft, SlideInUp } from "@/components/scroll-animations"
import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"

export default function VoiceBotsPage() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: 'rotate(15deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          left: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: 'rotate(-15deg)'
        }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <FadeIn >
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem auto',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                background: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: '#3b82f6'
              }}>
                🎤
              </div>
            </div>
          </FadeIn>

          <FadeIn >
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Голосовые роботы
            </h1>
          </FadeIn>

          <FadeIn >
            <p style={{ 
              fontSize: '1.5rem', 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '2rem', 
              maxWidth: '700px', 
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}>
              Умные голосовые ассистенты, которые обрабатывают звонки 24/7 с естественным голосом
            </p>
          </FadeIn>

          <FadeIn >
            <a href="/contact" style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '0.75rem',
              fontSize: '1.125rem',
              textDecoration: 'none',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
              transition: 'all 0.2s',
              display: 'inline-block'
            }}>
              Заказать голосового робота
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Возможности голосовых роботов
            </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Полная автоматизация телефонных коммуникаций
            </p>
          </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>}
              title="Квалификация лидов"
              description="Автоматически определяет заинтересованность клиента и передает горячие лиды менеджерам"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={0}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>}
              title="Запись на услуги"
              description="Автоматически записывает клиентов на консультации, встречи и услуги"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={100}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>}
              title="Естественное общение"
              description="Говорит естественным голосом, понимает контекст и отвечает на любые вопросы"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={200}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>}
              title="Аналитика звонков"
              description="Детальная статистика по всем звонкам и конверсии в заявки"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={300}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>}
              title="Интеграция с CRM"
              description="Автоматически сохраняет данные клиентов в вашу CRM-систему"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={400}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H9V5H7v7H5V5H3v7H1v2h2v7h2v-7h2v7h2v-7h2v7h2v-7h2v7h2v-7h2v-2z"/></svg>}
              title="Мгновенный ответ"
              description="Отвечает на звонки мгновенно, без ожидания и очередей"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Как это работает
            </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Простой процесс внедрения голосового робота
              </p>
          </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Анализ бизнеса
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Изучаем ваши бизнес-процессы и определяем сценарии общения
                </p>
              </div>
            </SlideInUp>

            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Настройка робота
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Создаем персонализированного робота с вашим голосом и знаниями
                </p>
              </div>
            </SlideInUp>

            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Тестирование
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Проводим тестовые звонки и настраиваем робота под ваши задачи
                </p>
              </div>
            </SlideInUp>

            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                }}>
                  4
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Запуск
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Подключаем робота к вашей телефонии и начинаем работу
                </p>
              </div>
            </SlideInUp>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ 
          padding: '8rem 1rem 6rem 1rem', 
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FadeIn >
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                marginBottom: '1.5rem' 
              }}>
                Готовы автоматизировать звонки?
            </h2>
            </FadeIn>
            
            <FadeIn >
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#6b7280', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Получите бесплатную консультацию и узнайте, как голосовой робот увеличит ваши продажи
              </p>
            </FadeIn>
          
          <FadeIn >
            <a href="/contact" style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '0.75rem',
              fontSize: '1.125rem',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
              transition: 'all 0.2s'
            }}>
              Заказать консультацию
            </a>
          </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
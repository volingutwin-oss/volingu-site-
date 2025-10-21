"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInLeft, SlideInUp } from "@/components/scroll-animations"
import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { DashboardFeatureCard } from "@/components/dashboard-feature-card"

export default function OperatorPanelPage() {
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
                color: '#667eea'
              }}>
                🎛️
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
              Панель оператора
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
              Единая панель для управления всеми каналами коммуникации
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
              Заказать панель
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
                Возможности панели оператора
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Все каналы коммуникации в одном месте
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>}
              title="Звонки"
              description="Управление входящими и исходящими звонками с записью разговоров"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={0}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>}
              title="Мессенджеры"
              description="Общение в Telegram, WhatsApp, Viber и других мессенджерах"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={100}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>}
              title="Email"
              description="Обработка писем с автоматической сортировкой и приоритизацией"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={200}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>}
              title="Сайт-чат"
              description="Общение с посетителями сайта через встроенный чат"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={300}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>}
              title="Аналитика"
              description="Детальная статистика по всем каналам коммуникации"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={400}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5 12.01 8.99A2.5 2.5 0 0 0 10 8H8.46c-.8 0-1.54.37-2.01.99L4 10.5V22h2v-6h2.5l2.5-7.5h2l2.5 7.5H18v6h2zM7.5 14c-.83 0-1.5-.67-1.5-1.5S6.67 11 7.5 11s1.5.67 1.5 1.5S8.33 14 7.5 14z"/></svg>}
              title="Команда"
              description="Управление операторами, распределение задач и контроль качества"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
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
                Что видит оператор
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Удобный интерфейс для эффективной работы
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <DashboardFeatureCard
              title="Единая лента"
              description="Все обращения из разных каналов в хронологическом порядке"
              benefit="Экономия времени: до 40%"
              delay={0}
            />

            <DashboardFeatureCard
              title="История клиента"
              description="Полная история всех взаимодействий с клиентом в одном окне"
              benefit="Повышение качества: до 60%"
              delay={100}
            />

            <DashboardFeatureCard
              title="Быстрые ответы"
              description="Готовые шаблоны ответов для типовых вопросов"
              benefit="Скорость ответа: до 3x"
              delay={200}
            />

            <DashboardFeatureCard
              title="Приоритизация"
              description="Автоматическое определение важности обращения"
              benefit="Снижение потерь: до 80%"
              delay={300}
            />

            <DashboardFeatureCard
              title="Передача задач"
              description="Легкая передача сложных вопросов специалистам"
              benefit="Эффективность: до 50%"
              delay={400}
            />

            <DashboardFeatureCard
              title="Мобильная версия"
              description="Работа с панелью с любого устройства"
              benefit="Доступность: 24/7"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Management Features */}
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
                Управление командой
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Инструменты для руководителей и менеджеров
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
                  boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  KPI операторов
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Отслеживание показателей каждого оператора в реальном времени
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
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Распределение нагрузки
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Автоматическое распределение обращений между операторами
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
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Аналитика команды
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Детальные отчеты по работе команды и качеству обслуживания
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
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Контроль качества
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Прослушивание записей и оценка качества обслуживания
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
                Готовы оптимизировать работу команды?
              </h2>
            </FadeIn>
            
            <FadeIn >
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#6b7280', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Получите бесплатную консультацию и узнайте, как панель оператора повысит эффективность
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
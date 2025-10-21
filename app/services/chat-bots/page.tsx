"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInLeft, SlideInUp } from "@/components/scroll-animations"
import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"

export default function ChatBotsPage() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
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
                color: '#10b981'
              }}>
                💬
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
              Чат-боты для мессенджеров
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
              Умные боты для Telegram, WhatsApp, Viber и других мессенджеров
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
              Заказать чат-бота
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
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Возможности чат-ботов
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Полная автоматизация общения в мессенджерах
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>}
              title="Мультиплатформенность"
              description="Работает в Telegram, WhatsApp, Viber, Facebook Messenger и других мессенджерах"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={0}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h1v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6h1c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H7zm2 2h6v8H9V6z"/></svg>}
              title="Продажи в чате"
              description="Принимает заказы, обрабатывает платежи и оформляет покупки прямо в мессенджере"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={100}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>}
              title="Сбор заявок"
              description="Автоматически собирает и обрабатывает заявки от клиентов"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={200}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
              title="Персонализация"
              description="Запоминает предпочтения клиентов и предлагает персональные решения"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={300}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>}
              title="Аналитика"
              description="Детальная статистика по всем диалогам и конверсии в продажи"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={400}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
              title="Интеграции"
              description="Подключается к CRM, платежным системам и другим сервисам"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Поддерживаемые платформы
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Ваши клиенты могут общаться с ботом в удобном мессенджере
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <SlideInUp >
              <div style={{
                textAlign: 'center',
                padding: '2.5rem',
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s',
                cursor: 'pointer',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '10rem',
                  height: '10rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '2rem',
                  color: 'white'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                  Telegram
                </h3>
              </div>
            </SlideInUp>

            <SlideInUp >
              <div style={{
                textAlign: 'center',
                padding: '2.5rem',
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s',
                cursor: 'pointer',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '10rem',
                  height: '10rem',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '2rem',
                  color: 'white'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                  WhatsApp
                </h3>
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
                Готовы автоматизировать общение?
              </h2>
            </FadeIn>
            
            <FadeIn >
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#6b7280', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Получите бесплатную консультацию и узнайте, как чат-бот увеличит ваши продажи
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
"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInLeft, SlideInUp } from "@/components/scroll-animations"
import { ServiceCard } from "@/components/service-card"

export default function ChatBotsPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
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
              icon="💬"
              title="Мультиплатформенность"
              description="Работает в Telegram, WhatsApp, Viber, Facebook Messenger и других мессенджерах"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={0}
            />
            <ServiceCard
              icon="🛒"
              title="Продажи в чате"
              description="Принимает заказы, обрабатывает платежи и оформляет покупки прямо в мессенджере"
              gradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
              delay={100}
            />
            <ServiceCard
              icon="📋"
              title="Сбор заявок"
              description="Автоматически собирает и обрабатывает заявки от клиентов"
              gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
              delay={200}
            />
            <ServiceCard
              icon="🎯"
              title="Персонализация"
              description="Запоминает предпочтения клиентов и предлагает персональные решения"
              gradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
              delay={300}
            />
            <ServiceCard
              icon="📊"
              title="Аналитика"
              description="Детальная статистика по всем диалогам и конверсии в продажи"
              gradient="linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
              delay={400}
            />
            <ServiceCard
              icon="🔄"
              title="Интеграции"
              description="Подключается к CRM, платежным системам и другим сервисам"
              gradient="linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
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
                cursor: 'pointer'
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
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  📱
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                  Telegram
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Самый популярный мессенджер в России
                </p>
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
                cursor: 'pointer'
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
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  💬
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                  WhatsApp
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Международный стандарт общения
                </p>
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
                cursor: 'pointer'
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
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  📞
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                  Viber
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Популярен в странах СНГ
                </p>
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
                cursor: 'pointer'
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
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white'
                }}>
                  📘
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                  Facebook Messenger
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Интеграция с социальными сетями
                </p>
              </div>
            </SlideInUp>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn >
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
              Стоимость чат-бота
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem' }}>
              От 10 000 рублей в месяц за неограниченное количество сообщений
            </p>
          </FadeIn>
          
          <SlideInUp >
            <div style={{
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              padding: '3rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111827' }}>
                Что входит в стоимость:
              </h3>
              <div style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Настройка и обучение бота</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Подключение к мессенджерам</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Неограниченные сообщения</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Интеграция с CRM</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Аналитика и отчеты</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Техническая поддержка 24/7</span>
                </div>
              </div>
            </div>
          </SlideInUp>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '6rem 1rem', 
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          transform: 'rotate(15deg)'
        }}></div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <FadeIn >
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '1.5rem' 
            }}>
              Готовы автоматизировать общение?
            </h2>
          </FadeIn>
          
          <FadeIn >
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
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
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: 'white', padding: '4rem 1rem 2rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>NeuroStaff</div>
          </FadeIn>
          <FadeIn >
            <p style={{ color: '#9ca3af', marginBottom: '2rem', fontSize: '1.125rem' }}>Нейросотрудники для вашего бизнеса</p>
          </FadeIn>
          <FadeIn >
            <p style={{ color: '#6b7280', fontSize: '0.875rem', borderTop: '1px solid #374151', paddingTop: '1rem' }}>
              © 2024 NeuroStaff. Все права защищены.
            </p>
          </FadeIn>
        </div>
      </footer>
    </div>
  )
}
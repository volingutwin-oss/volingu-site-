"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInLeft, SlideInUp } from "@/components/scroll-animations"
import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { CampaignCard } from "@/components/campaign-card"

export default function EmailMarketingPage() {
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
                color: '#8b5cf6'
              }}>
                📧
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
              Автоматические рассылки
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
              Умные email-кампании с персонализацией и автоматизацией
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
              Заказать рассылки
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
                Возможности автоматических рассылок
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Персонализированные email-кампании с AI
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
              title="Персонализация"
              description="Каждое письмо адаптируется под интересы и поведение конкретного клиента"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={0}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>}
              title="Автоматизация"
              description="Отправка писем по триггерам: день рождения, покупка, отказ от корзины"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={100}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>}
              title="A/B тестирование"
              description="Автоматическое тестирование разных версий писем для максимальной конверсии"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={200}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>}
              title="Аналитика"
              description="Детальная статистика по открытиям, кликам и конверсии в продажи"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={300}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
              title="Красивый дизайн"
              description="Адаптивные шаблоны писем, которые отлично выглядят на всех устройствах"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={400}
            />
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>}
              title="Интеграции"
              description="Подключение к CRM, интернет-магазинам и другим сервисам"
              gradient="linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Campaign Types */}
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
                Типы рассылок
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Различные сценарии для разных этапов воронки продаж
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <CampaignCard
              title="Welcome-серия"
              description="Приветственные письма для новых подписчиков с информацией о компании и продуктах"
              metric="Конверсия: до 25%"
              delay={0}
            />

            <CampaignCard
              title="Реактивация"
              description="Возвращение 'спящих' клиентов с персональными предложениями"
              metric="Конверсия: до 15%"
              delay={100}
            />

            <CampaignCard
              title="Повторные продажи"
              description="Предложения дополнительных товаров и услуг существующим клиентам"
              metric="Конверсия: до 30%"
              delay={200}
            />

            <CampaignCard
              title="Акции и скидки"
              description="Уведомления о специальных предложениях и ограниченных акциях"
              metric="Конверсия: до 40%"
              delay={300}
            />

            <CampaignCard
              title="Образовательный контент"
              description="Полезные статьи и советы для повышения лояльности клиентов"
              metric="Открываемость: до 35%"
              delay={400}
            />

            <CampaignCard
              title="День рождения"
              description="Персональные поздравления с подарками и специальными предложениями"
              metric="Конверсия: до 50%"
              delay={500}
            />
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
                Готовы увеличить продажи через email?
              </h2>
            </FadeIn>
            
            <FadeIn >
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#6b7280', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Получите бесплатную консультацию и узнайте, как автоматические рассылки увеличат ваши продажи
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
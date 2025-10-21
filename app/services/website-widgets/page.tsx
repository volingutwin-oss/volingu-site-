"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInLeft, SlideInUp } from "@/components/scroll-animations"
import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { WidgetTypeCard } from "@/components/widget-type-card"

export default function WebsiteWidgetsPage() {
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
                🌐
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
              Виджеты для сайта
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
              GPT-боты консультируют и превращают посетителей в клиентов
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
              Заказать виджет
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
                Возможности виджетов
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Умные помощники прямо на вашем сайте
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>}
              title="Онлайн-консультант"
              description="Мгновенные ответы на вопросы посетителей сайта 24/7"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={0}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
              title="Квалификация лидов"
              description="Автоматически определяет заинтересованность и собирает контакты"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={100}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h1v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V6h1c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H7zm2 2h6v8H9V6z"/></svg>}
              title="Продажи в чате"
              description="Помогает выбрать товары и оформляет заказы прямо в виджете"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={200}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>}
              title="Запись на услуги"
              description="Автоматически записывает клиентов на консультации и встречи"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={300}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>}
              title="Кастомизация"
              description="Настраивается под дизайн вашего сайта и корпоративный стиль"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={400}
            />

            <ServiceCard
              icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>}
              title="Аналитика"
              description="Детальная статистика по диалогам и конверсии в заявки"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Widget Types */}
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
                Типы виджетов
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Различные варианты для разных типов сайтов
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <WidgetTypeCard
              title="Чат-виджет"
              description="Классический виджет в углу экрана для быстрого общения с посетителями"
              tag="Подходит для: любых сайтов"
              delay={0}
            />

            <WidgetTypeCard
              title="Поп-ап помощник"
              description="Всплывающее окно с предложением помощи при определенных действиях"
              tag="Подходит для: интернет-магазинов"
              delay={100}
            />

            <WidgetTypeCard
              title="Встроенный бот"
              description="Полноценная страница с ботом, интегрированная в структуру сайта"
              tag="Подходит для: лендингов"
              delay={200}
            />

            <WidgetTypeCard
              title="Кнопка обратного звонка"
              description="Простая кнопка для сбора заявок на обратный звонок"
              tag="Подходит для: корпоративных сайтов"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Integration */}
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
                Простая интеграция
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Установка виджета займет всего несколько минут
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Получите код
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  После настройки виджета вы получите готовый код для вставки
                </p>
              </div>
            </SlideInUp>

            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Вставьте на сайт
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Добавьте код в HTML вашего сайта или через админ-панель
                </p>
              </div>
            </SlideInUp>

            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Начните получать заявки
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Виджет сразу начнет работать и собирать заявки от посетителей
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
                Готовы увеличить конверсию сайта?
              </h2>
            </FadeIn>
            
            <FadeIn >
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#6b7280', 
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Получите бесплатную консультацию и узнайте, как виджет увеличит ваши продажи
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
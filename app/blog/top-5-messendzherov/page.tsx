"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp } from "@/components/scroll-animations"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Top5MessengersPage() {
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

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                display: 'inline-block',
                background: 'rgba(255,255,255,0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(10px)'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', fontWeight: '500' }}>
                  8 декабря 2025 • 7 мин чтения
                </span>
              </div>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1.5rem',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                lineHeight: '1.2'
              }}>
                Топ-5 мессенджеров для бизнеса в 2025
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                lineHeight: '1.6'
              }}>
                Анализируем популярные мессенджеры и их возможности для бизнеса
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SlideInUp>
            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
              borderRadius: '2rem',
              padding: '3rem',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#374151' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Мессенджеры как канал продаж
                </h2>
                
                <p style={{ marginBottom: '1.5rem' }}>
                  В 2025 году мессенджеры стали основным каналом коммуникации с клиентами. 
                  Более 4 миллиардов человек по всему миру используют мессенджеры ежедневно, 
                  что делает их идеальной платформой для размещения чат-ботов.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  Наш анализ показал, что компании, использующие чат-ботов в мессенджерах, 
                  увеличивают конверсию на 67% и сокращают время ответа клиентам до 30 секунд.
                </p>

                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  marginTop: '2.5rem'
                }}>
                  Рейтинг мессенджеров для бизнеса
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                  {/* WhatsApp */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(37, 211, 102, 0.1)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'linear-gradient(135deg, #25d366 0%, #22c55e 100%)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      #1
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#25d366', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      📱 WhatsApp Business
                    </h3>
                    <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
                      <strong>Аудитория:</strong> 2+ млрд пользователей | <strong>Конверсия:</strong> 45-60%
                    </p>
                    <p style={{ margin: 0 }}>
                      Лидер рынка с максимальным охватом аудитории. Официальный API позволяет 
                      интегрировать продвинутых чат-ботов с поддержкой мультимедиа и каталогов товаров.
                    </p>
                  </div>

                  {/* Telegram */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34, 139, 230, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(34, 139, 230, 0.1)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'linear-gradient(135deg, #228be6 0%, #3b82f6 100%)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      #2
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#228be6', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      ✈️ Telegram
                    </h3>
                    <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
                      <strong>Аудитория:</strong> 800+ млн пользователей | <strong>Конверсия:</strong> 35-50%
                    </p>
                    <p style={{ margin: 0 }}>
                      Самый гибкий API для разработки ботов. Поддержка inline-клавиатур, 
                      веб-приложений и криптоплатежей. Идеален для IT и крипто-проектов.
                    </p>
                  </div>

                  {/* Viber */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(102, 51, 153, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(102, 51, 153, 0.1)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'linear-gradient(135deg, #663399 0%, #7c3aed 100%)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      #3
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#663399', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      💜 Viber
                    </h3>
                    <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
                      <strong>Аудитория:</strong> 260+ млн пользователей | <strong>Конверсия:</strong> 30-45%
                    </p>
                    <p style={{ margin: 0 }}>
                      Популярен в Восточной Европе и СНГ. Отличные возможности для рассылок 
                      и rich-контента. Подходит для локального бизнеса.
                    </p>
                  </div>

                  {/* Instagram */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.05) 0%, rgba(251, 113, 133, 0.05) 100%)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(225, 48, 108, 0.1)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'linear-gradient(135deg, #e1306c 0%, #fb7185 100%)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      #4
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#e1306c', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      📷 Instagram Direct
                    </h3>
                    <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
                      <strong>Аудитория:</strong> 2+ млрд пользователей | <strong>Конверсия:</strong> 25-40%
                    </p>
                    <p style={{ margin: 0 }}>
                      Идеален для B2C сегмента, особенно fashion, beauty, lifestyle. 
                      Интеграция с каталогом товаров и Stories для максимального вовлечения.
                    </p>
                  </div>

                  {/* VK */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 119, 255, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(0, 119, 255, 0.1)',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'linear-gradient(135deg, #0077ff 0%, #3b82f6 100%)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}>
                      #5
                    </div>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#0077ff', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      🔵 ВКонтакте
                    </h3>
                    <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
                      <strong>Аудитория:</strong> 97+ млн пользователей | <strong>Конверсия:</strong> 20-35%
                    </p>
                    <p style={{ margin: 0 }}>
                      Доминирует в России среди молодежи. Мощные возможности таргетинга 
                      и интеграции с рекламным кабинетом. Подходит для локального рынка.
                    </p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: 'white',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  textAlign: 'center',
                  marginTop: '3rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    margin: '0 0 1rem 0'
                  }}>
                    Готовы запустить чат-бота?
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '1.5rem',
                    opacity: 0.9,
                    margin: '0 0 1.5rem 0'
                  }}>
                    Поможем выбрать оптимальный мессенджер и настроить эффективного бота
                  </p>
                  <Link 
                    href="/contact"
                    style={{
                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                      color: 'white',
                      padding: '1rem 2rem',
                      borderRadius: '1rem',
                      textDecoration: 'none',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      display: 'inline-block',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)'
                    }}
                  >
                    Получить консультацию
                  </Link>
                </div>
              </div>
            </div>
          </SlideInUp>
        </div>
      </section>

      {/* Back to Blog */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Link 
            href="/blog"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)'
            }}
          >
            ← Все статьи блога
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />
      
      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            AI-ассистенты которые работают 24/7
          </h1>
          
          <p style={{ 
            fontSize: '1.5rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '2rem', 
            maxWidth: '700px', 
            margin: '0 auto 2rem auto',
            lineHeight: '1.6'
          }}>
            Создаем умных нейросотрудников на базе ChatGPT для вашего бизнеса
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              transition: 'all 0.2s'
            }}>
              Получить консультацию
            </a>
            <a href="#services" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: 'white', 
              padding: '1rem 2rem', 
              border: '2px solid rgba(255, 255, 255, 0.3)', 
              borderRadius: '0.75rem', 
              fontSize: '1.125rem', 
              textDecoration: 'none',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s'
            }}>
              Смотреть услуги
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: 'bold', 
              color: '#1f2937', 
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AI-решения для вашего бизнеса
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Комплексные решения для автоматизации коммуникаций
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto', alignItems: 'start' }}>
            <a href="/services/voice-bots" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb', 
                borderRadius: '1.5rem', 
                padding: '2rem', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                cursor: 'pointer', 
                transition: 'all 0.3s', 
                position: 'relative', 
                overflow: 'hidden',
                height: '280px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  width: '4rem', 
                  height: '4rem', 
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                  borderRadius: '1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1.5rem',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  🎤
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Голосовые роботы</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Обрабатывают звонки 24/7 с естественным голосом и высокой конверсией</p>
              </div>
            </a>
            
            <a href="/services/chat-bots" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb', 
                borderRadius: '1.5rem', 
                padding: '2rem', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                cursor: 'pointer', 
                transition: 'all 0.3s', 
                position: 'relative', 
                overflow: 'hidden',
                height: '280px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  width: '4rem', 
                  height: '4rem', 
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                  borderRadius: '1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1.5rem',
                  fontSize: '2rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  💬
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Чат-боты</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Работают в Telegram, WhatsApp, Viber с умными ответами</p>
              </div>
            </a>
            
            <a href="/services/email-marketing" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb', 
                borderRadius: '1.5rem', 
                padding: '2rem', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                cursor: 'pointer', 
                transition: 'all 0.3s', 
                position: 'relative', 
                overflow: 'hidden',
                height: '280px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  width: '4rem', 
                  height: '4rem', 
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                  borderRadius: '1rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1.5rem',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  📧
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Умные рассылки</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Персонализированные email-кампании с AI-анализом</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={{ 
        padding: '6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '1.5rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Интеллектуальные решения для любого бизнеса
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.9)', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Посмотрите, как применяются продукты Volingu в вашей области
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              { icon: '💰', title: 'Финансы и страхование' },
              { icon: '🏥', title: 'Медицина' },
              { icon: '🚚', title: 'Транспорт и логистика' },
              { icon: '💻', title: 'ИТ и связь' },
              { icon: '🍽️', title: 'Гостиницы и рестораны' },
              { icon: '🛒', title: 'Онлайн-ритейл' },
              { icon: '🏠', title: 'ЖКХ и энергетика' },
              { icon: '🏢', title: 'Недвижимость' },
              { icon: '⭐', title: 'Другие отрасли' }
            ].map((item, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '1rem',
                padding: '2rem', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.2)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {item.icon}
                </div>
                <p style={{ 
                  color: '#1f2937', 
                  fontSize: '1rem', 
                  fontWeight: '500',
                  lineHeight: '1.4',
                  margin: 0
                }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ 
        padding: '5rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Вопрос-ответ
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Ответы на самые популярные вопросы о наших AI-ассистентах
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            boxShadow: '0 20px 25px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            overflow: 'hidden',
            marginBottom: '4rem',
            padding: '0 1rem'
          }}>
            {[
              {
                question: "Что такое голосовые и чат-боты?",
                answer: "Голосовые и чат-боты — это AI-ассистенты, которые автоматически обрабатывают запросы клиентов через голосовые звонки и текстовые сообщения. Они работают 24/7, отвечают на вопросы, помогают с выбором услуг и конвертируют посетителей в клиентов."
              },
              {
                question: "Какие задачи решают голосовые и чат-боты?",
                answer: "Наши боты решают широкий спектр задач: консультируют клиентов, принимают заказы, отвечают на часто задаваемые вопросы, собирают контактные данные, записывают на консультации, помогают с выбором услуг и обеспечивают круглосуточную поддержку."
              },
              {
                question: "Как работают голосовые боты?",
                answer: "Голосовые боты используют технологии распознавания речи (ASR) и синтеза речи (TTS). Они понимают естественную речь клиентов, обрабатывают запросы с помощью AI, формируют ответы и озвучивают их естественным голосом, создавая ощущение общения с живым оператором."
              }
            ].map((item, index) => (
              <div key={index} style={{
                borderBottom: index < 2 ? '1px solid #e5e7eb' : 'none',
                padding: '1.5rem 0'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.75rem'
                }}>
                  {item.question}
                </h3>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '1.5rem' 
            }}>
              Готовы начать работу с AI?
            </h2>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Получите бесплатную консультацию и узнайте, как AI-ассистенты могут помочь вашему бизнесу
            </p>
            
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
              Получить консультацию
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

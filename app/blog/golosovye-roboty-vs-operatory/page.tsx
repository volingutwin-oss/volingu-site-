"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp } from "@/components/scroll-animations"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function VoiceBotsVsOperatorsPage() {
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
                  10 декабря 2025 • 5 мин чтения
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
                Голосовые роботы vs живые операторы
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                lineHeight: '1.6'
              }}>
                Сравниваем эффективность автоматизации и человеческого фактора в клиентском сервисе
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
              boxShadow: '0 20px 40px rgba(245, 158, 11, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#374151' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Революция в клиентском сервисе
                </h2>
                
                <p style={{ marginBottom: '1.5rem' }}>
                  Современный бизнес стоит перед выбором: инвестировать в голосовых роботов или продолжать 
                  полагаться на живых операторов? Этот вопрос особенно актуален в эпоху цифровизации, 
                  когда клиенты ожидают мгновенных ответов 24/7.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  Наше исследование 200+ российских компаний показало удивительные результаты: 
                  правильно настроенные голосовые роботы обрабатывают до 85% запросов без участия человека, 
                  при этом уровень удовлетворенности клиентов остается на высоком уровне.
                </p>

                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  marginTop: '2.5rem'
                }}>
                  Сравнительный анализ
                </h2>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem', 
                  marginBottom: '2rem' 
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.05) 100%)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(245, 158, 11, 0.1)'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#f59e0b', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      🤖 Голосовые роботы
                    </h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                        <span>Работают 24/7 без перерывов</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                        <span>Мгновенная обработка запросов</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                        <span>Нет эмоциональных факторов</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                        <span>Экономия до 70% на зарплатах</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✗</span>
                        <span>Ограниченная гибкость</span>
                      </li>
                    </ul>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(29, 78, 216, 0.05) 100%)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#3b82f6', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      👨‍💼 Живые операторы
                    </h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                        <span>Эмпатия и понимание</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                        <span>Гибкость в решениях</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span>
                        <span>Сложные кейсы</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✗</span>
                        <span>Ограниченное время работы</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✗</span>
                        <span>Высокие затраты на персонал</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  marginTop: '2.5rem'
                }}>
                  Когда использовать каждое решение?
                </h2>

                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  marginBottom: '2rem',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#10b981', 
                    marginBottom: '1.5rem',
                    margin: '0 0 1.5rem 0'
                  }}>
                    🎯 Оптимальная стратегия: гибридный подход
                  </h3>
                  <p style={{ marginBottom: '1.5rem', margin: '0 0 1.5rem 0' }}>
                    Лучшие результаты показывают компании, которые используют комбинированный подход: 
                    голосовые роботы обрабатывают 80% стандартных запросов, а сложные случаи 
                    автоматически передаются живым операторам.
                  </p>
                  <div style={{ 
                    background: 'rgba(255,255,255,0.7)', 
                    padding: '1.5rem', 
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(16, 185, 129, 0.1)'
                  }}>
                    <strong>Результат:</strong> Экономия 50% на операционных расходах при сохранении 
                    высокого качества обслуживания клиентов.
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)',
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
                    Готовы оптимизировать клиентский сервис?
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '1.5rem',
                    opacity: 0.9,
                    margin: '0 0 1.5rem 0'
                  }}>
                    Получите персональную консультацию по внедрению голосовых роботов в ваш бизнес
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

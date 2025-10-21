"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp } from "@/components/scroll-animations"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function EmailPersonalizationPage() {
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
                  5 декабря 2025 • 9 мин чтения
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
                Персонализация email-рассылок с AI
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                lineHeight: '1.6'
              }}>
                Как увеличить конверсию email-кампаний в 3 раза с помощью ИИ
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
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#374151' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Эра персонализированного маркетинга
                </h2>
                
                <p style={{ marginBottom: '1.5rem' }}>
                  Времена массовых рассылок одинаковых писем ушли в прошлое. Современные клиенты 
                  ожидают персонального подхода, и искусственный интеллект делает это возможным 
                  в масштабах, недоступных ранее.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  Наше исследование 500+ email-кампаний показало: персонализированные письма 
                  с помощью AI показывают открываемость на 47% выше и конверсию в 3.2 раза больше 
                  по сравнению с обычными рассылками.
                </p>

                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  marginBottom: '2rem',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#8b5cf6', 
                    marginBottom: '1rem',
                    margin: '0 0 1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    📊 Статистика эффективности
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.5rem' }}>
                        +47%
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Открываемость писем</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.5rem' }}>
                        3.2x
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Конверсия в продажи</div>
                    </div>
                  </div>
                </div>

                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  marginTop: '2.5rem'
                }}>
                  Уровни персонализации с AI
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                  {/* Level 1 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(34, 197, 94, 0.1)',
                    borderLeft: '4px solid #22c55e'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#22c55e', 
                      marginBottom: '0.75rem',
                      margin: '0 0 0.75rem 0'
                    }}>
                      Уровень 1: Базовая персонализация
                    </h4>
                    <p style={{ margin: 0, color: '#4b5563' }}>
                      Имя клиента, компания, город. AI анализирует базовые данные CRM и подставляет 
                      релевантную информацию в шаблоны писем.
                    </p>
                  </div>

                  {/* Level 2 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(59, 130, 246, 0.1)',
                    borderLeft: '4px solid #3b82f6'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#3b82f6', 
                      marginBottom: '0.75rem',
                      margin: '0 0 0.75rem 0'
                    }}>
                      Уровень 2: Поведенческая персонализация
                    </h4>
                    <p style={{ margin: 0, color: '#4b5563' }}>
                      История покупок, просмотры сайта, взаимодействие с прошлыми письмами. 
                      AI создает уникальные предложения на основе поведения клиента.
                    </p>
                  </div>

                  {/* Level 3 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    borderLeft: '4px solid #8b5cf6'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#8b5cf6', 
                      marginBottom: '0.75rem',
                      margin: '0 0 0.75rem 0'
                    }}>
                      Уровень 3: Предиктивная персонализация
                    </h4>
                    <p style={{ margin: 0, color: '#4b5563' }}>
                      AI предсказывает потребности клиента, оптимальное время отправки, 
                      генерирует уникальный контент и даже тон письма под каждого получателя.
                    </p>
                  </div>
                </div>

                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  marginTop: '2.5rem'
                }}>
                  Практические инструменты
                </h2>

                <div style={{ 
                  background: '#f8fafc', 
                  padding: '2rem', 
                  borderRadius: '1rem', 
                  marginBottom: '2rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    color: '#1f2937', 
                    marginBottom: '1.5rem',
                    margin: '0 0 1.5rem 0'
                  }}>
                    🛠️ AI-инструменты для email-маркетинга:
                  </h3>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '0.125rem'
                      }}>1</span>
                      <div>
                        <strong>Генерация subject lines:</strong> AI создает десятки вариантов заголовков 
                        и выбирает наиболее эффективные для каждого сегмента
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '0.125rem'
                      }}>2</span>
                      <div>
                        <strong>Оптимизация времени отправки:</strong> Алгоритмы определяют, 
                        когда каждый клиент наиболее активен
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '0.125rem'
                      }}>3</span>
                      <div>
                        <strong>Динамический контент:</strong> Каждое письмо собирается индивидуально 
                        из блоков, релевантных конкретному получателю
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '0.125rem'
                      }}>4</span>
                      <div>
                        <strong>A/B тестирование на стероидах:</strong> AI тестирует сотни вариантов 
                        одновременно и автоматически выбирает победителей
                      </div>
                    </li>
                  </ul>
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
                    Увеличьте конверсию в 3 раза
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '1.5rem',
                    opacity: 0.9,
                    margin: '0 0 1.5rem 0'
                  }}>
                    Настроим персонализированные email-рассылки с AI для вашего бизнеса
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

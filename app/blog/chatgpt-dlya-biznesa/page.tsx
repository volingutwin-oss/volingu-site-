"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp, SlideInLeft } from "@/components/scroll-animations"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ChatGPTArticlePage() {
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
        {/* Декоративные элементы */}
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
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '180px',
          height: '180px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          filter: 'blur(60px)'
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
                  15 декабря 2025 • 8 мин чтения
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
                ChatGPT для бизнеса: полное руководство
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                lineHeight: '1.6'
              }}>
                Узнайте, как внедрить искусственный интеллект в ваш бизнес и увеличить прибыль на 40%
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
              boxShadow: '0 20px 40px rgba(107, 70, 193, 0.1), 0 10px 25px rgba(107, 70, 193, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {/* Article Content */}
              <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#374151' }}>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #6b46c1 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Что такое ChatGPT для бизнеса?
                </h2>
                
                <p style={{ marginBottom: '1.5rem' }}>
                  ChatGPT для бизнеса — это мощный инструмент искусственного интеллекта, который может революционизировать 
                  способ работы вашей компании. От автоматизации клиентского сервиса до создания контента и анализа данных — 
                  возможности практически безграничны.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  Согласно исследованиям, компании, внедрившие AI-решения, увеличивают свою прибыль в среднем на 40% 
                  и сокращают операционные расходы на 30%. Это не просто статистика — это реальные результаты, 
                  которых достигают наши клиенты.
                </p>

                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  marginTop: '2.5rem'
                }}>
                  Основные преимущества для бизнеса
                </h2>

                <div style={{ 
                  background: '#f8fafc', 
                  padding: '2rem', 
                  borderRadius: '1rem', 
                  marginBottom: '2rem',
                  border: '1px solid #e2e8f0'
                }}>
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
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1f2937',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '0.125rem'
                      }}>✓</span>
                      <div>
                        <strong>Автоматизация клиентского сервиса:</strong> Обработка до 80% запросов без участия человека
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1f2937',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '0.125rem'
                      }}>✓</span>
                      <div>
                        <strong>Создание контента:</strong> Генерация текстов, описаний товаров, email-рассылок
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1f2937',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '0.125rem'
                      }}>✓</span>
                      <div>
                        <strong>Анализ данных:</strong> Обработка больших объемов информации и выявление трендов
                      </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1f2937',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        flexShrink: 0,
                        marginTop: '0.125rem'
                      }}>✓</span>
                      <div>
                        <strong>Персонализация:</strong> Индивидуальный подход к каждому клиенту
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  marginTop: '2.5rem'
                }}>
                  Практические кейсы внедрения
                </h2>

                <div style={{ 
                  display: 'grid', 
                  gap: '1.5rem', 
                  marginBottom: '2rem' 
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(107, 70, 193, 0.1)'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#6b46c1', 
                      marginBottom: '0.75rem' 
                    }}>
                      Интернет-магазин электроники
                    </h3>
                    <p style={{ margin: 0, color: '#4b5563' }}>
                      Внедрили чат-бота для консультаций по товарам. Результат: увеличение конверсии на 35%, 
                      сокращение времени ответа с 2 часов до 30 секунд, экономия на зарплате консультантов — 150,000₽/месяц.
                    </p>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.05) 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(16, 185, 129, 0.1)'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#10b981', 
                      marginBottom: '0.75rem' 
                    }}>
                      Медицинский центр
                    </h3>
                    <p style={{ margin: 0, color: '#4b5563' }}>
                      Автоматизировали запись на прием и первичную консультацию. Результат: обработка 90% звонков 
                      без участия администратора, увеличение записей на 50%, повышение удовлетворенности пациентов.
                    </p>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(245, 101, 101, 0.05) 0%, rgba(239, 68, 68, 0.05) 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(245, 101, 101, 0.1)'
                  }}>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#f56565', 
                      marginBottom: '0.75rem' 
                    }}>
                      Агентство недвижимости
                    </h3>
                    <p style={{ margin: 0, color: '#4b5563' }}>
                      Создали голосового помощника для квалификации лидов. Результат: качество лидов выросло на 60%, 
                      время менеджеров освободилось на 4 часа в день, ROI составил 300% за первые 3 месяца.
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
                  Как начать внедрение?
                </h2>

                <p style={{ marginBottom: '1.5rem' }}>
                  Внедрение ChatGPT в бизнес-процессы не требует технических знаний. Наша команда поможет вам 
                  на каждом этапе:
                </p>

                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  marginBottom: '2rem',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>
                  <ol style={{ 
                    paddingLeft: '1.5rem', 
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <li><strong>Анализ бизнес-процессов</strong> — определяем точки для автоматизации</li>
                    <li><strong>Разработка стратегии</strong> — создаем план внедрения под ваши задачи</li>
                    <li><strong>Настройка и интеграция</strong> — подключаем AI к вашим системам</li>
                    <li><strong>Обучение команды</strong> — показываем, как работать с новыми инструментами</li>
                    <li><strong>Поддержка и оптимизация</strong> — постоянно улучшаем результаты</li>
                  </ol>
                </div>

              </div>
            </div>
          </SlideInUp>
        </div>
      </section>

      {/* Related Articles */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SlideInLeft>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '3rem',
              background: 'linear-gradient(135deg, #6b46c1 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Читайте также
            </h2>
          </SlideInLeft>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <SlideInUp delay={0.1}>
              <Link href="/blog/golosovye-roboty-vs-operatory" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    color: '#1f2937'
                  }}>
                    Голосовые роботы vs живые операторы
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    Сравниваем эффективность голосовых роботов и живых операторов в клиентском сервисе
                  </p>
                </div>
              </Link>
            </SlideInUp>

            <SlideInUp delay={0.2}>
              <Link href="/blog/personalizatsiya-email" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                    </svg>
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    color: '#1f2937'
                  }}>
                    Персонализация email-рассылок с AI
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    Как увеличить конверсию email-кампаний в 3 раза с помощью искусственного интеллекта
                  </p>
                </div>
              </Link>
            </SlideInUp>

            <SlideInUp delay={0.3}>
              <Link href="/blog/uvelichenie-konversii" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{
                  background: 'white',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    color: '#1f2937'
                  }}>
                    Как увеличить конверсию сайта на 40%
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    Практические советы по оптимизации конверсии с помощью автоматизации
                  </p>
                </div>
              </Link>
            </SlideInUp>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
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
              Все статьи блога
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

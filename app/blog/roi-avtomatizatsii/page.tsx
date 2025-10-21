"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp } from "@/components/scroll-animations"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ROIAutomationPage() {
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
                  1 декабря 2025 • 8 мин чтения
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
                ROI автоматизации: как считать правильно
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                lineHeight: '1.6'
              }}>
                Подробный гайд по расчету возврата инвестиций в автоматизацию. Какие метрики учитывать и как избежать ошибок в расчетах.
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
                  Что такое ROI и зачем его считать
                </h2>
                
                <p style={{ marginBottom: '1.5rem' }}>
                  ROI (Return on Investment) — это ключевой показатель эффективности инвестиций. 
                  В контексте автоматизации он показывает, насколько быстро окупаются вложения 
                  в технологии и сколько дополнительной прибыли они приносят.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  Правильный расчет ROI помогает принимать обоснованные решения о внедрении 
                  автоматизации и избегать дорогостоящих ошибок.
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
                    📊 Формула расчета ROI
                  </h3>
                  <div style={{ 
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    fontFamily: 'monospace',
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    color: '#8b5cf6',
                    fontWeight: 'bold'
                  }}>
                    ROI = (Прибыль - Инвестиции) / Инвестиции × 100%
                  </div>
                </div>

                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem',
                  marginTop: '2.5rem'
                }}>
                  Какие затраты учитывать
                </h2>

                <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ 
                    background: '#f8fafc',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 'bold', 
                      color: '#1f2937', 
                      marginBottom: '0.5rem' 
                    }}>
                      💻 Технические затраты
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#6b7280' }}>
                      <li>Разработка и настройка системы</li>
                      <li>Лицензии на ПО и API</li>
                      <li>Облачная инфраструктура</li>
                      <li>Интеграции с существующими системами</li>
                    </ul>
                  </div>

                  <div style={{ 
                    background: '#f8fafc',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 'bold', 
                      color: '#1f2937', 
                      marginBottom: '0.5rem' 
                    }}>
                      👥 Операционные затраты
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#6b7280' }}>
                      <li>Обучение сотрудников</li>
                      <li>Техническая поддержка</li>
                      <li>Мониторинг и обслуживание</li>
                      <li>Обновления и доработки</li>
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
                  Как измерить прибыль
                </h2>

                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  marginBottom: '2rem',
                  border: '1px solid rgba(34, 197, 94, 0.2)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#22c55e', 
                    marginBottom: '1rem',
                    margin: '0 0 1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    💰 Прямая экономия
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem' }}>
                        -60%
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Сокращение операторов</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem' }}>
                        -40%
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Снижение ошибок</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e', marginBottom: '0.5rem' }}>
                        24/7
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Работа без выходных</div>
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
                  Типичные ошибки в расчетах
                </h2>

                <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ 
                    background: '#fef2f2',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid #fecaca'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 'bold', 
                      color: '#dc2626', 
                      marginBottom: '0.5rem' 
                    }}>
                      ❌ Не учитывают скрытые затраты
                    </h4>
                    <p style={{ margin: 0, color: '#6b7280' }}>
                      Обучение персонала, интеграции, техническая поддержка — 
                      эти расходы часто забывают включить в расчеты.
                    </p>
                  </div>

                  <div style={{ 
                    background: '#fef2f2',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid #fecaca'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 'bold', 
                      color: '#dc2626', 
                      marginBottom: '0.5rem' 
                    }}>
                      ❌ Завышают ожидаемую прибыль
                    </h4>
                    <p style={{ margin: 0, color: '#6b7280' }}>
                      Результаты автоматизации проявляются постепенно, 
                      а не сразу после внедрения.
                    </p>
                  </div>

                  <div style={{ 
                    background: '#fef2f2',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid #fecaca'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 'bold', 
                      color: '#dc2626', 
                      marginBottom: '0.5rem' 
                    }}>
                      ❌ Игнорируют период окупаемости
                    </h4>
                    <p style={{ margin: 0, color: '#6b7280' }}>
                      Высокий ROI не всегда означает быструю окупаемость. 
                      Важно учитывать временной фактор.
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
                  Практический пример расчета
                </h2>

                <div style={{ 
                  background: '#f8fafc',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid #e2e8f0',
                  marginBottom: '2rem'
                }}>
                  <h4 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 'bold', 
                    color: '#1f2937', 
                    marginBottom: '1rem' 
                  }}>
                    Компания с 10 операторами
                  </h4>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                      <h5 style={{ color: '#dc2626', fontWeight: 'bold', marginBottom: '0.5rem' }}>Затраты:</h5>
                      <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#6b7280' }}>
                        <li>Разработка: 500,000 ₽</li>
                        <li>Лицензии: 50,000 ₽/мес</li>
                        <li>Поддержка: 30,000 ₽/мес</li>
                        <li>Обучение: 100,000 ₽</li>
                      </ul>
                    </div>
                    <div>
                      <h5 style={{ color: '#22c55e', fontWeight: 'bold', marginBottom: '0.5rem' }}>Экономия:</h5>
                      <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#6b7280' }}>
                        <li>Зарплаты: 400,000 ₽/мес</li>
                        <li>Налоги: 120,000 ₽/мес</li>
                        <li>Офис: 50,000 ₽/мес</li>
                        <li>Оборудование: 20,000 ₽/мес</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div style={{ 
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '0.75rem',
                    marginTop: '1.5rem',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.5rem' }}>
                        ROI = 340% за первый год
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        Окупаемость: 3.5 месяца
                      </div>
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
                  Заключение
                </h2>

                <p style={{ marginBottom: '1.5rem' }}>
                  Правильный расчет ROI автоматизации — это не просто математика, 
                  а комплексный анализ всех факторов влияния на бизнес. 
                  Учитывайте как прямые, так и косвенные эффекты, 
                  и не забывайте о временном факторе.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  Помните: автоматизация — это инвестиция в будущее вашего бизнеса. 
                  Правильно рассчитанный ROI поможет принять обоснованное решение 
                  и избежать дорогостоящих ошибок.
                </p>

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
                    Рассчитайте ROI для вашего бизнеса
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '1.5rem',
                    opacity: 0.9,
                    margin: '0 0 1.5rem 0'
                  }}>
                    Получите персональный расчет окупаемости автоматизации
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
                    Получить расчет ROI
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

"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp } from "@/components/scroll-animations"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ConversionIncreasePage() {
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
                  3 декабря 2025 • 6 мин чтения
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
                Как увеличить конверсию сайта на 40%
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                lineHeight: '1.6'
              }}>
                Практические советы по оптимизации с помощью автоматизации
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
              boxShadow: '0 20px 40px rgba(239, 68, 68, 0.1)',
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
                  Конверсия - главная метрика бизнеса
                </h2>
                
                <p style={{ marginBottom: '1.5rem' }}>
                  Каждый посетитель вашего сайта - это потенциальный клиент. Но статистика неумолима: 
                  в среднем только 2-3% посетителей совершают целевое действие. Это означает, 
                  что 97% потенциальных клиентов уходят, не купив ничего.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  Наш опыт работы с 300+ проектами показал: правильная автоматизация может 
                  увеличить конверсию на 40-60%, при этом снизив стоимость привлечения клиента в 2 раза.
                </p>

                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(49, 130, 206, 0.1) 0%, rgba(43, 108, 176, 0.1) 100%)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  marginBottom: '2rem',
                  border: '1px solid rgba(49, 130, 206, 0.2)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#3182ce', 
                    marginBottom: '1rem',
                    margin: '0 0 1rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    🎯 Результаты наших клиентов
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3182ce', marginBottom: '0.5rem' }}>
                        +43%
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Средний рост конверсии</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3182ce', marginBottom: '0.5rem' }}>
                        -52%
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Снижение CAC</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3182ce', marginBottom: '0.5rem' }}>
                        2.3x
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>Рост LTV клиентов</div>
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
                  7 инструментов для роста конверсии
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                  {/* Tool 1 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.05) 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(16, 185, 129, 0.1)',
                    borderLeft: '4px solid #10b981'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#10b981', 
                      marginBottom: '0.75rem',
                      margin: '0 0 0.75rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      💬 Чат-боты на сайте
                    </h4>
                    <p style={{ margin: '0 0 0.75rem 0', color: '#4b5563' }}>
                      Мгновенные ответы на вопросы посетителей, квалификация лидов, 
                      сбор контактов даже когда менеджеры спят.
                    </p>
                    <div style={{ fontSize: '0.9rem', color: '#10b981', fontWeight: '600' }}>
                      Результат: +25% к конверсии
                    </div>
                  </div>

                  {/* Tool 2 */}
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
                      margin: '0 0 0.75rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      🔔 Push-уведомления
                    </h4>
                    <p style={{ margin: '0 0 0.75rem 0', color: '#4b5563' }}>
                      Возвращение ушедших посетителей персональными предложениями, 
                      напоминания о брошенных корзинах.
                    </p>
                    <div style={{ fontSize: '0.9rem', color: '#3b82f6', fontWeight: '600' }}>
                      Результат: +18% возвратов
                    </div>
                  </div>

                  {/* Tool 3 */}
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
                      margin: '0 0 0.75rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      📊 Поп-апы с умной логикой
                    </h4>
                    <p style={{ margin: '0 0 0.75rem 0', color: '#4b5563' }}>
                      Показ предложений в нужный момент: при попытке закрыть сайт, 
                      после просмотра определенных страниц, через заданное время.
                    </p>
                    <div style={{ fontSize: '0.9rem', color: '#8b5cf6', fontWeight: '600' }}>
                      Результат: +35% подписок
                    </div>
                  </div>

                  {/* Tool 4 */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.05) 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid rgba(245, 158, 11, 0.1)',
                    borderLeft: '4px solid #f59e0b'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 'bold', 
                      color: '#f59e0b', 
                      marginBottom: '0.75rem',
                      margin: '0 0 0.75rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      📞 Обратный звонок
                    </h4>
                    <p style={{ margin: '0 0 0.75rem 0', color: '#4b5563' }}>
                      Автоматический обзвон горячих лидов в течение 60 секунд после заявки. 
                      Голосовые роботы для первичной квалификации.
                    </p>
                    <div style={{ fontSize: '0.9rem', color: '#f59e0b', fontWeight: '600' }}>
                      Результат: +40% дозвонов
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
                  Пошаговый план внедрения
                </h2>

                <div style={{ 
                  background: '#f8fafc', 
                  padding: '2rem', 
                  borderRadius: '1rem', 
                  marginBottom: '2rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>1</div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                          Аудит текущей конверсии
                        </h4>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.95rem' }}>
                          Анализируем воронку продаж, находим узкие места, определяем точки утечки клиентов
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>2</div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                          Выбор приоритетных инструментов
                        </h4>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.95rem' }}>
                          Определяем 2-3 инструмента с максимальным потенциалом для вашей ниши
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>3</div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                          Поэтапное внедрение
                        </h4>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.95rem' }}>
                          Запускаем инструменты по очереди, тестируем, оптимизируем каждый
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>4</div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                          Масштабирование результата
                        </h4>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.95rem' }}>
                          Увеличиваем трафик на оптимизированную воронку, получаем максимальную отдачу
                        </p>
                      </div>
                    </div>
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
                    Увеличим конверсию вашего сайта на 40%
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    marginBottom: '1.5rem',
                    opacity: 0.9,
                    margin: '0 0 1.5rem 0'
                  }}>
                    Бесплатный аудит конверсии + план оптимизации за 3 дня
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
                    Получить аудит бесплатно
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

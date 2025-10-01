"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInLeft, SlideInUp } from "@/components/scroll-animations"
import { ServiceCard } from "@/components/service-card"
import { DashboardFeatureCard } from "@/components/dashboard-feature-card"

export default function OperatorPanelPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', 
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
                color: '#ef4444'
              }}>
                🎛️
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
              Панель оператора
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
              Единая панель для управления всеми каналами коммуникации
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
              Заказать панель
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
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Возможности панели оператора
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Все каналы коммуникации в одном месте
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <ServiceCard
              icon="📞"
              title="Звонки"
              description="Управление входящими и исходящими звонками с записью разговоров"
              gradient="linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
              delay={0}
            />

            <ServiceCard
              icon="💬"
              title="Мессенджеры"
              description="Общение в Telegram, WhatsApp, Viber и других мессенджерах"
              gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              delay={100}
            />

            <ServiceCard
              icon="📧"
              title="Email"
              description="Обработка писем с автоматической сортировкой и приоритизацией"
              gradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
              delay={200}
            />

            <ServiceCard
              icon="🌐"
              title="Сайт-чат"
              description="Общение с посетителями сайта через встроенный чат"
              gradient="linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
              delay={300}
            />

            <ServiceCard
              icon="📊"
              title="Аналитика"
              description="Детальная статистика по всем каналам коммуникации"
              gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
              delay={400}
            />

            <ServiceCard
              icon="👥"
              title="Команда"
              description="Управление операторами, распределение задач и контроль качества"
              gradient="linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Что видит оператор
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Удобный интерфейс для эффективной работы
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <DashboardFeatureCard
              title="Единая лента"
              description="Все обращения из разных каналов в хронологическом порядке"
              benefit="Экономия времени: до 40%"
              delay={0}
            />

            <DashboardFeatureCard
              title="История клиента"
              description="Полная история всех взаимодействий с клиентом в одном окне"
              benefit="Повышение качества: до 60%"
              delay={100}
            />

            <DashboardFeatureCard
              title="Быстрые ответы"
              description="Готовые шаблоны ответов для типовых вопросов"
              benefit="Скорость ответа: до 3x"
              delay={200}
            />

            <DashboardFeatureCard
              title="Приоритизация"
              description="Автоматическое определение важности обращения"
              benefit="Снижение потерь: до 80%"
              delay={300}
            />

            <DashboardFeatureCard
              title="Передача задач"
              description="Легкая передача сложных вопросов специалистам"
              benefit="Эффективность: до 50%"
              delay={400}
            />

            <DashboardFeatureCard
              title="Мобильная версия"
              description="Работа с панелью с любого устройства"
              benefit="Доступность: 24/7"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Management Features */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Управление командой
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Инструменты для руководителей и менеджеров
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)'
                }}>
                  📈
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  KPI операторов
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Отслеживание показателей каждого оператора в реальном времени
                </p>
              </div>
            </SlideInUp>

            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                }}>
                  🎯
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Распределение нагрузки
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Автоматическое распределение обращений между операторами
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
                  📊
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Аналитика команды
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Детальные отчеты по работе команды и качеству обслуживания
                </p>
              </div>
            </SlideInUp>

            <SlideInUp >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)'
                }}>
                  🎧
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#111827' }}>
                  Контроль качества
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  Прослушивание записей и оценка качества обслуживания
                </p>
              </div>
            </SlideInUp>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Стоимость панели оператора
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem' }}>
              От 20 000 рублей в месяц за неограниченное количество операторов
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
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Настройка панели</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Неограниченные операторы</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Все каналы коммуникации</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Аналитика и отчеты</span>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#22c55e', marginRight: '0.75rem', fontSize: '1.25rem' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '1rem' }}>Мобильная версия</span>
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
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
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
              Готовы оптимизировать работу команды?
            </h2>
          </FadeIn>
          
          <FadeIn >
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Получите бесплатную консультацию и узнайте, как панель оператора повысит эффективность
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
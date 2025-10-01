"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp } from "@/components/scroll-animations"
import { MissionCard } from "@/components/mission-card"
import { TeamCard } from "@/components/team-card"
import { StatCard } from "@/components/stat-card"
import { ValueCard } from "@/components/value-card"

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '1.5rem',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}>
              О компании NeuroStaff
            </h1>
            <p style={{ 
              fontSize: '1.5rem', 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: '2rem', 
              maxWidth: '700px', 
              margin: '0 auto 2rem auto',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Мы создаем умных нейросотрудников для автоматизации бизнес-процессов
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
                Наша миссия
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto' }}>
                Помогаем бизнесу расти быстрее, автоматизируя рутинные задачи с помощью искусственного интеллекта
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <MissionCard
              icon="⚡"
              title="Фокус на результате"
              description="Каждое решение направлено на увеличение прибыли и снижение затрат клиента"
              gradient="linear-gradient(135deg, #3b82f6, #1d4ed8)"
              delay={0}
            />

            <MissionCard
              icon="💡"
              title="Инновации"
              description="Используем самые передовые технологии AI для решения бизнес-задач"
              gradient="linear-gradient(135deg, #10b981, #059669)"
              delay={100}
            />

            <MissionCard
              icon="⭐"
              title="Партнерство"
              description="Работаем как надежный партнер, а не просто поставщик услуг"
              gradient="linear-gradient(135deg, #f59e0b, #d97706)"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
                Наша команда
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Эксперты в области AI, разработки и бизнес-анализа
              </p>
            </div>
          </FadeIn>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '280px' }}>
              <TeamCard
                icon="🧠"
                title="Разработчики AI"
                description="Специалисты по машинному обучению и нейронным сетям"
                gradient="linear-gradient(135deg, #3b82f6, #1d4ed8)"
                delay={0}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '280px' }}>
              <TeamCard
                icon="📊"
                title="Бизнес-аналитики"
                description="Эксперты по оптимизации бизнес-процессов"
                gradient="linear-gradient(135deg, #10b981, #059669)"
                delay={100}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '280px' }}>
              <TeamCard
                icon="🎯"
                title="UX/UI дизайнеры"
                description="Создают удобные интерфейсы для пользователей"
                gradient="linear-gradient(135deg, #f59e0b, #d97706)"
                delay={200}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '280px' }}>
              <TeamCard
                icon="⚙️"
                title="DevOps инженеры"
                description="Обеспечивают стабильную работу всех систем"
                gradient="linear-gradient(135deg, #8b5cf6, #7c3aed)"
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
                Наши достижения
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Цифры, которые говорят сами за себя
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <StatCard
              number="500+"
              label="Довольных клиентов"
              color="#2563eb"
              delay={0}
            />

            <StatCard
              number="1000+"
              label="Нейросотрудников создано"
              color="#22c55e"
              delay={100}
            />

            <StatCard
              number="85%"
              label="Средний рост продаж"
              color="#f59e0b"
              delay={200}
            />

            <StatCard
              number="24/7"
              label="Работа без перерывов"
              color="#8b5cf6"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
                Наши ценности
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>
          </FadeIn>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '300px' }}>
              <ValueCard
                title="Качество"
                description="Мы не идем на компромиссы в качестве наших решений. Каждый нейросотрудник проходит тщательное тестирование."
                delay={0}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '300px' }}>
              <ValueCard
                title="Надежность"
                description="Наши системы работают стабильно 24/7. Мы гарантируем 99.9% времени доступности."
                delay={100}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '300px' }}>
              <ValueCard
                title="Прозрачность"
                description="Мы всегда честны с клиентами и предоставляем полную информацию о работе наших решений."
                delay={200}
              />
            </div>

            <div style={{ flex: '0 0 calc(50% - 1rem)', minWidth: '300px' }}>
              <ValueCard
                title="Инновации"
                description="Мы постоянно изучаем новые технологии и внедряем их в наши решения для максимальной эффективности."
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FadeIn>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
              Готовы работать с нами?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
              Свяжитесь с нами и узнайте, как мы можем помочь вашему бизнесу
            </p>
            <a href="/contact" style={{ 
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: 'white', 
              padding: '1rem 2rem', 
              border: 'none', 
              borderRadius: '0.5rem', 
              fontSize: '1.125rem', 
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)'
            }}>
              Связаться с нами
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: 'white', padding: '3rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>NeuroStaff</div>
          <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Нейросотрудники для вашего бизнеса</p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>© 2024 NeuroStaff. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}


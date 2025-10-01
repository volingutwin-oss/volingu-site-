export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', margin: 0, padding: 0 }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 50, 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid #e5e7eb', 
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' 
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              background: 'linear-gradient(to right, #2563eb, #9333ea, #1e40af)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              NeuroStaff
            </div>
            <div style={{ display: 'none' }} className="md:block">
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <a href="#services" style={{ color: '#374151', textDecoration: 'none' }}>Услуги</a>
                <a href="#cases" style={{ color: '#374151', textDecoration: 'none' }}>Кейсы</a>
                <a href="#demo" style={{ color: '#374151', textDecoration: 'none' }}>Демо</a>
                <a href="#contact" style={{ color: '#374151', textDecoration: 'none' }}>Контакты</a>
                <a href="#contact" style={{ 
                  background: 'linear-gradient(to right, #2563eb, #9333ea)', 
                  color: 'white', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '0.5rem', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}>
                  Получить консультацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'hidden', 
        paddingTop: '4rem' 
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom right, #eff6ff, #f3e8ff, #dbeafe)' 
        }} />
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{ 
            position: 'absolute', 
            top: '25%', 
            left: '25%', 
            width: '16rem', 
            height: '16rem', 
            backgroundColor: 'rgba(59, 130, 246, 0.05)', 
            borderRadius: '50%', 
            filter: 'blur(3rem)',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
          <div style={{ 
            position: 'absolute', 
            bottom: '25%', 
            right: '25%', 
            width: '24rem', 
            height: '24rem', 
            backgroundColor: 'rgba(147, 51, 234, 0.05)', 
            borderRadius: '50%', 
            filter: 'blur(3rem)',
            animation: 'pulse 2s ease-in-out infinite 1s'
          }} />
        </div>

        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 1rem', 
          textAlign: 'center' 
        }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            padding: '0.5rem 1rem', 
            borderRadius: '9999px', 
            backgroundColor: '#dbeafe', 
            border: '1px solid #bfdbfe', 
            color: '#1d4ed8', 
            fontSize: '0.875rem', 
            fontWeight: '500', 
            marginBottom: '2rem' 
          }}>
            ✨ Нейросотрудники для вашего бизнеса
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem', 
            padding: '0 1rem',
            lineHeight: '1.1'
          }}>
            <span style={{ 
              background: 'linear-gradient(to right, #2563eb, #9333ea, #1e40af)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>AI-ассистенты</span>
            <br />
            <span style={{ color: '#111827' }}>которые работают</span>
            <br />
            <span style={{ color: '#111827' }}>24/7 без отпусков</span>
          </h1>

          <p style={{ 
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', 
            color: '#4b5563', 
            maxWidth: '64rem', 
            margin: '0 auto 3rem auto', 
            padding: '0 1rem',
            lineHeight: '1.6'
          }}>
            Создаем умных нейросотрудников на базе ChatGPT, обученных на знаниях вашей компании. 
            Они работают как менеджеры по продажам, специалисты поддержки, HR-менеджеры и консультанты.
          </p>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: '4rem', 
            padding: '0 1rem' 
          }} className="sm:flex-row">
            <a href="#contact" style={{ 
              background: 'linear-gradient(to right, #2563eb, #9333ea)', 
              color: 'white', 
              padding: '1rem 2rem', 
              borderRadius: '0.5rem', 
              fontWeight: '600', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '1.125rem',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
              animation: 'pulseGlow 2s ease-in-out infinite'
            }}>
              Получить консультацию →
            </a>
            <a href="#demo" style={{ 
              border: '2px solid #2563eb', 
              color: '#2563eb', 
              padding: '1rem 2rem', 
              borderRadius: '0.5rem', 
              fontWeight: '600', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontSize: '1.125rem',
              backgroundColor: 'transparent'
            }}>
              ▶ Смотреть демо
            </a>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem', 
            maxWidth: '64rem', 
            margin: '0 auto', 
            padding: '0 1rem' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '3rem', 
                height: '3rem', 
                backgroundColor: '#dbeafe', 
                borderRadius: '0.5rem', 
                margin: '0 auto 0.75rem auto',
                fontSize: '1.5rem'
              }}>
                👥
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>500+</div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>Довольных клиентов</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '3rem', 
                height: '3rem', 
                backgroundColor: '#dcfce7', 
                borderRadius: '0.5rem', 
                margin: '0 auto 0.75rem auto',
                fontSize: '1.5rem'
              }}>
                🕐
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>24/7</div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>Работа без перерывов</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '3rem', 
                height: '3rem', 
                backgroundColor: '#dbeafe', 
                borderRadius: '0.5rem', 
                margin: '0 auto 0.75rem auto',
                fontSize: '1.5rem'
              }}>
                📈
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>85%</div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>Рост продаж</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '3rem', 
                height: '3rem', 
                backgroundColor: '#dcfce7', 
                borderRadius: '0.5rem', 
                margin: '0 auto 0.75rem auto',
                fontSize: '1.5rem'
              }}>
                🤖
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>1000+</div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>Нейросотрудников</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem' 
            }}>
              <span style={{ 
                background: 'linear-gradient(to right, #2563eb, #9333ea, #1e40af)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>AI-решения</span>
              <br />
              <span style={{ color: '#111827' }}>для вашего бизнеса</span>
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#4b5563', 
              maxWidth: '48rem', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Комплексные решения для автоматизации коммуникаций: от голосовых ботов до единой панели управления
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb', 
              borderRadius: '0.5rem', 
              padding: '1.5rem', 
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                backgroundColor: '#dbeafe', 
                borderRadius: '0.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1rem',
                fontSize: '1.5rem'
              }}>
                📞
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Голосовые боты</h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Обрабатывают звонки 24/7 с естественным голосом</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• Обработка входящих звонков</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• Голосовое распознавание</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• Естественная речь</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem' }}>• Интеграция с CRM</li>
              </ul>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb', 
              borderRadius: '0.5rem', 
              padding: '1.5rem', 
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                backgroundColor: '#dcfce7', 
                borderRadius: '0.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1rem',
                fontSize: '1.5rem'
              }}>
                💬
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Чат-боты</h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Работают в Telegram, WhatsApp, Viber</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• Telegram боты</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• WhatsApp интеграция</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• Viber поддержка</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem' }}>• Мгновенные ответы</li>
              </ul>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb', 
              borderRadius: '0.5rem', 
              padding: '1.5rem', 
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                backgroundColor: '#f3e8ff', 
                borderRadius: '0.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1rem',
                fontSize: '1.5rem'
              }}>
                📧
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>Умные рассылки</h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Персонализированные email-кампании с AI</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• Персонализация контента</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• Оптимизация времени</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem' }}>• A/B тестирование</li>
                <li style={{ color: '#4b5563', fontSize: '0.875rem' }}>• Аналитика эффективности</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '6rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '1.5rem' 
          }}>
            Готовы начать работу с AI?
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#4b5563', 
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Получите бесплатную консультацию и узнайте, как AI-ассистенты могут помочь вашему бизнесу
          </p>
          <a href="#contact" style={{ 
            background: 'linear-gradient(to right, #2563eb, #9333ea)', 
            color: 'white', 
            padding: '1rem 2rem', 
            borderRadius: '0.5rem', 
            fontWeight: '600', 
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontSize: '1.125rem',
            display: 'inline-block'
          }}>
            Получить консультацию
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: 'white', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(to right, #60a5fa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem'
          }}>
            NeuroStaff
          </div>
          <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Нейросотрудники для вашего бизнеса</p>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>© 2024 NeuroStaff. Все права защищены.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @media (min-width: 640px) {
          .sm\\:flex-row {
            flex-direction: row;
          }
        }
        
        @media (min-width: 768px) {
          .md\\:block {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}


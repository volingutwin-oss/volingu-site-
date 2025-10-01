import { Navigation } from "@/components/navigation"

export default function BlogPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            Блог NeuroStaff
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Полезные статьи об автоматизации бизнеса и искусственном интеллекте
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
              Рекомендуемая статья
            </h2>
          </div>

          <div style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '3rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#2563eb', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>
                  АВТОМАТИЗАЦИЯ БИЗНЕСА
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                  Как нейросотрудники увеличивают продажи на 85%
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Реальные кейсы наших клиентов и конкретные цифры роста продаж после внедрения AI-ассистентов. Узнайте, как автоматизация коммуникаций может кардинально изменить ваш бизнес.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>15 декабря 2024</div>
                  <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>•</div>
                  <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>8 мин чтения</div>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '200px', height: '150px', backgroundColor: '#dbeafe', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontSize: '3rem' }}>
                  📈
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
              Все статьи
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Article 1 */}
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '100%', height: '150px', backgroundColor: '#dcfce7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
                🤖
              </div>
              <div style={{ color: '#2563eb', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                ChatGPT для бизнеса: полное руководство
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Как правильно использовать ChatGPT в бизнесе, какие задачи можно автоматизировать и как избежать типичных ошибок.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <span>12 декабря 2024</span>
                <span>•</span>
                <span>6 мин чтения</span>
              </div>
            </div>

            {/* Article 2 */}
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '100%', height: '150px', backgroundColor: '#fef3c7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
                📞
              </div>
              <div style={{ color: '#2563eb', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                ГОЛОСОВЫЕ БОТЫ
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Голосовые роботы vs живые операторы
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Сравниваем эффективность голосовых роботов и живых операторов. Когда стоит использовать автоматизацию, а когда лучше оставить человека.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <span>10 декабря 2024</span>
                <span>•</span>
                <span>5 мин чтения</span>
              </div>
            </div>

            {/* Article 3 */}
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '100%', height: '150px', backgroundColor: '#e0e7ff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
                💬
              </div>
              <div style={{ color: '#2563eb', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                ЧАТ-БОТЫ
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Топ-5 мессенджеров для бизнеса в 2024
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Анализируем популярные мессенджеры и их возможности для бизнеса. В каких каналах лучше всего размещать чат-ботов.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <span>8 декабря 2024</span>
                <span>•</span>
                <span>7 мин чтения</span>
              </div>
            </div>

            {/* Article 4 */}
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '100%', height: '150px', backgroundColor: '#f3e8ff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
                📧
              </div>
              <div style={{ color: '#2563eb', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                EMAIL-МАРКЕТИНГ
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Персонализация email-рассылок с AI
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Как искусственный интеллект помогает создавать персонализированные email-кампании и увеличивать конверсию в 3 раза.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <span>5 декабря 2024</span>
                <span>•</span>
                <span>9 мин чтения</span>
              </div>
            </div>

            {/* Article 5 */}
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '100%', height: '150px', backgroundColor: '#fecaca', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
                🎯
              </div>
              <div style={{ color: '#2563eb', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                КОНВЕРСИЯ
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                Как увеличить конверсию сайта на 40%
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Практические советы по оптимизации конверсии сайта с помощью виджетов, чат-ботов и других инструментов автоматизации.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <span>3 декабря 2024</span>
                <span>•</span>
                <span>6 мин чтения</span>
              </div>
            </div>

            {/* Article 6 */}
            <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '100%', height: '150px', backgroundColor: '#dbeafe', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
                💰
              </div>
              <div style={{ color: '#2563eb', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                ROI
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                ROI автоматизации: как считать правильно
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Подробный гайд по расчету возврата инвестиций в автоматизацию. Какие метрики учитывать и как избежать ошибок в расчетах.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                <span>1 декабря 2024</span>
                <span>•</span>
                <span>8 мин чтения</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            Подпишитесь на рассылку
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem' }}>
            Получайте новые статьи об автоматизации бизнеса прямо на почту
          </p>
          
          <div style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input 
                type="email" 
                placeholder="Ваш email" 
                style={{ 
                  flex: '1', 
                  minWidth: '250px',
                  padding: '0.75rem', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }} 
              />
              <button style={{ 
                backgroundColor: '#2563eb', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                border: 'none', 
                borderRadius: '0.5rem', 
                fontSize: '1rem',
                cursor: 'pointer'
              }}>
                Подписаться
              </button>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Никакого спама. Только полезные статьи раз в неделю.
            </p>
          </div>
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


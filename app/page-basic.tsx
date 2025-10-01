export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: 'white', padding: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>NeuroStaff</div>
          <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '0.5rem' }}>
            Получить консультацию
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            AI-ассистенты которые работают 24/7
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Создаем умных нейросотрудников на базе ChatGPT для вашего бизнеса
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '0.5rem', fontSize: '1.125rem' }}>
              Получить консультацию
            </button>
            <button style={{ backgroundColor: 'transparent', color: '#2563eb', padding: '1rem 2rem', border: '2px solid #2563eb', borderRadius: '0.5rem', fontSize: '1.125rem' }}>
              Смотреть демо
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
              AI-решения для вашего бизнеса
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Комплексные решения для автоматизации коммуникаций
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Service 1 */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '3rem', height: '3rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                📞
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Голосовые боты</h3>
              <p style={{ color: '#6b7280' }}>Обрабатывают звонки 24/7 с естественным голосом</p>
            </div>

            {/* Service 2 */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '3rem', height: '3rem', backgroundColor: '#dcfce7', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                💬
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Чат-боты</h3>
              <p style={{ color: '#6b7280' }}>Работают в Telegram, WhatsApp, Viber</p>
            </div>

            {/* Service 3 */}
            <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '3rem', height: '3rem', backgroundColor: '#f3e8ff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                📧
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Умные рассылки</h3>
              <p style={{ color: '#6b7280' }}>Персонализированные email-кампании с AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f9fafb', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            Готовы начать работу с AI?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
            Получите бесплатную консультацию и узнайте, как AI-ассистенты могут помочь вашему бизнесу
          </p>
          <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '0.5rem', fontSize: '1.125rem' }}>
            Получить консультацию
          </button>
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


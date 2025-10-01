import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
            Свяжитесь с нами
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Получите бесплатную консультацию по автоматизации вашего бизнеса
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '2rem' }}>
                Оставьте заявку
              </h2>
              
              <div style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Ваше имя *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Иван Иванов" 
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }} 
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Email *
                  </label>
                  <input 
                    type="email" 
                    placeholder="ivan@company.com" 
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }} 
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Телефон *
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }} 
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Компания
                  </label>
                  <input 
                    type="text" 
                    placeholder="Название компании" 
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }} 
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Интересующая услуга
                  </label>
                  <select style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '1px solid #d1d5db', 
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}>
                    <option value="">Выберите услугу</option>
                    <option value="voice-bots">Голосовые роботы</option>
                    <option value="chat-bots">Чат-боты</option>
                    <option value="email-marketing">Автоматические рассылки</option>
                    <option value="website-widgets">Виджеты для сайта</option>
                    <option value="operator-panel">Панель оператора</option>
                    <option value="consultation">Консультация</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' }}>
                    Сообщение
                  </label>
                  <textarea 
                    placeholder="Расскажите о ваших задачах и целях" 
                    rows={4}
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem', 
                      border: '1px solid #d1d5db', 
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }} 
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#4b5563' }}>
                    <input type="checkbox" style={{ marginRight: '0.5rem' }} />
                    Я даю согласие на обработку моих персональных данных
                  </label>
                </div>

                <button style={{ 
                  backgroundColor: '#2563eb', 
                  color: 'white', 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  borderRadius: '0.5rem', 
                  fontSize: '1rem',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Отправить заявку
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '2rem' }}>
                Контактная информация
              </h2>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                  Телефон
                </h3>
                <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '0.5rem' }}>+7 (999) 123-45-67</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Пн-Пт: 9:00 - 18:00 (МСК)</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                  Email
                </h3>
                <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '0.5rem' }}>info@neurostaff.ru</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Ответим в течение 2 часов</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                  Telegram
                </h3>
                <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '0.5rem' }}>@neurostaff_support</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Быстрые ответы в мессенджере</p>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                  Адрес
                </h3>
                <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Москва, ул. Тверская, 15</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Встречи по предварительной записи</p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                  Время ответа
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#6b7280' }}>Email</span>
                    <span style={{ color: '#1f2937', fontWeight: '500' }}>2 часа</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#6b7280' }}>Telegram</span>
                    <span style={{ color: '#1f2937', fontWeight: '500' }}>15 минут</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#6b7280' }}>Звонок</span>
                    <span style={{ color: '#1f2937', fontWeight: '500' }}>Мгновенно</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
              Часто задаваемые вопросы
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                Сколько времени занимает внедрение?
              </h3>
              <p style={{ color: '#6b7280' }}>
                Базовое решение внедряется за 5-10 рабочих дней. Сложные интеграции могут занять до 3 недель.
              </p>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                Есть ли бесплатный период?
              </h3>
              <p style={{ color: '#6b7280' }}>
                Да, мы предоставляем 14 дней бесплатного тестирования для всех наших решений.
              </p>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                Какая техническая поддержка?
              </h3>
              <p style={{ color: '#6b7280' }}>
                Мы предоставляем техническую поддержку 24/7 через Telegram, email и телефон.
              </p>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                Можно ли изменить настройки после запуска?
              </h3>
              <p style={{ color: '#6b7280' }}>
                Конечно! Вы можете самостоятельно вносить изменения или обратиться к нашей команде поддержки.
              </p>
            </div>
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



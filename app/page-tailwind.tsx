export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              NeuroStaff
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
                <a href="#cases" className="text-gray-700 hover:text-blue-600 transition-colors">Кейсы</a>
                <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Демо</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Получить консультацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-8">
            ✨ Нейросотрудники для вашего бизнеса
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 px-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">AI-ассистенты</span>
            <br />
            <span className="text-gray-900">которые работают</span>
            <br />
            <span className="text-gray-900">24/7 без отпусков</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-balance max-w-4xl mx-auto mb-12 px-4">
            Создаем умных нейросотрудников на базе ChatGPT, обученных на знаниях вашей компании. 
            Они работают как менеджеры по продажам, специалисты поддержки, HR-менеджеры и консультанты.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg">
              Получить консультацию →
            </a>
            <a href="#demo" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white text-lg">
              ▶ Смотреть демо
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                👥
              </div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                🕐
              </div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Работа без перерывов</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                📈
              </div>
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Рост продаж</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3">
                🤖
              </div>
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600">Нейросотрудников</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">AI-решения</span>
              <br />
              <span className="text-gray-900">для вашего бизнеса</span>
            </h2>
            <p className="text-xl text-gray-600 text-balance max-w-3xl mx-auto">
              Комплексные решения для автоматизации коммуникаций: от голосовых ботов до единой панели управления
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                📞
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Голосовые боты</h3>
              <p className="text-gray-600 mb-4">Обрабатывают звонки 24/7 с естественным голосом</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Обработка входящих звонков</li>
                <li>• Голосовое распознавание</li>
                <li>• Естественная речь</li>
                <li>• Интеграция с CRM</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                💬
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Чат-боты</h3>
              <p className="text-gray-600 mb-4">Работают в Telegram, WhatsApp, Viber</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Telegram боты</li>
                <li>• WhatsApp интеграция</li>
                <li>• Viber поддержка</li>
                <li>• Мгновенные ответы</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                📧
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Умные рассылки</h3>
              <p className="text-gray-600 mb-4">Персонализированные email-кампании с AI</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Персонализация контента</li>
                <li>• Оптимизация времени</li>
                <li>• A/B тестирование</li>
                <li>• Аналитика эффективности</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Готовы начать работу с AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Получите бесплатную консультацию и узнайте, как AI-ассистенты могут помочь вашему бизнесу
          </p>
          <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg">
            Получить консультацию
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">NeuroStaff</div>
          <p className="text-gray-400 mb-4">Нейросотрудники для вашего бизнеса</p>
          <p className="text-gray-500 text-sm">© 2024 NeuroStaff. Все права защищены.</p>
        </div>
      </footer>
    </main>
  )
}

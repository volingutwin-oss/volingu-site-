import { Play, ArrowRight, Bot, Users, Clock, TrendingUp, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container-custom text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-8 animate-float">
          <Sparkles className="w-4 h-4 mr-2" />
          Нейросотрудники для вашего бизнеса
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 px-4">
          <span className="gradient-text">AI-ассистенты</span>
          <br />
          <span className="text-gray-900">которые работают</span>
          <br />
          <span className="text-gray-900">24/7 без отпусков</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-balance max-w-4xl mx-auto mb-12 px-4">
          Создаем умных нейросотрудников на базе ChatGPT, обученных на знаниях вашей компании. 
          Они работают как менеджеры по продажам, специалисты поддержки, HR-менеджеры и консультанты.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
          <a href="#contact" className="btn-primary text-lg px-8 py-4 animate-pulse-glow">
            Получить консультацию
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </a>
          <a href="#demo" className="btn-secondary text-lg px-8 py-4">
            <Play className="mr-2 w-5 h-5 inline" />
            Смотреть демо
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 animate-float">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Довольных клиентов</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 animate-float" style={{ animationDelay: '0.5s' }}>
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Работа без перерывов</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 animate-float" style={{ animationDelay: '1s' }}>
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">85%</div>
            <div className="text-sm text-gray-600">Рост продаж</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 animate-float" style={{ animationDelay: '1.5s' }}>
              <Bot className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">1000+</div>
            <div className="text-sm text-gray-600">Нейросотрудников</div>
          </div>
        </div>
      </div>
    </section>
  )
}

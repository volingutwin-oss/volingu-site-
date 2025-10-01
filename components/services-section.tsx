"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  HeadphonesIcon,
  TrendingUp,
  Users,
  FileText,
  ShoppingCart,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  Phone,
  MessageCircle,
  Send,
  Globe,
  BarChart3,
} from "lucide-react"
import { 
  ServicesAnimation, 
  CardsAnimation, 
  GradientTextAnimation 
} from "@/components/scroll-animations"

// Основные услуги
const mainServices = [
  {
    icon: Phone,
    title: "Голосовые боты",
    description: "Быстрые, точные, всегда на связи. Обрабатывают звонки 24/7 с естественным голосом",
    features: ["Обработка входящих звонков", "Голосовое распознавание", "Естественная речь", "Интеграция с CRM"],
    color: "accent",
  },
  {
    icon: MessageCircle,
    title: "Боты для мессенджеров",
    description: "Удобные, эффективные, всегда онлайн. Работают в Telegram, WhatsApp, Viber",
    features: ["Telegram боты", "WhatsApp интеграция", "Viber поддержка", "Мгновенные ответы"],
    color: "primary",
  },
  {
    icon: Send,
    title: "Умные рассылки",
    description: "Персонализированные email-кампании с AI-оптимизацией контента и времени отправки",
    features: ["Персонализация контента", "Оптимизация времени", "A/B тестирование", "Аналитика эффективности"],
    color: "accent",
  },
  {
    icon: Globe,
    title: "Виджеты для сайтов",
    description: "Интерактивные чат-виджеты для сайта с умными ответами и интеграцией с бизнес-процессами",
    features: ["Чат-виджеты", "Умные ответы", "Интеграция с сайтом", "Сбор лидов"],
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Единая панель",
    description: "Централизованное управление всеми AI-ассистентами, аналитика и настройки в одном месте",
    features: ["Централизованное управление", "Аналитика и отчеты", "Настройка ботов", "Мониторинг работы"],
    color: "accent",
  },
]


const benefits = [
  {
    icon: Clock,
    title: "24/7 доступность",
    description: "Работают круглосуточно без выходных, отпусков и больничных",
  },
  {
    icon: Zap,
    title: "Мгновенные ответы",
    description: "Отвечают на запросы клиентов за секунды, не заставляя ждать",
  },
  {
    icon: Shield,
    title: "Высокое качество",
    description: "Обучены на ваших данных и всегда дают актуальную информацию",
  },
  {
    icon: TrendingUp,
    title: "Масштабируемость",
    description: "Легко справляются с любым объемом запросов без потери качества",
  },
]

// Компонент для отображения услуг
function ServicesGrid({ services }: { services: typeof mainServices }) {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      {/* First row - 3 services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {services.slice(0, 3).map((service, index) => {
          const IconComponent = service.icon
          return (
            <CardsAnimation key={index}>
              <Card className="bg-card/80 backdrop-blur-sm border-border/70 hover:bg-card/90 transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${
                    service.color === "accent" 
                      ? "bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20" 
                      : "bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20"
                  }`}
                >
                  <IconComponent
                    className={`w-8 h-8 ${service.color === "accent" ? "text-accent" : "text-primary"}`}
                  />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors text-center">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </CardsAnimation>
          )
        })}
      </div>
      
      {/* Second row - 2 services centered */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {services.slice(3, 5).map((service, index) => {
            const IconComponent = service.icon
            return (
              <CardsAnimation key={index + 3}>
                <Card className="bg-card/80 backdrop-blur-sm border-border/70 hover:bg-card/90 transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${
                      service.color === "accent" 
                        ? "bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20" 
                        : "bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20"
                    }`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${service.color === "accent" ? "text-accent" : "text-primary"}`}
                    />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors text-center">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              </CardsAnimation>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ServicesAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              <GradientTextAnimation className="text-3xl md:text-5xl font-bold">
                AI-решения
              </GradientTextAnimation>
              <br />
              <span className="text-foreground">для вашего бизнеса</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Комплексные решения для автоматизации коммуникаций: от голосовых ботов до единой панели управления
            </p>
          </div>
        </ServicesAnimation>

               {/* Services Grid */}
               <ServicesGrid services={mainServices} />


        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Почему выбирают наши AI-решения?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Современные технологии искусственного интеллекта для максимальной эффективности вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
            Подобрать AI-решение для вашего бизнеса
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight, Building2, ShoppingCart, GraduationCap } from "lucide-react"

const caseStudies = [
  {
    company: "TechStore",
    industry: "E-commerce",
    icon: ShoppingCart,
    logo: "/techstore-logo.jpg",
    challenge: "Высокая нагрузка на службу поддержки, долгое время ответа клиентам",
    solution: "Внедрили AI-ассистента для первичной поддержки и консультаций по товарам",
    results: [
      { metric: "Время ответа", value: "2 мин", change: "-85%" },
      { metric: "Конверсия", value: "24%", change: "+40%" },
      { metric: "Экономия", value: "₽2.5М", change: "в год" },
    ],
    testimonial:
      "AI-ассистент полностью изменил нашу работу с клиентами. Теперь мы отвечаем мгновенно и продаем больше.",
    author: "Алексей Петров",
    position: "CEO TechStore",
    avatar: "/ceo-portrait.png",
  },
  {
    company: "EduPlatform",
    industry: "Образование",
    icon: GraduationCap,
    logo: "/eduplatform-logo.jpg",
    challenge: "Сложно обрабатывать заявки студентов и консультировать по курсам",
    solution: "Создали AI-консультанта для помощи в выборе курсов и поддержки студентов",
    results: [
      { metric: "Заявки", value: "+180%", change: "рост" },
      { metric: "Удержание", value: "92%", change: "+25%" },
      { metric: "Автоматизация", value: "70%", change: "запросов" },
    ],
    testimonial: "Студенты получают помощь 24/7, а мы сосредоточились на создании качественного контента.",
    author: "Мария Сидорова",
    position: "Основатель EduPlatform",
    avatar: "/female-founder-portrait.png",
  },
  {
    company: "FinConsult",
    industry: "Финансы",
    icon: Building2,
    logo: "/finconsult-logo.jpg",
    challenge: "Нужно было масштабировать консультации без найма дорогих специалистов",
    solution: "Разработали AI-консультанта по финансовым услугам и инвестициям",
    results: [
      { metric: "Клиенты", value: "500+", change: "новых" },
      { metric: "Выручка", value: "+320%", change: "рост" },
      { metric: "Эффективность", value: "95%", change: "точность" },
    ],
    testimonial: "AI-консультант работает лучше многих живых специалистов. Клиенты довольны качеством советов.",
    author: "Дмитрий Волков",
    position: "Директор FinConsult",
    avatar: "/business-director-portrait.jpg",
  },
]

const testimonials = [
  {
    text: "Внедрение нейросотрудника окупилось за 3 месяца. Теперь наши продажи работают круглосуточно.",
    author: "Елена Козлова",
    position: "Директор по маркетингу",
    company: "RetailChain",
    avatar: "/marketing-director-portrait.jpg",
    rating: 5,
  },
  {
    text: "Качество консультаций AI превзошло наши ожидания. Клиенты даже не понимают, что общаются с ботом.",
    author: "Игорь Смирнов",
    position: "Владелец бизнеса",
    company: "AutoService",
    avatar: "/confident-business-owner.png",
    rating: 5,
  },
  {
    text: "Сократили расходы на персонал на 60% и увеличили качество обслуживания. Рекомендую всем!",
    author: "Анна Федорова",
    position: "HR-директор",
    company: "TechCorp",
    avatar: "/hr-director-portrait.jpg",
    rating: 5,
  },
]

export function CaseStudiesSection() {
  return (
    <section id="cases" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            <span className="text-foreground">Истории успеха</span>
            <br />
            <span className="gradient-text">наших клиентов</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Реальные результаты компаний, которые внедрили нейросотрудников
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-20">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/70 overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left side - Company info and challenge */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{study.company}</h3>
                        <Badge variant="outline" className="mt-1">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Вызов:</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Решение:</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-secondary/30 rounded-lg p-4 border-l-4 border-accent">
                        <Quote className="w-5 h-5 text-accent mb-2" />
                        <p className="text-foreground italic mb-3">"{study.testimonial}"</p>
                        <div className="flex items-center gap-3">
                          <img
                            src={study.author === "Алексей Петров" ? study.avatar : study.avatar}
                            alt={study.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-foreground">{study.author}</div>
                            <div className="text-sm text-muted-foreground">{study.position}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Results */}
                  <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                    <h4 className="text-xl font-bold text-foreground mb-6">Результаты:</h4>
                    <div className="grid grid-cols-1 gap-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-card/50 rounded-lg p-4 border border-border/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">{result.metric}</span>
                            <Badge variant="secondary" className="bg-accent/20 text-accent">
                              {result.change}
                            </Badge>
                          </div>
                          <div className="text-2xl font-bold text-foreground">{result.value}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full mt-6 group bg-transparent">
                      Подробнее о кейсе
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Что говорят наши клиенты</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Отзывы руководителей компаний, которые уже используют нейросотрудников
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/70 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-foreground italic">"{testimonial.text}"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Станьте следующей историей успеха</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сотням компаний, которые уже трансформировали свой бизнес с помощью AI
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
            Обсудить ваш проект
          </Button>
        </div>
      </div>
    </section>
  )
}

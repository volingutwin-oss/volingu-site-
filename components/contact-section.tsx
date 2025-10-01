"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Rocket,
  Calculator,
  Calendar,
  MessageSquare,
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (495) 123-45-67",
    description: "Пн-Пт с 9:00 до 18:00",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@neurostaff.ru",
    description: "Ответим в течение часа",
  },
  {
    icon: MapPin,
    title: "Офис",
    value: "Москва, ул. Тверская, 1",
    description: "Встречи по записи",
  },
  {
    icon: Clock,
    title: "Время работы",
    value: "Пн-Пт: 9:00-18:00",
    description: "Сб-Вс: выходные",
  },
]

const leadMagnets = [
  {
    icon: Calculator,
    title: "Калькулятор ROI",
    description: "Рассчитайте экономию от внедрения нейросотрудника",
    cta: "Рассчитать экономию",
    badge: "Бесплатно",
  },
  {
    icon: Rocket,
    title: "Демо на 7 дней",
    description: "Протестируйте AI-ассистента на реальных задачах",
    cta: "Получить демо",
    badge: "Без обязательств",
  },
  {
    icon: Calendar,
    title: "Консультация",
    description: "30-минутная встреча с экспертом по AI",
    cta: "Записаться",
    badge: "Персонально",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    service: "",
    budget: "",
    message: "",
    agreement: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Заявка отправлена!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Мы свяжемся с вами в течение 30 минут для обсуждения вашего проекта
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                employees: "",
                service: "",
                budget: "",
                message: "",
                agreement: false,
              })
            }}
            variant="outline"
          >
            Отправить еще одну заявку
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            <span className="text-foreground">Готовы начать?</span>
            <br />
            <span className="gradient-text">Свяжитесь с нами</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Получите персональную консультацию и расчет стоимости нейросотрудника для вашего бизнеса
          </p>
        </div>

        {/* Lead Magnets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {leadMagnets.map((magnet, index) => {
            const IconComponent = magnet.icon
            return (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border-border/70 hover:bg-card/90 transition-all duration-300 cursor-pointer group shadow-sm"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-lg">{magnet.title}</CardTitle>
                    <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
                      {magnet.badge}
                    </Badge>
                  </div>
                  <CardDescription>{magnet.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {magnet.cta}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Оставить заявку</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами в течение 30 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input
                      id="company"
                      placeholder="Название компании"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="employees">Количество сотрудников</Label>
                    <Select onValueChange={(value) => handleInputChange("employees", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 человек</SelectItem>
                        <SelectItem value="11-50">11-50 человек</SelectItem>
                        <SelectItem value="51-200">51-200 человек</SelectItem>
                        <SelectItem value="200+">Более 200 человек</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Менеджер по продажам</SelectItem>
                        <SelectItem value="support">Служба поддержки</SelectItem>
                        <SelectItem value="hr">HR-ассистент</SelectItem>
                        <SelectItem value="consultant">Консультант</SelectItem>
                        <SelectItem value="content">Контент-менеджер</SelectItem>
                        <SelectItem value="custom">Индивидуальное решение</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Бюджет проекта</Label>
                  <Select onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите диапазон" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100">50,000 - 100,000₽</SelectItem>
                      <SelectItem value="100-300">100,000 - 300,000₽</SelectItem>
                      <SelectItem value="300-500">300,000 - 500,000₽</SelectItem>
                      <SelectItem value="500+">Более 500,000₽</SelectItem>
                      <SelectItem value="discuss">Обсудим индивидуально</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших задачах и целях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
                    required
                  />
                  <Label htmlFor="agreement" className="text-sm text-muted-foreground">
                    Согласен с{" "}
                    <a href="#" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>{" "}
                    и{" "}
                    <a href="#" className="text-primary hover:underline">
                      условиями обработки данных
                    </a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base sm:text-lg py-3"
                  disabled={isSubmitting || !formData.agreement}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Получить консультацию
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/70 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Контактная информация</CardTitle>
                <CardDescription>Свяжитесь с нами удобным способом</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{method.title}</h4>
                        <p className="text-foreground font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/70 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Частые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Сколько времени занимает разработка?</h4>
                  <p className="text-sm text-muted-foreground">Обычно 2-4 недели в зависимости от сложности задач.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Можно ли интегрировать с нашей CRM?</h4>
                  <p className="text-sm text-muted-foreground">
                    Да, мы интегрируемся с любыми популярными CRM и системами.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Есть ли техническая поддержка?</h4>
                  <p className="text-sm text-muted-foreground">
                    Да, предоставляем полную техподдержку и обучение команды.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

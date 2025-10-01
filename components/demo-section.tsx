"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, Play, Pause, Volume2, VolumeX, Sparkles, Clock, CheckCircle2 } from "lucide-react"
import { DemoAnimation, GradientTextAnimation } from "@/components/scroll-animations"

const demoMessages = [
  {
    type: "user",
    message: "Привет! Расскажи о ваших услугах по разработке сайтов",
    timestamp: "14:32",
  },
  {
    type: "bot",
    message:
      "Здравствуйте! Рад помочь вам с информацией о наших услугах. Мы специализируемся на создании современных веб-сайтов и приложений. У нас есть несколько пакетов услуг:\n\n• Лендинг-страницы от 50,000₽\n• Корпоративные сайты от 150,000₽\n• Интернет-магазины от 300,000₽\n• Веб-приложения от 500,000₽\n\nКакой тип сайта вас интересует?",
    timestamp: "14:32",
  },
  {
    type: "user",
    message: "Мне нужен интернет-магазин для продажи одежды",
    timestamp: "14:33",
  },
  {
    type: "bot",
    message:
      "Отличный выбор! Для интернет-магазина одежды я рекомендую следующий функционал:\n\n✅ Каталог с фильтрами по размерам, цветам, брендам\n✅ Корзина и быстрое оформление заказов\n✅ Интеграция с платежными системами\n✅ Система управления складом\n✅ Мобильная адаптация\n✅ SEO-оптимизация\n\nСтоимость такого проекта от 350,000₽. Хотите обсудить детали? Могу связать вас с нашим менеджером.",
    timestamp: "14:33",
  },
]

const demoScenarios = [
  {
    title: "Менеджер по продажам",
    description: "Консультирует клиентов и помогает с выбором услуг",
    active: true,
  },
  {
    title: "Техподдержка",
    description: "Отвечает на вопросы о продуктах и услугах",
    active: false,
  },
  {
    title: "HR-консультант",
    description: "Проводит первичное интервью с кандидатами",
    active: false,
  },
]

export function DemoSection() {
  const [currentMessage, setCurrentMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [activeScenario, setActiveScenario] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setIsTyping(true)
      // Simulate bot response delay
      setTimeout(() => {
        setIsTyping(false)
      }, 2000)
      setCurrentMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Попробуйте прямо сейчас
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            <span className="text-foreground">Протестируйте</span>
            <br />
            <span className="gradient-text">нейросотрудника</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Посмотрите, как AI-ассистент общается с клиентами и решает их задачи в режиме реального времени
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Demo Scenarios */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-foreground mb-6">Выберите сценарий:</h3>
            <div className="space-y-4">
              {demoScenarios.map((scenario, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeScenario === index
                      ? "bg-primary/10 border-primary/30 shadow-sm"
                      : "bg-card/80 border-border/70 hover:bg-card/90 shadow-sm"
                  }`}
                  onClick={() => setActiveScenario(index)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{scenario.title}</CardTitle>
                      {activeScenario === index && (
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          Активен
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{scenario.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Demo Controls */}
            <div className="mt-8 p-4 bg-card/30 rounded-lg border border-border/50">
              <h4 className="font-medium text-foreground mb-4">Управление демо:</h4>
              <div className="flex items-center gap-3">
                <Button size="sm" variant="outline" onClick={() => setIsPlaying(!isPlaying)} className="flex-1">
                  {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {isPlaying ? "Пауза" : "Запуск"}
                </Button>
                <Button size="sm" variant="outline" onClick={() => setIsMuted(!isMuted)}>
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[500px] sm:h-[600px] bg-card/80 backdrop-blur-sm border-border/70 shadow-sm">
              <CardHeader className="border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">AI-Ассистент</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        Онлайн
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Демо режим
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex flex-col h-[380px] sm:h-[480px] p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {demoMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] sm:max-w-[80%] rounded-lg px-3 sm:px-4 py-2 sm:py-3 ${
                          msg.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        <div className="whitespace-pre-line text-sm">{msg.message}</div>
                        <div className="flex items-center justify-end gap-1 mt-2 text-xs opacity-70">
                          <Clock className="w-3 h-3" />
                          {msg.timestamp}
                          {msg.type === "user" && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-3">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="border-t border-border/50 p-4">
                  <div className="flex items-center gap-3">
                    <Input
                      placeholder="Напишите ваш вопрос..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!currentMessage.trim() || isTyping}
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Это демо-версия. Реальный ассистент будет обучен на данных вашей компании.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Готовы получить своего нейросотрудника?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создадим персонального AI-ассистента для вашего бизнеса за 2-3 недели
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4">
            Заказать разработку
          </Button>
        </div>
      </div>
    </section>
  )
}

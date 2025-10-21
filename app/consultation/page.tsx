import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  User,
  Building,
  MessageSquare,
  Calendar
} from "lucide-react"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text">Получить консультацию</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Заполните форму, и мы свяжемся с вами в течение 30 минут для обсуждения ваших задач и подбора оптимального AI-решения
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Оставить заявку</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в течение 30 минут
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Контактная информация</CardTitle>
                  <CardDescription>
                    Свяжитесь с нами удобным способом
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Время работы</h3>
                      <p className="text-primary font-medium">Пн-Пт с 9:00 до 18:00</p>
                      <p className="text-sm text-muted-foreground">Московское время</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-accent font-medium">volingutwin@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                    </div>
                  </div>


                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Время работы</h3>
                      <p className="text-foreground">Пн-Пт: 9:00-18:00</p>
                      <p className="text-sm text-muted-foreground">Сб-Вс: выходные</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Частые вопросы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Сколько времени занимает разработка?</h3>
                    <p className="text-muted-foreground">
                      Обычно 2-4 недели в зависимости от сложности задач.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Можно ли интегрировать с нашей CRM?</h3>
                    <p className="text-muted-foreground">
                      Да, мы интегрируемся с любыми популярными CRM и системами.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Есть ли техническая поддержка?</h3>
                    <p className="text-muted-foreground">
                      Да, предоставляем полную техподдержку и обучение команды.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему стоит получить консультацию?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Персональный подход</h3>
              <p className="text-muted-foreground text-sm">
                Анализируем ваши задачи и подбираем оптимальное решение
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Опыт работы</h3>
              <p className="text-muted-foreground text-sm">
                Более 500 успешных проектов в различных отраслях
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Быстрый ответ</h3>
              <p className="text-muted-foreground text-sm">
                Связываемся в течение 30 минут после получения заявки
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Удобное время</h3>
              <p className="text-muted-foreground text-sm">
                Проводим консультации в удобное для вас время
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Менеджер по продажам", href: "#services" },
    { name: "Служба поддержки", href: "#services" },
    { name: "HR-ассистент", href: "#services" },
    { name: "Консультант", href: "#services" },
    { name: "Контент-менеджер", href: "#services" },
    { name: "E-commerce ассистент", href: "#services" },
  ],
  company: [
    { name: "О компании", href: "#about" },
    { name: "Наша команда", href: "#team" },
    { name: "Карьера", href: "#careers" },
    { name: "Новости", href: "#news" },
    { name: "Партнеры", href: "#partners" },
    { name: "Инвесторы", href: "#investors" },
  ],
  resources: [
    { name: "Документация", href: "#docs" },
    { name: "API", href: "#api" },
    { name: "Обучение", href: "#training" },
    { name: "Вебинары", href: "#webinars" },
    { name: "Блог", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Политика конфиденциальности", href: "#privacy" },
    { name: "Условия использования", href: "#terms" },
    { name: "Соглашение об уровне обслуживания", href: "#sla" },
    { name: "Безопасность", href: "#security" },
    { name: "Соответствие требованиям", href: "#compliance" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      {/* Newsletter Section */}
      <div className="border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Будьте в курсе новостей AI</h3>
              <p className="text-muted-foreground">
                Получайте еженедельную рассылку с новостями искусственного интеллекта и кейсами внедрения
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Ваш email" className="flex-1" />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Mail className="w-4 h-4 mr-2" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-bold gradient-text">NeuroStaff</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Создаем умных нейросотрудников, которые помогают бизнесу работать эффективнее и зарабатывать больше.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-foreground">hello@neurostaff.ru</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground">Москва, ул. Тверская, 1</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-secondary/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ресурсы</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>© 2024 NeuroStaff. Все права защищены.</span>
              <span>ИНН: 1234567890</span>
              <span>ОГРН: 1234567890123</span>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Наверх
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

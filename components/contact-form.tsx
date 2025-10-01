"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  employees: string
  service: string
  budget: string
  message: string
  privacy: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    service: '',
    budget: '',
    message: '',
    privacy: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.privacy) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с политикой конфиденциальности",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Успешно!",
          description: "Заявка отправлена. Мы свяжемся с вами в течение 30 минут.",
        })
      } else {
        const error = await response.json()
        throw new Error(error.error || 'Ошибка при отправке заявки')
      }
    } catch (error) {
      console.error('Ошибка при отправке заявки:', error)
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке заявки. Попробуйте еще раз.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Заявка отправлена!</h3>
        <p className="text-muted-foreground mb-6">
          Спасибо за обращение! Мы свяжемся с вами в течение 30 минут.
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              employees: '',
              service: '',
              budget: '',
              message: '',
              privacy: false
            })
          }}
          variant="outline"
        >
          Отправить еще одну заявку
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Имя *</Label>
          <Input 
            id="name" 
            placeholder="Ваше имя" 
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
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
            onChange={(e) => handleInputChange('email', e.target.value)}
            required 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон *</Label>
          <Input 
            id="phone" 
            placeholder="+7 (999) 123-45-67" 
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Компания</Label>
          <Input 
            id="company" 
            placeholder="Название компании" 
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="employees">Количество сотрудников</Label>
          <Select value={formData.employees} onValueChange={(value) => handleInputChange('employees', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 сотрудников</SelectItem>
              <SelectItem value="11-50">11-50 сотрудников</SelectItem>
              <SelectItem value="51-200">51-200 сотрудников</SelectItem>
              <SelectItem value="200+">200+ сотрудников</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Интересующая услуга</Label>
          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="voice-bots">Голосовые боты</SelectItem>
              <SelectItem value="chat-bots">Чат-боты</SelectItem>
              <SelectItem value="email-marketing">Умные рассылки</SelectItem>
              <SelectItem value="website-widgets">Виджеты для сайта</SelectItem>
              <SelectItem value="operator-panel">Панель оператора</SelectItem>
              <SelectItem value="consultation">Консультация</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Бюджет проекта</Label>
        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Выберите диапазон" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-100k">До 100,000 ₽</SelectItem>
            <SelectItem value="100k-500k">100,000 - 500,000 ₽</SelectItem>
            <SelectItem value="500k-1m">500,000 - 1,000,000 ₽</SelectItem>
            <SelectItem value="1m+">Свыше 1,000,000 ₽</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Сообщение</Label>
        <Textarea 
          id="message" 
          placeholder="Расскажите о ваших задачах и целях..."
          className="min-h-[120px]"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox 
          id="privacy" 
          checked={formData.privacy}
          onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
          required 
        />
        <Label htmlFor="privacy" className="text-sm text-muted-foreground">
          Согласен с{" "}
          <a href="/privacy" className="text-primary hover:underline">
            политикой конфиденциальности
          </a>{" "}
          и{" "}
          <a href="/terms" className="text-primary hover:underline">
            условиями обработки данных
          </a>
        </Label>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Отправляем...
          </>
        ) : (
          <>
            <ArrowRight className="w-4 h-4 mr-2" />
            Получить консультацию
          </>
        )}
      </Button>
    </form>
  )
}

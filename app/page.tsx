"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp, SlideInLeft, SlideInRight } from "@/components/scroll-animations"
import { ProfitCalculator } from "@/components/profit-calculator"
import { VoiceCasesSection } from "@/components/voice-cases-section"
import TestimonialsSection from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

const FAQItem = ({ item, index }: { item: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{
      borderBottom: '1px solid #e5e7eb',
      padding: '1.5rem 0'
    }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: '#1f2937',
            padding: 0,
            gap: '1rem'
          }}
        >
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'transform 0.2s ease',
          flexShrink: 0,
          lineHeight: '1'
        }}>
          {isOpen ? '−' : '+'}
        </div>
        <span>{item.question}</span>
      </button>
      {isOpen && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '0.5rem',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <p style={{
            color: '#4b5563',
            lineHeight: '1.6',
            margin: 0
          }}>
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

const faqData = [
  {
    id: 1,
    question: "Что такое голосовые и чат-боты?",
    answer: "Голосовые и чат-боты — это AI-ассистенты, которые автоматически обрабатывают запросы клиентов через голосовые звонки и текстовые сообщения. Они работают 24/7, отвечают на вопросы, помогают с выбором услуг и конвертируют посетителей в клиентов."
  },
  {
    id: 2,
    question: "Какие задачи решают голосовые и чат-боты?",
    answer: "Наши боты решают широкий спектр задач: консультируют клиентов, принимают заказы, отвечают на часто задаваемые вопросы, собирают контактные данные, записывают на консультации, помогают с выбором услуг и обеспечивают круглосуточную поддержку."
  },
  {
    id: 3,
    question: "Как работают голосовые боты?",
    answer: "Голосовые боты используют технологии распознавания речи (ASR) и синтеза речи (TTS). Они понимают естественную речь клиентов, обрабатывают запросы с помощью AI, формируют ответы и озвучивают их естественным голосом, создавая ощущение общения с живым оператором."
  },
  {
    id: 4,
    question: "Можно ли интегрировать ботов с CRM?",
    answer: "Да, мы интегрируем ботов с популярными CRM-системами: Битрикс24, AmoCRM, 1С, Salesforce и другими. Все данные о клиентах, заявки и история общения автоматически сохраняются в вашей CRM для дальнейшей работы менеджеров."
  },
  {
    id: 5,
    question: "Поддерживают ли боты несколько языков?",
    answer: "Да, наши боты поддерживают русский, английский, немецкий, французский, испанский и другие языки. Они могут автоматически определять язык клиента и отвечать на его языке, что особенно важно для международного бизнеса."
  },
  {
    id: 6,
    question: "Безопасны ли данные клиентов?",
    answer: "Абсолютно! Мы используем шифрование данных, соблюдаем GDPR и российское законодательство о персональных данных. Все данные хранятся на защищенных серверах, доступ к ним имеют только авторизованные сотрудники, и мы никогда не передаем информацию третьим лицам."
  },
  {
    id: 7,
    question: "Сколько стоит внедрение AI-ассистентов?",
    answer: "Стоимость зависит от сложности задач и количества каналов связи. Базовый пакет начинается от 50 000 рублей в месяц. Включает настройку, обучение бота, интеграцию с вашими системами и техническую поддержку. Первая консультация бесплатна."
  },
  {
    id: 8,
    question: "Как быстро можно запустить бота?",
    answer: "Простой чат-бот для сайта запускается за 3-5 дней. Голосовой бот с интеграцией в CRM — за 1-2 недели. Сложные решения с множественными интеграциями — за 2-4 недели. Мы предоставляем детальный план внедрения на этапе консультации."
  },
  {
    id: 9,
    question: "Можно ли обучить бота на наших данных?",
    answer: "Конечно! Мы загружаем ваши базы знаний, FAQ, документацию и обучаем бота на ваших материалах. Это повышает точность ответов до 95% и позволяет боту говорить на языке вашей компании."
  },
  {
    id: 10,
    question: "Что если бот не знает ответ на вопрос?",
    answer: "Бот автоматически передает сложные вопросы живому оператору. При этом он собирает всю информацию о клиенте и контексте вопроса, чтобы оператор мог быстро помочь. Также бот запоминает новые ответы для будущих диалогов."
  },
  {
    id: 11,
    question: "Как измеряется эффективность ботов?",
    answer: "Мы отслеживаем ключевые метрики: количество обработанных запросов, время ответа, конверсию в заявки, удовлетворенность клиентов, экономию на операторах. Предоставляем детальную аналитику и рекомендации по улучшению."
  },
  {
    id: 12,
    question: "Нужно ли техническое обслуживание?",
    answer: "Мы обеспечиваем полное техническое сопровождение: мониторинг работы 24/7, обновления, добавление новых функций, обучение на новых данных. Включено в стоимость обслуживания. Вы можете сосредоточиться на бизнесе."
  },
  {
    id: 13,
    question: "Работают ли боты в мессенджерах?",
    answer: "Да, наши боты работают в Telegram, WhatsApp, Viber, Facebook Messenger, VK, Одноклассниках и других популярных мессенджерах. Один бот может одновременно работать во всех каналах, обеспечивая единообразный опыт общения."
  },
  {
    id: 14,
    question: "Можно ли настроить голос бота?",
    answer: "Да, мы можем настроить голос бота под ваши требования: мужской или женский, возраст, тембр, скорость речи. Также можем записать голос вашего сотрудника или использовать готовые профессиональные голоса."
  },
  {
    id: 15,
    question: "Что входит в стоимость обслуживания?",
    answer: "В стоимость входит: техническая поддержка 24/7, обновления и улучшения, добавление новых функций, обучение на новых данных, мониторинг работы, аналитика и отчеты, интеграции с новыми системами."
  },
  {
    id: 16,
    question: "Есть ли пробный период?",
    answer: "Да, мы предоставляем 14-дневный бесплатный пробный период. За это время вы сможете протестировать все функции, настроить бота под свои задачи и оценить эффективность. Никаких обязательств по покупке."
  },
  {
    id: 17,
    question: "Можно ли изменить настройки после запуска?",
    answer: "Конечно! Мы можем в любой момент изменить сценарии диалогов, добавить новые функции, обновить базу знаний, настроить интеграции. Все изменения вносятся без остановки работы бота."
  },
  {
    id: 18,
    question: "Как происходит интеграция с сайтом?",
    answer: "Интеграция происходит через простой код, который вы вставляете на сайт. Никаких сложных технических работ не требуется. Виджет автоматически адаптируется под дизайн вашего сайта и начинает работать сразу после установки."
  }
]

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: 'rotate(15deg)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          left: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: 'rotate(-15deg)'
        }} />
        
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* AI Theme Visual Element */}
          <FadeIn>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              {/* AI Brain Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
                animation: 'pulse 2s infinite'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              
              {/* 24/7 Clock Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
                animation: 'pulse 2s infinite 0.5s'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                </svg>
              </div>
              
              {/* Robot Assistant Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.3)',
                animation: 'pulse 2s infinite 1s'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn>
                   <h1 style={{ 
                     fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                     fontWeight: 'bold', 
                     color: 'white', 
                     marginBottom: '1.5rem',
                     lineHeight: '1.2'
                   }}>
                     AI-ассистенты которые работают 24/7
                   </h1>
          </FadeIn>
          
          <FadeIn>
            <p style={{ 
              fontSize: '1.5rem', 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '2rem', 
              maxWidth: '700px', 
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}>
              Создаем умных нейросотрудников на базе ChatGPT для вашего бизнеса
            </p>
          </FadeIn>
          
          <FadeIn>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                     <a href="/contact" style={{ 
                       background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                       color: 'white', 
                       padding: '1rem 2rem', 
                       border: 'none', 
                       borderRadius: '0.75rem', 
                       fontSize: '1.125rem', 
                       textDecoration: 'none',
                       fontWeight: '600',
                       boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
                       transition: 'all 0.2s'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-2px)'
                       e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)'
                       e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)'
                     }}>
                       Получить консультацию
                     </a>
                     <a href="#services" style={{ 
                       backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                       color: 'white', 
                       padding: '1rem 2rem', 
                       border: '2px solid rgba(255, 255, 255, 0.3)', 
                       borderRadius: '0.75rem', 
                       fontSize: '1.125rem', 
                       textDecoration: 'none',
                       fontWeight: '600',
                       backdropFilter: 'blur(10px)',
                       transition: 'all 0.2s'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                       e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                       e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                     }}>
                       Смотреть услуги
                     </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                     <h2 style={{ 
                       fontSize: 'clamp(2rem, 4vw, 3rem)', 
                       fontWeight: 'bold', 
                       color: '#1f2937', 
                       marginBottom: '1.5rem',
                       background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent',
                       backgroundClip: 'text'
                     }}>
                       AI-решения для вашего бизнеса
                     </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Комплексные решения для автоматизации коммуникаций
              </p>
            </div>
          </FadeIn>
          
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto', alignItems: 'start' }}>
                   <SlideInLeft >
                     <a href="/services/voice-bots" style={{ textDecoration: 'none' }}>
                       <div style={{ 
                         backgroundColor: 'white', 
                         border: '1px solid #e5e7eb', 
                         borderRadius: '1.5rem', 
                         padding: '2rem', 
                         boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                         cursor: 'pointer', 
                         transition: 'all 0.3s', 
                         position: 'relative', 
                         overflow: 'hidden',
                         height: '280px',
                         display: 'flex',
                         flexDirection: 'column'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.transform = 'translateY(-8px)'
                         e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.transform = 'translateY(0)'
                         e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                       }}>
                         <div style={{ 
                           width: '4rem', 
                           height: '4rem', 
                           background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                           borderRadius: '1rem', 
                           display: 'flex', 
                           alignItems: 'center', 
                           justifyContent: 'center', 
                           marginBottom: '1.5rem',
                           fontSize: '1.5rem',
                           color: 'white',
                           fontWeight: 'bold'
                         }}>
                           <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                         </div>
                         <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Голосовые роботы</h3>
                         <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Обрабатывают звонки 24/7 с естественным голосом и высокой конверсией</p>
                       </div>
                     </a>
                   </SlideInLeft>
                   
                   <SlideInLeft >
                     <a href="/services/chat-bots" style={{ textDecoration: 'none' }}>
                       <div style={{ 
                         backgroundColor: 'white', 
                         border: '1px solid #e5e7eb', 
                         borderRadius: '1.5rem', 
                         padding: '2rem', 
                         boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                         cursor: 'pointer', 
                         transition: 'all 0.3s', 
                         position: 'relative', 
                         overflow: 'hidden',
                         height: '280px',
                         display: 'flex',
                         flexDirection: 'column'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.transform = 'translateY(-8px)'
                         e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.transform = 'translateY(0)'
                         e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                       }}>
                         <div style={{ 
                           width: '4rem', 
                           height: '4rem', 
                           background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                           borderRadius: '1rem', 
                           display: 'flex', 
                           alignItems: 'center', 
                           justifyContent: 'center', 
                           marginBottom: '1.5rem',
                           fontSize: '2rem',
                           color: 'white',
                           fontWeight: 'bold'
                         }}>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                         </div>
                         <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Чат-боты</h3>
                         <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Работают в Telegram, WhatsApp, Viber с умными ответами</p>
                       </div>
                     </a>
                   </SlideInLeft>
                   
                   <SlideInLeft >
                     <a href="/services/email-marketing" style={{ textDecoration: 'none' }}>
                       <div style={{ 
                         backgroundColor: 'white', 
                         border: '1px solid #e5e7eb', 
                         borderRadius: '1.5rem', 
                         padding: '2rem', 
                         boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                         cursor: 'pointer', 
                         transition: 'all 0.3s', 
                         position: 'relative', 
                         overflow: 'hidden',
                         height: '280px',
                         display: 'flex',
                         flexDirection: 'column'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.transform = 'translateY(-8px)'
                         e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.transform = 'translateY(0)'
                         e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                       }}>
                         <div style={{ 
                           width: '4rem', 
                           height: '4rem', 
                           background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                           borderRadius: '1rem', 
                           display: 'flex', 
                           alignItems: 'center', 
                           justifyContent: 'center', 
                           marginBottom: '1.5rem',
                           fontSize: '1.5rem',
                           color: 'white',
                           fontWeight: 'bold'
                         }}>
                           <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                         </div>
                         <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Умные рассылки</h3>
                         <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Персонализированные email-кампании с AI-анализом</p>
                       </div>
                     </a>
                   </SlideInLeft>

                   <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                     <div style={{ flex: '0 0 350px', maxWidth: '350px' }}>
                     <SlideInLeft >
                       <a href="/services/website-widgets" style={{ textDecoration: 'none' }}>
                         <div style={{ 
                           backgroundColor: 'white', 
                           border: '1px solid #e5e7eb', 
                           borderRadius: '1.5rem', 
                           padding: '2rem', 
                           boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                           cursor: 'pointer', 
                           transition: 'all 0.3s', 
                           position: 'relative', 
                           overflow: 'hidden',
                             height: '280px',
                             display: 'flex',
                             flexDirection: 'column',
                             justifyContent: 'space-between'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-8px)'
                           e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)'
                           e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                         }}>
                           <div style={{ 
                             width: '4rem', 
                             height: '4rem', 
                               background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                             borderRadius: '1rem', 
                             display: 'flex', 
                             alignItems: 'center', 
                             justifyContent: 'center', 
                             marginBottom: '1.5rem',
                             fontSize: '1.5rem',
                             color: 'white',
                             fontWeight: 'bold'
                           }}>
                             <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                           </div>
                           <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Виджеты для сайта</h3>
                             <p style={{ color: '#6b7280', lineHeight: '1.6', flex: 1 }}>AI-чат виджеты для сайта с умными ответами и конверсией</p>
                         </div>
                       </a>
                     </SlideInLeft>
                     </div>

                     <div style={{ flex: '0 0 350px', maxWidth: '350px' }}>
                     <SlideInLeft >
                       <a href="/services/operator-panel" style={{ textDecoration: 'none' }}>
                         <div style={{ 
                           backgroundColor: 'white', 
                           border: '1px solid #e5e7eb', 
                           borderRadius: '1.5rem', 
                           padding: '2rem', 
                           boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                           cursor: 'pointer', 
                           transition: 'all 0.3s', 
                           position: 'relative', 
                           overflow: 'hidden',
                             height: '280px',
                             display: 'flex',
                             flexDirection: 'column',
                             justifyContent: 'space-between'
                         }}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-8px)'
                           e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)'
                           e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                         }}>
                           <div style={{ 
                             width: '4rem', 
                             height: '4rem', 
                               background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                             borderRadius: '1rem', 
                             display: 'flex', 
                             alignItems: 'center', 
                             justifyContent: 'center', 
                             marginBottom: '1.5rem',
                             fontSize: '1.5rem',
                             color: 'white',
                             fontWeight: 'bold'
                           }}>
                             <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                           </div>
                           <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Панель оператора</h3>
                             <p style={{ color: '#6b7280', lineHeight: '1.6', flex: 1 }}>Единая панель для управления всеми каналами связи</p>
                         </div>
                       </a>
                     </SlideInLeft>
                     </div>
                   </div>
                 </div>
        </div>
      </section>

      {/* Combined Solutions Section */}
      <section style={{ 
        padding: '6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                     <h2 style={{ 
                       fontSize: 'clamp(2rem, 4vw, 3rem)', 
                       fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '1.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                Интеллектуальные решения для любого бизнеса и сферы применения
                     </h2>
            </div>
          </FadeIn>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <SlideInLeft>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
              }}>
                <div>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
        </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem', minHeight: '3.6rem' }}>
                    Крупному бизнесу
                  </h3>
                </div>
                <p style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  Индивидуальная разработка решения под высокие нагрузки и требования
                </p>
              </div>
            </SlideInLeft>

            <SlideInUp>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
              }}>
                <div>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem', minHeight: '3.6rem' }}>
                    Среднему бизнесу
                  </h3>
                </div>
                <p style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  Универсальные решения с индивидуальной настройкой
              </p>
            </div>
            </SlideInUp>
          
            <SlideInRight>
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '1.5rem', 
                padding: '2.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
              }}>
                <div>
                  <div style={{ 
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                    borderRadius: '1rem',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem', minHeight: '3.6rem' }}>
                    Малому бизнесу
                  </h3>
                </div>
                <p style={{ color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                  Готовые решения для моментального запуска
                </p>
                  </div>
            </SlideInRight>
                </div>
        </div>

        {/* Industry Solutions */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, marginTop: '8rem' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '1.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                Отраслевые решения
              </h2>
              <p style={{ 
                fontSize: '1.25rem', 
                color: 'rgba(255, 255, 255, 0.9)', 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Посмотрите, как применяются продукты Volingu в вашей области
              </p>
              </div>
            </FadeIn>
            
              <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>,
                title: 'Финансы и страхование' 
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3V8zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>,
                title: 'Медицина' 
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>,
                title: 'Транспорт и логистика' 
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>,
                title: 'ИТ и связь' 
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H9V5H7v7H5V5H3v7H1v2h2v7h2v-7h2v7h2v-7h2v7h2v-7h2v7h2v-7h2v-2z"/></svg>,
                title: 'Гостиницы и рестораны' 
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>,
                title: 'Онлайн-ритейл' 
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
                title: 'ЖКХ и энергетика' 
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18.16 10H16v8h-2v-6H10v6H8v-8H5.84L12 5.84z"/></svg>,
                title: 'Недвижимость' 
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>,
                title: 'Другие отрасли' 
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                  <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    color: 'white'
                  }}>
                    {item.icon}
                  </div>
                  <p style={{ 
                    color: 'white', 
                    fontSize: '0.9rem', 
                    fontWeight: '500',
                    lineHeight: '1.4'
                  }}>
                    {item.title}
                    </p>
                  </div>
              </FadeIn>
                  ))}
                </div>
        </div>

        {/* Task Solutions */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, marginTop: '8rem' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '1.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                Решения для ваших задач
              </h2>
              </div>
            </FadeIn>
            
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
                title: 'Автообзвон клиентской базы роботом'
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>,
                title: 'Автоматизация колл-центров'
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2zM19 18H5V8h14v10z"/></svg>,
                title: 'Приём и сверка данных'
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>,
                title: 'Опросы и обратная связь'
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>,
                title: 'Сервисная и техническая поддержка'
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2c0-.55-.45-1-1-1s-1 .45-1 1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H7zm13 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.79 1.64 5.2 4 6.32V21h6v-2.68c2.36-1.12 4-3.53 4-6.32z"/></svg>,
                title: 'Продажи'
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
                title: 'Информирование клиентов'
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 9c1.93 0 3.5-1.57 3.5-3.5S13.93 2 12 2 8.5 3.57 8.5 5.5 10.07 9 12 9zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm5 2l3-3 3 3h-2v4h-2v-4h-2z"/></svg>,
                title: 'Маркетинг и реклама'
              },
              { 
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
                title: 'Лидогенерация по базе'
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
              <div style={{ 
                backgroundColor: 'white', 
                  borderRadius: '1rem',
                padding: '2rem', 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  height: '120px',
                  minHeight: '120px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ 
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
                    borderRadius: '0.75rem',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <p style={{ 
                    color: '#1f2937', 
                    fontSize: '1rem', 
                    fontWeight: '500',
                    lineHeight: '1.4',
                    margin: 0
                  }}>
                    {item.title}
                    </p>
                  </div>
              </FadeIn>
                  ))}
                </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                     <h2 style={{ 
                       fontSize: 'clamp(2rem, 4vw, 3rem)', 
                       fontWeight: 'bold', 
                       color: '#1f2937', 
                       marginBottom: '1rem',
                       background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent',
                       backgroundClip: 'text'
                     }}>
                       Рассчитайте прибыль от AI
                     </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Узнайте, сколько дополнительной прибыли принесет нейросотрудник вашему бизнесу
              </p>
              </div>
            </FadeIn>
          
          <ProfitCalculator />
        </div>
      </section>

      {/* Voice Cases Section */}
      <VoiceCasesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Combined FAQ and Contact Section */}
      <section style={{ 
        padding: '5rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* FAQ Content */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '1rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                Вопрос-ответ
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Ответы на самые популярные вопросы о наших AI-ассистентах
              </p>
            </div>
          </FadeIn>
          
          <SlideInUp>
        <div style={{
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              boxShadow: '0 20px 25px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.3)',
              overflow: 'hidden',
              marginBottom: '4rem',
              padding: '0 1rem'
            }}>
              {faqData.map((item, index) => (
                <FadeIn key={item.id} delay={index * 50}>
                  <FAQItem
                    item={item}
                    index={index}
                  />
                </FadeIn>
              ))}
            </div>
          </SlideInUp>
        </div>

        {/* Contact Content */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <FadeIn >
                   <h2 style={{ 
                     fontSize: 'clamp(2rem, 4vw, 3rem)', 
                     fontWeight: 'bold', 
                     color: 'white', 
                     marginBottom: '1.5rem' 
                   }}>
                     Готовы начать работу с AI?
                   </h2>
          </FadeIn>
          
          <FadeIn >
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Получите бесплатную консультацию и узнайте, как AI-ассистенты могут помочь вашему бизнесу
            </p>
          </FadeIn>
          
          <FadeIn >
                   <a href="/contact" style={{ 
                     background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                     color: 'white', 
                     padding: '1rem 2rem', 
                     border: 'none', 
                     borderRadius: '0.75rem', 
                     fontSize: '1.125rem', 
                     textDecoration: 'none',
                     fontWeight: '600',
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
                     transition: 'all 0.2s'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-2px)'
                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)'
                     e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)'
                   }}>
                     Получить консультацию
                   </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
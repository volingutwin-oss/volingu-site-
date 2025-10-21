"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FadeIn, SlideInUp, SlideInLeft } from "@/components/scroll-animations"
import { useState } from "react"

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
  }

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #6b46c1 0%, #8b5cf6 50%, #a855f7 100%)',
        padding: '8rem 1rem 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Декоративные элементы */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '180px',
          height: '180px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1.5rem',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                lineHeight: '1.2'
              }}>
                ОФОРМИТЬ ЗАЯВКУ
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '600px',
                margin: '0 auto',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                Заполните форму ниже, и наш специалист свяжется с вами для обсуждения внедрения AI решений в ваш бизнес
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SlideInUp>
            <form onSubmit={handleSubmit} style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
              borderRadius: '2rem',
              padding: '3rem',
              boxShadow: '0 25px 50px rgba(107, 70, 193, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      border: '2px solid #e5e7eb',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8b5cf6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Компания
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      border: '2px solid #e5e7eb',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8b5cf6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      border: '2px solid #e5e7eb',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8b5cf6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      border: '2px solid #e5e7eb',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#8b5cf6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
              </div>


              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Расскажите подробнее о ваших потребностях..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '2px solid #e5e7eb',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#8b5cf6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    color: 'white',
                    padding: '1.25rem 3rem',
                    borderRadius: '2rem',
                    border: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
                    letterSpacing: '0.05em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(34, 197, 94, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
              </div>
            </form>
          </SlideInUp>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                ПОЧЕМУ ВЫБИРАЮТ НАС?
              </h2>
              <p style={{ color: '#4b5563', fontSize: '1.125rem' }}>
                Преимущества работы с нашей командой
              </p>
            </div>
          </FadeIn>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: "Быстрое внедрение",
                description: "Запуск AI решений от 3 дней",
                icon: "⚡"
              },
              {
                title: "Персональный подход",
                description: "Индивидуальная настройка под ваш бизнес",
                icon: "🎯"
              },
              {
                title: "Техническая поддержка",
                description: "Круглосуточная поддержка 24/7",
                icon: "🛠️"
              }
            ].map((benefit, index) => (
              <SlideInLeft key={index} delay={index * 0.2}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {benefit.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '1rem' }}>
                    {benefit.description}
                  </p>
                </div>
              </SlideInLeft>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

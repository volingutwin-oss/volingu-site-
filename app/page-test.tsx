"use client"

import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />
      
      {/* Простая Hero Section для тестирования */}
      <section style={{ 
        padding: '8rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)', 
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            AI-ассистенты которые работают 24/7
          </h1>
          
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
            }}>
              Смотреть услуги
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

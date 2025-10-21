"use client"

import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
      backdropFilter: 'blur(10px)',
      padding: '1rem', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
          {/* Logo */}
               <Link href="/" style={{ 
                 fontSize: '1.75rem', 
                 fontWeight: 'bold', 
                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 backgroundClip: 'text',
                 textDecoration: 'none',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '0.5rem'
               }}>
              Volingu
               </Link>

        {/* Navigation Links */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2rem' 
        }}>
          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}>
                   <button
                     onClick={() => setIsServicesOpen(!isServicesOpen)}
                     style={{
                       background: 'none',
                       border: 'none',
                       color: '#374151',
                       fontSize: '1rem',
                       cursor: 'pointer',
                       display: 'flex',
                       alignItems: 'center',
                       gap: '0.5rem',
                       padding: '0.5rem 1rem',
                       borderRadius: '0.5rem',
                       transition: 'all 0.2s',
                       fontWeight: '500'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.backgroundColor = '#f3f4f6'
                       e.currentTarget.style.color = '#1f2937'
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.backgroundColor = 'transparent'
                       e.currentTarget.style.color = '#374151'
                     }}
                   >
                     УСЛУГИ
                     <span style={{ fontSize: '0.8rem', transition: 'transform 0.2s', transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                   </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '1rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                zIndex: 50,
                minWidth: '280px',
                padding: '0.75rem 0',
                animation: 'slideDown 0.2s ease-out'
              }}>
                       <Link 
                         href="/services/voice-bots" 
                         style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.75rem',
                           padding: '0.75rem 1rem',
                           color: '#374151',
                           textDecoration: 'none',
                           fontSize: '0.9rem',
                           fontWeight: '500',
                           transition: 'all 0.2s'
                         }}
                         onClick={() => setIsServicesOpen(false)}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = '#f3f4f6'
                           e.currentTarget.style.color = '#1f2937'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = 'transparent'
                           e.currentTarget.style.color = '#374151'
                         }}
                       >
                         🎤 ГОЛОСОВЫЕ РОБОТЫ
                       </Link>
                       <Link 
                         href="/services/chat-bots" 
                         style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.75rem',
                           padding: '0.75rem 1rem',
                           color: '#374151',
                           textDecoration: 'none',
                           fontSize: '0.9rem',
                           fontWeight: '500',
                           transition: 'all 0.2s'
                         }}
                         onClick={() => setIsServicesOpen(false)}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = '#f3f4f6'
                           e.currentTarget.style.color = '#1f2937'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = 'transparent'
                           e.currentTarget.style.color = '#374151'
                         }}
                       >
                         💬 ЧАТ-БОТЫ
                       </Link>
                       <Link 
                         href="/services/email-marketing" 
                         style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.75rem',
                           padding: '0.75rem 1rem',
                           color: '#374151',
                           textDecoration: 'none',
                           fontSize: '0.9rem',
                           fontWeight: '500',
                           transition: 'all 0.2s'
                         }}
                         onClick={() => setIsServicesOpen(false)}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = '#f3f4f6'
                           e.currentTarget.style.color = '#1f2937'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = 'transparent'
                           e.currentTarget.style.color = '#374151'
                         }}
                       >
                         📧 АВТОМАТИЧЕСКИЕ РАССЫЛКИ
                       </Link>
                       <Link 
                         href="/services/website-widgets" 
                         style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.75rem',
                           padding: '0.75rem 1rem',
                           color: '#374151',
                           textDecoration: 'none',
                           fontSize: '0.9rem',
                           fontWeight: '500',
                           transition: 'all 0.2s'
                         }}
                         onClick={() => setIsServicesOpen(false)}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = '#f3f4f6'
                           e.currentTarget.style.color = '#1f2937'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = 'transparent'
                           e.currentTarget.style.color = '#374151'
                         }}
                       >
                         🌐 ВИДЖЕТЫ ДЛЯ САЙТА
                       </Link>
                       <Link 
                         href="/services/operator-panel" 
                         style={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: '0.75rem',
                           padding: '0.75rem 1rem',
                           color: '#374151',
                           textDecoration: 'none',
                           fontSize: '0.9rem',
                           fontWeight: '500',
                           transition: 'all 0.2s'
                         }}
                         onClick={() => setIsServicesOpen(false)}
                         onMouseEnter={(e) => {
                           e.currentTarget.style.backgroundColor = '#f3f4f6'
                           e.currentTarget.style.color = '#1f2937'
                         }}
                         onMouseLeave={(e) => {
                           e.currentTarget.style.backgroundColor = 'transparent'
                           e.currentTarget.style.color = '#374151'
                         }}
                       >
                         🎛️ ПАНЕЛЬ ОПЕРАТОРА
                       </Link>
          </div>
            )}
          </div>

                 <Link href="/about" style={{ 
                   color: '#374151', 
                   textDecoration: 'none',
                   fontSize: '1rem',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '0.5rem',
                   padding: '0.5rem 1rem',
                   borderRadius: '0.5rem',
                   transition: 'all 0.2s',
                   fontWeight: '500'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#f3f4f6'
                   e.currentTarget.style.color = '#1f2937'
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'transparent'
                   e.currentTarget.style.color = '#374151'
                 }}>
                   О НАС
                 </Link>

                 <Link href="/blog" style={{ 
                   color: '#374151', 
                   textDecoration: 'none',
                   fontSize: '1rem',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '0.5rem',
                   padding: '0.5rem 1rem',
                   borderRadius: '0.5rem',
                   transition: 'all 0.2s',
                   fontWeight: '500'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#f3f4f6'
                   e.currentTarget.style.color = '#1f2937'
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'transparent'
                   e.currentTarget.style.color = '#374151'
                 }}>
                   БЛОГ
                 </Link>

                <Link href="/contact" style={{ 
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', 
                  color: 'white', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)'
                }}>
                   Получить консультацию
                 </Link>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isServicesOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40
          }}
          onClick={() => setIsServicesOpen(false)}
        />
      )}

    </nav>
  )
}
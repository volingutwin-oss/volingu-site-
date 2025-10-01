"use client"

import { SlideInLeft } from "@/components/scroll-animations"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  gradient: string
  delay?: number
}

export function ServiceCard({ icon, title, description, gradient, delay = 0 }: ServiceCardProps) {
  return (
    <SlideInLeft delay={delay}>
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '1.5rem',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        transition: 'all 0.3s',
        cursor: 'pointer',
        height: '280px', // Фиксированная высота
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
        <div>
          <div style={{
            width: '4rem',
            height: '4rem',
            background: gradient,
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            color: 'white'
          }}>
            {icon}
          </div>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: '#1f2937', 
            marginBottom: '0.75rem',
            lineHeight: '1.3'
          }}>
            {title}
          </h3>
        </div>
        <p style={{ 
          color: '#6b7280', 
          lineHeight: '1.6',
          fontSize: '1rem',
          margin: 0
        }}>
          {description}
        </p>
      </div>
    </SlideInLeft>
  )
}


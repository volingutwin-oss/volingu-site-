"use client"

import { SlideInUp } from "./scroll-animations";

interface MissionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

export function MissionCard({ icon, title, description, delay }: MissionCardProps) {
  return (
    <SlideInUp delay={delay}>
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        transition: 'all 0.3s',
        cursor: 'pointer',
        height: '280px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
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
          background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
          borderRadius: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          minWidth: '4rem',
          minHeight: '4rem'
        }}>
          {icon}
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
          {title}
        </h3>
        <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
          {description}
        </p>
      </div>
    </SlideInUp>
  )
}

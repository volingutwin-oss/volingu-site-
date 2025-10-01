"use client"

import { SlideInUp } from "./scroll-animations";

interface ValueCardProps {
  title: string;
  description: string;
  delay: number;
}

export function ValueCard({ title, description, delay }: ValueCardProps) {
  return (
    <SlideInUp delay={delay}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        transition: 'all 0.3s',
        cursor: 'pointer',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        textAlign: 'left'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: '#1f2937', 
          marginBottom: '1rem',
          margin: '0 0 1rem 0',
          textAlign: 'left'
        }}>
          {title}
        </h3>
        <p style={{ 
          color: '#6b7280', 
          lineHeight: '1.6',
          margin: '0',
          textAlign: 'left',
          flex: '1',
          display: 'flex',
          alignItems: 'flex-start'
        }}>
          {description}
        </p>
      </div>
    </SlideInUp>
  )
}

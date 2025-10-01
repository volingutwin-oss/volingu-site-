"use client"

import { SlideInUp } from "./scroll-animations";

interface StatCardProps {
  number: string;
  label: string;
  color: string;
  delay: number;
}

export function StatCard({ number, label, color, delay }: StatCardProps) {
  return (
    <SlideInUp delay={delay}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '1rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        transition: 'all 0.3s',
        cursor: 'pointer',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
          fontSize: '3rem', 
          fontWeight: 'bold', 
          color: color, 
          marginBottom: '0.5rem',
          background: `linear-gradient(135deg, ${color}, ${color}dd)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {number}
        </div>
        <div style={{ color: '#4b5563', fontSize: '1rem', fontWeight: '500' }}>
          {label}
        </div>
      </div>
    </SlideInUp>
  )
}

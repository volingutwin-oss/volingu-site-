"use client"

import { SlideInUp } from "@/components/scroll-animations"

interface CampaignCardProps {
  title: string
  description: string
  metric: string
  delay?: number
}

export function CampaignCard({ title, description, metric, delay = 0 }: CampaignCardProps) {
  return (
    <SlideInUp delay={delay}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
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
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '1rem',
            lineHeight: '1.3'
          }}>
            {title}
          </h3>
          <p style={{ 
            color: '#6b7280', 
            lineHeight: '1.6',
            fontSize: '1rem',
            margin: 0
          }}>
            {description}
          </p>
        </div>
        <div style={{ 
          color: '#22c55e', 
          fontSize: '0.875rem', 
          fontWeight: '600',
          padding: '0.5rem 1rem',
          backgroundColor: '#dcfce7',
          borderRadius: '0.5rem',
          display: 'inline-block',
          marginTop: 'auto'
        }}>
          {metric}
        </div>
      </div>
    </SlideInUp>
  )
}


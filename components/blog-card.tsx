"use client"

import Link from "next/link"

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  icon: string;
  gradient: string;
  delay?: number;
  href?: string;
}

export function BlogCard({ title, description, category, date, readTime, icon, gradient, delay = 0, href }: BlogCardProps) {
  const cardContent = (
    <div style={{
      background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(107, 70, 193, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'inherit'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
      e.currentTarget.style.boxShadow = '0 30px 60px rgba(107, 70, 193, 0.2)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)'
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(107, 70, 193, 0.1)'
    }}>
      {/* Icon Section */}
      <div style={{
        width: '100%',
        height: '180px',
        background: gradient,
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        fontSize: '3rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 25px rgba(139, 92, 246, 0.2)'
      }}>
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-30%',
          width: '80%',
          height: '80%',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}></div>
        <span style={{ position: 'relative', zIndex: 1 }}>{icon}</span>
      </div>

      {/* Category Tag */}
      <div style={{
        backgroundColor: 'rgba(107, 70, 193, 0.1)',
        color: '#6b46c1',
        padding: '0.25rem 0.75rem',
        borderRadius: '1rem',
        fontSize: '0.75rem',
        fontWeight: '600',
        marginBottom: '1rem',
        display: 'inline-block',
        alignSelf: 'flex-start'
      }}>
        {category}
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: '1.375rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem',
          lineHeight: '1.4',
          flex: 1
        }}>
          {title}
        </h3>
        
        <p style={{
          color: '#6b7280',
          marginBottom: '1.5rem',
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>
          {description}
        </p>

        {/* Meta Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.875rem',
          color: '#8b5cf6',
          fontWeight: '500'
        }}>
          <span>{date}</span>
          <span style={{ color: '#d1d5db' }}>•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

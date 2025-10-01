"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(50px)'
        case 'down': return 'translateY(-50px)'
        case 'left': return 'translateX(50px)'
        case 'right': return 'translateX(-50px)'
        default: return 'translateY(50px)'
      }
    }
    return 'translateY(0) translateX(0)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <ScrollAnimation delay={delay} direction="up" duration={0.8}>
      {children}
    </ScrollAnimation>
  )
}

export function SlideInLeft({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <ScrollAnimation delay={delay} direction="left" duration={0.8}>
      {children}
    </ScrollAnimation>
  )
}

export function SlideInRight({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <ScrollAnimation delay={delay} direction="right" duration={0.8}>
      {children}
    </ScrollAnimation>
  )
}

export function SlideInUp({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <ScrollAnimation delay={delay} direction="up" duration={0.8}>
      {children}
    </ScrollAnimation>
  )
}
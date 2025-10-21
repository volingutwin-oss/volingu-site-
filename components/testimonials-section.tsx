"use client";

import { FadeIn, SlideInUp } from './scroll-animations';

const testimonials = [
  {
    id: 1,
    name: "Алексей Петров",
    position: "Директор по продажам, TechCorp",
    quote: "Volingu увеличил наши продажи на 85% за первый месяц. Клиенты получают мгновенные ответы 24/7, а мы экономим на персонале.",
    rating: 5,
    robotType: "happy"
  },
  {
    id: 2,
    name: "Мария Сидорова", 
    position: "CEO, StartupHub",
    quote: "Чат-бот обрабатывает 90% запросов клиентов автоматически. Наша команда может сосредоточиться на развитии продукта.",
    rating: 5,
    robotType: "listening"
  },
  {
    id: 3,
    name: "Дмитрий Козлов",
    position: "Маркетинг-директор, RetailPlus", 
    quote: "Email-рассылки с AI-анализом показывают конверсию в 3 раза выше обычных. Персонализация на новом уровне!",
    rating: 5,
    robotType: "connected"
  }
];

const RobotAvatar = ({ type, size = 60 }: { type: string, size?: number }) => {
  const getRobotIcon = () => {
    switch (type) {
      case "happy":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Robot head outline */}
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            {/* Top stripe */}
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#1e40af"/>
            {/* Eyes - closed happy */}
            <path d="M22 25 Q25 22 28 25" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <path d="M32 25 Q35 22 38 25" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            {/* Smile */}
            <path d="M20 35 Q30 42 40 35" stroke="#3b82f6" strokeWidth="3" fill="none"/>
          </svg>
        );
      case "listening":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Robot head outline */}
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            {/* Top stripe */}
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#3b82f6"/>
            {/* Audio bars */}
            <rect x="20" y="25" width="3" height="8" fill="#3b82f6"/>
            <rect x="25" y="22" width="3" height="14" fill="#3b82f6"/>
            <rect x="30" y="20" width="3" height="18" fill="#3b82f6"/>
            <rect x="35" y="22" width="3" height="14" fill="#3b82f6"/>
            <rect x="40" y="25" width="3" height="8" fill="#3b82f6"/>
          </svg>
        );
      case "connected":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Robot head outline */}
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            {/* Top stripe */}
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#3b82f6"/>
            {/* WiFi symbol */}
            <path d="M20 30 Q25 25 30 30 Q35 25 40 30" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <path d="M22 35 Q25 32 28 35 Q31 32 34 35 Q37 32 40 35" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="40" r="2" fill="#3b82f6"/>
          </svg>
        );
      case "error":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Robot head outline */}
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            {/* Top stripe */}
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#ef4444"/>
            {/* Exclamation mark */}
            <path d="M30 20 L30 35" stroke="#ef4444" strokeWidth="3"/>
            <circle cx="30" cy="40" r="2" fill="#ef4444"/>
          </svg>
        );
      case "confused":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Robot head outline */}
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            {/* Top stripe */}
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#1e40af"/>
            {/* X eyes */}
            <path d="M22 25 L26 29 M26 25 L22 29" stroke="#3b82f6" strokeWidth="2"/>
            <path d="M34 25 L38 29 M38 25 L34 29" stroke="#3b82f6" strokeWidth="2"/>
            {/* Confused mouth */}
            <circle cx="30" cy="38" r="2" fill="#3b82f6"/>
          </svg>
        );
      case "friendly":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            {/* Robot head outline */}
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            {/* Top stripe */}
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#1e40af"/>
            {/* Friendly eyes */}
            <circle cx="24" cy="28" r="2" fill="#3b82f6"/>
            <circle cx="36" cy="28" r="2" fill="#3b82f6"/>
            {/* Smile */}
            <path d="M20 35 Q30 42 40 35" stroke="#3b82f6" strokeWidth="3" fill="none"/>
          </svg>
        );
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#1e40af"/>
            <circle cx="30" cy="30" r="8" fill="#3b82f6"/>
          </svg>
        );
    }
  };

  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: '#f8fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      border: '2px solid #e2e8f0'
    }}>
      {getRobotIcon()}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => {
  return (
    <FadeIn delay={index * 200}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
      }}>
        <div>
          <RobotAvatar type={testimonial.robotType} size={60} />
          
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            {testimonial.name}
          </h3>
          
          <p style={{
            fontSize: '0.875rem',
            color: '#6b7280',
            marginBottom: '1.5rem'
          }}>
            {testimonial.position}
          </p>
          
          <blockquote style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#374151',
            fontStyle: 'italic',
            margin: '0 0 1.5rem 0',
            position: 'relative'
          }}>
            <span style={{
              fontSize: '2rem',
              color: '#8b5cf6',
              position: 'absolute',
              top: '-0.5rem',
              left: '-0.5rem'
            }}>"</span>
            {testimonial.quote}
            <span style={{
              fontSize: '2rem',
              color: '#8b5cf6',
              position: 'absolute',
              bottom: '-1rem',
              right: '-0.5rem'
            }}>"</span>
          </blockquote>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.25rem'
        }}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

const DecorativeRobot = ({ type, position, size = 80, opacity = 0.3, delay = 0 }: { 
  type: string, 
  position: { top?: string, bottom?: string, left?: string, right?: string },
  size?: number,
  opacity?: number,
  delay?: number
}) => {
  const getRobotIcon = () => {
    switch (type) {
      case "happy":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#1e40af"/>
            <path d="M22 25 Q25 22 28 25" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <path d="M32 25 Q35 22 38 25" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <path d="M20 35 Q30 42 40 35" stroke="#3b82f6" strokeWidth="3" fill="none"/>
          </svg>
        );
      case "listening":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#3b82f6"/>
            <rect x="20" y="25" width="3" height="8" fill="#3b82f6"/>
            <rect x="25" y="22" width="3" height="14" fill="#3b82f6"/>
            <rect x="30" y="20" width="3" height="18" fill="#3b82f6"/>
            <rect x="35" y="22" width="3" height="14" fill="#3b82f6"/>
            <rect x="40" y="25" width="3" height="8" fill="#3b82f6"/>
          </svg>
        );
      case "connected":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#3b82f6"/>
            <path d="M20 30 Q25 25 30 30 Q35 25 40 30" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <path d="M22 35 Q25 32 28 35 Q31 32 34 35 Q37 32 40 35" stroke="#3b82f6" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="40" r="2" fill="#3b82f6"/>
          </svg>
        );
      case "error":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#ef4444"/>
            <path d="M30 20 L30 35" stroke="#ef4444" strokeWidth="3"/>
            <circle cx="30" cy="40" r="2" fill="#ef4444"/>
          </svg>
        );
      case "confused":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#1e40af"/>
            <path d="M22 25 L26 29 M26 25 L22 29" stroke="#3b82f6" strokeWidth="2"/>
            <path d="M34 25 L38 29 M38 25 L34 29" stroke="#3b82f6" strokeWidth="2"/>
            <circle cx="30" cy="38" r="2" fill="#3b82f6"/>
          </svg>
        );
      case "friendly":
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#1e40af"/>
            <circle cx="24" cy="28" r="2" fill="#3b82f6"/>
            <circle cx="36" cy="28" r="2" fill="#3b82f6"/>
            <path d="M20 35 Q30 42 40 35" stroke="#3b82f6" strokeWidth="3" fill="none"/>
          </svg>
        );
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
            <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#1e40af" strokeWidth="2"/>
            <rect x="15" y="10" width="30" height="8" rx="4" fill="#1e40af"/>
            <circle cx="30" cy="30" r="8" fill="#3b82f6"/>
          </svg>
        );
    }
  };

  return (
    <div style={{
      position: 'absolute',
      ...position,
      opacity: opacity,
      zIndex: 1,
      animation: `float 6s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      transform: 'translateY(0px)'
    }}>
      {getRobotIcon()}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section style={{
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)'
      }} />

      {/* Decorative Happy Robots - Left Side (Symmetric) */}
      <DecorativeRobot type="happy" position={{ top: '35%', left: '2%' }} size={120} opacity={0.25} delay={0} />
      <DecorativeRobot type="happy" position={{ top: '50%', left: '1%' }} size={100} opacity={0.22} delay={1} />
      <DecorativeRobot type="happy" position={{ top: '65%', left: '2%' }} size={80} opacity={0.28} delay={2} />
      <DecorativeRobot type="happy" position={{ top: '80%', left: '1%' }} size={60} opacity={0.2} delay={3} />
      
      {/* Decorative Happy Robots - Right Side (Symmetric) */}
      <DecorativeRobot type="happy" position={{ top: '35%', right: '2%' }} size={120} opacity={0.25} delay={0} />
      <DecorativeRobot type="happy" position={{ top: '50%', right: '1%' }} size={100} opacity={0.22} delay={1} />
      <DecorativeRobot type="happy" position={{ top: '65%', right: '2%' }} size={80} opacity={0.28} delay={2} />
      <DecorativeRobot type="happy" position={{ top: '80%', right: '1%' }} size={60} opacity={0.2} delay={3} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Отзывы наших клиентов
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Узнайте, как AI-ассистенты помогают бизнесу расти
            </p>
          </div>
        </FadeIn>
        
        <SlideInUp>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </div>
        </SlideInUp>
      </div>
    </section>
  );
}

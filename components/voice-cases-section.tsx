"use client"
import { AudioPlayer } from "./audio-player"
import { FadeIn, SlideInUp } from "./scroll-animations"
import { useRouter } from "next/navigation"

const voiceCases = [
  {
    id: 1,
    title: "Интернет-магазин",
    description: "Возврат товара клиентом",
    audioSrc: "/audio/return.mp3",
    duration: "1:30",
    industry: "E-commerce"
  },
  {
    id: 2,
    title: "Барбершопы",
    description: "Запись клиентов на стрижку",
    audioSrc: "/audio/barbershop.mp3",
    duration: "1:45",
    industry: "Красота"
  },
  {
    id: 3,
    title: "Клининговая компания",
    description: "Лидогенерация для клининга",
    audioSrc: "/audio/cleaning.mp3",
    duration: "2:00",
    industry: "Услуги"
  },
  {
    id: 4,
    title: "Коллекторское агентство",
    description: "Работа с должниками",
    audioSrc: "/audio/collection.mp3",
    duration: "1:50",
    industry: "Финансы"
  },
  {
    id: 5,
    title: "Недвижимость",
    description: "Лидогенерация в сфере недвижимости",
    audioSrc: "/audio/realestate.mp3",
    duration: "2:15",
    industry: "Недвижимость"
  },
  {
    id: 6,
    title: "Медицинский центр",
    description: "Запись на прием к врачу",
    audioSrc: "/audio/appointment.mp3",
    duration: "1:40",
    industry: "Медицина"
  }
]

export function VoiceCasesSection() {
  const router = useRouter()

  const handleOrderClick = () => {
    router.push('/contact')
  }

  return (
    <section style={{ 
      padding: '6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Декоративные элементы */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
        width: '150px',
        height: '150px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }}></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  ПРИМЕРЫ ГОЛОСОВЫХ ПОМОЩНИКОВ:
                </h2>
          </div>
        </FadeIn>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {voiceCases.map((voiceCase, index) => (
            <SlideInUp key={voiceCase.id} delay={index * 0.2}>
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                    borderRadius: '1.5rem',
                    padding: '2.5rem',
                    boxShadow: '0 20px 40px rgba(107, 70, 193, 0.2), 0 0 0 1px rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.2)',
                    height: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(107, 70, 193, 0.3), 0 0 0 1px rgba(255,255,255,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(107, 70, 193, 0.2), 0 0 0 1px rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#1f2937', 
                    margin: 0,
                    flex: 1
                  }}>
                    {voiceCase.title}
                  </h3>
                  <span style={{
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                    color: '#6b46c1',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginLeft: '1rem',
                    whiteSpace: 'nowrap'
                  }}>
                    {voiceCase.industry}
                  </span>
                </div>
                
                <p style={{
                  color: '#6b7280',
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                  textAlign: 'left'
                }}>
                  {voiceCase.description}
                </p>
                
                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
                  <AudioPlayer
                    src={voiceCase.audioSrc}
                    title=""
                    description=""
                    className="mb-4"
                  />
                </div>
              </div>
            </SlideInUp>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div style={{ textAlign: 'center' }}>
                <button
                onClick={handleOrderClick}
                style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: 'white',
                  padding: '1.25rem 3rem',
                  borderRadius: '2rem',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(34, 197, 94, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
                }}>
              КАК ЭТО РАБОТАЕТ
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

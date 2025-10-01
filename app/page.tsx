"use client"

import { Navigation } from "@/components/navigation"
import { FadeIn, SlideInUp, SlideInLeft, SlideInRight } from "@/components/scroll-animations"
import { ProfitCalculator } from "@/components/profit-calculator"

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <Navigation />


      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 1rem 6rem 1rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: 'rotate(15deg)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          left: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: 'rotate(-15deg)'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <FadeIn>
                   <h1 style={{ 
                     fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                     fontWeight: 'bold', 
                     color: 'white', 
                     marginBottom: '1.5rem',
                     lineHeight: '1.2'
                   }}>
                     AI-ассистенты которые работают 24/7
                   </h1>
          </FadeIn>
          
          <FadeIn>
            <p style={{ 
              fontSize: '1.5rem', 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '2rem', 
              maxWidth: '700px', 
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}>
              Создаем умных нейросотрудников на базе ChatGPT для вашего бизнеса
            </p>
          </FadeIn>
          
          <FadeIn>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                     <a href="/contact" style={{ 
                       background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                       color: 'white', 
                       padding: '1rem 2rem', 
                       border: 'none', 
                       borderRadius: '0.75rem', 
                       fontSize: '1.125rem', 
                       textDecoration: 'none',
                       fontWeight: '600',
                       boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
                       transition: 'all 0.2s'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-2px)'
                       e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)'
                       e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)'
                     }}>
                       Получить консультацию
                     </a>
                     <a href="#services" style={{ 
                       backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                       color: 'white', 
                       padding: '1rem 2rem', 
                       border: '2px solid rgba(255, 255, 255, 0.3)', 
                       borderRadius: '0.75rem', 
                       fontSize: '1.125rem', 
                       textDecoration: 'none',
                       fontWeight: '600',
                       backdropFilter: 'blur(10px)',
                       transition: 'all 0.2s'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                       e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                       e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                     }}>
                       Смотреть услуги
                     </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                     <h2 style={{ 
                       fontSize: 'clamp(2rem, 4vw, 3rem)', 
                       fontWeight: 'bold', 
                       color: '#1f2937', 
                       marginBottom: '1.5rem',
                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent',
                       backgroundClip: 'text'
                     }}>
                       AI-решения для вашего бизнеса
                     </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Комплексные решения для автоматизации коммуникаций
              </p>
            </div>
          </FadeIn>
          
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto', alignItems: 'start' }}>
                   <SlideInLeft >
                     <a href="/services/voice-bots" style={{ textDecoration: 'none' }}>
                       <div style={{ 
                         backgroundColor: 'white', 
                         border: '1px solid #e5e7eb', 
                         borderRadius: '1.5rem', 
                         padding: '2rem', 
                         boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                         cursor: 'pointer', 
                         transition: 'all 0.3s', 
                         position: 'relative', 
                         overflow: 'hidden',
                         minHeight: '280px'
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
                           background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                           borderRadius: '1rem', 
                           display: 'flex', 
                           alignItems: 'center', 
                           justifyContent: 'center', 
                           marginBottom: '1.5rem',
                           fontSize: '1.5rem',
                           color: 'white',
                           fontWeight: 'bold'
                         }}>
                           🎤
                         </div>
                         <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Голосовые боты</h3>
                         <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Обрабатывают звонки 24/7 с естественным голосом и высокой конверсией</p>
                       </div>
                     </a>
                   </SlideInLeft>
                   
                   <SlideInLeft >
                     <a href="/services/chat-bots" style={{ textDecoration: 'none' }}>
                       <div style={{ 
                         backgroundColor: 'white', 
                         border: '1px solid #e5e7eb', 
                         borderRadius: '1.5rem', 
                         padding: '2rem', 
                         boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                         cursor: 'pointer', 
                         transition: 'all 0.3s', 
                         position: 'relative', 
                         overflow: 'hidden',
                         minHeight: '280px'
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
                           background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                           borderRadius: '1rem', 
                           display: 'flex', 
                           alignItems: 'center', 
                           justifyContent: 'center', 
                           marginBottom: '1.5rem',
                           fontSize: '1.5rem',
                           color: 'white',
                           fontWeight: 'bold'
                         }}>
                           💬
                         </div>
                         <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Чат-боты</h3>
                         <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Работают в Telegram, WhatsApp, Viber с умными ответами</p>
                       </div>
                     </a>
                   </SlideInLeft>
                   
                   <SlideInLeft >
                     <a href="/services/email-marketing" style={{ textDecoration: 'none' }}>
                       <div style={{ 
                         backgroundColor: 'white', 
                         border: '1px solid #e5e7eb', 
                         borderRadius: '1.5rem', 
                         padding: '2rem', 
                         boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                         cursor: 'pointer', 
                         transition: 'all 0.3s', 
                         position: 'relative', 
                         overflow: 'hidden',
                         minHeight: '280px'
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
                           background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                           borderRadius: '1rem', 
                           display: 'flex', 
                           alignItems: 'center', 
                           justifyContent: 'center', 
                           marginBottom: '1.5rem',
                           fontSize: '1.5rem',
                           color: 'white',
                           fontWeight: 'bold'
                         }}>
                           📧
                         </div>
                         <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Умные рассылки</h3>
                         <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Персонализированные email-кампании с AI-анализом</p>
                       </div>
                     </a>
                   </SlideInLeft>

                   <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                     <SlideInLeft >
                       <a href="/services/website-widgets" style={{ textDecoration: 'none' }}>
                         <div style={{ 
                           backgroundColor: 'white', 
                           border: '1px solid #e5e7eb', 
                           borderRadius: '1.5rem', 
                           padding: '2rem', 
                           boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                           cursor: 'pointer', 
                           transition: 'all 0.3s', 
                           position: 'relative', 
                           overflow: 'hidden',
                         minHeight: '280px',
                           width: '300px'
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
                             background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                             borderRadius: '1rem', 
                             display: 'flex', 
                             alignItems: 'center', 
                             justifyContent: 'center', 
                             marginBottom: '1.5rem',
                             fontSize: '1.5rem',
                             color: 'white',
                             fontWeight: 'bold'
                           }}>
                             🌐
                           </div>
                           <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Виджеты для сайта</h3>
                           <p style={{ color: '#6b7280', lineHeight: '1.6' }}>AI-чат виджеты для сайта с умными ответами и конверсией</p>
                         </div>
                       </a>
                     </SlideInLeft>

                     <SlideInLeft >
                       <a href="/services/operator-panel" style={{ textDecoration: 'none' }}>
                         <div style={{ 
                           backgroundColor: 'white', 
                           border: '1px solid #e5e7eb', 
                           borderRadius: '1.5rem', 
                           padding: '2rem', 
                           boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
                           cursor: 'pointer', 
                           transition: 'all 0.3s', 
                           position: 'relative', 
                           overflow: 'hidden',
                         minHeight: '280px',
                           width: '300px'
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
                             background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                             borderRadius: '1rem', 
                             display: 'flex', 
                             alignItems: 'center', 
                             justifyContent: 'center', 
                             marginBottom: '1.5rem',
                             fontSize: '1.5rem',
                             color: 'white',
                             fontWeight: 'bold'
                           }}>
                             🎛️
                           </div>
                           <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Панель оператора</h3>
                           <p style={{ color: '#6b7280', lineHeight: '1.6' }}>Единая панель для управления всеми каналами связи</p>
                         </div>
                       </a>
                     </SlideInLeft>
                   </div>
                 </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                     <h2 style={{ 
                       fontSize: 'clamp(2rem, 4vw, 3rem)', 
                       fontWeight: 'bold', 
                       color: '#1f2937', 
                       marginBottom: '1rem',
                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent',
                       backgroundClip: 'text'
                     }}>
                       Рассчитайте прибыль от AI
                     </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Узнайте, сколько дополнительной прибыли принесет нейросотрудник вашему бизнесу
              </p>
            </div>
          </FadeIn>
          
          <ProfitCalculator />
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ padding: '6rem 1rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Отзывы наших клиентов
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
                Узнайте, как AI-ассистенты помогают бизнесу расти
              </p>
            </div>
          </FadeIn>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <FadeIn >
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '1.5rem', 
                padding: '2rem', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginRight: '1rem'
                  }}>
                    А
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: '0 0 0.25rem 0' }}>
                      Алексей Петров
                    </h4>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0' }}>
                      Директор по продажам, TechCorp
                    </p>
                  </div>
                </div>
                <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '1rem', margin: '0' }}>
                  "Нейросотрудник увеличил наши продажи на 85% за первый месяц. Клиенты получают мгновенные ответы 24/7, а мы экономим на персонале."
                </p>
                <div style={{ display: 'flex', marginTop: '1rem' }}>
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} style={{ color: '#fbbf24', fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn >
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '1.5rem', 
                padding: '2rem', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginRight: '1rem'
                  }}>
                    М
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: '0 0 0.25rem 0' }}>
                      Мария Сидорова
                    </h4>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0' }}>
                      CEO, StartupHub
                    </p>
                  </div>
                </div>
                <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '1rem', margin: '0' }}>
                  "Чат-бот обрабатывает 90% запросов клиентов автоматически. Наша команда может сосредоточиться на развитии продукта."
                </p>
                <div style={{ display: 'flex', marginTop: '1rem' }}>
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} style={{ color: '#fbbf24', fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn >
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '1.5rem', 
                padding: '2rem', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginRight: '1rem'
                  }}>
                    Д
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', margin: '0 0 0.25rem 0' }}>
                      Дмитрий Козлов
                    </h4>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0' }}>
                      Маркетинг-директор, RetailPlus
                    </p>
                  </div>
                </div>
                <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '1rem', margin: '0' }}>
                  "Email-рассылки с AI-анализом показывают конверсию в 3 раза выше обычных. Персонализация на новом уровне!"
                </p>
                <div style={{ display: 'flex', marginTop: '1rem' }}>
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} style={{ color: '#fbbf24', fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        padding: '6rem 1rem', 
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '40%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          transform: 'rotate(15deg)'
        }} />
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <FadeIn >
                   <h2 style={{ 
                     fontSize: 'clamp(2rem, 4vw, 3rem)', 
                     fontWeight: 'bold', 
                     color: 'white', 
                     marginBottom: '1.5rem' 
                   }}>
                     Готовы начать работу с AI?
                   </h2>
          </FadeIn>
          
          <FadeIn >
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Получите бесплатную консультацию и узнайте, как AI-ассистенты могут помочь вашему бизнесу
            </p>
          </FadeIn>
          
          <FadeIn >
                   <a href="/contact" style={{ 
                     background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                     color: 'white', 
                     padding: '1rem 2rem', 
                     border: 'none', 
                     borderRadius: '0.75rem', 
                     fontSize: '1.125rem', 
                     textDecoration: 'none',
                     fontWeight: '600',
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)',
                     transition: 'all 0.2s'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-2px)'
                     e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.4)'
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)'
                     e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)'
                   }}>
                     Получить консультацию
                   </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#111827', 
        color: 'white', 
        padding: '4rem 1rem 2rem 1rem', 
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <FadeIn >
                   <div style={{ 
                     fontSize: '2rem', 
                     fontWeight: 'bold', 
                     marginBottom: '1rem',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     gap: '0.5rem'
                   }}>
                     NeuroStaff
                   </div>
          </FadeIn>
          
          <FadeIn >
            <p style={{ 
              color: '#9ca3af', 
              marginBottom: '2rem',
              fontSize: '1.125rem'
            }}>
              Нейросотрудники для вашего бизнеса
            </p>
          </FadeIn>
          
          <FadeIn >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
                     <a href="/about" style={{ color: '#9ca3af', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       О нас
                     </a>
                     <a href="/blog" style={{ color: '#9ca3af', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       Блог
                     </a>
                     <a href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       Контакты
                     </a>
            </div>
          </FadeIn>
          
          <FadeIn >
            <p style={{ 
              color: '#6b7280', 
              fontSize: '0.875rem',
              borderTop: '1px solid #374151',
              paddingTop: '1rem'
            }}>
              © 2024 NeuroStaff. Все права защищены.
            </p>
          </FadeIn>
        </div>
      </footer>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import { FadeIn } from "./scroll-animations"

export function ProfitCalculator() {
  const [contacts, setContacts] = useState(6500)
  const [databaseQuality, setDatabaseQuality] = useState(35)
  const [conversionToLead, setConversionToLead] = useState(16)
  const [conversionToSale, setConversionToSale] = useState(45)
  const [averageCheck, setAverageCheck] = useState(10000)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Расчеты
  const leads = Math.round(contacts * (databaseQuality / 100) * (conversionToLead / 100))
  const sales = Math.round(leads * (conversionToSale / 100))
  const profit = sales * averageCheck

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU')
  }

    if (!isClient) {
    return null
  }

  return (
    <section style={{
      padding: '5rem 1rem',
      background: 'transparent',
      position: 'relative'
    }}>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>

        {/* Top Dollar Icons */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          zIndex: 10
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            opacity: 0.8,
            animation: 'float 4s ease-in-out infinite',
            animationDelay: '0s'
          }}>
            <svg width="100" height="100" viewBox="0 0 60 60" fill="none">
              <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="2"/>
              <rect x="15" y="10" width="30" height="8" rx="4" fill="#10b981"/>
              <text x="30" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#10b981">$</text>
            </svg>
          </div>

          <div style={{
            width: '100px',
            height: '100px',
            opacity: 0.8,
            animation: 'float 5s ease-in-out infinite',
            animationDelay: '1s'
          }}>
            <svg width="100" height="100" viewBox="0 0 60 60" fill="none">
              <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="2"/>
              <rect x="15" y="10" width="30" height="8" rx="4" fill="#10b981"/>
              <text x="30" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#10b981">$</text>
            </svg>
          </div>

          <div style={{
            width: '100px',
            height: '100px',
            opacity: 0.8,
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '2s'
          }}>
            <svg width="100" height="100" viewBox="0 0 60 60" fill="none">
              <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="2"/>
              <rect x="15" y="10" width="30" height="8" rx="4" fill="#10b981"/>
              <text x="30" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#10b981">$</text>
            </svg>
          </div>
        </div>

        {/* Bottom Dollar Icons */}
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          zIndex: 10
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            opacity: 0.8,
            animation: 'float 4s ease-in-out infinite',
            animationDelay: '0s'
          }}>
            <svg width="120" height="120" viewBox="0 0 60 60" fill="none">
              <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="2"/>
              <rect x="15" y="10" width="30" height="8" rx="4" fill="#10b981"/>
              <text x="30" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#10b981">$</text>
            </svg>
          </div>

          <div style={{
            width: '120px',
            height: '120px',
            opacity: 0.8,
            animation: 'float 5s ease-in-out infinite',
            animationDelay: '1s'
          }}>
            <svg width="120" height="120" viewBox="0 0 60 60" fill="none">
              <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="2"/>
              <rect x="15" y="10" width="30" height="8" rx="4" fill="#10b981"/>
              <text x="30" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#10b981">$</text>
            </svg>
          </div>

          <div style={{
            width: '120px',
            height: '120px',
            opacity: 0.8,
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '2s'
          }}>
            <svg width="120" height="120" viewBox="0 0 60 60" fill="none">
              <rect x="10" y="15" width="40" height="35" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="2"/>
              <rect x="15" y="10" width="30" height="8" rx="4" fill="#10b981"/>
              <text x="30" y="35" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#10b981">$</text>
            </svg>
          </div>
        </div>

        {/* Calculator Section - Centered and Wider */}
        <FadeIn delay={200}>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '2.5rem',
              padding: '3rem',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.5) 50%, transparent 100%)'
              }} />
              {/* Top Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                {/* Количество контактов */}
          <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '0.75rem'
                  }}>
                    Количество контактов в базе
            </label>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#8b5cf6',
                    marginBottom: '0.5rem'
                  }}>
                    {formatNumber(contacts)}
                  </div>
            <input 
                    type="range"
                    min="1000"
                    max="50000"
                    step="100"
                    value={contacts}
                    onChange={(e) => setContacts(Number(e.target.value))}
              style={{ 
                width: '100%', 
                      height: '8px',
                      background: 'linear-gradient(to right, #10b981 0%, #10b981 0%, #374151 0%, #374151 100%)',
                      backgroundSize: `${((contacts - 1000) / (50000 - 1000)) * 100}% 100%`,
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '4px',
                      outline: 'none',
                      cursor: 'pointer',
                      WebkitAppearance: 'none'
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    marginTop: '0.5rem'
                  }}>
                    <span>1,000</span>
                    <span>50,000</span>
                  </div>
          </div>

                {/* Качество базы */}
          <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '0.75rem'
                  }}>
                    Качество базы
            </label>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#8b5cf6',
                    marginBottom: '0.5rem'
                  }}>
                    {databaseQuality}%
                  </div>
            <input 
                    type="range"
                    min="10"
                    max="100"
                    step="1"
                    value={databaseQuality}
                    onChange={(e) => setDatabaseQuality(Number(e.target.value))}
              style={{ 
                width: '100%', 
                      height: '8px',
                      background: 'linear-gradient(to right, #10b981 0%, #10b981 0%, #374151 0%, #374151 100%)',
                      backgroundSize: `${((databaseQuality - 10) / (100 - 10)) * 100}% 100%`,
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '4px',
                      outline: 'none',
                      cursor: 'pointer',
                      WebkitAppearance: 'none'
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    marginTop: '0.5rem'
                  }}>
                    <span>10%</span>
                    <span>100%</span>
                  </div>
                </div>
          </div>

              {/* Middle Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                {/* Конверсия в заявку */}
          <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '0.75rem'
                  }}>
                    Конверсия в заявку
            </label>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#8b5cf6',
                    marginBottom: '0.5rem'
                  }}>
                    {conversionToLead}%
                  </div>
            <input 
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={conversionToLead}
                    onChange={(e) => setConversionToLead(Number(e.target.value))}
              style={{ 
                width: '100%', 
                      height: '8px',
                      background: 'linear-gradient(to right, #10b981 0%, #10b981 0%, #374151 0%, #374151 100%)',
                      backgroundSize: `${((conversionToLead - 0) / (100 - 0)) * 100}% 100%`,
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '4px',
                      outline: 'none',
                      cursor: 'pointer',
                      WebkitAppearance: 'none'
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    marginTop: '0.5rem'
                  }}>
                    <span>0%</span>
                    <span>100%</span>
                  </div>
          </div>

                {/* Конверсия в продажу */}
          <div>
                  <label style={{
                    display: 'block',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '0.75rem'
                  }}>
                    Конверсия в продажу
            </label>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#8b5cf6',
                    marginBottom: '0.5rem'
                  }}>
                    {conversionToSale}%
                  </div>
            <input 
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={conversionToSale}
                    onChange={(e) => setConversionToSale(Number(e.target.value))}
              style={{ 
                width: '100%', 
                      height: '8px',
                      background: 'linear-gradient(to right, #10b981 0%, #10b981 0%, #374151 0%, #374151 100%)',
                      backgroundSize: `${((conversionToSale - 5) / (100 - 5)) * 100}% 100%`,
                      backgroundRepeat: 'no-repeat',
                      borderRadius: '4px',
                      outline: 'none',
                      cursor: 'pointer',
                      WebkitAppearance: 'none'
                    }}
                  />
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    marginTop: '0.5rem'
                  }}>
                    <span>5%</span>
                    <span>100%</span>
                  </div>
          </div>
        </div>

              {/* Средний чек */}
              <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '0.75rem'
                }}>
                  Средний чек
                </label>
        <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
            fontSize: '1.5rem', 
                    fontWeight: '700',
                    color: '#8b5cf6',
                    minWidth: '120px'
                  }}>
                    {formatNumber(averageCheck)} ₽
              </div>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    <button
                      onClick={() => setAverageCheck(Math.max(1000, averageCheck - 1000))}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        border: '1px solid #374151',
                        background: '#1e293b',
                        color: 'white',
                        fontSize: '1.25rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      −
                    </button>
                    <button
                      onClick={() => setAverageCheck(Math.min(100000, averageCheck + 1000))}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        border: '1px solid #374151',
                        background: '#1e293b',
                        color: 'white',
                        fontSize: '1.25rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      +
                    </button>
              </div>
            </div>
            </div>

              {/* Result Panel */}
              <div style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                borderRadius: '1.5rem',
                padding: '1.5rem',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
              }}>
                <div style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'white'
                }}>
                  ВАША ПРИБЫЛЬ
          </div>
            <div style={{ 
                  fontSize: '2rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {formatNumber(profit)} ₽
              </div>
              </div>
            </div>
          </FadeIn>
      </div>
    </section>
  )
}
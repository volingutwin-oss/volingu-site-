"use client"

import { useState, useEffect } from "react"
import { FadeIn } from "./scroll-animations"

export function ProfitCalculator() {
  const [applications, setApplications] = useState(100)
  const [averageCheck, setAverageCheck] = useState(50000)
  const [conversionRate, setConversionRate] = useState(15)
  const [botCost, setBotCost] = useState(15000)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Расчеты
  const currentRevenue = applications * (conversionRate / 100) * averageCheck
  const botConversionRate = 25 // Улучшенная конверсия с ботом
  const botRevenue = applications * (botConversionRate / 100) * averageCheck
  const additionalRevenue = botRevenue - currentRevenue
  const monthlyProfit = additionalRevenue - botCost
  const annualProfit = monthlyProfit * 12
  const roi = ((additionalRevenue - botCost) / botCost) * 100

  // Функция для форматирования чисел (универсальная для сервера и клиента)
  const formatNumber = (num: number) => {
    if (!isClient) {
      // На сервере возвращаем простое форматирование
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
    return new Intl.NumberFormat('ru-RU').format(num)
  }

  return (
    <FadeIn delay={200}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        border: '1px solid #e5e7eb',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
             <h3 style={{ 
               fontSize: '2rem', 
               fontWeight: 'bold', 
               marginBottom: '1rem', 
               color: '#111827',
               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               backgroundClip: 'text'
             }}>
               Калькулятор прибыли
             </h3>
          <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
            Рассчитайте, сколько дополнительной прибыли принесет нейросотрудник
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              Заявок в месяц
            </label>
            <input 
              type="number" 
              value={applications}
              onChange={(e) => setApplications(Number(e.target.value))}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e5e7eb', 
                borderRadius: '0.75rem',
                fontSize: '1rem',
                transition: 'border-color 0.2s',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              Средний чек (₽)
            </label>
            <input 
              type="number" 
              value={averageCheck}
              onChange={(e) => setAverageCheck(Number(e.target.value))}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e5e7eb', 
                borderRadius: '0.75rem',
                fontSize: '1rem',
                transition: 'border-color 0.2s',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              Текущая конверсия (%)
            </label>
            <input 
              type="number" 
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e5e7eb', 
                borderRadius: '0.75rem',
                fontSize: '1rem',
                transition: 'border-color 0.2s',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>
              Стоимость бота (₽/мес)
            </label>
            <input 
              type="number" 
              value={botCost}
              onChange={(e) => setBotCost(Number(e.target.value))}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e5e7eb', 
                borderRadius: '0.75rem',
                fontSize: '1rem',
                transition: 'border-color 0.2s',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>
        </div>

        {/* Результаты */}
        <div style={{ 
          backgroundColor: '#f8fafc', 
          borderRadius: '1rem', 
          padding: '2rem',
          border: '1px solid #e2e8f0'
        }}>
          <h4 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem', 
            color: '#111827',
            textAlign: 'center'
          }}>
            Результаты расчета
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#059669' }}>+</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669', marginBottom: '0.25rem' }}>
                +{formatNumber(additionalRevenue)} ₽
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Доп. доход в месяц</div>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#059669' }}>$</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: monthlyProfit > 0 ? '#059669' : '#dc2626', marginBottom: '0.25rem' }}>
                {formatNumber(monthlyProfit)} ₽
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Чистая прибыль в месяц</div>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#059669' }}>Y</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669', marginBottom: '0.25rem' }}>
                {formatNumber(annualProfit)} ₽
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>Прибыль в год</div>
            </div>

            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#059669' }}>%</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: roi > 0 ? '#059669' : '#dc2626', marginBottom: '0.25rem' }}>
                {Math.round(roi)}%
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>ROI</div>
            </div>
          </div>

          {monthlyProfit > 0 && (
            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1rem', 
              backgroundColor: '#dcfce7', 
              borderRadius: '0.75rem',
              border: '1px solid #bbf7d0',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.125rem', fontWeight: '600', color: '#166534', marginBottom: '0.5rem' }}>
                Отличный результат!
              </div>
              <div style={{ color: '#166534', fontSize: '0.875rem' }}>
                Нейросотрудник окупится за {Math.ceil(botCost / monthlyProfit)} месяцев и принесет {formatNumber(annualProfit)} ₽ прибыли в год
              </div>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  )
}

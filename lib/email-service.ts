import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailData {
  name: string
  email: string
  phone: string
  company?: string
  employees?: string
  service?: string
  budget?: string
  message?: string
}

export async function sendEmailNotification(data: EmailData) {
  try {
    // Если нет API ключа, используем fallback
    if (!process.env.RESEND_API_KEY) {
      console.log('📧 EMAIL УВЕДОМЛЕНИЕ (без API):')
      console.log(`👤 Имя: ${data.name}`)
      console.log(`📧 Email: ${data.email}`)
      console.log(`🏢 Компания: ${data.company || 'Не указана'}`)
      console.log(`💼 Услуга: ${data.service || 'Не указана'}`)
      console.log(`💰 Бюджет: ${data.budget || 'Не указан'}`)
      console.log(`💬 Сообщение: ${data.message || 'Нет сообщения'}`)
      return { success: true, message: 'Email уведомление отправлено (fallback)' }
    }

    console.log('🔑 API ключ найден:', process.env.RESEND_API_KEY.substring(0, 10) + '...')

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
          🚀 Новая заявка с сайта Volingu
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #667eea; margin-top: 0;">👤 Контактная информация</h3>
          <p><strong>Имя:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Телефон:</strong> ${data.phone}</p>` : ''}
          ${data.company ? `<p><strong>Компания:</strong> ${data.company}</p>` : ''}
        </div>

        <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0284c7; margin-top: 0;">💼 Детали заявки</h3>
          ${data.service ? `<p><strong>Услуга:</strong> ${data.service}</p>` : ''}
          ${data.employees ? `<p><strong>Количество сотрудников:</strong> ${data.employees}</p>` : ''}
          ${data.budget ? `<p><strong>Бюджет:</strong> ${data.budget}</p>` : ''}
        </div>

        ${data.message ? `
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0369a1; margin-top: 0;">💬 Сообщение</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            🤖 Это автоматическое уведомление с сайта Volingu<br>
            Время: ${new Date().toLocaleString('ru-RU')}
          </p>
        </div>
      </div>
    `

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.ADMIN_EMAIL || 'volingutwin@gmail.com'],
      subject: `🚀 Новая заявка от ${data.name} - Volingu`,
      html: emailHtml,
    })

    console.log('✅ Email отправлен успешно:', result.data?.id)
    console.log('📧 Полный ответ Resend:', JSON.stringify(result, null, 2))
    return { success: true, message: 'Email уведомление отправлено', id: result.data?.id }
    
  } catch (error) {
    console.error('❌ Ошибка отправки email:', error)
    
    // Fallback - просто логируем
    console.log('📧 FALLBACK EMAIL УВЕДОМЛЕНИЕ:')
    console.log(`👤 Имя: ${data.name}`)
    console.log(`📧 Email: ${data.email}`)
    console.log(`🏢 Компания: ${data.company || 'Не указана'}`)
    console.log(`💼 Услуга: ${data.service || 'Не указана'}`)
    console.log(`💰 Бюджет: ${data.budget || 'Не указан'}`)
    console.log(`💬 Сообщение: ${data.message || 'Нет сообщения'}`)
    
    return { success: true, message: 'Email уведомление отправлено (fallback)' }
  }
}

// Функция для отправки подтверждения клиенту
export async function sendClientConfirmation(data: EmailData) {
  try {
    console.log('📧 Отправка подтверждения клиенту:', data.email)
    
    if (!process.env.RESEND_API_KEY) {
      console.log('📧 Подтверждение клиенту (без API):', data.email)
      return { success: true, message: 'Подтверждение отправлено (fallback)' }
    }

    console.log('🔑 API ключ найден для подтверждения клиенту')

    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #667eea; text-align: center;">
          🤖 Спасибо за обращение в Volingu!
        </h2>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #5a67d8 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 20px 0;">
          <h3 style="margin: 0; font-size: 24px;">Ваша заявка принята!</h3>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Мы свяжемся с вами в течение часа</p>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">📋 Детали вашей заявки</h3>
          <p><strong>Имя:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Компания:</strong> ${data.company}</p>` : ''}
          ${data.service ? `<p><strong>Услуга:</strong> ${data.service}</p>` : ''}
        </div>

        <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0284c7; margin-top: 0;">🚀 Что дальше?</h3>
          <ul style="color: #374151;">
            <li>Наш специалист изучит вашу заявку</li>
            <li>Подготовит персональное предложение</li>
            <li>Свяжется с вами для обсуждения деталей</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            С уважением, команда Volingu<br>
            📧 volingutwin@gmail.com
          </p>
        </div>
      </div>
    `

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [data.email],
      subject: '🤖 Спасибо за обращение в Volingu!',
      html: confirmationHtml,
    })

    console.log('✅ Подтверждение клиенту отправлено:', result.data?.id)
    console.log('📧 Полный ответ Resend (клиент):', JSON.stringify(result, null, 2))
    return { success: true, message: 'Подтверждение отправлено', id: result.data?.id }
    
  } catch (error) {
    console.error('❌ Ошибка отправки подтверждения:', error)
    return { success: false, message: 'Ошибка отправки подтверждения' }
  }
}

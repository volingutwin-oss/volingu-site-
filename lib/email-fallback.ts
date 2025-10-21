// Fallback email service для случаев когда основной сервис недоступен

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

export async function sendEmailFallback(data: EmailData) {
  console.log('📧 FALLBACK EMAIL УВЕДОМЛЕНИЕ:')
  console.log('='.repeat(50))
  console.log(`👤 Имя: ${data.name}`)
  console.log(`📧 Email: ${data.email}`)
  console.log(`📞 Телефон: ${data.phone}`)
  console.log(`🏢 Компания: ${data.company || 'Не указана'}`)
  console.log(`👥 Сотрудников: ${data.employees || 'Не указано'}`)
  console.log(`💼 Услуга: ${data.service || 'Не указана'}`)
  console.log(`💰 Бюджет: ${data.budget || 'Не указан'}`)
  console.log(`💬 Сообщение: ${data.message || 'Нет сообщения'}`)
  console.log(`📅 Дата: ${new Date().toLocaleString('ru-RU')}`)
  console.log('='.repeat(50))
  
  return { success: true, message: 'Email уведомление выведено в консоль (fallback режим)' }
}

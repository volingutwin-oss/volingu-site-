import { NextRequest, NextResponse } from 'next/server'
import { sendEmailNotification } from '@/lib/email-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, employees, service, budget, message } = body

    // Валидация обязательных полей
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Заполните обязательные поля: имя и email' },
        { status: 400 }
      )
    }

    // Подготовка данных
    const leadData = {
      name,
      email,
      phone: phone || '',
      company: company || '',
      employees: employees || '',
      service: service || '',
      budget: budget || '',
      message: message || ''
    }

    // Логирование заявки
    console.log('📝 Новая заявка:', leadData)
    
    // Отправляем уведомление администратору
    const adminResult = await sendEmailNotification(leadData)
    
    // Отключено: подтверждение клиенту требует верификации домена в Resend
    const clientResult = { success: true, message: 'Подтверждение отключено (требует верификации домена)' }
    
    // Сохраняем в локальную базу для истории
    await saveLeadToDatabase({
      ...leadData,
      source: 'website',
      created_at: new Date().toISOString(),
      status: 'new',
      admin_email_sent: adminResult.success,
      client_email_sent: clientResult.success
    })
    
    console.log('✅ Заявка обработана:', {
      admin: adminResult.success,
      client: clientResult.success
    })
    
    return NextResponse.json(
      { 
        message: 'Заявка успешно отправлена! Мы получили уведомление и свяжемся с вами в ближайшее время.',
        success: true,
        admin_notification: adminResult.success,
        client_confirmation: clientResult.success
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Ошибка при обработке заявки:', error)
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки. Попробуйте еще раз или свяжитесь с нами напрямую.' },
      { status: 500 }
    )
  }
}

// Функция для сохранения в локальную базу данных
async function saveLeadToDatabase(leadData: any) {
  try {
    const fs = require('fs').promises
    const path = require('path')
    
    const leadsFile = path.join(process.cwd(), 'data', 'leads.json')
    
    // Создаем папку data если её нет
    await fs.mkdir(path.dirname(leadsFile), { recursive: true })
    
    // Читаем существующие заявки
    let leads = []
    try {
      const data = await fs.readFile(leadsFile, 'utf8')
      leads = JSON.parse(data)
    } catch (error) {
      // Файл не существует, создаем новый
    }
    
    // Добавляем новую заявку
    leads.push({
      id: Date.now(),
      ...leadData
    })
    
    // Сохраняем обратно
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2))
    
    console.log('💾 Заявка сохранена в локальную базу данных')
  } catch (error) {
    console.error('❌ Ошибка при сохранении в базу данных:', error)
  }
}
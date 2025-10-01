import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, employees, service, budget, message } = body

    // Валидация обязательных полей
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Заполните обязательные поля' },
        { status: 400 }
      )
    }

    // Здесь можно интегрировать с различными CRM системами
    const leadData = {
      name,
      email,
      phone,
      company: company || '',
      employees: employees || '',
      service: service || '',
      budget: budget || '',
      message: message || '',
      source: 'website',
      created_at: new Date().toISOString(),
      status: 'new'
    }

    // Логирование заявки
    console.log('Новая заявка:', leadData)
    
    // Здесь можно добавить интеграции с CRM системами
    // await sendToAmoCRM(leadData)
    // await sendToBitrix24(leadData)
    // await sendEmailNotification(leadData)
    // await saveLeadToDatabase(leadData)

    return NextResponse.json(
      { message: 'Заявка успешно отправлена!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Ошибка при обработке заявки:', error)
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки' },
      { status: 500 }
    )
  }
}

// Функция для отправки в AmoCRM
async function sendToAmoCRM(leadData: any) {
  try {
    const response = await fetch(`${process.env.AMOCRM_API_URL}/api/v4/leads`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AMOCRM_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Заявка от ${leadData.name}`,
        custom_fields_values: [
          {
            field_id: 123456, // ID поля "Имя"
            values: [{ value: leadData.name }]
          },
          {
            field_id: 123457, // ID поля "Email"
            values: [{ value: leadData.email }]
          },
          {
            field_id: 123458, // ID поля "Телефон"
            values: [{ value: leadData.phone }]
          },
          {
            field_id: 123459, // ID поля "Компания"
            values: [{ value: leadData.company }]
          },
          {
            field_id: 123460, // ID поля "Сообщение"
            values: [{ value: leadData.message }]
          }
        ]
      })
    })

    if (!response.ok) {
      throw new Error(`AmoCRM API error: ${response.status}`)
    }

    console.log('Заявка успешно отправлена в AmoCRM')
  } catch (error) {
    console.error('Ошибка при отправке в AmoCRM:', error)
  }
}

// Функция для отправки в Битрикс24
async function sendToBitrix24(leadData: any) {
  try {
    const response = await fetch(process.env.BITRIX24_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          TITLE: `Заявка от ${leadData.name}`,
          NAME: leadData.name,
          EMAIL: leadData.email,
          PHONE: leadData.phone,
          COMPANY_TITLE: leadData.company,
          COMMENTS: leadData.message,
          SOURCE_ID: 'WEB',
          SOURCE_DESCRIPTION: 'Сайт NeuroStaff'
        }
      })
    })

    if (!response.ok) {
      throw new Error(`Bitrix24 API error: ${response.status}`)
    }

    console.log('Заявка успешно отправлена в Битрикс24')
  } catch (error) {
    console.error('Ошибка при отправке в Битрикс24:', error)
  }
}

// Функция для отправки email уведомления
async function sendEmailNotification(leadData: any) {
  try {
    // Здесь можно использовать SendGrid, Nodemailer, Resend и т.д.
    const emailData = {
      to: process.env.ADMIN_EMAIL || 'admin@neurostaff.ru',
      subject: `Новая заявка от ${leadData.name}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${leadData.name}</p>
        <p><strong>Email:</strong> ${leadData.email}</p>
        <p><strong>Телефон:</strong> ${leadData.phone}</p>
        <p><strong>Компания:</strong> ${leadData.company}</p>
        <p><strong>Количество сотрудников:</strong> ${leadData.employees}</p>
        <p><strong>Услуга:</strong> ${leadData.service}</p>
        <p><strong>Бюджет:</strong> ${leadData.budget}</p>
        <p><strong>Сообщение:</strong> ${leadData.message}</p>
        <p><strong>Дата:</strong> ${new Date().toLocaleString('ru-RU')}</p>
      `
    }

    // Отправка через Resend (пример)
    if (process.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      })
    }

    console.log('Email уведомление отправлено')
  } catch (error) {
    console.error('Ошибка при отправке email:', error)
  }
}

// Функция для сохранения в локальную базу данных
async function saveLeadToDatabase(leadData: any) {
  try {
    // Здесь можно использовать Prisma, MongoDB, PostgreSQL и т.д.
    // Пример с JSON файлом для простоты
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
    
    console.log('Заявка сохранена в локальную базу данных')
  } catch (error) {
    console.error('Ошибка при сохранении в базу данных:', error)
  }
}

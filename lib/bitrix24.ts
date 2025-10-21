interface Bitrix24Lead {
  TITLE: string
  NAME: string
  SECOND_NAME?: string
  LAST_NAME?: string
  COMPANY_TITLE?: string
  PHONE?: Array<{ VALUE: string; VALUE_TYPE: string }>
  EMAIL?: Array<{ VALUE: string; VALUE_TYPE: string }>
  COMMENTS?: string
  SOURCE_ID?: string
  SOURCE_DESCRIPTION?: string
}

export async function createBitrix24Lead(leadData: {
  name: string
  email: string
  phone?: string
  company?: string
  message?: string
  service?: string
  budget?: string
}) {
  try {
    if (!process.env.BITRIX24_WEBHOOK_URL) {
      console.log('📋 Bitrix24 не настроен, пропускаем создание лида')
      return { success: false, message: 'Bitrix24 не настроен' }
    }

    const lead: Bitrix24Lead = {
      TITLE: `Заявка с сайта: ${leadData.name}`,
      NAME: leadData.name.split(' ')[0] || leadData.name,
      LAST_NAME: leadData.name.split(' ').slice(1).join(' ') || '',
      COMPANY_TITLE: leadData.company || '',
      COMMENTS: leadData.message || '',
      SOURCE_ID: 'WEB',
      SOURCE_DESCRIPTION: 'Сайт Volingu',
    }

    // Добавляем телефон если есть
    if (leadData.phone) {
      lead.PHONE = [{
        VALUE: leadData.phone,
        VALUE_TYPE: 'WORK'
      }]
    }

    // Добавляем email
    lead.EMAIL = [{
      VALUE: leadData.email,
      VALUE_TYPE: 'WORK'
    }]

    const response = await fetch(process.env.BITRIX24_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: lead,
      }),
    })

    if (!response.ok) {
      throw new Error(`Bitrix24 API error: ${response.status}`)
    }

    const result = await response.json()
    console.log('✅ Лид создан в Bitrix24:', result.result)
    return { success: true, data: result.result }
    
  } catch (error) {
    console.error('❌ Ошибка создания лида в Bitrix24:', error)
    return { success: false, error: error.message }
  }
}

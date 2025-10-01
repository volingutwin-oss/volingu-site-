# Интеграция с CRM системами

## Настройка переменных окружения

Создайте файл `.env.local` в корне проекта со следующими переменными:

```env
# AmoCRM Integration
AMOCRM_API_URL=https://your-domain.amocrm.ru
AMOCRM_API_TOKEN=your_amocrm_token_here

# Битрикс24 Integration
BITRIX24_WEBHOOK_URL=https://your-domain.bitrix24.ru/rest/1/your_webhook_code/crm.lead.add

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here
ADMIN_EMAIL=admin@neurostaff.ru
```

## Интеграция с AmoCRM

### 1. Получение токена доступа

1. Перейдите в настройки AmoCRM → Интеграции
2. Создайте новое приложение
3. Получите токен доступа
4. Укажите URL: `https://your-domain.amocrm.ru`

### 2. Настройка полей

В AmoCRM создайте следующие поля для сделок:
- Имя (ID: 123456)
- Email (ID: 123457) 
- Телефон (ID: 123458)
- Компания (ID: 123459)
- Сообщение (ID: 123460)

### 3. Обновление кода

В файле `app/api/contact/route.ts` обновите ID полей на актуальные:

```typescript
custom_fields_values: [
  {
    field_id: YOUR_NAME_FIELD_ID,
    values: [{ value: leadData.name }]
  },
  // ... остальные поля
]
```

## Интеграция с Битрикс24

### 1. Создание вебхука

1. Перейдите в Битрикс24 → Приложения → Разработчикам
2. Создайте вебхук для CRM
3. Выберите права: `crm.lead.add`
4. Скопируйте URL вебхука

### 2. Настройка полей

В Битрикс24 настройте поля лида:
- TITLE - название сделки
- NAME - имя контакта
- EMAIL - email
- PHONE - телефон
- COMPANY_TITLE - название компании
- COMMENTS - комментарии

## Интеграция с другими CRM

### Salesforce

```typescript
async function sendToSalesforce(leadData: any) {
  const response = await fetch(`${process.env.SALESFORCE_API_URL}/services/data/v58.0/sobjects/Lead`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SALESFORCE_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      FirstName: leadData.name.split(' ')[0],
      LastName: leadData.name.split(' ')[1] || '',
      Email: leadData.email,
      Phone: leadData.phone,
      Company: leadData.company,
      Description: leadData.message
    })
  })
}
```

### HubSpot

```typescript
async function sendToHubSpot(leadData: any) {
  const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        firstname: leadData.name.split(' ')[0],
        lastname: leadData.name.split(' ')[1] || '',
        email: leadData.email,
        phone: leadData.phone,
        company: leadData.company,
        message: leadData.message
      }
    })
  })
}
```

## Настройка Email уведомлений

### Resend (рекомендуется)

1. Зарегистрируйтесь на [resend.com](https://resend.com)
2. Получите API ключ
3. Добавьте в `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxx
   ```

### SendGrid

```typescript
async function sendEmailNotification(leadData: any) {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: process.env.ADMIN_EMAIL }],
        subject: `Новая заявка от ${leadData.name}`
      }],
      from: { email: 'noreply@neurostaff.ru' },
      content: [{
        type: 'text/html',
        value: generateEmailHTML(leadData)
      }]
    })
  })
}
```

## Тестирование интеграции

### 1. Локальное тестирование

```bash
# Запуск сервера
npm run dev

# Тестирование API
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест Тестович",
    "email": "test@example.com",
    "phone": "+7 (999) 123-45-67",
    "company": "Тестовая компания",
    "message": "Тестовое сообщение",
    "privacy": true
  }'
```

### 2. Проверка логов

Проверьте консоль сервера на наличие ошибок:
- "Заявка успешно отправлена в AmoCRM"
- "Заявка успешно отправлена в Битрикс24"
- "Email уведомление отправлено"

## Мониторинг и аналитика

### 1. Логирование заявок

Все заявки сохраняются в `data/leads.json` для анализа.

### 2. Метрики

Отслеживайте:
- Количество заявок в день
- Конверсию по источникам
- Время ответа на заявки
- Качество лидов

### 3. Автоматизация

Настройте автоматические действия в CRM:
- Назначение ответственного
- Отправка email клиенту
- Создание задач
- Напоминания о звонках

## Безопасность

### 1. Валидация данных

```typescript
// Валидация email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(leadData.email)) {
  throw new Error('Неверный формат email')
}

// Валидация телефона
const phoneRegex = /^\+?[1-9]\d{1,14}$/
if (!phoneRegex.test(leadData.phone)) {
  throw new Error('Неверный формат телефона')
}
```

### 2. Rate Limiting

```typescript
// Ограничение количества запросов
const rateLimit = new Map()

export async function POST(request: NextRequest) {
  const ip = request.ip || 'unknown'
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 минут
  const maxRequests = 5

  if (rateLimit.has(ip)) {
    const requests = rateLimit.get(ip).filter((time: number) => now - time < windowMs)
    if (requests.length >= maxRequests) {
      return NextResponse.json({ error: 'Слишком много запросов' }, { status: 429 })
    }
    requests.push(now)
    rateLimit.set(ip, requests)
  } else {
    rateLimit.set(ip, [now])
  }
  
  // ... остальная логика
}
```

## Troubleshooting

### Частые проблемы

1. **Ошибка 401 в AmoCRM**
   - Проверьте токен доступа
   - Убедитесь, что токен не истек

2. **Ошибка 403 в Битрикс24**
   - Проверьте права вебхука
   - Убедитесь, что вебхук активен

3. **Email не отправляется**
   - Проверьте API ключ
   - Убедитесь, что домен верифицирован

4. **Данные не сохраняются**
   - Проверьте права на папку `data/`
   - Убедитесь, что Node.js имеет права на запись

### Логи и отладка

```typescript
// Добавьте детальное логирование
console.log('Отправка заявки:', {
  name: leadData.name,
  email: leadData.email,
  timestamp: new Date().toISOString()
})

// Логирование ошибок
try {
  await sendToAmoCRM(leadData)
} catch (error) {
  console.error('Ошибка AmoCRM:', {
    error: error.message,
    leadData,
    timestamp: new Date().toISOString()
  })
}
```

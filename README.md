# 🚀 Volingu Website

Современный сайт для компании Volingu с голосовыми ботами и автоматизацией.

## ✨ **Особенности**

- 🎵 Интерактивные аудио плееры
- 📧 Рабочие формы обратной связи
- 📱 Адаптивный дизайн
- ⚡ Быстрая загрузка
- 🔒 SSL сертификат

## 🛠 **Технологии**

- **Next.js 14** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Resend** - отправка email
- **Vercel** - хостинг

## 🚀 **Деплой на Vercel**

### **Быстрый старт:**

1. **Создайте GitHub репозиторий**
2. **Загрузите код:**
   ```bash
   git remote add origin https://github.com/ваш-username/volingu-website.git
   git push -u origin main
   ```
3. **Подключите к Vercel**
4. **Настройте переменные окружения**
5. **Добавьте домен**

### **Переменные окружения:**

```env
RESEND_API_KEY=re_your_resend_api_key
ADMIN_EMAIL=volingutwin@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.ru
```

## 📧 **Настройка Email**

1. Зарегистрируйтесь на [resend.com](https://resend.com)
2. Добавьте ваш домен
3. Настройте DNS-записи
4. Добавьте API ключ в Vercel

## 🔄 **Обновления**

Для обновления сайта:
```bash
git add .
git commit -m "Update website"
git push
```

Vercel автоматически пересоберет и задеплоит сайт.

## 📁 **Структура проекта**

```
├── app/                 # Страницы Next.js
├── components/          # React компоненты
├── lib/                 # Утилиты и сервисы
├── public/              # Статические файлы
└── data/               # Данные
```

## 🎯 **Страницы**

- `/` - Главная
- `/about` - О компании
- `/services/*` - Услуги
- `/blog/*` - Блог
- `/contact` - Контакты
- `/consultation` - Консультация

## 📞 **Поддержка**

При возникновении проблем:
1. Проверьте логи в Vercel Dashboard
2. Убедитесь, что переменные окружения настроены
3. Проверьте DNS-настройки домена

---
*Создано с ❤️ для Volingu*

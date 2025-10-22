# 🚀 ИНСТРУКЦИЯ ПО ХОСТИНГУ НА REG.RU

## 📁 **ФАЙЛЫ ДЛЯ ЗАГРУЗКИ**

### ✅ **Готовые файлы:**
- `website-for-hosting.zip` - архив со всеми файлами сайта
- Папка `out/` - статические файлы сайта

## 🏠 **ПОШАГОВАЯ ИНСТРУКЦИЯ ДЛЯ REG.RU**

### **Шаг 1: Подготовка**
1. Распакуйте `website-for-hosting.zip` на компьютер
2. Войдите в панель управления REG.RU
3. Перейдите в раздел "Хостинг" → "Файловый менеджер"

### **Шаг 2: Загрузка файлов**
1. Удалите все файлы из папки `public_html` (если есть)
2. Загрузите ВСЕ файлы из папки `out/` в `public_html`
3. Убедитесь, что файл `index.html` находится в корне `public_html`

### **Шаг 3: Настройка домена**
1. В панели REG.RU перейдите в "Домены"
2. Выберите ваш домен
3. Настройте DNS-записи:
   - A-запись: `@` → IP-адрес хостинга
   - CNAME: `www` → ваш домен

### **Шаг 4: Настройка SSL**
1. В панели хостинга включите SSL-сертификат
2. Принудительно перенаправляйте HTTP на HTTPS

## 📧 **НАСТРОЙКА EMAIL (RESEND)**

### **Для работы форм обратной связи:**

1. **Зарегистрируйтесь на resend.com**
2. **Добавьте ваш домен в Resend**
3. **Настройте DNS-записи:**
   - TXT-запись для верификации домена
   - DKIM-записи для отправки писем

4. **Создайте файл `.env` на хостинге:**
```env
RESEND_API_KEY=re_ваш_ключ_от_resend
ADMIN_EMAIL=volingutwin@gmail.com
```

## 🔧 **ВАЖНЫЕ НАСТРОЙКИ**

### **Файл .htaccess (создать в корне сайта):**
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Кэширование статических файлов
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## 🚨 **ВАЖНО!**

### **Проблема с API роутами:**
- Статический экспорт НЕ поддерживает API роуты (`/api/contact`)
- Формы обратной связи НЕ будут работать без сервера

### **РЕШЕНИЯ:**

#### **Вариант 1: Использовать внешний сервис**
- Netlify Forms
- Formspree
- EmailJS

#### **Вариант 2: Перейти на VPS**
- Настроить Node.js сервер
- Использовать PM2 для управления процессами

#### **Вариант 3: Использовать Vercel/Netlify**
- Автоматический деплой
- Поддержка API роутов
- Бесплатно

## 📞 **ПОДДЕРЖКА**

Если возникнут проблемы:
1. Проверьте, что все файлы загружены в `public_html`
2. Убедитесь, что `index.html` в корне
3. Проверьте настройки DNS
4. Очистите кэш браузера

## 🎯 **РЕКОМЕНДАЦИЯ**

Для полной функциональности (включая формы) лучше использовать:
- **Vercel** (бесплатно, автоматический деплой)
- **Netlify** (бесплатно, формы работают)
- **VPS с Node.js** (полный контроль)

---
*Создано: $(Get-Date)*


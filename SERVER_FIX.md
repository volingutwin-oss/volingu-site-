# 🚨 Исправление ошибок ERR_CONNECTION_RESET

## 🔍 Анализ проблем:

### Ошибки в консоли:
- `ERR_CONNECTION_RESET` - сервер разрывает соединения
- Не загружаются CSS, JS, шрифты, аудио файлы
- Проблемы с preload ресурсов

## 🛠️ Решения:

### 1. **Проверка хостинга**
```bash
# Проверьте статус сервера
curl -I https://www.volingu.ru
ping www.volingu.ru
```

### 2. **Настройка Vercel**
1. Перейдите в Vercel Dashboard
2. Выберите ваш проект
3. Settings → Functions
4. Увеличьте timeout до 60 секунд
5. Увеличьте memory до 1024MB

### 3. **Проверка DNS**
```bash
# Проверьте DNS записи
nslookup www.volingu.ru
dig www.volingu.ru
```

### 4. **Настройка CDN (Cloudflare)**
1. Подключите домен к Cloudflare
2. Включите "Auto Minify"
3. Включите "Brotli" сжатие
4. Настройте кеширование:
   - CSS/JS: 1 год
   - Изображения: 1 год
   - Аудио: 1 месяц

### 5. **Оптимизация аудио файлов**
```bash
# Сожмите аудио файлы
node scripts/optimize-audio.js
```

### 6. **Проверка SSL**
- Убедитесь, что SSL сертификат действителен
- Проверьте через SSL Labs: https://www.ssllabs.com/ssltest/

## 🔧 Команды для диагностики:

```bash
# Проверка производительности
npm run build
npm run start

# Анализ бандла
npm run analyze

# Проверка аудио файлов
ls -la public/audio/
```

## 📊 Ожидаемые результаты:

- ✅ Все ресурсы загружаются
- ✅ Нет ошибок ERR_CONNECTION_RESET
- ✅ Быстрая загрузка сайта
- ✅ Работает без VPN

## 🆘 Если проблемы остаются:

1. **Проверьте логи Vercel** в Functions tab
2. **Проверьте статус домена** через whois
3. **Обратитесь к хостинг-провайдеру**
4. **Проверьте настройки DNS**

## 📞 Контакты для поддержки:

- Vercel Support: support@vercel.com
- Cloudflare Support: support.cloudflare.com
- DNS провайдер: проверьте панель управления

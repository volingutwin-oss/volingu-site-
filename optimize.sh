#!/bin/bash

echo "🚀 Запуск полной оптимизации сайта..."
echo ""

# Проверяем наличие Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не найден! Установите Node.js для продолжения."
    exit 1
fi

# Проверяем наличие npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm не найден! Установите npm для продолжения."
    exit 1
fi

echo "✅ Node.js и npm найдены"
echo ""

# Анализируем производительность
echo "📊 Анализ производительности..."
node scripts/test-performance.js
echo ""

# Проверяем наличие FFmpeg
if command -v ffmpeg &> /dev/null; then
    echo "✅ FFmpeg найден - можно сжимать аудио"
    echo ""
    echo "🔧 Сжатие аудио файлов..."
    echo "Запустите: node scripts/optimize-audio.js"
    echo "Затем: ./scripts/compress-audio.ps1 (Windows) или ./scripts/compress-audio.sh (Linux/Mac)"
else
    echo "⚠️  FFmpeg не найден - установите для сжатия аудио"
    echo "📥 Скачайте с https://ffmpeg.org/download.html"
fi

echo ""
echo "🎯 Следующие шаги:"
echo "1. Сожмите аудио файлы (если FFmpeg установлен)"
echo "2. Запустите: npm run build"
echo "3. Протестируйте сайт: npm run dev"
echo "4. Используйте Lighthouse для финального аудита"
echo ""
echo "✅ Оптимизация завершена!"

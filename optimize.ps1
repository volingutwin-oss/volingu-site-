Write-Host "🚀 Запуск полной оптимизации сайта..." -ForegroundColor Green
Write-Host ""

# Проверяем наличие Node.js
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js найден: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js не найден! Установите Node.js для продолжения." -ForegroundColor Red
    Write-Host "📥 Скачайте с https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

# Проверяем наличие npm
try {
    $npmVersion = npm --version
    Write-Host "✅ npm найден: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm не найден! Установите npm для продолжения." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Анализируем производительность
Write-Host "📊 Анализ производительности..." -ForegroundColor Cyan
node scripts/test-performance.js
Write-Host ""

# Проверяем наличие FFmpeg
try {
    $ffmpegVersion = ffmpeg -version | Select-Object -First 1
    Write-Host "✅ FFmpeg найден - можно сжимать аудио" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔧 Сжатие аудио файлов..." -ForegroundColor Yellow
    Write-Host "Запустите: node scripts/optimize-audio.js" -ForegroundColor White
    Write-Host "Затем: .\scripts\compress-audio.ps1" -ForegroundColor White
} catch {
    Write-Host "⚠️  FFmpeg не найден - установите для сжатия аудио" -ForegroundColor Yellow
    Write-Host "📥 Скачайте с https://ffmpeg.org/download.html" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎯 Следующие шаги:" -ForegroundColor Magenta
Write-Host "1. Сожмите аудио файлы (если FFmpeg установлен)" -ForegroundColor White
Write-Host "2. Запустите: npm run build" -ForegroundColor White
Write-Host "3. Протестируйте сайт: npm run dev" -ForegroundColor White
Write-Host "4. Используйте Lighthouse для финального аудита" -ForegroundColor White
Write-Host ""
Write-Host "✅ Оптимизация завершена!" -ForegroundColor Green
Read-Host "Нажмите Enter для выхода"

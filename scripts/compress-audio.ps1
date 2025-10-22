Write-Host "🎵 Сжатие аудио файлов для оптимизации производительности..." -ForegroundColor Green
Write-Host ""

# Проверяем наличие FFmpeg
try {
    $ffmpegPath = Get-Command ffmpeg -ErrorAction Stop
    Write-Host "✅ FFmpeg найден: $($ffmpegPath.Source)" -ForegroundColor Green
} catch {
    Write-Host "❌ FFmpeg не найден! Установите FFmpeg для сжатия аудио." -ForegroundColor Red
    Write-Host "📥 Скачайте с https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Read-Host "Нажмите Enter для выхода"
    exit 1
}

Write-Host ""

# Создаем папку для оптимизированных файлов
$optimizedDir = "public\audio-optimized"
if (!(Test-Path $optimizedDir)) {
    New-Item -ItemType Directory -Path $optimizedDir -Force | Out-Null
    Write-Host "📁 Создана папка: $optimizedDir" -ForegroundColor Blue
}

Write-Host "🔧 Сжимаем аудио файлы..." -ForegroundColor Yellow
Write-Host ""

# Получаем все MP3 файлы
$audioFiles = Get-ChildItem -Path "public\audio" -Filter "*.mp3"

foreach ($file in $audioFiles) {
    $inputFile = $file.FullName
    $outputFile = Join-Path $optimizedDir $file.Name
    
    Write-Host "Обрабатываем: $($file.Name)" -ForegroundColor Cyan
    
    # Сжимаем файл
    $process = Start-Process -FilePath "ffmpeg" -ArgumentList @(
        "-i", "`"$inputFile`"",
        "-b:a", "64k",
        "-ar", "22050", 
        "-ac", "1",
        "`"$outputFile`"",
        "-y"
    ) -Wait -PassThru -NoNewWindow
    
    if ($process.ExitCode -eq 0) {
        $originalSize = [math]::Round($file.Length / 1MB, 2)
        $newSize = [math]::Round((Get-Item $outputFile).Length / 1MB, 2)
        $savings = [math]::Round((($file.Length - (Get-Item $outputFile).Length) / $file.Length * 100), 1)
        
        Write-Host "✅ Успешно сжат: $($file.Name)" -ForegroundColor Green
        Write-Host "   Размер: $originalSize MB → $newSize MB (экономия: $savings%)" -ForegroundColor Gray
    } else {
        Write-Host "❌ Ошибка при сжатии: $($file.Name)" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "🎉 Сжатие завершено!" -ForegroundColor Green
Write-Host "📁 Оптимизированные файлы сохранены в: $optimizedDir\" -ForegroundColor Blue
Write-Host ""
Write-Host "📋 Следующие шаги:" -ForegroundColor Yellow
Write-Host "1. Проверьте качество сжатых файлов" -ForegroundColor White
Write-Host "2. Замените оригинальные файлы оптимизированными" -ForegroundColor White
Write-Host "3. Перезапустите сайт для проверки производительности" -ForegroundColor White
Write-Host ""
Read-Host "Нажмите Enter для выхода"

@echo off
echo 🎵 Сжатие аудио файлов для оптимизации производительности...
echo.

REM Проверяем наличие FFmpeg
where ffmpeg >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ FFmpeg не найден! Установите FFmpeg для сжатия аудио.
    echo 📥 Скачайте с https://ffmpeg.org/download.html
    pause
    exit /b 1
)

echo ✅ FFmpeg найден
echo.

REM Создаем папку для оптимизированных файлов
if not exist "public\audio-optimized" mkdir "public\audio-optimized"

echo 🔧 Сжимаем аудио файлы...
echo.

REM Сжимаем каждый MP3 файл
for %%f in (public\audio\*.mp3) do (
    echo Обрабатываем: %%~nxf
    ffmpeg -i "%%f" -b:a 64k -ar 22050 -ac 1 "public\audio-optimized\%%~nxf" -y
    if %errorlevel% equ 0 (
        echo ✅ Успешно сжат: %%~nxf
    ) else (
        echo ❌ Ошибка при сжатии: %%~nxf
    )
    echo.
)

echo 🎉 Сжатие завершено!
echo 📁 Оптимизированные файлы сохранены в: public\audio-optimized\
echo.
echo 📋 Следующие шаги:
echo 1. Проверьте качество сжатых файлов
echo 2. Замените оригинальные файлы оптимизированными
echo 3. Перезапустите сайт для проверки производительности
echo.
pause

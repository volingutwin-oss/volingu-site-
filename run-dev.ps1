# PowerShell скрипт для запуска сервера разработки
Write-Host "Запуск сервера разработки..." -ForegroundColor Green
Set-Location my-website
npm run dev

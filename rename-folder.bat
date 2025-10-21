@echo off
echo Переименование папки...
echo Введите новое имя папки:
set /p newname=
if not exist "%newname%" (
    ren my-website "%newname%"
    echo Папка переименована в %newname%
) else (
    echo Папка с таким именем уже существует!
)
pause

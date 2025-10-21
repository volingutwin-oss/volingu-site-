#!/bin/bash
# Скрипт для переименования аудио файлов
echo "Переименование аудио файлов..."

# Переходим в папку с аудио
cd public/audio

# Переименовываем файлы
for file in *.mp3; do
    if [ -f "$file" ]; then
        # Убираем пробелы и специальные символы
        new_name=$(echo "$file" | sed 's/[^a-zA-Z0-9._-]/_/g')
        mv "$file" "$new_name"
        echo "Переименован: $file -> $new_name"
    fi
done

echo "Готово!"

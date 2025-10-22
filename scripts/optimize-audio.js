const fs = require('fs');
const path = require('path');

// Функция для получения размера файла в MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Функция для анализа аудио файлов
function analyzeAudioFiles() {
  const audioDir = path.join(__dirname, '../public/audio');
  const files = fs.readdirSync(audioDir);
  
  console.log('📊 Анализ аудио файлов:');
  console.log('='.repeat(50));
  
  let totalSize = 0;
  const largeFiles = [];
  
  files.forEach(file => {
    if (file.endsWith('.mp3')) {
      const filePath = path.join(audioDir, file);
      const sizeMB = parseFloat(getFileSizeMB(filePath));
      totalSize += sizeMB;
      
      console.log(`${file}: ${sizeMB} MB`);
      
      if (sizeMB > 0.5) {
        largeFiles.push({ file, size: sizeMB });
      }
    }
  });
  
  console.log('='.repeat(50));
  console.log(`📈 Общий размер: ${totalSize.toFixed(2)} MB`);
  console.log(`⚠️  Больших файлов (>0.5MB): ${largeFiles.length}`);
  
  if (largeFiles.length > 0) {
    console.log('\n🔧 Рекомендации по оптимизации:');
    largeFiles.forEach(({ file, size }) => {
      console.log(`- ${file}: ${size} MB (рекомендуется сжать до <0.3MB)`);
    });
  }
  
  return { totalSize, largeFiles };
}

// Функция для создания оптимизированных версий
function createOptimizedVersions() {
  const audioDir = path.join(__dirname, '../public/audio');
  const optimizedDir = path.join(__dirname, '../public/audio-optimized');
  
  // Создаем папку для оптимизированных файлов
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }
  
  console.log('\n📁 Создана папка для оптимизированных файлов:', optimizedDir);
  console.log('💡 Рекомендации:');
  console.log('1. Используйте FFmpeg для сжатия аудио:');
  console.log('   ffmpeg -i input.mp3 -b:a 64k -ar 22050 output.mp3');
  console.log('2. Или используйте онлайн-сервисы для сжатия');
  console.log('3. Замените оригинальные файлы оптимизированными');
}

// Запуск анализа
console.log('🚀 Анализ производительности аудио файлов...\n');
const analysis = analyzeAudioFiles();
createOptimizedVersions();

console.log('\n✅ Анализ завершен!');
console.log('\n📋 Следующие шаги:');
console.log('1. Сожмите большие аудио файлы до <300KB каждый');
console.log('2. Используйте формат MP3 с битрейтом 64-128 kbps');
console.log('3. Рассмотрите использование WebM для лучшего сжатия');
console.log('4. Внедрите ленивую загрузку аудио (уже реализовано)');

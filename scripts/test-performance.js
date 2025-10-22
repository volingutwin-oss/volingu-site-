const fs = require('fs');
const path = require('path');

console.log('🚀 Тестирование производительности сайта...\n');

// Функция для проверки размера файлов
function checkFileSizes() {
  console.log('📊 Анализ размера файлов:');
  console.log('='.repeat(50));
  
  const audioDir = path.join(__dirname, '../public/audio');
  const optimizedDir = path.join(__dirname, '../public/audio-optimized');
  
  // Проверяем оригинальные файлы
  if (fs.existsSync(audioDir)) {
    const files = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3'));
    let totalSize = 0;
    
    files.forEach(file => {
      const filePath = path.join(audioDir, file);
      const sizeMB = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
      totalSize += parseFloat(sizeMB);
      console.log(`📁 ${file}: ${sizeMB} MB`);
    });
    
    console.log(`📈 Общий размер оригинальных файлов: ${totalSize.toFixed(2)} MB`);
  }
  
  // Проверяем оптимизированные файлы
  if (fs.existsSync(optimizedDir)) {
    console.log('\n🔧 Оптимизированные файлы:');
    const optimizedFiles = fs.readdirSync(optimizedDir).filter(f => f.endsWith('.mp3'));
    let optimizedSize = 0;
    
    optimizedFiles.forEach(file => {
      const filePath = path.join(optimizedDir, file);
      const sizeMB = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(2);
      optimizedSize += parseFloat(sizeMB);
      console.log(`✅ ${file}: ${sizeMB} MB`);
    });
    
    console.log(`📈 Общий размер оптимизированных файлов: ${optimizedSize.toFixed(2)} MB`);
    
    if (optimizedSize > 0) {
      const savings = ((totalSize - optimizedSize) / totalSize * 100).toFixed(1);
      console.log(`💰 Экономия: ${savings}% (${(totalSize - optimizedSize).toFixed(2)} MB)`);
    }
  }
  
  console.log('='.repeat(50));
}

// Функция для проверки конфигурации Next.js
function checkNextConfig() {
  console.log('\n⚙️ Проверка конфигурации Next.js:');
  console.log('='.repeat(50));
  
  const configPath = path.join(__dirname, '../next.config.mjs');
  
  if (fs.existsSync(configPath)) {
    const config = fs.readFileSync(configPath, 'utf8');
    
    const optimizations = [
      { name: 'Сжатие gzip', pattern: /compress:\s*true/ },
      { name: 'SWC минификация', pattern: /swcMinify:\s*true/ },
      { name: 'Оптимизация CSS', pattern: /optimizeCss:\s*true/ },
      { name: 'Оптимизация импортов', pattern: /optimizePackageImports/ },
      { name: 'Разделение чанков', pattern: /splitChunks/ }
    ];
    
    optimizations.forEach(opt => {
      const isEnabled = opt.pattern.test(config);
      console.log(`${isEnabled ? '✅' : '❌'} ${opt.name}: ${isEnabled ? 'Включено' : 'Отключено'}`);
    });
  }
  
  console.log('='.repeat(50));
}

// Функция для проверки компонентов
function checkComponents() {
  console.log('\n🧩 Проверка компонентов:');
  console.log('='.repeat(50));
  
  const components = [
    { name: 'AudioPlayer', path: '../components/audio-player.tsx' },
    { name: 'VoiceCasesSection', path: '../components/voice-cases-section.tsx' },
    { name: 'LoadingSkeleton', path: '../components/loading-skeleton.tsx' }
  ];
  
  components.forEach(comp => {
    const fullPath = path.join(__dirname, comp.path);
    const exists = fs.existsSync(fullPath);
    console.log(`${exists ? '✅' : '❌'} ${comp.name}: ${exists ? 'Найден' : 'Не найден'}`);
  });
  
  console.log('='.repeat(50));
}

// Функция для генерации отчета
function generateReport() {
  console.log('\n📋 Рекомендации по дальнейшей оптимизации:');
  console.log('='.repeat(50));
  
  console.log('1. 🎵 Сожмите аудио файлы:');
  console.log('   - Запустите: node scripts/optimize-audio.js');
  console.log('   - Используйте FFmpeg для сжатия');
  console.log('   - Целевой размер: <300KB на файл');
  
  console.log('\n2. 🖼️ Оптимизируйте изображения:');
  console.log('   - Используйте WebP формат');
  console.log('   - Сжимайте изображения');
  console.log('   - Добавьте lazy loading');
  
  console.log('\n3. 📦 Удалите неиспользуемые зависимости:');
  console.log('   - Запустите: npm run build');
  console.log('   - Проверьте bundle analyzer');
  console.log('   - Удалите неиспользуемые пакеты');
  
  console.log('\n4. 🚀 Настройте CDN:');
  console.log('   - Используйте Vercel CDN');
  console.log('   - Настройте кеширование');
  console.log('   - Оптимизируйте статические ресурсы');
  
  console.log('\n5. 📊 Мониторинг производительности:');
  console.log('   - Используйте Lighthouse');
  console.log('   - Настройте Web Vitals');
  console.log('   - Мониторьте Core Web Vitals');
  
  console.log('='.repeat(50));
}

// Запуск всех проверок
checkFileSizes();
checkNextConfig();
checkComponents();
generateReport();

console.log('\n✅ Тестирование завершено!');
console.log('\n🎯 Следующие шаги:');
console.log('1. Сожмите аудио файлы с помощью FFmpeg');
console.log('2. Замените оригинальные файлы оптимизированными');
console.log('3. Запустите npm run build для проверки');
console.log('4. Протестируйте сайт в браузере');
console.log('5. Используйте Lighthouse для финального аудита');

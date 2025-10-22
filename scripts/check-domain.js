#!/usr/bin/env node

const https = require('https');
const http = require('http');
const dns = require('dns').promises;

async function checkDomain(domain) {
  console.log(`🔍 Проверяем домен: ${domain}`);
  
  try {
    // Проверяем DNS
    console.log('📡 Проверяем DNS записи...');
    const records = await dns.resolve4(domain);
    console.log(`✅ A записи: ${records.join(', ')}`);
    
    // Проверяем HTTP
    console.log('🌐 Проверяем HTTP...');
    await checkHttp(`http://${domain}`);
    
    // Проверяем HTTPS
    console.log('🔒 Проверяем HTTPS...');
    await checkHttp(`https://${domain}`);
    
  } catch (error) {
    console.error(`❌ Ошибка при проверке ${domain}:`, error.message);
  }
}

function checkHttp(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const req = protocol.get(url, (res) => {
      console.log(`✅ ${url} - Статус: ${res.statusCode}`);
      console.log(`   Заголовки: ${JSON.stringify(res.headers, null, 2)}`);
      resolve();
    });
    
    req.on('error', (error) => {
      console.error(`❌ ${url} - Ошибка:`, error.message);
      reject(error);
    });
    
    req.setTimeout(10000, () => {
      console.error(`⏰ ${url} - Таймаут`);
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  console.log('🚀 Диагностика доменов volingu.ru\n');
  
  await checkDomain('www.volingu.ru');
  console.log('\n' + '='.repeat(50) + '\n');
  await checkDomain('volingu.ru');
  
  console.log('\n📋 Рекомендации:');
  console.log('1. Проверьте настройки домена в Vercel Dashboard');
  console.log('2. Убедитесь что DNS записи указывают на Vercel');
  console.log('3. Очистите кеш браузера (Ctrl+Shift+R)');
  console.log('4. Проверьте SSL сертификат');
}

main().catch(console.error);

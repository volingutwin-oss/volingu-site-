#!/usr/bin/env node

const https = require('https');

async function checkProjectDomain(domain) {
  console.log(`🔍 Проверяем привязку проекта к домену: ${domain}`);
  
  try {
    // Проверяем основной домен
    await checkDomain(domain);
    
    // Проверяем www версию
    if (!domain.startsWith('www.')) {
      await checkDomain(`www.${domain}`);
    }
    
    // Проверяем Vercel заголовки
    await checkVercelHeaders(domain);
    
  } catch (error) {
    console.error(`❌ Ошибка при проверке ${domain}:`, error.message);
  }
}

function checkDomain(domain) {
  return new Promise((resolve, reject) => {
    const url = `https://${domain}`;
    
    const req = https.get(url, (res) => {
      console.log(`\n📊 Результат для ${domain}:`);
      console.log(`   Статус: ${res.statusCode}`);
      console.log(`   Сервер: ${res.headers.server || 'Не указан'}`);
      console.log(`   Vercel ID: ${res.headers['x-vercel-id'] || 'Не найден'}`);
      console.log(`   Vercel Cache: ${res.headers['x-vercel-cache'] || 'Не найден'}`);
      console.log(`   Content-Type: ${res.headers['content-type'] || 'Не указан'}`);
      
      if (res.headers['x-vercel-id']) {
        console.log(`   ✅ Домен привязан к Vercel проекту`);
      } else {
        console.log(`   ❌ Домен НЕ привязан к Vercel проекту`);
      }
      
      resolve();
    });
    
    req.on('error', (error) => {
      console.error(`❌ ${domain} - Ошибка:`, error.message);
      reject(error);
    });
    
    req.setTimeout(10000, () => {
      console.error(`⏰ ${domain} - Таймаут`);
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

function checkVercelHeaders(domain) {
  return new Promise((resolve, reject) => {
    const url = `https://${domain}`;
    
    const req = https.get(url, (res) => {
      console.log(`\n🔧 Vercel заголовки для ${domain}:`);
      
      const vercelHeaders = {
        'x-vercel-id': res.headers['x-vercel-id'],
        'x-vercel-cache': res.headers['x-vercel-cache'],
        'x-vercel-edge-region': res.headers['x-vercel-edge-region'],
        'server': res.headers['server']
      };
      
      Object.entries(vercelHeaders).forEach(([key, value]) => {
        if (value) {
          console.log(`   ${key}: ${value}`);
        }
      });
      
      if (res.headers['x-vercel-id']) {
        console.log(`   ✅ Проект активен на Vercel`);
      } else {
        console.log(`   ❌ Проект НЕ активен на Vercel`);
      }
      
      resolve();
    });
    
    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  console.log('🚀 Проверка привязки проекта к домену volingu.ru\n');
  
  await checkProjectDomain('volingu.ru');
  
  console.log('\n📋 Что проверить в Vercel Dashboard:');
  console.log('1. Settings → Domains → должен быть проект "volingu-site"');
  console.log('2. Статус домена должен быть "Valid Configuration"');
  console.log('3. Если домен не привязан - добавьте его в настройки проекта');
  console.log('4. Если статус "Invalid" - проверьте DNS записи');
}

main().catch(console.error);

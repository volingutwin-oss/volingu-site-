#!/usr/bin/env node

const dns = require('dns').promises;

async function checkDNSGlobal(domain) {
  console.log(`🌍 Проверяем DNS распространение для ${domain}\n`);
  
  const dnsServers = [
    { name: 'Google DNS', servers: ['8.8.8.8', '8.8.4.4'] },
    { name: 'Cloudflare DNS', servers: ['1.1.1.1', '1.0.0.1'] },
    { name: 'OpenDNS', servers: ['208.67.222.222', '208.67.220.220'] },
    { name: 'Quad9', servers: ['9.9.9.9', '149.112.112.112'] }
  ];
  
  for (const dnsConfig of dnsServers) {
    console.log(`📡 ${dnsConfig.name}:`);
    
    for (const server of dnsConfig.servers) {
      try {
        const resolver = new dns.Resolver();
        resolver.setServers([server]);
        
        const records = await resolver.resolve4(domain);
        console.log(`   ${server}: ${records.join(', ')}`);
      } catch (error) {
        console.log(`   ${server}: ❌ ${error.message}`);
      }
    }
    console.log('');
  }
}

async function checkGeographicAccess() {
  console.log('🌐 Проверка географического доступа:\n');
  
  const testUrls = [
    'https://www.volingu.ru',
    'https://volingu.ru',
    'https://volingu-site.vercel.app'
  ];
  
  for (const url of testUrls) {
    console.log(`🔗 ${url}:`);
    console.log('   Проверьте доступность в браузере');
    console.log('   Проверьте время загрузки');
    console.log('');
  }
}

async function main() {
  console.log('🚀 Диагностика доступа к volingu.ru\n');
  
  await checkDNSGlobal('www.volingu.ru');
  await checkGeographicAccess();
  
  console.log('📋 Рекомендации:');
  console.log('1. Подключите домен к Cloudflare');
  console.log('2. Измените DNS серверы');
  console.log('3. Проверьте настройки провайдера');
  console.log('4. Обратитесь в поддержку Vercel');
}

main().catch(console.error);

"use client";

import { useState } from 'react';
import { FadeIn, SlideInUp } from './scroll-animations';

const faqData = [
  {
    id: 1,
    question: "Что такое голосовые и чат-боты?",
    answer: "Голосовые и чат-боты — это AI-ассистенты, которые автоматизируют общение с клиентами через голосовые звонки и текстовые сообщения. Они работают 24/7, отвечают на вопросы, обрабатывают заявки и помогают увеличивать продажи."
  },
  {
    id: 2,
    question: "Какие задачи решают голосовые и чат-боты?",
    answer: "Голосовые и чат-боты решают множество задач бизнеса, вот только некоторые из них:\n\n• Обработка входящих и исходящих звонков\n• Автоматизация записи на услуги и консультации\n• Напоминания о встречах, платежах и акциях\n• Сбор обратной связи через опросы\n• Увеличение продаж и привлечение новых клиентов\n• Поддержка клиентов 24/7"
  },
  {
    id: 3,
    question: "Как работают голосовые боты?",
    answer: "Голосовые боты используют технологии распознавания речи (ASR) и синтеза речи (TTS). Они понимают речь клиента, обрабатывают запрос с помощью AI, и отвечают естественным голосом. Весь процесс занимает секунды."
  },
  {
    id: 4,
    question: "Можно ли интегрировать ботов с CRM?",
    answer: "Да, наши боты легко интегрируются с популярными CRM-системами (AmoCRM, Bitrix24, 1C и др.). Все данные о клиентах и взаимодействиях автоматически сохраняются в вашей CRM."
  },
  {
    id: 5,
    question: "Поддерживают ли боты несколько языков?",
    answer: "Да, наши боты поддерживают русский, английский, казахский и другие языки. Мы можем настроить бота на любой язык для вашего бизнеса."
  },
  {
    id: 6,
    question: "Безопасны ли данные клиентов?",
    answer: "Абсолютно! Мы используем шифрование данных, соответствуем требованиям GDPR и российского законодательства. Все данные хранятся на защищенных серверах."
  },
  {
    id: 7,
    question: "Сколько стоит внедрение ботов?",
    answer: "Стоимость зависит от сложности задач и количества интеграций. Базовый пакет начинается от 50,000₽/месяц. Свяжитесь с нами для персонального расчета."
  },
  {
    id: 8,
    question: "Как быстро можно внедрить бота?",
    answer: "Простое внедрение занимает 1-2 недели. Сложные проекты с множественными интеграциями — 1-2 месяца. Мы работаем быстро и качественно."
  },
  {
    id: 9,
    question: "Можно ли настроить бота под мой бизнес?",
    answer: "Конечно! Каждый бот настраивается индивидуально под ваши процессы, продукты и стиль общения. Мы изучаем ваш бизнес и создаем уникального помощника."
  },
  {
    id: 10,
    question: "Как боты помогают увеличить продажи?",
    answer: "Боты работают 24/7, не устают и не делают ошибок. Они обрабатывают больше клиентов, не пропускают ни одного лида, и всегда предлагают дополнительные услуги. Результат — рост продаж на 30-85%."
  },
  {
    id: 11,
    question: "Что если бот не сможет ответить на вопрос?",
    answer: "Бот переключит клиента на живого оператора или запишет вопрос для последующей обработки. Мы также постоянно обучаем ботов на новых данных."
  },
  {
    id: 12,
    question: "Можно ли протестировать бота перед покупкой?",
    answer: "Да! Мы предоставляем демо-версию бота на 7 дней бесплатно. Вы сможете протестировать все функции и убедиться в эффективности решения."
  },
  {
    id: 13,
    question: "Как происходит обучение бота?",
    answer: "Мы загружаем в бота ваши FAQ, базу знаний, скрипты продаж и примеры диалогов. Бот изучает эту информацию и начинает работать как опытный сотрудник."
  },
  {
    id: 14,
    question: "Можно ли изменить настройки бота после запуска?",
    answer: "Да, вы можете вносить изменения в настройки бота в любое время через удобную панель управления. Изменения применяются мгновенно."
  },
  {
    id: 15,
    question: "Какая техподдержка предоставляется?",
    answer: "Мы предоставляем круглосуточную техподдержку, мониторинг работы ботов и регулярные обновления. Наша команда всегда готова помочь."
  },
  {
    id: 16,
    question: "Можно ли интегрировать с платежными системами?",
    answer: "Да, боты могут принимать платежи через интеграцию с ЮKassa, Сбербанк, Тинькофф и другими платежными системами."
  },
  {
    id: 17,
    question: "Как измеряется эффективность ботов?",
    answer: "Мы предоставляем детальную аналитику: количество обработанных звонков, конверсию, время ответа, удовлетворенность клиентов и другие метрики."
  },
  {
    id: 18,
    question: "Что входит в стоимость обслуживания?",
    answer: "В стоимость входит: настройка бота, интеграции, техподдержка, обновления, аналитика и мониторинг работы. Никаких скрытых платежей!"
  }
];

const FAQItem = ({ item, isOpen, onToggle }: { item: any, isOpen: boolean, onToggle: () => void }) => {
  return (
    <div style={{
      borderBottom: '1px solid #e5e7eb',
      transition: 'all 0.3s ease'
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f8fafc';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.125rem',
            fontWeight: 'bold',
            transition: 'all 0.15s ease',
            flexShrink: 0,
            lineHeight: '1',
            textAlign: 'center',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
          }}>
            {isOpen ? '−' : '+'}
          </div>
          <span style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#1f2937',
            lineHeight: '1.5',
            flex: 1
          }}>
            {item.question}
          </span>
        </div>
      </button>
      
      {isOpen && (
        <div style={{
          padding: '0 1rem 1.5rem 4rem',
          animation: 'fadeInDown 0.15s ease-out'
        }}>
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            marginRight: '1rem'
          }}>
            <p style={{
              color: '#374151',
              lineHeight: '1.7',
              margin: '0',
              whiteSpace: 'pre-line'
            }}>
              {item.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section style={{
      padding: '5rem 0 5rem 0',
      background: 'linear-gradient(135deg, #667eea 0%, #5a67d8 25%, #3182ce 50%, #2b6cb0 75%, #2c5282 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(50px)'
      }} />

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Вопрос-ответ
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Ответы на самые популярные вопросы о наших AI-ассистентах
            </p>
          </div>
        </FadeIn>
        
        <SlideInUp>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            boxShadow: '0 20px 25px rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            overflow: 'hidden'
          }}>
            {faqData.map((item, index) => (
              <FadeIn key={item.id} delay={index * 50}>
                <FAQItem
                  item={item}
                  isOpen={openItems.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              </FadeIn>
            ))}
          </div>
        </SlideInUp>
      </div>
    </section>
  );
}

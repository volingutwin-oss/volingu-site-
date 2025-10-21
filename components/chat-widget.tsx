'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function ChatWidget() {
  useEffect(() => {
    // Инициализация виджета после загрузки скрипта
    const initWidget = () => {
      // @ts-ignore
      if (typeof appChatClient !== 'undefined') {
        // @ts-ignore
        appChatClient({
          chatId: '6ee8f176-8211-4d77-a78e-f2edf42e9621',
        }, {
          host: document.getElementById('chat-client'),
          injectStyles: `
            [data-id=chat-host] {
              bottom: 8px;
              right: 8px;
              align-items: end;
            }`,    
        })
      }
    }

    // Проверяем, загружен ли уже скрипт
    // @ts-ignore
    if (typeof appChatClient !== 'undefined') {
      initWidget()
    }
  }, [])

  return (
    <>
      <div id="chat-client" style={{ zIndex: 1000000 }}></div>
      <Script 
        src="https://twin24.ai/app/chat-client/widget.js" 
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          if (typeof appChatClient !== 'undefined') {
            // @ts-ignore
            appChatClient({
              chatId: '6ee8f176-8211-4d77-a78e-f2edf42e9621',
            }, {
              host: document.getElementById('chat-client'),
              injectStyles: `
                [data-id=chat-host] {
                  bottom: 8px;
                  right: 8px;
                  align-items: end;
                }`,    
            })
          }
        }}
      />
    </>
  )
}


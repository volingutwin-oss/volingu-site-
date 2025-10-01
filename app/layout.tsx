import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "NeuroStaff - Нейросотрудники для вашего бизнеса | AI-ассистенты 24/7",
  description:
    "Создаем умных AI-ассистентов на базе ChatGPT для продаж, поддержки, HR и консультаций. Работают 24/7 без отпусков. Увеличьте продажи на 85% и сократите расходы на персонал.",
  keywords: "AI ассистент, нейросотрудник, ChatGPT для бизнеса, автоматизация продаж, чат-бот, искусственный интеллект",
  generator: "v0.app",
  openGraph: {
    title: "NeuroStaff - Нейросотрудники для вашего бизнеса",
    description: "AI-ассистенты, которые работают 24/7 и увеличивают продажи на 85%",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased" style={{ paddingTop: '80px' }}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}

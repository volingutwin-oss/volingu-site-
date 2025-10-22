import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Montserrat } from "next/font/google"
import ChatWidget from "@/components/chat-widget"
import MobileNav from "@/components/mobile-nav"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Volingu - Нейросотрудники для вашего бизнеса | AI-ассистенты 24/7",
  description:
    "Создаем умных AI-ассистентов на базе ChatGPT для продаж, поддержки, HR и консультаций. Работают 24/7 без отпусков. Увеличьте продажи на 85% и сократите расходы на персонал.",
  keywords: "AI ассистент, нейросотрудник, ChatGPT для бизнеса, автоматизация продаж, чат-бот, искусственный интеллект",
  generator: "v0.app",
  openGraph: {
    title: "Volingu - Нейросотрудники для вашего бизнеса",
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
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://twin24.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`} style={{ paddingTop: '80px' }}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <MobileNav />
        <ChatWidget />
      </body>
    </html>
  )
}

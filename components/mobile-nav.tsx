"use client"

import React, { useState } from 'react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Мобильное меню кнопка */}
      <button
        className="mobile-only lg:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Открыть меню"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>
      </button>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="mobile-only lg:hidden fixed inset-0 z-40 bg-white">
          <div className="flex flex-col h-full pt-16 px-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="/services"
                className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                УСЛУГИ
              </a>
              <a
                href="/about"
                className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                О НАС
              </a>
              <a
                href="/blog"
                className="text-lg font-medium text-gray-900 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                БЛОГ
              </a>
              <a
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Получить консультацию
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="mobile-only lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

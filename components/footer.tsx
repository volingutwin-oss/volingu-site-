"use client"

export function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: '4rem 1rem 2rem',
      textAlign: 'center'
    }}>
      {/* Logo and Subtitle */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: 'white',
          marginBottom: '1rem',
          fontFamily: 'sans-serif'
        }}>
          Volingu
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'white',
          opacity: 0.9,
          margin: 0
        }}>
          Нейросотрудники для вашего бизнеса
        </p>
      </div>

      {/* Navigation Links */}
      <div style={{
        marginBottom: '3rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        <a href="/about" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '500',
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '0.7'}
        onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          О нас
        </a>
        <a href="/blog" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '500',
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '0.7'}
        onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          Блог
        </a>
        <a href="/contact" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '500',
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '0.7'}
        onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          Контакты
        </a>
      </div>

      {/* Company Information */}
      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: '1000px',
        margin: '0 auto 2rem',
        gap: '3rem'
      }}>
        {/* Company Details */}
        <div style={{
          textAlign: 'left',
          flex: '1'
        }}>
          <div style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            ООО "Стройконтакт-48"
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '0.25rem'
          }}>
            ИНН: 4824100120
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            ОГРНИП: 1204800008050
          </div>
        </div>

        {/* Contact Information */}
        <div style={{
          textAlign: 'center',
          flex: '1'
        }}>
          <div style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Контактная информация
          </div>
          <div style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            volingutwin@gmail.com
          </div>
        </div>

        {/* Legal Links */}
        <div style={{
          textAlign: 'right',
          flex: '1'
        }}>
          <div style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Правовая информация
          </div>
          <a href="/documents/Политик конфид (2).pdf" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'underline',
            display: 'block',
            marginBottom: '0.25rem'
          }}>
            Политика конфиденциальности
          </a>
          <a href="/documents/Пользовательское соглашение (1).pdf" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'underline',
            display: 'block'
          }}>
            Пользовательское соглашение
          </a>
        </div>
      </div>

      {/* Messenger Icons */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        maxWidth: '1000px',
        margin: '0 auto 2rem'
      }}>

        {/* Telegram */}
        <a href="#" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#0088cc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </div>
        </a>

        {/* WhatsApp */}
        <a href="#" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textDecoration: 'none',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
        </a>
      </div>

      {/* Divider Line */}
      <div style={{
        width: '80%',
        height: '1px',
        background: 'rgba(255, 255, 255, 0.2)',
        margin: '0 auto 2rem'
      }} />

      {/* Copyright */}
      <div style={{
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.9rem'
      }}>
        © 2025 Volingu. Все права защищены.
      </div>

    </footer>
  )
}

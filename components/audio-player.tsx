"use client"
import { useState, useRef } from 'react'

interface AudioPlayerProps {
  src: string
  title: string
  description?: string
  className?: string
}

export function AudioPlayer({ src, title, description, className = "" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = parseFloat(e.target.value)
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1rem',
      padding: '1rem 0'
    }}>
      <button
        onClick={togglePlay}
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)'
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}
      >
        {isPlaying ? (
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg width="16" height="16" fill="white" viewBox="0 0 24 24" style={{ marginLeft: '2px' }}>
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem',
        flex: 1
      }}>
        <span style={{ 
          fontSize: '0.875rem', 
          color: '#374151',
          fontFamily: 'monospace',
          minWidth: '35px'
        }}>
          {formatTime(currentTime)}
        </span>
        
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
              style={{
                flex: 1,
                height: '6px',
                background: 'linear-gradient(90deg, #3182ce 0%, #e5e7eb 0%)',
                borderRadius: '3px',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none'
              }}
        />
        
        <span style={{ 
          fontSize: '0.875rem', 
          color: '#374151',
          fontFamily: 'monospace',
          minWidth: '35px'
        }}>
          {formatTime(duration)}
        </span>
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.25rem',
        marginLeft: '0.25rem'
      }}>
        <svg width="12" height="12" fill="#3182ce" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        </svg>
        <div style={{
          width: '15px',
          height: '3px',
          background: 'linear-gradient(90deg, #3182ce 0%, #2b6cb0 100%)',
          borderRadius: '2px'
        }}></div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
    </div>
  )
}

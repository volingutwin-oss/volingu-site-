"use client"
import { useState, useRef, useEffect } from 'react'

interface AudioPlayerProps {
  src: string
  title: string
  description?: string
  className?: string
  duration?: string
}

export function AudioPlayer({ src, title, description, className = "", duration: durationProp }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Функция для конвертации времени из строки в секунды
  const parseDuration = (durationStr: string): number => {
    if (!durationStr) return 0
    const parts = durationStr.split(':')
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseInt(parts[1])
    }
    return 0
  }

  // Устанавливаем громкость при загрузке
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

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
    if (audioRef.current && !isDragging) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      console.log('🎵 Audio loaded, duration:', audioRef.current.duration)
      // Используем переданную длительность или длительность из аудио
      const audioDuration = audioRef.current.duration
      const propDuration = durationProp ? parseDuration(durationProp) : 0
      setDuration(propDuration || audioDuration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    console.log('🎵 Seeking to:', newTime)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleSeekStart = () => {
    console.log('🎵 Seek start')
    setIsDragging(true)
  }

  const handleSeekEnd = () => {
    console.log('🎵 Seek end')
    setIsDragging(false)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
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
      gap: '0.5rem',
      padding: '0.5rem 0',
      maxWidth: '100%',
      overflow: 'hidden'
    }}>
      <button
        onClick={togglePlay}
            style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: 'none',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 50%, #2c5282 100%)'
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
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
        gap: '0.25rem',
        flex: 1,
        minWidth: 0
      }}>
        <span style={{ 
          fontSize: '0.75rem', 
          color: '#374151',
          fontFamily: 'monospace',
          minWidth: '28px',
          flexShrink: 0
        }}>
          {formatTime(currentTime)}
        </span>
        
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          onMouseDown={handleSeekStart}
          onMouseUp={handleSeekEnd}
          onTouchStart={handleSeekStart}
          onTouchEnd={handleSeekEnd}
              style={{
                flex: 1,
                height: '6px',
                background: `linear-gradient(90deg, #3182ce ${(currentTime / (duration || 1)) * 100}%, #e5e7eb ${(currentTime / (duration || 1)) * 100}%)`,
                borderRadius: '3px',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                WebkitAppearance: 'none',
                pointerEvents: 'auto',
                minWidth: '60px'
              }}
              className="audio-slider"
        />
        
        <span style={{ 
          fontSize: '0.75rem', 
          color: '#374151',
          fontFamily: 'monospace',
          minWidth: '28px',
          flexShrink: 0
        }}>
          {formatTime(duration)}
        </span>
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.25rem',
        marginLeft: '0.25rem',
        minWidth: '60px',
        flexShrink: 0
      }}>
        <svg width="12" height="12" fill="#3182ce" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        </svg>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            width: '40px',
            height: '3px',
            background: `linear-gradient(90deg, #3182ce ${volume * 100}%, #e5e7eb ${volume * 100}%)`,
            borderRadius: '2px',
            outline: 'none',
            cursor: 'pointer',
            appearance: 'none',
            WebkitAppearance: 'none'
          }}
          className="volume-slider"
        />
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

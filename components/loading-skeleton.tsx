"use client"

interface LoadingSkeletonProps {
  width?: string
  height?: string
  className?: string
}

export function LoadingSkeleton({ width = "100%", height = "20px", className = "" }: LoadingSkeletonProps) {
  return (
    <div 
      className={className}
      style={{
        width,
        height,
        background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
        borderRadius: '4px',
        animation: 'pulse 2s infinite',
        backgroundSize: '200% 100%',
        backgroundPosition: '200% 0',
        animationName: 'shimmer',
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }}
    />
  )
}

export function AudioLoadingSkeleton() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 0',
      maxWidth: '100%',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
        borderRadius: '50%',
        animation: 'pulse 2s infinite'
      }} />
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.25rem',
        flex: 1,
        minWidth: 0
      }}>
        <div style={{
          width: '28px',
          height: '12px',
          background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
          borderRadius: '2px',
          animation: 'pulse 2s infinite'
        }} />
        
        <div style={{
          flex: 1,
          height: '6px',
          background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
          borderRadius: '3px',
          animation: 'pulse 2s infinite'
        }} />
        
        <div style={{
          width: '28px',
          height: '12px',
          background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
          borderRadius: '2px',
          animation: 'pulse 2s infinite'
        }} />
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.25rem',
        marginLeft: '0.25rem',
        minWidth: '60px',
        flexShrink: 0
      }}>
        <div style={{
          width: '12px',
          height: '12px',
          background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
          borderRadius: '2px',
          animation: 'pulse 2s infinite'
        }} />
        <div style={{
          width: '40px',
          height: '3px',
          background: 'linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%)',
          borderRadius: '2px',
          animation: 'pulse 2s infinite'
        }} />
      </div>
    </div>
  )
}

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear existing triangles
    container.innerHTML = ''

    // Create triangles
    for (let i = 0; i < 200; i++) {
      const triangle = document.createElement('div')
      const size = Math.random() * 40 + 10 // 10-50px
      const rotate = Math.random() * 360
      const hue = Math.random() * 360
      const delay = -(i * (10000 / 200)) // Distributed delays over 10s
      const endX = (Math.random() - 0.5) * 2000
      const endY = (Math.random() - 0.5) * 2000
      const rotateEnd = rotate * 1.5

      triangle.className = 'triangle'
      triangle.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-top: ${size}px solid hsl(${hue}, 100%, 50%);
        border-right: ${size}px solid transparent;
        border-left: ${size}px solid transparent;
        margin-left: -${size / 2}px;
        margin-top: -${size / 2}px;
        filter: grayscale(1);
        opacity: 0;
        transform: rotate(${rotate}deg) translate3d(0, 0, -1500px) scale(0);
        animation: triangleAnim${i} 10s infinite linear;
        animation-delay: ${delay}ms;
      `

      // Create unique keyframes for each triangle
      const styleSheet = document.createElement('style')
      styleSheet.textContent = `
        @keyframes triangleAnim${i} {
          0% {
            opacity: 1;
            transform: rotate(${rotateEnd}deg) translate3d(${endX}px, ${endY}px, 1000px) scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(${rotate}deg) translate3d(0, 0, -1500px) scale(0);
          }
        }
      `
      document.head.appendChild(styleSheet)
      container.appendChild(triangle)
    }

    // Cleanup function
    return () => {
      const styles = document.head.querySelectorAll('style')
      styles.forEach(style => {
        if (style.textContent?.includes('triangleAnim')) {
          document.head.removeChild(style)
        }
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'white',
          backgroundImage: 'radial-gradient(circle at center, #f0f0f0 0%, #ddd 10%, white 60%)'
        }}
      />
      
      {/* Triangles container */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '800px'
        }}
      />
    </div>
  )
}

export default AnimatedBackground
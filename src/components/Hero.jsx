import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: 'MAKE PROGRESS',
      subtitle: 'Men\'s Idol Audition',
      description: 'Shape the future of entertainment'
    },
    {
      title: 'CHASE YOUR DREAM',
      subtitle: 'Men\'s Idol Audition',
      description: 'Your journey starts here'
    },
    {
      title: 'BE THE STAR',
      subtitle: 'Men\'s Idol Audition',
      description: 'Join the next generation'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated Triangle Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Main Title with Mask Effect */}
              <div className="mb-8 overflow-hidden">
                <motion.h1 
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tighter drop-shadow-2xl"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)'
                  }}
                >
                  {slides[currentSlide].title.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      className="inline-block mr-4"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4 drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  textShadow: '0 0 15px rgba(255,255,255,0.7)'
                }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                style={{
                  textShadow: '0 0 10px rgba(255,255,255,0.6)'
                }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <button className="group relative px-8 py-4 bg-gray-900 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:text-white shadow-2xl">
                  <span className="relative z-10">ENTRY NOW</span>
                  <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-2xl backdrop-blur-sm">
                  LEARN MORE
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 transition-all duration-500 ${
              index === currentSlide ? 'bg-white w-24' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 right-10 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 tracking-wider">SCROLL</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rotate-45" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rotate-12" />
    </section>
  )
}

export default Hero
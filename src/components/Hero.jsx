import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent">
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title with Mask Effect */}
            <div className="mb-8 overflow-hidden">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none tracking-tighter"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6)'
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="inline-block mr-4"
                >
                  MEN'S
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="inline-block"
                >
                  IDOL
                </motion.span>
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
              AUDITION 2025
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
              Shape the future of entertainment
            </motion.p>

            {/* CTA Buttons */}
            {/* <motion.div
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
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 right-10 text-gray-900"
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
    </section>
  )
}

export default Hero
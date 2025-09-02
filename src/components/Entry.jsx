import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Entry = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="entry" className="relative py-16 md:py-32 bg-transparent overflow-hidden" ref={ref}>
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Section Title */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-4 md:mb-6">
            START YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              JOURNEY
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            世界中から才能を募集中。あなたの夢を実現する第一歩を踏み出そう。
          </p>
        </motion.div>

        {/* Entry Button Container */}
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Image Button - if entry.png exists */}
          <a 
            href="#apply" 
            className="block relative group cursor-pointer"
          >
            <img 
              src="/images/entry.png" 
              alt="応募する"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl"
              onError={(e) => {
                // Fallback to styled button if image doesn't exist
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            
            {/* Fallback Styled Button */}
            <div 
              className="hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl aspect-square"
              style={{ display: 'none' }}
            >
              <div className="px-16 py-12 h-full flex flex-col justify-center items-center">
                <div className="text-4xl font-black mb-4">応募する</div>
                <div className="text-lg">ENTRY NOW</div>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              initial={false}
            />
          </a>
        </motion.div>

        {/* Application Period */}
        <motion.div
          className="mt-8 md:mt-12 space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">応募期間</h3>
            <p className="text-base md:text-xl text-gray-700 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
              2025年7月17日 〜 2025年9月4日
            </p>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
              <p className="text-sm md:text-lg text-gray-600">
                放送予定：2026年上半期
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Text */}
        <motion.div
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg md:text-2xl font-bold text-gray-800 px-4" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
            OWN YOUR NEW WORLD
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  )
}

export default Entry
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
        {/* <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-red-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 block">
            CATCH COPY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-4 md:mb-6">
            キャッチ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              コピー
            </span>
          </h2>
        </motion.div> */}

        {/* Catch Copy List */}
        {/* <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {[
                'プロはいらない。スターを決めるのはあなた。',
                '111人の青春。11人の未来。',
                'ここは教室じゃない。これはサバイバル。',
                '終わりがあるから美しい。',
                '限られた時間の中で僕たちは'
              ].map((copy, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-4 flex-shrink-0"></div>
                    <p className="text-lg md:text-2xl font-bold text-gray-900" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                      {copy}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}

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
            {/* <img 
              src="/images/entry.png" 
              alt="応募する"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl"
              onError={(e) => {
                // Fallback to styled button if image doesn't exist
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            /> */}
            
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
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">募集要項</h3>
            <p className="text-base md:text-xl text-gray-700 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
              候補生：111人<br />
              最終デビュー人数：11人
            </p>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
              <p className="text-sm md:text-lg text-gray-600">
                募集期間：2025年春開始予定<br />
                放送予定：2025年夏〜秋
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
            終わりがあるから美しい。<br />
            限られた時間の中で僕たちは
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
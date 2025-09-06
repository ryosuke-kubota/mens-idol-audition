import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Vision = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }

  return (
    <section id="vision" className="relative py-16 md:py-32 bg-transparent overflow-hidden" ref={ref}>
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          variants={itemVariants}
        >
          <span className="text-green-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 block">
            OUR VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            VISION
          </h2>
        </motion.div>

        {/* Vision Content */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl"
          variants={itemVariants}
        >
          <div className="text-center space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
              番組の流れ
            </h3>
            
            {/* Flow Steps */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Step 1 */}
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      111
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 ml-4">
                      候補生
                    </h4>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-medium" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                    全国から集まった多様な才能を持つ候補生。
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      11
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 ml-4">
                      デビュー
                    </h4>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-medium" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                    選ばれた11人が日本初の新グローバルアイドルグループとしてデビュー。
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Arrow */}
            <motion.div
              className="flex justify-center my-8"
              variants={itemVariants}
            >
              <svg className="w-8 h-8 text-gray-400 transform rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>

            {/* Final Vision */}
            <motion.div
              className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 md:p-10"
              variants={itemVariants}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                新時代のアイドル誕生
              </h4>
              <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                プロの評価ではなく、ファンの支持こそがアイドルに必要な力であることを体現。<br />
                視聴者が完全審査員として、推し文化・ファンダム形成を直結。
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          variants={itemVariants}
        >
          <p className="text-lg md:text-2xl font-bold text-gray-800" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
            111人の青春。11人の未来。
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Vision
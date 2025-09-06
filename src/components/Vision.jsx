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
    <section id="vision" className="relative py-16 md:py-24 bg-transparent overflow-hidden" ref={ref}>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            VISION
          </h2>
        </motion.div>

        {/* Simple Flow */}
        <motion.div
          className="space-y-6"
          variants={itemVariants}
        >
          {/* Flow Container */}
          <div className="backdrop-blur-sm rounded-2xl p-6 md:p-10">
            {/* Flow Steps */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              {/* Step 1 */}
              <div className="text-center flex-1">
                <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gray-500 text-white rounded-full mb-3">
                  <span className="text-2xl md:text-3xl font-bold">111名</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">候補生</h3>
                {/* <p className="text-sm md:text-base text-gray-600">全国から集まった才能</p> */}
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="md:hidden">
                <svg className="w-8 h-8 text-gray-900 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="text-center flex-1">
                <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-yellow-500 text-white rounded-full mb-3">
                  <span className="text-2xl md:text-3xl font-bold">11名</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">最終デビュー</h3>
                {/* <p className="text-sm md:text-base text-gray-600">選ばれし11人</p> */}
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <motion.div
            className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 md:p-8 text-center"
            variants={itemVariants}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              新時代のアイドル誕生
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              視聴者が完全審査員<br />
              ファンの力で作る新しいアイドルグループ
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="text-center pt-4"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl font-bold text-gray-800">
              111人の青春。11人の未来。
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Vision
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Mission = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }

  return (
    <section id="mission" className="relative py-12 md:py-24 bg-transparent overflow-hidden" ref={ref}>
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-6 md:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            MISSION
          </h2>
        </motion.div>

        {/* Mission Rules */}
        <motion.div
          className="bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-4 md:p-10"
          variants={itemVariants}
        >
          <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            課題ルール
          </h3>

          <div className="space-y-6 md:space-y-8">
            {/* Rule 1 - 課題曲 */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start">
                <span className="text-xl md:text-2xl font-bold text-gray-400 mr-3 md:mr-4">01</span>
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">課題曲の発表</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-2 md:mb-3">
                    毎週「課題曲」が発表される
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 md:p-4">
                    <p className="text-sm md:text-base text-gray-700 font-medium">
                      ジャニーズ・K-POP・LDH など幅広いジャンルから出題
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      どうアレンジして"アイドルらしさ"を出すかが勝負！
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rule 2 - チーム編成 */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start">
                <span className="text-xl md:text-2xl font-bold text-gray-400 mr-3 md:mr-4">02</span>
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">チーム編成</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-2 md:mb-3">
                    チーム編成は<span className="font-bold">運・偶然・ゲーム</span>で決定
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4 space-y-1.5 md:space-y-2">
                    <div className="flex items-start">
                      <span className="text-gray-500 mr-1.5 md:mr-2 text-sm">◎</span>
                      <div className="text-xs md:text-sm">
                        <span className="font-semibold">当たり：</span>
                        <span className="text-gray-700">AKB48・乃木坂46など王道曲</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-500 mr-1.5 md:mr-2 text-sm">△</span>
                      <div className="text-xs md:text-sm">
                        <span className="font-semibold">ハズレ：</span>
                        <span className="text-gray-700">演歌・アニソンなど予想外の曲</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mt-1.5 md:mt-2 pl-4 md:pl-5">
                      → アレンジ力が勝負！
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rule 3 - 衣装 */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start">
                <span className="text-xl md:text-2xl font-bold text-gray-400 mr-3 md:mr-4">03</span>
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">衣装</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    1チーム<span className="font-bold">3万円支給</span>。ユニクロ等で購入しアレンジ
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Rule 4 - メイク */}
            <motion.div variants={itemVariants}>
              <div className="flex items-start">
                <span className="text-xl md:text-2xl font-bold text-gray-400 mr-3 md:mr-4">04</span>
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">メイク</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    候補生同士で施し合う。アイドル力と美意識が試される
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200 text-center"
            variants={itemVariants}
          >
            <p className="text-xs md:text-sm text-gray-600 italic">
              プロのレッスンなし。すべて自分たちの力と工夫で挑戦！
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Mission
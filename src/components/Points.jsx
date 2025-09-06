import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Points = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const points = [
    {
      title: '視聴者参加型システム',
      items: [
        '毎回パフォーマンスを披露し、視聴者投票で勝敗・生存が決まる。',
        '「推しメン」を応援する仕組みをアプリやSNS連動で実現。',
        'プロの評価ではなく、ファンの支持こそがアイドルに必要な力であることを体現。'
      ]
    },
    {
      title: '他番組との違い（差別化ポイント）',
      items: [
        'プロ不在：ダンス・歌レッスンなし → 自力成長を見守るリアリティ。',
        '課題曲の幅：アイドルソングから演歌まで、引き出しの強さ・アレンジ力が鍵。',
        '衣装・メイクDIY：アイドルの"セルフプロデュース力"がそのまま評価に直結。',
        '111人から11人へ：大規模サバイバルの緊張感。',
        '視聴者が完全審査員：推し文化・ファンダム形成を直結。'
      ]
    }
  ]

  return (
    <section id="points" className="relative py-16 md:py-24 bg-transparent overflow-hidden" ref={ref}>
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            POINT
          </h2>
        </motion.div>

        {/* Points Grid */}
        <div className="space-y-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 p-6 md:p-8">
                {/* Point Header */}
                <div className="flex items-center mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-gray-400 mr-4">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {point.title}
                  </h3>
                </div>

                {/* Point Items */}
                <ul className="space-y-3 pl-0 md:pl-12">
                  {point.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + (itemIndex * 0.05) }}
                    >
                      <span className="text-gray-400 mr-3">・</span>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">
            革新的なアイドル育成番組
          </p>
          <p className="text-base md:text-lg text-gray-600">
            ここは教室じゃない。これはサバイバル。
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Points
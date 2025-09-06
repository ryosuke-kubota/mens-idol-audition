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
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: '他番組との違い（差別化ポイント）',
      items: [
        'プロ不在：ダンス・歌レッスンなし → 自力成長を見守るリアリティ。',
        '課題曲の幅：アイドルソングから演歌まで、引き出しの強さ・アレンジ力が鍵。',
        '衣装・メイクDIY：アイドルの"セルフプロデュース力"がそのまま評価に直結。',
        '111人から11人へ：大規模サバイバルの緊張感。',
        '視聴者が完全審査員：推し文化・ファンダム形成を直結。'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ]

  return (
    <section id="points" className="relative py-16 md:py-32 bg-transparent overflow-hidden" ref={ref}>
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-indigo-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 block">
            KEY FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            POINT
          </h2>
        </motion.div>

        {/* Points Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <div className={`bg-gradient-to-br ${point.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl h-full`}>
                {/* Point Number */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${point.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 ml-4" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                    {point.title}
                  </h3>
                </div>

                {/* Point Items */}
                <ul className="space-y-4">
                  {point.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + (itemIndex * 0.1) }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${point.color} rounded-full mt-2.5 mr-4 flex-shrink-0`}></div>
                      <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto">
            <p className="text-lg md:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
              革新的なアイドル育成番組
            </p>
            <p className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
              ここは教室じゃない。これはサバイバル。
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Points
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Expectations = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const expectations = [
    {
      title: 'SNSバズ必至',
      description: '衣装・メイク・曲アレンジが毎週話題に。',
      icon: '📱',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'ファン育成型',
      description: 'デビュー前から"自分が育てた感"を持たせ、コアファン形成。',
      icon: '💖',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '日本独自性',
      description: '韓国型オーディションとの差別化。',
      icon: '🇯🇵',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '新しいスター誕生',
      description: 'ただ歌がうまい／ダンスがうまいではなく、セルフプロデュースに優れた次世代型アイドルの発掘。',
      icon: '⭐',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section id="expectations" className="relative py-16 md:py-32 bg-transparent overflow-hidden" ref={ref}>
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
          <span className="text-emerald-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 block">
            WHAT TO EXPECT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            期待される
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              効果
            </span>
          </h2>
        </motion.div>

        {/* Colorful Grid Background */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12 opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className={`aspect-square rounded-xl ${
                i % 6 === 0 ? 'bg-pink-200' :
                i % 6 === 1 ? 'bg-blue-200' :
                i % 6 === 2 ? 'bg-green-200' :
                i % 6 === 3 ? 'bg-yellow-200' :
                i % 6 === 4 ? 'bg-purple-200' : 'bg-orange-200'
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          ))}
        </div>

        {/* Expectations Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {expectations.map((expectation, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${expectation.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {expectation.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 ml-4" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                    {expectation.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                  {expectation.description}
                </p>

                {/* Accent Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${expectation.color} rounded-b-2xl md:rounded-b-3xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Statement */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
              革命的なエンターテイメント体験
            </h3>
            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
              MEN'S IDOL SCHOOLは、従来のアイドル番組の常識を覆し、<br />
              視聴者とアイドルが一体となって創り上げる全く新しいエンターテイメントです。<br />
              <span className="font-bold text-emerald-700">あなたも、この歴史的瞬間の目撃者になりませんか？</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Expectations
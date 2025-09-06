import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Producer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const producers = [
    {
      name: '山田太郎',
      role: '元ジャニーズJr.出身プロデューサー',
      description: 'アイドル経験者として候補生に共感できる立場',
      image: '/images/producer1.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: '佐藤健',
      role: 'エンターテイメント業界のベテラン',
      description: 'SNS世代に刺さる存在感、候補生に寄り添う視点を担当。',
      image: '/images/producer2.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: '田中みなみ',
      role: '音楽プロデューサー',
      description: '知的で都会的なコメント力を発揮。',
      image: '/images/producer3.jpg',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section id="producer" className="relative py-16 md:py-32 bg-transparent overflow-hidden" ref={ref}>
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
          <span className="text-amber-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 block">
            MEET THE TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            PRODUCER
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              紹介
            </span>
          </h2>
        </motion.div>

        {/* Producers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {producers.map((producer, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${producer.color} opacity-20`}></div>
                  <img 
                    src={producer.image}
                    alt={producer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to gradient background
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${producer.color} flex items-center justify-center text-white text-4xl font-bold`}
                    style={{ display: 'none' }}
                  >
                    {producer.name.charAt(0)}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                    {producer.name}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-gray-700 mb-4" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                    {producer.role}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                    {producer.description}
                  </p>
                </div>

                {/* Accent */}
                <div className={`h-1 bg-gradient-to-r ${producer.color}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 font-medium" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
              ※ プロデューサーは番組進行役として参加しますが、<br />
              実際の審査・評価は100%視聴者の投票によって決定されます。
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Producer
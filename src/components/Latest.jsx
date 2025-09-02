import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Latest = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const newsItems = [
    {
      date: '2025.01.20',
      category: 'ANNOUNCEMENT',
      title: 'PRODUCE 101 JAPAN 新世界 グローバルオーディション開催決定',
      description: '史上初、国籍・出身地不問の全世界オーディションがスタート。世界中から才能を募集します。',
      isNew: true,
      isPinned: true
    },
    {
      date: '2025.01.18',
      category: 'NEWS',
      title: 'ME:I、デビュー後初の全国ツアー開催',
      description: 'PRODUCE 101 JAPAN THE GIRLSから誕生したME:Iが、全国10都市でツアーを開催することが発表されました。',
      isNew: true,
      isPinned: false
    },
    {
      date: '2025.01.15',
      category: 'MEDIA',
      title: '特別番組「PRODUCE 101 JAPAN ヒストリー」放送決定',
      description: 'これまでの3シーズンを振り返る特別番組が2月に放送されます。',
      isNew: true,
      isPinned: false
    },
    {
      date: '2025.01.12',
      category: 'UPDATE',
      title: 'オーディション応募サイトリニューアル',
      description: '応募プロセスがより簡単に。モバイル対応も強化されました。',
      isNew: false,
      isPinned: false
    },
    {
      date: '2025.01.10',
      category: 'ACHIEVEMENT',
      title: 'JO1、オリコン週間チャート1位獲得',
      description: '最新シングルがオリコン週間チャートで1位を獲得。デビューから連続記録を更新。',
      isNew: false,
      isPinned: false
    },
    {
      date: '2025.01.08',
      category: 'EVENT',
      title: 'INI ファンミーティング追加公演決定',
      description: '好評につき、東京・大阪で追加公演が決定しました。',
      isNew: false,
      isPinned: false
    },
    {
      date: '2025.01.05',
      category: 'COLLABORATION',
      title: 'PRODUCE 101 JAPAN × 有名ブランドコラボ',
      description: '限定グッズやコレクションが発売予定。詳細は後日発表。',
      isNew: false,
      isPinned: false
    },
    {
      date: '2025.01.02',
      category: 'MESSAGE',
      title: '新年のご挨拶とプロデューサーからのメッセージ',
      description: '2025年の展望と、ファンの皆様への感謝のメッセージ。',
      isNew: false,
      isPinned: false
    }
  ]

  const getCategoryColor = (category) => {
    switch(category) {
      case 'ANNOUNCEMENT': return 'bg-red-100 text-red-700 border-red-200'
      case 'NEWS': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'MEDIA': return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'UPDATE': return 'bg-green-100 text-green-700 border-green-200'
      case 'ACHIEVEMENT': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'EVENT': return 'bg-pink-100 text-pink-700 border-pink-200'
      case 'COLLABORATION': return 'bg-indigo-100 text-indigo-700 border-indigo-200'
      case 'MESSAGE': return 'bg-gray-100 text-gray-700 border-gray-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <section id="latest" className="relative py-16 md:py-32 bg-transparent overflow-hidden" ref={ref}>
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 block">
            LATEST UPDATES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-4 md:mb-6">
            最新
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              情報
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            PRODUCE 101 JAPANに関する最新ニュースとアップデート
          </p>
        </motion.div>

        {/* News List Container */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* News Items */}
          <div className="space-y-1 md:space-y-2">
            {newsItems.map((item, index) => (
              <motion.article
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <a href="#" className="block hover:bg-gray-50/50 rounded-lg transition-colors duration-200 px-2 md:px-4 py-2 md:py-3">
                  <div className="flex items-center gap-2 md:gap-4">
                    {/* Date */}
                    <span className="text-xs md:text-sm font-medium text-gray-500 min-w-[80px] md:min-w-[100px]">
                      {item.date}
                    </span>
                    
                    {/* New Badge */}
                    {item.isNew && (
                      <motion.span
                        className="text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 bg-red-500 text-white rounded text-[10px] md:text-xs"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        NEW
                      </motion.span>
                    )}
                    
                    {/* Title */}
                    <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 flex-1 leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* Arrow */}
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg">
              もっと見る
            </button>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Twitter */}
          <a
            href="https://twitter.com/produce101jp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">Twitter</h4>
                <p className="text-xs md:text-sm text-gray-600">@produce101jp</p>
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/produce101jp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Instagram</h4>
                <p className="text-sm text-gray-600">@produce101jp</p>
              </div>
            </div>
          </a>

          {/* Official Site */}
          <a
            href="https://produce101.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">公式サイト</h4>
                <p className="text-sm text-gray-600">produce101.jp</p>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Latest
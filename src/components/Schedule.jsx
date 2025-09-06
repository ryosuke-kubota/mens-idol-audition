import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Schedule = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const timeline = [
    {
      year: '2025',
      title: 'オーディション実施 & メディア露出強化',
      items: [
        '全国オーディション開催（応募者数：数千人規模を想定）',
        '地方予選・合宿型審査を含む密着番組をスタート',
        '視聴者参加型アプリ連動 → 投票を通じてファン獲得',
        'SNS展開（TikTok / YouTube / X / Instagram）で話題化を狙う',
        'スポンサー企業・協賛メディアとの提携開始'
      ]
    },
    {
      year: '2026',
      title: 'メンバー決定 & デビュー準備',
      items: [
        '上位11人のメンバー決定（最終回・ゴールデン特番で発表）',
        'お披露目ライブ（都内大規模ホール：有明・パシフィコ横浜など）',
        'デビューシングルリリース（視聴者投票で課題曲を決定）',
        '音楽番組・フェスへの出演開始',
        'メディア戦略（ドラマタイアップ・バラエティ出演）'
      ]
    },
    {
      year: '2027',
      title: '成長期 & 全国規模アリーナツアー',
      items: [
        '1stアルバム発売（デビューからの大成長）',
        '全国アリーナツアー開催（東京・大阪・名古屋・福岡・札幌など）',
        '海外イベント出演（韓国・東南アジアを中心にK-POP的展開を狙う）',
        'ファンクラブ限定イベント開催（オフライン＋オンライン配信）',
        'マーチャンダイズ（グッズ・コラボブランド）による収益強化'
      ]
    },
    {
      year: '2028',
      title: '終わりがあるから美しい',
      subtitle: '解散 & レガシー化',
      items: [
        '2年間の活動を締めくくる「解散コンサート」開催（東京ドーム or 大阪ドームを目標）',
        'ドキュメンタリー映画（成長記・ファン投票による名場面）公開',
        '各メンバーの個人事業キャリア（ソロ・俳優・モデルなど）を支援',
        '「MEN\'S IDOL SCHOOL Season 2」への期待を煽る演出'
      ]
    }
  ]

  return (
    <section id="schedule" className="relative py-16 md:py-32 bg-transparent overflow-hidden" ref={ref}>
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
          <span className="text-orange-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 block">
            OUR HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            今後の
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              予定
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-red-400 hidden md:block"></div>
          
          {timeline.map((period, index) => (
            <motion.div
              key={period.year}
              className="relative mb-16 md:mb-20"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm flex items-center justify-center text-white font-bold text-xl px-4">
                        {period.year}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base md:text-2xl font-bold text-gray-900">{period.title}</h3>
                        {period.subtitle && (
                          <p className="text-orange-600 font-medium" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                            {period.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {period.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base text-gray-700" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Year Circle for Desktop */}
                <div className="hidden md:block w-2/12 flex justify-center">
                  <div className="w-6 h-6 bg-white border-4 border-orange-500 rounded-full z-10"></div>
                </div>
                
                {/* Spacer */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg md:text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
            終わりがあるから美しい。
          </p>
          <p className="text-base md:text-lg text-gray-600" style={{ fontFamily: 'Noto Sans JP, sans-serif' }}>
            限られた時間の中で、僕たちは何を残せるのか？
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Schedule
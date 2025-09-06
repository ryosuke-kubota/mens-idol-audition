import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="relative py-16 md:py-32 bg-transparent overflow-hidden" ref={ref}>
      
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 bg-white/50 backdrop-blur-sm rounded-2xl md:rounded-3xl py-8 md:py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-10 md:mb-20"
          variants={itemVariants}
        >
          <span className="text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-4 block">
            CONCEPT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            プロに頼らず
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              どこまで成り上がれるか
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Main Content */}
          <motion.div 
            className="space-y-8 text-center"
            variants={itemVariants}
          >
            <div className="space-y-6 md:space-y-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '1.8' }}>
                MEN'S IDOL SCHOOLは、革新的な男性アイドル育成番組です。<br />
                テーマは「プロに頼らず、どこまで成り上がれるか？」<br />
                2年限定ユニット。終わりがあるから美しい。
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '1.8' }}>
                従来のオーディション番組とは異なり、プロのトレーナーや審査員による評価は一切ありません。<br />
                歌もダンスも衣装もメイクも、すべて候補生自身の力と工夫で挑戦！<br />
                審査員は視聴者！画面の向こうの"あなた"が未来のアイドルを決めます。
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '1.8' }}>
                毎週発表される課題曲は、ジャニーズ、K-pop、LDHなど幅広いジャンル。<br />
                当たりチームは王道アイドル曲、ハズレチームは予想外の楽曲に挑戦し、<br />
                どうアレンジして"アイドルらしさ"を出すかが勝負！
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '1.8' }}>
                衣装は1チーム3万円支給。ユニクロ・ルミネなどで購入し、自分たちでアレンジ。<br />
                メイクは候補生同士で施し合う。アイドル力と美意識が試されます。<br />
                プロの評価ではなく、ファンの支持こそがアイドルに必要な力であることを体現。
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '1.8' }}>
                募集期間：2025年春開始予定<br />
                放送予定：2025年夏〜秋
              </p>
            </div>
          </motion.div>

          {/* Right Content - Success Stories */}
          {/* <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            {[
              { name: 'JO1', desc: 'First generation group from PRODUCE 101 JAPAN', color: 'from-blue-500 to-cyan-500' },
              { name: 'INI', desc: 'Second generation group from Season 2', color: 'from-purple-500 to-pink-500' },
              { name: 'ME:I', desc: 'Girl group from PRODUCE 101 JAPAN THE GIRLS', color: 'from-pink-500 to-rose-500' }
            ].map((group, index) => (
              <motion.div
                key={group.name}
                className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${group.color}`} />
                <div className="pl-6">
                  <h3 className="text-3xl font-black text-gray-900 mb-2">{group.name}</h3>
                  <p className="text-gray-600">{group.desc}</p>
                </div>
                <motion.div
                  className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  )
}

export default About
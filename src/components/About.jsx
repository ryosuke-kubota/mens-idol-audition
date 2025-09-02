import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" className="relative py-32 bg-transparent overflow-hidden" ref={ref}>
      
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 bg-white/50 backdrop-blur-sm rounded-3xl py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">
            ABOUT
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
            CREATE YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              FUTURE
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
            <div className="space-y-8">
              <p className="text-2xl text-gray-700 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '2' }}>
                PRODUCE 101 JAPANは、日本最大級のサバイバルオーディション番組で
                2019年SEASON1を皮切りに
                2021年にSEASON2、2023年にTHE GIRLSと、3シリーズが制作され
                日本国内にオーディションブームを巻き起こしました。
              </p>
              <p className="text-xl text-gray-600 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '2' }}>
                番組オーディションに参加した101人の練習生から、
                100%視聴者の投票によってデビューメンバーが決まり、
                日本のトップアーティスト JO1、INI、ME:Iが誕生しました。
              </p>
              <p className="text-xl text-gray-600 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '2' }}>
                PRODUCE 101 JAPANの第4弾、「PRODUCE 101 JAPAN 新世界」では
                史上初！国籍と出身地を問わず全世界から応募が可能で、
                さらにグローバル配信、全世界のファン投票も初めて実施されるなど、
                番組の規模を日本国内から世界へ広げていきます。
              </p>
              <p className="text-xl text-gray-600 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '2' }}>
                全世界が一つとなってプロデュースする初の日本発グローバルボーイズグループの誕生！
                新世界の扉を開く世界中にいる練習生の挑戦と
                この旅路を共にする国境を越えたプロデューサー（視聴者）の皆様をお待ちしております。
              </p>
              <p className="text-xl text-gray-600 font-bold" style={{ fontFamily: 'Noto Sans JP, sans-serif', lineHeight: '2' }}>
                応募期間:2025年7月17日 〜 2025年9月4日
                放送時期:2026年上半期（予定）
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
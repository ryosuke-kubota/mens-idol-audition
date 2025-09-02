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
    <section id="about" className="relative py-32 bg-white overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30" />
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6"
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
            ABOUT US
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
            CREATE YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              FUTURE
            </span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Men's Idol Audition is Japan's most prestigious platform for discovering and developing the next generation of male entertainment stars.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Out of 101 trainees dreaming of debut, the final debut group is determined solely by 100% viewer votes. Through this program, Japan's top-tier idol groups have been born.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Auditions</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-black text-purple-600 mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Debuts</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-black text-pink-600 mb-2">1M+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Fans</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Success Stories */}
          <motion.div 
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
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          variants={itemVariants}
        >
          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">DISCOVER MORE</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
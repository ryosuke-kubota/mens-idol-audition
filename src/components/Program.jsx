import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Program = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const programs = [
    {
      title: "Survival Audition",
      description: "101 trainees compete through various challenges and performances",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "100% Viewer Decision",
      description: "Final group formation determined completely by audience voting",
      icon: "🗳️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Professional Training",
      description: "Intensive coaching in vocals, dance, and performance skills",
      icon: "🎤",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Global Platform",
      description: "Creating opportunities for international talent and audiences",
      icon: "🌍",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="program" className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-600 font-bold text-sm tracking-widest uppercase mb-4 block">
            OUR PROGRAM
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
            HOW IT
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              WORKS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the journey from audition to stardom through our revolutionary program
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative bg-white rounded-3xl p-8 shadow-xl overflow-hidden h-full"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {program.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${program.color} rounded-full opacity-10`}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">
            The Journey to Stardom
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
            
            {/* Timeline Items */}
            {[
              { phase: "Application", desc: "Submit your dream", time: "Month 1" },
              { phase: "Audition", desc: "Show your talent", time: "Month 2" },
              { phase: "Training", desc: "Develop your skills", time: "Month 3-5" },
              { phase: "Live Shows", desc: "Perform for millions", time: "Month 6-8" },
              { phase: "Debut", desc: "Begin your journey", time: "Month 9" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    className="bg-white p-6 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm text-purple-600 font-bold">{item.time}</span>
                    <h4 className="text-xl font-bold text-gray-900 mt-2">{item.phase}</h4>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full z-10"
                  whileHover={{ scale: 1.5 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Program
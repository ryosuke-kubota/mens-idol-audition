import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 text-center">
      <motion.div 
        className="text-gray-600 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        © {currentYear} PRODUCE 101 JAPAN. All Rights Reserved.
      </motion.div>
    </footer>
  )
}

export default Footer
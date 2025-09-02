import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROGRAM', href: '#program' },
    { label: 'PEOPLE', href: '#people' },
    { label: 'NEWS', href: '#news' },
    { label: 'ENTRY', href: '#entry', highlight: true }
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a href="/" className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                MEN'S IDOL
                <span className="text-sm font-normal ml-2 opacity-60">2025</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`relative font-medium tracking-wider text-sm transition-all duration-300 ${
                    item.highlight
                      ? `px-6 py-2 ${scrolled ? 'bg-blue-600 text-white' : 'bg-white text-black'} hover:scale-105`
                      : scrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {!item.highlight && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-current origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative w-8 h-8 flex flex-col justify-center items-center ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <motion.span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <motion.span
                className={`block w-6 h-0.5 bg-current my-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <motion.span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-black/80"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              className="absolute right-0 top-0 h-full w-80 bg-white p-8 pt-24"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`block py-4 text-2xl font-bold transition-colors duration-300 ${
                    item.highlight
                      ? 'text-blue-600'
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
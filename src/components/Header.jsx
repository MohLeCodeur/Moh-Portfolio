import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darker/98 shadow-2xl' : 'bg-darker/95'
      } backdrop-blur-xl border-b border-white/10 py-2`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#accueil"
          whileHover={{ scale: 1.05 }}
          className="flex items-center -my-2 z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src="/mohagency.png" 
            alt="MohAgency Logo" 
            className="h-16 md:h-24 w-auto object-contain"
          />
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1, y: -2 }}
              className="font-medium text-white hover:text-gradient-static transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block btn-primary"
        >
          🚀 Démarrer maintenant
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white glass p-3 rounded-xl z-50 relative hover:bg-primary/20 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-gradient-to-br from-darker via-dark to-darker z-40 flex items-center justify-center"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 mesh-bg opacity-30"></div>
            
            <nav className="relative z-10 flex flex-col items-center justify-center space-y-6 px-8 w-full">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white text-2xl font-bold hover:text-gradient transition-all relative group w-full text-center py-3"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-xl -z-10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-center text-lg px-8 py-4 mt-4 w-full max-w-xs"
              >
                🚀 Démarrer maintenant
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

import React, { useState, useEffect } from 'react'
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
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
      } backdrop-blur-xl border-b border-gray-200 py-2`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#accueil"
          className="flex items-center -my-2 z-50 hover:opacity-90 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src="/mohagencyblack.png" 
            alt="MohAgency Logo" 
            className="h-16 md:h-24 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-medium text-gray-700 hover:text-primary transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block btn-primary"
        >
          Démarrer maintenant
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 bg-gray-100 p-3 rounded-lg z-[60] relative hover:bg-gray-200 transition-all active:scale-90"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

      {/* Mobile Menu - Slide from Right */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-[55] animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="md:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-white border-l border-gray-200 z-[60] shadow-2xl animate-slide-in-right">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <span className="text-gray-900 font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-col p-4 space-y-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 text-base font-medium py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all border-l-2 border-transparent hover:border-primary"
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary text-center text-sm px-6 py-3 w-full block"
                  >
                    Démarrer
                  </a>
                </div>
              </nav>
              
              {/* Footer - Social Links (optional) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
                <p className="text-gray-500 text-xs text-center">
                  © 2025 MohAgency
                </p>
              </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header

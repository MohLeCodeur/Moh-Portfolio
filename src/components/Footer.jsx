import React, { useState, useEffect } from 'react'
import { ArrowUp, Linkedin, Youtube, Github } from 'lucide-react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { name: 'Sites Vitrines', href: '#services' },
      { name: 'E-commerce', href: '#services' },
      { name: 'Intégration IA', href: '#services' },
      { name: 'Branding', href: '#services' }
    ],
    company: [
      { name: 'À propos', href: '#apropos' },
      { name: 'Réalisations', href: '#realisations' },
      { name: 'Contact', href: '#contact' }
    ]
  }

  const socialMedia = [
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/mohlecodeur' },
    { name: 'YouTube', icon: <Youtube size={20} />, href: 'https://youtube.com/@mohlecodeur' },
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/mohlecodeur' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-2">
                <img 
                  src="/mohagency.png" 
                  alt="MohAgency Logo" 
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Votre partenaire digital pour créer des expériences web exceptionnelles. 
                Innovation, créativité et performance au service de votre réussite.
              </p>
              <div className="flex gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-105 transition-all"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base font-bold mb-4 font-heading">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-base font-bold mb-4 font-heading">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 MohAgency. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-gray-500 text-sm">Made with ❤️ by MohAgency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all z-50 animate-fade-in"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </footer>
  )
}

export default Footer

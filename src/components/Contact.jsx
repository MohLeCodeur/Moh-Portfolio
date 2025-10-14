import React, { useState, useRef } from 'react'
import { Mail, Phone, Send, CheckCircle, Linkedin, Youtube, Github } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'mohlecodeur@gmail.com',
      link: 'mailto:mohlecodeur@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'WhatsApp',
      value: '+223 89 76 73 99',
      link: 'https://wa.me/22389767399'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      link: 'https://linkedin.com/in/mohlecodeur',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={24} />,
      link: 'https://youtube.com/@mohlecodeur',
      color: 'hover:bg-red-600'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      link: 'https://github.com/mohlecodeur',
      color: 'hover:bg-gray-700'
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block bg-primary/10 border-2 border-primary/30 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-white">
            📧 Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 font-heading">
            Discutons de votre{' '}
            <span className="text-gradient">projet</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-6 max-w-3xl mx-auto">
            Prêt à donner vie à votre projet ? Contactez-nous dès maintenant
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors placeholder-gray-500"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors placeholder-gray-500"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors placeholder-gray-500"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors resize-none placeholder-gray-500"
                  placeholder="Parlez-nous de votre projet..."
                />
              </div>

              {isSubmitted && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="text-green-500" size={24} />
                  <p className="text-green-700 font-semibold">
                    Message envoyé avec succès ! Nous vous répondrons rapidement.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer mon message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border-2 border-blue-100 hover:border-primary hover:scale-105 hover:translate-x-2 transition-all"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark font-heading">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-heading">
                Suivez-nous
              </h3>
              <p className="mb-6 opacity-90">
                Restez connecté avec nous sur les réseaux sociaux
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl ${social.color} hover:bg-opacity-100 hover:scale-110 hover:rotate-6 transition-all`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark mb-3 font-heading">
                Besoin d'un devis rapide ?
              </h3>
              <p className="text-gray-600 mb-4">
                Obtenez une estimation gratuite en moins de 24h
              </p>
              <a
                href="#contact"
                className="btn-secondary inline-block"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

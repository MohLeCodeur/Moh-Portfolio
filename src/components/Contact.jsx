import React, { useState, useRef } from 'react'
import { Mail, Phone, Send, CheckCircle, Linkedin, Youtube, Github, MessageCircle } from 'lucide-react'

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
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      title: 'WhatsApp',
      value: '+223 89 76 73 99',
      link: 'https://wa.me/22389767399'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      link: 'https://www.linkedin.com/in/mohamed-coulibaly-tec/',
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
    <section id="contact" ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block bg-blue-50 border-2 border-blue-200 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-primary">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 font-heading">
            Discutons de votre{' '}
            <span className="text-gradient">projet</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Prêt à donner vie à votre projet ? Contactez-nous dès maintenant
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder-gray-400"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder-gray-400"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder-gray-400"
                  placeholder="+00 00 00 00 00"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none placeholder-gray-400"
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
                  className="flex items-center gap-4 p-5 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-heading">{info.title}</h4>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-3 font-heading">
                Suivez-nous
              </h3>
              <p className="mb-5 text-blue-50 text-sm">
                Restez connecté avec nous sur les réseaux sociaux
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white hover:text-primary hover:scale-110 transition-all"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                Besoin d'un devis rapide ?
              </h3>
              <p className="text-gray-600 mb-5 text-sm">
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

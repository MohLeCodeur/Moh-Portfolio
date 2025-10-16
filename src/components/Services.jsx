import React, { useRef } from 'react'
import { Globe, Bot, Palette, TrendingUp, Code, Zap } from 'lucide-react'

const Services = () => {
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

  const services = [
    {
      icon: <Globe size={40} />,
      title: 'Sites Vitrines & E-commerce',
      description: 'Création de sites web modernes, responsive et optimisés pour convertir vos visiteurs en clients.',
      features: ['Design sur mesure', 'Responsive mobile', 'Optimisation SEO', 'Paiement sécurisé']
    },
    {
      icon: <Bot size={40} />,
      title: 'Intégration Intelligence Artificielle',
      description: 'Chatbots intelligents, automatisations et assistants IA pour améliorer l\'expérience utilisateur.',
      features: ['Chatbots IA', 'Automatisation', 'Analyse prédictive', 'Support 24/7']
    },
    {
      icon: <Palette size={40} />,
      title: 'Branding & Design UI/UX',
      description: 'Création d\'identités visuelles uniques et design d\'interfaces utilisateur exceptionnelles.',
      features: ['Logo & Identité', 'UI/UX Design', 'Prototypage', 'Design System']
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'SEO & Stratégie Digitale',
      description: 'Référencement naturel, stratégie de contenu et optimisation pour maximiser votre visibilité.',
      features: ['Audit SEO', 'Stratégie contenu', 'Analytics', 'Growth hacking']
    },
    {
      icon: <Code size={40} />,
      title: 'Développement Sur Mesure',
      description: 'Applications web personnalisées et solutions techniques adaptées à vos besoins spécifiques.',
      features: ['Web Apps', 'API & Backend', 'Intégrations', 'Maintenance']
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance & Optimisation',
      description: 'Amélioration des performances, vitesse de chargement et expérience utilisateur optimale.',
      features: ['Speed optimization', 'Core Web Vitals', 'Monitoring', 'Sécurité']
    }
  ]

  // Animations simplifiées

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block bg-blue-50 border-2 border-blue-200 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-primary">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 font-heading">
            Des solutions complètes pour votre{' '}
            <span className="text-gradient">réussite digitale</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            De la conception à la mise en ligne, nous vous accompagnons à chaque étape de votre projet digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card group relative overflow-hidden transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading group-hover:text-gradient-static transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <a href="#contact" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center text-sm">
                    En savoir plus
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-lg text-gray-700 mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Parlons de votre projet
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

import React, { useRef } from 'react'
import { Rocket, Briefcase, Search, Bot, ArrowRight } from 'lucide-react'

const About = () => {
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

  const features = [
    {
      icon: <Rocket size={32} />,
      title: 'Créativité & Innovation',
      description: 'Des solutions uniques et créatives pour vous démarquer'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Expertise technique',
      description: 'Une équipe expérimentée maîtrisant les dernières technologies'
    },
    {
      icon: <Search size={32} />,
      title: 'SEO & Performance',
      description: 'Optimisation pour les moteurs de recherche et performances maximales'
    },
    {
      icon: <Bot size={32} />,
      title: 'Intégration IA',
      description: "Intelligence artificielle au service de votre business"
    }
  ]

  // Animations simplifiées

  return (
    <section id="apropos" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-40"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block bg-blue-50 border-2 border-blue-200 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-primary">
            À propos de nous
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-6 font-heading">
            Une agence digitale tournée vers{' '}
            <span className="text-gradient block mt-2">L'AVENIR</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-gradient-static">MohAgency</span> aide les entreprises à transformer leur présence en ligne. 
            Notre mission : concevoir des sites <span className="text-gray-900 font-semibold">professionnels</span>, <span className="text-primary font-semibold">performants</span> et connectés à l'<span className="text-primary font-semibold">intelligence artificielle</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card group cursor-pointer relative overflow-hidden transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading group-hover:text-gradient-static transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 relative overflow-hidden rounded-2xl p-12 text-center bg-gradient-to-br from-primary to-accent shadow-xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">
              Prêt à transformer votre vision en réalité ?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-blue-50">
              Rejoignez les entreprises qui nous font confiance pour leur <span className="text-white font-semibold">domination digitale</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-white text-primary px-10 py-4 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>Commencer mon projet</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

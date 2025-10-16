import React, { useState, useRef, useEffect } from 'react'
import { X, ExternalLink } from 'lucide-react'

const Portfolio = () => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
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

  // Bloquer le scroll quand la modal est ouverte
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const projects = [
    {
      id: 1,
      title: 'E-commerce Afrique – Paiement Mobile',
      category: 'E-commerce',
      description: "Site e-commerce moderne permettant l'achat en ligne avec paiement sécurisé, adapté au marché africain. Accepte Mobile Money (via Moneroo), Stripe et cartes bancaires. Développé avec WordPress et WooCommerce pour une gestion simplifiée.",
      image: 'img/ecom.png',
      tags: ['WordPress', 'WooCommerce', 'Mobile Money', 'Moneroo', 'Stripe'],
      color: 'from-purple-500 to-pink-500',
      url: 'https://www.academyafrique.com/'
    },
    {
      id: 2,
      title: 'Gestionnaire de Relations',
      category: 'Application',
      description:
        "Gérez vos relations personnelles et professionnelles avec sagesse et intention. Ajoutez vos amis ou proches, notez chaque interaction, fixez-vous des objectifs relationnels inspirés du livre 'Comment se faire des amis' de Dale Carnegie, et suivez vos progrès pour des relations épanouies. Application moderne, rapide et sécurisée, développée avec Node.js, Supabase et React.js.",
      image: 'img/relation.png',
      tags: ['React.js', 'Node.js', 'Supabase'],
      color: 'from-blue-500 to-cyan-500',
      url: 'https://relation.mohlecodeur.com/'
    },
    {
      id: 3,
      title: 'Mybus – Réservation & Tracking Bus',
      category: 'Application',
      description:
        "Mybus est une application innovante permettant de réserver et d’acheter vos billets de voyage en toute simplicité, de suivre votre bus et vos colis en temps réel, et de gérer vos déplacements en toute sérénité. Plateforme moderne, rapide et sécurisée, conçue avec React.js, Node.js, MongoDB Atlas, Render et Vercel.",
      image: 'img/mybus.png',
      tags: ['React.js', 'Node.js', 'MongoDB Atlas', 'Render', 'Vercel'],
      color: 'from-green-500 to-emerald-500',
      url: 'https://www.codeurmali.com/'
    },
    {
      id: 4,
      title: 'Portfolio Créatif',
      category: 'Portfolio',
      description: 'Portfolio interactif pour artiste avec galerie immersive et animations 3D',
      image: 'img/portfolio.png',
      tags: ['Three.js', 'React', 'GSAP'],
      color: 'from-orange-500 to-red-500',
      url: 'https://artisan.mohlecodeur.com/'
    },
    {
      id: 5,
      title: 'Restaurant Digital',
      category: 'E-commerce',
      description: 'Site de restaurant avec commande en ligne et système de réservation intelligent',
      image: 'img/restau.png',
      tags: ['Vue.js', 'Firebase', 'Stripe'],
      color: 'from-yellow-500 to-orange-500',
      url: 'https://restau.mohlecodeur.com'
    },
    {
      id: 6,
      title: 'Agence Immobilière',
      category: 'Vitrine',
      description: 'Plateforme immobilière avec recherche avancée et visite virtuelle 360°',
      image: 'img/immo.png',
      tags: ['WordPress', 'Elementor', 'SEO'],
      color: 'from-indigo-500 to-purple-500',
      url: 'https://www.immobiliere-royal-invest.com'
    }
  ]

  // Animations simplifiées

  return (
    <section id="realisations" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block bg-blue-50 border-2 border-blue-200 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-primary">
            Nos Réalisations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 font-heading">
            Des projets qui{' '}
            <span className="text-gradient">inspirent</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets récents et laissez-vous inspirer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-300 hover:-translate-y-1 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <div className="bg-white rounded-lg p-3">
                      <ExternalLink className="text-primary" size={20} />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-primary px-3 py-1.5 rounded-md font-medium border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            {/* Bouton de fermeture en haut à droite */}
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 z-[110] bg-white hover:bg-gray-100 rounded-lg p-3 shadow-xl transition-all duration-300 hover:scale-110"
            >
              <X size={24} className="text-gray-900" />
            </button>
            <div
              className="bg-white rounded-2xl max-w-4xl w-full my-8 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <div className="relative w-full bg-gray-50 flex items-center justify-center min-h-[280px] max-h-[320px] overflow-hidden border-b border-gray-200">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-auto h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Contenu */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-primary px-4 py-2 rounded-md font-semibold text-sm border border-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Voir le site
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="btn-secondary"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio

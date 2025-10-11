import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)

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
      title: 'E-commerce Luxe',
      category: 'E-commerce',
      description: 'Boutique en ligne haut de gamme avec intégration IA pour recommandations personnalisées',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'IA', 'Stripe'],
      color: 'from-purple-500 to-pink-500',
      url: '#'
    },
    {
      id: 2,
      title: 'Site Vitrine Tech',
      category: 'Vitrine',
      description: 'Site corporate moderne pour startup technologique avec animations avancées',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500',
      url: '#'
    },
    {
      id: 3,
      title: 'Plateforme SaaS',
      category: 'Application',
      description: 'Application web avec dashboard analytique et chatbot IA intégré',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'Python', 'OpenAI', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-500',
      url: '#'
    },
    {
      id: 4,
      title: 'Portfolio Créatif',
      category: 'Portfolio',
      description: 'Portfolio interactif pour artiste avec galerie immersive et animations 3D',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Three.js', 'React', 'GSAP'],
      color: 'from-orange-500 to-red-500',
      url: '#'
    },
    {
      id: 5,
      title: 'Restaurant Digital',
      category: 'E-commerce',
      description: 'Site de restaurant avec commande en ligne et système de réservation intelligent',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Firebase', 'Stripe'],
      color: 'from-yellow-500 to-orange-500',
      url: '#'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="realisations" ref={ref} className="py-20 bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary/10 border-2 border-primary/30 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-white"
          >
            🎨 Nos Réalisations
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 font-heading">
            Des projets qui{' '}
            <span className="text-gradient">inspirent</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-6 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets récents et laissez-vous inspirer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white rounded-full p-4"
                    >
                      <ExternalLink className="text-primary" size={24} />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-dark mt-2 mb-3 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              {/* Bouton de fermeture en haut à droite */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSelectedProject(null)}
                className="fixed top-6 right-6 z-[110] bg-white hover:bg-gray-100 rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={28} className="text-dark" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl max-w-5xl w-full my-8 overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center min-h-[300px] max-h-[350px] overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-auto h-full max-w-full object-contain"
                  />
                </div>

                {/* Contenu */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4 font-heading">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-blue-50 to-primary/10 text-primary px-5 py-2.5 rounded-full font-semibold text-sm border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Voir le site
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(null)}
                      className="btn-secondary"
                    >
                      Fermer
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio

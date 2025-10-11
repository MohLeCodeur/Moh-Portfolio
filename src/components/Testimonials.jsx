import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: 'Amadou Diallo',
      role: 'CEO, AfriTech Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'MohAgency a transformé notre présence en ligne. Le site e-commerce qu\'ils ont créé a augmenté nos ventes de 300% en 6 mois. Leur expertise en IA nous a permis d\'offrir une expérience client exceptionnelle.'
    },
    {
      id: 2,
      name: 'Fatima Ndiaye',
      role: 'Fondatrice, SenegalMarket',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Une équipe professionnelle et créative. Ils ont compris notre vision et l\'ont dépassée. Le design est moderne, les performances excellentes et le SEO impeccable. Je recommande à 100%!'
    },
    {
      id: 3,
      name: 'Sophie Martin',
      role: 'Directrice Marketing, InnoVision',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Collaboration exceptionnelle du début à la fin. MohAgency a su intégrer des fonctionnalités IA avancées qui ont révolutionné notre service client. Un investissement qui en valait vraiment la peine.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-darker relative overflow-hidden">
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
            💬 Témoignages
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 font-heading">
            Ce que disent nos{' '}
            <span className="text-gradient">clients</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-6 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus grande fierté
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card relative bg-darker/60"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary opacity-10">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h4 className="font-bold text-white font-heading text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-heading">50+</div>
            <p className="text-gray-600 mt-2">Projets réalisés</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-heading">100%</div>
            <p className="text-gray-600 mt-2">Clients satisfaits</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-heading">5★</div>
            <p className="text-gray-600 mt-2">Note moyenne</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary font-heading">24/7</div>
            <p className="text-gray-600 mt-2">Support client</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

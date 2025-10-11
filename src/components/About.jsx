import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Briefcase, Search, Bot, ArrowRight } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="apropos" ref={ref} className="py-20 bg-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      
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
            ✨ À propos de nous
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 font-heading">
            Une agence digitale tournée vers{' '}
            <span className="text-gradient block mt-2">L'AVENIR</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-gradient-static">MohAgency</span> aide les entreprises à transformer leur présence en ligne. 
            Notre mission : concevoir des sites <span className="text-white font-semibold">professionnels</span>, <span className="text-secondary font-semibold">performants</span> et connectés à l'<span className="text-accent font-semibold">intelligence artificielle</span>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/70"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-gradient-static transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 relative overflow-hidden rounded-3xl p-12 text-white text-center glass glow-effect border-2 border-primary/30"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 animate-gradient-x"></div>
          <div className="absolute inset-0 mesh-bg opacity-30"></div>
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block text-6xl mb-4"
            >
              🚀
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Prêt à <span className="text-gradient">transformer</span> votre vision en réalité ?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Rejoignez les entreprises qui nous font confiance pour leur <span className="text-white font-semibold">domination digitale</span>
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-dark px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-white/30 transition-all"
            >
              <span>⚡ Commencer mon projet</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

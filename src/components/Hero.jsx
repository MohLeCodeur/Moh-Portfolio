import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react'

const Hero = () => {
  const particles = Array.from({ length: 15 }) // Réduit de 50 à 15
  const floatingElements = Array.from({ length: 4 }) // Réduit de 8 à 4

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darker pt-20">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 mesh-bg opacity-60"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 119, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 119, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              background: index % 3 === 0 ? '#0077FF' : index % 3 === 1 ? '#00D9FF' : '#FF3D71',
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: [Math.random() * 0.5 + 0.2, Math.random() * 0.8 + 0.3, Math.random() * 0.5 + 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 15, // Plus lent = moins de calculs
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear" // Linear est plus performant
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-10"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 25 + 20, // Plus lent
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {index % 4 === 0 ? '⚡' : index % 4 === 1 ? '🚀' : index % 4 === 2 ? '💎' : '✨'}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
           

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white font-heading"
            >
              Votre succès commence par un{' '}
              <span className="text-gradient">site web exceptionnel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed"
            >
              Chez <span className="font-bold text-gradient-static">MohAgency</span>, nous créons des expériences digitales modernes, intelligentes et rentables. Propulsées par l'IA pour maximiser vos résultats.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center space-x-2 group"
              >
                <Zap size={20} className="animate-pulse" />
                <span>Démarrer mon projet</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <Star size={18} />
                <span>Voir nos services</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { value: '50+', label: 'Projets' },
                { value: '100%', label: 'Satisfaits' },
                { value: '24/7', label: 'Support' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="glass p-3 rounded-xl border border-primary/20"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-static font-heading">{stat.value}</h3>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main Screen */}
              <div className="relative glass rounded-3xl shadow-2xl p-2 glow-effect border-2 border-primary/30">
                <div className="bg-gradient-to-br from-darker to-dark rounded-2xl overflow-hidden">
                  {/* Browser Bar */}
                  <div className="bg-dark/80 backdrop-blur-xl px-4 py-3 flex items-center space-x-2 border-b border-white/10">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded px-3 py-1 text-xs text-gray-400 flex items-center">
                      <span className="text-green-400 mr-2">🔒</span>
                      mohlecodeur.com
                    </div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="p-8 space-y-4 bg-gradient-to-br from-dark/50 to-darker/50">
                    <motion.div 
                      animate={{ width: ['0%', '75%'] }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-4 bg-gradient-to-r from-primary via-secondary to-primary rounded animate-gradient-x"
                    ></motion.div>
                    <motion.div 
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 2, delay: 1.2 }}
                      className="h-3 bg-white/10 rounded"
                    ></motion.div>
                    <motion.div 
                      animate={{ width: ['0%', '85%'] }}
                      transition={{ duration: 2, delay: 1.4 }}
                      className="h-3 bg-white/10 rounded"
                    ></motion.div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/30 glow-effect"
                      ></motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl border border-secondary/30 glow-effect"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 glass p-4 rounded-2xl glow-effect border border-green-500/30"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg shadow-green-500/50">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Projet livré</p>
                    <p className="text-xs text-green-400">En avance ⚡</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-8 -left-8 glass p-4 rounded-2xl glow-effect border border-primary/30"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl shadow-lg shadow-primary/50 animate-pulse">
                    🤖
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">IA intégrée</p>
                    <p className="text-xs text-secondary">Innovation 💎</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional Floating Badge */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-1/2 -right-12 glass p-3 rounded-xl glow-effect border border-accent/30"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🚀</div>
                  <p className="text-xs font-bold text-white">+300%</p>
                  <p className="text-xs text-accent">ROI</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

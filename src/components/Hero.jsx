import React from 'react'
import { ArrowRight, Zap, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darker pt-20">
      {/* Static Mesh Background */}
      <div className="absolute inset-0 mesh-bg opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white font-heading">
              Votre succès commence par un{' '}
              <span className="text-gradient">site web exceptionnel</span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Chez <span className="font-bold text-gradient-static">MohAgency</span>, nous créons des expériences digitales modernes, intelligentes et rentables. Propulsées par l'IA pour maximiser vos résultats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center space-x-2 group"
              >
                <Zap size={20} />
                <span>Démarrer mon projet</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <Star size={18} />
                <span>Voir nos services</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: '50+', label: 'Projets' },
                { value: '100%', label: 'Satisfaits' },
                { value: '24/7', label: 'Support' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="glass p-3 rounded-xl border border-primary/20 hover:scale-105 hover:-translate-y-1 transition-transform"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-static font-heading">{stat.value}</h3>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Mockup */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20"></div>
              
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
                    <div className="h-4 bg-gradient-to-r from-primary via-secondary to-primary rounded w-3/4"></div>
                    <div className="h-3 bg-white/10 rounded w-full"></div>
                    <div className="h-3 bg-white/10 rounded w-5/6"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/30"></div>
                      <div className="h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl border border-secondary/30"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 glass p-4 rounded-2xl border border-green-500/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg shadow-green-500/50">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Projet livré</p>
                    <p className="text-xs text-green-400">En avance ⚡</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 glass p-4 rounded-2xl border border-primary/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl shadow-lg shadow-primary/50">
                    🤖
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">IA intégrée</p>
                    <p className="text-xs text-secondary">Innovation 💎</p>
                  </div>
                </div>
              </div>

              {/* Additional Floating Badge */}
              <div className="absolute top-1/2 -right-12 glass p-3 rounded-xl border border-accent/30">
                <div className="text-center">
                  <div className="text-2xl mb-1">🚀</div>
                  <p className="text-xs font-bold text-white">+300%</p>
                  <p className="text-xs text-accent">ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center animate-bounce">
          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero

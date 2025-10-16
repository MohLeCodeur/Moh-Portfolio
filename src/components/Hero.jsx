import React from 'react'
import { ArrowRight, Zap, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
      {/* Static Mesh Background */}
      <div className="absolute inset-0 mesh-bg opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 font-heading">
              Votre succès commence par un{' '}
              <span className="text-gradient">site web exceptionnel</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Chez <span className="font-bold text-gradient-static">MohAgency</span>, nous créons des expériences digitales modernes, intelligentes et rentables. Propulsées par l'IA pour maximiser vos résultats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center space-x-2 group"
              >
                <span>Démarrer mon projet</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
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
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-static font-heading">{stat.value}</h3>
                  <p className="text-gray-600 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-10"></div>
              
              {/* Hero Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/hero-mockup.png" 
                  alt="Professional web design mockup"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl border border-green-200 shadow-lg animate-fade-in">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-lg shadow-md">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Projet livré</p>
                    <p className="text-xs text-green-600">En avance</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-8 bg-white p-4 rounded-xl border border-blue-200 shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl shadow-md">
                    🤖
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">IA intégrée</p>
                    <p className="text-xs text-blue-600">Innovation</p>
                  </div>
                </div>
              </div>

             
             
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-bounce">
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Hero

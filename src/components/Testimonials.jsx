import React, { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
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

  // Animations simplifiées

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block bg-blue-50 border-2 border-blue-200 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-primary">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 font-heading">
            Ce que disent nos{' '}
            <span className="text-gradient">clients</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus grande fierté
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card relative transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary opacity-5">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-5 relative z-10 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900 font-heading text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-static font-heading">50+</div>
            <p className="text-gray-600 mt-2 text-sm">Projets réalisés</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-static font-heading">100%</div>
            <p className="text-gray-600 mt-2 text-sm">Clients satisfaits</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-static font-heading">5★</div>
            <p className="text-gray-600 mt-2 text-sm">Note moyenne</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-static font-heading">24/7</div>
            <p className="text-gray-600 mt-2 text-sm">Support client</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

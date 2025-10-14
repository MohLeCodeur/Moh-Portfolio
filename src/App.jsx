import React, { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy loading optimisé - chaque composant se charge indépendamment
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loader léger pour les composants lazy
const LazyLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Suspense fallback={<LazyLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LazyLoader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App

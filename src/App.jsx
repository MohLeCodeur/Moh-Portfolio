import React, { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Loader from './components/Loader'

// Lazy loading des composants non critiques
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App

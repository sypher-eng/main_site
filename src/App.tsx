import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import Partners from './components/Partners'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudies from './pages/CaseStudies'

function getPage() {
  return window.location.hash === '#case-studies' ? 'case-studies' : 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHash = () => setPage(getPage())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  // Scroll to top on page change
  useEffect(() => { window.scrollTo(0, 0) }, [page])

  return (
    <div className="relative min-h-screen bg-cyber-dark overflow-x-hidden">
      <div className="noise" aria-hidden="true" />
      <Nav />

      {page === 'case-studies' ? (
        <CaseStudies />
      ) : (
        <>
          <Hero />
          <div className="divider" />
          <Services />
          <div className="divider" />
          <Industries />
          <div className="divider" />
          <Partners />
          <div className="divider" />
          <WhyUs />
          <div className="divider" />
          <Testimonials />
          <div className="divider" />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

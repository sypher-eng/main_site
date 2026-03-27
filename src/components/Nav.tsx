import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const homeLinks = ['Services', 'Industries', 'Partners', 'Why Us', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > lastY && y > 200)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-blur' : ''}`}
      animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <span className="font-display font-800 text-2xl tracking-tight grad">
            Sypher
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {homeLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-[#8F99A8] hover:text-[#00D47E] transition-colors duration-200 tracking-wide"
            >
              {link}
            </a>
          ))}
          <a
            href="#case-studies"
            className="text-sm text-[#8F99A8] hover:text-[#00D47E] transition-colors duration-200 tracking-wide"
          >
            Case Studies
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 btn-primary px-5 py-2.5 text-sm font-medium"
        >
          <span>Get in Touch</span>
          <ArrowRight size={14} />
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-[#8F99A8] hover:text-white transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <motion.span
              className="h-px bg-current block origin-left"
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 0 : 0, scaleX: mobileOpen ? 1.3 : 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="h-px bg-current block"
              animate={{ opacity: mobileOpen ? 0 : 1, x: mobileOpen ? -8 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-px bg-current block origin-left"
              animate={{ rotate: mobileOpen ? -45 : 0, scaleX: mobileOpen ? 1.3 : 1 }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-white/5"
            style={{ background: 'rgba(0,0,0,0.98)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {homeLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`/#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-[#ABB3BF] hover:text-white transition-colors py-1"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#case-studies"
                className="text-[#ABB3BF] hover:text-white transition-colors py-1"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: homeLinks.length * 0.06 }}
                onClick={() => setMobileOpen(false)}
              >
                Case Studies
              </motion.a>
              <a
                href="#contact"
                className="btn-primary px-6 py-3 text-sm font-medium text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

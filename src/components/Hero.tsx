import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  size: number; opacity: number
}

const PHRASES = [
  'Transforming Civic Technology.',
  'Accelerating Startup Growth.',
  'Modernizing Enterprise Systems.',
  'Delivering Data Intelligence.',
]

/* ── Canvas particle network ─────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let w = 0, h = 0
    let particles: Particle[] = []

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const N = Math.min(120, Math.floor((w * h) / 9000))
    particles = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2.2 + 1,
      opacity: Math.random() * 0.55 + 0.2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Mouse repulsion
      particles.forEach((p) => {
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          p.vx += (dx / dist) * 0.04
          p.vy += (dy / dist) * 0.04
        }

        // Dampen & move
        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy

        // Wrap
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        // Draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,126,${p.opacity})`
        ctx.fill()
      })

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 170) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,212,126,${(1 - d / 170) * 0.28})`
            ctx.lineWidth = 1.0
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      raf.current = requestAnimationFrame(draw)
    }

    draw()

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMouse)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  )
}

/* ── Typewriter ───────────────────────────────────────────── */
function Typewriter() {
  const [display, setDisplay] = useState('')
  const phraseIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const tick = () => {
      const phrase = PHRASES[phraseIdx.current]
      if (!deleting.current) {
        setDisplay(phrase.slice(0, charIdx.current + 1))
        charIdx.current++
        if (charIdx.current === phrase.length) {
          deleting.current = true
          timer.current = setTimeout(tick, 2200)
          return
        }
      } else {
        setDisplay(phrase.slice(0, charIdx.current - 1))
        charIdx.current--
        if (charIdx.current === 0) {
          deleting.current = false
          phraseIdx.current = (phraseIdx.current + 1) % PHRASES.length
        }
      }
      timer.current = setTimeout(tick, deleting.current ? 45 : 72)
    }
    timer.current = setTimeout(tick, 800)
    return () => clearTimeout(timer.current)
  }, [])

  return (
    <span>
      {display}<span className="blink text-[#00D47E]">|</span>
    </span>
  )
}

/* ── Hero ─────────────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Canvas particles */}
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div
        className="orb animate-float-slow"
        style={{
          width: 680, height: 680,
          background: 'radial-gradient(circle, rgba(0,163,92,0.28) 0%, transparent 70%)',
          top: -200, right: -140,
          animationDelay: '0s',
        }}
      />
      <div
        className="orb animate-float-mid"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0,212,126,0.18) 0%, transparent 70%)',
          bottom: -60, left: '5%',
          animationDelay: '-3s',
        }}
      />
      <div
        className="orb animate-float-fast"
        style={{
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(0,80,50,0.35) 0%, transparent 70%)',
          top: '35%', left: '38%',
          animationDelay: '-6s',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(3rem,8vw,6.5rem)] font-800 leading-[0.92] mb-5 tracking-tight"
          >
            <span className="block text-white">Where Vision</span>
            <span className="block grad text-glow">Meets Execution</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            variants={item}
            className="text-xl md:text-2xl font-display font-600 text-[#ABB3BF] mb-5 h-8"
          >
            <Typewriter />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-[#8F99A8] max-w-2xl leading-relaxed mb-10"
          >
            Sypher partners with government agencies, high-growth startups, and Fortune 500 enterprises to architect, advise on, and implement transformative technology solutions — at any scale.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-16">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-medium"
            >
              Start Your Journey
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              Explore Services
            </a>
          </motion.div>

        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 8l5 5 5-5" stroke="#8F99A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import MouseReactiveBg from './MouseReactiveBg'

const REASONS = [
  {
    sym: '◆',
    title: 'Deep Domain Expertise',
    desc: 'Our team has built production systems at Google, AWS, and top-tier federal agencies. We know what "enterprise-grade" actually means.',
  },
  {
    sym: '◈',
    title: 'Full-Spectrum Coverage',
    desc: "From C-suite strategy through production deployment, we're your single partner across the entire technology lifecycle.",
  },
  {
    sym: '◉',
    title: 'Platform-Certified',
    desc: "Our Databricks, AWS, GCP, Azure, and Salesforce certifications aren't branding — they're genuine expertise on the platforms you depend on.",
  },
  {
    sym: '◎',
    title: 'Sector-Specific Playbooks',
    desc: "We've built proven methodologies for government, startup, and enterprise contexts — not recycled generic frameworks.",
  },
  {
    sym: '◐',
    title: 'Outcomes, Not Outputs',
    desc: 'We measure success by business impact, not hours billed. Your ROI is the only KPI that matters to us.',
  },
  {
    sym: '◑',
    title: 'Speed Without Compromise',
    desc: 'Startup velocity with enterprise rigor. We move fast and build things that last decades, not months.',
  },
]

const STATS = [
  { value: 50, suffix: '+', label: 'Clients Served' },
  { value: 98, suffix: '%', label: 'Retention Rate' },
  { value: 100, suffix: 'M+', label: 'Value Delivered', prefix: '$' },
  { value: 5, suffix: '', label: 'Platform Partners' },
]

/* ── Counter animation ───────────────────────────────────── */
function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1600
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10,11,13,0.6) 50%, transparent 100%)' }}>
      <MouseReactiveBg spacing={44} glowRadius={190} />
      {/* Background orbs */}
      <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,163,92,0.12) 0%, transparent 70%)', bottom: '0%', left: '-5%', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-px bg-[#00D47E]" />
              <span className="text-[#00D47E] text-xs font-medium tracking-widest uppercase">Why Sypher</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-800 text-white leading-tight mb-5">
              Not Just Consultants.<br />
              <span className="grad">Partners.</span>
            </h2>
            <p className="text-[#8F99A8] text-lg leading-relaxed mb-8">
              We don't hand over a slide deck and walk away. We embed, we build, we deliver — and we stay until it works. That's the Sypher commitment.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="stat-num text-3xl grad mb-1">
                    <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                  </div>
                  <div className="text-xs text-[#8F99A8]">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-medium"
            >
              Partner With Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Right grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
          >
            {REASONS.map((r, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="glass rounded-xl p-5 group"
                whileHover={{ y: -3, borderColor: 'rgba(0,212,126,0.25)' }}
              >
                <div className="text-xl text-[#00D47E] mb-2.5 font-display">{r.sym}</div>
                <h3 className="font-display text-sm font-700 text-white mb-1.5">{r.title}</h3>
                <p className="text-xs text-[#8F99A8] leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

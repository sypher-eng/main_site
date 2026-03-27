import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import MouseReactiveBg from './MouseReactiveBg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

interface Service {
  icon: ReactNode
  title: string
  description: string
  tags: string[]
  accent: string
}

const SERVICES: Service[] = [
  {
    icon: <StrategyIcon />,
    title: 'Strategic Consulting',
    description:
      'Navigate complex technology landscapes with confidence. We assess your current state, define your target architecture, and build a roadmap that aligns every technology investment with business outcomes — before a single line of code is written.',
    tags: ['Digital Strategy', 'Architecture Review', 'Technology Roadmaps', 'Innovation Labs'],
    accent: '#00A35C',
  },
  {
    icon: <AdvisoryIcon />,
    title: 'Executive Advisory',
    description:
      'Access seasoned technology leaders who have built and scaled platforms inside Fortune 500 companies and top federal agencies. Our advisors embed with your leadership team to provide ongoing strategic guidance that moves the needle.',
    tags: ['CTO-as-a-Service', 'Board Advisory', 'Risk & Compliance', 'Vendor Selection'],
    accent: '#00D47E',
  },
  {
    icon: <ImplementIcon />,
    title: 'Full-Stack Implementation',
    description:
      'From data lakehouse platforms to AI/ML pipelines, cloud migrations to custom enterprise software — we ship. Our certified engineers design, build, deploy, and operate production-grade systems built to scale with your organization.',
    tags: ['Data Intelligence', 'Cloud Migration', 'AI/ML Platforms', 'Data Engineering', 'DevSecOps'],
    accent: '#00A35C',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <MouseReactiveBg />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Label>What We Do</Label>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-800 text-white leading-tight mb-5 mt-3">
            Services Built for<br />
            <span className="grad">Complex Challenges</span>
          </h2>
          <p className="text-[#8F99A8] text-lg leading-relaxed max-w-2xl">
            Whether you're modernizing legacy infrastructure, building a data platform, or accelerating digital transformation — we bring the expertise and execution horsepower to get it done right.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={card}
              className="glass rounded-2xl p-8 relative overflow-hidden group cursor-default"
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${s.accent}18` }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Scan line on hover */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="scan-line" />
              </div>

              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${s.accent}50, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 border"
                style={{
                  background: `${s.accent}10`,
                  borderColor: `${s.accent}20`,
                  color: s.accent,
                }}
              >
                {s.icon}
              </div>

              <h3 className="font-display text-xl font-700 text-white mb-3">{s.title}</h3>
              <p className="text-[#8F99A8] leading-relaxed mb-6 text-sm">{s.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Label ───────────────────────────────────────────────── */
export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-6 h-px bg-[#00D47E]" />
      <span className="text-[#00D47E] text-xs font-medium tracking-widest uppercase">{children}</span>
    </div>
  )
}

/* ── Icons ───────────────────────────────────────────────── */
function StrategyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )
}
function AdvisoryIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
function ImplementIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

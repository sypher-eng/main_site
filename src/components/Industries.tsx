import { motion } from 'framer-motion'
import { Label } from './Services'
import MouseReactiveBg from './MouseReactiveBg'

const INDUSTRIES = [
  {
    emoji: '🏛️',
    title: 'Government & Public Sector',
    description:
      'We understand FedRAMP, FISMA, and the unique operational demands of serving citizens at scale. Our team has supported federal, state, and local agencies through data modernization, cloud migration, and digital service delivery.',
    highlights: [
      'FedRAMP & FISMA Compliance',
      'Digital Service Delivery',
      'Legacy System Modernization',
      'Zero Trust Architecture',
      'Citizen-Facing Application Development',
    ],
    color: '#00A35C',
  },
  {
    emoji: '🚀',
    title: 'Startups & Scale-ups',
    description:
      'Move fast without breaking the foundation. We help high-growth companies make the right architectural decisions early — from Series A infrastructure to IPO-ready data platforms — so scale never catches you off guard.',
    highlights: [
      'MVP to Production Architecture',
      'Technical Due Diligence',
      'Data Platform Build-Out',
      'Cloud Cost Optimization',
      'Engineering Team Augmentation',
    ],
    color: '#00D47E',
  },
  {
    emoji: '🏢',
    title: 'Enterprise & Private Sector',
    description:
      'Complex organizations need sophisticated solutions. We bring Fortune 500-grade expertise to digital transformation programs, AI/ML initiatives, and cloud strategies that meaningfully move the business forward.',
    highlights: [
      'Enterprise Digital Transformation',
      'AI/ML Integration at Scale',
      'M&A Technology Integration',
      'Multi-Cloud Strategy',
      'Executive Leadership Advisory',
    ],
    color: '#00A35C',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="relative py-32 overflow-hidden">
      <MouseReactiveBg spacing={44} />
      {/* bg glow */}
      <div
        className="orb"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0,163,92,0.1) 0%, transparent 70%)',
          top: '10%', right: '-10%',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="w-6 h-px bg-[#00D47E]" />
            <span className="text-[#00D47E] text-xs font-medium tracking-widest uppercase">Who We Serve</span>
            <div className="w-6 h-px bg-[#00D47E]" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-800 text-white leading-tight mb-5">
            Serving the <span className="grad">Full Spectrum</span>
          </h2>
          <p className="text-[#8F99A8] text-lg leading-relaxed">
            From classified government agencies to venture-backed startups, we've built playbooks for every context.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-8 group relative overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${ind.color}15, transparent 70%)`,
                }}
              />

              <div className="text-5xl mb-5">{ind.emoji}</div>
              <h3 className="font-display text-xl font-700 text-white mb-3">{ind.title}</h3>
              <p className="text-[#8F99A8] text-sm leading-relaxed mb-6">{ind.description}</p>

              <ul className="space-y-2.5">
                {ind.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-[#ABB3BF]">
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      style={{ color: ind.color, flexShrink: 0 }}
                    >
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

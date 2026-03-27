import { motion } from 'framer-motion'
import MouseReactiveBg from './MouseReactiveBg'

const TESTIMONIALS = [
  {
    quote:
      "Sypher didn't just deliver the data platform — they transformed how our entire organization thinks about data. The results were immediate: 40% reduction in reporting cycle time and real-time visibility we never had before.",
    name: 'Amara J.',
    title: 'Chief Data Officer',
    org: 'Federal Agency · Washington D.C.',
    gradient: 'from-[#00A35C] to-[#00D47E]',
  },
  {
    quote:
      'We were preparing for Series B and needed our infrastructure to match our ambitions. Sypher helped us build a production-grade, Databricks-powered data foundation in 90 days — the kind of foundation that supports 10× growth without breaking.',
    name: 'Daniel R.',
    title: 'Chief Technology Officer',
    org: 'FinTech Startup · New York',
    gradient: 'from-[#00D47E] to-[#00A35C]',
  },
  {
    quote:
      "The Salesforce + AWS integration Sypher architected became the backbone of our operations. Their certified expertise and hands-on delivery style saved us six months of trial and error and kept our launch on schedule.",
    name: 'Priya M.',
    title: 'VP of Engineering',
    org: 'Fortune 500 Retailer',
    gradient: 'from-[#00A35C] to-[#00D47E]',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <MouseReactiveBg spacing={48} glowRadius={180} />
      {/* Center glow */}
      <div
        className="orb"
        style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(0,163,92,0.12) 0%, transparent 70%)',
          top: '-100px', left: '50%', transform: 'translateX(-50%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="w-6 h-px bg-[#00D47E]" />
            <span className="text-[#00D47E] text-xs font-medium tracking-widest uppercase">Client Stories</span>
            <div className="w-6 h-px bg-[#00D47E]" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-800 text-white">
            Trusted by <span className="grad">Leaders</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-8 flex flex-col relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: '0 20px 60px rgba(0,163,92,0.1)' }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,126,0.25)] to-transparent" />

              {/* Quote mark */}
              <div className="text-6xl font-serif text-[#00D47E] opacity-15 leading-none mb-3 select-none">"</div>

              <p className="text-[#ABB3BF] leading-relaxed mb-8 flex-1 italic text-sm">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-display font-700 text-sm flex-shrink-0`}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-[#ABB3BF] text-xs mt-0.5">{t.title}</div>
                  <div className="text-[#8F99A8] text-xs mt-0.5">{t.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            ['Cleared Personnel', 'Security-vetted staff'],
            ['NDA-Protected', 'All engagements'],
            ['24/7 Support', 'For critical projects'],
            ['ISO-Aligned', 'Delivery methodology'],
          ].map(([title, sub]) => (
            <div key={title} className="text-center">
              <div className="text-white font-display font-600 text-sm mb-0.5">{title}</div>
              <div className="text-[#8F99A8] text-xs">{sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

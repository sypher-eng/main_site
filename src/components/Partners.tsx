import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { DatabricksLogo, SalesforceLogo, MicrosoftLogo, AWSLogo, GoogleCloudLogo } from './PartnerLogos'
import MouseReactiveBg from './MouseReactiveBg'

/* ─────────────────────────────────────────────────────────── */

interface Partner {
  name: string
  badge: string
  logo: ReactNode
}

const PARTNERS: Partner[] = [
  { name: 'Databricks', badge: 'Certified Partner', logo: <DatabricksLogo /> },
  { name: 'Salesforce', badge: 'Certified Partner', logo: <SalesforceLogo /> },
  { name: 'Microsoft',  badge: 'Solutions Partner', logo: <MicrosoftLogo /> },
  { name: 'AWS',        badge: 'Advanced Partner',  logo: <AWSLogo /> },
  { name: 'Google',     badge: 'Cloud Partner',     logo: <GoogleCloudLogo /> },
]

const TRACK = [...PARTNERS, ...PARTNERS]

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(10,11,13,0.5) 50%, transparent 100%)' }}
    >
      <MouseReactiveBg spacing={50} glowRadius={170} />
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <div className="w-6 h-px bg-[#00D47E]" />
            <span className="text-[#00D47E] text-xs font-medium tracking-widest uppercase">Official Partnerships</span>
            <div className="w-6 h-px bg-[#00D47E]" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-800 text-white mb-4">
            Backed by the <span className="grad">World's Best</span>
          </h2>
          <p className="text-[#8F99A8] text-lg max-w-xl mx-auto leading-relaxed">
            Certified partnerships across the leading platforms powering the modern enterprise.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(90deg, #000000, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(270deg, #000000, transparent)' }} />

        <div className="marquee-track">
          {TRACK.map((partner, i) => (
            <div
              key={i}
              className="inline-flex flex-col items-center justify-center gap-3 mx-5 px-8 py-5 rounded-xl border border-white/5 bg-white/[0.02] min-w-[200px] hover:border-[rgba(0,212,126,0.15)] hover:bg-[rgba(0,212,126,0.03)] transition-all duration-300 cursor-default flex-shrink-0"
            >
              <div className="flex items-center justify-center min-h-[34px]">
                {partner.logo}
              </div>
              <span className="text-[10px] text-[#8F99A8] tracking-wide">{partner.badge}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.p
        className="text-center text-xs text-[#252E38] mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        5 Major Platform Partnerships · 20+ Active Certifications · Partner Since 2020
      </motion.p>
    </section>
  )
}

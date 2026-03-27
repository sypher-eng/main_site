import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MouseReactiveBg from './MouseReactiveBg'

const SECTORS = ['Government / Public Sector', 'Startup / Scale-up', 'Enterprise / Private Sector', 'Non-Profit / Education', 'Other']
const SERVICES = ['Strategic Consulting', 'Executive Advisory', 'Implementation / Engineering', 'AI/ML & Data Platform', 'Cloud Migration', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', sector: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <MouseReactiveBg spacing={42} glowRadius={220} />
      {/* bg */}
      <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(0,163,92,0.1) 0%, transparent 70%)', bottom: '-100px', right: '-5%', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-px bg-[#00D47E]" />
              <span className="text-[#00D47E] text-xs font-medium tracking-widest uppercase">Get In Touch</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-800 text-white leading-tight mb-5">
              Ready to<br /><span className="grad">Transform?</span>
            </h2>
            <p className="text-[#8F99A8] text-lg leading-relaxed mb-10">
              Tell us about your challenge. Whether you're a government agency modernizing legacy systems or a startup building your first data platform, we'd love to hear from you.
            </p>

            <div className="space-y-5">
              {[
                { icon: <PinIcon />, label: 'Location', value: 'Washington D.C. Metropolitan Area' },
                { icon: <MailIcon />, label: 'Email', value: 'contact@sypherconsulting.com' },
                { icon: <GlobeIcon />, label: 'Engagements', value: 'Nationwide · Remote-ready' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,126,0.08)] border border-[rgba(0,212,126,0.12)] flex items-center justify-center text-[#00D47E] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#8F99A8] mb-0.5">{item.label}</div>
                    <div className="text-[#ABB3BF] text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,212,126,0.15)] bg-[rgba(0,212,126,0.04)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D47E] animate-pulse" />
              <span className="text-xs text-[#ABB3BF]">Typical response within <span className="text-[#00D47E]">4 business hours</span></span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="glass rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,126,0.3)] to-transparent" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="py-16 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-[rgba(0,212,126,0.1)] border border-[rgba(0,212,126,0.2)] flex items-center justify-center mx-auto mb-5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00D47E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display text-2xl font-700 text-white mb-2">Message Received</h3>
                  <p className="text-[#8F99A8]">We'll be in touch within 4 business hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Full Name" required>
                      <input className="field" placeholder="Alex Johnson" value={form.name} onChange={(e) => set('name', e.target.value)} required />
                    </Field>
                    <Field label="Work Email" required>
                      <input className="field" type="email" placeholder="alex@org.gov" value={form.email} onChange={(e) => set('email', e.target.value)} required />
                    </Field>
                  </div>

                  <Field label="Organization">
                    <input className="field" placeholder="Your agency or company" value={form.org} onChange={(e) => set('org', e.target.value)} />
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Sector">
                      <select className="field" value={form.sector} onChange={(e) => set('sector', e.target.value)}>
                        <option value="">Select sector</option>
                        {SECTORS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Service Interest">
                      <select className="field" value={form.service} onChange={(e) => set('service', e.target.value)}>
                        <option value="">Select service</option>
                        {SERVICES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>

                  <Field label="Tell us about your challenge" required>
                    <textarea
                      className="field resize-none"
                      rows={4}
                      placeholder="Describe your current situation and what outcome you're looking for..."
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      required
                    />
                  </Field>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-base font-medium flex items-center justify-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-[#252E38] text-center leading-relaxed">
                    By submitting this form you agree to our Privacy Policy. We never share your information.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs text-[#8F99A8] mb-1.5">
        {label}{required && <span className="text-[#00D47E] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

function PinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
}
function MailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
}
function GlobeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
}

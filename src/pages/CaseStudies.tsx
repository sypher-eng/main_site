import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { SalesforceLogo, MicrosoftLogo, AWSLogo, GoogleCloudLogo } from '../components/PartnerLogos'
import MouseReactiveBg from '../components/MouseReactiveBg'

/* ── Data ───────────────────────────────────────────────── */
interface Metric { value: string; label: string }
interface CaseStudy {
  partner: string
  partnerIcon: ReactNode
  partnerColor: string
  industry: string
  title: string
  context: string
  challenge: string
  approach: string
  outcomes: string[]
  metrics: Metric[]
  quote: string
  quoteName: string
  quoteTitle: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    partner: 'Salesforce',
    partnerIcon: <SalesforceLogo />,
    partnerColor: '#00A1E0',
    industry: 'Financial Services',
    title: 'Rebuilding Revenue Operations for a National Insurance Carrier',
    context: 'A national property and casualty insurance carrier with $3.2B in annual premium was running its entire sales and service operation across six disconnected CRM instances — the result of three acquisitions over seven years. Customer data existed in silos, agents had no unified view, and cross-sell rates had stagnated for four consecutive years.',
    challenge: 'The carrier\'s Chief Revenue Officer had a clear mandate: consolidate the commercial lines business onto a single platform, enable proactive service, and unlock cross-sell revenue from an existing book of 1.4 million commercial policyholders. The transformation had to run without disrupting an active renewal cycle — any degradation in agent experience during peak season carried millions in premium risk.',
    approach: 'Sypher deployed Salesforce Financial Services Cloud as the carrier\'s unified revenue operating system. We designed a Customer 360 data model that ingested policy, claims, and billing records in real time, built a custom agent workspace consolidating 11 previously separate screens into a single view, and implemented Einstein-powered next-best-action recommendations surfacing cross-sell opportunities at renewal touchpoints. Migration was executed in rolling waves by business unit to protect the renewal calendar.',
    outcomes: [
      '34% increase in agent-initiated cross-sell conversations within 90 days of go-live',
      'Average handle time per policy service call reduced by 22%',
      'Net Promoter Score for commercial lines improved 18 points in the first year',
      '$47M in incremental cross-sell premium identified in the first 12 months',
      'Six legacy CRM instances decommissioned, reducing technology spend by $3.1M annually',
    ],
    metrics: [
      { value: '$47M', label: 'Incremental premium identified' },
      { value: '+18pts', label: 'NPS improvement' },
      { value: '34%', label: 'Cross-sell lift' },
    ],
    quote: 'Sypher understood something most implementers miss — this wasn\'t a technology project, it was a revenue project. They kept that framing throughout and delivered outcomes the board could see in the financials.',
    quoteName: 'Renata O.',
    quoteTitle: 'Chief Revenue Officer',
  },
  {
    partner: 'Microsoft',
    partnerIcon: <MicrosoftLogo />,
    partnerColor: '#00A4EF',
    industry: 'State Government',
    title: 'Modernizing a State Government\'s Infrastructure and Achieving Zero-Trust Compliance',
    context: 'A state government agency responsible for workforce and benefits administration was running critical citizen-facing services on on-premise infrastructure that was, in places, 17 years old. Three consecutive annual audits had flagged the architecture as a material cybersecurity risk, and the state legislature had authorized emergency capital to address it — with an 18-month window before the authorization lapsed.',
    challenge: 'The agency served 2.3 million residents who depended on uninterrupted access to benefits processing. Any migration strategy had to guarantee continuity — a single day of downtime could delay benefit payments for tens of thousands of residents. Simultaneously, the new architecture had to satisfy CJIS, HIPAA, and the state\'s own emerging zero-trust security policy, which had not yet been applied to cloud workloads.',
    approach: 'Sypher architected a lift-and-modernize migration to Azure Government Cloud, beginning with non-citizen-facing workloads to establish operational confidence before touching production benefits systems. We implemented Microsoft Entra ID for identity and zero-trust access, deployed Microsoft Sentinel for unified security operations, and migrated 340 applications across 18 months using a blue-green deployment model that maintained full parallel operation until each workload was validated. The engagement closed with a FedRAMP Moderate authorization and CJIS compliance attestation.',
    outcomes: [
      'Zero unplanned downtime during 18-month migration — all SLAs maintained',
      'FedRAMP Moderate authorization achieved 6 weeks ahead of legislative deadline',
      '340 applications migrated; 87 legacy applications decommissioned outright',
      '$6.8M in annual infrastructure and licensing cost eliminated',
      'Mean time to detect security incidents reduced from 72 hours to 4 hours via Microsoft Sentinel',
    ],
    metrics: [
      { value: '0', label: 'Days of unplanned downtime' },
      { value: '$6.8M', label: 'Annual cost eliminated' },
      { value: '340', label: 'Applications migrated' },
    ],
    quote: 'We had tried this migration twice before with other partners and failed both times. Sypher\'s phased approach and their willingness to own the risk model with us made the difference. We hit every milestone.',
    quoteName: 'Jerome W.',
    quoteTitle: 'State Chief Information Officer',
  },
  {
    partner: 'AWS',
    partnerIcon: <AWSLogo />,
    partnerColor: '#FF9900',
    industry: 'Venture-Backed Startup',
    title: 'Building IPO-Ready Infrastructure for a High-Growth Payments Platform',
    context: 'A Series C payments infrastructure company processing $2B in annualized transaction volume had built its first-generation architecture for speed of iteration, not scale. With a Series D raise on the horizon and an IPO thesis centered on reliability and enterprise readiness, the board identified infrastructure technical debt as the single largest risk to the company\'s valuation narrative.',
    challenge: 'The platform needed to scale from 8,000 to 200,000 transactions per second without a rearchitecture that would freeze product development for two quarters. It needed to achieve SOC 2 Type II and PCI DSS Level 1 compliance — requirements of every enterprise customer in their pipeline — and it needed to do all of this while the engineering team continued shipping product at startup velocity.',
    approach: 'Sypher ran a concurrent two-track engagement: a compliance and controls track establishing the audit trail, encryption, and access governance required for SOC 2 and PCI, and an architecture track rebuilding the transaction processing layer on AWS — event-driven, serverless at the edge, with auto-scaling EKS clusters for core processing. We implemented AWS Organizations to separate compliance boundaries, deployed GuardDuty and Security Hub for continuous monitoring, and designed a multi-region active-active configuration targeting five-nines availability. The core re-architecture shipped in 14 weeks.',
    outcomes: [
      'SOC 2 Type II and PCI DSS Level 1 certifications obtained within 5 months',
      'Platform scaled to 200,000 TPS — 25× headroom above current peak load',
      '99.998% uptime achieved in the 12 months following go-live',
      'Infrastructure unit cost per transaction reduced by 61%',
      'Three enterprise contracts totaling $28M ARR closed directly citing the compliance certifications',
    ],
    metrics: [
      { value: '25×', label: 'Scale headroom built' },
      { value: '61%', label: 'Cost per transaction reduction' },
      { value: '$28M', label: 'ARR unlocked by compliance' },
    ],
    quote: 'Sypher\'s team moved at the same pace we did, which almost never happens with outside firms. They understood that for a startup, speed is risk management — and they delivered both.',
    quoteName: 'Yuki A.',
    quoteTitle: 'Chief Technology Officer',
  },
  {
    partner: 'Google Cloud',
    partnerIcon: <GoogleCloudLogo />,
    partnerColor: '#4285F4',
    industry: 'Retail Enterprise',
    title: 'Activating AI-Driven Demand Intelligence Across a $9B Retail Enterprise',
    context: 'A national specialty retailer operating 1,400 stores and a rapidly growing e-commerce channel was making inventory allocation decisions using rule-based models built in 2014. Despite investing in data warehousing, the analytics organization had no predictive capability — every forecast was backward-looking, and the business was absorbing $90M+ annually in markdowns and lost sales from inventory imbalance.',
    challenge: 'The retailer\'s Chief Merchant and CFO had co-sponsored a data intelligence initiative with a hard success criterion: reduce markdown spend by $20M in the first year or the program would be discontinued. The timeline was 9 months from kickoff to the peak holiday season, which represented 38% of annual revenue and the true test of any demand forecasting capability.',
    approach: 'Sypher built a demand intelligence platform on Google Cloud anchored by BigQuery for unified data — integrating POS, e-commerce, loyalty, third-party weather, and macroeconomic signals — and Vertex AI for model training and deployment. We developed SKU-level demand forecasting models at a 90-day horizon, a store-cluster allocation engine, and a markdown optimization model that calculated the precise discount depth and timing to maximize margin recovery. A Looker-based executive dashboard gave the merchant team daily visibility into forecast accuracy, inventory health, and optimization recommendations. The platform was in production 8 months after kickoff.',
    outcomes: [
      '$31M in markdown reduction achieved in the first peak season — 55% above the target',
      'Forecast accuracy at 90-day horizon improved from 61% to 88%',
      'In-stock rate on top 500 SKUs improved from 91% to 97.4% during peak',
      '$12M in incremental revenue attributed to improved in-stock performance',
      'Inventory carrying cost reduced by 14% through tighter replenishment cycles',
    ],
    metrics: [
      { value: '$31M', label: 'Markdown savings, year one' },
      { value: '88%', label: 'Forecast accuracy at 90 days' },
      { value: '$43M', label: 'Total P&L impact, year one' },
    ],
    quote: 'We set a goal we honestly thought was aggressive. Sypher not only hit it — they exceeded it by more than half. The platform they built has fundamentally changed how our merchants think about their business.',
    quoteName: 'Fatima B.',
    quoteTitle: 'Chief Merchant & EVP',
  },
]

/* ── Subcomponents ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function MetricCard({ value, label }: Metric) {
  return (
    <div className="glass rounded-xl px-6 py-5 text-center">
      <div className="stat-num text-3xl grad mb-1">{value}</div>
      <div className="text-xs text-[#8F99A8] leading-snug">{label}</div>
    </div>
  )
}

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <motion.article
      className="glass rounded-2xl overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: 0.05 }}
    >
      {/* Top accent line in partner color */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${cs.partnerColor}, transparent)` }} />

      <div className="p-8 md:p-10">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div className="flex flex-col gap-3">
            {/* Partner badge */}
            <div
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg border text-sm font-medium w-fit"
              style={{ borderColor: `${cs.partnerColor}30`, background: `${cs.partnerColor}0D`, color: cs.partnerColor }}
            >
              {cs.partnerIcon}
            </div>
            {/* Industry */}
            <span className="tag w-fit">{cs.industry}</span>
          </div>
          {/* Case study number */}
          <span className="text-[#252E38] font-display font-700 text-4xl select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display font-700 text-[clamp(1.3rem,2.5vw,1.75rem)] text-white leading-snug mb-5">
          {cs.title}
        </h2>

        {/* Context */}
        <p className="text-[#ABB3BF] text-sm leading-relaxed mb-8 max-w-3xl">
          {cs.context}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {cs.metrics.map((m) => <MetricCard key={m.label} {...m} />)}
        </div>

        {/* Three-column narrative */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <NarrativeBlock label="The Challenge" color={cs.partnerColor} body={cs.challenge} />
          <NarrativeBlock label="Our Approach" color={cs.partnerColor} body={cs.approach} />
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-px" style={{ background: cs.partnerColor }} />
              <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: cs.partnerColor }}>
                Key Outcomes
              </span>
            </div>
            <ul className="space-y-2.5">
              {cs.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-[#ABB3BF] leading-snug">
                  <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke={cs.partnerColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div
          className="rounded-xl p-6 border"
          style={{ background: `${cs.partnerColor}08`, borderColor: `${cs.partnerColor}20` }}
        >
          <div className="text-4xl font-serif leading-none mb-2" style={{ color: cs.partnerColor, opacity: 0.35 }}>"</div>
          <p className="text-[#C5CBD3] text-sm leading-relaxed italic mb-4">"{cs.quote}"</p>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-display font-700 text-xs flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${cs.partnerColor}99, ${cs.partnerColor}55)` }}
            >
              {cs.quoteName[0]}
            </div>
            <div>
              <div className="text-white text-sm font-medium">{cs.quoteName}</div>
              <div className="text-[#8F99A8] text-xs mt-0.5">{cs.quoteTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function NarrativeBlock({ label, color, body }: { label: string; color: string; body: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-4 h-px" style={{ background: color }} />
        <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color }}>
          {label}
        </span>
      </div>
      <p className="text-[#6A8098] text-sm leading-relaxed">{body}</p>
    </div>
  )
}

/* ── Page ───────────────────────────────────────────────── */
export default function CaseStudies() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <MouseReactiveBg />
        <div
          className="orb"
          style={{
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(0,163,92,0.22) 0%, transparent 70%)',
            top: -200, right: -100,
            filter: 'blur(80px)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Back link */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.history.back() }}
            className="inline-flex items-center gap-2 text-[#8F99A8] hover:text-[#00D47E] transition-colors text-sm mb-10"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-px bg-[#00D47E]" />
              <span className="text-[#00D47E] text-xs font-medium tracking-widest uppercase">Client Work</span>
            </div>
            <h1 className="font-display font-800 text-[clamp(2.8rem,6vw,5rem)] text-white leading-tight mb-5">
              Case Studies
            </h1>
            <p className="text-[#8F99A8] text-lg leading-relaxed max-w-2xl">
              Five engagements across our core platform partnerships — each representing a distinct sector, a measurable outcome, and the full depth of Sypher's delivery model.
            </p>
          </motion.div>

          {/* Partner index pills */}
          <motion.div
            className="flex flex-wrap gap-2 mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {CASE_STUDIES.map((cs, i) => (
              <a
                key={cs.partner}
                href={`#cs-${i}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-medium transition-all hover:opacity-80"
                style={{ borderColor: `${cs.partnerColor}30`, background: `${cs.partnerColor}0D`, color: cs.partnerColor }}
              >
                {cs.partnerIcon}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Case study list */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-8">
        {CASE_STUDIES.map((cs, i) => (
          <div key={cs.partner} id={`cs-${i}`}>
            <CaseStudyCard cs={cs} index={i} />
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center" style={{ background: 'linear-gradient(180deg, transparent, rgba(28,33,39,0.6))' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-700 text-3xl md:text-4xl text-white mb-4">
            Ready to become the next case study?
          </h2>
          <p className="text-[#8F99A8] mb-8 max-w-lg mx-auto">
            Every engagement starts with a conversation. Tell us what you're trying to solve.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-medium"
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </section>
    </div>
  )
}

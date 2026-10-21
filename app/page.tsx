'use client'

import React, { useState } from 'react'
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  LineChart,
  Lock,
  Mail,
  Menu,
  Phone,
  PiggyBank,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Users,
  X,
  Target,
  BadgeCheck,
  ArrowUpRight,
  Coins,
  Building2,
  CalendarDays,
  Sparkles,
  Zap,
  BarChart3,
  Layers,
  Award,
  ChevronRight,
  Percent,
  SlidersHorizontal,
  Compass as CompassIcon,
  Check
} from 'lucide-react'

import FinancialCalculators from '@/components/FinancialCalculators'
import InvestorLoginModal from '@/components/InvestorLoginModal'
import QuickInvestModal from '@/components/QuickInvestModal'
import HeroGrowthChart from '@/components/HeroGrowthChart'
import RealisticWealthTree from '@/components/RealisticWealthTree'
import FlowingMarketGraphBackground from '@/components/FlowingMarketGraphBackground'
import WebsiteGlobalBackgroundAnimation from '@/components/WebsiteGlobalBackgroundAnimation'

const advisoryPillars = [
  {
    number: '01',
    title: 'Discipline Over Market Timing',
    badge: 'Rupee Cost Averaging',
    text: 'Attempting to predict market peaks and dips erodes long-term compounding. We engineer automated monthly SIP structures tailored for steady capital accumulation.',
  },
  {
    number: '02',
    title: 'Goal-Linked Architecture',
    badge: 'Zero Ad-Hoc Buys',
    text: 'Every rupee allocated connects to a real financial milestone — children’s foreign university education, early retirement, or inflation-proof business reserves.',
  },
  {
    number: '03',
    title: 'Non-Correlated Diversification',
    badge: 'Zero Overlaps',
    text: 'Holding 15 duplicate large-cap mutual funds is not diversification. We curate 3 to 5 high-conviction funds across distinct style boxes and asset classes.',
  },
]

const servicesList = [
  {
    icon: LineChart,
    title: 'Systematic Mutual Fund Planning',
    badge: 'Core Wealth',
    description: 'Bespoke equity, balanced advantage, hybrid, and index mutual fund portfolios aligned to your risk temperament.',
    metric: '12-15% Historical Expectation',
    tag: 'Long Term',
  },
  {
    icon: FileCheck,
    title: 'Comprehensive Portfolio Health Audit',
    badge: 'Diagnostic Review',
    description: 'Deep forensic scan of your current mutual fund statements. We weed out high TER, overlapping holdings, and chronic underperformers.',
    metric: 'Zero Overlap Objective',
    tag: 'Complimentary',
  },
  {
    icon: PiggyBank,
    title: 'Retirement & Milestone Corpus Engine',
    badge: 'Future Independence',
    description: 'Inflation-adjusted cash flow roadmaps ensuring your family lifestyle remains completely preserved post-active career.',
    metric: 'Inflation Indexed',
    tag: 'Target Driven',
  },
  {
    icon: Coins,
    title: 'Tax-Efficient ELSS & Wealth Preservation',
    badge: 'Section 80C + Growth',
    description: 'Optimal tax-saving mutual fund schemes combining mandatory 3-year disciplined holding with compounding equity returns.',
    metric: 'Lowest Lock-in in 80C',
    tag: 'Tax Strategy',
  },
]

const stats = [
  { label: 'AMFI ARN License', value: 'ARN-86236', subtext: 'Registered & Monitored' },
  { label: 'Validity Window', value: 'Valid till 2027', subtext: 'Active SEBI Compliant' },
  { label: 'Advisory Experience', value: '15+ Years', subtext: 'Wealth Structuring' },
  { label: 'Advisory Fee To Client', value: '₹0 Upfront', subtext: 'Transparent Model' },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [investModalOpen, setInvestModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Mutual Fund Distribution')

  // Consultation form state
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formReq, setFormReq] = useState('Mutual Fund Distribution')
  const [formNotes, setFormNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleOpenInvest = (srv?: string) => {
    if (srv) setSelectedService(srv)
    setInvestModalOpen(true)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 500)
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 relative">
      {/* Global Background Animation Across Entire Website */}
      <WebsiteGlobalBackgroundAnimation />
      {/* 1. Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand Signature */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="size-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-black text-sm tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              PFS
            </div>
            <div>
              <div className="text-sm font-black tracking-tight text-slate-900 flex items-center gap-2">
                <span>Prudence Financial Services</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <BadgeCheck className="size-2.5 text-emerald-700" /> ARN-86236
                </span>
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                Sandeep Garg · Mutual Fund Advisory Desk · Ludhiana, Punjab
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#home" className="hover:text-emerald-700 transition">Overview</a>
            <a href="#philosophy" className="hover:text-emerald-700 transition">Philosophy</a>
            <a href="#solutions" className="hover:text-emerald-700 transition">Solutions</a>
            <a href="#calculators" className="hover:text-emerald-700 transition flex items-center gap-1 text-emerald-700 font-bold">
              <Sparkles className="size-3" />
              <span>Calculators</span>
            </a>
            <a href="#compliance" className="hover:text-emerald-700 transition">Compliance</a>
            <a href="#contact" className="hover:text-emerald-700 transition">Contact</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => setLoginModalOpen(true)}
              className="rounded-xl border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <Lock className="size-3 text-slate-500" />
              <span>Client Portal</span>
            </button>
            <button
              onClick={() => handleOpenInvest()}
              className="rounded-xl bg-emerald-700 hover:bg-emerald-800 px-4 py-1.5 text-xs font-bold text-white transition cursor-pointer shadow-xs flex items-center gap-1"
            >
              <span>Start Planning</span>
              <ArrowUpRight className="size-3.5 stroke-[2.5]" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-slate-200 bg-white px-4 py-4 text-xs font-semibold flex flex-col gap-3 shadow-lg">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700">Overview</a>
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700">Philosophy</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700">Solutions</a>
            <a href="#calculators" onClick={() => setMobileMenuOpen(false)} className="py-1 text-emerald-700 font-bold">Calculators & Wealth Modeler</a>
            <a href="#compliance" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700">Regulatory Disclosures</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-1 text-slate-700">Contact Us</a>
            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setLoginModalOpen(true)
                }}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
              >
                Investor Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  handleOpenInvest()
                }}
                className="flex-1 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-bold"
              >
                Start SIP
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* 2. Hero Section: Clean, Crisp Modern Light Bento Grid (NO Moving Banner) */}
      <section id="home" className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 overflow-hidden">
        {/* Continuously Flowing Market Graph & Ambient Tree Flow Aura */}
        <FlowingMarketGraphBackground />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800 mb-3.5 shadow-2xs">
                <span className="size-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>AMFI Registered Mutual Fund Distributor · ARN-86236</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Calm, Disciplined Investing <br />
                <span className="text-emerald-700">
                  For Long-Term Family Security.
                </span>
              </h1>

              <p className="mt-3.5 max-w-xl text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                No market speculation. No hype cycles. We help business owners, families, and salaried professionals in Ludhiana compound capital predictably through verified, non-correlated mutual fund portfolios.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenInvest()}
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Build Your SIP Strategy</span>
                  <ArrowUpRight className="size-4 stroke-[2.5]" />
                </button>

                <a
                  href="#calculators"
                  className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs font-bold hover:bg-slate-50 transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Calculator className="size-3.5 text-emerald-700" />
                  <span>Interactive Wealth Modeler</span>
                </a>

                <a
                  href="#contact"
                  className="text-xs font-semibold text-slate-500 hover:text-emerald-800 underline underline-offset-4 ml-1 transition"
                >
                  Schedule Desk Consultation →
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-7 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-5 text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-600" /> Zero Upfront Advisory Fee
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-600" /> Regulated Regular Mutual Funds
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-600" /> Full Expense Transparency
                </span>
              </div>
            </div>

            {/* Right Photorealistic Compounding Wealth Tree (No Box, Completely Open) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <RealisticWealthTree onStartPlan={() => handleOpenInvest('Systematic Mutual Fund Planning')} />
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs hover:border-emerald-300 transition"
              >
                <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">{s.label}</div>
                <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5">{s.value}</div>
                <div className="text-[10px] text-slate-500">{s.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section: Three Pillars of Prudent Investing */}
      <section id="philosophy" className="py-10 md:py-14 max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
          <span>01</span>
          <span>•</span>
          <span>ADVISORY PHILOSOPHY</span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Three Principles of Prudent Investing
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
              Wealth accumulation is not an adrenaline sport. It is the predictable accumulation of equity assets in companies with rock-solid balance sheets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {advisoryPillars.map((p) => (
            <div
              key={p.number}
              className="p-6 rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-sm hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200">
                    {p.number}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                    {p.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-emerald-700 transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                  {p.text}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                <span>Disciplined Execution</span>
                <ChevronRight className="size-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Solutions Bento Grid */}
      <section id="solutions" className="py-10 md:py-14 bg-slate-100/60 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            <span>02</span>
            <span>•</span>
            <span>STRUCTURED SOLUTIONS</span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Clear Portfolios. Concrete Milestones.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
                Every mutual fund scheme is curated with verified tenure, low tracking error, and proven fund management teams.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicesList.map((srv) => {
              const IconComp = srv.icon
              return (
                <div
                  key={srv.title}
                  className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-5 hover:border-emerald-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="size-10 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <IconComp className="size-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-mono text-emerald-800 mb-2 font-semibold">
                      {srv.metric}
                    </div>
                    <button
                      onClick={() => handleOpenInvest(srv.title)}
                      className="w-full py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Get Plan Details</span>
                      <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Financial Calculators Section (NO marquee banner) */}
      <FinancialCalculators
        onBookConsultation={(detail) => {
          setFormReq(detail.includes('SIP') ? 'Retirement & Milestone SIPs' : 'Portfolio Health Audit')
          setFormNotes(`Inquiry originated from Calculator: ${detail}`)
        }}
      />

      {/* 6. Contact & Consultation Section */}
      <section id="contact" className="py-10 md:py-14 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Desk Information Card */}
          <div className="lg:col-span-5 rounded-3xl border border-emerald-800 bg-gradient-to-br from-emerald-800 to-teal-900 text-white p-6 sm:p-7 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
              DIRECT ADVISORY DESK
            </span>
            <h2 className="mt-1 text-2xl font-black text-white">
              Start with an Objective Review.
            </h2>
            <p className="mt-2 text-xs text-emerald-100 leading-relaxed">
              Visit our Ludhiana office or leave your contact details. We will assess your existing asset allocation with zero upfront consultation fee.
            </p>

            <div className="mt-6 space-y-3.5 text-xs">
              <a
                href="tel:9855534165"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition border border-white/10"
              >
                <div className="size-9 rounded-xl bg-white/15 text-emerald-200 flex items-center justify-center shrink-0">
                  <Phone className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-200 font-medium">Direct Phone / WhatsApp Helpline</div>
                  <div className="font-bold text-white text-sm">9855534165</div>
                </div>
              </a>

              <a
                href="mailto:garg.sandeep0399@gmail.com"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition border border-white/10"
              >
                <div className="size-9 rounded-xl bg-white/15 text-emerald-200 flex items-center justify-center shrink-0">
                  <Mail className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-200 font-medium">Official Email Desk</div>
                  <div className="font-bold text-white text-xs">garg.sandeep0399@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/10 border border-white/10">
                <div className="size-9 rounded-xl bg-white/15 text-emerald-200 flex items-center justify-center shrink-0">
                  <Building2 className="size-4" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-200 font-medium">Ludhiana Office Address</div>
                  <div className="font-semibold text-white text-xs leading-tight">
                    30 Gurunanak Market, Near Upper India Steel Focal Point, Ludhiana, Punjab - 141010
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900">Schedule Private Consultation</h3>
            <p className="text-xs text-slate-500 mt-0.5">Sandeep Garg (AMFI ARN-86236) will review your requirements.</p>

            {submitted ? (
              <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-2">
                <CheckCircle2 className="size-8 mx-auto text-emerald-600 animate-bounce" />
                <h4 className="text-base font-bold text-slate-900">Request Received</h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{formName || 'Valued Investor'}</strong>. We will contact you at <strong>{formPhone || 'your number'}</strong> to discuss your portfolio plan.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-emerald-700 underline cursor-pointer"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Gurpreet Singh"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      required
                      type="tel"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="9855534165"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Primary Financial Objective
                  </label>
                  <select
                    value={formReq}
                    onChange={(e) => setFormReq(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  >
                    <option value="Mutual Fund Distribution">New Mutual Fund Portfolio (SIP / Lumpsum)</option>
                    <option value="Portfolio Health Audit">Existing Portfolio Health Audit & Diagnostic</option>
                    <option value="Retirement & Milestone SIPs">Retirement & Milestone Corpus Planning</option>
                    <option value="Tax Saving ELSS">Section 80C Tax-Saving Mutual Funds</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Notes / Target Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    placeholder="Tell us your target timeline, lumpsum budget, or existing funds..."
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/60 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition cursor-pointer shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Request Priority Callback'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. Mandatory Statutory Risk Disclosures (Styled in Signature Emerald Green Theme) */}
      <section id="compliance" className="max-w-6xl mx-auto px-4 mb-8">
        <div className="rounded-3xl border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-50/50 p-6 sm:p-7 shadow-md">
          <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-xs mb-3">
            <ShieldAlert className="size-4.5 shrink-0 text-emerald-700" />
            <span className="tracking-wide">MANDATORY STATUTORY RISK DISCLOSURES & AMFI COMPLIANCE NOTICE</span>
          </div>

          <div className="space-y-2.5 text-[11px] text-emerald-950/85 leading-relaxed border-b border-emerald-200/80 pb-4 font-normal">
            <p>
              <strong className="text-emerald-900 font-bold">Mutual Fund Risk Notice:</strong> Mutual fund investments are subject to market risks, read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performance of any scheme is not an indicator of future returns. The NAV of the units issued under the Schemes may go up or down depending on the factors and forces affecting the capital markets.
            </p>
            <p>
              <strong className="text-emerald-900 font-bold">Distribution & Trailing Commission Notice:</strong> Prudence Financial Services acts strictly as an AMFI-registered Mutual Fund Distributor (ARN-86236) distributing Regular Plans only. We earn trailing commission directly from the Asset Management Companies (AMCs) as per SEBI regulations. Investors also have the option to invest directly in Direct Plans of Mutual Funds, which have a lower expense ratio as they do not involve distributor commission.
            </p>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-emerald-900 font-medium">
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-950">ARN-86236 (AMFI Certified)</span>
              <span>·</span>
              <span>Reg: 06-May-2024</span>
              <span>·</span>
              <span>Valid till: 03-Aug-2027</span>
            </div>
            <div>
              <span>GST: 03AERPG5988G1Z3</span>
              <span className="mx-2">|</span>
              <span>Ludhiana, Punjab</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="border-t border-slate-200 py-6 bg-white text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Prudence Financial Services. All Rights Reserved.</span>
          <span>ARN-86236 · Sandeep Garg · Ludhiana, Punjab</span>
        </div>
      </footer>

      {/* Interactive Modals */}
      <InvestorLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSwitchToContact={() => {
          const contactEl = document.getElementById('contact')
          contactEl?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <QuickInvestModal
        isOpen={investModalOpen}
        onClose={() => setInvestModalOpen(false)}
        prefillService={selectedService}
        onSubmitSuccess={() => {
          alert('Thank you! Your mutual fund request has been received by Prudence Financial Services.')
        }}
      />
    </main>
  )
}

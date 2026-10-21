'use client'

import React, { useState } from 'react'
import { X, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Clock } from 'lucide-react'

interface QuickInvestModalProps {
  isOpen: boolean
  onClose: () => void
  prefillService?: string
  onSubmitSuccess?: () => void
}

export default function QuickInvestModal({
  isOpen,
  onClose,
  prefillService = 'Mutual Fund Distribution',
  onSubmitSuccess,
}: QuickInvestModalProps) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState(prefillService)
  const [budget, setBudget] = useState('₹5,000 - ₹20,000 / month')
  const [isDone, setIsDone] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsDone(true)
    setTimeout(() => {
      setIsDone(false)
      onClose()
      onSubmitSuccess?.()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-7 shadow-2xl border border-[#bfe8d2] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="grid size-10 place-items-center rounded-xl bg-[#e1f5ec] text-[#234034] border border-[#7ed9a6]">
            <TrendingUp className="size-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#234034]">Start Your Investment Journey</h3>
            <p className="text-[11px] text-slate-500">Prudence Financial Services · AMFI Reg. ARN-86236</p>
          </div>
        </div>

        {isDone ? (
          <div className="py-7 text-center space-y-3">
            <div className="mx-auto grid size-14 place-items-center rounded-full bg-[#e1f5ec] text-[#2e6044] animate-bounce">
              <CheckCircle2 className="size-8" />
            </div>
            <h4 className="text-lg font-bold text-[#234034]">Inquiry Registered!</h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Sandeep Garg and our team will get in touch with you at <strong className="text-slate-900">{mobile || 'your phone'}</strong> to review your mutual fund goals.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Selected Advisory Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#234034] focus:bg-white focus:outline-none"
              >
                <option value="Mutual Fund Distribution">Mutual Fund Distribution & Goal SIPs</option>
                <option value="Portfolio Review">Comprehensive Portfolio Health Check</option>
                <option value="SIP & Goal Planning">Children Higher Education & Marriage Fund</option>
                <option value="Retirement Corpus">Long-Term Retirement Corpus Construction</option>
                <option value="Tax Saving ELSS">Tax Saving 80C Mutual Funds (ELSS)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Planned Monthly SIP / Capital
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#234034] focus:bg-white focus:outline-none"
              >
                <option value="₹2,000 - ₹5,000 / month">₹2,000 - ₹5,000 / month</option>
                <option value="₹5,000 - ₹20,000 / month">₹5,000 - ₹20,000 / month</option>
                <option value="₹20,000 - ₹50,000 / month">₹20,000 - ₹50,000 / month</option>
                <option value="₹50,000+ / month">₹50,000+ / month</option>
                <option value="₹5 Lakhs+ Lumpsum">₹5 Lakhs+ One-Time Lumpsum</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Your Full Name
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jaspreet Singh"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#234034] focus:bg-white focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Mobile (WhatsApp)
                </label>
                <input
                  required
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="9855534165"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#234034] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@gmail.com"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#234034] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-[#234034] py-2.5 px-4 text-xs font-bold text-white hover:bg-[#1a3127] transition shadow-md"
              >
                <span>Request Custom Mutual Fund Plan</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 pt-1 text-[10px] text-slate-500">
              <span className="flex items-center gap-1 text-[#2e6044]">
                <ShieldCheck className="size-3" /> ARN-86236
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" /> Quick Response
              </span>
              <span>•</span>
              <span>Ludhiana, Punjab</span>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

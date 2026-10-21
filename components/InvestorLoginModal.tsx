'use client'

import React, { useState } from 'react'
import { X, Lock, ShieldCheck, ArrowRight, CheckCircle2, User, KeyRound } from 'lucide-react'

interface InvestorLoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToContact?: () => void
}

export default function InvestorLoginModal({ isOpen, onClose, onSwitchToContact }: InvestorLoginModalProps) {
  const [tab, setTab] = useState<'client' | 'partner'>('client')
  const [clientId, setClientId] = useState('')
  const [password, setPassword] = useState('')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatusMessage(null)

    setTimeout(() => {
      setIsLoading(false)
      setStatusMessage('Credentials verified. Redirecting to your secure portfolio statement...')
      setTimeout(() => {
        setStatusMessage(null)
        onClose()
        alert('Welcome to Prudence Financial Services Client Portal. Session active.')
      }, 1500)
    }, 900)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-7 shadow-2xl border border-[#bfe8d2]"
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
            <Lock className="size-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#234034]">Prudence Investor Portal</h3>
            <p className="text-[11px] text-slate-500">256-bit encrypted authentication</p>
          </div>
        </div>

        <div className="flex rounded-lg bg-slate-100 p-1 mb-5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTab('client')}
            className={`flex-1 py-1.5 rounded-md transition ${
              tab === 'client' ? 'bg-[#234034] text-white font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Investor Login
          </button>
          <button
            type="button"
            onClick={() => setTab('partner')}
            className={`flex-1 py-1.5 rounded-md transition ${
              tab === 'partner' ? 'bg-[#234034] text-white font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Partner / NRI Desk
          </button>
        </div>

        {statusMessage ? (
          <div className="rounded-xl bg-[#e1f5ec] border border-[#7ed9a6] p-4 text-center text-[#234034]">
            <CheckCircle2 className="size-7 mx-auto text-[#2e6044] mb-2 animate-bounce" />
            <p className="text-xs font-semibold">{statusMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                {tab === 'client' ? 'PAN / Folio Number / Mobile' : 'Partner ARN / ID'}
              </label>
              <div className="relative">
                <input
                  required
                  type="text"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  placeholder={tab === 'client' ? 'e.g. ABCDE1234F or 9855534165' : 'ARN-86236'}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#234034] focus:bg-white focus:outline-none"
                />
                <User className="absolute right-3 top-3 size-4 text-slate-400" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Password / PIN</label>
                <a
                  href="#contact"
                  onClick={() => {
                    onClose()
                    onSwitchToContact?.()
                  }}
                  className="text-[11px] text-[#2e6044] hover:underline font-medium"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#234034] focus:bg-white focus:outline-none"
                />
                <KeyRound className="absolute right-3 top-3 size-4 text-slate-400" />
              </div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-[#234034] py-2.5 px-4 text-xs font-bold text-white hover:bg-[#1a3127] transition shadow-md disabled:opacity-75"
              >
                {isLoading ? (
                  <span>Verifying...</span>
                ) : (
                  <>
                    <span>Secure Sign In</span>
                    <ArrowRight className="size-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1 text-[#2e6044] font-medium">
            <ShieldCheck className="size-3.5" /> AMFI Reg. ARN-86236
          </span>
          <button
            onClick={() => {
              onClose()
              onSwitchToContact?.()
            }}
            className="text-[#234034] hover:underline font-semibold"
          >
            New Investor? Register
          </button>
        </div>
      </div>
    </div>
  )
}

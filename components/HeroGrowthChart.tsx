'use client'

import React, { useState } from 'react'
import {
  TrendingUp,
  BadgeCheck,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Target,
  GraduationCap,
  Building,
  Coins
} from 'lucide-react'

export default function HeroGrowthChart({ onStartPlan }: { onStartPlan?: () => void }) {
  const [selectedHorizon, setSelectedHorizon] = useState<number>(15)
  const monthlySip = 15000
  const rate = 13 // 13% CAGR

  // Calculate compounding coordinates
  const calculatePoints = (years: number) => {
    const points: { x: number; y: number; year: number; corpus: number }[] = []
    const totalSteps = 6
    const width = 360
    const height = 140

    for (let i = 0; i <= totalSteps; i++) {
      const yr = Math.round((years / totalSteps) * i)
      const n = Math.max(1, yr * 12)
      const r = rate / 100 / 12
      const corpus = yr === 0 ? 0 : monthlySip * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
      const maxPossibleCorpus = monthlySip * ((Math.pow(1 + r, 20 * 12) - 1) / r) * (1 + r)
      
      const x = (i / totalSteps) * width
      const normalizedY = yr === 0 ? 0 : corpus / maxPossibleCorpus
      const y = height - (normalizedY * (height - 20)) - 10
      points.push({ x, y, year: yr, corpus })
    }
    return points
  }

  const points = calculatePoints(selectedHorizon)
  const currentCorpus = points[points.length - 1].corpus
  const investedAmount = monthlySip * selectedHorizon * 12
  const pathD = points.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`
  }, '')
  const areaD = `${pathD} L ${points[points.length - 1].x} 150 L 0 150 Z`

  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakh`
    return '₹' + Math.round(val).toLocaleString('en-IN')
  }

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm relative overflow-hidden group">
      {/* Subtle background glow */}
      <div className="absolute -top-12 -right-12 size-40 bg-emerald-100/60 rounded-full blur-2xl pointer-events-none" />

      {/* Card Header with Live Badge */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 relative z-10">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center size-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-emerald-600" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
            Live Compounding Simulator
          </span>
        </div>
        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          @ 13% Est. CAGR
        </span>
      </div>

      {/* Main Metric Display */}
      <div className="mt-4 flex items-baseline justify-between relative z-10">
        <div>
          <div className="text-[11px] font-medium text-slate-500">
            Projected Corpus for ₹15,000 / mo
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5 font-mono text-emerald-950">
            {formatINR(currentCorpus)}
          </div>
        </div>

        <div className="text-right">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
            <TrendingUp className="size-3" />
            +{Math.round(((currentCorpus - investedAmount) / investedAmount) * 100)}% Gain
          </span>
          <div className="text-[10px] text-slate-400 mt-1">Invested: {formatINR(investedAmount)}</div>
        </div>
      </div>

      {/* Animated SVG Compounding Curve */}
      <div className="mt-4 relative z-10 bg-gradient-to-b from-slate-50/80 to-white rounded-2xl p-3 border border-slate-100">
        <svg viewBox="0 0 360 150" className="w-full h-28 overflow-visible">
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <path d={areaD} fill="url(#curveGradient)" />

          {/* Curve Stroke */}
          <path
            d={pathD}
            fill="none"
            stroke="#059669"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />

          {/* Interactive Milestone Indicator Pins */}
          {points.map((p, idx) => {
            if (idx === 0) return null
            const isLast = idx === points.length - 1
            return (
              <g key={`point-${idx}-${p.year}`} className="transition-all duration-300">
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isLast ? 5 : 3.5}
                  className={`${isLast ? 'fill-emerald-600 stroke-white stroke-2' : 'fill-slate-400'}`}
                />
              </g>
            )
          })}
        </svg>

        {/* Milestone Floating Tags */}
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500 pt-1.5 border-t border-slate-100">
          <span className="flex items-center gap-1">
            <Coins className="size-3 text-emerald-600" /> Start (Yr 0)
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap className="size-3 text-emerald-600" /> Child Edu (Yr {Math.round(selectedHorizon / 2)})
          </span>
          <span className="flex items-center gap-1 font-bold text-emerald-800">
            <Building className="size-3 text-emerald-600" /> Freedom (Yr {selectedHorizon})
          </span>
        </div>
      </div>

      {/* Interactive Time Horizon Switcher */}
      <div className="mt-4 flex items-center justify-between gap-2 relative z-10">
        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
          Horizon:
        </span>
        <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold">
          {[5, 10, 15, 20].map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedHorizon(yr)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedHorizon === yr
                  ? 'bg-white text-emerald-900 shadow-2xs border border-slate-200'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {yr}Y
            </button>
          ))}
        </div>
      </div>

      {/* Mini Advisory Credential Bar */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <BadgeCheck className="size-3.5 text-emerald-600" />
          <span>ARN-86236 · Sandeep Garg</span>
        </div>
        <button
          onClick={onStartPlan}
          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-0.5 cursor-pointer hover:underline"
        >
          <span>Start This SIP</span>
          <ArrowUpRight className="size-3.5" />
        </button>
      </div>
    </div>
  )
}

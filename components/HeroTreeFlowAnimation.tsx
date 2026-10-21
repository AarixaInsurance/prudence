'use client'

import React from 'react'
import {
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  ArrowUpRight,
  Leaf,
  Coins
} from 'lucide-react'

export default function HeroTreeFlowAnimation({ onStartPlan }: { onStartPlan?: () => void }) {
  return (
    <div className="relative w-full h-[410px] rounded-3xl overflow-hidden border border-emerald-200/90 bg-gradient-to-b from-white via-emerald-50/40 to-teal-50/60 shadow-md flex items-center justify-center p-6 group">
      {/* 1. Animated Financial Matrix Grid */}
      <div
        className="absolute inset-0 opacity-40 animate-flow-grid"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.15) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* 2. Soft Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-emerald-300/30 to-teal-200/30 rounded-full blur-2xl pointer-events-none" />

      {/* 3. Top Badges Strip */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between z-20">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-emerald-200 shadow-2xs backdrop-blur-sm text-[11px] font-bold text-emerald-900">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-emerald-600" />
          </span>
          <span>Organic Wealth Tree Flow</span>
        </div>

        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-[10px] font-black">
          <TrendingUp className="size-3 text-emerald-700" />
          <span>Compounding Growth</span>
        </div>
      </div>

      {/* 4. Live Growing Tree of Wealth & Flowing Market Waves SVG */}
      <svg
        viewBox="0 0 460 380"
        className="w-full h-full max-h-[350px] relative z-10 overflow-visible"
      >
        <defs>
          <linearGradient id="trunkGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#065f46" />
            <stop offset="60%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="waveCurve1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.1" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Continuous Flowing Market Waves at Tree Base */}
        <path
          d="M 10 320 Q 115 280 230 320 T 450 320"
          fill="none"
          stroke="url(#waveCurve1)"
          strokeWidth="3"
          strokeDasharray="6 4"
          className="animate-wave-flow"
        />
        <path
          d="M 10 335 Q 120 360 230 330 T 450 335"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeOpacity="0.4"
        />

        {/* Tree Roots Spanning In Ground */}
        <path
          d="M 230 310 C 210 325 180 330 150 335"
          fill="none"
          stroke="#065f46"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 230 310 C 250 325 280 330 310 335"
          fill="none"
          stroke="#065f46"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 230 310 L 230 340"
          fill="none"
          stroke="#065f46"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Main Compounding Tree Trunk */}
        <path
          d="M 230 310 C 228 250 220 200 230 160"
          fill="none"
          stroke="url(#trunkGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Major Branch 1 (Left Lower - Security / SIP Foundations) */}
        <path
          d="M 226 240 C 190 225 160 220 130 200"
          fill="none"
          stroke="#059669"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 160 220 C 145 195 130 185 110 175"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Major Branch 2 (Right Lower - Wealth Compounding) */}
        <path
          d="M 228 220 C 270 205 300 200 330 185"
          fill="none"
          stroke="#059669"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 300 200 C 320 175 340 165 365 155"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Major Branch 3 (Left Upper - Higher Horizons) */}
        <path
          d="M 228 175 C 195 150 170 140 145 125"
          fill="none"
          stroke="#10b981"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Major Branch 4 (Right Upper - Financial Independence) */}
        <path
          d="M 230 165 C 265 140 290 130 320 115"
          fill="none"
          stroke="#10b981"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Canopy Center Crown */}
        <path
          d="M 230 160 C 220 120 225 90 230 75"
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Animated Foliage Cluster 1 (Left Wing) */}
        <g className="animate-pulse" style={{ animationDuration: '4s' }}>
          <ellipse cx="120" cy="190" rx="24" ry="16" fill="url(#leafGrad)" opacity="0.85" />
          <ellipse cx="100" cy="170" rx="18" ry="14" fill="#34d399" opacity="0.9" />
          <ellipse cx="140" cy="120" rx="22" ry="16" fill="url(#leafGrad)" opacity="0.85" />
        </g>

        {/* Animated Foliage Cluster 2 (Right Wing) */}
        <g className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <ellipse cx="340" cy="180" rx="26" ry="18" fill="url(#leafGrad)" opacity="0.85" />
          <ellipse cx="370" cy="150" rx="20" ry="15" fill="#34d399" opacity="0.9" />
          <ellipse cx="325" cy="110" rx="24" ry="16" fill="url(#leafGrad)" opacity="0.85" />
        </g>

        {/* Animated Foliage Cluster 3 (Apex Crown) */}
        <g className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
          <ellipse cx="230" cy="70" rx="36" ry="24" fill="url(#leafGrad)" opacity="0.95" />
          <ellipse cx="210" cy="85" rx="24" ry="16" fill="#34d399" opacity="0.9" />
          <ellipse cx="250" cy="85" rx="24" ry="16" fill="#059669" opacity="0.9" />
        </g>

        {/* Golden Compounding Fruit Coins / Blossoms */}
        <g filter="url(#glow)">
          <circle cx="230" cy="65" r="9" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
          <circle cx="105" cy="165" r="7.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="365" cy="148" r="7.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="145" cy="118" r="7" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="325" cy="108" r="7" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="230" cy="140" r="8" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
        </g>
        <text x="227" y="68" fontSize="8" fontWeight="bold" fill="#78350f">₹</text>
        <text x="103" y="168" fontSize="7" fontWeight="bold" fill="#78350f">₹</text>
        <text x="363" y="151" fontSize="7" fontWeight="bold" fill="#78350f">₹</text>
        <text x="143" y="121" fontSize="6.5" fontWeight="bold" fill="#78350f">₹</text>
        <text x="323" y="111" fontSize="6.5" fontWeight="bold" fill="#78350f">₹</text>
        <text x="228" y="143" fontSize="7" fontWeight="bold" fill="#78350f">₹</text>

        {/* Floating Financial Growth Spores */}
        <circle cx="170" cy="95" r="3" fill="#10b981" className="animate-particle-drift" />
        <circle cx="290" cy="90" r="3.5" fill="#34d399" className="animate-particle-drift" style={{ animationDelay: '1.2s' }} />
        <circle cx="190" cy="170" r="2.5" fill="#059669" className="animate-particle-drift" style={{ animationDelay: '2.5s' }} />
        <circle cx="270" cy="170" r="3" fill="#10b981" className="animate-particle-drift" style={{ animationDelay: '3s' }} />
      </svg>

      {/* 5. Bottom Milestone Cards on Glass */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-emerald-200 shadow-2xs backdrop-blur-sm text-xs">
          <BadgeCheck className="size-4 text-emerald-600 shrink-0" />
          <div>
            <div className="text-[10px] text-slate-500 font-medium">Wealth Cultivation</div>
            <div className="text-xs font-bold text-slate-900">Disciplined Mutual Funds</div>
          </div>
        </div>

        <button
          onClick={onStartPlan}
          className="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-xs flex items-center gap-1 cursor-pointer"
        >
          <span>Plan SIP</span>
          <ArrowUpRight className="size-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  )
}

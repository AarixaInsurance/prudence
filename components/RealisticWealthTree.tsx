'use client'

import React from 'react'
import {
  TrendingUp,
  BadgeCheck,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
  Coins
} from 'lucide-react'

export default function RealisticWealthTree({ onStartPlan }: { onStartPlan?: () => void }) {
  return (
    <div className="relative w-full h-[450px] flex items-center justify-center select-none pointer-events-auto">
      {/* 1. Natural Breathing Sunbeam & Light Aura behind Tree (No Box or Enclosure) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-emerald-200/40 via-teal-100/35 to-amber-100/30 rounded-full blur-3xl pointer-events-none animate-sun-shimmer" />

      {/* 2. Floating Live Metric Badge 1 (Top Right) */}
      <div className="absolute top-1 right-2 sm:right-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/95 border border-emerald-200 shadow-md backdrop-blur-md animate-float-chip">
        <div className="size-6 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
          <TrendingUp className="size-3.5" />
        </div>
        <div>
          <div className="text-[10px] text-slate-500 font-semibold leading-none">Compounding Returns</div>
          <div className="text-xs font-black text-emerald-950 font-mono mt-0.5">12% - 15% CAGR</div>
        </div>
      </div>

      {/* 3. Floating Discipline Badge 2 (Top Left) */}
      <div
        className="absolute top-6 left-0 sm:left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/95 border border-slate-200 shadow-sm backdrop-blur-md text-[11px] font-bold text-slate-800 animate-float-chip"
        style={{ animationDelay: '1.5s' }}
      >
        <BadgeCheck className="size-4 text-emerald-600" />
        <span>Deep-Rooted Disciplined SIPs</span>
      </div>

      {/* 4. Real Organic Tree with Continuous Sway Animation */}
      <div className="relative w-full h-full max-w-[420px] max-h-[420px] flex items-center justify-center mix-blend-multiply animate-tree-sway">
        <img
          src="/images/real-wealth-tree.jpg"
          alt="Realistic Compounding Wealth Banyan Tree"
          className="w-full h-full object-contain drop-shadow-xl"
          style={{
            maskImage: 'radial-gradient(circle at center 55%, black 65%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center 55%, black 65%, transparent 100%)',
          }}
        />

        {/* Dynamic Glowing Return Spores / Floating Gold Wealth Shimmer Particles */}
        <div className="absolute top-[26%] left-[24%] size-3 rounded-full bg-amber-400/90 blur-[1px] animate-particle-drift" style={{ animationDuration: '5s' }} />
        <div className="absolute top-[36%] right-[22%] size-3 rounded-full bg-amber-400/90 blur-[1px] animate-particle-drift" style={{ animationDuration: '7s', animationDelay: '1.2s' }} />
        <div className="absolute top-[18%] left-[48%] size-3.5 rounded-full bg-emerald-400/80 blur-[1px] animate-particle-drift" style={{ animationDuration: '6s', animationDelay: '2.2s' }} />
        <div className="absolute top-[42%] left-[36%] size-2.5 rounded-full bg-amber-300/90 blur-[1px] animate-particle-drift" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }} />
        <div className="absolute top-[30%] right-[38%] size-2.5 rounded-full bg-emerald-300/80 blur-[1px] animate-particle-drift" style={{ animationDuration: '8s', animationDelay: '3s' }} />
      </div>

      {/* 5. Floating Bottom Action Card (Natural Open Ground Anchoring) */}
      <div className="absolute bottom-2 z-20 flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-white/95 border border-emerald-200/90 shadow-lg backdrop-blur-md animate-float-chip" style={{ animationDelay: '2s' }}>
        <div className="text-left">
          <div className="text-[10px] text-slate-500 font-medium">Cultivate Long-Term Corpus</div>
          <div className="text-xs font-black text-slate-900">Prudence Systematic Investing</div>
        </div>
        <button
          onClick={onStartPlan}
          className="px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-xs flex items-center gap-1 cursor-pointer"
        >
          <span>Start Growth</span>
          <ArrowUpRight className="size-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  )
}

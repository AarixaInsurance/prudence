'use client'

import React from 'react'

export default function FlowingMarketGraphBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. High-Visibility Animated Coordinate Graph Grid */}
      <div
        className="absolute -inset-[80px] opacity-70 animate-flow-grid"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.16) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.16) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Vibrant Ambient Glow Behind Headline */}
      <div className="absolute top-2 left-[5%] w-[580px] h-[360px] bg-gradient-to-br from-emerald-300/30 via-teal-200/25 to-transparent rounded-full blur-2xl" />
      <div className="absolute top-12 right-[8%] w-[460px] h-[340px] bg-gradient-to-bl from-teal-300/25 via-emerald-200/20 to-transparent rounded-full blur-2xl" />

      {/* 3. Continuously Flowing Market Trend Waves traversing across the hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1: Slower Flowing Organic Wave Fill */}
        <svg
          viewBox="0 0 1440 380"
          className="absolute bottom-0 left-0 w-[200%] h-64 text-emerald-100/70 animate-wave-flow fill-current"
          style={{ animationDuration: '20s' }}
        >
          <path d="M0,140 C320,240 420,50 720,150 C1020,250 1120,60 1440,160 C1760,260 1860,60 2160,160 C2460,260 2560,70 2880,170 L2880,380 L0,380 Z" />
        </svg>

        {/* Layer 2: Vivid Animated Market Growth Curve (Solid line with glow) */}
        <svg
          viewBox="0 0 1440 380"
          className="absolute bottom-6 left-0 w-[200%] h-64 animate-wave-flow"
          style={{ animationDuration: '14s', animationDirection: 'reverse' }}
        >
          <defs>
            <linearGradient id="solidMarketTrend" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#10b981" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#0d9488" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M0,180 C260,90 480,240 720,130 C960,40 1200,220 1440,120 C1680,30 1920,210 2160,110 C2400,30 2640,210 2880,120"
            fill="none"
            stroke="url(#solidMarketTrend)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Layer 3: Secondary Dashed Flowing Pulse Stream */}
        <svg
          viewBox="0 0 1440 380"
          className="absolute bottom-16 left-0 w-[200%] h-64 animate-wave-flow"
          style={{ animationDuration: '22s' }}
        >
          <path
            d="M0,210 C300,120 500,260 750,150 C1000,60 1220,230 1440,140 C1700,50 1920,230 2160,130 C2420,50 2640,220 2880,130"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="8 6"
            strokeOpacity="0.6"
          />
        </svg>
      </div>

      {/* 4. Vivid Floating Financial Growth Nodes with Rings */}
      <div className="absolute top-[26%] left-[10%] size-4 rounded-full bg-emerald-500/40 border border-emerald-500/60 animate-particle-drift" style={{ animationDuration: '6s' }} />
      <div className="absolute top-[48%] left-[24%] size-3 rounded-full bg-teal-500/50 border border-teal-500/70 animate-particle-drift" style={{ animationDuration: '8s', animationDelay: '1.2s' }} />
      <div className="absolute top-[32%] left-[44%] size-3.5 rounded-full bg-emerald-400/50 border border-emerald-400/70 animate-particle-drift" style={{ animationDuration: '7s', animationDelay: '2.5s' }} />
      <div className="absolute top-[65%] left-[36%] size-2.5 rounded-full bg-teal-400/40 animate-particle-drift" style={{ animationDuration: '9s', animationDelay: '3.5s' }} />
    </div>
  )
}

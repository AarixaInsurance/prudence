'use client'

import React from 'react'

export default function WebsiteGlobalBackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none -z-10">
      {/* 1. Global Animated Flowing Matrix Grid across entire viewport */}
      <div
        className="absolute -inset-[80px] opacity-[0.4] animate-flow-grid"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
        }}
      />

      {/* 2. Multiple Ambient Glowing Atmospheric Spheres */}
      <div className="absolute top-[5%] left-[8%] w-[600px] h-[400px] bg-gradient-to-br from-emerald-200/35 via-teal-100/25 to-transparent rounded-full blur-3xl animate-sun-shimmer" />
      <div className="absolute top-[40%] right-[5%] w-[550px] h-[380px] bg-gradient-to-bl from-teal-200/30 via-emerald-100/20 to-transparent rounded-full blur-3xl animate-sun-shimmer" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-[75%] left-[12%] w-[500px] h-[350px] bg-gradient-to-tr from-emerald-200/25 via-teal-100/20 to-transparent rounded-full blur-3xl animate-sun-shimmer" style={{ animationDelay: '4s' }} />

      {/* 3. Continuously Flowing Market Trend Waves across the background */}
      <div className="absolute bottom-0 left-0 right-0 h-80 opacity-35 overflow-hidden">
        <svg
          viewBox="0 0 1440 380"
          className="absolute bottom-0 left-0 w-[200%] h-full text-emerald-200/40 animate-wave-flow fill-current"
          style={{ animationDuration: '24s' }}
        >
          <path d="M0,150 C320,250 420,60 720,160 C1020,260 1120,70 1440,170 C1760,270 1860,70 2160,170 C2460,270 2560,80 2880,180 L2880,380 L0,380 Z" />
        </svg>

        <svg
          viewBox="0 0 1440 380"
          className="absolute bottom-8 left-0 w-[200%] h-full animate-wave-flow"
          style={{ animationDuration: '18s', animationDirection: 'reverse' }}
        >
          <path
            d="M0,180 C260,90 480,240 720,130 C960,40 1200,220 1440,120 C1680,30 1920,210 2160,110 C2400,30 2640,210 2880,120"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeOpacity="0.75"
          />
        </svg>
      </div>

      {/* 4. Drifting Capital Growth Particles */}
      <div className="absolute top-[20%] left-[15%] size-3 rounded-full bg-emerald-400/50 blur-[1px] animate-particle-drift" style={{ animationDuration: '7s' }} />
      <div className="absolute top-[50%] right-[18%] size-3 rounded-full bg-teal-400/50 blur-[1px] animate-particle-drift" style={{ animationDuration: '9s', animationDelay: '1.5s' }} />
      <div className="absolute top-[75%] left-[30%] size-3.5 rounded-full bg-emerald-500/40 blur-[1px] animate-particle-drift" style={{ animationDuration: '8s', animationDelay: '3s' }} />
    </div>
  )
}

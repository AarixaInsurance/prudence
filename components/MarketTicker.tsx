'use client'

import React, { useState, useEffect } from 'react'
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Sparkles
} from 'lucide-react'

interface TickerData {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  currency: string
  digits?: number
}

const INITIAL_DATA: TickerData[] = [
  { symbol: 'SENSEX', name: 'BSE SENSEX', price: 81845.20, change: 482.60, changePercent: 0.59, currency: '₹', digits: 2 },
  { symbol: 'NIFTY 50', name: 'NIFTY 50', price: 25012.75, change: 145.30, changePercent: 0.58, currency: '₹', digits: 2 },
  { symbol: 'NIFTY BANK', name: 'BANK NIFTY', price: 51920.40, change: 320.15, changePercent: 0.62, currency: '₹', digits: 2 },
  { symbol: 'NIFTY MIDCAP', name: 'MIDCAP 100', price: 58430.80, change: 412.30, changePercent: 0.71, currency: '₹', digits: 2 },
  { symbol: 'GOLD (10g)', name: '24K Gold 999', price: 76420.00, change: 280.00, changePercent: 0.37, currency: '₹', digits: 0 },
  { symbol: 'SILVER (1kg)', name: 'Silver 999', price: 92150.00, change: 650.00, changePercent: 0.71, currency: '₹', digits: 0 },
  { symbol: 'USD/INR', name: 'US Dollar', price: 84.08, change: -0.04, changePercent: -0.05, currency: '₹', digits: 2 },
]

export default function MarketTicker() {
  const [data, setData] = useState<TickerData[]>(INITIAL_DATA)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))

    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => {
          const deltaFactor = (Math.random() - 0.48) * 0.002
          const newPrice = Math.max(1, item.price * (1 + deltaFactor))
          const diff = newPrice - (item.price - item.change)
          const newPct = (diff / (item.price - item.change)) * 100

          return {
            ...item,
            price: newPrice,
            change: diff,
            changePercent: newPct,
          }
        })
      )
      setLastUpdated(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const displayItems = [...data, ...data]

  return (
    <div className="relative border-y border-[#173026] bg-[#14261e] text-white shadow-inner overflow-hidden select-none">
      <div className="flex items-center">
        {/* Live Badge */}
        <div className="z-10 flex shrink-0 items-center gap-1.5 bg-[#173026] px-3 py-1.5 text-[11px] font-semibold border-r border-[#234034] shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7ed9a6] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7ed9a6]"></span>
          </span>
          <span className="tracking-wider uppercase text-[#7ed9a6] font-bold text-[10px] flex items-center gap-1">
            <Activity className="size-2.5" /> LIVE MARKETS
          </span>
          <span className="hidden md:inline-block text-[9px] text-[#a0b8ac] font-mono ml-1">
            {lastUpdated}
          </span>
        </div>

        {/* Continuous Marquee Ticker */}
        <div className="flex-1 overflow-hidden relative group">
          <div className="animate-marquee py-1.5 flex">
            {displayItems.map((item, idx) => {
              const isPositive = item.change >= 0
              return (
                <div
                  key={`${item.symbol}-${idx}`}
                  className="inline-flex items-center gap-2 px-4 border-r border-[#234034] hover:bg-[#1f3a2e] transition-colors cursor-pointer py-0.5"
                  title={`${item.name} | Live indices`}
                >
                  <span className="text-[11px] font-bold text-slate-200 tracking-wide">
                    {item.symbol}
                  </span>
                  <span className="text-xs font-mono font-semibold text-white">
                    {item.currency}{item.price.toLocaleString('en-IN', {
                      minimumFractionDigits: item.digits ?? 2,
                      maximumFractionDigits: item.digits ?? 2
                    })}
                  </span>
                  <span
                    className={`inline-flex items-center gap-0.5 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isPositive
                        ? 'text-[#7ed9a6] bg-[#7ed9a6]/15'
                        : 'text-rose-400 bg-rose-500/15'
                    }`}
                  >
                    {isPositive ? (
                      <TrendingUp className="size-2.5" />
                    ) : (
                      <TrendingDown className="size-2.5" />
                    )}
                    {isPositive ? '+' : ''}
                    {item.changePercent.toFixed(2)}%
                  </span>
                </div>
              )
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#14261e] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#14261e] to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

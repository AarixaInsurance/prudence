'use client'

import React, { useState } from 'react'
import {
  Calculator,
  TrendingUp,
  PieChart as PieChartIcon,
  Target,
  ClockAlert,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check,
  Coins,
  ArrowUpRight,
  Info,
  Calendar,
  Layers
} from 'lucide-react'

type CalcType = 'sip' | 'lumpsum' | 'goal' | 'delay'

export default function FinancialCalculators({ onBookConsultation }: { onBookConsultation?: (detail: string) => void }) {
  const [activeTab, setActiveTab] = useState<CalcType>('sip')

  // SIP State
  const [sipMonthly, setSipMonthly] = useState<number>(15000)
  const [sipRate, setSipRate] = useState<number>(12.5)
  const [sipYears, setSipYears] = useState<number>(15)

  // Lumpsum State
  const [lumpAmount, setLumpAmount] = useState<number>(300000)
  const [lumpRate, setLumpRate] = useState<number>(12)
  const [lumpYears, setLumpYears] = useState<number>(10)

  // Goal Planner State
  const [targetGoal, setTargetGoal] = useState<number>(5000000) // ₹50 Lakhs
  const [goalYears, setGoalYears] = useState<number>(12)
  const [goalRate, setGoalRate] = useState<number>(12)

  // Delay Cost State
  const [delayMonthly, setDelayMonthly] = useState<number>(10000)
  const [delayMonths, setDelayMonths] = useState<number>(24)
  const [delayTotalYears, setDelayTotalYears] = useState<number>(20)
  const [delayRate, setDelayRate] = useState<number>(12)

  const formatINR = (val: number) => {
    return '₹' + Math.round(val).toLocaleString('en-IN')
  }

  // Calculate SIP
  const calculateSIP = () => {
    const P = sipMonthly
    const i = sipRate / 100 / 12
    const n = sipYears * 12
    const invested = P * n
    const total = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    const gains = Math.max(0, total - invested)
    return { invested, gains, total }
  }

  // Calculate Lumpsum
  const calculateLumpsum = () => {
    const P = lumpAmount
    const r = lumpRate / 100
    const t = lumpYears
    const total = P * Math.pow(1 + r, t)
    const gains = Math.max(0, total - P)
    return { invested: P, gains, total }
  }

  // Calculate Required SIP for Target Goal
  const calculateGoalSIP = () => {
    const M = targetGoal
    const i = goalRate / 100 / 12
    const n = goalYears * 12
    const factor = ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    const monthlyNeeded = M / factor
    const totalInvested = monthlyNeeded * n
    return { monthlyNeeded, totalInvested, targetGoal: M }
  }

  // Calculate Cost of Delay
  const calculateDelayCost = () => {
    const P = delayMonthly
    const i = delayRate / 100 / 12
    const nOriginal = delayTotalYears * 12
    const nDelayed = Math.max(12, (delayTotalYears * 12) - delayMonths)

    const totalOriginal = P * ((Math.pow(1 + i, nOriginal) - 1) / i) * (1 + i)
    const totalDelayed = P * ((Math.pow(1 + i, nDelayed) - 1) / i) * (1 + i)
    const loss = Math.max(0, totalOriginal - totalDelayed)
    return { totalOriginal, totalDelayed, loss }
  }

  const sipResult = calculateSIP()
  const lumpResult = calculateLumpsum()
  const goalResult = calculateGoalSIP()
  const delayResult = calculateDelayCost()

  return (
    <section id="calculators" className="py-10 md:py-14 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden border-t border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles className="size-3 text-emerald-600" /> Interactive Compounding Engine
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Simulate Your Wealth Horizon
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Interactive actuarial simulations based on verified compound interest mathematics.
            </p>
          </div>

          {/* Segmented Tab Pill */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-semibold self-start md:self-auto shadow-inner">
            <button
              onClick={() => setActiveTab('sip')}
              className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'sip'
                  ? 'bg-white text-emerald-900 font-bold shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="size-3.5 text-emerald-600" /> SIP Growth
            </button>
            <button
              onClick={() => setActiveTab('lumpsum')}
              className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'lumpsum'
                  ? 'bg-white text-emerald-900 font-bold shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PieChartIcon className="size-3.5 text-emerald-600" /> Lumpsum
            </button>
            <button
              onClick={() => setActiveTab('goal')}
              className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'goal'
                  ? 'bg-white text-emerald-900 font-bold shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="size-3.5 text-emerald-600" /> Goal Target
            </button>
            <button
              onClick={() => setActiveTab('delay')}
              className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'delay'
                  ? 'bg-rose-50 text-rose-700 font-bold shadow-xs border border-rose-200'
                  : 'text-slate-600 hover:text-rose-700'
              }`}
            >
              <ClockAlert className="size-3.5 text-rose-600" /> Cost of Delay
            </button>
          </div>
        </div>

        {/* 2-Column Light Dashboard Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Sliders Input Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            {activeTab === 'sip' && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Monthly SIP Amount</span>
                    <span className="text-sm font-bold text-slate-900 bg-emerald-50 text-emerald-900 px-3 py-1 rounded-xl border border-emerald-200 font-mono">
                      {formatINR(sipMonthly)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="200000"
                    step="1000"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>₹1,000</span>
                    <span>₹50,000</span>
                    <span>₹1,00,000</span>
                    <span>₹2,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Expected Annual Returns (CAGR)</span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200 font-mono">
                      {sipRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="22"
                    step="0.5"
                    value={sipRate}
                    onChange={(e) => setSipRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>6% (Debt/Liquid)</span>
                    <span>12% (Balanced)</span>
                    <span>15% (Diversified Equity)</span>
                    <span>20%+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Investment Horizon</span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200 font-mono">
                      {sipYears} Years ({sipYears * 12} Installments)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="35"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>1 Yr</span>
                    <span>10 Yrs</span>
                    <span>20 Yrs</span>
                    <span>35 Yrs</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lumpsum' && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">One-Time Deposit Capital</span>
                    <span className="text-sm font-bold text-slate-900 bg-emerald-50 text-emerald-900 px-3 py-1 rounded-xl border border-emerald-200 font-mono">
                      {formatINR(lumpAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="2500000"
                    step="25000"
                    value={lumpAmount}
                    onChange={(e) => setLumpAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>₹25,000</span>
                    <span>₹5,00,000</span>
                    <span>₹15,00,000</span>
                    <span>₹25,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Expected Annual Returns (CAGR)</span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200 font-mono">
                      {lumpRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="22"
                    step="0.5"
                    value={lumpRate}
                    onChange={(e) => setLumpRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Holding Period</span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200 font-mono">
                      {lumpYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={lumpYears}
                    onChange={(e) => setLumpYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>
              </div>
            )}

            {activeTab === 'goal' && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Target Corpus Goal</span>
                    <span className="text-sm font-bold text-slate-900 bg-emerald-50 text-emerald-900 px-3 py-1 rounded-xl border border-emerald-200 font-mono">
                      {formatINR(targetGoal)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="20000000"
                    step="250000"
                    value={targetGoal}
                    onChange={(e) => setTargetGoal(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>₹5 Lakh</span>
                    <span>₹50 Lakh</span>
                    <span>₹1 Crore</span>
                    <span>₹2 Crore</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Time to Reach Goal</span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200 font-mono">
                      {goalYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={goalYears}
                    onChange={(e) => setGoalYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Expected CAGR</span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200 font-mono">
                      {goalRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="18"
                    step="0.5"
                    value={goalRate}
                    onChange={(e) => setGoalRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                </div>
              </div>
            )}

            {activeTab === 'delay' && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Planned Monthly Investment</span>
                    <span className="text-sm font-bold text-slate-900 bg-rose-50 text-rose-900 px-3 py-1 rounded-xl border border-rose-200 font-mono">
                      {formatINR(delayMonthly)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="100000"
                    step="1000"
                    value={delayMonthly}
                    onChange={(e) => setDelayMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Delay in Starting (Months)</span>
                    <span className="text-sm font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200 font-mono">
                      {delayMonths} Months ({Math.round((delayMonths / 12) * 10) / 10} Yrs)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="60"
                    step="3"
                    value={delayMonths}
                    onChange={(e) => setDelayMonths(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-700">Total Horizon</span>
                    <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200 font-mono">
                      {delayTotalYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={delayTotalYears}
                    onChange={(e) => setDelayTotalYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-emerald-600" /> Mathematical CAGR Compounding
              </span>
              <span>Values in INR (₹)</span>
            </div>
          </div>

          {/* Results Summary Card (Crisp Light Emerald Bento Card) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-white rounded-3xl border border-emerald-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-emerald-200/70">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  {activeTab === 'sip' && 'SIP Maturity Projection'}
                  {activeTab === 'lumpsum' && 'Lumpsum Growth Projection'}
                  {activeTab === 'goal' && 'Required Monthly Contribution'}
                  {activeTab === 'delay' && 'Opportunity Cost of Hesitation'}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                  Verified Math
                </span>
              </div>

              {activeTab === 'sip' && (
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Estimated Future Wealth</div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-0.5 font-mono text-emerald-900">
                      {formatINR(sipResult.total)}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-white border border-slate-200/80">
                      <span className="text-slate-500">Total Capital Invested</span>
                      <span className="font-bold text-slate-900 font-mono">{formatINR(sipResult.invested)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-emerald-100/70 border border-emerald-200">
                      <span className="text-emerald-900 font-semibold">Estimated Wealth Gain</span>
                      <span className="font-bold text-emerald-800 font-mono">+{formatINR(sipResult.gains)}</span>
                    </div>
                  </div>

                  {/* Progress Ratio Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                      <span>Invested ({Math.round((sipResult.invested / sipResult.total) * 100)}%)</span>
                      <span className="text-emerald-700 font-bold">Gains ({Math.round((sipResult.gains / sipResult.total) * 100)}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
                      <div
                        className="bg-slate-400 h-full"
                        style={{ width: `${(sipResult.invested / sipResult.total) * 100}%` }}
                      />
                      <div
                        className="bg-emerald-500 h-full"
                        style={{ width: `${(sipResult.gains / sipResult.total) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'lumpsum' && (
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Projected Maturity Value</div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-0.5 font-mono text-emerald-900">
                      {formatINR(lumpResult.total)}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-white border border-slate-200/80">
                      <span className="text-slate-500">Principal Deposit</span>
                      <span className="font-bold text-slate-900 font-mono">{formatINR(lumpResult.invested)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-emerald-100/70 border border-emerald-200">
                      <span className="text-emerald-900 font-semibold">Wealth Multiplier</span>
                      <span className="font-bold text-emerald-800 font-mono">{Math.round((lumpResult.total / lumpResult.invested) * 10) / 10}x Initial Capital</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'goal' && (
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Monthly SIP Required</div>
                    <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-0.5 font-mono text-emerald-900">
                      {formatINR(goalResult.monthlyNeeded)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Per month to reach target of {formatINR(targetGoal)}</div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-white border border-slate-200/80">
                      <span className="text-slate-500">Your Net Capital Paid</span>
                      <span className="font-bold text-slate-900 font-mono">{formatINR(goalResult.totalInvested)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-emerald-100/70 border border-emerald-200">
                      <span className="text-emerald-900 font-semibold">Compounding Benefit</span>
                      <span className="font-bold text-emerald-800 font-mono">+{formatINR(targetGoal - goalResult.totalInvested)}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'delay' && (
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-[11px] text-rose-600 font-semibold">Wealth Lost by Delaying</div>
                    <div className="text-3xl sm:text-4xl font-black text-rose-600 tracking-tight mt-0.5 font-mono">
                      -{formatINR(delayResult.loss)}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-white border border-slate-200/80">
                      <span className="text-slate-500">Corpus if started today</span>
                      <span className="font-bold text-emerald-700 font-mono">{formatINR(delayResult.totalOriginal)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-rose-50 border border-rose-200">
                      <span className="text-rose-800 font-medium">Corpus with {delayMonths}-mo delay</span>
                      <span className="font-bold text-rose-800 font-mono">{formatINR(delayResult.totalDelayed)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Callout */}
            <div className="mt-6 pt-4 border-t border-emerald-200/70">
              <button
                onClick={() => onBookConsultation?.(`${activeTab.toUpperCase()} Simulation - Goal ₹${activeTab === 'sip' ? sipResult.total : activeTab === 'lumpsum' ? lumpResult.total : targetGoal}`)}
                className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
              >
                <span>Structure This Plan With Us</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

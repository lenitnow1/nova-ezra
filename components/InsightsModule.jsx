"use client"

import React from 'react'

export default function InsightsModule({ data, parsing }) {
  if (parsing) return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="h-32 bg-white/5 rounded-2xl border border-white/10" />
      ))}
    </div>
  )

  if (!data) return (
    <div className="p-12 rounded-3xl border border-white/5 bg-zinc-900/30 flex flex-col items-center justify-center text-center">
      <div className="size-12 rounded-full border border-white/10 flex items-center justify-center mb-4 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">Insights_Vault_Locked</p>
    </div>
  )

  const metrics = [
    { label: 'ATS_SCORE', value: data.atsScore, unit: '%', color: 'text-blue-400', desc: 'Semantic keyword alignment' },
    { label: 'EXPERIENCE_DEPTH', value: data.experienceDepth, unit: '/10', color: 'text-purple-400', desc: 'Quantitative impact score' },
    { label: 'SKILL_DENSITY', value: data.skillDensity, unit: '%', color: 'text-emerald-400', desc: 'Industry benchmark match' },
    { label: 'RECRUITER_INDEX', value: data.recruiterIndex, unit: '%', color: 'text-orange-400', desc: '6-second scan probability' },
  ]

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 ring-1 ring-inset ring-white/5 relative overflow-hidden">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="font-mono text-[10px] text-white/40 tracking-tighter uppercase">{m.label}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1 relative z-10">
              <span className={`text-3xl font-black tracking-tighter ${m.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]`}>{m.value}</span>
              <span className="text-xs font-mono text-white/20">{m.unit}</span>
            </div>
            <p className="mt-2 text-[10px] text-white/30 font-mono italic relative z-10">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-8 rounded-3xl border border-white/10 bg-zinc-950/50 backdrop-blur-xl">
            <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
               <span className="size-1.5 bg-blue-500 rounded-full" />
               SKILL_DISTRIBUTION
            </h3>
            <div className="space-y-4">
               {data.topSkills.map((skill, i) => (
                 <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono">
                       <span className="text-white/60">{skill.name}</span>
                       <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-1000 ease-out" 
                         style={{ width: `${skill.level}%` }}
                       />
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="p-8 rounded-3xl border border-white/10 bg-zinc-950/50 backdrop-blur-xl flex flex-col">
            <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
               <span className="size-1.5 bg-purple-500 rounded-full" />
               SWOT_ANALYSIS
            </h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
               <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/5">
                  <h4 className="text-[9px] font-mono font-bold text-emerald-400 uppercase mb-2">Strengths</h4>
                  <ul className="text-[10px] text-emerald-300/60 space-y-1 font-mono">
                     {data.swot.strengths.map((s, i) => <li key={i}>+ {s}</li>)}
                  </ul>
               </div>
               <div className="p-4 rounded-xl border border-red-500/10 bg-red-500/5">
                  <h4 className="text-[9px] font-mono font-bold text-red-400 uppercase mb-2">Weaknesses</h4>
                  <ul className="text-[10px] text-red-300/60 space-y-1 font-mono">
                     {data.swot.weaknesses.map((w, i) => <li key={i}>- {w}</li>)}
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

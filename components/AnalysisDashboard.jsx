"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnalysisDashboard({ data, onUpdate }) {
  const [activeSection, setActiveSection] = useState('Experience')

  if (!data || !data.sections) return null

  const sections = [
    { id: 'Summary', icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25' },
    { id: 'Experience', icon: 'M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125Zm0-8.5v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125V5.65c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125Z' },
    { id: 'Skills', icon: 'M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0-5.571 3-5.571-3' },
    { id: 'Education', icon: 'M4.26 10.174L12 12l7.74-1.826A.75.75 0 0 0 20.25 9.44V6.94a.75.75 0 0 0-.51-.712l-7.5-2.5a.75.75 0 0 0-.48 0l-7.5 2.5a.75.75 0 0 0-.51.712v2.5a.75.75 0 0 0 .51.712Z' }
  ]

  const suggestions = data.sections;

  return (
    <div className="mt-12 p-8 bg-zinc-950/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-12">
        {/* Navigation Sidebar */}
        <div className="w-full xl:w-64 space-y-2">
          <h3 className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.3em] mb-6 px-4">Sections_Analysis</h3>
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${activeSection === section.id ? 'bg-white/10 text-white border border-white/10' : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${activeSection === section.id ? 'text-blue-400' : 'group-hover:text-white/60'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
              </svg>
              <span className="text-xs font-mono font-bold uppercase tracking-widest">{section.id}</span>
              {activeSection === section.id && (
                <motion.div layoutId="activeDot" className="ml-auto size-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center justify-between">
             <h4 className="text-2xl font-black tracking-tight flex items-center gap-4">
                {activeSection}
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-mono text-blue-400 uppercase">AI_ENHANCEMENT_READY</span>
             </h4>
          </div>

          <div className="space-y-6">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {suggestions[activeSection] && suggestions[activeSection].length > 0 ? (
                    suggestions[activeSection].map((s) => (
                      <div key={s.id} className="p-6 rounded-3xl border border-white/5 bg-white/5 space-y-4 hover:border-white/10 transition-colors group">
                         <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${s.impact === 'Critical' ? 'bg-red-500/20 text-red-400' : s.impact === 'High' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'}`}>
                               {s.impact}_IMPACT
                            </span>
                         </div>
                         
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                               <h5 className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Original</h5>
                               <p className="text-xs text-white/50 leading-relaxed font-mono italic">"{s.original}"</p>
                            </div>
                            <div className="space-y-2">
                               <h5 className="text-[10px] font-mono text-blue-400/50 uppercase tracking-widest">AI_SUGGESTION</h5>
                               <p className="text-sm text-white leading-relaxed font-mono">
                                  {s.suggested}
                               </p>
                            </div>
                         </div>

                         <div className="flex items-center gap-3 pt-4 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-mono uppercase tracking-widest transition-colors">Reject</button>
                            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest transition-colors shadow-lg shadow-blue-500/20">Accept</button>
                         </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-12 border border-dashed border-white/10 rounded-3xl text-center opacity-40">
                       <p className="text-xs font-mono uppercase tracking-widest">No improvements suggested for this section.</p>
                    </div>
                  )}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

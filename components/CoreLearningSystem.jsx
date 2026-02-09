'use client'

import React, { useState, useEffect } from 'react'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf'
import { motion, AnimatePresence } from 'framer-motion'

export default function CoreLearningSystem() {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [learningData, setLearningData] = useState(null)
  const [activeConcept, setActiveConcept] = useState(null)
  const [lesson, setLesson] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [evaluating, setEvaluating] = useState(false)
  const [documentText, setDocumentText] = useState('')
  const [progress, setProgress] = useState({}) // { conceptId: { status: 'completed' | 'in-progress', confidence: number } }

  // PDF worker setup
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const v = pdfjsLib.version || '5.4.530'
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${v}/build/pdf.worker.min.mjs`
    }
  }, [])

  // Handle PDF upload
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return
    if (selectedFile.type !== 'application/pdf') {
      setError('Please upload a PDF document.')
      return
    }

    setFile(selectedFile)
    setLoading(true)
    setError(null)

    try {
      const arrayBuffer = await selectedFile.arrayBuffer()
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdf = await loadingTask.promise
      let fullText = ''
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const textContent = await page.getTextContent()
        const pageText = textContent.items.map(item => item.str).join(' ')
        fullText += pageText + '\n'
      }
      setDocumentText(fullText)

      const response = await fetch('/api/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: fullText, action: 'analyze' })
      })
      const data = await response.json()
      if (data.error) throw new Error(data.error)
      setLearningData(data)
    } catch (err) {
      console.error(err)
      setError('Failed to analyze document. ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  // Start lesson for a concept
  const startLesson = async (concept) => {
    setActiveConcept(concept)
    setLesson(null)
    setUserAnswer('')
    setFeedback(null)
    setLoading(true)

    try {
      const response = await fetch('/api/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate-lesson',
          text: 'context provided in context field',
          context: {
            documentText: documentText.slice(0, 6000), // Limit context size
            conceptName: concept.name
          }
        })
      })
      const data = await response.json()
      setLesson(data)
      setProgress(prev => ({
        ...prev,
        [concept.id]: { ...prev[concept.id], status: 'in-progress' }
      }))
    } catch (err) {
      setError('Failed to generate lesson.')
    } finally {
      setLoading(false)
    }
  }

  // Evaluate user answer
  const handleEvaluate = async () => {
    setEvaluating(true)
    try {
      const response = await fetch('/api/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'evaluate',
          context: {
            question: lesson.question,
            userAnswer: userAnswer,
            explanation: lesson.explanation
          }
        })
      })
      const data = await response.json()
      setFeedback(data)
      if (data.isPassed) {
        setProgress(prev => ({
          ...prev,
          [activeConcept.id]: { status: 'completed', confidence: 100 }
        }))
      }
    } catch (err) {
      setError('Evaluation failed.')
    } finally {
      setEvaluating(false)
    }
  }

  // Loading screen while analyzing document
  if (loading && !learningData) {
    return (
      <div className="flex flex-col items-center justify-center p-20 space-y-4">
        <div className="size-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
        <p className="font-mono text-xs text-white/40 uppercase tracking-widest">Analyzing_Document...</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar: Learning Path */}
      <div className="lg:col-span-4 space-y-6">
        {!learningData ? (
          <div className="p-8 rounded-3xl border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center text-center space-y-4">
            <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white/40">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 9 9m-9-9v18" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold">Upload Document</h3>
              <p className="text-xs text-white/40 mt-1">PDF initially supported</p>
            </div>
            <label className="cursor-pointer px-4 py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-white/90 transition-colors">
              Select File
              <input type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
            </label>
            {error && <p className="text-xs text-red-400 font-mono">{error}</p>}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-6 px-2">Learning Path</h2>
              <div className="space-y-4">
                {learningData.sections.map((section) => (
                  <div key={section.id} className="space-y-2">
                    <h3 className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider px-2">{section.title}</h3>
                    <div className="space-y-1">
                      {section.concepts.map((concept) => (
                        <button
                          key={concept.id}
                          onClick={() => startLesson(concept)}
                          className={`w-full text-left px-4 py-3 rounded-2xl text-xs transition-all flex items-center justify-between group ${activeConcept?.id === concept.id ? 'bg-white/10 border border-white/10 text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                        >
                          <span className="truncate">{concept.name}</span>
                          {progress[concept.id]?.status === 'completed' ? (
                            <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                          ) : progress[concept.id]?.status === 'in-progress' ? (
                            <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                          ) : (
                            <span className="size-1.5 rounded-full bg-white/10 group-hover:bg-white/20" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content: Lesson View */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          {!activeConcept ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 rounded-[2.5rem] border border-white/5 bg-zinc-950/30 text-center"
            >
              <div className="size-16 rounded-full border border-white/5 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white/10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white/20">Select a concept to begin learning</h3>
            </motion.div>
          ) : (
            <motion.div 
              key={activeConcept.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-[2.5rem] border border-white/10 bg-zinc-950/50 backdrop-blur-3xl space-y-8">
                <header className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono text-[10px] uppercase tracking-widest">Active_Lesson</span>
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">{activeConcept.name}</h2>
                  <p className="text-white/40 text-sm font-mono">{activeConcept.description}</p>
                </header>

                {!lesson ? (
                  <div className="py-12 flex flex-col items-center justify-center space-y-4">
                    <div className="size-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                    <p className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">Synthesizing_Lesson...</p>
                  </div>
                ) : (
                  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">

                    {/* Explanation */}
                    <div className="prose-sm max-w-none font-sans leading-relaxed text-white/80 whitespace-pre-wrap">
                      {lesson.explanation
                        ? typeof lesson.explanation === 'string'
                          ? lesson.explanation
                          : lesson.explanation.text
                            ? lesson.explanation.text
                            : JSON.stringify(lesson.explanation, null, 2)
                        : 'No explanation available.'}
                    </div>

                    {/* Optional Key Points */}
                    {lesson.explanation?.keyPoints?.length > 0 && (
                      <ul className="mt-4 list-disc list-inside text-white/60 text-sm">
                        {lesson.explanation.keyPoints.map((kp, i) => (
                          <li key={i}>{kp}</li>
                        ))}
                      </ul>
                    )}

                    {/* Comprehension Question */}
                    <div className="pt-8 border-t border-white/10 space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                          Check_Understanding
                        </h4>
                        <p className="text-lg font-medium text-white">{lesson.question || 'No question provided.'}</p>
                      </div>

                      <div className="space-y-4">
                        <textarea
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          placeholder="Type your answer here..."
                          className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-white/10"
                        />
                        <div className="flex justify-end">
                          <button
                            onClick={handleEvaluate}
                            disabled={evaluating || !userAnswer.trim()}
                            className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 uppercase tracking-widest"
                          >
                            {evaluating ? 'Evaluating...' : 'Submit Answer'}
                          </button>
                        </div>
                      </div>

                      {/* Feedback */}
                      <AnimatePresence>
                        {feedback && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className={`p-6 rounded-2xl border ${feedback.isPassed ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${feedback.isPassed ? 'text-emerald-400' : 'text-red-400'}`}>
                                {feedback.status || 'RESULT'}_RESULT
                              </span>
                            </div>
                            <p className="text-sm text-white/90 leading-relaxed">{feedback.feedback || 'No feedback available.'}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

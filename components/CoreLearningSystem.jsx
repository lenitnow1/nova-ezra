'use client'

import React, { useState, useEffect } from 'react'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf'
import { motion, AnimatePresence } from 'framer-motion'
import Tesseract from 'tesseract.js'

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
  const [progress, setProgress] = useState({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const v = pdfjsLib.version || '5.4.530'
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        `https://unpkg.com/pdfjs-dist@${v}/build/pdf.worker.min.mjs`
    }
  }, [])

  const extractPDFText = async (file) => {
    const arrayBuffer = await file.arrayBuffer()
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

    let fullText = ''

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)
      const content = await page.getTextContent()

      const pageText = content.items
        .map(item => item?.str || '')
        .join(' ')

      fullText += pageText + '\n'
    }

    return fullText
  }

  const runOCR = async (file) => {
    const result = await Tesseract.recognize(
      await file.arrayBuffer(),
      'eng'
    )
    return result.data.text || ''
  }

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return

    if (selectedFile.type !== 'application/pdf') {
      setError('Only PDF files are accepted in this archive.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const extracted = await extractPDFText(selectedFile)

      let safeText = extracted

      if (!safeText || safeText.trim().length < 80) {
        safeText = await runOCR(selectedFile)
      }

      if (!safeText || safeText.trim().length < 80) {
        throw new Error('This PDF has no readable text (likely an image-based scan).')
      }

      setDocumentText(safeText)

      const res = await fetch('/api/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: safeText.slice(0, 3000),
          action: 'analyze'
        })
      })

      if (!res.ok) {
        throw new Error(await res.text())
      }

      const data = await res.json()
      setLearningData(data)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const startLesson = async (concept) => {
    setActiveConcept(concept)
    setLesson(null)
    setUserAnswer('')
    setFeedback(null)
    setLoading(true)

    try {
      const res = await fetch('/api/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate-lesson',
          context: {
            documentText: documentText.slice(0, 3000),
            conceptName: concept.name
          }
        })
      })

      if (!res.ok) throw new Error(await res.text())

      const data = await res.json()
      setLesson(data)

    } catch {
      setError('Lesson generation failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleEvaluate = async () => {
    setEvaluating(true)

    try {
      const res = await fetch('/api/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'evaluate',
          context: {
            question: lesson.question,
            userAnswer,
            explanation: lesson.explanation
          }
        })
      })

      if (!res.ok) throw new Error(await res.text())

      const data = await res.json()
      setFeedback(data)

      if (data.isPassed) {
        setProgress(prev => ({
          ...prev,
          [activeConcept.id]: { status: 'completed' }
        }))
      }

    } catch {
      setError('Evaluation failed. Please try again.')
    } finally {
      setEvaluating(false)
    }
  }

  const completedCount = Object.keys(progress).filter(k => progress[k]?.status === 'completed').length
  const totalConcepts = learningData?.sections?.reduce(
    (acc, s) => acc + (s.concepts?.length || 0),
    0
  ) || 0
  const progressPct = totalConcepts > 0 ? (completedCount / totalConcepts) * 100 : 0

  if (loading && !learningData) {
    return (
      <div className="flex flex-col items-center justify-center py-24 animate-fade-in">
        <div className="spinner-refined mb-6" />
        <p className="font-display text-lg text-sepia tracking-wide">Preparing your volume…</p>
        <p className="mt-2 text-sm text-sepia/70 font-body">Extracting and cataloguing text</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

      {/* Table of Contents */}
      <aside className="lg:col-span-4">
        {!learningData ? (
          <div className="toc-sidebar p-8 flex flex-col items-center justify-center text-center min-h-[320px] sticky top-6">
            <div className="size-14 rounded-md emboss-border bg-walnut flex items-center justify-center mb-6">
              <span className="font-display text-2xl text-gold">§</span>
            </div>

            <h2 className="font-display text-2xl font-semibold text-ivory mb-2">
              Add a Volume
            </h2>

            <p className="text-sepia text-sm font-body mb-8 max-w-xs leading-relaxed">
              Place a PDF upon the desk. Nova will bind it into an interactive study edition.
            </p>

            <label className="cursor-pointer">
              <span className="btn-leather">Select PDF</span>
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {error && (
              <p className="text-red-300/90 text-sm mt-6 font-body max-w-xs">{error}</p>
            )}
          </div>
        ) : (
          <div className="toc-sidebar p-6 sticky top-6">
            <div className="mb-6 pb-6 border-b border-gold/10">
              <p className="chapter-label mb-2">Table of Contents</p>
              <h2 className="font-display text-xl font-semibold text-ivory">
                Learning Path
              </h2>
              <p className="text-sepia/80 text-sm mt-1 font-body">
                Generated from your document
              </p>

              {totalConcepts > 0 && (
                <div className="mt-5">
                  <div className="flex justify-between text-xs text-sepia mb-2 font-body">
                    <span>Progress</span>
                    <span>{completedCount} / {totalConcepts}</span>
                  </div>
                  <div className="progress-refined">
                    <div
                      className="progress-refined-bar"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
              {learningData.sections?.map((section) => (
                <div key={section.id}>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-3 font-display">
                    {section.title}
                  </h3>

                  <div className="space-y-2">
                    {section.concepts?.map((concept) => (
                      <button
                        key={concept.id}
                        type="button"
                        onClick={() => startLesson(concept)}
                        className={`toc-entry w-full text-left p-4 ${
                          activeConcept?.id === concept.id ? 'toc-entry-active' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-body font-medium text-ivory/90 text-sm">
                            {concept.name}
                          </span>

                          {progress[concept.id]?.status === 'completed' && (
                            <span className="text-gold text-sm" aria-label="Completed">✓</span>
                          )}
                        </div>

                        <p className="text-xs text-sepia/70 mt-2 line-clamp-2 font-body leading-relaxed">
                          {concept.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* Main reading spread */}
      <div className="lg:col-span-8">

        {!activeConcept ? (
          <div className="lesson-spread min-h-[560px] flex flex-col items-center justify-center text-center p-12 animate-page-in">
            <div className="size-20 rounded-full emboss-border bg-antique/50 flex items-center justify-center mb-8">
              <span className="font-display text-4xl text-bronze">✦</span>
            </div>

            <h2 className="font-display text-3xl font-semibold text-ink mb-3">
              The Reading Desk
            </h2>

            <p className="text-ink/60 max-w-md font-body leading-relaxed">
              Upload a PDF and choose a chapter from the table of contents to open your lesson.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lesson-spread p-8 md:p-10"
          >
            <header className="mb-10 pb-8 border-b border-leather/15">
              <span className="inline-block px-3 py-1 rounded-md text-xs uppercase tracking-[0.15em] text-bronze bg-antique/60 border border-leather/10 font-display mb-4">
                Active Lesson
              </span>

              <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-3">
                {activeConcept.name}
              </h1>

              <p className="text-ink/60 font-body leading-relaxed max-w-2xl">
                {activeConcept.description}
              </p>
            </header>

            {!lesson ? (
              <div className="py-20 flex flex-col items-center">
                <div className="spinner-refined mb-5" />
                <p className="text-ink/50 font-body">Composing your lesson…</p>
              </div>
            ) : (
              <div className="space-y-8">

                <section className="lesson-inner p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold text-ink mb-4">
                    Explanation
                  </h3>

                  <div className="text-ink/85 leading-[1.75] whitespace-pre-wrap font-body text-[1.05rem]">
                    {lesson.explanation}
                  </div>
                </section>

                <section className="lesson-inner p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold text-ink mb-4">
                    Check Your Understanding
                  </h3>

                  <p className="mb-6 text-ink/90 font-body leading-relaxed">
                    {lesson.question}
                  </p>

                  <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Write your reflections here…"
                    className="input-parchment h-36"
                  />

                  <button
                    type="button"
                    onClick={handleEvaluate}
                    disabled={evaluating || !userAnswer.trim()}
                    className="mt-5 btn-leather"
                  >
                    {evaluating ? 'Reviewing…' : 'Submit Answer'}
                  </button>

                  <AnimatePresence>
                    {feedback && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`mt-6 p-5 rounded-md border ${
                          feedback.isPassed
                            ? 'bg-antique/80 border-gold/30'
                            : 'bg-parchment/90 border-leather/20'
                        }`}
                      >
                        <h4 className="font-display font-semibold text-ink mb-2">
                          {feedback.status}
                        </h4>

                        <p className="text-sm text-ink/75 font-body leading-relaxed">
                          {feedback.feedback}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>

              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

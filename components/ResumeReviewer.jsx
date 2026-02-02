"use client"

import React, { useState, useRef, useEffect } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import InsightsModule from './InsightsModule'
import AnalysisDashboard from './AnalysisDashboard'

export default function ResumeReviewer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const v = pdfjsLib.version || '5.4.530';
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${v}/build/pdf.worker.min.mjs`
    }
  }, [])

  const [file, setFile] = useState(null)
  const [pdfDoc, setPdfDoc] = useState(null)
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [parsing, setParsing] = useState(false)
  const [error, setError] = useState(null)
  const [analysisData, setAnalysisData] = useState(null)
  const [recruiterMode, setRecruiterMode] = useState(false)
  const [inputMode, setInputMode] = useState('upload')
  const [pastedText, setPastedText] = useState('')
  const canvasRef = useRef(null)

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0]
    handleFile(selectedFile)
    event.target.value = '' // Reset input to allow re-uploading the same file
  }

  const handleFile = (selectedFile) => {
    if (!selectedFile) return

    const isPdf = selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')
    const isDocx = selectedFile.name.toLowerCase().endsWith('.docx')

    if (isPdf || isDocx) {
      if (isDocx) {
         setError('DOCX parsing coming soon. Please use PDF for now.')
         return
      }
      setFile(selectedFile)
      setError(null)
      setAnalysisData(null)
      setRecruiterMode(false)
      loadPdf(selectedFile)
    } else {
      setError('Please select a valid PDF file.')
    }
  }

  const onDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFile = e.dataTransfer.files[0]
    handleFile(droppedFile)
  }

  const loadPdf = async (file) => {
    setLoading(true)
    setError(null)
    try {
      const arrayBuffer = await file.arrayBuffer()
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdf = await loadingTask.promise
      setPdfDoc(pdf)
      setNumPages(pdf.numPages)
      setCurrentPage(1)
      await renderPage(1, pdf)
    } catch (err) {
      console.error('Error loading PDF:', err)
      setError('Failed to load PDF. ' + (err.message || ''))
    } finally {
      setLoading(false)
    }
  }

  const handleAnalyze = async () => {
    if (inputMode === 'upload' && (!file || !pdfDoc)) return
    if (inputMode === 'paste' && !pastedText.trim()) return
    
    setParsing(true)
    setRecruiterMode(false)
    setAnalysisData(null)
    setError(null)

    try {
      // 1. Get text
      let fullText = ''
      if (inputMode === 'upload') {
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          const page = await pdfDoc.getPage(i)
          const textContent = await page.getTextContent()
          const pageText = textContent.items.map(item => item.str).join(' ')
          fullText += pageText + '\n'
        }
      } else {
        fullText = pastedText
      }

      // 2. Call API
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: fullText }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Analysis failed')
      }

      const data = await response.json()
      setAnalysisData(data)
    } catch (err) {
      console.error('Analysis error:', err)
      setError(err.message || 'Failed to analyze resume. Please check your API key.')
    } finally {
      setParsing(false)
    }
  }

  const renderPage = async (pageNum, pdf = pdfDoc) => {
    if (!pdf || !canvasRef.current) return

    try {
      const page = await pdf.getPage(pageNum)
      const viewport = page.getViewport({ scale: 1.5 })
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      
      if (!context) {
        throw new Error('Failed to get 2D context from canvas')
      }

      canvas.height = viewport.height
      canvas.width = viewport.width

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      }
      await page.render(renderContext).promise
    } catch (err) {
      console.error('Error rendering page:', err)
      setError('Error rendering PDF page: ' + (err.message || ''))
    }
  }

  useEffect(() => {
    if (pdfDoc) {
      renderPage(currentPage)
    }
  }, [currentPage, pdfDoc])

  const goToPrevPage = () => {
    if (currentPage <= 1) return
    setCurrentPage((prev) => prev - 1)
  }

  const goToNextPage = () => {
    if (currentPage >= numPages) return
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Upload and controls */}
      <div className="p-8 bg-zinc-950/50 backdrop-blur-xl rounded-3xl border border-white/10 ring-1 ring-inset ring-white/5 shadow-2xl">
        {/* Input Mode Selector */}
        <div className="flex items-center gap-4 mb-8 p-1 bg-white/5 rounded-xl w-fit border border-white/10">
          <button 
            onClick={() => setInputMode('upload')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${inputMode === 'upload' ? 'bg-white text-black shadow-lg' : 'text-white/40 hover:text-white'}`}
          >
            UPLOAD_PDF
          </button>
          <button 
            onClick={() => setInputMode('paste')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${inputMode === 'paste' ? 'bg-white text-black shadow-lg' : 'text-white/40 hover:text-white'}`}
          >
            PASTE_TEXT
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex-1 w-full">
            {inputMode === 'upload' ? (
              <label 
                onDragOver={onDragOver}
                onDrop={onDrop}
                className="group relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-zinc-400 font-mono">
                    <span className="font-bold text-white uppercase tracking-tight">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-zinc-500 font-mono">PDF (MAX. 10MB)</p>
                </div>
                <input type="file" className="hidden" accept="application/pdf" onChange={onFileChange} aria-label="Upload resume PDF" />
              </label>
            ) : (
              <textarea
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                placeholder="Paste your resume text here for instant analysis..."
                className="w-full h-32 p-4 bg-white/5 border-2 border-dashed border-white/10 rounded-2xl text-white font-mono text-xs focus:border-blue-500/50 focus:outline-none transition-all resize-none placeholder:text-zinc-600"
              />
            )}
          </div>

          {inputMode === 'upload' && pdfDoc && (
            <div className="flex flex-col items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage <= 1}
                  className="size-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full disabled:opacity-30 transition-colors"
                  aria-label="Previous page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <span className="text-xs font-mono font-bold w-20 text-center text-blue-400">
                  {currentPage} / {numPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage >= numPages}
                  className="size-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full disabled:opacity-30 transition-colors"
                  aria-label="Next page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-mono flex items-center gap-3">
             <span className="size-2 rounded-full bg-red-500 animate-pulse" />
             ERROR: {error}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Preview Area */}
          <div className="flex-1 relative group">
            <div className="w-full overflow-hidden bg-zinc-900 rounded-2xl border border-white/5 min-h-[600px] flex justify-center shadow-inner relative">
              {inputMode === 'upload' ? (
                <>
                  <canvas ref={canvasRef} className={`max-w-full shadow-2xl transition-all duration-700 ease-in-out ${recruiterMode ? 'blur-[1px] brightness-75' : 'grayscale hover:grayscale-0'}`} />
                  
                  {recruiterMode && file && !parsing && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {/* Mock Heatmap Blobs */}
                      <div className="absolute top-[15%] left-[10%] size-32 bg-red-500/30 blur-3xl rounded-full animate-pulse" />
                      <div className="absolute top-[25%] left-[20%] size-24 bg-orange-500/20 blur-2xl rounded-full" />
                      <div className="absolute top-[60%] right-[15%] size-40 bg-blue-500/10 blur-3xl rounded-full" />
                      
                      {/* Scanned Indicators */}
                      <div className="absolute top-[12%] left-0 w-full h-px bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-scan" />
                      
                      {/* Annotations */}
                      <div className="absolute top-[18%] left-[5%] p-2 bg-red-500/20 border border-red-500/30 backdrop-blur-md rounded text-[8px] font-mono text-red-300">
                          POINT_OF_FAILURE: NO_METRICS_FOUND
                      </div>
                      <div className="absolute top-[28%] right-[10%] p-2 bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md rounded text-[8px] font-mono text-emerald-300">
                          HIGH_ATTENTION: SENIOR_ROLE
                      </div>
                    </div>
                  )}
                  
                  {!file && !loading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 gap-4">
                      <div className="size-16 rounded-full border-2 border-zinc-800 flex items-center justify-center animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 opacity-20">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">Waiting for data...</span>
                    </div>
                  )}

                  {loading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 animate-progress origin-left" />
                      </div>
                      <span className="mt-4 font-mono text-[10px] text-blue-400 uppercase tracking-widest">Initialising_Stream...</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full p-8 font-mono text-[10px] text-white/40 overflow-y-auto max-h-[600px] leading-relaxed whitespace-pre-wrap">
                  {pastedText || '// PASTE_DATA_TO_PREVIEW_STREAM'}
                </div>
              )}
            </div>
          </div>

          {/* Analysis Sidebar */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 flex-1 min-h-[400px] flex flex-col">
              <h2 className="text-xs font-mono font-bold text-white/40 mb-6 flex items-center gap-2 uppercase tracking-tighter">
                <span className="size-1 bg-blue-500 rounded-full" />
                Live Analysis
              </h2>
              
              {!(inputMode === 'upload' ? file : pastedText.trim()) ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-30">
                  <p className="text-[10px] font-mono leading-relaxed">
                    {inputMode === 'upload' ? 'UPLOAD_RESUME_TO' : 'PASTE_RESUME_TO'}<br/>START_REASONING_ENGINE
                  </p>
                </div>
              ) : (
                <div className="space-y-6 flex-1">
                  {parsing ? (
                    <div className="space-y-4 animate-pulse">
                       {[1,2,3].map(i => (
                         <div key={i} className="h-4 bg-white/5 rounded-full w-full" />
                       ))}
                       <p className="text-[10px] font-mono text-blue-400 text-center pt-4">AI_THINKING...</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-mono">
                          <span className="text-white/40 uppercase">Parser status</span>
                          <span className="text-emerald-400">SUCCESS</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-full" />
                        </div>
                      </div>

                      <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                        <p className="text-[11px] leading-relaxed text-blue-300 font-mono">
                          System ready. Press analyze to trigger semantic reasoning engine.
                        </p>
                      </div>

                      <div className="space-y-4 opacity-50">
                        <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Expected metrics:</h4>
                        <div className="grid grid-cols-2 gap-2">
                           {['ATS', 'SKILLS', 'RECRUITER', 'MARKET'].map(m => (
                             <div key={m} className="p-2 border border-white/5 rounded bg-white/5 text-[9px] font-mono text-white/40">
                                {m} --%
                             </div>
                           ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <button 
                disabled={!(inputMode === 'upload' ? (file && pdfDoc) : pastedText.trim()) || parsing}
                onClick={handleAnalyze}
                className="w-full mt-6 py-4 bg-white text-black text-xs font-mono font-bold rounded-xl hover:bg-blue-400 transition-all active:scale-95 disabled:opacity-20 disabled:grayscale uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                {parsing ? 'Processing...' : 'Analyze Resume'}
              </button>

              {analysisData && (
                <button 
                  onClick={() => setRecruiterMode(!recruiterMode)}
                  className={`w-full mt-3 py-3 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest transition-all border ${recruiterMode ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' : 'bg-white/5 border-white/10 text-white/40 hover:text-white'}`}
                >
                  {recruiterMode ? 'Disable Recruiter View' : 'Enable Recruiter View'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <InsightsModule data={analysisData} parsing={parsing} />

      <AnalysisDashboard data={analysisData} onUpdate={() => {}} />

      <style jsx global>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </div>
  )
}

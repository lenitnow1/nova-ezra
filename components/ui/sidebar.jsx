'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

const SidebarCtx = createContext(null)

function useSidebarCtx() {
  const ctx = useContext(SidebarCtx)
  if (!ctx) throw new Error('Sidebar components must be used within <Sidebar>')
  return ctx
}

export function Sidebar({ children, open: openProp, defaultOpen = false, onOpenChange }) {
  const triggerRef = useRef(null)
  const lastFocusedRef = useRef(null)
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = openProp !== undefined
  const open = isControlled ? openProp : uncontrolledOpen

  const setOpen = useCallback(
    (v) => {
      const next = typeof v === 'function' ? v(open) : v
      if (!isControlled) setUncontrolledOpen(next)
      onOpenChange?.(next)
    },
    [isControlled, onOpenChange, open]
  )

  // remember last focus to restore when closing
  useEffect(() => {
    if (open) return
    // on close, restore focus
    const el = lastFocusedRef.current
    if (el && typeof el.focus === 'function') {
      try { el.focus() } catch {}
    }
  }, [open])

  const value = useMemo(() => ({ open, setOpen, triggerRef, lastFocusedRef }), [open, setOpen])

  return <SidebarCtx.Provider value={value}>{children}</SidebarCtx.Provider>
}

export function SidebarTrigger({ asChild = false, children, className = '', ...props }) {
  const { open, setOpen, triggerRef, lastFocusedRef } = useSidebarCtx()
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      ref={triggerRef}
      aria-haspopup="dialog"
      aria-expanded={open}
      onClick={(e) => {
        lastFocusedRef.current = e.currentTarget
        setOpen((o) => !o)
      }}
      className={
        className ||
        'inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md transition-colors'
      }
      {...props}
    >
      {children ?? (
        <span className="flex items-center gap-2">
          {/* Hamburger icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white/80">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="hidden sm:inline">Menu</span>
        </span>
      )}
    </Comp>
  )
}

export function SidebarContent({ children, side = 'left', title = 'Navigation' }) {
  const { open, setOpen } = useSidebarCtx()
  const contentRef = useRef(null)

  // Close on ESC
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab') {
        // very small focus trap
        const focusable = contentRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  // Focus first focusable on open
  useEffect(() => {
    if (!open) return
    const id = requestAnimationFrame(() => {
      const focusable = contentRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable && typeof focusable.focus === 'function') focusable.focus()
    })
    return () => cancelAnimationFrame(id)
  }, [open])

  // Lock body scroll while sidebar is open
  useEffect(() => {
    if (!open) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  if (!open) return null

  const sideClass = side === 'left' ? 'left-0 -translate-x-0' : 'right-0 translate-x-0'
  const enterFrom = side === 'left' ? '-translate-x-full' : 'translate-x-full'

  return (
    <div aria-hidden={!open}>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[900] bg-black/60"
        onClick={() => setOpen(false)}
      />
      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={contentRef}
        className={
          `fixed top-0 ${side === 'left' ? 'left-0' : 'right-0'} z-[1000] h-dvh w-72 sm:w-80 border-r bg-black text-white shadow-xl transition-transform duration-300 will-change-transform ` +
          `${enterFrom} data-[open=true]:translate-x-0`
        }
        data-open={true}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <div className="text-sm font-semibold tracking-widest uppercase text-white/70">{title}</div>
            <button
              className="inline-flex size-8 items-center justify-center rounded-md hover:bg-white/10"
              aria-label="Close sidebar"
              onClick={() => setOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-auto p-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function SidebarHeader({ className = '', children }) {
  return <div className={`px-3 py-2 text-xs uppercase tracking-wider text-white/50 ${className}`}>{children}</div>
}

export function SidebarFooter({ className = '', children }) {
  return <div className={`mt-auto px-3 py-3 border-t border-white/10 ${className}`}>{children}</div>
}

export function SidebarGroup({ className = '', children, label }) {
  return (
    <div className={`mt-2 ${className}`}>
      {label ? <div className="px-3 pb-1 text-[11px] font-medium uppercase tracking-wider text-white/40">{label}</div> : null}
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  )
}

export function SidebarItem({ className = '', icon, children, href = '#', onClick }) {
  const content = (
    <div className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors ${className}`}>
      {icon ? <span className="opacity-80">{icon}</span> : null}
      <span>{children}</span>
    </div>
  )
  return href ? (
    <a href={href} onClick={onClick} className="outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-md">
      {content}
    </a>
  ) : (
    <button onClick={onClick} className="w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 rounded-md">
      {content}
    </button>
  )
}

export function SidebarSeparator() {
  return <div className="my-2 h-px w-full bg-white/10" />
}

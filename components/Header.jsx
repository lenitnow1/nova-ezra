'use client'

import Link from 'next/link'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'

export default function Header({ headerRef }) {
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

  return (
    <header ref={headerRef} className="relative z-10 border-b border-gold/10">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-anim="nav">
          <div className="size-9 rounded-md emboss-border bg-gradient-to-br from-leather to-walnut flex items-center justify-center shadow-[0_0_20px_rgba(200,169,107,0.15)]">
            <span className="font-display text-lg font-bold text-gold">N</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-[0.12em] uppercase text-ivory/90 group-hover:text-gold transition-colors duration-300">
            Nova
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', href: '/' },
            { label: 'Features', href: '/learn-more' },
            { label: 'Reading Room', href: '/dashboard' },
            { label: 'About', href: '/learn-more' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-sm text-sepia hover:text-ivory transition-colors duration-300"
              data-anim="nav"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div data-anim="nav" className="hidden sm:flex items-center gap-3">
          {hasClerk ? (
            <>
              <SignedOut>
                <SignInButton mode="modal">
                  <button type="button" className="btn-embossed text-sm py-2 px-4">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: 'ring-1 ring-gold/30',
                    },
                  }}
                />
              </SignedIn>
            </>
          ) : null}
        </div>
      </div>
    </header>
  )
}

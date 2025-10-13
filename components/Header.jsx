'use client'

import { SignedIn, SignedOut, UserButton, SignInButton, useUser } from '@clerk/nextjs'
import { Sidebar, SidebarTrigger, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarItem, SidebarSeparator } from '@/components/ui/sidebar'

export default function Header({ headerRef }) {
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  const { user } = useUser?.() ?? { user: null }
  return (
    <header ref={headerRef} className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3" data-anim="nav">
          {/* Sidebar (shadcn-style) */}
          <Sidebar>
            <SidebarTrigger className=" inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md transition-colors mr-2" />
            <SidebarContent title="Menu">
              <SidebarHeader>Quick Access</SidebarHeader>
              <SidebarGroup>
                <SidebarItem href="#">Home</SidebarItem>
                <SidebarItem href="#features">Features</SidebarItem>
                <SidebarItem href="#about">About</SidebarItem>
                <SidebarItem href="#contact">Contact</SidebarItem>
                <SidebarItem href="/dashboard">Dashboard</SidebarItem>
                <SidebarItem href="/learn-more">Learn More</SidebarItem>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarFooter>
                {hasClerk ? (
                  <>
                    <SignedOut>
                      <SignInButton mode="modal">
                        <button className="inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20">
                          Sign In
                        </button>
                      </SignInButton>
                    </SignedOut>
                    <SignedIn>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-sm text-white/70">Account</span>
                          <UserButton afterSignOutUrl="/" />
                        </div>
                        <div className="text-xs text-white/60 truncate" title={user?.primaryEmailAddress?.emailAddress || ''}>
                          {user?.primaryEmailAddress?.emailAddress}
                        </div>
                      </div>
                    </SignedIn>
                  </>
                ) : (
                  <a
                    href="/learn-more"
                    className="inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20"
                  >
                    Launch App
                  </a>
                )}
              </SidebarFooter>
            </SidebarContent>
          </Sidebar>
          <div className="size-8 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[0_0_24px_rgba(99,102,241,0.45)]" />
          <span className="font-semibold tracking-widest uppercase text-sm text-white/80">Nova</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/70">
          {['Home', 'Features', 'About', 'Contact'].map((item) => (
            <a key={item} href="/learn-more" className="hover:text-blue-700 transition-colors" data-anim="nav">
              {item}
            </a>
          ))}
          <a href="/learn-more" className="hover:text-white transition-colors" data-anim="nav">Learn More</a>
        </nav>
        <div data-anim="nav" className="hidden sm:flex items-center gap-3">
          {hasClerk ? (
            <>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </>
          ) : null}
        </div>
      </div>
    </header>
  )
}

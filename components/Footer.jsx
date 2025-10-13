export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10/0">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Nova — Made with Next.js & GSAP by ezra muwowo
      </div>
    </footer>
  )
}

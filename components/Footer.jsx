export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold/10 mt-8">
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        <p className="font-display text-sm tracking-[0.15em] uppercase text-sepia/80">
          Nova Digital Library
        </p>
        <p className="mt-2 text-sm text-sepia/60 font-body">
          © {new Date().getFullYear()} — Crafted with care by Ezra Muwowo
        </p>
      </div>
    </footer>
  )
}

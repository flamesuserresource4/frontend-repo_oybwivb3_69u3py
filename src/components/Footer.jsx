export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} Website Maniacs. All rights reserved.</div>
        <div className="text-white/60 text-sm">Built with passion for orange, grey, white and black.</div>
      </div>
    </footer>
  )
}

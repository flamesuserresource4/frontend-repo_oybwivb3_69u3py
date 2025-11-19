import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_8px_30px_rgba(255,115,0,0.45)]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">
                Website <span className="text-orange-400">Maniacs</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center gap-2 rounded-lg bg-orange-500 text-black font-medium px-4 py-2 hover:bg-orange-400 transition"
              >
                Get a Quote
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-2 pt-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 text-black font-medium px-4 py-2 hover:bg-orange-400 transition"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

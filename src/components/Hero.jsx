import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [showSpline, setShowSpline] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowSpline(true), 300) // defer heavy load a bit
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="relative min-h-[88vh] pt-28">
      <div className="absolute inset-0">
        {showSpline ? (
          <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,115,0,0.12),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_40%)]" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
            >
              Maniacally good websites that convert
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-white/80 max-w-xl"
            >
              We design and build blazing-fast websites, online shops, AI-powered experiences, and bold brands. Orange-fueled. Results-obsessed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#builder" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 text-black font-semibold px-5 py-3 hover:bg-orange-400 transition">
                Build your package
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-xl bg-white/5 text-white px-5 py-3 hover:bg-white/10 transition">
                Explore services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                ['Websites', 'Next.js • React • SEO'],
                ['Shops', 'Shopify • Headless • CRO'],
                ['AI', 'Chatbots • Automation'],
                ['Branding', 'Identity • Guidelines'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-white/90">
                  <div className="text-sm font-semibold">{title}</div>
                  <div className="text-xs text-white/60">{desc}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

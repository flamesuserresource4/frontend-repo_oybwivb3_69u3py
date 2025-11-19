import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Rocket, Cpu, ShoppingCart } from 'lucide-react'
import { useRef } from 'react'

export default function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="story" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y1, opacity }} className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl" />
        <motion.div style={{ y: y2, opacity }} className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,115,0,0.12),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_40%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">Interactive story</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Drag the idea. Watch it evolve.</h2>
          <p className="mt-2 text-white/70 max-w-2xl mx-auto">Move the core concept around and see how we layer design, tech and growth to turn sparks into shipping product.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div drag dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }} dragElastic={0.2}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/80 p-6 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.03),transparent)]" />
            <div className="flex items-center gap-3">
              <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-white font-semibold">Your core idea</div>
            </div>
            <p className="mt-3 text-white/70 text-sm">Drag this card. We build from it — no templates, only tailored systems.</p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[{icon: Rocket, title:'Design system', desc:'Tokens, components, motion'}, {icon: Cpu, title:'AI + automation', desc:'Chatbots, workflows'}, {icon: ShoppingCart, title:'Commerce', desc:'Checkout, subscriptions'}].map(({icon:Icon, title, desc}) => (
                <motion.div key={title} whileHover={{ y: -4 }} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-white">
                    <Icon className="w-4 h-4 text-orange-400" />
                    <div className="text-sm font-semibold">{title}</div>
                  </div>
                  <div className="text-xs text-white/70">{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <ol className="space-y-4">
              {[
                ['Frame the problem','We map the experience and define success metrics.'],
                ['Prototype fast','Clickable flows and visuals within days, not weeks.'],
                ['Build for speed','Accessible, SEO-friendly, edge-optimized.'],
                ['Launch + learn','We track, iterate and grow what works.']
              ].map(([t, d], i) => (
                <motion.li key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-orange-400 text-xs font-semibold">Chapter {i+1}</div>
                  <div className="text-white font-semibold">{t}</div>
                  <div className="text-sm text-white/70">{d}</div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

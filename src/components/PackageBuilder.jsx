import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Wand2, CircleDollarSign, Percent } from 'lucide-react'

const CATALOG = [
  { id: 'base', label: 'Base website setup', price: 1000, desc: 'Landing page, fast hosting, analytics', required: true },
  { id: 'about', label: 'About us section', price: 350, desc: 'Team, story, trust signals' },
  { id: 'contact', label: 'Contact page', price: 350, desc: 'Form, CRM forward, map' },
  { id: 'shop', label: 'Online shop', price: 3000, desc: 'Catalog, checkout, integrations' },
  { id: 'blog', label: 'Blog / articles', price: 700, desc: 'CMS, tags, SEO' },
  { id: 'ai', label: 'AI assistant', price: 1600, desc: 'Lead qualifier or support bot' },
  { id: 'brand', label: 'Brand starter kit', price: 1200, desc: 'Logo, palette, type, social kit' },
  { id: 'seo', label: 'SEO + performance', price: 900, desc: 'Schema, speed, tracking' },
]

const DISCOUNTS = [
  { id: 'bundle10', label: 'Bundle 10%', value: 0.1, condition: (items) => items.length >= 3 },
  { id: 'partner15', label: 'Partner 15%', value: 0.15, condition: (items) => items.find(i => i.id === 'shop') },
]

export default function PackageBuilder() {
  const [selected, setSelected] = useState(['base'])
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const items = useMemo(() => CATALOG.filter(i => selected.includes(i.id)), [selected])
  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price, 0), [items])
  const discount = useMemo(() => {
    let d = 0
    DISCOUNTS.forEach(rule => { if (rule.condition(items)) d = Math.max(d, rule.value) })
    return Math.round(subtotal * d)
  }, [items, subtotal])
  const total = subtotal - discount

  const toggle = (id) => {
    if (id === 'base') return // required
    setSelected((cur) => cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id])
  }

  const next = () => setStep((s) => Math.min(3, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  const handleSend = async () => {
    setSubmitted(true)
    await new Promise(r => setTimeout(r, 900))
  }

  return (
    <section id="builder" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_25%_10%,rgba(255,115,0,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300"><Wand2 className="w-3.5 h-3.5" /> Build your package</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Click together your perfect scope</h2>
          <p className="mt-2 text-white/70">Transparent pricing. Smart discounts. A shareable summary at the end.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-white font-semibold">Step 1 · Essentials</div>
                  <p className="text-sm text-white/70">Start with the base and add key pages.</p>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {CATALOG.slice(0, 4).map((i) => (
                      <button key={i.id} onClick={() => toggle(i.id)}
                        className={`text-left rounded-xl border p-4 transition ${selected.includes(i.id) ? 'border-orange-400/50 bg-orange-500/10' : 'border-white/10 bg-black/30 hover:bg-white/5'}`}>
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-white font-medium">{i.label}</div>
                          <div className="text-orange-400 text-sm">R{i.price.toLocaleString()}</div>
                        </div>
                        <div className="text-xs text-white/60">{i.desc}</div>
                        {i.required && <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-white/60"><Check className="w-3 h-3 text-orange-400" /> Required</div>}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-white font-semibold">Step 2 · Superpowers</div>
                  <p className="text-sm text-white/70">Add AI, content, branding and performance.</p>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {CATALOG.slice(4).map((i) => (
                      <button key={i.id} onClick={() => toggle(i.id)}
                        className={`text-left rounded-xl border p-4 transition ${selected.includes(i.id) ? 'border-orange-400/50 bg-orange-500/10' : 'border-white/10 bg-black/30 hover:bg-white/5'}`}>
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-white font-medium">{i.label}</div>
                          <div className="text-orange-400 text-sm">R{i.price.toLocaleString()}</div>
                        </div>
                        <div className="text-xs text-white/60">{i.desc}</div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-white font-semibold">Step 3 · Review & Share</div>
                  <p className="text-sm text-white/70">Preview your scope. Send to us to lock a call.</p>
                  <div className="mt-4 space-y-2">
                    {items.map(i => (
                      <div key={i.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm">
                        <div className="text-white/90">{i.label}</div>
                        <div className="text-white/60">R{i.price.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between">
              <div className="text-white/60 text-sm">Step {step} of 3</div>
              <div className="flex gap-2">
                <button disabled={step===1} onClick={prev} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white disabled:opacity-40">Back</button>
                {step<3 ? (
                  <button onClick={next} className="inline-flex items-center gap-2 rounded-lg bg-orange-500 text-black font-semibold px-4 py-2 hover:bg-orange-400">
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button onClick={handleSend} className="inline-flex items-center gap-2 rounded-lg bg-orange-500 text-black font-semibold px-4 py-2 hover:bg-orange-400">
                    Send summary
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="sticky top-24 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold">Your estimate</div>
                <CircleDollarSign className="w-4 h-4 text-orange-400" />
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between text-white/80"><span>Subtotal</span><span>R{subtotal.toLocaleString()}</span></div>
                <div className="flex justify-between text-white/60"><span className="inline-flex items-center gap-1">Discount <Percent className="w-3.5 h-3.5" /></span><span>-R{discount.toLocaleString()}</span></div>
                <div className="flex justify-between text-white font-semibold text-lg"><span>Total</span><span>R{total.toLocaleString()}</span></div>
              </div>
              <div className="mt-4 text-xs text-white/60">Auto-discounts apply when you bundle or include an online shop.</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-white/5 p-6">
              {!submitted ? (
                <div>
                  <div className="text-white font-semibold">Get the summary</div>
                  <p className="text-sm text-white/70">We’ll email you a detailed scope with timelines.</p>
                  <form onSubmit={(e)=>{e.preventDefault();handleSend();}} className="mt-3 space-y-2">
                    <input required placeholder="Your email" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <button className="w-full rounded-lg bg-orange-500 text-black font-semibold px-4 py-2 hover:bg-orange-400">Send me a copy</button>
                  </form>
                </div>
              ) : (
                <div className="text-sm text-white/80">Done! We’ll be in touch soon with a tailored proposal.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

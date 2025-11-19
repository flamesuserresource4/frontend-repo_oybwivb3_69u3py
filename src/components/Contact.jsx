import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Demo only: mimic async submit
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! We’ll be in touch within 24h.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">Contact</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Tell us about your project</h2>
            <p className="mt-2 text-white/70">Fill out the form and we’ll schedule a quick discovery call.</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {['2-4 week sprints', 'Fixed pricing', 'CMS training', 'Ongoing support'].map((b) => (
                <div key={b} className="rounded-xl bg-white/5 border border-white/10 p-4 text-white/80 text-sm">{b}</div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70">Budget</label>
              <select className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option className="bg-slate-900">$3k–$5k</option>
                <option className="bg-slate-900">$5k–$10k</option>
                <option className="bg-slate-900">$10k–$25k</option>
                <option className="bg-slate-900">$25k+</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70">Project details</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us what you’re building..." />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button className="rounded-xl bg-orange-500 text-black font-semibold px-5 py-3 hover:bg-orange-400 transition" type="submit">Send request</button>
              <div className="text-sm text-white/70">{status}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

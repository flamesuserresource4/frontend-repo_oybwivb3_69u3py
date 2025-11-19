import { CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  {
    title: 'Discover',
    desc: 'We dig into goals, audience and opportunities, then define success.',
  },
  {
    title: 'Design',
    desc: 'Rapid prototyping and visual design to align on look and feel.',
  },
  {
    title: 'Build',
    desc: 'We develop fast, accessible, SEO-friendly experiences.',
  },
  {
    title: 'Launch + Grow',
    desc: 'Iterate with analytics, CRO and growth experiments.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">How we work</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">A clear, collaborative process</h2>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Step {i + 1}
              </div>
              <div className="mt-3 text-white font-semibold">{s.title}</div>
              <p className="text-sm text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 text-black font-semibold px-5 py-3 hover:bg-orange-400 transition">
            Let’s get started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

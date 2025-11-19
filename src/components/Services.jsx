import { Code, ShoppingCart, BrainCircuit, Palette, PenTool, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Websites',
    desc: 'High-performance websites built with modern stacks and SEO baked-in.',
    tag: 'Design + Build'
  },
  {
    icon: ShoppingCart,
    title: 'Online Shops',
    desc: 'Conversion-focused ecommerce with Shopify and headless storefronts.',
    tag: 'Ecommerce'
  },
  {
    icon: BrainCircuit,
    title: 'AI Solutions',
    desc: 'Chatbots, automations and AI-powered customer experiences.',
    tag: 'Automation'
  },
  {
    icon: Palette,
    title: 'Branding',
    desc: 'Identity, styleguides and brand systems that scale with you.',
    tag: 'Identity'
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    desc: 'Marketing assets, pitch decks and visuals that pop.',
    tag: 'Creative'
  },
  {
    icon: Rocket,
    title: 'And more',
    desc: 'Performance audits, SEO, CRO, analytics, and ongoing support.',
    tag: 'Growth'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(255,115,0,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,115,0,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">What we do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Specialised, end-to-end delivery</h2>
          <p className="mt-2 text-white/70 max-w-2xl">From strategy to ship — we handle design, build and launch as one expert team.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:border-orange-400/40 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-orange-500/10 blur-3xl group-hover:bg-orange-500/20 transition" />
              <div className="flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-black">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-white/60">{tag}</div>
              </div>
              <div className="mt-4 text-lg font-semibold text-white">{title}</div>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

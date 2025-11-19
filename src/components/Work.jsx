import { motion } from 'framer-motion'

const works = [
  {
    title: 'Shopify Fashion',
    img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop',
    tags: ['Ecommerce', 'Design', 'Build']
  },
  {
    title: 'AI Support Bot',
    img: 'https://images.unsplash.com/photo-1538349940574-9aa1f7f1a026?q=80&w=1600&auto=format&fit=crop',
    tags: ['AI', 'Automation']
  },
  {
    title: 'Fintech Rebrand',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop',
    tags: ['Branding', 'Design']
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-300">Selected work</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Recent projects</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/5 text-white px-4 py-2 hover:bg-white/10 transition">Start yours</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((w) => (
            <motion.a key={w.title} href="#contact" whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={w.img} alt={w.title} className="h-64 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <div className="text-white font-semibold">{w.title}</div>
                <div className="text-xs text-white/70">{w.tags.join(' • ')}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

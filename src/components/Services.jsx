import { motion } from 'framer-motion'
import { Scale, ScrollText, Building2, Home, Users, Landmark } from 'lucide-react'

const items = [
  { icon: ScrollText, title: 'Contracts, Agreements & Notices' },
  { icon: Building2, title: 'Corporate Law & Business Advisory' },
  { icon: Home, title: 'Property Laws & Conveyancing' },
  { icon: Users, title: 'Mediation & Negotiation' },
  { icon: Landmark, title: 'Succession & Inheritance' },
  { icon: Scale, title: 'Family Laws & Divorce' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-neutral-50 dark:bg-[#0B213A]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1A2F] dark:text-white">Our Services</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">What we do for you</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-2xl p-6 border border-neutral-200/70 dark:border-white/10 bg-white dark:bg-[#0F2747] shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-[#C7A76A]/0 via-[#C7A76A]/0 to-[#C7A76A]/0 group-hover:from-[#C7A76A]/10 group-hover:via-transparent group-hover:to-transparent transition-colors" />
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-[#C7A76A]/15 text-[#C7A76A] group-hover:scale-105 transition-transform">
                  <item.icon />
                </div>
                <div className="font-medium text-[#0A1A2F] dark:text-white">{item.title}</div>
              </div>
              <div className="mt-4 text-sm text-neutral-600/90 dark:text-neutral-300/90">
                Tailored guidance backed by decades of experience and a client-first approach.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

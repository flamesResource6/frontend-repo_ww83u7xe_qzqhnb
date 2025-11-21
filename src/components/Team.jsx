import { motion } from 'framer-motion'

const team = [
  { name: 'Adv. Shekhar Heda', role: 'Managing Partner', blurb: 'Over three decades of strategic legal counsel and advocacy.' },
  { name: 'Adv. Jane Doe', role: 'Senior Associate', blurb: 'Corporate and contract law specialist.' },
  { name: 'Adv. John Smith', role: 'Property Law', blurb: 'Conveyancing and real-estate matters.' },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 bg-white dark:bg-[#0A1A2F]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1A2F] dark:text-white">Legal Eagles</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Who works with you</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-[#0F2747] backdrop-blur shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="h-40 bg-gradient-to-tr from-[#C7A76A]/30 to-transparent" />
              <div className="p-6">
                <div className="text-lg font-semibold text-[#0A1A2F] dark:text-white">{member.name}</div>
                <div className="text-sm text-[#C7A76A]">{member.role}</div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{member.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

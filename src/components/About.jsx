import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white dark:bg-[#0A1A2F]">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-[#0A1A2F] dark:text-white"
          >
            Firm’s Foundation
          </motion.h2>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-neutral-700 dark:text-neutral-200 leading-relaxed"
          >
            Founded in 1989 by Adv. Shekhar Heda in Kalyan (Thane), Heda & Associates began with a vision to provide transparent, ethical, and client-focused legal services. Over the years, the firm expanded its expertise across multiple domains including business advisory, property laws, contracts, mediation, and family law. The foundation of our practice lies in trust, integrity, and a relentless focus on client success. Today, led by a team of experienced professionals, we continue to deliver strategic counsel and practical solutions that help individuals and businesses make informed legal decisions with confidence.
          </motion.p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-[#C7A76A]/20 to-transparent blur-2xl" />
          <div className="relative rounded-2xl border border-neutral-200 dark:border-white/10 p-6 bg-white dark:bg-[#0F2747] shadow-xl">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { label: 'Founded', value: '1989' },
                { label: 'Advisory Years', value: '35+' },
                { label: 'Practice Areas', value: '6+' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-[#0A1A2F] dark:text-white">{stat.value}</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-300">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#C7A76A]/50 to-transparent" />
            <p className="mt-6 text-sm text-neutral-700/90 dark:text-neutral-200/90">
              1989 → 2019 → Today: A continuous progression of learning, experience, and modern legal practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

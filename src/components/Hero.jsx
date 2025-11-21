import { motion } from 'framer-motion'

export default function Hero({ brand }) {
  return (
    <section id="hero" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A2F] via-[#0F2747] to-[#0A1A2F]" />
        <motion.div
          initial={{ scale: 1.1, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 12, ease: 'easeOut', repeat: Infinity, repeatType: 'mirror' }}
          className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_20%_0%,rgba(199,167,106,0.15),transparent),radial-gradient(800px_400px_at_90%_30%,rgba(255,255,255,0.06),transparent)]"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white"
        >
          A Trusted Legal Advisory Since 1989
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-4 text-lg sm:text-xl text-neutral-200/90"
        >
          Helping you make informed legal decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#contact" className="px-6 py-3 rounded-md bg-[#C7A76A] text-[#0A1A2F] font-semibold shadow-[0_10px_30px_rgba(199,167,106,0.25)] hover:shadow-[0_12px_40px_rgba(199,167,106,0.35)] transition-all">
            Book a Consultation
          </a>
          <a href="#services" className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}

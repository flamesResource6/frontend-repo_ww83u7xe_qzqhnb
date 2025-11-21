import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-neutral-50 dark:bg-[#0B213A]">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A1A2F] dark:text-white">Let’s Connect</h2>
          <div className="mt-6 grid gap-3 text-neutral-700 dark:text-neutral-200">
            <div className="flex items-center gap-3"><Mail className="text-[#C7A76A]" size={18}/> consult@hedaassociates.com</div>
            <div className="flex items-center gap-3"><Phone className="text-[#C7A76A]" size={18}/> +91 8484982712</div>
            <div className="flex items-center gap-3"><MapPin className="text-[#C7A76A]" size={18}/> Dhanori Office • Viman Nagar Office</div>
          </div>

          <div className="mt-6 flex gap-4 text-neutral-700 dark:text-neutral-200">
            <a className="hover:text-[#C7A76A]" href="https://linkedin.com/company/heda-associates" target="_blank" rel="noreferrer"><Linkedin /></a>
            <a className="hover:text-[#C7A76A]" href="http://www.instagram.com/heda_associates" target="_blank" rel="noreferrer"><Instagram /></a>
            <a className="hover:text-[#C7A76A]" href="https://www.facebook.com/heda.associates" target="_blank" rel="noreferrer"><Facebook /></a>
            <a className="hover:text-[#C7A76A]" href="https://www.youtube.com/@hedaassociates" target="_blank" rel="noreferrer"><Youtube /></a>
          </div>
        </div>

        <motion.form
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will get back to you shortly.'); }}
          className="rounded-2xl p-6 border border-neutral-200/70 dark:border-white/10 bg-white dark:bg-[#0F2747] shadow"
        >
          <div className="grid gap-4">
            <input required placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-neutral-50 dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white placeholder-neutral-500" />
            <input required type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-neutral-50 dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white placeholder-neutral-500" />
            <textarea rows="4" placeholder="How can we help?" className="w-full px-4 py-3 rounded-md bg-neutral-50 dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white placeholder-neutral-500" />
            <button className="mt-2 px-6 py-3 rounded-md bg-[#C7A76A] text-[#0A1A2F] font-semibold hover:opacity-95 shadow-[0_10px_30px_rgba(199,167,106,0.25)]">Send Message</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

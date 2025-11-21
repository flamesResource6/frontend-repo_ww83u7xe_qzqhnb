import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark, brand }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    if (dark) html.classList.add('dark')
    else html.classList.remove('dark')
  }, [dark])

  const toggle = () => setDark((d) => !d)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-[#0A1A2F]/70 border-b border-white/20 dark:border-white/5' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-[#C7A76A] to-amber-500 shadow ring-1 ring-black/10" />
            <div className="leading-tight">
              <div className="font-semibold text-[#0A1A2F] dark:text-white">{brand?.name || 'Heda & Associates'}</div>
              <div className="text-xs text-neutral-600 dark:text-neutral-300 hidden sm:block">Since 1989</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 hover:text-[#0A1A2F] dark:text-neutral-200 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md border border-transparent hover:border-neutral-300 dark:hover:border-white/20 text-neutral-700 dark:text-neutral-200">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md text-neutral-700 dark:text-neutral-200">
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2" aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-md text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/10">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

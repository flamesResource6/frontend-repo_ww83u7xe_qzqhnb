import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'

const brand = {
  name: 'Heda & Associates',
  tagline: 'Helping you make informed legal decisions. Since 1989.',
  colors: {
    primary: '#0A1A2F',
    secondary: '#FFFFFF',
    accent: '#C7A76A',
    neutral: '#2E2E2E'
  }
}

export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A1A2F] selection:bg-[#C7A76A]/40 selection:text-[#0A1A2F]">
      <Navbar dark={dark} setDark={setDark} brand={brand} />

      <main className="pt-16">
        <Hero brand={brand} />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>

      <a href="#contact" className="fixed bottom-6 right-6 px-5 py-3 rounded-full bg-[#C7A76A] text-[#0A1A2F] font-semibold shadow-lg hover:shadow-xl transition-shadow">
        Book Consultation
      </a>
    </div>
  )
}

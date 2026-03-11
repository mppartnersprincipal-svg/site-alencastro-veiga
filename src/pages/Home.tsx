import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PracticeAreas from '@/components/sections/PracticeAreas'
import WhyUs from '@/components/sections/WhyUs'
import About from '@/components/sections/About'
import Timeline from '@/components/sections/Timeline'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Skip-to-content: visível apenas no foco do teclado (acessibilidade) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-body focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <PracticeAreas />
        <WhyUs />
        <About />
        <Timeline />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LandingHero from '@/components/landing/LandingHero'
import Features from '@/components/landing/Features'
import Testimonials from '@/components/landing/Testimonials'
import ContactCTA from '@/components/landing/ContactCTA'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <LandingHero />
        <Features />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

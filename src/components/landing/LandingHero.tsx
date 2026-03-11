import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

export default function LandingHero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="/images/foto-025.jpg"
          alt="Equipe Alencastro Veiga & Advogados"
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-heading font-bold leading-tight"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
        >
          Escritório de Advocacia com <span className="text-accent">atendimento humano</span> e<br />direito sob medida
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 mt-6 text-lg leading-relaxed"
        >
          Mais de 27 anos cuidando de famílias e sucessões na região Centro-Oeste.
          Conte com uma equipe boutique que entende sua necessidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/5562999720077?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20servi%C3%A7os."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-highlight-500 text-white px-8 py-4 rounded-full font-body font-semibold text-base hover:bg-highlight-600 transition-all duration-300 shadow-lg"
          >
            <Calendar size={18} />
            Marcar Consulta
          </a>

          <button
            onClick={scrollToFeatures}
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300"
          >
            Ver diferenciais
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-1"
      >
        <span className="font-body text-xs tracking-widest uppercase">scroll</span>
        <ArrowRight size={20} className="rotate-90 animate-bounce" />
      </motion.div>
    </section>
  )
}

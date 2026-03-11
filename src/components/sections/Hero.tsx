import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 28,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToAreas = () => {
    document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image — parallax via GSAP ScrollTrigger */}
      <div className="absolute inset-0">
        <img
          ref={bgRef}
          src="/images/foto-025.jpg"
          alt="Equipe Alencastro Veiga & Advogados"
          className="w-full h-full object-cover object-top scale-110"
          fetchPriority="high"
        />
        {/* Overlay escuro forte à esquerda (onde fica o texto) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/[0.97] via-primary-700/[0.88] to-primary-500/[0.45]" />
        {/* Escurecimento vertical sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-transparent to-primary-800/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute top-40 right-40 w-32 h-32 rounded-full border border-white" />
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full border border-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-24 pb-20">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-4 py-2 rounded-full text-sm font-body font-medium mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-highlight-500 animate-pulse" />
            Desde 1997 em Goiânia | OAB/GO 10.070 e 20.818
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Advocacia especializada em{' '}
            <span className="text-accent">Direito das Famílias</span>{' '}
            e Sucessões
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-white/85 text-lg leading-relaxed mb-10 max-w-xl"
          >
            Atendimento personalizado e estratégias jurídicas sob medida para cada caso. Escritório boutique que trata cada demanda com propósito e humanidade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5562999720077?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica%20para%20discutir%20minha%20situa%C3%A7%C3%A3o.%20Aguardo%20retorno."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-highlight-500 text-white hover:bg-highlight-600 px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              Marcar Consulta
            </a>
            <button
              onClick={scrollToAreas}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300"
            >
              Conheça nossas áreas
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { value: '+27', label: 'Anos de atuação' },
              { value: '100%', label: 'Dedicação personalizada' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading font-bold text-2xl text-white">{stat.value}</p>
                <p className="font-body text-xs text-white/70 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAreas}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1"
        aria-label="Rolar para baixo"
      >
        <span className="font-body text-xs tracking-widest uppercase">Explorar</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.button>
    </section>
  )
}

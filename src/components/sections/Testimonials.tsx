import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Passar por um divórcio é muito difícil, mas a equipe do escritório me acolheu com humanidade e cuidado em cada etapa. Me senti segura e amparada durante todo o processo.',
    author: 'Júlia M.',
    context: 'Divórcio e partilha de bens',
  },
  {
    quote:
      'O inventário da minha família foi resolvido de forma ágil e sem conflitos. A clareza com que nos orientaram em cada decisão foi fundamental para chegarmos a um acordo justo.',
    author: 'Carlos A.',
    context: 'Inventário extrajudicial',
  },
  {
    quote:
      'Sempre que precisei de orientação, fui atendida com prontidão e respeito. Senti que meu caso era realmente importante para elas, não apenas mais um processo.',
    author: 'Fernanda S.',
    context: 'Guarda e alimentos',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-primary-500 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-400/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm font-medium text-accent bg-white/10 px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Depoimentos
          </span>
          <h2
            className="font-heading font-bold text-white mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            O que dizem nossos clientes
          </h2>
          <p className="font-body text-primary-100 max-w-xl mx-auto text-lg leading-relaxed">
            Histórias reais de pessoas que confiaram a nós os momentos mais delicados de suas vidas.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-highlight-400 rounded-full" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 flex flex-col hover:bg-white/15 transition-colors duration-300"
            >
              {/* Aspas decorativas */}
              <span
                aria-hidden="true"
                className="absolute top-5 right-6 font-heading font-bold text-7xl text-white/10 leading-none select-none"
              >
                "
              </span>

              {/* Texto do depoimento */}
              <blockquote className="font-body text-white/90 text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </blockquote>

              {/* Separador */}
              <div className="mt-6 pt-5 border-t border-white/15">
                <p className="font-heading font-semibold text-white text-sm">{t.author}</p>
                <p className="font-body text-primary-200 text-xs mt-0.5">{t.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  {
    year: '1997',
    title: 'Fundação do Escritório',
    description:
      'Maria Thereza Alencastro Veiga funda o escritório em Goiânia, com foco em Direito das Famílias e atendimento personalizado.',
  },
  {
    year: '2000s',
    title: 'Consolidação em Sucessões',
    description:
      'Expansão da atuação para Direito de Sucessões, com cases complexos de inventário, testamento e planejamento patrimonial.',
  },
  {
    year: '2010s',
    title: 'Novos Horizontes',
    description:
      'Incorporação do Direito Securitário e Responsabilidade Civil ao portfólio, ampliando a proteção jurídica oferecida às famílias.',
  },
  {
    year: '2020',
    title: 'União de Especializações',
    description:
      'Katyusse Karlla integra o escritório, unindo expertises e fortalecendo a capacidade técnica e o atendimento boutique.',
  },
  {
    year: 'Hoje',
    title: '+27 Anos de Propósito',
    description:
      'Um escritório consolidado, reconhecido pelo atendimento humanizado e pela excelência técnica nas áreas que mais impactam a vida das famílias.',
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm font-medium text-highlight-500 bg-highlight-50 px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Nossa História
          </span>
          <h2
            className="font-heading font-bold text-primary-500 mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Uma trajetória construída com propósito
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent rounded-full" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1 md:max-w-[calc(50%-2rem)]">
                    <div className={`bg-warm-gray-50 border border-warm-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-300 will-change-transform ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="inline-block font-heading font-bold text-highlight-500 text-sm mb-2 bg-highlight-50 px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                      <h3 className="font-heading font-semibold text-primary-500 text-base mb-2 mt-1">
                        {milestone.title}
                      </h3>
                      <p className="font-body text-gray-500 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Ponto central */}
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-primary-500 border-4 border-white shadow-md items-center justify-center flex-shrink-0 z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Espaço oposto (para alinhar o grid) */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

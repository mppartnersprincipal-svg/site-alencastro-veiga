import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Clock, Heart, Target, Lock, Scale } from 'lucide-react'

const differentials = [
  {
    icon: Users,
    title: 'Atendimento Boutique',
    description:
      'Não trabalhamos com volume. Cada cliente recebe atenção individualizada e estratégias construídas especificamente para sua situação.',
  },
  {
    icon: Clock,
    title: '+27 Anos de Experiência',
    description:
      'Desde 1997 em Goiânia, com histórico consolidado nas áreas de Família, Sucessões e Responsabilidade Civil.',
  },
  {
    icon: Heart,
    title: 'Abordagem Humanizada',
    description:
      'Compreendemos que questões jurídicas familiares envolvem emoções. Atuamos com sensibilidade e respeito em cada etapa.',
  },
  {
    icon: Target,
    title: 'Estratégias Personalizadas',
    description:
      'Elaboramos soluções jurídicas sob medida, considerando os aspectos legais e as particularidades de cada família.',
  },
  {
    icon: Lock,
    title: 'Sigilo e Confiança',
    description:
      'Total confidencialidade no tratamento das informações, em conformidade com o Código de Ética da OAB e a LGPD.',
  },
  {
    icon: Scale,
    title: 'Atuação Multidisciplinar',
    description:
      'Cobrimos Direito das Famílias, Sucessões, Tutela, Curatela e Responsabilidade Civil — todas as frentes que sua família pode precisar.',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-warm-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm font-medium text-highlight-500 bg-highlight-50 px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Nossos Diferenciais
          </span>
          <h2
            className="font-heading font-bold text-primary-500 mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Por que nos escolher?
          </h2>
          <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Mais do que um escritório de advocacia — somos parceiros na proteção do que mais importa para você e sua família.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent rounded-full" />
          </div>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary-200/60 transition-all duration-300 will-change-transform"
              >
                {/* Ícone */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="font-heading font-semibold text-primary-500 text-base mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

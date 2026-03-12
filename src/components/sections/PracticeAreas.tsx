import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Scale, ScrollText, Shield, FileText, Check, MessageCircle } from 'lucide-react'

const areas = [
  {
    icon: Scale,
    title: 'Direito das Famílias',
    description:
      'Atuamos em todas as demandas que envolvem relações familiares, sempre priorizando o diálogo, a proteção dos direitos e o bem-estar de todos os envolvidos — especialmente dos filhos.',
    highlight: 'Processos conduzidos com sensibilidade e foco no melhor interesse de todos.',
    services: [
      'Divórcio e Dissolução de União Estável',
      'Guarda, Convivência e Pensão Alimentícia',
      'Reconhecimento e Dissolução de União Estável',
      'Adoção',
      'Pacto Antenupcial',
    ],
    color: 'from-primary-500 to-secondary',
  },
  {
    icon: ScrollText,
    title: 'Direito de Sucessões',
    description:
      'Cuidamos do planejamento sucessório e da partilha de bens com respeito, ética e sensibilidade, buscando sempre soluções ágeis que minimizem conflitos familiares.',
    highlight: 'Soluções eficientes que respeitam a vontade do testador e protegem os herdeiros.',
    services: [
      'Inventário e Partilha (judicial e extrajudicial)',
      'Testamento',
    ],
    color: 'from-secondary to-tertiary',
  },
  {
    icon: Shield,
    title: 'Tutela, Curatela e Tomada de Decisão Apoiada',
    description:
      'Atuamos na proteção jurídica de menores e adultos que necessitam de representação legal ou apoio para tomada de decisões.',
    highlight: 'Preservamos a dignidade e a autonomia das pessoas representadas.',
    services: [
      'Tutela de Menores',
      'Curatela',
      'Tomada de Decisão Apoiada',
    ],
    color: 'from-tertiary to-accent',
  },
  {
    icon: FileText,
    title: 'Direito Securitário e Responsabilidade Civil',
    description:
      'Atuamos em todas as modalidades de seguros: vida, veículo, residencial, empresarial, aparelhos eletrônicos e condominial. Atendemos seguradoras e segurados, circunstância que traduz a amplitude do conhecimento do escritório. Responsabilidade civil, indenizações e ressarcimento de danos, incluindo acidentes de trânsito.',
    highlight: 'Atendimento a seguradoras e segurados — amplitude técnica que gera soluções completas.',
    services: [
      'Seguros: vida, veículo, residencial, empresarial, eletrônicos e condominial',
      'Responsabilidade Civil e Indenizações',
      'Ressarcimento por Danos em Acidentes de Trânsito',
    ],
    color: 'from-primary-500 to-tertiary',
  },
  {
    icon: FileText,
    title: 'Demandas Extrajudiciais',
    description:
      'Consultoria e assessoria para resolução de conflitos relacionados ao Direito das Famílias e Sucessões de forma administrativa, sem necessidade de judicialização.',
    highlight: 'Acordos, mediação e elaboração de contratos com agilidade e discrição.',
    services: [
      'Acordos e Mediação Extrajudicial',
      'Elaboração de Contratos',
      'Assessoria Preventiva',
    ],
    color: 'from-secondary to-primary-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function PracticeAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="areas" className="py-24 bg-gradient-to-br from-primary-50 via-white to-warm-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm font-medium text-highlight-500 bg-highlight-50 px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Nossa Expertise
          </span>
          <h2 className="font-heading font-bold text-primary-500 mb-5" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Áreas de Atuação
          </h2>
          <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Atuamos com excelência em questões jurídicas sensíveis, sempre com atendimento humanizado e estratégias personalizadas.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent rounded-full" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {areas.map((area, index) => {
            const Icon = area.icon
            const isLast = index === areas.length - 1
            return (
              <motion.div
                key={area.title}
                variants={cardVariants}
                className={`group relative bg-white/75 backdrop-blur-md border border-white/70 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col will-change-transform ${
                  isLast ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                {/* Top accent bar — sempre visível */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${area.color}`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-primary-500 text-lg mb-3 leading-snug">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
                  {area.description}
                </p>

                {/* Services list */}
                <ul className="space-y-2 mb-5 flex-1">
                  {area.services.map((service) => (
                    <li key={service} className="flex items-start gap-2">
                      <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <div className="mt-auto pt-4 border-t border-warm-gray-200">
                  <p className="font-body text-xs text-primary-400 italic leading-relaxed">
                    {area.highlight}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/5562999720077?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica%20para%20discutir%20minha%20situa%C3%A7%C3%A3o.%20Aguardo%20retorno."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-highlight-500 hover:bg-highlight-600 text-white px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 will-change-transform"
          >
            <MessageCircle size={18} />
            Agendar consulta sobre sua área
          </a>
        </motion.div>
      </div>
    </section>
  )
}

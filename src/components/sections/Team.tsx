import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const partners = [
  {
    name: 'Maria Thereza Alencastro Veiga',
    oab: 'OAB/GO 10.070',
    bio: 'Advogada atuante desde 1997, especializada em Direito das Famílias e Sucessões. Reconhecida pelo atendimento humanizado e pela construção de estratégias jurídicas personalizadas, especialmente em casos de alta complexidade emocional e patrimonial.',
    photo: '/images/foto-020.jpg',
    specialties: ['Direito das Famílias', 'Direito de Sucessões', 'Planejamento Patrimonial'],
    linkedin: undefined as string | undefined,
  },
  {
    name: 'Katyusse Karlla de Oliveira Monteiro Alencastro Veiga',
    oab: 'OAB/GO 20.818',
    bio: 'Advogada com atuação consolidada nas áreas do Direito de Seguros e de Responsabilidade Civil (em acidentes de trânsito), e na área do Direito das Famílias. Destaca-se pela abordagem técnica refinada e pela capacidade de conduzir demandas complexas com sensibilidade e eficiência.',
    photo: '/images/foto-015.jpg',
    specialties: ['Direito das Famílias', 'Responsabilidade Civil', 'Direito Securitário'],
    linkedin: undefined as string | undefined,
  },
]

const associates = [
  {
    name: 'Isabella',
    oab: 'OAB/GO —',
    bio: 'Em breve mais informações sobre este profissional.',
    specialties: [] as string[],
    linkedin: undefined as string | undefined,
  },
  {
    name: 'Vitória',
    oab: 'OAB/GO —',
    bio: 'Em breve mais informações sobre este profissional.',
    specialties: [] as string[],
    linkedin: undefined as string | undefined,
  },
  {
    name: 'Pedro',
    oab: 'OAB/GO —',
    bio: 'Em breve mais informações sobre este profissional.',
    specialties: [] as string[],
    linkedin: undefined as string | undefined,
  },
  {
    name: 'Simone',
    oab: 'OAB/GO —',
    bio: 'Em breve mais informações sobre este profissional.',
    specialties: [] as string[],
    linkedin: undefined as string | undefined,
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="equipe" className="py-24 bg-gradient-to-b from-warm-gray-100 to-white">
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
            Profissionais
          </span>
          <h2
            className="font-heading font-bold text-primary-500 mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            A Equipe
          </h2>
          <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Profissionais dedicadas, com décadas de experiência acumulada e comprometidas com o atendimento humanizado.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent rounded-full" />
          </div>
        </motion.div>

        {/* Sócias */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {partners.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-white/70 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">
                {/* Photo */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-body font-medium px-3 py-1.5 rounded-full">
                      {member.oab}
                    </div>
                    {member.linkedin ? (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-primary-500 transition-all duration-200">
                        <LinkedInIcon />
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-primary-500 text-lg leading-snug mb-3">{member.name}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-5">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span key={specialty} className="bg-highlight-50 text-highlight-500 text-xs font-body font-medium px-3 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advogados Associados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="font-heading font-semibold text-primary-500 text-xl mb-2">Advogados Associados</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {associates.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-white/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 will-change-transform"
              >
                {/* Photo placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary-300/50 flex items-center justify-center">
                    <span className="font-heading font-bold text-primary-500 text-2xl">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-primary-500 text-base mb-1">{member.name}</h4>
                  <p className="font-body text-xs text-primary-300 mb-3">{member.oab}</p>
                  <p className="font-body text-xs text-gray-400 leading-relaxed italic">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team group photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96 shadow-xl">
            <img
              src="/images/foto-025.jpg"
              alt="Equipe Alencastro Veiga & Advogados Associados"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/70 to-primary-400/30 flex items-center">
              <div className="px-10 max-w-lg">
                <p className="font-heading font-bold text-white text-2xl leading-snug mb-3">
                  Uma equipe comprometida com o que mais importa para você
                </p>
                <p className="font-body text-white/80 text-sm leading-relaxed">
                  Boutique, artesanal e personalizado — cada caso é único.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

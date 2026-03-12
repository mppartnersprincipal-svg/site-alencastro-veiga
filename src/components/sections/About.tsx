import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Star, Target, Shield, Award, Users } from 'lucide-react'
import ImageCarousel from './ImageCarousel'
import AnimatedCounter from '@/components/AnimatedCounter'

const values = [
  { icon: Shield, label: 'Ética e Transparência' },
  { icon: Heart, label: 'Humanização no Atendimento' },
  { icon: Star, label: 'Excelência Técnica' },
  { icon: Target, label: 'Personalização das Estratégias' },
  { icon: Award, label: 'Compromisso com Resultados' },
  { icon: Users, label: 'Atendimento Boutique' },
]


export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="py-24 bg-warm-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image carousel */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <ImageCarousel />

            {/* Years badge stays in front of carousel */}
            <div className="absolute -top-6 -left-6 lg:-left-8 bg-primary-500/90 backdrop-blur-md border border-primary-400/40 text-white rounded-2xl p-5 shadow-xl">
              <AnimatedCounter
                value={27}
                suffix="+"
                duration={2}
                className="font-heading font-bold text-3xl leading-none block"
              />
              <p className="font-body text-xs text-primary-200 mt-1">anos de<br />atuação</p>
            </div>

            {/* Stats row */}
            <div className="absolute bottom-6 left-4 right-4 sm:right-auto flex gap-3">
              {/* Fundado em — valor estático (1997 animando de 0 seria estranho) */}
              <div className="bg-white/80 backdrop-blur-md border border-white/70 rounded-xl px-4 py-3 shadow-lg">
                <p className="font-heading font-bold text-xl text-primary-500">1997</p>
                <p className="font-body text-xs text-gray-500">Fundado em</p>
              </div>
              {/* Anos de experiência — animado */}
              <div className="bg-white/80 backdrop-blur-md border border-white/70 rounded-xl px-4 py-3 shadow-lg">
                <AnimatedCounter
                  value={27}
                  prefix="+"
                  duration={2}
                  className="font-heading font-bold text-xl text-primary-500 block"
                />
                <p className="font-body text-xs text-gray-500">Anos de experiência</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block font-body text-sm font-medium text-highlight-500 bg-highlight-50 px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Quem Somos
            </span>
            <h2
              className="font-heading font-bold text-primary-500 mb-6"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              Sobre o Escritório
            </h2>

            <div className="space-y-4 font-body text-gray-600 leading-relaxed">
              <p>
                O escritório <strong className="text-primary-500">Alencastro Veiga e Advogados Associados</strong> atua desde 1997 em Goiânia, com expertise consolidada em Direito das Famílias e Sucessões, Direito de Seguros, Responsabilidade Civil (em acidente de trânsito).
              </p>
              <p>
                Adotamos uma abordagem boutique, onde cada caso é tratado de forma artesanal e personalizada. <strong className="text-primary-500">Não trabalhamos com volume — trabalhamos com propósito.</strong>
              </p>
              <p>
                Nosso diferencial está no atendimento humanizado e na construção de estratégias jurídicas sob medida, considerando não apenas os aspectos legais, mas também as particularidades emocionais e familiares de cada situação.
              </p>
              <p>
                O escritório tem presença marcante nos Tribunais, sendo de constância a realização de despachos com julgadores, Ministério Público, bem como a realização de sustentações orais.
              </p>
              <p>
                Com atuação em Goiás e demais estados quando necessário, o escritório é conduzido pelas advogadas <strong className="text-primary-500">Maria Thereza Alencastro Veiga</strong> (OAB/GO 10.070) e <strong className="text-primary-500">Katyusse Karlla de Oliveira Monteiro Alencastro Veiga</strong> (OAB/GO 20.818).
              </p>
            </div>

            {/* MVV cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: 'Missão',
                  text: 'Oferecer assessoria jurídica especializada e humanizada, construindo estratégias personalizadas que protegem os direitos dos nossos clientes.',
                },
                {
                  title: 'Visão',
                  text: 'Ser referência regional em advocacia boutique, com excelência técnica e atendimento diferenciado.',
                },
                {
                  title: 'Valores',
                  text: 'Ética, Humanização, Excelência Técnica, Personalização e Compromisso com Resultados.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-5 border border-warm-gray-200 hover:border-primary-300 transition-colors"
                >
                  <h4 className="font-heading font-semibold text-primary-500 text-sm mb-2">{item.title}</h4>
                  <p className="font-body text-xs text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Values chips */}
            <div className="mt-8">
              <p className="font-body text-sm font-medium text-gray-500 mb-3">Nossos valores:</p>
              <div className="flex flex-wrap gap-2">
                {values.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 bg-white border border-warm-gray-200 px-3 py-1.5 rounded-full text-xs font-body text-primary-500"
                  >
                    <Icon size={12} className="text-accent" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

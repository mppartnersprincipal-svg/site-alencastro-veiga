import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ScrollText, CheckCircle2, Scale, Shield, FileText, Calendar } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const services = [
  'Inventário judicial e extrajudicial',
  'Testamento (elaboração, registro e cumprimento)',
  'Arrolamento sumário',
  'Herança e legado',
  'Cessão de direitos hereditários',
  'Partilha de bens (amigável e litigiosa)',
  'Planejamento sucessório e patrimonial',
  'Sobrepartilha',
  'Exclusão de herdeiros e indignidade',
]

const otherAreas = [
  { icon: Scale, title: 'Direito das Famílias', href: '/#areas' },
  { icon: Shield, title: 'Tutela, Curatela e Tomada de Decisão Apoiada', href: '/#areas' },
  { icon: FileText, title: 'Direito Securitário e Responsabilidade Civil', href: '/#areas' },
]

export default function DireitoDeSuccessoes() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-20">

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-10">
          <Link
            to="/#areas"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-500 font-body text-sm transition-colors"
          >
            <ArrowLeft size={15} />
            Voltar às áreas de atuação
          </Link>
        </div>

        {/* Hero section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="/images/direito-sucessoes-hero.jpg"
                alt="Direito de Sucessões — Alencastro Veiga"
                className="w-full h-full object-cover"
                style={{ maxHeight: '420px' }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-highlight-50 flex items-center justify-center flex-shrink-0">
                  <ScrollText size={20} className="text-highlight-500" />
                </div>
                <h1 className="font-heading font-bold text-highlight-500" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                  Direito de Sucessões
                </h1>
              </div>

              <div className="space-y-4 font-body text-gray-600 leading-relaxed text-base">
                <p>
                  O Direito de Sucessões envolve a transmissão de bens, direitos e obrigações após o falecimento de uma pessoa. Nossa equipe atua para garantir que a partilha seja realizada de forma justa e em conformidade com a legislação vigente.
                </p>
                <p>
                  Compreendemos que lidar com questões patrimoniais em momentos de luto é extremamente delicado. Por isso, oferecemos um atendimento acolhedor e eficiente, conduzindo os aspectos jurídicos do processo e orientando sobre as providências necessárias. Além dos processos de inventário, também auxiliamos no planejamento sucessório preventivo, uma ferramenta essencial para evitar conflitos futuros.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Serviços Oferecidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-warm-gray-100 rounded-2xl p-8 mb-10"
          >
            <h2 className="font-heading font-bold text-highlight-500 text-xl mb-6">Serviços Oferecidos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-2">
                  <CheckCircle2 size={17} className="text-highlight-500 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-600">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-primary-50 border border-primary-100 rounded-2xl px-8 py-6 mb-16"
          >
            <p className="font-body text-gray-500 text-sm leading-relaxed italic max-w-xl">
              "Oferecemos soluções ágeis que minimizam conflitos familiares e respeitam fielmente a vontade do autor da herança."
            </p>
            <a
              href="https://wa.me/5562999720077?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Direito%20de%20Sucess%C3%B5es.%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-highlight-500 hover:bg-highlight-600 text-white px-7 py-3 rounded-full font-body font-semibold text-sm transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Calendar size={16} />
              Agendar Consulta
            </a>
          </motion.div>

          {/* Outras Áreas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-heading font-bold text-primary-500 text-xl mb-6">Outras Áreas de Atuação</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherAreas.map(({ icon: Icon, title, href }) => (
                <Link
                  key={title}
                  to={href}
                  className="flex items-center gap-3 bg-white border border-warm-gray-200 hover:border-primary-300 hover:shadow-md rounded-xl px-5 py-4 transition-all duration-200 group"
                >
                  <Icon size={18} className="text-primary-400 flex-shrink-0 group-hover:text-primary-500 transition-colors" />
                  <span className="font-body text-sm text-gray-600 group-hover:text-primary-500 transition-colors leading-snug">{title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

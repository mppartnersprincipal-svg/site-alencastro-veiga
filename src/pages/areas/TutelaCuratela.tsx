import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, CheckCircle2, Scale, ScrollText, FileText, Calendar } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const services = [
  'Tutela de menores (nomeação e prestação de contas)',
  'Tomada de decisão apoiada',
  'Prestação de contas do tutor/curador',
  'Guarda de incapazes',
  'Curatela de pessoas com deficiência',
  'Interdição (quando estritamente necessária)',
  'Remoção e substituição de tutor/curador',
  'Medidas protetivas para idosos',
]

const otherAreas = [
  { icon: Scale, title: 'Direito das Famílias', href: '/#areas' },
  { icon: ScrollText, title: 'Direito de Sucessões', href: '/areas-de-atuacao/direito-de-sucessoes' },
  { icon: FileText, title: 'Direito Securitário e Responsabilidade Civil', href: '/#areas' },
]

export default function TutelaCuratela() {
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

        {/* Hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
              style={{ minHeight: '380px' }}
            >
              <div className="text-center p-10">
                <Shield size={56} className="text-primary-400 mx-auto mb-4" />
                <p className="text-primary-400 font-body text-sm">Imagem em breve</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-highlight-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield size={20} className="text-highlight-500" />
                </div>
                <h1 className="font-heading font-bold text-highlight-500" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                  Tutela, Curatela e Tomada de Decisão Apoiada
                </h1>
              </div>

              <div className="space-y-4 font-body text-gray-600 leading-relaxed text-base">
                <p>
                  A proteção jurídica de pessoas vulneráveis — sejam menores de idade, idosos em condição de vulnerabilidade ou pessoas com deficiência — é uma das áreas mais nobres do Direito. Atuamos com dedicação para garantir que seus direitos sejam preservados e sua dignidade respeitada.
                </p>
                <p>
                  Nossa atuação abrange desde a nomeação de tutores e curadores até o acompanhamento contínuo dessas medidas protetivas. Com a entrada em vigor do Estatuto da Pessoa com Deficiência, a Tomada de Decisão Apoiada ganhou destaque como um instituto que preserva a autonomia da pessoa assistida, e nosso escritório possui ampla experiência nesse campo.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Serviços Oferecidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 mb-10"
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
            className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-6 mb-16"
          >
            <p className="font-body text-gray-500 text-sm leading-relaxed italic max-w-xl">
              "Preservamos a dignidade e a autonomia das pessoas representadas, atuando sempre com ética e humanidade."
            </p>
            <a
              href="https://wa.me/5562999720077?text=Ol%C3%A1!%20Tenho%20interesse%20em%20Tutela%2C%20Curatela%20ou%20Tomada%20de%20Decis%C3%A3o%20Apoiada.%20Gostaria%20de%20agendar%20uma%20consulta."
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
                  className="flex items-center gap-3 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md rounded-xl px-5 py-4 transition-all duration-200 group"
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

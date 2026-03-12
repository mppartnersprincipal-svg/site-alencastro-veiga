import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const schema = z.object({
  nome: z.string().min(3, 'Nome deve ter ao menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(14, 'WhatsApp inválido').max(16),
  area: z.string().min(1, 'Selecione uma área de interesse'),
  mensagem: z.string().optional(),
})

type FormData = z.infer<typeof schema>

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 11) return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  return value
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const whatsappValue = watch('whatsapp', '')

  const areaLabels: Record<string, string> = {
    familia: 'Direito das Famílias',
    sucessoes: 'Direito de Sucessões',
    tutela: 'Tutela / Curatela / Decisão Apoiada',
    securitario: 'Direito Securitário e Responsabilidade Civil',
    outro: 'Outro',
  }

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
    const linhas = [
      `Olá! Me chamo *${data.nome}*.`,
      `Tenho interesse em: *${areaLabels[data.area] ?? data.area}*.`,
      data.mensagem ? `Sobre minha situação: ${data.mensagem}` : '',
      `Meu e-mail: ${data.email}`,
      `Aguardo retorno!`,
    ].filter(Boolean).join('\n')
    const text = encodeURIComponent(linhas)
    window.open(`https://wa.me/5562999720077?text=${text}`, '_blank')
  }

  return (
    <section id="contato" className="py-24 bg-warm-gray-100">
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
            Fale Conosco
          </span>
          <h2
            className="font-heading font-bold text-primary-500 mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Contato
          </h2>
          <p className="font-body text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Entre em contato e agende sua consulta. Respondemos em até 24 horas nos dias úteis.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-primary-500 text-2xl mb-8">
              Como podemos ajudar?
            </h3>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Phone,
                  label: 'WhatsApp',
                  value: '(62) 99972-0077',
                  href: 'https://wa.me/5562999720077',
                },
                {
                  icon: Mail,
                  label: 'E-mail',
                  value: 'contato@alencastroveiga.com.br',
                  href: 'mailto:contato@alencastroveiga.com.br',
                },
                {
                  icon: MapPin,
                  label: 'Localização',
                  value: 'Goiânia, Goiás',
                  href: undefined,
                },
                {
                  icon: Clock,
                  label: 'Horário de Atendimento',
                  value: 'Segunda a sexta, 9h às 18h',
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-body font-medium text-gray-700 hover:text-primary-500 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body font-medium text-gray-700">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-gray-200">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <CheckCircle size={64} className="text-primary-500 mb-5" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-primary-500 text-xl mb-3">
                    Solicitação enviada!
                  </h3>
                  <p className="font-body text-gray-500 leading-relaxed">
                    Obrigado pelo contato. Você será redirecionado para o WhatsApp para iniciar o atendimento.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                      Nome completo <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('nome')}
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray-300 font-body text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all"
                    />
                    {errors.nome && (
                      <p className="mt-1 text-xs text-red-500">{errors.nome.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                        E-mail <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-warm-gray-300 font-body text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                        WhatsApp <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register('whatsapp')}
                        type="tel"
                        placeholder="(62) 99999-9999"
                        value={whatsappValue}
                        onChange={(e) => setValue('whatsapp', formatPhone(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl border border-warm-gray-300 font-body text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all"
                      />
                      {errors.whatsapp && (
                        <p className="mt-1 text-xs text-red-500">{errors.whatsapp.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                      Área de interesse <span className="text-red-400">*</span>
                    </label>
                    <select
                      {...register('area')}
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray-300 font-body text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all bg-white"
                    >
                      <option value="">Selecione uma área...</option>
                      <option value="familia">Direito das Famílias</option>
                      <option value="sucessoes">Direito de Sucessões</option>
                      <option value="tutela">Tutela/Curatela/Decisão Apoiada</option>
                      <option value="securitario">Direito Securitário e Responsabilidade Civil</option>
                      <option value="outro">Outro</option>
                    </select>
                    {errors.area && (
                      <p className="mt-1 text-xs text-red-500">{errors.area.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                      Mensagem <span className="text-gray-400 font-normal">(opcional)</span>
                    </label>
                    <textarea
                      {...register('mensagem')}
                      rows={4}
                      placeholder="Conte-nos brevemente sobre sua situação..."
                      className="w-full px-4 py-3 rounded-xl border border-warm-gray-300 font-body text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-highlight-500 hover:bg-highlight-600 disabled:bg-gray-300 text-white px-6 py-4 rounded-xl font-body font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Solicitação
                      </>
                    )}
                  </button>

                  <p className="text-center font-body text-xs text-gray-400 leading-relaxed">
                    Ao enviar, você concorda com nossa{' '}
                    <a href="/politica-de-privacidade" className="text-primary-400 hover:underline">
                      Política de Privacidade
                    </a>
                    . Seus dados são tratados com total confidencialidade.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

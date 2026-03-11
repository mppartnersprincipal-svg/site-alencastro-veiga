import { ShieldCheck, Users, Clock, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Atendimento personalizado',
    description: 'Cada cliente é único; construímos estratégias jurídicas especificamente para seu caso.'
  },
  {
    icon: ShieldCheck,
    title: 'Ética & Transparência',
    description: 'Processos claros e responsabilidade em todas as etapas.'
  },
  {
    icon: Clock,
    title: 'Mais de 27 anos de experiência',
    description: 'Histórico comprovado em famílias, sucessões e responsabilidade civil.'
  },
  {
    icon: HeartHandshake,
    title: 'Humanização',
    description: 'Apoiamos você não apenas como cliente, mas como pessoa.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-warm-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-primary-500" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Por que escolher o Alencastro Veiga?
          </h2>
          <p className="mt-4 font-body text-gray-600 max-w-2xl mx-auto">
            Um escritório boutique que alia experiência, técnica e empatia para proteger o que mais importa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="text-center px-4">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-500 rounded-full mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-500 mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-gray-600 text-sm">
                  {f.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

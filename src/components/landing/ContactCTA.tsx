import { Phone } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-16 bg-primary-500 text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="font-heading font-bold text-2xl mb-4">Pronto para conversar?</h2>
        <p className="font-body mb-6">
          Agende uma consulta ou tire suas dúvidas agora mesmo via WhatsApp.
        </p>
        <a
          href="https://wa.me/5562999720077?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."          
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-full font-body font-semibold text-base hover:bg-gray-100 transition-all duration-200 shadow-lg"
        >
          <Phone size={18} />
          Marcar Consulta
        </a>
      </div>
    </section>
  )
}

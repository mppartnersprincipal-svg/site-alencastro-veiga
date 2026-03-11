const testimonials = [
  {
    quote: 'O atendimento foi acolhedor e eficiente. Me senti seguro durante todo o processo de divórcio.',
    author: 'Júlia M.'
  },
  {
    quote: 'Resolveram nossa questão sucessória com rapidez e muita sensibilidade. Recomendo sem dúvida.',
    author: 'Carlos A.'
  },
  {
    quote: 'Profissionais atenciosas e competentes; sempre disponíveis para tirar dúvidas.',
    author: 'Fernanda S.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-primary-500" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            O que nossos clientes dizem
          </h2>
        </div>
        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="relative bg-warm-gray-50 rounded-2xl p-8 shadow-lg">
              <p className="font-body text-gray-700 italic leading-relaxed">“{t.quote}”</p>
              <footer className="mt-4 text-right font-body text-sm text-gray-500">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

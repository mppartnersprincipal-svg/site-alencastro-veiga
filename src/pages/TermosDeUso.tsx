import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ArrowLeft } from 'lucide-react'

export default function TermosDeUso() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </Link>

          <h1 className="font-heading font-bold text-primary-500 text-3xl mb-2">Termos de Uso</h1>
          <p className="font-body text-sm text-gray-400 mb-8">Última atualização: março de 2025</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
            <p className="font-body text-sm text-amber-800 leading-relaxed">
              ⚠️ <strong>Aviso de Isenção:</strong> Este site tem caráter exclusivamente informativo e institucional. Não constitui consultoria jurídica, parecer ou aconselhamento legal personalizado. As informações apresentadas não substituem o atendimento com advogado. Cada caso é único e deve ser analisado individualmente.
            </p>
          </div>

          <div className="prose prose-sm max-w-none space-y-8 font-body text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">1. Aceitação dos Termos</h2>
              <p>Ao acessar e utilizar o site do escritório Alencastro Veiga & Advogados Associados, você concorda com os presentes Termos de Uso. Caso não concorde com qualquer disposição destes termos, recomendamos que não utilize este site.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">2. Natureza Informativa</h2>
              <p>As informações disponibilizadas neste site têm caráter exclusivamente informativo e institucional. Não representam consultoria jurídica, parecer legal ou aconselhamento profissional personalizado.</p>
              <p className="mt-3">A utilização das informações contidas neste site não estabelece relação advogado-cliente entre o visitante e o escritório Alencastro Veiga & Advogados Associados.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">3. Propriedade Intelectual</h2>
              <p>Todo o conteúdo deste site, incluindo textos, imagens, logotipos, marcas, layouts e demais elementos, é de propriedade exclusiva do escritório Alencastro Veiga & Advogados Associados ou de seus licenciantes.</p>
              <p className="mt-3">É vedada a reprodução, distribuição, modificação ou uso de qualquer conteúdo sem prévia autorização expressa por escrito.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">4. Limitação de Responsabilidade</h2>
              <p>O escritório não se responsabiliza por:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Decisões tomadas com base nas informações do site;</li>
                <li>Danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso do site;</li>
                <li>Interrupções ou falhas no acesso ao site;</li>
                <li>Conteúdo de sites de terceiros vinculados por links.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">5. Conduta do Usuário</h2>
              <p>O usuário compromete-se a utilizar este site de forma lícita, não realizando atividades que possam prejudicar, sobrecarregar ou comprometer o funcionamento do site ou os direitos de terceiros.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">6. Alterações</h2>
              <p>O escritório reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sendo as alterações efetivas a partir de sua publicação no site. O uso continuado do site após tais alterações implica aceitação dos novos termos.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">7. Legislação Aplicável</h2>
              <p>Estes Termos de Uso são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Goiânia, Goiás, para dirimir quaisquer controvérsias decorrentes destes termos.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">8. Contato</h2>
              <p>Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: <a href="mailto:contato@alencastroveiga.com.br" className="text-primary-500 hover:underline">contato@alencastroveiga.com.br</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

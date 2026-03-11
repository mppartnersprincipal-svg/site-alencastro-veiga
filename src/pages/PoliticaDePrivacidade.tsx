import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ArrowLeft } from 'lucide-react'

export default function PoliticaDePrivacidade() {
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

          <h1 className="font-heading font-bold text-primary-500 text-3xl mb-2">Política de Privacidade</h1>
          <p className="font-body text-sm text-gray-400 mb-8">Última atualização: março de 2025 | Conforme LGPD (Lei nº 13.709/2018)</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
            <p className="font-body text-sm text-amber-800 leading-relaxed">
              ⚠️ <strong>Aviso de Isenção:</strong> Este site tem caráter exclusivamente informativo e institucional. Não constitui consultoria jurídica, parecer ou aconselhamento legal personalizado.
            </p>
          </div>

          <div className="space-y-8 font-body text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">1. Controlador dos Dados</h2>
              <p>O controlador dos dados pessoais coletados neste site é:</p>
              <div className="bg-warm-gray-100 rounded-xl p-4 mt-3 text-sm">
                <p><strong>Alencastro Veiga & Advogados Associados</strong></p>
                <p>E-mail: contato@alencastroveiga.com.br</p>
                <p>Telefone: (62) 99972-0077</p>
                <p>Goiânia, Goiás</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">2. Dados Coletados</h2>
              <p>Coletamos os seguintes dados pessoais quando você preenche nosso formulário de contato:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Nome completo;</li>
                <li>Endereço de e-mail;</li>
                <li>Número de WhatsApp;</li>
                <li>Área jurídica de interesse;</li>
                <li>Mensagem opcional descrevendo sua situação.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">3. Finalidade do Tratamento</h2>
              <p>Os dados são coletados e tratados exclusivamente para:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Responder às solicitações de contato;</li>
                <li>Agendar consultas jurídicas;</li>
                <li>Prestar atendimento jurídico;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">4. Base Legal (LGPD)</h2>
              <p>O tratamento dos dados pessoais é fundamentado em:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Consentimento</strong> (art. 7º, I) — para contato inicial;</li>
                <li><strong>Execução de contrato</strong> (art. 7º, V) — para prestação de serviços jurídicos;</li>
                <li><strong>Cumprimento de obrigação legal</strong> (art. 7º, II) — obrigações do Estatuto da OAB.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">5. Confidencialidade e Sigilo Profissional</h2>
              <p>Todas as informações compartilhadas com o escritório estão protegidas pelo sigilo profissional previsto no Estatuto da Advocacia (Lei nº 8.906/1994) e no Código de Ética e Disciplina da OAB.</p>
              <p className="mt-3">Os dados <strong>não são vendidos, cedidos ou compartilhados</strong> com terceiros, exceto quando necessário para cumprimento de obrigação legal ou ordem judicial.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">6. Retenção dos Dados</h2>
              <p>Os dados são mantidos pelo período necessário à prestação dos serviços jurídicos e pelo prazo mínimo exigido pela legislação aplicável, respeitando os prazos prescricionais.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">7. Seus Direitos (LGPD)</h2>
              <p>Conforme a LGPD, você tem os seguintes direitos em relação aos seus dados:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Confirmação da existência do tratamento;</li>
                <li>Acesso aos dados;</li>
                <li>Correção de dados incompletos ou incorretos;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade dos dados;</li>
                <li>Eliminação dos dados tratados com consentimento;</li>
                <li>Revogação do consentimento.</li>
              </ul>
              <p className="mt-3">Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:contato@alencastroveiga.com.br" className="text-primary-500 hover:underline">contato@alencastroveiga.com.br</a></p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">8. Segurança</h2>
              <p>Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acesso não autorizado, destruição, perda, alteração ou divulgação.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">9. Cookies</h2>
              <p>Para informações sobre o uso de cookies neste site, consulte nossa <Link to="/politica-de-cookies" className="text-primary-500 hover:underline">Política de Cookies</Link>.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">10. Contato e DPO</h2>
              <p>Para questões relacionadas à privacidade e proteção de dados, entre em contato com nosso encarregado (DPO) pelo e-mail: <a href="mailto:contato@alencastroveiga.com.br" className="text-primary-500 hover:underline">contato@alencastroveiga.com.br</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

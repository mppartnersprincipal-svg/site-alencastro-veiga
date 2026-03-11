import { Link } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ArrowLeft } from 'lucide-react'

export default function PoliticaDeCookies() {
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

          <h1 className="font-heading font-bold text-primary-500 text-3xl mb-2">Política de Cookies</h1>
          <p className="font-body text-sm text-gray-400 mb-8">Última atualização: março de 2025</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
            <p className="font-body text-sm text-amber-800 leading-relaxed">
              ⚠️ <strong>Aviso de Isenção:</strong> Este site tem caráter exclusivamente informativo e institucional. Não constitui consultoria jurídica, parecer ou aconselhamento legal personalizado.
            </p>
          </div>

          <div className="space-y-8 font-body text-gray-600 leading-relaxed">
            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">1. O que são Cookies?</h2>
              <p>Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles permitem que o site reconheça seu dispositivo e lembre de suas preferências de navegação.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">2. Tipos de Cookies Utilizados</h2>

              <div className="space-y-4 mt-3">
                <div className="bg-warm-gray-100 rounded-xl p-4">
                  <h3 className="font-heading font-semibold text-primary-500 text-base mb-2">2.1 Cookies Essenciais</h3>
                  <p className="text-sm">Necessários para o funcionamento básico do site. Sem estes cookies, o site não funciona corretamente. Não podem ser desativados.</p>
                  <p className="text-xs text-gray-400 mt-2">Finalidade: Funcionamento técnico | Duração: Sessão</p>
                </div>

                <div className="bg-warm-gray-100 rounded-xl p-4">
                  <h3 className="font-heading font-semibold text-primary-500 text-base mb-2">2.2 Cookies de Desempenho</h3>
                  <p className="text-sm">Coletam informações anônimas sobre como os visitantes utilizam o site, ajudando-nos a melhorar sua experiência.</p>
                  <p className="text-xs text-gray-400 mt-2">Finalidade: Análise de uso | Duração: Até 2 anos | Ativação: Requer consentimento</p>
                </div>

                <div className="bg-warm-gray-100 rounded-xl p-4">
                  <h3 className="font-heading font-semibold text-primary-500 text-base mb-2">2.3 Cookies de Funcionalidade</h3>
                  <p className="text-sm">Permitem que o site lembre de escolhas feitas por você (como idioma ou região) para proporcionar uma experiência mais personalizada.</p>
                  <p className="text-xs text-gray-400 mt-2">Finalidade: Personalização | Duração: Até 1 ano | Ativação: Requer consentimento</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">3. Cookies de Terceiros</h2>
              <p>Este site pode utilizar serviços de terceiros que também definem cookies, incluindo:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li><strong>Google Analytics</strong> — análise de tráfego anônimo;</li>
                <li><strong>Google Fonts</strong> — carregamento de fontes tipográficas;</li>
                <li><strong>WhatsApp</strong> — botão de contato direto.</li>
              </ul>
              <p className="mt-3">Recomendamos consultar as políticas de privacidade desses serviços para mais informações.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">4. Como Gerenciar Cookies</h2>
              <p>Você pode controlar e/ou excluir cookies conforme preferir. Para saber como, consulte as configurações do seu navegador:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li>Google Chrome: Configurações → Privacidade e segurança → Cookies;</li>
                <li>Mozilla Firefox: Configurações → Privacidade e proteção;</li>
                <li>Safari: Preferências → Privacidade;</li>
                <li>Microsoft Edge: Configurações → Cookies e permissões do site.</li>
              </ul>
              <p className="mt-3 text-sm">Atenção: a desativação de cookies essenciais pode afetar o funcionamento do site.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">5. Consentimento</h2>
              <p>Ao continuar navegando neste site após ser informado sobre o uso de cookies, você consente com o uso dos cookies não essenciais, nos termos desta política.</p>
              <p className="mt-3">Você pode retirar seu consentimento a qualquer momento, ajustando as configurações do seu navegador.</p>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-primary-500 text-xl mb-3">6. Mais Informações</h2>
              <p>Para mais informações sobre como tratamos seus dados pessoais, consulte nossa <Link to="/politica-de-privacidade" className="text-primary-500 hover:underline">Política de Privacidade</Link>.</p>
              <p className="mt-3">Em caso de dúvidas, entre em contato: <a href="mailto:contato@alencastroveiga.com.br" className="text-primary-500 hover:underline">contato@alencastroveiga.com.br</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

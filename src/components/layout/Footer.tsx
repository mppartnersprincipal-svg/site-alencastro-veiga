import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Áreas de Atuação', href: '/#areas' },
  { label: 'Sobre o Escritório', href: '/#sobre' },
  { label: 'A Equipe', href: '/#equipe' },
  { label: 'Contato', href: '/#contato' },
]

const legalLinks = [
  { label: 'Termos de Uso', href: '/termos-de-uso' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Política de Cookies', href: '/politica-de-cookies' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      {/* Disclaimer bar */}
      <div className="bg-primary-600 py-3 px-4">
        <p className="text-center text-xs text-primary-200 max-w-5xl mx-auto leading-relaxed">
          ⚠️ Este site tem caráter exclusivamente informativo e institucional. Não constitui consultoria jurídica, parecer ou aconselhamento legal personalizado. As informações apresentadas não substituem o atendimento com advogado. Cada caso é único e deve ser analisado individualmente.
        </p>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Logo + Slogan */}
          <div className="lg:col-span-1">
            <img
              src="/images/logo.webp"
              alt="Alencastro Veiga & Advogados"
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="font-body text-sm text-primary-200 leading-relaxed mt-4 max-w-xs">
              Advocacia com propósito: estratégias jurídicas que protegem o que mais importa.
            </p>
            <p className="font-body text-xs text-primary-300 mt-4">Goiânia, Goiás | Desde 1997</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-5 uppercase tracking-wider">
              Menu Rápido
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-white transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-5 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5562999720077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <Phone size={16} className="text-accent flex-shrink-0" />
                  <span className="font-body text-sm text-primary-200 group-hover:text-white transition-colors">
                    (62) 99972-0077
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@alencastroveiga.com.br"
                  className="flex items-center gap-3 group"
                >
                  <Mail size={16} className="text-accent flex-shrink-0" />
                  <span className="font-body text-sm text-primary-200 group-hover:text-white transition-colors break-all">
                    contato@alencastroveiga.com.br
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-primary-200">Goiânia, Goiás</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-primary-200">Seg–Sex, 9h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social + Legal */}
          <div>
            <h3 className="font-heading font-semibold text-base text-white mb-5 uppercase tracking-wider">
              Redes Sociais
            </h3>
            <div className="flex gap-3 mb-8">
              {[
                { label: 'Instagram', icon: <InstagramIcon /> },
                { label: 'LinkedIn', icon: <LinkedInIcon /> },
                { label: 'Facebook', icon: <FacebookIcon /> },
              ].map(({ label, icon }) => (
                <div key={label} className="relative group/social">
                  <button
                    type="button"
                    aria-label={`${label} — em breve`}
                    className="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center cursor-not-allowed opacity-60 transition-opacity duration-200"
                  >
                    {icon}
                  </button>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-opacity duration-200">
                    Em breve
                  </span>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-sm text-white mb-3 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-xs text-primary-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-400 py-5 px-4">
        <p className="text-center font-body text-xs text-primary-300">
          © {new Date().getFullYear()} Alencastro Veiga & Advogados Associados. Todos os direitos reservados. | OAB/GO 10.070 e 20.818
        </p>
      </div>
    </footer>
  )
}

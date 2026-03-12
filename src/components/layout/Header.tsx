import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import ScrollProgressBar from '@/components/ScrollProgressBar'

const areaLinks = [
  { label: 'Direito das Famílias', href: '/#areas' },
  { label: 'Direito de Sucessões', href: '/areas-de-atuacao/direito-de-sucessoes' },
  { label: 'Tutela, Curatela e Decisão Apoiada', href: '/areas-de-atuacao/tutela-curatela' },
  { label: 'Direito Securitário e Responsabilidade Civil', href: '/#areas' },
]

const navLinks = [
  { label: 'Início', href: '/#home' },
  { label: 'O Escritório', href: '/#sobre' },
  { label: 'Áreas de Atuação', href: '/#areas', dropdown: areaLinks },
  { label: 'Equipe', href: '/#equipe' },
  { label: 'Contato', href: '/#contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
    setMobileAreasOpen(false)
  }, [location.pathname])

  const navigateTo = (href: string) => {
    setIsMobileOpen(false)
    setDropdownOpen(false)

    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      if (isHomePage) {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = href
      }
      return
    }

    window.location.href = href
  }

  const textColor = isScrolled || !isHomePage
    ? 'text-gray-700 hover:text-primary-500'
    : 'text-white hover:text-white/80'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHomePage
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      {(isScrolled || !isHomePage) && <ScrollProgressBar />}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/images/logo.webp"
              alt="Alencastro Veiga & Advogados"
              className={cn(
                'h-12 w-auto object-contain transition-all duration-300',
                isScrolled || !isHomePage ? '' : 'brightness-0 invert'
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                /* Áreas de Atuação — dropdown */
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className={cn(
                      'flex items-center gap-1 font-body font-medium text-sm transition-colors duration-200 relative group',
                      textColor
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn('transition-transform duration-200', dropdownOpen && 'rotate-180')}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-xl border border-warm-gray-100 overflow-hidden z-50"
                      >
                        {link.dropdown.map((area) => (
                          <button
                            key={area.label}
                            onClick={() => navigateTo(area.href)}
                            className="w-full text-left px-5 py-3 font-body text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-colors duration-150 border-b border-warm-gray-100 last:border-0"
                          >
                            {area.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                /* Regular link */
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); navigateTo(link.href) }}
                  className={cn(
                    'font-body font-medium text-sm transition-colors duration-200 relative group',
                    textColor
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/5562999720077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-body bg-highlight-500 text-white hover:bg-highlight-600 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Phone size={15} />
              Marcar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled || !isHomePage ? 'text-primary-500' : 'text-white'
            )}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-warm-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileAreasOpen((v) => !v)}
                      className="w-full flex items-center justify-between px-4 py-3 text-primary-500 font-medium font-body rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        size={15}
                        className={cn('transition-transform duration-200', mobileAreasOpen && 'rotate-180')}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileAreasOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          {link.dropdown.map((area) => (
                            <button
                              key={area.label}
                              onClick={() => navigateTo(area.href)}
                              className="w-full text-left px-8 py-2.5 text-sm text-gray-500 font-body hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                            >
                              {area.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); navigateTo(link.href) }}
                    className="px-4 py-3 text-primary-500 font-medium font-body rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="https://wa.me/5562999720077"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-highlight-500 text-white rounded-full font-medium font-body"
                onClick={() => setIsMobileOpen(false)}
              >
                <Phone size={16} />
                Marcar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

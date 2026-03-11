import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import ScrollProgressBar from '@/components/ScrollProgressBar'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Áreas de Atuação', href: '/#areas' },
  { label: 'Sobre o Escritório', href: '/#sobre' },
  { label: 'A Equipe', href: '/#equipe' },
  { label: 'Contato', href: '/#contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)

    // if this is an anchor on the home page, scroll to it
    if (isHomePage && href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    // otherwise just navigate normally (works from home or other pages)
    window.location.href = href
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative',
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
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={isHomePage ? link.href : '/'}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={cn(
                  'font-body font-medium text-sm transition-colors duration-200 relative group',
                  isScrolled || !isHomePage
                    ? 'text-primary-500 hover:text-primary-400'
                    : 'text-white hover:text-accent'
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5562999720077"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-body transition-all duration-200',
                isScrolled || !isHomePage
                  ? 'bg-highlight-500 text-white hover:bg-highlight-600 shadow-md hover:shadow-lg'
                  : 'bg-highlight-500 text-white hover:bg-highlight-600'
              )}
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
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="px-4 py-3 text-primary-500 font-medium font-body rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
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

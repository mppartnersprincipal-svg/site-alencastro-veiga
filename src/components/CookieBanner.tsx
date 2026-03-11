import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cookie, X } from 'lucide-react'

const STORAGE_KEY = 'av_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(() => {
    return !localStorage.getItem(STORAGE_KEY)
  })

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white border border-warm-gray-200 rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Ícone */}
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <Cookie size={20} className="text-primary-500" />
            </div>

            {/* Texto */}
            <p className="font-body text-sm text-gray-600 leading-relaxed flex-1">
              Utilizamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa{' '}
              <Link
                to="/politica-de-cookies"
                className="text-primary-500 hover:underline font-medium"
              >
                Política de Cookies
              </Link>{' '}
              e{' '}
              <Link
                to="/politica-de-privacidade"
                className="text-primary-500 hover:underline font-medium"
              >
                Política de Privacidade
              </Link>
              .
            </p>

            {/* Botões */}
            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={reject}
                className="flex-1 sm:flex-initial px-4 py-2 rounded-lg font-body text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-warm-gray-100 transition-colors"
              >
                Rejeitar
              </button>
              <button
                type="button"
                onClick={accept}
                className="flex-1 sm:flex-initial px-5 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-body text-sm font-semibold transition-colors shadow-md"
              >
                Aceitar
              </button>
              <button
                type="button"
                onClick={reject}
                aria-label="Fechar"
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

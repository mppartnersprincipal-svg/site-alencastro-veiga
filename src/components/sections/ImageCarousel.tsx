import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/images/foto-020.jpg', // Maria Thereza
  '/images/foto-015.jpg', // Katyusse
  '/images/foto-008.jpg', // ambiente profissional
  '/images/foto-003.jpg', // recepção
]

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: '0%', opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
      <AnimatePresence custom={direction} initial={false} mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="Equipe Alencastro Veiga"
          loading="lazy"
          className="w-full h-full object-cover object-top"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent pointer-events-none" />

      {/* Dots de navegação */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Foto ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

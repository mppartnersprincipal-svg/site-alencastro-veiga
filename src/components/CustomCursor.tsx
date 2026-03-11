import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Não ativar em dispositivos touch
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Esconder cursor nativo
    document.documentElement.style.cursor = 'none'

    // Movimento rápido do ponto
    const moveDot = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3.out' })
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3.out' })

    // Movimento suave do anel (lag intencional)
    const moveRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power2.out' })
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power2.out' })

    const onMove = (e: MouseEvent) => {
      moveDot(e.clientX)
      moveDotY(e.clientY)
      moveRing(e.clientX)
      moveRingY(e.clientY)
    }

    // Efeito de expansão em links e botões
    const onEnterInteractive = () => {
      gsap.to(ring, { scale: 2, opacity: 0.4, duration: 0.2 })
      gsap.to(dot, { scale: 0.5, duration: 0.2 })
    }
    const onLeaveInteractive = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 })
      gsap.to(dot, { scale: 1, duration: 0.2 })
    }

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    window.addEventListener('mousemove', onMove)

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      {/* Ponto central — rápido */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div className="w-2 h-2 rounded-full bg-primary-500" />
      </div>

      {/* Anel externo — lag suave */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-primary-400 opacity-70" />
      </div>
    </>
  )
}

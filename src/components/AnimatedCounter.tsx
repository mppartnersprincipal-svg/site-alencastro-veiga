import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { val: 0 }

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
        onUpdate() {
          el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`
        },
      })
    })

    return () => ctx.revert()
  }, [value, prefix, suffix, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}

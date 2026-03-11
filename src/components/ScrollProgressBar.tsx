import { useScroll, motion } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 via-accent to-highlight-500 origin-left z-10"
    />
  )
}

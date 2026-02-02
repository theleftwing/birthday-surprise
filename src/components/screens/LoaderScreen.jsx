"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function LoaderScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone?.()
    }, 2800) // slightly shorter for better pacing
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center text-center px-6"
    >
      {/* Floating Cake Emoji */}
      <motion.div
        className="text-6xl md:text-7xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        🎂
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 text-xl md:text-2xl font-semibold text-foreground"
      >
        Loading your birthday surprise...
      </motion.p>

      {/* Animated Dots */}
      <motion.div
        className="flex gap-1 mt-3 text-pink-400 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1 }}>•</motion.span>
        <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>•</motion.span>
        <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>•</motion.span>
      </motion.div>
    </motion.div>
  )
}


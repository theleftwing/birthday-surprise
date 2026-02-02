"use client"

import { motion } from "framer-motion"
import { Gift } from "lucide-react"
import Button from "../Button"

export default function IntroScreen({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl w-full max-w-[440px] relative flex flex-col items-center gap-6"
    >
      {/* Top GIF Area */}
      <div className="relative h-44 md:h-52 bg-gradient-to-b from-white/80 to-pink-200 w-full rounded-[40px] flex items-end justify-center shadow-inner overflow-hidden">
        <img
          loading="lazy"
          src="/gifs/intro.gif"
          alt="Cute intro"
          className="w-28 md:w-32 object-contain"
        />
      </div>

      {/* Text */}
      <div className="text-center px-2">
        <h1
          className="text-2xl md:text-3xl font-semibold text-primary leading-tight"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))",
          }}
        >
          A Cutiepie was born today, 18 years ago!
        </h1>

        <p className="mt-4 text-foreground">
          Yes, it’s YOU! A little surprise awaits...
        </p>
      </div>

      {/* Button */}
      <div className="mt-2">
        <Button
          onClick={() => onNext?.()}
          className="bg-[#f1caeb] text-primary hover:bg-[#eabde4]"
        >
          <Gift size={20} />
          Start the surprise
        </Button>
      </div>
    </motion.div>
  )
}


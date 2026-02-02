"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function MessageScreen() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* 🌸 DREAMY BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-50 via-rose-50 to-white" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-300/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-200/20 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* 💌 TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-2">
        A Special Message
      </h2>
      <p className="text-primary/70 text-sm mb-8">Tap the image</p>

      {/* SHARED WIDTH CONTAINER */}
      <div className="w-full max-w-[480px]">

        <AnimatePresence mode="wait">

          {/* 🎂 COVER IMAGE */}
          {!revealed && (
            <motion.div
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              onClick={() => setRevealed(true)}
              className="cursor-pointer rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/cover.webp"
                alt="Happy Birthday"
                width={480}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
          )}

          {/* 💖 MESSAGE CARD */}
          {revealed && (
            <motion.div
              key="message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-b from-white to-pink-100 rounded-3xl shadow-[0_10px_40px_rgba(255,105,180,0.25)] p-8 text-[#5a3b5d] text-base leading-relaxed backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-pink-500">
                Happy Birthday, Aaliya! 💗
              </h3>

              You deserve all the happiness, love, and smiles in the world today and always.
              You have this special way of making everything around you brighter — your smile,
              your kindness, and the way you make people feel truly cared for.
              <br /><br />
              I hope your day is filled with laughter, surprises, and moments that make your heart happy.
              You’re truly one of a kind, and I just want you to know how special you are.
              <br /><br />
              Keep being the amazing person you are, spreading joy wherever you go.
              Wishing you endless happiness and success. ✨
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}


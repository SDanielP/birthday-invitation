"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

export default function BirthdayInvitation() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    // Trigger confetti on page load
    const timer = setTimeout(() => {
      launchConfetti()
      setShowConfetti(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const launchConfetti = () => {
    const duration = 3 * 1000
    const end = Date.now() + duration

    const colors = ["#ff0000", "#ffffff"]
    ;(function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      })

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    })()
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-black text-white rounded-xl overflow-hidden">
          {/* Red, white, red stripes at top */}
          <div className="h-8 w-full bg-white"></div>
          <div className="h-8 w-full bg-red-600"></div>
          <div className="h-8 w-full bg-white"></div>

          {/* Logo centered on stripes */}
          <motion.div
            className="flex justify-center -mt-20"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative w-32 h-32">
              <Image
                src="/river-plate-logo.svg?height=128&width=128"
                alt="River Plate Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Name Banner */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-red-600 text-white text-center py-2 px-4 mx-8 mt-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold">NICOLAS</h1>
          </motion.div>

          {/* Birthday text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center mt-4"
          >
            <p className="text-xl text-white">Quedan Invitados a Mi Cumple el Dia</p>
          </motion.div>

          {/* Date Circle with Football */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex justify-center mt-6"
          >
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Rotating football */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Image
                  src="/pelota.svg"
                  alt="Football Logo"
                  width={160}
                  height={160}
                  className="w-full h-full"
                />
              </motion.div>

              {/* Static text inside */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
  <p
    className="text-2xl font-medium text-red-600"
    style={{
      textShadow: `
        -1px -1px 0 white, /* Sombra superior izquierda */
        1px -1px 0 white,  /* Sombra superior derecha */
        -1px 1px 0 white,  /* Sombra inferior izquierda */
        1px 1px 0 white,   /* Sombra inferior derecha */
        0px -1px 0 white,  /* Sombra superior */
        0px 1px 0 white,   /* Sombra inferior */
        -1px 0px 0 white,  /* Sombra izquierda */
        1px 0px 0 white    /* Sombra derecha */
      `,
    }}
  >
    SABADO
  </p>
  <p
    className="text-4xl font-bold text-red-600"
    style={{
      textShadow: `
        -1px -1px 0 white,
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white,
        0px -1px 0 white,
        0px 1px 0 white,
        -1px 0px 0 white,
        1px 0px 0 white
      `,
    }}
  >
    12
  </p>
  <p
    className="text-2xl font-medium text-red-600"
    style={{
      textShadow: `
        -1px -1px 0 white,
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white,
        0px -1px 0 white,
        0px 1px 0 white,
        -1px 0px 0 white,
        1px 0px 0 white
      `,
    }}
  >
    ABRIL
  </p>
</div>
            </div>
          </motion.div>

          {/* Time and Location */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="bg-red-600 rounded-xl mx-8 mt-6 p-4 text-center text-white"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <p className="text-sm">en el horario</p>
            </div>
            <p className="text-xl font-bold mt-1">11:00 a 15:00hs</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <p className="text-sm">Complejo Batalla de Túcuman</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="text-center mt-6"
          >
            <p className="text-sm text-white">TE ESPERAMOS!!</p>
            <div className="border-b border-dashed border-white mx-16 mt-1"></div>
          </motion.div>

          {/* Don't miss it */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="text-center mt-6 mb-8"
          >
            <p className="text-2xl font-bold text-red-600">¡NO FALTES!</p>
          </motion.div>

          {/* Red, white, red stripes at bottom */}
          <div className="h-8 w-full bg-white"></div>
          <div className="h-8 w-full bg-red-600"></div>
          <div className="h-8 w-full bg-white"></div>
        </div>
      </motion.div>
    </div>
  )
}


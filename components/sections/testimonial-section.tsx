"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const items = [
  { type: "video", src: "/feedback1.mp4" }, // فيديو (27 ثانية)
  ...Array.from({ length: 13 }, (_, i) => ({
    type: "image",
    src: `/feedback${i + 2}.jpeg`,
  })),
]

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const currentItem = items[index]
    const duration = currentItem.type === "video" ? 27000 : 5000 // فيديو 27 ثانية، صورة 5 ثواني

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, duration)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container px-4 md:px-6 text-center space-y-4">
        <div className="inline-block rounded-lg bg-blue-100/10 px-3 py-1 text-sm text-blue-400">
          Témoignages
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Avis de nos clients</h2>
        <p className="text-gray-300 max-w-xl mx-auto md:text-xl">
          Découvrez leurs retours authentiques et spontanés
        </p>

        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {items[index].type === "image" ? (
                <Image
                  src={items[index].src}
                  alt={`feedback-${index}`}
                  fill
                  className="object-contain"
                />
              ) : (
                <video
                  src={items[index].src}
                  controls
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-blue-400" : "bg-gray-500/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


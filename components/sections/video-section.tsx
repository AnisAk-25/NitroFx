/**
 * Section vidéo avec une vidéo YouTube sur le trading XAUUSD
 */
"use client"

import { useRef } from "react"
import { Play } from "lucide-react"
import { useInView, motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section className="py-20 bg-gradient-to-b from-black to-blue-950 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-lg bg-blue-100/10 px-3 py-1 text-sm text-blue-400 mb-2"
          >
            Masterclass Trading
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
          >
            Trade of the Week - Analyse XAUUSD
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-gray-300 md:text-xl/relaxed"
          >
            Découvrez les stratégies avancées pour trader l'or et maximiser vos profits
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-2xl shadow-blue-500/10"
        >
          <div className="relative pb-[56.25%] bg-gradient-to-br from-blue-950 to-black">
            <iframe
              src="https://www.youtube.com/embed/3OykUcigyPs?rel=0"
              title="Trade of the Week EP1 - NitroFx"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

          {/* Overlay décoratif */}
          <div className="absolute inset-0 pointer-events-none border border-blue-500/20 rounded-xl"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-gray-300 max-w-2xl text-center mb-6">
            Découvrez l'analyse détaillée du Trade of the Week par NitroFx. Cette vidéo vous présente une opportunité de
            trading sur l'or (XAUUSD) avec des points d'entrée précis, des objectifs de profit et une gestion des
            risques optimale.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Play className="mr-2 h-4 w-4" /> Voir toutes nos masterclass
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

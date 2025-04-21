/**
 * Section À propos de NitroFx
 * Présente le trader et ses statistiques
 */
"use client"

import { useRef } from "react"
import Image from "next/image"
import { Award, CheckCircle, MapPin, TrendingUp } from "lucide-react"
import { useInView, motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-lg bg-blue-100/10 px-3 py-1 text-sm text-blue-400 mb-2">
              À Propos de NitroFx
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Un Expert du Trading avec{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                95% de Réussite
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Basé au Canada, NitroFx s'est imposé comme l'un des traders les plus performants de sa génération. Avec un
              taux de réussite exceptionnel de 95% sur ses signaux de trading, il a aidé des milliers d'investisseurs à
              transformer leur approche des marchés financiers.
            </p>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-400 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white">95% de Réussite</h3>
                  <p className="text-sm text-gray-400">Sur tous les signaux émis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-400 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white">Basé au Canada</h3>
                  <p className="text-sm text-gray-400">Montréal, Québec</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-blue-400 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white">+500% ROI</h3>
                  <p className="text-sm text-gray-400">Performance moyenne annuelle</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-blue-400 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white">Expert Certifié</h3>
                  <p className="text-sm text-gray-400">Analyses techniques avancées</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">En Savoir Plus</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10">
              <Image src="/nitrofx-trader.png" alt="NitroFx - Expert Trader" fill className="object-cover" priority />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">NitroFx</h3>
                    <p className="text-sm text-blue-400">Fondateur & Trader Principal</p>
                  </div>
                  <div className="bg-blue-600 rounded-full px-3 py-1 text-xs font-bold text-white">95% de Réussite</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">7+</div>
                <div className="text-xs text-white/80">Années d'expérience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

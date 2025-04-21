"use client"

import { useRef } from "react"
import { BarChart2, BookOpen, Compass, LineChart, MessageSquare, Zap } from "lucide-react"
import { useInView, motion } from "framer-motion"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    title: "Signaux en Temps Réel",
    description: "Recevez des alertes de trading précises directement sur votre téléphone ou email",
  },
  {
    icon: <LineChart className="h-10 w-10 text-blue-500" />,
    title: "Analyses Techniques",
    description: "Accédez à des analyses détaillées expliquant chaque signal de trading",
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-blue-500" />,
    title: "Statistiques de Performance",
    description: "Suivez les performances de nos signaux avec des statistiques transparentes",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-blue-500" />,
    title: "Ressources Éducatives",
    description: "Bibliothèque complète de cours et vidéos pour tous les niveaux",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
    title: "Support Personnalisé",
    description: "Posez vos questions et obtenez des réponses de traders professionnels",
  },
  {
    icon: <Compass className="h-10 w-10 text-blue-500" />,
    title: "Stratégies Exclusives",
    description: "Découvrez des stratégies de trading éprouvées et exclusives",
  },
]

export default function FeatureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100/10 px-3 py-1 text-sm text-blue-400 mb-2">
            Pourquoi Choisir NitroFx
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Des Outils Conçus pour Votre Succès
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
            Découvrez comment nos services peuvent transformer votre approche du trading
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-950/50 to-black rounded-lg border border-blue-900/20 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="p-3 rounded-full bg-blue-900/20 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

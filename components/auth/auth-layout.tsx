/**
 * Layout pour les pages d'authentification
 */
"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Zap } from "lucide-react"
import { motion } from "framer-motion"

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle: string
  backgroundImage: string
}

export default function AuthLayout({ children, title, subtitle, backgroundImage }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Section de gauche - Formulaire */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center space-x-2 mb-8">
            <Zap className="h-8 w-8 text-blue-500" />
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              NitroFx
            </span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-gray-500 mb-8">{subtitle}</p>

            {children}
          </motion.div>
        </div>
      </div>

      {/* Section de droite - Image et texte */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70 flex flex-col justify-center p-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Transformez votre approche du trading</h2>
            <p className="mb-6">
              Rejoignez des milliers de traders qui ont amélioré leurs performances grâce aux signaux et formations
              NitroFx.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-1">95%</div>
                <div className="text-sm text-gray-300">Taux de réussite</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400 mb-1">10k+</div>
                <div className="text-sm text-gray-300">Traders satisfaits</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/**
 * Composant de carte pour les packs de trading
 */
"use client"

import { useRef } from "react"
import { Check, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useInView, motion } from "framer-motion"

interface PackageProps {
  packageData: {
    id: string
    name: string
    price: string
    description: string
    features: string[]
    popular?: boolean
    color: string
  }
}

export default function PackageCard({ packageData }: PackageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: packageData.id === "silver" ? 0.1 : packageData.id === "gold" ? 0.2 : 0.3 }}
    >
      <Card
        className={cn(
          "relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-5px]",
          packageData.popular ? "border-blue-500 shadow-md shadow-blue-500/20" : "border-gray-800",
        )}
      >
        {packageData.popular && (
          <div className="absolute top-0 right-0">
            <div className="text-xs font-medium bg-blue-600 text-white px-3 py-1 rounded-bl-lg">Populaire</div>
          </div>
        )}
        <CardHeader className={cn("pb-3", packageData.popular ? "bg-blue-500/10" : "")}>
          <CardTitle className="text-xl font-bold">{packageData.name}</CardTitle>
          <CardDescription>{packageData.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-4">
            <span className="text-3xl font-bold">{packageData.price}</span>
            <span className="text-gray-500 ml-1">/mois</span>
          </div>
          <ul className="space-y-2 mb-6">
            {packageData.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className={cn("mr-2 h-5 w-5 shrink-0", packageData.color)} />
                <span className="text-sm text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className={cn(
              "w-full",
              packageData.id === "silver"
                ? "bg-gray-700 hover:bg-gray-600"
                : packageData.id === "gold"
                  ? "bg-yellow-600 hover:bg-yellow-500"
                  : "bg-blue-600 hover:bg-blue-500",
            )}
          >
            Choisir ce Pack <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

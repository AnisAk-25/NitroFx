"use client"

import { useRef } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useInView, motion } from "framer-motion"

const testimonials = [
  {
    name: "Thomas L.",
    role: "Trader Particulier",
    content:
      "Les signaux de NitroFx ont complètement transformé mon approche du trading. Je suis passé d'une rentabilité négative à un gain mensuel constant.",
    avatar: "/confident-professional.png",
    rating: 5,
  },
  {
    name: "Sophie M.",
    role: "Investisseur Débutant",
    content:
      "Les cours sont incroyablement bien structurés et faciles à suivre. J'ai appris plus en 2 mois avec NitroFx qu'en 1 an par moi-même.",
    avatar: "/confident-professional.png",
    rating: 5,
  },
  {
    name: "Alexandre D.",
    role: "Trader à Temps Plein",
    content:
      "Le pack Platinum est un investissement qui s'est rentabilisé en moins d'un mois. Les analyses techniques sont d'une précision remarquable.",
    avatar: "/confident-bearded-professional.png",
    rating: 5,
  },
  {
    name: "Marie C.",
    role: "Analyste Financier",
    content:
      "En tant que professionnelle de la finance, je suis impressionnée par la qualité des analyses fournies. Un service qui se démarque vraiment.",
    avatar: "/confident-professional.png",
    rating: 4,
  },
]

export default function TestimonialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100/10 px-3 py-1 text-sm text-blue-400 mb-2">Témoignages</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Ce que Disent Nos Clients
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
            Découvrez comment NitroFx aide les traders à atteindre leurs objectifs
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-blue-900/20 bg-gradient-to-br from-blue-950/50 to-black">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

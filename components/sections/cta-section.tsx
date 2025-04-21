/**
 * Section d'appel à l'action
 * Incite les visiteurs à s'inscrire
 */
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Prêt à Transformer Votre Trading?
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
            Rejoignez NitroFx aujourd'hui et accédez à des signaux de trading de qualité et des formations exclusives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="#packages">
                Voir les Packs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="#courses">
                Explorer les Cours <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

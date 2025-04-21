/**
 * Section des packs de trading
 * Présente les différentes offres disponibles
 */
import { packages } from "@/lib/data"
import PackageCard from "@/components/ui/package-card"

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-black to-blue-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100/10 px-3 py-1 text-sm text-blue-400 mb-2">
            Packs de Trading
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Choisissez le Pack qui Vous Convient
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
            Accédez à des signaux de trading exclusifs et des ressources éducatives pour améliorer vos compétences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}

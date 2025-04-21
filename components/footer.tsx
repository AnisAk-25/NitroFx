import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-blue-900/20">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
                NitroFx
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Plateforme de signaux de trading et d'éducation financière pour les traders de tous niveaux.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-gray-400 hover:text-blue-400 text-sm">
                  Packs Trading
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-blue-400 text-sm">
                  Formation
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-blue-400 text-sm">
                  Témoignages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm">
                  Avertissement sur les risques
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Email: contact@nitrofx.com</li>
              <li className="text-gray-400 text-sm">Téléphone: +33 1 23 45 67 89</li>
              <li className="text-gray-400 text-sm">Horaires: Lun-Ven, 9h-18h</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-900/20 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NitroFx. Tous droits réservés.</p>
          <p className="mt-2 text-xs">
            Le trading comporte des risques. Les performances passées ne préjugent pas des performances futures.
          </p>
        </div>
      </div>
    </footer>
  )
}

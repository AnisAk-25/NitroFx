/**
 * Composant de pied de page
 * Contient les liens, informations de contact et copyright
 */
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Zap } from "lucide-react"

// Liens du footer organisés par section
const footerLinks = {
  quickLinks: [
    { href: "/", label: "Accueil" },
    { href: "#packages", label: "Packs Trading" },
    { href: "#courses", label: "Formation" },
    { href: "#testimonials", label: "Témoignages" },
  ],
  legal: [
    { href: "#", label: "Conditions d'utilisation" },
    { href: "#", label: "Politique de confidentialité" },
    { href: "#", label: "Mentions légales" },
    { href: "#", label: "Avertissement sur les risques" },
  ],
}

// Réseaux sociaux
const socialLinks = [
  { href: "https://www.twitter.com/yourusername", icon: Twitter, label: "Twitter" },
  { href: "https://www.facebook.com/mohamed.benrjab.33mvrgff", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/mohamed_ben.rjab/", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@NitroFX-1", icon: Youtube, label: "YouTube" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-blue-900/20">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-bold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens légaux */}
          <div>
            <h3 className="font-bold text-white mb-4">Légal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Email: contact@nitrofx.com</li>
              <li className="text-gray-400 text-sm">Téléphone: +33 1 23 45 67 89</li>
              <li className="text-gray-400 text-sm">Horaires: Lun-Ven, 9h-18h</li>
            </ul>
          </div>
        </div>

        {/* Copyright et avertissement */}
        <div className="mt-12 pt-8 border-t border-blue-900/20 text-center text-sm text-gray-500">
          <p>© {currentYear} NitroFx. Tous droits réservés.</p>
          <p className="mt-2 text-xs">
            Le trading comporte des risques. Les performances passées ne préjugent pas des performances futures.
          </p>
        </div>
      </div>
    </footer>
  )
}

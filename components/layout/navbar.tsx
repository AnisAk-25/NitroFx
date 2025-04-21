/**
 * Composant de navigation principal
 * Responsive avec menu mobile
 */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Liens de navigation
const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "#about", label: "À Propos" },
  { href: "#packages", label: "Packs Trading" },
  { href: "#courses", label: "Formation" },
  { href: "#testimonials", label: "Témoignages" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Effet pour détecter le défilement et changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-blue-900/20 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
            <Zap className="h-8 w-8 text-blue-500 transition-colors duration-300 group-hover:text-blue-400" />
          </motion.div>
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white transition-all duration-300 group-hover:from-blue-300 group-hover:to-blue-600">
            NitroFx
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Boutons d'action Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
            <Link href="/login">Se Connecter</Link>
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white relative overflow-hidden group">
            <Link href="/register">
              <span className="relative z-10">S'inscrire</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-900/20"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 flex flex-col"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-blue-400 transition-colors py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                className="pt-4 flex flex-col space-y-4"
              >
                <Button asChild variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/10">
                  <Link href="/login">Se Connecter</Link>
                </Button>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/register">S'inscrire</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

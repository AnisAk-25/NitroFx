"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-blue-900/20 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-blue-500" />
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
            NitroFx
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            Accueil
          </Link>

          {/* ⚠️ إخفاء مؤقت لرابط À Propos */}
          {/* <Link href="#about" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            À Propos
          </Link> */}

          <Link href="#packages" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            Packs Trading
          </Link>
          <Link href="#courses" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            Formation
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
            Témoignages
          </Link>
        </nav>

        {/* Boutons d'action Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
            Se Connecter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">S'inscrire</Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-900/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 flex flex-col">
          <div className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className="text-lg font-medium text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>

            {/* ⚠️ إخفاء مؤقت لرابط À Propos */}
            {/* <Link
              href="#about"
              className="text-lg font-medium text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              À Propos
            </Link> */}

            <Link
              href="#packages"
              className="text-lg font-medium text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Packs Trading
            </Link>
            <Link
              href="#courses"
              className="text-lg font-medium text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Formation
            </Link>
            <Link
              href="#testimonials"
              className="text-lg font-medium text-white hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Témoignages
            </Link>

            <div className="pt-4 flex flex-col space-y-4">
              <Button variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/10">
                Se Connecter
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">S'inscrire</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
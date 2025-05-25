/**
 * Composant de navigation principal
 * Responsive avec menu mobile
 * 
 * ملاحظة: تأكد أن هناك TopBanner ثابت أعلى الصفحة بارتفاع 40px،
 * لهذا الـ Navbar يبدأ من top: 40px لتجنب التداخل.
 */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

// ⚙️ متغيرات التحكم المركزية
const siteConfig = {
  showAbout: false,     // ← غيرها إلى true لإعادة عرض "À Propos"
  showCourses: false,
  showPackages: false,
}

// نوع بيانات الرابط
interface NavLink {
  href: string
  label: string
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  // عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // إغلاق القائمة بالضغط على ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // الروابط - بدون "À Propos" حالياً
  const navLinks: NavLink[] = [
    { href: "/", label: "Accueil" },
    ...(siteConfig.showAbout ? [{ href: "#about", label: "À Propos" }] : []),
    ...(siteConfig.showCourses ? [{ href: "#courses", label: "Formation" }] : []),
    ...(siteConfig.showPackages ? [{ href: "#packages", label: "Packs Trading" }] : []),
    { href: "#testimonials", label: "Témoignages" },
  ]

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        "top-[40px]",  // يبدأ أسفل الـ TopBanner
        isScrolled
          ? "bg-gradient-to-b from-black/80 via-black/70 to-black/90 border-b border-blue-900/30 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
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
              aria-label={`Naviguer vers ${link.label}`}
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
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white relative overflow-hidden group">
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
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-x-0 top-[56px] bg-black/95 backdrop-blur-md z-40 py-4"  // 40px TopBanner + 16px Navbar padding
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <nav className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
                role="menuitem"
                aria-label={`Naviguer vers ${link.label}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <Button asChild variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-500/10">
                <Link href="/login">Se Connecter</Link>
              </Button>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/register">S'inscrire</Link>
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}



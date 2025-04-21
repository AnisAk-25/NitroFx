/**
 * Formulaire d'inscription
 */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simuler une inscription
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 1500)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Prénom</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input id="firstName" placeholder="Prénom" required className="pl-10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Nom</Label>
            <Input id="lastName" placeholder="Nom" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input id="email" type="email" placeholder="votre@email.com" required className="pl-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="pl-10"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <p className="text-xs text-gray-500">Au moins 8 caractères avec lettres, chiffres et caractères spéciaux</p>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" required className="mt-1" />
          <Label htmlFor="terms" className="text-sm font-normal">
            J'accepte les{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              conditions d'utilisation
            </Link>{" "}
            et la{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              politique de confidentialité
            </Link>
          </Label>
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
          {isLoading ? "Création du compte..." : "Créer un compte"}
        </Button>

        <Separator className="my-4" />

        <div className="text-center text-sm">
          <span className="text-gray-500">Déjà inscrit? </span>
          <Link href="/login" className="text-blue-500 hover:underline">
            Se connecter
          </Link>
        </div>
      </form>
    </motion.div>
  )
}

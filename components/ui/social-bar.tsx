"use client"

import { Facebook, Instagram, Send } from "lucide-react"
import { motion } from "framer-motion"
import { SiTiktok } from "react-icons/si" // ← استيراد أيقونة TikTok من react-icons

const socialLinks = [
  { href: "https://t.me/NITROFXTN", Icon: Send, label: "Telegram", color: "text-blue-400" },
  { href: "https://www.facebook.com/mohamed.benrjab.33mvrgff", Icon: Facebook, label: "Facebook", color: "text-white" },
  { href: "https://www.instagram.com/mohamed_ben.rjab/", Icon: Instagram, label: "Instagram", color: "text-white" },
  { href: "https://www.tiktok.com/@medbenrjab?lang=fr", Icon: SiTiktok, label: "TikTok", color: "text-white" }, // ← TikTok مضافة
  // { href: "mailto:contact@yourdomain.com", Icon: Mail, label: "Email", color: "text-white" }, ← مخفية
  // { href: "https://linkedin.com/in/yourprofile", Icon: Linkedin, label: "LinkedIn", color: "text-white" }, ← مخفية
]

export default function SocialBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-6 bg-blue-950/90 p-4 rounded-xl shadow-xl"
    >
      {socialLinks.map(({ href, Icon, label, color }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color} hover:text-blue-400 transition`}
          aria-label={label}
        >
          <Icon className="w-7 h-7" />
        </a>
      ))}
    </motion.div>
  )
}

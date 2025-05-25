"use client"

import { Send } from "lucide-react"
import { motion } from "framer-motion"

export default function TopBanner() {
  return (
    <div
      className="fixed top-0 left-0 w-full bg-yellow-500 text-gray-900 flex items-center justify-center py-2 px-4 z-50 shadow-md"
      style={{ height: 40, fontFamily: "'Inter', sans-serif" }}
    >
      <motion.p
        className="mr-4 text-sm md:text-base font-semibold text-blue-600"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        🚀 Join our Telegram channel for exclusive trading signals and updates!
      </motion.p>
      <a
        href="https://t.me/NITROFXTN"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-yellow-700 px-3 py-1 rounded-md font-semibold hover:bg-yellow-100 transition"
        aria-label="Join Telegram Channel"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Send className="w-5 h-5 mr-1" />
        Join Telegram
      </a>
    </div>
  )
}

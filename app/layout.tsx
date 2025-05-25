import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import SocialBar from "@/components/ui/social-bar"
import TopBanner from "@/components/ui/top-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NitroFx | Trading Signals & Education",
  description: "Plateforme de signaux de trading et d'éducation financière par NitroFx",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative flex min-h-screen flex-col">
            <TopBanner />
            <Navbar />
            <SocialBar />
            {/* 
              هنا مهم جداً: 
              نضيف padding-top بارتفاع البانر (مثلاً 40px) + Navbar height (مثلاً 64px) = 104px = pt-26 تقريباً
              وإذا Navbar عندك ارتفاع مختلف، عدل الرقم
            */}
            <main className="flex-1 pt-[104px]">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

/**
 * Section héro de la page d'accueil
 * Première section visible avec appel à l'action principal
 */
"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, BarChart2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"

// Composant de particules pour l'arrière-plan
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajuster la taille du canvas
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Créer les particules
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(window.innerWidth / 10, 100)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialiser les particules
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()

        // Connecter les particules proches
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />
}

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // Effet pour suivre la position de la souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative w-full py-32 md:py-40 lg:py-48 bg-black overflow-hidden">
      {/* Particules animées en arrière-plan */}
      <ParticleBackground />

      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-black/80" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-blue-900/5 to-transparent" />

        {/* Effet de parallaxe sur la souris */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translate(${mousePosition.x / 100}px, ${mousePosition.y / 100}px)`,
          }}
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            <path
              d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,50 T500,80"
              fill="none"
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="2"
              className="animate-pulse"
            />
            <path
              d="M0,150 Q50,100 100,150 T200,120 T300,150 T400,100 T500,130"
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div ref={ref} className="flex flex-col justify-center space-y-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-2"
            >
              <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                Trading Signals & Education
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Maîtrisez le{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">
                  Trading
                </span>{" "}
                avec NitroFx
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Accédez à des signaux de trading précis et des formations exclusives pour transformer votre approche des
                marchés financiers.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
              >
                <Link href="#packages">
                  <span className="relative z-10 flex items-center">
                    Découvrir les Packs
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                <Link href="#courses">Explorer les Formations</Link>
              </Button>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center space-x-4 mt-8 text-sm text-gray-400"
            >
              <div className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4 text-blue-400" />
                <span>Signaux précis</span>
              </div>
              <div className="flex items-center">
                <BarChart2 className="mr-2 h-4 w-4 text-blue-400" />
                <span>Analyses détaillées</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-lg overflow-hidden border border-blue-900/50 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-black">
                {/* Trading chart mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="100%" height="100%" viewBox="0 0 500 400" className="p-4">
                    {/* Chart background grid */}
                    <g stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={`h-${i}`} x1="0" y1={i * 40} x2="500" y2={i * 40} />
                      ))}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
                      ))}
                    </g>

                    {/* Candlestick chart */}
                    <g>
                      {[
                        { x: 40, o: 200, h: 180, l: 220, c: 210 },
                        { x: 80, o: 210, h: 190, l: 230, c: 200 },
                        { x: 120, o: 200, h: 180, l: 220, c: 190 },
                        { x: 160, o: 190, h: 170, l: 200, c: 180 },
                        { x: 200, o: 180, h: 160, l: 190, c: 170 },
                        { x: 240, o: 170, h: 150, l: 180, c: 190 },
                        { x: 280, o: 190, h: 170, l: 200, c: 210 },
                        { x: 320, o: 210, h: 190, l: 230, c: 220 },
                        { x: 360, o: 220, h: 200, l: 240, c: 230 },
                        { x: 400, o: 230, h: 210, l: 250, c: 220 },
                        { x: 440, o: 220, h: 200, l: 240, c: 210 },
                      ].map((candle, i) => (
                        <g key={i}>
                          <line
                            x1={candle.x}
                            y1={candle.h}
                            x2={candle.x}
                            y2={candle.l}
                            stroke={candle.o > candle.c ? "#ef4444" : "#22c55e"}
                            strokeWidth="2"
                          />
                          <rect
                            x={candle.x - 5}
                            y={Math.min(candle.o, candle.c)}
                            width="10"
                            height={Math.abs(candle.o - candle.c)}
                            fill={candle.o > candle.c ? "#ef4444" : "#22c55e"}
                          />
                        </g>
                      ))}
                    </g>

                    {/* Moving average line */}
                    <path
                      d="M40,200 L80,205 L120,195 L160,190 L200,185 L240,190 L280,200 L320,210 L360,220 L400,215 L440,210"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />

                    {/* Buy/Sell signals */}
                    <circle cx="160" cy="170" r="5" fill="#22c55e" />
                    <circle cx="320" cy="190" r="5" fill="#22c55e" />
                    <circle cx="240" cy="150" r="5" fill="#ef4444" />
                    <circle cx="400" cy="210" r="5" fill="#ef4444" />
                  </svg>
                </div>

                {/* Overlay elements */}
                <div className="absolute top-4 left-4 text-xs text-white/70">EURUSD H4</div>
                <div className="absolute top-4 right-4 text-xs text-blue-400">NitroFx Signal</div>
                <div className="absolute bottom-4 left-4 text-xs text-green-400">BUY @ 1.0865</div>
                <div className="absolute bottom-4 right-4 text-xs text-white/70">TP: 1.0920 | SL: 1.0830</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

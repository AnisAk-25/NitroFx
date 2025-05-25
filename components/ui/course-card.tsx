/**
 * Composant de carte pour les cours de trading
 */
"use client"

import { useRef } from "react"
import Image from "next/image"
import { Clock, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView, motion } from "framer-motion"

interface Course {
  id: string
  title: string
  description: string
  image: string
  duration: string
  level: string
  price: string
  lessons: number
}

export default function CourseCard({ course }: { course: Course }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-5px] border-gray-800 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
            <Badge variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
              {course.level}
            </Badge>
            <div className="flex items-center text-xs text-white">
              <Clock className="mr-1 h-3 w-3" />
              {course.duration}
            </div>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 right-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
          >
            <Play className="h-4 w-4 text-white" />
          </Button>
        </div>
        <CardContent className="flex-grow p-5">
          <h3 className="text-xl font-bold mb-2">{course.title}</h3>
          <p className="text-sm text-gray-400 mb-4">{course.description}</p>
          <div className="text-xs text-gray-500">{course.lessons} leçons</div>
        </CardContent>
        <CardFooter className="border-t border-gray-800 p-5 flex items-center justify-between">
          <span className="font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Soon 🔥
          </span>
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
            Voir le cours
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

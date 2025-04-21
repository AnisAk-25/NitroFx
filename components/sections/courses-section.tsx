/**
 * Section des cours de trading
 * Présente les formations disponibles
 */
import { courses } from "@/lib/data"
import CourseCard from "@/components/ui/course-card"

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-900 mb-2">
            Formation Trading
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            Apprenez à Trader comme un Pro
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Des cours et vidéos conçus pour vous aider à maîtriser les marchés financiers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

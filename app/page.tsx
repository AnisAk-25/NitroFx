import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
// import PackagesSection from "@/components/sections/packages-section"
import FeatureSection from "@/components/sections/feature-section"
import VideoSection from "@/components/sections/video-section"
import CoursesSection from "@/components/sections/courses-section"
import TestimonialSlider from "@/components/sections/testimonial-section" // صححت هنا
import CtaSection from "@/components/sections/cta-section"

// ⚙️ متغير تحكم (اختياري) - غيره إلى true لإعادة عرض القسم
const showHeroSection = false

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {showHeroSection && <HeroSection />}

      <AboutSection />
      {/* <PackagesSection /> */} {/* تم إخفاؤه */}
      <FeatureSection />
      <VideoSection />
      <CoursesSection />

      {/* هنا نستخدم سلايدر التقييمات بدلاً من القسم القديم */}
      <TestimonialSlider />

      <CtaSection />
    </div>
  )
}

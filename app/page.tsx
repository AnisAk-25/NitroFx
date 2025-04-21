import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import PackagesSection from "@/components/sections/packages-section"
import FeatureSection from "@/components/sections/feature-section"
import VideoSection from "@/components/sections/video-section"
import CoursesSection from "@/components/sections/courses-section"
import TestimonialSection from "@/components/sections/testimonial-section"
import CtaSection from "@/components/sections/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <FeatureSection />
      <VideoSection />
      <CoursesSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  )
}

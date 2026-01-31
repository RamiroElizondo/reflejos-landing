import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { WorkshopSection } from "@/components/sections/workshop-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { LocalSection } from "@/components/sections/local-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkshopSection />
      <GallerySection />
      <LocalSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

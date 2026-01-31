"use client"

import { useEffect, useRef, useState } from "react"
import { Paintbrush, Palette, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Paintbrush,
    title: "Pintura",
    description: "Técnicas tradicionales y contemporáneas que dan vida a cada creación.",
  },
  {
    icon: Palette,
    title: "Artesanías",
    description: "Piezas únicas elaboradas con dedicación y materiales de calidad.",
  },
  {
    icon: Heart,
    title: "Creación consciente",
    description: "Cada obra nace de la conexión entre el artista y su inspiración.",
  },
  {
    icon: Sparkles,
    title: "Talleres",
    description: "Espacios de aprendizaje donde el arte se comparte y multiplica.",
  },
]

const galleryImages = [
  { id: 1, placeholder: "Proceso creativo 1" },
  { id: 2, placeholder: "Proceso creativo 2" },
  { id: 3, placeholder: "Proceso creativo 3" },
  { id: 4, placeholder: "Proceso creativo 4" },
  { id: 5, placeholder: "Proceso creativo 5" },
  { id: 6, placeholder: "Proceso creativo 6" },
]

export function WorkshopSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="taller"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-secondary/50 to-background overflow-hidden"
    >
      {/* Watercolor background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-dusty-blue/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-64 bg-gradient-to-tl from-gold/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nuestro Espacio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4 text-balance">
            Reflejos · Taller de Arte
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Un espacio donde la creatividad fluye libremente y cada momento es una 
            oportunidad para crear algo extraordinario.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process gallery */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-2xl text-center text-primary mb-8">
            El proceso creativo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square bg-muted rounded-xl overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-dusty-blue/20 to-gold/20 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground text-center px-4">
                    {image.placeholder}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

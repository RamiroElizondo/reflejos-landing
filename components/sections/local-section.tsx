"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Clock, Star } from "lucide-react"

const localImages = [
  { id: 1, image: "" },
  { id: 2, image: "" },
  { id: 3, image: "" },
  { id: 4, image: "" },
]

const features = [
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Un espacio acogedor donde el arte cobra vida",
  },
  {
    icon: Clock,
    title: "Horarios flexibles",
    description: "Abiertos para ti cuando la inspiración llama",
  },
  {
    icon: Star,
    title: "Experiencia única",
    description: "Cada visita es una inmersión en el mundo artesanal",
  },
]

export function LocalSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="local"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Visítanos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4 text-balance">
            El Local
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto text-balance">
            Un espacio donde el arte se encuentra con las personas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-dusty-blue/20 to-cream overflow-hidden">
                {localImages[0].image ? (
                  <img
                    src={localImages[0].image}
                    alt="Foto del local 1"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs text-center p-4">
                    Foto del local 1
                  </div>
                )}
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 to-cream overflow-hidden">
                {localImages[1].image ? (
                  <img
                    src={localImages[1].image}
                    alt="Foto del local 2"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs text-center p-4">
                    Foto del local 2
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cream to-dusty-blue/20 overflow-hidden">
                {localImages[2].image ? (
                  <img
                    src={localImages[2].image}
                    alt="Foto del local 3"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs text-center p-4">
                    Foto del local 3
                  </div>
                )}
              </div>
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-cream to-gold/20 overflow-hidden">
                {localImages[3].image ? (
                  <img
                    src={localImages[3].image}
                    alt="Foto del local 4"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs text-center p-4">
                    Foto del local 4
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-foreground/70 leading-relaxed mb-8">
              Nuestro local es más que un espacio físico: es un lugar donde las ideas 
              cobran forma, donde puedes tocar y sentir cada pieza, donde el arte se 
              convierte en una experiencia sensorial completa. Te invitamos a visitarnos 
              y descubrir el mundo de Reflejos Artesanías.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 group"
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-10 pt-6 border-t border-border/50">
              <p className="font-serif text-2xl italic text-primary/80">
                {"\"Te esperamos con los brazos abiertos\""}
              </p>
              <p className="text-xl text-muted-foreground mt-2">— Alicia Carzzo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

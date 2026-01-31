"use client"

import { useEffect, useRef, useState } from "react"

const artworks = [
  { id: 1, title: "Reflejos del Atardecer", category: "Pintura", image: "" },
  { id: 2, title: "Naturaleza Viva", category: "Artesanía", image: "" },
  { id: 3, title: "Conexión", category: "Pintura", image: "" },
  { id: 4, title: "Flores de Primavera", category: "Artesanía", image: "" },
  { id: 5, title: "Serenidad", category: "Pintura", image: "" },
  { id: 6, title: "Texturas del Alma", category: "Artesanía", image: "" },
  { id: 7, title: "Armonía", category: "Pintura", image: "" },
  { id: 8, title: "Detalles Únicos", category: "Artesanía", image: "" },
]

export function GallerySection() {
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
      id="obras"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Galería
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4 text-balance">
            Obras
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto text-balance">
            Cada pieza es un reflejo de inspiración, paciencia y amor por el arte hecho a mano.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`group relative cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${index % 3 === 0 ? "md:row-span-2" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`relative overflow-hidden rounded-xl bg-muted ${
                  index % 3 === 0 ? "aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
                }`}
              >
                {/* Image */}
                {artwork.image && (
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                
                {/* Placeholder gradient - shown when no image */}
                {!artwork.image && (
                  <div className="absolute inset-0 bg-gradient-to-br from-dusty-blue/30 via-cream to-gold/30" />
                )}
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,0,0,0.05)_0%,transparent_50%)]" />
                </div>

                {/* Hover overlay with golden frame effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-2 border-2 border-gold/60 rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                </div>

                {/* Artwork info on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-serif text-lg text-primary-foreground mb-1 drop-shadow-lg">
                    {artwork.title}
                  </h3>
                  <span className="text-xs text-primary-foreground/80 tracking-wider uppercase">
                    {artwork.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <div
          className={`flex justify-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <span className="font-serif italic text-muted-foreground text-lg md:text-xl">más obras próximamente</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </div>
    </section>
  )
}

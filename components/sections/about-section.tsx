"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
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
      id="sobre"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Sobre Nosotros
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6 leading-tight text-balance">
              Reflejos Artesanías
            </h2>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Cada pieza que nace en nuestro taller cuenta una historia única. Somos un espacio 
                donde el arte artesanal se encuentra con la creatividad consciente, donde las 
                manos transforman materiales simples en obras que reflejan el alma.
              </p>
              <p>
                Fundado con la pasión de crear y compartir, Reflejos Artesanías es más que un 
                local de arte: es un refugio para quienes buscan lo auténtico, lo hecho a mano, 
                lo irrepetible. Aquí, cada trazo, cada textura, cada color tiene un propósito.
              </p>
              <p className="font-serif text-2xl italic text-primary/80">
                {"\"Lo artesanal tiene el poder de conectar corazones.\""}
              </p>
            </div>

            {/* Decorative line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent" />
              <span className="text-sm tracking-widest text-muted-foreground uppercase">
                Alicia Carzzo
              </span>
            </div>
          </div>

          {/* Visual element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border border-gold/20 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-dusty-blue/10 blur-xl" />
              
              {/* Main image container */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-4 rounded-full border-2 border-gold/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/logochico-removebg-preview.png"
                    alt="Reflejos Taller de Arte Logo"
                    width={320}
                    height={320}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Floating brush strokes */}
              <svg
                className="absolute -top-4 right-0 w-20 h-20 text-gold/20"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M10 40C20 20 40 60 50 40C60 20 70 50 75 40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

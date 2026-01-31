"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Instagram, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escríbenos",
    href: "https://wa.me/1234567890",
    primary: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@reflejosartesanias",
    href: "https://instagram.com/reflejosartesanias",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Reflejos Artesanías",
    href: "https://facebook.com/reflejosartesanias",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hola@reflejosartesanias.com",
    href: "mailto:hola@reflejosartesanias.com",
  },
]

export function ContactSection() {
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
      id="contacto"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-dusty-blue/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Conectemos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4 text-balance">
            Contacto
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-balance">
            ¿Tienes preguntas o quieres conocer más sobre nuestro trabajo? 
            Estamos aquí para ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact methods */}
          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  method.primary
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                    : "bg-card border-border/50 hover:border-gold/30 hover:shadow-md"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    method.primary
                      ? "bg-primary-foreground/10"
                      : "bg-gold/10 group-hover:bg-gold/20"
                  }`}
                >
                  <method.icon
                    className={`w-5 h-5 ${
                      method.primary ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm ${
                      method.primary ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {method.label}
                  </p>
                  <p
                    className={`font-medium ${
                      method.primary ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {method.value}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform ${
                    method.primary ? "text-primary-foreground/50" : "text-muted-foreground"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* Map placeholder */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-border/50 bg-muted">
              {/* Replace with actual map embed */}
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-dusty-blue/10 to-gold/10">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Mapa interactivo
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary/30 text-primary hover:bg-primary/5 bg-transparent"
                >
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </Button>
              </div>
            </div>

            {/* Address info */}
            <div className="mt-6 p-4 rounded-xl bg-card/50 border border-border/50">
              <p className="text-sm text-muted-foreground mb-1">Dirección</p>
              <p className="text-foreground">
                Calle del Arte 123, Ciudad Creativa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

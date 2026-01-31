"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [brushProgress, setBrushProgress] = useState(0)
  const [animationPhase, setAnimationPhase] = useState<"painting" | "fading" | "complete">("painting")
  const animationRef = useRef<number | null>(null)
  const lastProgressRef = useRef(-1)
  const lastPhaseRef = useRef<"painting" | "fading" | "complete">("painting")


  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if(!isVisible) return
    const startDelay = setTimeout(() => {
      const startTime = performance.now()
      const paintDuration = 1500 // 1.5s to paint
      const fadeDuration = 800 // 0.8s to fade

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime

        if (elapsed < paintDuration) {
          // Painting phase
          const progress = Math.min(elapsed / paintDuration, 1)
          // Easing function for natural brush movement
          const easedProgress = 1 - Math.pow(1 - progress, 3)
          const roundedProgress = Math.round(easedProgress * 60) / 60
          if (roundedProgress !== lastProgressRef.current) {
            lastProgressRef.current = roundedProgress
            setBrushProgress(roundedProgress)
          }
          if (lastPhaseRef.current !== "painting") {
            lastPhaseRef.current = "painting"
            setAnimationPhase("painting")
          }
        } else if (elapsed < paintDuration + fadeDuration) {
          // Fading phase
          if (lastProgressRef.current !== 1) {
            lastProgressRef.current = 1
            setBrushProgress(1)
          }
          if (lastPhaseRef.current !== "fading") {
            lastPhaseRef.current = "fading"
            setAnimationPhase("fading")
          }
        } else {
          // Complete - restart animation
          if (lastPhaseRef.current !== "complete") {
            lastPhaseRef.current = "complete"
            setAnimationPhase("complete")
          }
          if (lastProgressRef.current !== 0) {
            lastProgressRef.current = 0
            setBrushProgress(0)
          }
          setTimeout(() => {
            lastPhaseRef.current = "painting"
            setAnimationPhase("painting")
            animationRef.current = requestAnimationFrame(function restartAnimate(time) {
              const newStartTime = time
              const animateLoop = (currentTime: number) => {
                const elapsed = currentTime - newStartTime
                if (elapsed < paintDuration) {
                  const progress = Math.min(elapsed / paintDuration, 1)
                  const easedProgress = 1 - Math.pow(1 - progress, 3)
                  const roundedProgress = Math.round(easedProgress * 60) / 60
                  if (roundedProgress !== lastProgressRef.current) {
                    lastProgressRef.current = roundedProgress
                    setBrushProgress(roundedProgress)
                  }
                  if (lastPhaseRef.current !== "painting") {
                    lastPhaseRef.current = "painting"
                    setAnimationPhase("painting")
                  }
                } else if (elapsed < paintDuration + fadeDuration) {
                  if (lastProgressRef.current !== 1) {
                    lastProgressRef.current = 1
                    setBrushProgress(1)
                  }
                  if (lastPhaseRef.current !== "fading") {
                    lastPhaseRef.current = "fading"
                    setAnimationPhase("fading")
                  }
                } else {
                  if (lastPhaseRef.current !== "complete") {
                    lastPhaseRef.current = "complete"
                    setAnimationPhase("complete")
                  }
                  if (lastProgressRef.current !== 0) {
                    lastProgressRef.current = 0
                    setBrushProgress(0)
                  }
                  setTimeout(() => {
                    animationRef.current = requestAnimationFrame(restartAnimate)
                  }, 2000)
                  return
                }
                animationRef.current = requestAnimationFrame(animateLoop)
              }
              animateLoop(time)
            })
          }, 2000)
          return
        }

        animationRef.current = requestAnimationFrame(animate)
      }

      animationRef.current = requestAnimationFrame(animate)
    }, 1200)

    return () => {
      clearTimeout(startDelay)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Canvas texture background */}
      <div className="absolute inset-0 bg-[url('/canvas-texture.png')] bg-repeat opacity-30" />
      
      {/* Decorative watercolor blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-dusty-blue/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Brushstroke decorations */}
      <svg
        className="absolute top-32 right-20 w-32 h-8 text-gold/30"
        viewBox="0 0 120 20"
        fill="currentColor"
      >
        <path d="M2 10C20 2 40 18 60 10C80 2 100 18 118 10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      
      <svg
        className="absolute bottom-40 left-20 w-24 h-6 text-dusty-blue/30"
        viewBox="0 0 100 15"
        fill="currentColor"
      >
        <path d="M2 8C25 2 50 14 75 8C90 4 98 10 98 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>

      {/* Paint splatters - Left side */}
      <svg
        className="absolute top-24 -left-4 md:left-8 w-40 h-48 md:w-56 md:h-64 opacity-60"
        viewBox="0 0 200 240"
        fill="none"
      >
        {/* Main splatter blob */}
        <path
          d="M80 60C95 40 130 35 145 55C160 75 155 100 140 115C125 130 100 135 85 150C70 165 75 190 60 200C45 210 20 205 15 185C10 165 25 140 40 125C55 110 65 80 80 60Z"
          fill="oklch(0.35 0.06 250 / 0.25)"
        />
        {/* Splatter drips */}
        <ellipse cx="30" cy="220" rx="6" ry="12" fill="oklch(0.35 0.06 250 / 0.3)" />
        <ellipse cx="55" cy="230" rx="4" ry="8" fill="oklch(0.35 0.06 250 / 0.25)" />
        <ellipse cx="18" cy="200" rx="3" ry="6" fill="oklch(0.35 0.06 250 / 0.2)" />
        {/* Small splatter drops */}
        <circle cx="45" cy="35" r="8" fill="oklch(0.35 0.06 250 / 0.3)" />
        <circle cx="20" cy="70" r="5" fill="oklch(0.35 0.06 250 / 0.25)" />
        <circle cx="160" cy="90" r="6" fill="oklch(0.35 0.06 250 / 0.2)" />
        <circle cx="35" cy="110" r="4" fill="oklch(0.35 0.06 250 / 0.35)" />
        <circle cx="170" cy="60" r="3" fill="oklch(0.35 0.06 250 / 0.15)" />
        {/* Gold accent splatter */}
        <path
          d="M120 170C130 155 155 160 160 175C165 190 150 205 135 200C120 195 110 185 120 170Z"
          fill="oklch(0.75 0.12 85 / 0.35)"
        />
        <circle cx="175" cy="185" r="4" fill="oklch(0.75 0.12 85 / 0.3)" />
        <circle cx="110" cy="195" r="3" fill="oklch(0.75 0.12 85 / 0.25)" />
      </svg>

      {/* Paint splatters - Right side */}
      <svg
        className="absolute top-32 -right-4 md:right-8 w-44 h-52 md:w-60 md:h-72 opacity-60"
        viewBox="0 0 220 260"
        fill="none"
      >
        {/* Main splatter blob */}
        <path
          d="M140 50C160 35 190 45 200 70C210 95 195 125 175 140C155 155 130 150 115 170C100 190 110 220 95 235C80 250 50 245 45 220C40 195 60 170 80 155C100 140 120 65 140 50Z"
          fill="oklch(0.75 0.12 85 / 0.3)"
        />
        {/* Splatter drips */}
        <ellipse cx="70" cy="250" rx="5" ry="10" fill="oklch(0.75 0.12 85 / 0.35)" />
        <ellipse cx="95" cy="255" rx="4" ry="7" fill="oklch(0.75 0.12 85 / 0.25)" />
        <ellipse cx="50" cy="235" rx="3" ry="5" fill="oklch(0.75 0.12 85 / 0.2)" />
        {/* Small splatter drops */}
        <circle cx="180" cy="30" r="7" fill="oklch(0.75 0.12 85 / 0.35)" />
        <circle cx="210" cy="55" r="4" fill="oklch(0.75 0.12 85 / 0.25)" />
        <circle cx="160" cy="25" r="5" fill="oklch(0.75 0.12 85 / 0.3)" />
        <circle cx="35" cy="180" r="4" fill="oklch(0.75 0.12 85 / 0.2)" />
        <circle cx="205" cy="110" r="3" fill="oklch(0.75 0.12 85 / 0.15)" />
        {/* Navy accent splatter */}
        <path
          d="M50 80C65 65 95 70 100 90C105 110 85 130 65 125C45 120 35 95 50 80Z"
          fill="oklch(0.35 0.06 250 / 0.3)"
        />
        <circle cx="30" cy="100" r="5" fill="oklch(0.35 0.06 250 / 0.25)" />
        <circle cx="115" cy="105" r="3" fill="oklch(0.35 0.06 250 / 0.2)" />
        <ellipse cx="25" cy="130" rx="3" ry="8" fill="oklch(0.35 0.06 250 / 0.25)" />
      </svg>

      {/* Additional small splatters scattered */}
      <svg
        className="absolute bottom-32 left-16 md:left-32 w-20 h-24 opacity-50"
        viewBox="0 0 80 100"
        fill="none"
      >
        <circle cx="40" cy="30" r="15" fill="oklch(0.65 0.05 250 / 0.25)" />
        <circle cx="25" cy="55" r="8" fill="oklch(0.65 0.05 250 / 0.2)" />
        <circle cx="55" cy="50" r="6" fill="oklch(0.65 0.05 250 / 0.3)" />
        <ellipse cx="35" cy="75" rx="4" ry="10" fill="oklch(0.65 0.05 250 / 0.2)" />
        <circle cx="60" cy="70" r="4" fill="oklch(0.65 0.05 250 / 0.15)" />
      </svg>

      <svg
        className="absolute bottom-48 right-20 md:right-40 w-16 h-20 opacity-45"
        viewBox="0 0 60 80"
        fill="none"
      >
        <circle cx="30" cy="25" r="12" fill="oklch(0.75 0.12 85 / 0.3)" />
        <circle cx="18" cy="45" r="6" fill="oklch(0.75 0.12 85 / 0.25)" />
        <circle cx="45" cy="40" r="5" fill="oklch(0.75 0.12 85 / 0.2)" />
        <ellipse cx="28" cy="65" rx="3" ry="8" fill="oklch(0.75 0.12 85 / 0.2)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-90 h-90 md:w-80 md:h-80">
              <Image
                src="/images/logochico-removebg-preview.png"
                alt="Reflejos Taller de Arte"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <p
            className={`font-serif text-xl md:text-4xl lg:text-5xl text-primary/80 mb-4 italic transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {"\"El arte como reflejo del alma\""}
          </p>

          {/* Subtitle */}
          <p
            className={`text-muted-foreground text-sm md:text-lg max-w-md mx-auto mb-10 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Imagina, crea, comparte, vive
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <a href="#obras">Ver obras</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-6 text-base font-medium rounded-full transition-all duration-300 hover:border-primary/50 bg-transparent"
            >
              <a href="#taller">Conocer el taller</a>
            </Button>
          </div>
        </div>

        {/* Paint brush scroll indicator */}
          <div
            className={`mt-12 flex flex-col items-center transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Descubre</span>
            
            <div className="relative h-32 w-12 flex justify-center">
              {/* Paint trail */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 48 140"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Paint stroke path - drawn from bottom to top */}
                <defs>
                  <linearGradient id="paintGradient" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="oklch(0.35 0.06 250)" stopOpacity={animationPhase === "fading" ? 0 : 0.7} />
                    <stop offset="30%" stopColor="oklch(0.35 0.06 250)" stopOpacity={animationPhase === "fading" ? 0 : 0.5} />
                    <stop offset="100%" stopColor="oklch(0.75 0.12 85)" stopOpacity={animationPhase === "fading" ? 0 : 0.6} />
                  </linearGradient>
                  <mask id="paintMask">
                    <rect
                      x="0"
                      y={140 - (brushProgress * 120)}
                      width="48"
                      height={brushProgress * 120}
                      fill="white"
                    />
                  </mask>
                </defs>
                
                {/* Irregular paint stroke */}
                <path
                  d="M24 130 C22 124 20 116 21 108 C22 100 26 92 25 84 C24 76 20 68 21 60 C22 52 27 44 26 36 C25 28 22 20 24 12"
                  stroke="url(#paintGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  mask="url(#paintMask)"
                  className={`transition-opacity duration-700 ${animationPhase === "fading" ? "opacity-0" : "opacity-100"}`}
                />
                
                {/* Paint splatter drops along the stroke */}
                {brushProgress > 0.3 && (
                  <circle 
                    cx="18" 
                    cy="70" 
                    r="3" 
                    fill="oklch(0.35 0.06 250)"
                    className={`transition-opacity duration-500 ${animationPhase === "fading" ? "opacity-0" : "opacity-40"}`}
                  />
                )}
                {brushProgress > 0.5 && (
                  <circle 
                    cx="30" 
                    cy="55" 
                    r="2" 
                    fill="oklch(0.75 0.12 85)"
                    className={`transition-opacity duration-500 ${animationPhase === "fading" ? "opacity-0" : "opacity-50"}`}
                  />
                )}
                {brushProgress > 0.7 && (
                  <circle 
                    cx="17" 
                    cy="40" 
                    r="2.5" 
                    fill="oklch(0.35 0.06 250)"
                    className={`transition-opacity duration-500 ${animationPhase === "fading" ? "opacity-0" : "opacity-35"}`}
                  />
                )}
              </svg>

              {/* Paint brush */}
              <div
                className={`absolute transition-all duration-100 ease-out ${animationPhase === "fading" || animationPhase === "complete" ? "opacity-0" : "opacity-100"}`}
                style={{
                  bottom: `${brushProgress * 85}%`,
                  transform: `translateY(50%) rotate(${-15 + Math.sin(brushProgress * Math.PI * 4) * 8}deg)`,
                }}
              >
                <svg
                  width="32"
                  height="48"
                  viewBox="0 0 32 48"
                  fill="none"
                  className="drop-shadow-md"
                >
                  {/* Brush handle */}
                  <rect x="13" y="0" width="6" height="28" rx="1" fill="#8B7355" />
                  <rect x="14" y="2" width="2" height="24" fill="#A08060" opacity="0.5" />
                  
                  {/* Metal ferrule */}
                  <rect x="11" y="26" width="10" height="6" rx="1" fill="#C0C0C0" />
                  <rect x="12" y="27" width="8" height="1" fill="#E8E8E8" opacity="0.6" />
                  
                  {/* Brush bristles */}
                  <path
                    d="M11 32 C11 32 10 38 12 44 C13 46 15 48 16 48 C17 48 19 46 20 44 C22 38 21 32 21 32 Z"
                    fill="#2C1810"
                  />
                  <path
                    d="M13 32 C13 34 12 40 14 45 C14.5 46 15 47 16 47 C17 47 17.5 46 18 45 C20 40 19 34 19 32 Z"
                    fill="#4A3728"
                  />
                  
                  {/* Paint on bristles */}
                  <path
                    d="M12 42 C12 44 14 47 16 47 C18 47 20 44 20 42 C20 40 18 38 16 38 C14 38 12 40 12 42 Z"
                    fill="oklch(0.35 0.06 250)"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

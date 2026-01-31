import Image from "next/image"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/reflejosartesanias", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/reflejosartesanias", label: "Facebook" },
  {
    icon: MessageCircle,
    href: "https://wa.me/5492645042832?text=Hola%20%20Quisiera%20conocer%20más%20sobre%20sus%20obras%20y%20el%20taller%20de%20arte.%20Me%20interesa%20saber%20sobre%20horarios,%20talleres%20y%20las%20piezas%20disponibles.%20¡Gracias!",
    label: "WhatsApp",
  },
]

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Reflejos", href: "#sobre" },
  { label: "Taller", href: "#taller" },
  { label: "Obras", href: "#obras" },
  { label: "El Local", href: "#local" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logochico-removebg-preview.png"
                  alt="Reflejos"
                  fill
                  className="object-contain brightness-0 invert opacity-90"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl">Reflejos</h3>
                <p className="text-xs text-primary-foreground/60">Artesanías</p>
              </div>
            </div>
            <p className="font-serif text-lg italic text-primary-foreground/80 mb-6">
              {"\"Imagina, crea, comparte, vive\""}
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-1">
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/60 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-1">
            <h4 className="text-sm uppercase tracking-widest text-primary-foreground/60 mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>Gral. José María Paz Este 1472</p>
              <p>San Juan, Argentina</p>
              <p>reflejosartesanias@gmail.com</p>
            </div>

            {/* Alicia Carzzo signature */}
            <div className="mt-8 pt-6 border-t border-primary-foreground/10">
              <Image
                src="/images/logo.jpeg"
                alt="Alicia Carzzo - Reflejos Artesanías"
                width={150}
                height={60}
                className="opacity-80 rounded"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Reflejos Artesanías. Todos los derechos reservados.</p>
          <p className="font-serif text-lg italic">El arte como reflejo del alma</p>
        </div>
      </div>

      {/* Large decorative text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <p className="font-serif text-[12vw] leading-none text-primary-foreground/[0.03] text-center whitespace-nowrap translate-y-1/3">
          Reflejos Artesanías
        </p>
      </div>
    </footer>
  )
}

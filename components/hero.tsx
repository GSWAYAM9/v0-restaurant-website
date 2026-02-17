import { ChevronDown } from 'lucide-react'

interface HeroProps {
  onReserveClick: () => void
}

export default function Hero({ onReserveClick }: HeroProps) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-foreground">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23d4af37" width="50" height="50"/%3E%3Crect fill="%231a1a1a" x="50" width="50" height="50"/%3E%3Crect fill="%231a1a1a" y="50" width="50" height="50"/%3E%3Crect fill="%23d4af37" x="50" y="50" width="50" height="50"/%3E%3C/svg%3E")'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6 inline-block">
          <span className="text-secondary text-sm font-medium tracking-widest uppercase">Welcome to Culinary Excellence</span>
        </div>

        <h1 className="font-serif text-6xl lg:text-8xl font-bold text-background mb-6 text-balance leading-tight">
          ÉCLAT
        </h1>

        <p className="text-xl lg:text-2xl text-background/90 mb-12 font-light max-w-2xl mx-auto">
          Where exceptional cuisine meets timeless elegance. A symphony of flavors in an atmosphere of refined luxury.
        </p>

        <button
          onClick={onReserveClick}
          className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded hover:bg-opacity-90 transition-all inline-block"
        >
          Reserve Your Table
        </button>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-secondary" size={32} />
        </div>
      </div>
    </section>
  )
}

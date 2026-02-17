'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onReserveClick: () => void
}

export default function Header({ onReserveClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="font-serif text-2xl font-bold text-foreground tracking-wide">ÉCLAT</h1>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#menu" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Menu</a>
              <a href="#ambiance" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Ambiance</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onReserveClick}
              className="hidden sm:block px-6 py-2 bg-secondary text-secondary-foreground font-medium text-sm rounded hover:bg-opacity-90 transition-all"
            >
              Reserve
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-muted rounded transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-3 border-t border-border mt-4">
            <a href="#menu" className="block text-sm font-medium text-foreground hover:text-secondary transition-colors">Menu</a>
            <a href="#ambiance" className="block text-sm font-medium text-foreground hover:text-secondary transition-colors">Ambiance</a>
            <a href="#contact" className="block text-sm font-medium text-foreground hover:text-secondary transition-colors">Contact</a>
            <button
              onClick={onReserveClick}
              className="w-full px-6 py-2 bg-secondary text-secondary-foreground font-medium text-sm rounded hover:bg-opacity-90 transition-all"
            >
              Reserve
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

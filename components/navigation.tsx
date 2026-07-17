'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso', href: '#process' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % navItems.length;
      document.getElementById(`nav-item-${nextIndex}`)?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + navItems.length) % navItems.length;
      document.getElementById(`nav-item-${prevIndex}`)?.focus();
    }
  }, [closeMenu]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0f1117]/90 border-b border-[#00d48e]/10" role="banner">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Navegación principal">
        <a 
          href="#" 
          className="flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#00d48e] rounded-lg"
          aria-label="Héctor Castillo - Inicio"
        >
          <span className="text-[#00d48e] font-mono text-lg" aria-hidden="true">&lt;</span>
          <span className="text-2xl font-bold text-[#00d48e]">HC</span>
          <span className="text-[#00d48e] font-mono text-lg" aria-hidden="true">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a
                id={`nav-item-${index}`}
                href={item.href}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="relative text-[#a0a8b8] hover:text-white transition-colors group focus:outline-none focus:ring-2 focus:ring-[#00d48e] rounded px-2 py-1"
                role="listitem"
              >
                {item.label}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d48e] to-[#ff6b35] group-hover:w-full transition-all" 
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="#contact" 
          className="hidden md:inline-flex px-6 py-2 rounded-full bg-gradient-to-r from-[#00d48e] to-[#00b570] text-[#0f1117] font-semibold hover:shadow-lg hover:shadow-[#00d48e]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#00d48e] focus:ring-offset-2 focus:ring-offset-[#0f1117]"
        >
          Contactar
        </a>

        <button
          onClick={toggleMenu}
          onBlur={() => setFocusedIndex(null)}
          onFocus={() => setFocusedIndex(-1)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d48e]"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#00d48e]/10 bg-[#16213e]/50 backdrop-blur-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil"
          >
            <ul className="px-4 py-4 space-y-3" role="list">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-2 text-[#a0a8b8] hover:text-[#00d48e] hover:bg-[#16213e] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d48e]"
                    role="listitem"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block px-4 py-2 rounded-lg bg-gradient-to-r from-[#00d48e] to-[#00b570] text-[#0f1117] font-semibold text-center"
                  role="listitem"
                >
                  Contactar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

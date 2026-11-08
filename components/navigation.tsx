'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso', href: '#process' },
  { label: 'Portafolio', href: '#portfolio' },
  { label: 'Productos', href: '#products' },
  { label: 'WhatsApp', href: '#whatsapp' },
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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#f4f0e7]/95 backdrop-blur-sm border-b border-[#1a1a18]/15"
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4"
        role="navigation"
        aria-label="Navegación principal"
      >
        <a
          href="#"
          className="group flex items-baseline gap-2 focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
          aria-label="Héctor Castillo - Inicio"
        >
          <span className="font-display text-2xl font-semibold tracking-tight">
            Héctor <span className="italic font-normal">Castillo</span>
          </span>
          <span className="w-2 h-2 bg-[#2e3bff] inline-block transition-transform group-hover:rotate-45" aria-hidden="true" />
        </a>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-7" role="list">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a
                id={`nav-item-${index}`}
                href={item.href}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="eyebrow text-[#6f6e67] hover:text-[#1a1a18] relative py-1 transition-colors group focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
                role="listitem"
              >
                {item.label}
                <span
                  className="absolute left-0 bottom-0 w-0 h-px bg-[#2e3bff] group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex btn-editorial px-5 py-2.5"
        >
          Escríbeme
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>

        <button
          onClick={toggleMenu}
          onBlur={() => setFocusedIndex(null)}
          onFocus={() => setFocusedIndex(-1)}
          className="lg:hidden p-2 -mr-2 hover:bg-[#1a1a18]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-t border-[#1a1a18]/15 bg-[#f4f0e7]"
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil"
          >
            <ul className="px-4 py-4 space-y-1" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block font-display text-2xl py-2 border-b border-[#1a1a18]/10 hover:text-[#2e3bff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2e3bff]"
                    role="listitem"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="btn-editorial w-full"
                  role="listitem"
                >
                  Escríbeme
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

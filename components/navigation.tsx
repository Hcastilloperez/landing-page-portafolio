'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#f2eddf] border-b-2 border-[#17171b]"
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4"
        role="navigation"
        aria-label="Navegación principal"
      >
        <a
          href="#"
          className="group inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#2e5bff] focus:ring-offset-2 focus:ring-offset-[#f2eddf] rounded-md"
          aria-label="Héctor Castillo - Inicio"
        >
          <span className="font-display text-xl bg-[#17171b] text-[#f2eddf] px-2.5 py-1 border-2 border-[#17171b] shadow-[3px_3px_0_0_#ffc93c] group-hover:shadow-[3px_3px_0_0_#ff4b2b] transition-shadow rounded-sm">
            HC<span className="text-[#ffc93c]">.</span>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#57575f] hidden sm:block">
            Héctor Castillo
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-2" role="list">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <a
                id={`nav-item-${index}`}
                href={item.href}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="inline-block px-2.5 py-1.5 text-sm font-bold uppercase tracking-wide text-[#17171b] hover:bg-[#ffc93c] hover:-rotate-1 border-2 border-transparent hover:border-[#17171b] hover:shadow-[3px_3px_0_0_#17171b] transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2e5bff] focus:ring-offset-2 focus:ring-offset-[#f2eddf]"
                role="listitem"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex brutal-btn px-5 py-2.5 bg-[#2e5bff] text-white text-sm uppercase tracking-wide rounded-sm"
        >
          Contactar
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>

        <button
          onClick={toggleMenu}
          onBlur={() => setFocusedIndex(null)}
          onFocus={() => setFocusedIndex(-1)}
          className="md:hidden brutal-btn p-2 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2e5bff] focus:ring-offset-2 focus:ring-offset-[#f2eddf]"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t-2 border-[#17171b] bg-[#f2eddf] shadow-[0_6px_0_0_#17171b]"
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil"
          >
            <ul className="px-4 py-4 space-y-2" role="list">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-2.5 font-bold uppercase tracking-wide border-2 border-[#17171b] bg-white shadow-[3px_3px_0_0_#17171b] hover:bg-[#ffc93c] transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2e5bff]"
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
                  className="block px-4 py-2.5 font-bold uppercase tracking-wide border-2 border-[#17171b] bg-[#2e5bff] text-white shadow-[3px_3px_0_0_#17171b] hover:bg-[#1f4ae0] transition-colors rounded-sm text-center"
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

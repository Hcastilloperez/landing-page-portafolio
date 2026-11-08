'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Trabajo', href: '#work' },
  { label: 'Servicios', href: '#services' },
  { label: 'Homelab', href: '#homelab' },
  { label: 'Stack', href: '#about' },
  { label: 'Proceso', href: '#process' },
  { label: 'WhatsApp', href: '#whatsapp' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-paper/85 backdrop-blur-md border-b border-ink/10"
      onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
    >
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4" aria-label="Navegación principal">
        <a
          href="#"
          className="flex items-center gap-2.5 font-mono text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm"
          aria-label="Héctor Castillo — Inicio"
        >
          <span className="grid place-items-center w-7 h-7 rounded-md bg-signal text-paper text-xs font-medium" aria-hidden="true">
            hc
          </span>
          <span className="hidden sm:inline">hector.castillo</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs text-soft hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-editorial btn-editorial-accent !py-1.5 !px-3.5 !text-xs">
            Hablemos
          </a>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-sm"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-ink/10 bg-paper"
          >
            <ul className="px-4 py-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-3 text-xl border-b border-ink/10 hover:text-signal transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

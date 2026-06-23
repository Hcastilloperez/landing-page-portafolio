'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Portafolio', href: '#portfolio' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#05050a]/80 border-b border-[#00e5ff]/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold grad-text">
          HC
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[#c8c8d8] hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00e5ff] to-[#c77dff] group-hover:w-full transition-all" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] text-[#05050a] font-semibold hover:shadow-lg hover:shadow-[#00e5ff]/50 transition-all">
            Contactar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-[#00e5ff]/10 bg-[#0a0a12]"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-[#c8c8d8] hover:text-[#00e5ff] hover:bg-[#10101a] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] text-[#05050a] font-semibold text-center"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

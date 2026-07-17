'use client';

import { motion } from 'framer-motion';
import { GitBranch, Share2, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: GitBranch, href: 'https://github.com/Hcastilloperez', label: 'GitHub' },
    { icon: Share2, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://twitter.com', label: 'X/Twitter' },
    { icon: Mail, href: 'mailto:hectorcastilloperez@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#about', label: 'Sobre Mí' },
    { href: '#services', label: 'Servicios' },
    { href: '#process', label: 'Proceso' },
    { href: '#portfolio', label: 'Portafolio' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <footer 
      className="border-t border-[#00d48e]/10"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-1 mb-2">
              <span className="text-[#00d48e] font-mono text-lg" aria-hidden="true">&lt;</span>
              <span className="text-2xl font-bold text-[#00d48e]">HC</span>
              <span className="text-[#00d48e] font-mono text-lg" aria-hidden="true">/&gt;</span>
            </div>
            <p className="text-[#a0a8b8] text-sm">
              Ingeniero de Sistemas & Desarrollador Full Stack
            </p>
            <p className="text-[#686878] text-xs mt-1">
              Software a medida + IA para empresas que toman decisiones con tecnología.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Enlaces rápidos"
          >
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-[#a0a8b8] hover:text-[#00d48e] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#00d48e] rounded px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Sígueme</h4>
            <div className="flex gap-3" role="list" aria-label="Redes sociales">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-[#00d48e]/20 hover:border-[#00d48e]/50 hover:bg-[#16213e]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#00d48e]"
                    title={social.label}
                    aria-label={social.label}
                    role="listitem"
                  >
                    <Icon className="w-4 h-4 text-[#a0a8b8] hover:text-[#00d48e] transition-colors" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-[#00d48e]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#686878] text-sm">
            © {currentYear} Héctor Castillo. Todos los derechos reservados.
          </p>
          <nav aria-label="Contacto" className="flex items-center gap-4 text-sm">
            <a 
              href="mailto:hectorcastilloperez@gmail.com" 
              className="text-[#686878] hover:text-[#00d48e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d48e] rounded px-1"
            >
              hectorcastilloperez@gmail.com
            </a>
            <span className="text-[#686878]" aria-hidden="true">•</span>
            <a 
              href="https://hectorcastillo.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#686878] hover:text-[#00d48e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d48e] rounded px-1"
            >
              hectorcastillo.net
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

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

  return (
    <footer className="border-t border-[#00d48e]/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-1 mb-2">
              <span className="text-[#00d48e] font-mono text-lg">&lt;</span>
              <span className="text-2xl font-bold text-[#00d48e]">HC</span>
              <span className="text-[#00d48e] font-mono text-lg">/&gt;</span>
            </div>
            <p className="text-[#a0a8b8] text-sm">
              Ingeniero de Sistemas & Desarrollador Full Stack
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-[#a0a8b8] hover:text-[#00d48e] transition-colors text-sm">Sobre Mí</a></li>
              <li><a href="#portfolio" className="text-[#a0a8b8] hover:text-[#00d48e] transition-colors text-sm">Portafolio</a></li>
              <li><a href="#contact" className="text-[#a0a8b8] hover:text-[#00d48e] transition-colors text-sm">Contacto</a></li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-4">Sígueme</h4>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-[#00d48e]/20 hover:border-[#00d48e]/50 hover:bg-[#16213e]/50 transition-all"
                    title={social.label}
                  >
                    <Icon className="w-4 h-4 text-[#a0a8b8] hover:text-[#00d48e] transition-colors" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00d48e]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#686878] text-sm">
            © {currentYear} Héctor Castillo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="mailto:hectorcastilloperez@gmail.com" className="text-[#686878] hover:text-[#00d48e] transition-colors">
              hectorcastilloperez@gmail.com
            </a>
            <span className="text-[#686878]">•</span>
            <a href="https://hectorcastillo.net" target="_blank" rel="noopener noreferrer" className="text-[#686878] hover:text-[#00d48e] transition-colors">
              hectorcastillo.net
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

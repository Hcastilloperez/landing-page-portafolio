'use client';

import { motion } from 'framer-motion';
import { GitBranch, Share2, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

const marqueeItems = [
  'HECHO CON PROPÓSITO',
  'REACT',
  'NODE.JS',
  'POSTGRESQL',
  'AI',
  'SAAS',
  'TYPESCRIPT',
  'TAILWIND',
];

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
    <footer className="border-t-2 border-[#17171b] bg-[#17171b] text-[#f2eddf]" role="contentinfo">
      <div
        className="bg-[#ff4b2b] border-b-2 border-[#17171b] py-2.5 overflow-hidden"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-display uppercase tracking-wide text-sm px-5 flex items-center gap-5"
                >
                  {item}
                  <span className="inline-block w-2.5 h-2.5 bg-[#17171b] rotate-45" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block font-display text-2xl bg-[#ffc93c] text-[#17171b] px-3 py-1 border-2 border-[#17171b] shadow-[3px_3px_0_0_#2e5bff] mb-4 rounded-sm">
              HC<span className="text-[#17171b]">.</span>
            </span>
            <p className="font-display uppercase tracking-wide text-lg mb-2">
              Ingeniero de Sistemas & Full Stack
            </p>
            <p className="text-[#a0a8a0] text-sm leading-relaxed max-w-xs">
              Software a medida + IA para empresas que toman decisiones con tecnología.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Enlaces rápidos"
          >
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#ffc93c] mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wide text-sm hover:text-[#ffc93c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffc93c] rounded-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#ffc93c] mb-4">
              Sígueme
            </h4>
            <div className="flex gap-3" role="list" aria-label="Redes sociales">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center bg-[#f2eddf] text-[#17171b] border-2 border-[#17171b] shadow-[3px_3px_0_0_#2e5bff] hover:shadow-[3px_3px_0_0_#ffc93c] hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#ffc93c] rounded-sm"
                    title={social.label}
                    aria-label={social.label}
                    role="listitem"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t-2 border-[#f2eddf]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#a0a8a0]">
            © {currentYear} Héctor Castillo. Todos los derechos reservados.
          </p>
          <nav aria-label="Contacto" className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest">
            <a
              href="mailto:hectorcastilloperez@gmail.com"
              className="text-[#a0a8a0] hover:text-[#ffc93c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffc93c] rounded-sm"
            >
              Email
            </a>
            <span aria-hidden="true">•</span>
            <a
              href="https://hectorcastillo.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a8a0] hover:text-[#ffc93c] transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffc93c] rounded-sm"
            >
              hectorcastillo.net
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { motion } from 'framer-motion';
import { GitBranch, Share2, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

const marqueeItems = [
  'Software a medida',
  'Agentes de IA',
  'SaaS multi-tenant',
  'E-commerce',
  'Automatización',
  'Diseño de producto',
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
    <footer className="border-t border-[#1a1a18]/15 bg-[#fffdf8]" role="contentinfo">
      <div
        className="border-b border-[#1a1a18]/15 py-3 overflow-hidden bg-[#f4f0e7]"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-display italic text-xl px-8 flex items-center gap-8 text-[#1a1a18]/70"
                >
                  {item}
                  <span className="text-[#2e3bff] not-italic" aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-display text-3xl font-medium tracking-tight mb-4">
              Héctor <em className="italic font-normal">Castillo</em>
            </p>
            <p className="font-display text-lg mb-2">Ingeniero de Sistemas & Full Stack</p>
            <p className="text-[#6f6e67] text-sm leading-relaxed max-w-xs">
              Software a medida + IA para empresas que toman decisiones con tecnología.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Enlaces rápidos"
          >
            <h4 className="eyebrow text-[10px] text-[#2e3bff] mb-4">Enlaces</h4>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 font-display text-lg hover:italic hover:text-[#2e3bff] transition-all focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
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
            <h4 className="eyebrow text-[10px] text-[#2e3bff] mb-4">Sígueme</h4>
            <div className="flex gap-3" role="list" aria-label="Redes sociales">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-[#1a1a18]/25 rounded-full hover:bg-[#1a1a18] hover:text-[#f4f0e7] hover:border-[#1a1a18] transition-all focus:outline-none focus:ring-2 focus:ring-[#2e3bff]"
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

        <div className="pt-8 border-t border-[#1a1a18]/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="eyebrow text-[10px] text-[#6f6e67]">
            © {currentYear} Héctor Castillo. Todos los derechos reservados.
          </p>
          <nav
            aria-label="Contacto"
            className="flex items-center gap-6 eyebrow text-[10px] text-[#6f6e67]"
          >
            <a
              href="mailto:hectorcastilloperez@gmail.com"
              className="hover:text-[#2e3bff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
            >
              Email
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://hectorcastillo.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2e3bff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
            >
              hectorcastillo.net
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

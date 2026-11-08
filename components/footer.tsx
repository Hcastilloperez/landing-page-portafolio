'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GitBranch, Share2, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { legalLinks, products, site, whatsappUrl } from '@/lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: GitBranch, href: 'https://github.com/Hcastilloperez', label: 'GitHub' },
    { icon: Share2, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://twitter.com', label: 'X/Twitter' },
    { icon: Mail, href: `mailto:${site.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { href: '/#work', label: 'Trabajo' },
    { href: '/#services', label: 'Servicios' },
    { href: '/#homelab', label: 'Homelab' },
    { href: '/#about', label: 'Stack' },
    { href: '/#process', label: 'Proceso' },
    { href: '/#whatsapp', label: 'WhatsApp' },
    { href: '/#contact', label: 'Contacto' },
  ];

  return (
    <footer className="border-t border-ink/15 bg-panel" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link
              href="/"
              className="inline-block font-display text-3xl font-medium tracking-tight mb-4 focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
              aria-label={`${site.brand} — Inicio`}
            >
              Héctor <em className="font-normal">Castillo</em>
            </Link>
            <p className="font-display text-lg mb-2">{site.role}</p>
            <p className="text-soft text-sm leading-relaxed max-w-xs mb-5">
              Software a medida + IA para empresas que toman decisiones con tecnología.
            </p>

            <address className="not-italic text-sm leading-relaxed space-y-1.5">
              <p className="eyebrow text-[10px] text-soft">{site.location}</p>
              <p>
                <a
                  href={`tel:${site.phone.tel}`}
                  className="hover:text-signal transition-colors focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
                >
                  {site.phone.display}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all hover:text-signal transition-colors focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
                >
                  {site.email}
                </a>
              </p>
            </address>

            <div className="flex gap-3 mt-6" role="list" aria-label="Redes sociales">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-ink/25 rounded-full hover:bg-ink hover:text-paper hover:border-ink transition-all focus:outline-none focus:ring-2 focus:ring-signal"
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

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Enlaces rápidos"
          >
            <h2 className="eyebrow text-[10px] text-signal mb-4">Enlaces</h2>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 font-display text-lg hover:text-signal transition-all focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            aria-label="Productos"
          >
            <h2 className="eyebrow text-[10px] text-signal mb-4">Productos</h2>
            <ul className="space-y-2.5" role="list">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-display text-lg hover:text-signal transition-all focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
                  >
                    {product.name}
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-lg hover:text-signal transition-all focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
                >
                  WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Legal"
          >
            <h2 className="eyebrow text-[10px] text-signal mb-4">Legal</h2>
            <ul className="space-y-2.5" role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 font-display text-lg hover:text-signal transition-all focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-soft text-xs leading-relaxed mt-5">
              Recordatorios por WhatsApp solo con consentimiento previo. Responde BAJA para
              detenerlos.
            </p>
          </motion.nav>
        </div>

        <div className="pt-8 border-t border-ink/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="eyebrow text-[10px] text-soft">
            © {currentYear} {site.name}. Todos los derechos reservados.
          </p>
          <nav
            aria-label="Contacto directo"
            className="flex flex-wrap items-center justify-center gap-4 eyebrow text-[10px] text-soft"
          >
            <a
              href={`tel:${site.phone.tel}`}
              className="hover:text-signal transition-colors focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
            >
              {site.phone.display}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${site.email}`}
              className="hover:text-signal transition-colors focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
            >
              Email
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={site.url}
              className="hover:text-signal transition-colors focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
            >
              hectorcastillo.net
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

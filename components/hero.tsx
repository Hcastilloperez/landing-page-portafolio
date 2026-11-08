'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

const live = [
  { name: 'MediCitas', kind: 'Agenda médica', host: 'medicitas.hectorcastillo.net', href: 'https://medicitas.hectorcastillo.net/' },
  { name: 'BarberControl', kind: 'Gestión de barberías', host: 'barbercontrol.hectorcastillo.net', href: 'https://barbercontrol.hectorcastillo.net/' },
  { name: 'Soter', kind: 'Seguridad empresarial', host: 'soter.hectorcastillo.net', href: 'https://soter.hectorcastillo.net' },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

function CircuitTrace() {
  return (
    <svg
      className="absolute right-0 top-0 h-full w-[60%] pointer-events-none hidden md:block opacity-40 [mask-image:linear-gradient(to_right,transparent,#000_45%)]"
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMaxYMin slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="trace-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff5b1f" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ff5b1f" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff5b1f" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <g stroke="url(#trace-fade)" strokeWidth="1.25" strokeLinecap="square">
        <path d="M0 120 H260 L320 180 H560 L620 120 H800" />
        <path d="M120 260 H340 L400 320 H640 L700 260 H800" className="trace-run" />
        <path d="M0 420 H200 L260 360 H480 L540 420 H800" />
        <path d="M300 0 V70 L360 130 V240" />
        <path d="M600 600 V500 L660 440 V330" className="trace-run" />
      </g>
      <g fill="#ff5b1f">
        <circle cx="320" cy="180" r="2.5" />
        <circle cx="620" cy="120" r="2.5" />
        <circle cx="400" cy="320" r="2.5" />
        <circle cx="260" cy="360" r="2.5" />
        <circle cx="660" cy="330" r="2.5" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-14 overflow-hidden" aria-labelledby="hero-title">
      <div className="grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />
      <CircuitTrace />

      <div className="relative max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-20 md:pb-32">
        <motion.p {...fade(0.05)} className="flex items-center gap-2.5 font-mono text-xs text-soft mb-8">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-signal opacity-60 motion-safe:animate-ping" />
            <span className="relative w-2 h-2 rounded-full bg-signal" />
          </span>
          Disponible para proyectos · {site.location}
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <motion.h1
              id="hero-title"
              {...fade(0.12)}
              className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
            >
              Software que se queda
              <br />
              en <span className="text-signal">producción</span>
              <span className="caret ml-1" aria-hidden="true" />
            </motion.h1>

            <motion.p {...fade(0.22)} className="mt-8 max-w-xl text-lg text-soft leading-relaxed">
              Soy Héctor, ingeniero de sistemas y desarrollador full stack. Diseño, programo y opero mis
              propios SaaS —y construyo los tuyos— con el mismo cuidado: agendas médicas, gestión de
              negocios, agentes de IA y plataformas a medida.
            </motion.p>

            <motion.div {...fade(0.3)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#work" className="btn-editorial btn-editorial-accent">
                Ver lo que he construido
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-editorial-text">
                Cuéntame tu proyecto
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <motion.aside {...fade(0.28)} className="lg:col-span-5" aria-label="Productos en producción">
            <div className="rounded-lg border border-ink/15 bg-panel overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ink/10 font-mono text-[11px] text-soft">
                <span className="flex gap-1.5" aria-hidden="true">
                  <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
                  <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
                  <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
                </span>
                <span className="ml-2">en producción</span>
              </div>
              <ul>
                {live.map((p) => (
                  <li key={p.name} className="border-b border-ink/10 last:border-0">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 px-4 py-4 hover:bg-ink/[0.04] transition-colors focus:outline-none focus-visible:bg-ink/[0.06]"
                      aria-label={`${p.name}: ${p.kind} (se abre en nueva pestaña)`}
                    >
                      <span className="min-w-0">
                        <span className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                          <span className="text-lg font-medium tracking-tight">{p.name}</span>
                        </span>
                        <span className="block font-mono text-[11px] text-soft mt-1 truncate">{p.host}</span>
                      </span>
                      <ArrowUpRight
                        className="w-4 h-4 shrink-0 text-soft group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

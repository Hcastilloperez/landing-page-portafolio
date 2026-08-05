'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const marqueeItems = [
  'FULL STACK',
  'IA & AGENTES',
  'SAAS',
  'REACT / NEXT.JS',
  'NODE.JS',
  'POSTGRESQL',
  'AUTOMATIZACIÓN',
  'E-COMMERCE',
];

const stats = [
  { value: '+5', label: 'Años de experiencia' },
  { value: '3', label: 'SaaS en producción' },
  { value: '100%', label: 'Código con propósito' },
];

const stackChips = ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Prisma'];

export default function Hero() {
  return (
    <section
      className="relative pt-16 md:pt-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-dots pointer-events-none" aria-hidden="true" />

      <motion.div
        className="absolute -top-12 -right-12 w-56 h-56 bg-[#ff4b2b] border-2 border-[#17171b] rotate-6 pointer-events-none hidden md:block"
        animate={{ rotate: [6, 9, 6] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden="true"
      >
        <span className="font-display text-3xl text-[#f2eddf] [writing-mode:vertical-rl] block mt-6 ml-3">
          SIN BULLSHIT
        </span>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="sticker bg-[#17c49b] rotate-[-2deg] px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#17171b] animate-pulse" aria-hidden="true" />
                Disponible para proyectos
              </span>
              <span className="sticker bg-white px-3 py-1.5 rotate-1 hidden sm:inline-flex">
                Bogotá · CO
              </span>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display uppercase tracking-tight leading-[0.95] mb-8"
            >
              <span className="block text-6xl md:text-8xl">Código</span>
              <span className="block text-6xl md:text-8xl mt-1">
                con{' '}
                <span className="relative inline-block bg-[#ffc93c] px-3 border-2 border-[#17171b] shadow-[4px_4px_0_0_#17171b] rotate-[-2deg] rounded-sm">
                  propósito
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[#57575f] max-w-xl mb-10 leading-relaxed"
            >
              Ingeniero de Sistemas y Desarrollador Full Stack. Construyo{' '}
              <strong className="text-[#17171b]">SaaS, agentes de IA y plataformas empresariales</strong>{' '}
              donde el diseño y la arquitectura trabajan igual de duro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#portfolio"
                className="brutal-btn px-7 py-3.5 bg-[#17171b] text-[#f2eddf] font-display uppercase tracking-wide text-lg rounded-sm"
              >
                Ver portafolio
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="brutal-btn px-7 py-3.5 bg-white text-[#17171b] font-display uppercase tracking-wide text-lg rounded-sm"
              >
                Hablemos
                <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 max-w-lg"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="brutal-card p-3 bg-white">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl text-[#2e5bff]">{stat.value}</dd>
                  <dd className="font-mono text-[10px] uppercase tracking-widest text-[#57575f] mt-1 leading-tight">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="relative"
            >
              <div className="sticker bg-[#ff86c8] px-3 py-1.5 rotate-[-6deg] absolute -top-5 -left-3 z-10">
                Full Stack
              </div>
              <div className="sticker bg-[#ff4b2b] px-3 py-1.5 rotate-[4deg] absolute -right-3 top-24 z-10 text-white">
                AI + SaaS
              </div>
              <div className="sticker bg-[#17c49b] px-3 py-1.5 rotate-[5deg] absolute -bottom-5 left-8 z-10">
                Open to work
              </div>

              <div className="animate-float-card">
                <div className="brutal-card rotate-1 bg-[#fffdf4] p-6 relative z-[5]">
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ffc93c] border-2 border-[#17171b] shadow-[2px_2px_0_0_#17171b] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest whitespace-nowrap rounded-sm">
                    Tarjeta de presentación
                  </span>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 shrink-0 bg-[#17171b] text-[#f2eddf] font-display text-2xl flex items-center justify-center border-2 border-[#17171b] shadow-[4px_4px_0_0_#2e5bff] rounded-sm">
                      HC
                    </div>
                    <div>
                      <p className="font-display text-2xl uppercase leading-none">Héctor Castillo</p>
                      <p className="font-mono text-xs uppercase tracking-widest text-[#57575f] mt-1">
                        Software Engineer
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6" aria-label="Stack tecnológico">
                    {stackChips.map((chip) => (
                      <span
                        key={chip}
                        className="sticker bg-[#f2eddf] px-2.5 py-1 text-[11px]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div
                    className="h-9 flex items-end gap-[3px] mb-5"
                    role="img"
                    aria-label="Código de barras decorativo"
                  >
                    {[9, 3, 6, 4, 8, 2, 7, 5, 10, 4, 6, 3, 9, 5, 7].map((w, i) => (
                      <span key={i} className="bg-[#17171b]" style={{ width: `${w}px`, height: '100%' }} />
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t-2 border-[#17171b] pt-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                      hectorcastillo.net
                    </span>
                    <span className="w-8 h-8 bg-[#17171b] rotate-45" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-[#ffc93c] border-y-2 border-[#17171b] py-3 overflow-hidden"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="font-display uppercase tracking-wide text-lg px-6 flex items-center gap-6"
                >
                  {item}
                  <span className="inline-block w-3 h-3 bg-[#17171b] rotate-45" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

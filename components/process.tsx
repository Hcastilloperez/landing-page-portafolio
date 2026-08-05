'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket, RefreshCw, ArrowRight } from 'lucide-react';

const phases = [
  {
    id: '01',
    title: 'Discovery',
    description: 'Entiendo tu negocio, objetivos y restricciones. Defino KPIs medibles desde el día uno.',
    icon: Search,
    color: '#2e5bff',
  },
  {
    id: '02',
    title: 'Diseño',
    description: 'Arquitectura y UX diseñados para escalar. Prototipos interactivos antes de escribir código.',
    icon: Palette,
    color: '#ff4b2b',
  },
  {
    id: '03',
    title: 'Ingeniería',
    description: 'Desarrollo ágil con code reviews, tests automatizados y despliegues continuos.',
    icon: Code,
    color: '#ffc93c',
  },
  {
    id: '04',
    title: 'Lanzamiento',
    description: 'Deploy seguro con monitoring, logging y soporte las primeras 24 horas.',
    icon: Rocket,
    color: '#17c49b',
  },
  {
    id: '05',
    title: 'Iteración',
    description: 'Mido contra KPIs, recolecto feedback y mejoro en ciclos cortos.',
    icon: RefreshCw,
    color: '#ff86c8',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="font-display text-5xl text-outline" aria-hidden="true">03</span>
            <div className="h-[2px] w-12 bg-[#17171b]" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#57575f]">
              Método
            </span>
          </div>
          <h2
            id="process-title"
            className="font-display uppercase tracking-tight leading-[1.02] text-4xl md:text-6xl mb-6"
          >
            Cinco fases.{' '}
            <span className="bg-[#17c49b] px-3 border-2 border-[#17171b] shadow-[4px_4px_0_0_#17171b] inline-block rotate-[1deg] rounded-sm">
              una órbita
            </span>
          </h2>
          <p className="text-lg text-[#57575f] max-w-2xl leading-relaxed">
            Cada proyecto pasa por las mismas cinco fases. Lo que cambia es el alcance y el tiempo
            dentro de cada una.
          </p>
        </motion.header>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 border-t-2 border-dashed border-[#17171b]/30"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" role="list">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.li
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative"
                >
                  <article className="group brutal-card brutal-card-hover bg-white p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="w-14 h-14 flex items-center justify-center border-2 border-[#17171b] shadow-[3px_3px_0_0_#17171b] rounded-sm"
                        style={{ backgroundColor: phase.color }}
                        aria-hidden="true"
                      >
                        <IconComponent className="w-6 h-6 text-[#17171b]" />
                      </span>
                      <span className="font-display text-4xl text-outline opacity-70" aria-hidden="true">
                        {phase.id}
                      </span>
                    </div>

                    <h3 className="font-display text-lg uppercase tracking-wide mb-3">
                      {phase.title}
                    </h3>

                    <p className="text-[#57575f] text-sm leading-relaxed mb-4 flex-grow">
                      {phase.description}
                    </p>

                    {index < phases.length - 1 && (
                      <span
                        className="hidden lg:flex absolute -right-6 top-8 z-10 w-9 h-9 items-center justify-center bg-white border-2 border-[#17171b] shadow-[2px_2px_0_0_#17171b] rounded-full"
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center font-mono text-sm uppercase tracking-widest text-[#57575f]"
        >
          <span className="inline-block bg-[#ffc93c] border-2 border-[#17171b] shadow-[2px_2px_0_0_#17171b] px-2 py-0.5 rotate-[-1deg] rounded-sm text-[#17171b] mr-2">
            Nota
          </span>
          Transparencia en cada fase, sin sorpresas de último minuto
        </motion.p>
      </div>
    </section>
  );
}

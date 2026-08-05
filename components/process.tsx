'use client';

import { motion } from 'framer-motion';
import { Search, Palette, Code, Rocket, RefreshCw } from 'lucide-react';

const phases = [
  {
    id: '01',
    title: 'Discovery',
    description: 'Entiendo tu negocio, objetivos y restricciones. Defino KPIs medibles desde el día uno.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Diseño',
    description: 'Arquitectura y UX diseñados para escalar. Prototipos interactivos antes de escribir código.',
    icon: Palette,
  },
  {
    id: '03',
    title: 'Ingeniería',
    description: 'Desarrollo ágil con code reviews, tests automatizados y despliegues continuos.',
    icon: Code,
  },
  {
    id: '04',
    title: 'Lanzamiento',
    description: 'Deploy seguro con monitoring, logging y soporte las primeras 24 horas.',
    icon: Rocket,
  },
  {
    id: '05',
    title: 'Iteración',
    description: 'Mido contra KPIs, recolecto feedback y mejoro en ciclos cortos.',
    icon: RefreshCw,
  },
];

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-5">
      <span className="font-display italic text-2xl text-[#2e3bff]" aria-hidden="true">{index}</span>
      <span className="eyebrow text-[#6f6e67]">{label}</span>
      <div className="flex-1 h-px bg-[#1a1a18]/15" aria-hidden="true" />
    </div>
  );
}

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
          <SectionHeader index="03" label="Método" />
          <h2
            id="process-title"
            className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05] mb-6"
          >
            Cinco fases,{' '}
            <em className="italic font-normal text-[#2e3bff]">una sola órbita</em>
          </h2>
          <p className="text-lg text-[#6f6e67] max-w-2xl leading-relaxed">
            Cada proyecto pasa por las mismas cinco fases. Lo que cambia es el alcance y el tiempo
            dentro de cada una.
          </p>
        </motion.header>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-7 left-0 right-0 border-t border-dashed border-[#1a1a18]/25"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10" role="list">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.li
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <article className="group h-full">
                    <div className="relative mb-6">
                      <div className="w-14 h-14 flex items-center justify-center border border-[#1a1a18]/20 rounded-full bg-[#fffdf8] group-hover:bg-[#2e3bff] group-hover:border-[#2e3bff] group-hover:text-white transition-all" aria-hidden="true">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="absolute -right-0 top-0 font-display italic text-5xl text-[#1a1a18]/10 leading-none" aria-hidden="true">
                        {phase.id}
                      </span>
                    </div>

                    <p className="eyebrow text-[10px] text-[#2e3bff] mb-2">Fase {phase.id}</p>
                    <h3 className="font-display text-2xl mb-3 group-hover:italic transition-all">
                      {phase.title}
                    </h3>
                    <p className="text-[#6f6e67] text-sm leading-relaxed">
                      {phase.description}
                    </p>
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
          className="mt-14 font-display italic text-xl text-[#6f6e67] border-t border-[#1a1a18]/15 pt-6"
        >
          Transparencia en cada fase, sin sorpresas de último minuto.
        </motion.p>
      </div>
    </section>
  );
}

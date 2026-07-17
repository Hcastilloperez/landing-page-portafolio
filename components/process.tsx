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

export default function Process() {
  return (
    <section 
      id="process" 
      className="py-32 relative overflow-hidden"
      aria-labelledby="process-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b35]/3 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#ff6b35] font-mono text-sm" aria-hidden="true">03</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#ff6b35] to-transparent" aria-hidden="true" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Método</span>
          </div>
          <h2 id="process-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cinco fases. <span className="text-[#ff6b35]">Una sola órbita</span>
          </h2>
          <p className="text-lg text-[#a0a8b8] max-w-2xl mx-auto leading-relaxed">
            Cada proyecto pasa por las mismas cinco fases. Lo que cambia es el alcance y el tiempo dentro de cada una.
          </p>
        </motion.header>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent -translate-y-1/2 hidden md:block" aria-hidden="true" />
          
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6" role="list">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.li
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <article className="md:pt-12">
                    <div className="relative p-6 rounded-xl border border-[#ff6b35]/20 bg-[#0f1117]/60 hover:border-[#ff6b35]/50 hover:bg-[#0f1117]/80 transition-all duration-300 group cursor-pointer">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff6b35] flex items-center justify-center" aria-hidden="true">
                        <span className="text-[#0f1117] font-bold text-sm">{phase.id}</span>
                      </div>
                      
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#ff6b35]/10 border border-[#ff6b35]/30 mb-4 mx-auto md:mx-0 group-hover:bg-[#ff6b35]/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-[#ff6b35]" aria-hidden="true" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 text-center md:text-left group-hover:text-[#ff6b35] transition-colors">
                        {phase.title}
                      </h3>
                      
                      <p className="text-sm text-[#a0a8b8] leading-relaxed text-center md:text-left">
                        {phase.description}
                      </p>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-[#a0a8b8] text-sm"
        >
          <span className="text-[#ff6b35]">Nota:</span> Hacé click en cualquier fase para ver el detalle
        </motion.p>
      </div>
    </section>
  );
}

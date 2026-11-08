'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/section-header';

const phases = [
  { title: 'Discovery', description: 'Entiendo tu negocio, objetivos y restricciones. Definimos qué se mide desde el día uno.' },
  { title: 'Diseño', description: 'Arquitectura y UX pensadas para escalar. Prototipos antes de escribir código.' },
  { title: 'Ingeniería', description: 'Desarrollo en ciclos cortos, con revisión de código, pruebas y despliegue continuo.' },
  { title: 'Lanzamiento', description: 'Deploy seguro con monitoreo, logs y acompañamiento las primeras 24 horas.' },
  { title: 'Iteración', description: 'Medimos contra los objetivos, recogemos feedback y mejoramos en ciclos cortos.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-ink/10" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader index="05" label="Proceso" />
        <div className="grid lg:grid-cols-12 gap-6 mb-16">
          <h2
            id="process-title"
            className="lg:col-span-7 text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05]"
          >
            Cinco fases, sin sorpresas de último minuto.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-soft leading-relaxed self-end">
            Todos los proyectos pasan por las mismas fases. Cambia el alcance y el tiempo dentro de cada una.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 border-t border-ink/10">
          {phases.map((phase, i) => (
            <motion.li
              key={phase.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative pt-6 pb-8 pr-6 lg:border-r border-ink/10 last:border-r-0 lg:pl-6 first:lg:pl-0"
            >
              <span
                className="absolute -top-px left-0 lg:left-auto h-px w-10 bg-signal lg:first:left-0"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-signal mb-6">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="text-xl font-medium tracking-tight mb-3">{phase.title}</h3>
              <p className="text-sm text-soft leading-relaxed">{phase.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

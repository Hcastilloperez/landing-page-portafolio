'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';

const skills = [
  { name: 'Desarrollo Web', level: 95 },
  { name: 'Inteligencia Artificial', level: 88 },
  { name: 'Arquitectura de Sistemas', level: 90 },
  { name: 'Diseño UX/UI', level: 85 },
];

const passions = [
  'Inteligencia Artificial',
  'Arquitectura de Sistemas',
  'Diseño Digital',
  'Seguridad',
  'SaaS',
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

export default function About() {
  const skillDetails = useCallback((level: number) => {
    if (level >= 90) return 'Experto';
    if (level >= 80) return 'Avanzado';
    if (level >= 70) return 'Intermedio';
    return 'Básico';
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 relative" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader index="01" label="Sobre mí" />
          <h2
            id="about-title"
            className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05] max-w-3xl mb-6"
          >
            Ingeniero de sistemas y{' '}
            <em className="italic font-normal text-[#2e3bff]">full stack</em>, con una obsesión por
            el detalle.
          </h2>
        </motion.header>

        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[#6f6e67] leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Empecé en seguridad electrónica y consultoría, pero siempre me llamó el desarrollo de
                software. Hoy combino ambas pasiones para crear plataformas que no solo funcionan,
                sino que también son seguras y bien diseñadas.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Cada proyecto es una excusa para aprender algo nuevo: de sistemas SaaS multi-tenant a
                agentes de IA. He trabajado con startups y empresas establecidas para llevar sus
                visiones a la realidad.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Cuando no estoy codificando, exploro nuevas tecnologías, contribuyo a proyectos open
                source o disfruto del aire libre. El equilibrio entre trabajo y vida es clave para la
                creatividad sostenida.
              </motion.p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display italic text-2xl leading-snug border-l-2 border-[#2e3bff] pl-6 my-10"
            >
              «La buena arquitectura se siente. La mala se paga después.»
            </motion.blockquote>

            </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
            aria-label="Habilidades técnicas"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg">{skill.name}</span>
                  <span
                    className="eyebrow text-[10px] text-[#2e3bff]"
                    aria-label={`${skill.name}: ${skill.level}% - ${skillDetails(skill.level)}`}
                  >
                    {skill.level}% — {skillDetails(skill.level)}
                  </span>
                </div>
                <div
                  className="h-px bg-[#1a1a18]/15 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name}: ${skill.level}%`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.9, delay: index * 0.1 }}
                    className="h-full bg-[#2e3bff]"
                  />
                </div>
              </div>
            ))}

            <div className="pt-4">
              <h3 className="eyebrow text-[#6f6e67] mb-4">Áreas de especialización</h3>
              <ul
                className="font-display text-xl md:text-2xl space-y-2.5"
                role="list"
                aria-label="Áreas de especialización"
              >
                {passions.map((passion, index) => (
                  <motion.li
                    key={passion}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-baseline gap-4 border-b border-[#1a1a18]/10 pb-2.5"
                  >
                    <span className="font-mono text-xs text-[#2e3bff]" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span className="hover:text-[#2e3bff] hover:italic transition-all cursor-default">
                      {passion}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

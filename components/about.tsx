'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';

const skills = [
  { name: 'Desarrollo Web', level: 95, color: '#2e5bff' },
  { name: 'Inteligencia Artificial', level: 88, color: '#ff4b2b' },
  { name: 'Arquitectura de Sistemas', level: 90, color: '#ffc93c' },
  { name: 'Diseño UX/UI', level: 85, color: '#17c49b' },
];

const passions = [
  'Inteligencia Artificial',
  'Arquitectura de Sistemas',
  'Diseño Digital',
  'Seguridad',
  'SaaS',
];

const facts = [
  { value: '+5', label: 'Años en software' },
  { value: '16', label: 'Proyectos entregados' },
  { value: 'LATAM', label: 'Clientes en 3 regiones' },
];

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
          <div className="flex items-center gap-4 mb-5">
            <span className="font-display text-5xl text-outline" aria-hidden="true">01</span>
            <div className="h-[2px] w-12 bg-[#17171b]" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#57575f]">
              Sobre mí
            </span>
          </div>
          <h2
            id="about-title"
            className="font-display uppercase tracking-tight leading-[1.02] text-4xl md:text-6xl mb-6"
          >
            Ingeniero de sistemas<br />
            <span className="bg-[#ff86c8] px-3 border-2 border-[#17171b] shadow-[4px_4px_0_0_#17171b] inline-block rotate-[1deg] rounded-sm">
              & full stack
            </span>
          </h2>
          <p className="text-lg text-[#57575f] max-w-2xl leading-relaxed">
            Con más de 5 años de experiencia, transformo ideas en productos digitales que combinan
            diseño elegante con arquitectura sólida. Mi pasión: crear tecnología que genera impacto real.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#57575f] leading-relaxed"
            >
              Empecé en seguridad electrónica y consultoría, pero siempre me llamó el desarrollo de
              software. Hoy combino ambas pasiones para crear plataformas que no solo funcionan,
              sino que también son seguras y hermosas.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#57575f] leading-relaxed"
            >
              Cada proyecto es una excusa para aprender algo nuevo: de sistemas SaaS multi-tenant a
              agentes de IA. He trabajado con startups y empresas establecidas para llevar sus
              visiones a la realidad.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#57575f] leading-relaxed"
            >
              Cuando no estoy codificando, exploro nuevas tecnologías, contribuyo a proyectos open
              source o disfruto del aire libre. El equilibrio entre trabajo y vida es clave para la
              creatividad sostenida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`brutal-card p-4 bg-white ${
                    i === 0 ? 'rotate-[-1.5deg]' : i === 1 ? 'rotate-[1deg]' : 'rotate-[-0.5deg]'
                  }`}
                >
                  <p className="font-display text-3xl text-[#ff4b2b]">{fact.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#57575f] mt-1 leading-tight">
                    {fact.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
            aria-label="Habilidades técnicas"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="brutal-card bg-white p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold uppercase tracking-wide">{skill.name}</span>
                  <span
                    className="sticker px-2 py-0.5 text-[10px]"
                    style={{ backgroundColor: skill.color }}
                    aria-label={`${skill.name}: ${skill.level}% - ${skillDetails(skill.level)}`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="h-5 bg-[#f2eddf] border-2 border-[#17171b] overflow-hidden rounded-sm"
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
                    className="h-full border-r-2 border-[#17171b]"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))}

            <div className="brutal-card p-4 bg-white rotate-[-0.5deg]">
              <h3 className="sr-only">Áreas de especialización</h3>
              <ul className="flex flex-wrap gap-2.5" role="list" aria-label="Áreas de especialización">
                {passions.map((passion, index) => (
                  <motion.li
                    key={passion}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="sticker bg-white px-3 py-1.5 hover:-rotate-2 transition-transform">
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

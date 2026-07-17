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
  'Seguridad'
];

export default function About() {
  const skillDetails = useCallback((level: number) => {
    if (level >= 90) return 'Experto';
    if (level >= 80) return 'Avanzado';
    if (level >= 70) return 'Intermedio';
    return 'Básico';
  }, []);

  return (
    <section 
      id="about" 
      className="py-32 relative"
      aria-labelledby="about-title"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm" aria-hidden="true">01</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" aria-hidden="true" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Sobre Mí</span>
          </div>
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ingeniero de Sistemas & Desarrollador Full Stack
          </h2>
          <p className="text-lg text-[#a0a8b8] max-w-2xl leading-relaxed">
            Con más de 5 años de experiencia, me especializo en crear soluciones web innovadoras que combinan diseño elegante con arquitectura sólida. Mi pasión es transformar ideas en productos digitales que generan impacto real.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-[#a0a8b8] leading-relaxed">
              Inicio mi carrera en seguridad electrónica y consultoría, pero siempre sentí la llamada del desarrollo software. Hoy combino ambas pasiones para crear plataformas que no solo son funcionales, sino también seguras y hermosas.
            </p>
            <p className="text-[#a0a8b8] leading-relaxed">
              Cada proyecto es una oportunidad para aprender algo nuevo. Desde sistemas SaaS hasta agentes de IA, he trabajado con startups y empresas establecidas para llevar sus visiones a la realidad.
            </p>
            <p className="text-[#a0a8b8] leading-relaxed">
              Cuando no estoy codificando, estoy explorando nuevas tecnologías, contribuyendo a proyectos open source o disfrutando del aire libre. Creo que el equilibrio entre trabajo y vida es clave para la creatividad sostenida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            aria-label="Habilidades técnicas"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#00d48e] text-sm font-mono" aria-label={`${skill.name}: ${skill.level}% - ${skillDetails(skill.level)}`}>
                    {skill.level}%
                  </span>
                </div>
                <div 
                  className="h-1.5 bg-[#16213e] rounded-full overflow-hidden" 
                  role="progressbar" 
                  aria-valuenow={skill.level} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                  aria-label={`${skill.name}: ${skill.level}%`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#00d48e] to-[#ff6b35] rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="sr-only">Áreas de especialización</h3>
          <ul className="flex flex-wrap gap-3" role="list" aria-label="Áreas de especialización">
            {passions.map((passion, index) => (
              <motion.li
                key={passion}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span 
                  className="px-4 py-2 rounded-full border border-[#00d48e]/30 bg-[#00d48e]/5 text-[#a0a8b8] text-sm hover:border-[#00d48e]/60 hover:bg-[#00d48e]/15 transition-all"
                >
                  {passion}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

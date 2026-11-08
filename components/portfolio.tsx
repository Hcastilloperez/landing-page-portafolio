'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Code2, Zap, Stethoscope } from 'lucide-react';

function CaptionBar({ url, index, color }: { url: string; index: string; color: string }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[#1a1a18]/15 bg-[#fffdf8]">
      <span className="eyebrow text-[10px] text-[#6f6e67] truncate" aria-hidden="true">
        {url}
      </span>
      <span className="font-display italic text-lg leading-none shrink-0" style={{ color }} aria-hidden="true">
        {index}
      </span>
    </div>
  );
}

function MedicitasMock() {
  return (
    <div className="relative h-44 bg-[#0ea5e9]/10 border-b border-[#1a1a18]/15 p-4 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#0ea5e9]/40 rounded-full" />
      <div className="flex items-center justify-between mb-3">
        <span className="eyebrow text-[10px] text-[#1a1a18]">Agenda</span>
        <span className="eyebrow text-[10px] text-[#6f6e67]">Mar 4</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 space-y-2">
          {[
            ['08:00', '82%'],
            ['08:20', '58%'],
            ['09:00', '76%'],
            ['09:40', '91%'],
          ].map(([time, w]) => (
            <div key={time} className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#6f6e67] w-9">{time}</span>
              <span className="h-2 bg-[#0ea5e9]/80" style={{ width: w }} />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            ['Hoy', '8'],
            ['Nuevos', '+3'],
            ['Cifrado', 'ON'],
          ].map(([k, v]) => (
            <div key={k} className="border border-[#1a1a18]/20 bg-[#fffdf8] px-2 py-1.5">
              <p className="eyebrow text-[9px] text-[#6f6e67]">{k}</p>
              <p className="font-display text-base leading-none">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-5">
      <span className="font-display italic text-2xl text-[#2e3bff]" aria-hidden="true">{index}</span>
      <span className="eyebrow text-[#6f6e67]">{label}</span>
      <div className="flex-1 h-px bg-[#1a1a18]/15" aria-hidden="true" />
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      index: 'A.',
      title: 'BarberControl',
      category: 'SaaS',
      description: 'Sistema integral para barberías que automatiza gestión de clientes, barberos, reservas y KPIs.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/barber-control.png',
      mock: false,
      link: 'https://barbercontrol.hectorcastillo.net/',
      color: '#2e3bff',
      icon: Code2,
    },
    {
      id: 2,
      index: 'B.',
      title: 'Soter',
      category: 'Enterprise',
      description: 'Plataforma de seguridad empresarial con análisis de riesgos y agente IA integrado.',
      tags: ['Next.js', 'AI SDK', 'PostgreSQL', 'TypeScript'],
      image: '/soter.png',
      mock: false,
      link: 'https://soter.hectorcastillo.net',
      color: '#e03c31',
      icon: Zap,
    },
    {
      id: 3,
      index: 'C.',
      title: 'MediCitas',
      category: 'SaaS · Healthtech',
      description: 'SaaS multi-tenant de citas médicas para profesionales de la salud independientes: agenda en línea 24/7, landing pública por consultorio, historia clínica digital, exámenes y formulaciones, con cifrado de extremo a extremo.',
      tags: ['React', 'Vite', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind'],
      image: '',
      mock: true,
      link: 'https://medicitas.hectorcastillo.net/',
      color: '#0ea5e9',
      icon: Stethoscope,
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 relative" aria-labelledby="portfolio-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader index="04" label="Portafolio" />
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="portfolio-title"
              className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05]"
            >
              Proyectos que{' '}
              <em className="italic font-normal text-[#2e3bff]">generan impacto</em>
            </h2>
            <p className="text-lg text-[#6f6e67] leading-relaxed">
              Productos en producción. Cada uno con un problema real resuelto y una decisión de
              arquitectura de la que estoy orgulloso.
            </p>
          </div>
        </motion.header>

        <ul className="grid md:grid-cols-2 gap-8" role="list">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group h-full"
              >
                <article className="border border-[#1a1a18]/20 bg-[#fffdf8] h-full flex flex-col hover:border-[#1a1a18]/50 hover:shadow-[0_20px_50px_-20px_rgba(26,26,24,0.3)] transition-all duration-300">
                  <CaptionBar
                    url={project.link ? project.link.replace(/^https?:\/\//, '') : 'laboratorio personal'}
                    index={project.index}
                    color={project.color}
                  />

                  <div className="relative h-44 border-b border-[#1a1a18]/15 overflow-hidden bg-[#f4f0e7]">
                    {project.mock ? (
                      <MedicitasMock />
                    ) : (
                      <Image
                        src={project.image}
                        alt={`Captura de pantalla del proyecto ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    )}
                    <span
                      className="absolute top-3 left-3 eyebrow text-[10px] bg-[#fffdf8] border border-[#1a1a18]/20 px-2 py-1"
                      aria-hidden="true"
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-display text-3xl tracking-tight group-hover:italic transition-all">
                        {project.title}
                      </h3>
                      <span
                        className="w-10 h-10 shrink-0 flex items-center justify-center border border-[#1a1a18]/20 rounded-full group-hover:bg-[#1a1a18] group-hover:text-white transition-all"
                        aria-hidden="true"
                      >
                        <IconComponent className="w-4 h-4" />
                      </span>
                    </div>

                    <p className="text-[#6f6e67] text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Tecnologías usadas">
                      {project.tags.map((tag, i) => (
                        <li key={i}>
                          <span className="eyebrow text-[10px] border border-[#1a1a18]/20 px-2 py-1 hover:border-[#1a1a18] transition-colors">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-text self-start text-[11px]"
                        aria-label={`Ver proyecto ${project.title} (se abre en nueva pestaña)`}
                      >
                        Ver proyecto
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <div className="border border-[#1a1a18]/20 bg-[#fffdf8] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-3">
                ¿Tienes un proyecto en{' '}
                <em className="italic font-normal text-[#2e3bff]">mente?</em>
              </p>
              <p className="font-display italic text-lg text-[#6f6e67]">
                Cuéntame la idea. El café lo pongo yo.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="btn-editorial btn-editorial-accent shrink-0"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              Comencemos
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Code2, Zap, Sparkles, Stethoscope } from 'lucide-react';

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 border-b-2 border-[#17171b] bg-[#f2eddf]">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="w-3 h-3 rounded-full bg-[#ff4b2b] border border-[#17171b]" />
        <span className="w-3 h-3 rounded-full bg-[#ffc93c] border border-[#17171b]" />
        <span className="w-3 h-3 rounded-full bg-[#17c49b] border border-[#17171b]" />
      </div>
      <span
        className="flex-1 truncate font-mono text-[10px] font-bold uppercase tracking-wide border border-[#17171b] rounded-sm px-2 py-1 bg-white"
        aria-hidden="true"
      >
        {url}
      </span>
    </div>
  );
}

function MedicitasMock() {
  const slots = [
    { time: '08:00', w: '85%' },
    { time: '08:20', w: '60%' },
    { time: '09:00', w: '75%' },
    { time: '09:40', w: '90%' },
  ];

  return (
    <div className="relative h-44 border-b-2 border-[#17171b] bg-[#0ea5e9] p-3 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 border-2 border-[#17171b] rotate-12 rounded-full" />
      <div className="flex items-center justify-between mb-2">
        <span className="bg-white border-2 border-[#17171b] px-2 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0_0_#17171b] rounded-sm">
          Agenda
        </span>
        <span className="bg-white border-2 border-[#17171b] px-2 py-0.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0_0_#17171b] rounded-sm">
          Mar 4
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 bg-white border-2 border-[#17171b] p-2 space-y-1.5 shadow-[3px_3px_0_0_#17171b]">
          {slots.map((slot) => (
            <div key={slot.time} className="flex items-center gap-1.5">
              <span className="w-9 font-mono text-[9px] font-bold text-[#57575f]">{slot.time}</span>
              <span
                className="h-3 border border-[#17171b]"
                style={{ width: slot.w, backgroundColor: '#0ea5e9' }}
              />
            </div>
          ))}
        </div>
        <div className="bg-white border-2 border-[#17171b] p-2 space-y-1.5 shadow-[3px_3px_0_0_#17171b]">
          {[
            { k: 'Hoy', v: '8' },
            { k: 'Nuevos', v: '+3' },
            { k: 'Cifrado', v: 'ON' },
          ].map((stat) => (
            <div key={stat.k} className="bg-[#f2eddf] border border-[#17171b] rounded-sm px-1.5 py-1">
              <p className="font-mono text-[8px] uppercase text-[#57575f] leading-none">{stat.k}</p>
              <p className="font-display text-sm text-[#17171b] leading-none mt-0.5">{stat.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'BARBER CONTROL',
      category: 'SaaS',
      description: 'Sistema integral para barberías que automatiza gestión de clientes, barberos, reservas y KPIs.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/barber-control.png',
      mock: false,
      link: 'https://barbercontrol.hectorcastillo.net/',
      color: '#2e5bff',
      icon: Code2,
      isPersonal: false,
    },
    {
      id: 2,
      title: 'SOTER',
      category: 'Enterprise',
      description: 'Plataforma de seguridad empresarial con análisis de riesgos y agente IA integrado.',
      tags: ['Next.js', 'AI SDK', 'PostgreSQL', 'TypeScript'],
      image: '/soter.png',
      mock: false,
      link: 'https://soter.hectorcastillo.net',
      color: '#ff4b2b',
      icon: Zap,
      isPersonal: false,
    },
    {
      id: 3,
      title: 'MEDICITAS',
      category: 'SaaS · Healthtech',
      description: 'SaaS multi-tenant de citas médicas para profesionales de la salud independientes: agenda en línea 24/7, landing pública por consultorio, historia clínica digital, exámenes y formulaciones, con cifrado de extremo a extremo.',
      tags: ['React', 'Vite', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind'],
      image: '',
      mock: true,
      link: 'https://medicitas.hectorcastillo.net/',
      color: '#0ea5e9',
      icon: Stethoscope,
      isPersonal: false,
    },
    {
      id: 4,
      title: 'ATHENA',
      category: 'IA Personal',
      description: 'Asistente IA personal inspirado en Jarvis de Iron Man. Laboratorio de experiencias en IA conversacional y automatización.',
      tags: ['AI', 'NLP', 'Automation', 'Integration'],
      image: '/athena.png',
      mock: false,
      color: '#ffc93c',
      icon: Sparkles,
      isPersonal: true,
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 relative" aria-labelledby="portfolio-title">
      <div className="absolute inset-0 bg-stripes opacity-[0.04] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="font-display text-5xl text-outline" aria-hidden="true">04</span>
            <div className="h-[2px] w-12 bg-[#17171b]" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#57575f]">
              Portafolio
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="portfolio-title"
              className="font-display uppercase tracking-tight leading-[1.02] text-4xl md:text-6xl"
            >
              Proyectos que
              <br />
              <span className="bg-[#ff4b2b] text-[#f2eddf] px-3 border-2 border-[#17171b] shadow-[4px_4px_0_0_#17171b] inline-block rotate-[-1deg] rounded-sm">
                generan impacto
              </span>
            </h2>
            <p className="text-lg text-[#57575f] leading-relaxed">
              Productos en producción. Cada uno con un problema real resuelto y una decisión de
              arquitectura de la que estoy orgulloso.
            </p>
          </div>
        </motion.header>

        <ul className="grid md:grid-cols-2 gap-8" role="list">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group h-full"
              >
                <article className="brutal-card brutal-card-hover bg-white h-full flex flex-col overflow-hidden">
                  <BrowserChrome
                    url={project.link ? project.link.replace(/^https?:\/\//, '') : 'laboratorio personal'}
                  />

                  <div className="relative h-44 border-b-2 border-[#17171b] overflow-hidden bg-[#f2eddf]">
                    {project.mock ? (
                      <MedicitasMock />
                    ) : (
                      <Image
                        src={project.image}
                        alt={`Captura de pantalla del proyecto ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <span
                      className="sticker px-2.5 py-1 text-[10px] absolute top-3 right-3 rotate-[3deg]"
                      style={{ backgroundColor: project.color }}
                      aria-hidden="true"
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="w-10 h-10 flex items-center justify-center border-2 border-[#17171b] shadow-[2px_2px_0_0_#17171b] rounded-sm"
                        style={{ backgroundColor: project.color }}
                        aria-hidden="true"
                      >
                        <IconComponent className="w-5 h-5 text-[#17171b]" />
                      </span>
                      <h3 className="font-display text-2xl uppercase tracking-wide">{project.title}</h3>
                      {project.isPersonal && (
                        <span className="sticker bg-[#ff86c8] px-2 py-1 text-[10px] rotate-[-2deg] ml-auto">
                          Personal
                        </span>
                      )}
                    </div>

                    <p className="text-[#57575f] text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Tecnologías usadas">
                      {project.tags.map((tag, i) => (
                        <li key={i}>
                          <span className="sticker bg-[#f2eddf] px-2.5 py-1 text-[10px] group-hover:-rotate-1 transition-transform">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {!project.isPersonal && project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutal-btn px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest rounded-sm self-start"
                        style={{ backgroundColor: project.color }}
                        aria-label={`Ver proyecto ${project.title} (se abre en nueva pestaña)`}
                        whileHover={{ x: 4 }}
                      >
                        Ver proyecto
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </motion.a>
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
          <div className="brutal-card bg-[#ffc93c] p-8 md:p-10 rotate-[-0.4deg] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-display uppercase tracking-tight text-2xl md:text-3xl mb-2">
                ¿Tienes un proyecto en mente?
              </p>
              <p className="font-mono text-sm uppercase tracking-widest text-[#57575f]">
                Cuéntame la idea. El café lo pongo yo.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="brutal-btn px-7 py-3.5 bg-[#17171b] text-[#f2eddf] font-display uppercase tracking-wide rounded-sm shrink-0"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
            >
              Comencemos
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

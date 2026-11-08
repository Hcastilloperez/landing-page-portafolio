'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/section-header';

type Project = {
  index: string;
  name: string;
  category: string;
  summary: string;
  points: string[];
  stack: string[];
  href: string;
  image?: string;
};

const projects: Project[] = [
  {
    index: '01',
    name: 'MediCitas',
    category: 'SaaS · Healthtech',
    summary:
      'Agenda médica en línea para profesionales de la salud independientes. Cada consultorio tiene su página pública y sus propios datos, aislados del resto.',
    points: [
      'Reservas 24/7 desde una página pública por consultorio',
      'Historia clínica digital, exámenes y formulaciones',
      'Recordatorios por WhatsApp solo con consentimiento del paciente',
      'Arquitectura multi-tenant con cifrado de extremo a extremo',
    ],
    stack: ['React', 'Vite', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind'],
    href: 'https://medicitas.hectorcastillo.net/',
  },
  {
    index: '02',
    name: 'BarberControl',
    category: 'SaaS · Barberías',
    summary:
      'Gestión completa para barberías: clientes, barberos, reservas y KPIs en un solo panel pensado para el día a día del negocio.',
    points: [
      'Agenda de reservas por barbero',
      'Base de clientes e historial de visitas',
      'KPIs de la operación en tiempo real',
      'Cobros con Stripe',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    href: 'https://barbercontrol.hectorcastillo.net/',
    image: '/barber-control.png',
  },
  {
    index: '03',
    name: 'Soter',
    category: 'Enterprise · Seguridad',
    summary:
      'Plataforma de seguridad empresarial con análisis de riesgos y un agente de IA integrado que ayuda a interpretarlos.',
    points: [
      'Análisis y seguimiento de riesgos',
      'Agente de IA integrado al flujo de trabajo',
      'Pensada para equipos de seguridad corporativa',
    ],
    stack: ['Next.js', 'AI SDK', 'PostgreSQL', 'TypeScript'],
    href: 'https://soter.hectorcastillo.net',
    image: '/soter.png',
  },
];

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-ink/15 bg-panel overflow-hidden shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-ink/10">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
          <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
          <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        </span>
        <span className="flex-1 truncate rounded bg-ink/[0.06] px-3 py-1 font-mono text-[11px] text-soft" aria-hidden="true">
          {project.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-paper">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Captura de ${project.name}`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
          />
        ) : (
          <MediCitasScreen />
        )}
      </div>
    </div>
  );
}

/** Interfaz de MediCitas dibujada en código: no hay captura real aún. */
function MediCitasScreen() {
  const hours = ['08:00', '09:00', '10:00', '11:00'];
  const appts = [
    { row: 0, top: 6, h: 38, label: 'Consulta general', who: 'Paciente A', hot: true },
    { row: 0, top: 54, h: 30, label: 'Control', who: 'Paciente B', hot: false },
    { row: 1, top: 22, h: 52, label: 'Primera vez', who: 'Paciente C', hot: false },
    { row: 2, top: 4, h: 34, label: 'Seguimiento', who: 'Paciente D', hot: false },
  ];
  return (
    <div
      className="absolute inset-0 grid grid-cols-[26%_1fr] text-ink text-[11px]"
      role="img"
      aria-label="Vista de la agenda de MediCitas"
    >
      <div className="border-r border-ink/10 p-3 md:p-4 flex flex-col gap-1.5">
        <p className="font-mono text-[10px] text-soft uppercase mb-1">Consultorio</p>
        {['Agenda', 'Pacientes', 'Historias', 'Recordatorios', 'Ajustes'].map((item, i) => (
          <div key={item} className={`rounded px-2.5 py-1.5 ${i === 0 ? 'bg-signal/15 text-signal' : 'text-soft'}`}>
            {item}
          </div>
        ))}
        <div className="mt-auto rounded border border-ink/10 p-2 text-soft">
          <p className="font-mono text-[9px] uppercase">WhatsApp</p>
          <p className="text-ink mt-0.5">Recordatorios activos</p>
        </div>
      </div>

      <div className="p-3 md:p-4 flex flex-col gap-3 min-w-0">
        <div className="flex items-end justify-between">
          <p className="text-sm font-medium">Martes 4</p>
          <div className="flex gap-1.5 font-mono text-[10px] text-soft">
            <span className="border border-ink/15 rounded px-1.5 py-0.5">Día</span>
            <span className="border border-ink/15 rounded px-1.5 py-0.5 text-ink bg-ink/[0.06]">Semana</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ['Hoy', '8'],
            ['Libres', '3'],
            ['Nuevos', '+2'],
          ].map(([k, v]) => (
            <div key={k} className="rounded border border-ink/10 px-2.5 py-1.5">
              <p className="font-mono text-[9px] text-soft uppercase">{k}</p>
              <p className="text-base font-semibold leading-tight">{v}</p>
            </div>
          ))}
        </div>

        <div className="relative flex-1 min-h-0 border-t border-ink/10">
          {hours.map((h, i) => (
            <div key={h} className="absolute inset-x-0 flex items-start" style={{ top: `${i * 25}%`, height: '25%' }}>
              <span className="font-mono text-[9px] text-soft w-9 shrink-0 -mt-1.5">{h}</span>
              <div className="flex-1 border-t border-ink/10 h-full relative">
                {appts
                  .filter((a) => a.row === i)
                  .map((a) => (
                    <div
                      key={a.who}
                      className={`absolute left-1 right-[8%] rounded px-2 py-1 overflow-hidden border ${
                        a.hot ? 'bg-signal/20 border-signal/50' : 'bg-ink/[0.05] border-ink/15'
                      }`}
                      style={{ top: `${a.top}%`, height: `${a.h}%` }}
                    >
                      <p className="truncate leading-tight">{a.label}</p>
                      <p className="truncate text-soft text-[10px]">{a.who}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32" aria-labelledby="work-title">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader index="01" label="Trabajo" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-12 gap-6 mb-20 md:mb-28"
        >
          <h2
            id="work-title"
            className="lg:col-span-7 text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.02]"
          >
            Tres productos, todos en línea ahora mismo.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-soft leading-relaxed self-end">
            Los diseñé, los construí y los opero yo. Puedes abrirlos y probarlos: así es como trabajo
            cuando el producto es mío y cuando es tuyo.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-36">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="group grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              aria-labelledby={`project-${project.index}`}
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-lg"
                  aria-label={`Abrir ${project.name} (se abre en nueva pestaña)`}
                  tabIndex={-1}
                >
                  <BrowserFrame project={project} />
                </a>
              </div>

              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="font-mono text-xs text-soft mb-4">
                  <span className="text-signal">{project.index}</span> / {project.category}
                </p>
                <h3 id={`project-${project.index}`} className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-5">
                  {project.name}
                </h3>
                <p className="text-soft leading-relaxed mb-6">{project.summary}</p>

                <ul className="space-y-2.5 mb-7 text-sm">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[0.55em] w-1.5 h-px bg-signal shrink-0 scale-x-[2.5] origin-left" aria-hidden="true" />
                      <span className="pl-1.5">{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-1.5 mb-8" aria-label={`Tecnologías de ${project.name}`}>
                  {project.stack.map((tech) => (
                    <li key={tech} className="font-mono text-[11px] text-soft border border-ink/15 rounded px-2 py-1">
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-text"
                  aria-label={`Abrir ${project.name} (se abre en nueva pestaña)`}
                >
                  Abrir {project.name}
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

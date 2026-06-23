'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'BARBER CONTROL',
      category: 'SaaS',
      description: 'Sistema integral para barberías que automatiza el flujo de datos: gestión de clientes, barberos, reservas de citas y dashboard con KPIs.',
      features: ['Gestión de clientes', 'Sistema de reservas', 'Pagos automáticos', 'Dashboard analytics'],
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: 'https://barbercontrol.hectorcastillo.net/',
      color: 'from-cyan-500',
      highlight: true,
    },
    {
      id: 2,
      title: 'SOTER',
      category: 'Enterprise',
      description: 'Plataforma de gestión de seguridad empresarial enfocada en instalaciones, esquemas de seguridad y análisis de riesgos con agente IA.',
      features: ['Análisis de riesgos', 'Esquemas de seguridad', 'Monitoreo 24/7', 'Agente IA'],
      tags: ['Next.js', 'AI SDK', 'PostgreSQL', 'TypeScript'],
      link: 'https://soter.hectorcastillo.net',
      color: 'from-purple-500',
    },
    {
      id: 3,
      title: 'ATHENA',
      category: 'Proyecto Personal',
      description: 'Asistente domótico inteligente que controla automatización del hogar, gestiona agendas y automatiza tareas cotidianas.',
      features: ['Domótica inteligente', 'Control de voz', 'Automatización', 'Agenda integrada'],
      tags: ['AI', 'IoT', 'Next.js', 'Python'],
      link: '#',
      color: 'from-violet-500',
    },
    {
      id: 4,
      title: 'PLATFORM AI',
      category: 'MVP',
      description: 'Plataforma colaborativa para equipos con integración de inteligencia artificial para análisis y recomendaciones en tiempo real.',
      features: ['Colaboración en tiempo real', 'IA analytics', 'Chat integrado', 'Integración API'],
      tags: ['Next.js', 'Supabase', 'AI SDK', 'Socket.io'],
      link: '#',
      color: 'from-blue-500',
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-[#05050a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00e5ff] font-mono text-sm">02</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00e5ff] to-transparent" />
            <span className="text-[#c8c8d8] text-sm uppercase tracking-widest">Portafolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-[#c8c8d8] max-w-2xl">
            Una selección de proyectos que demuestran mi experiencia en desarrollo web, IA y soluciones empresariales.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`p-6 rounded-xl border border-[#00e5ff]/20 bg-[#10101a]/50 backdrop-blur hover:border-[#00e5ff]/50 transition-all ${project.highlight ? 'md:col-span-2' : ''}`}>
                {/* Top bar */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.category === 'SaaS' ? 'bg-[#00e5ff]/10 text-[#00e5ff]' : project.category === 'Enterprise' ? 'bg-[#c77dff]/10 text-[#c77dff]' : 'bg-[#686878]/10 text-[#c8c8d8]'}`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5 text-[#00e5ff]" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#c8c8d8] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features Grid */}
                <div className={`grid gap-2 mb-6 ${project.highlight ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                      <span className="text-sm text-[#c8c8d8]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#00e5ff]/10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#686878]/10 text-[#c8c8d8]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00e5ff] to-[#c77dff] opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

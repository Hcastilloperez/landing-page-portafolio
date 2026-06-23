'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
      color: '#00d48e',
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
      color: '#ff6b35',
    },
    {
      id: 3,
      title: 'PLATFORM AI',
      category: 'MVP',
      description: 'Plataforma colaborativa para equipos con integración de inteligencia artificial para análisis y recomendaciones en tiempo real.',
      features: ['Colaboración en tiempo real', 'IA analytics', 'Chat integrado', 'Integración API'],
      tags: ['Next.js', 'Supabase', 'AI SDK', 'Socket.io'],
      link: '#',
      color: '#4a90ff',
    },
  ];

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 212, 142, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 142, 0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
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
            <span className="text-[#00d48e] font-mono text-sm">02</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Portafolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-[#a0a8b8] max-w-2xl">
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
              className={`group relative ${project.highlight ? 'md:col-span-2' : ''}`}
            >
              <div className="p-6 rounded-xl border border-[#00d48e]/20 bg-[#16213e]/50 backdrop-blur hover:border-[#00d48e]/60 hover:bg-[#16213e]/80 transition-all">
                {/* Top bar */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span 
                        className="text-xs font-bold px-3 py-1 rounded-full border"
                        style={{
                          borderColor: `${project.color}40`,
                          backgroundColor: `${project.color}10`,
                          color: project.color,
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5" style={{ color: project.color }} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#a0a8b8] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features Grid */}
                <div className={`grid gap-2 mb-6 ${project.highlight ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
                      <span className="text-sm text-[#a0a8b8]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#00d48e]/10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#3a4556]/50 text-[#a0a8b8]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

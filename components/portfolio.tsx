'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Code2, Zap, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'BARBER CONTROL',
      category: 'SaaS',
      description: 'Sistema integral para barberías que automatiza gestión de clientes, barberos, reservas y KPIs.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/barber-control.png',
      link: 'https://barbercontrol.hectorcastillo.net/',
      color: '#00d48e',
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
      link: 'https://soter.hectorcastillo.net',
      color: '#ff6b35',
      icon: Zap,
      isPersonal: false,
    },
    {
      id: 3,
      title: 'ATHENA',
      category: 'IA Personal',
      description: 'Asistente IA personal inspirado en Jarvis de Iron Man. Laboratorio de experiencias en IA conversacional y automatización.',
      tags: ['AI', 'NLP', 'Automation', 'Integration'],
      image: '/athena.png',
      color: '#4a90ff',
      icon: Sparkles,
      isPersonal: true,
    },
  ];



  return (
    <section 
      id="portfolio" 
      className="py-32 relative overflow-hidden"
      aria-labelledby="portfolio-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d48e]/2 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#ff6b35]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-[#00d48e]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm" aria-hidden="true">05</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" aria-hidden="true" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Portafolio</span>
          </div>
          <motion.h2 
            id="portfolio-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Proyectos que <span className="text-[#00d48e]">Generan Impacto</span>
          </motion.h2>
        </motion.header>

        <ul 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.li
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group h-full"
                >
                  <article 
                    className="relative h-full rounded-xl overflow-hidden border transition-all duration-500 p-6 flex flex-col backdrop-blur-sm hover:border-opacity-100"
                    style={{
                      borderColor: `${project.color}30`,
                      backgroundColor: 'rgba(16, 17, 23, 0.4)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${project.color}80`;
                      e.currentTarget.style.backgroundColor = 'rgba(16, 17, 23, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${project.color}30`;
                      e.currentTarget.style.backgroundColor = 'rgba(16, 17, 23, 0.4)';
                    }}
                  >
                    <div className="mb-4 inline-block p-2.5 rounded-lg" aria-hidden="true"
                      style={{ 
                        backgroundColor: `${project.color}15`,
                        borderColor: `${project.color}30`,
                        borderWidth: '1px'
                      }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: project.color }} />
                    </div>

                    {project.isPersonal && (
                      <motion.span 
                        className="text-xs font-bold px-2.5 py-1 rounded-full border mb-3 inline-block"
                        style={{
                          borderColor: `${project.color}60`,
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Proyecto Personal
                      </motion.span>
                    )}

                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs uppercase tracking-widest text-[#a0a8b8] mb-4">
                      {project.category}
                    </p>

                    <p className="text-sm text-[#a0a8b8] mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    {project.image && (
                      <motion.div 
                        className="relative h-40 rounded-lg overflow-hidden mb-6 border"
                        style={{ borderColor: `${project.color}30` }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={project.image}
                          alt={`Captura de pantalla del proyecto ${project.title}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0f1117]/40" />
                      </motion.div>
                    )}

                    <ul className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-[#00d48e]/10" role="list" aria-label="Tecnologías usadas">
                      {project.tags.map((tag, i) => (
                        <li key={i}>
                          <motion.span 
                            className="text-xs px-2 py-1 rounded bg-[#3a4556]/40 text-[#a0a8b8] border border-[#00d48e]/10 hover:border-[#00d48e]/40 transition-colors"
                            whileHover={{ y: -1 }}
                          >
                            {tag}
                          </motion.span>
                        </li>
                      ))}
                    </ul>

                    {!project.isPersonal && project.link && (
                      <motion.a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0f1117]"
                        style={{ color: project.color }}
                        aria-label={`Ver proyecto ${project.title} (se abre en nueva pestaña)`}
                        whileHover={{ x: 4 }}
                      >
                        <span>Ver proyecto</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </motion.a>
                    )}

                    <motion.div 
                      className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-full blur-2xl"
                      style={{ 
                        background: `radial-gradient(circle, ${project.color}40 0%, transparent 70%)`,
                        transform: 'translate(30%, -30%)'
                      }}
                      aria-hidden="true"
                    />
                  </article>
                </motion.li>
              );
            })}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-[#a0a8b8] mb-6">¿Tienes un proyecto en mente?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00d48e] to-[#00b570] text-[#0f1117] font-bold hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#00d48e] focus:ring-offset-2 focus:ring-offset-[#0f1117]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ boxShadow: '0 0 30px rgba(0, 212, 142, 0.2)' }}
          >
            <span>Comencemos a trabajar juntos</span>
            <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

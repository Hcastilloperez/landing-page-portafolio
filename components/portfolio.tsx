'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code2, Zap } from 'lucide-react';

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
      icon: Code2,
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
      icon: Zap,
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background gradient section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d48e]/3 to-transparent pointer-events-none" />
      
      {/* Large background elements */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#ff6b35]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-[#00d48e]/8 rounded-full blur-3xl pointer-events-none" />
      
      {/* Vertical accent line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00d48e]/20 to-transparent pointer-events-none transform -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm">02</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Portafolio</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Proyectos que <span className="text-[#00d48e]">Generan Impacto</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#a0a8b8] max-w-3xl leading-relaxed"
          >
            Desarrollé soluciones escalables y orientadas al usuario, combinando arquitectura robusta con experiencias intuitivas. Cada proyecto refleja atención al detalle y compromiso con la calidad.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Project Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold" style={{ color: `${project.color}40` }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="h-px flex-grow" style={{ backgroundColor: `${project.color}20` }} />
                </div>

                {/* Main Card */}
                <div className="relative rounded-2xl overflow-hidden border transition-all duration-500" style={{
                  borderColor: `${project.color}20`,
                  background: `linear-gradient(135deg, rgb(22, 33, 62, 0.6) 0%, rgb(26, 26, 46, 0.5) 100%)`
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.color}60`;
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${project.color}20`;
                }}>
                  
                  {/* Inner content */}
                  <div className="relative z-10 p-8 lg:p-16">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Content Side */}
                      <div className="lg:col-span-7">
                        {/* Header */}
                        <div className="mb-8">
                          <div className="flex items-center gap-4 mb-4">
                            <motion.div 
                              className="p-3 rounded-lg"
                              style={{ backgroundColor: `${project.color}15`, borderColor: `${project.color}30`, borderWidth: '1px' }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <IconComponent className="w-6 h-6" style={{ color: project.color }} />
                            </motion.div>
                            <span 
                              className="text-xs font-bold px-3 py-1.5 rounded-full border"
                              style={{
                                borderColor: `${project.color}50`,
                                backgroundColor: `${project.color}10`,
                                color: project.color,
                              }}
                            >
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            {project.title}
                          </h3>
                          <div className="h-1.5 w-20 rounded-full" style={{ backgroundColor: project.color }} />
                        </div>

                        {/* Description */}
                        <p className="text-[#a0a8b8] mb-10 leading-relaxed text-lg font-light">
                          {project.description}
                        </p>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                          {project.features.map((feature, i) => (
                            <motion.div 
                              key={i} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                            >
                              <motion.div 
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: project.color }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <span className="text-[#a0a8b8]">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 pt-8 border-t border-[#00d48e]/10">
                          {project.tags.map((tag, i) => (
                            <motion.span 
                              key={i} 
                              className="text-xs px-3 py-2 rounded-full bg-[#3a4556]/30 text-[#a0a8b8] border border-[#00d48e]/10 hover:border-[#00d48e]/40 transition-colors cursor-default"
                              whileHover={{ y: -2 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        {/* CTA */}
                        {project.link !== '#' && (
                          <motion.a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg border transition-all duration-300"
                            style={{
                              borderColor: `${project.color}50`,
                              backgroundColor: `${project.color}10`,
                              color: project.color,
                            }}
                            whileHover={{ 
                              backgroundColor: `${project.color}20`,
                              transform: 'translateX(4px)'
                            }}
                          >
                            <span className="font-semibold">Ver Proyecto</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>

                      {/* Stats/Info Side */}
                      <div className="lg:col-span-5 hidden lg:block">
                        <motion.div 
                          className="space-y-6"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {/* Visual indicator */}
                          <div className="relative h-64 rounded-xl border border-[#00d48e]/20 overflow-hidden bg-[#0f1117]/50 shadow-lg" style={{
                            borderColor: `${project.color}30`,
                            boxShadow: `0 20px 60px ${project.color}15`
                          }}>
                            <div 
                              className="absolute inset-0 opacity-30"
                              style={{
                                background: `linear-gradient(135deg, ${project.color}20 0%, transparent 100%)`
                              }}
                            />
                            <motion.div 
                              className="absolute inset-0 flex items-center justify-center"
                              animate={{ y: [0, -10, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <div 
                                className="w-20 h-20 rounded-lg flex items-center justify-center"
                                style={{ 
                                  backgroundColor: `${project.color}15`,
                                  borderColor: `${project.color}30`,
                                  borderWidth: '2px'
                                }}
                              >
                                <IconComponent className="w-10 h-10" style={{ color: project.color }} />
                              </div>
                            </motion.div>
                          </div>

                          {/* Quick info */}
                          <div className="grid grid-cols-2 gap-4">
                            <motion.div 
                              className="p-4 rounded-lg border border-[#00d48e]/10 bg-[#16213e]/50"
                              whileHover={{ borderColor: project.color, borderWidth: '2px' }}
                            >
                              <span className="text-xs text-[#a0a8b8] uppercase tracking-widest block mb-1">Status</span>
                              <span className="text-lg font-bold text-white">{project.category}</span>
                            </motion.div>
                            <motion.div 
                              className="p-4 rounded-lg border border-[#00d48e]/10 bg-[#16213e]/50"
                              whileHover={{ borderColor: project.color, borderWidth: '2px' }}
                            >
                              <span className="text-xs text-[#a0a8b8] uppercase tracking-widest block mb-1">Tech</span>
                              <span className="text-lg font-bold text-white">{project.tags.length}</span>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div 
                    className="absolute top-0 right-0 w-96 h-96 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full blur-3xl"
                    style={{ 
                      background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)`,
                      transform: 'translate(50%, -50%)'
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-[#a0a8b8] mb-6">¿Tienes un proyecto en mente?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00d48e] to-[#00b570] text-[#0f1117] font-bold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{ boxShadow: '0 0 30px rgba(0, 212, 142, 0.2)' }}
          >
            <span>Comencemos a trabajar juntos</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

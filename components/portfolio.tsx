'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight, Code2, Zap, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'BARBER CONTROL',
      category: 'SaaS',
      description: 'Sistema integral para barberías que automatiza gestión de clientes, barberos, reservas y KPIs.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d48e]/2 to-transparent pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#ff6b35]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-[#00d48e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Proyectos que <span className="text-[#00d48e]">Generan Impacto</span>
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group h-full"
              >
                <div 
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
                  {/* Icon */}
                  <motion.div 
                    className="mb-4 inline-block p-2.5 rounded-lg"
                    style={{ 
                      backgroundColor: `${project.color}15`,
                      borderColor: `${project.color}30`,
                      borderWidth: '1px'
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: project.color }} />
                  </motion.div>

                  {/* Badge */}
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

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Category */}
                  <p className="text-xs uppercase tracking-widest text-[#a0a8b8] mb-4">
                    {project.category}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#a0a8b8] mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Image for Athena */}
                  {project.image && (
                    <motion.div 
                      className="relative h-40 rounded-lg overflow-hidden mb-6 border"
                      style={{ borderColor: `${project.color}30` }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0f1117]/40" />
                    </motion.div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-[#00d48e]/10">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded bg-[#3a4556]/40 text-[#a0a8b8] border border-[#00d48e]/10 hover:border-[#00d48e]/40 transition-colors"
                        whileHover={{ y: -1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA */}
                  {!project.isPersonal && project.link && (
                    <motion.a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                      style={{ color: project.color }}
                      whileHover={{ x: 4 }}
                    >
                      <span>Ver proyecto</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.a>
                  )}

                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-full blur-2xl"
                    style={{ 
                      background: `radial-gradient(circle, ${project.color}40 0%, transparent 70%)`,
                      transform: 'translate(30%, -30%)'
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
          transition={{ delay: 0.5 }}
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

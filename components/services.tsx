'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, ShoppingCart, Workflow, Bot, Shield } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Software a medida',
    description: 'Aplicaciones web, plataformas internas y APIs construidas con arquitectura escalable y mantenible a largo plazo.',
    icon: Code2,
  },
  {
    id: '02',
    title: 'Páginas web',
    description: 'Landings, sitios institucionales y portafolios SEO-first, con Core Web Vitals impecables.',
    icon: Globe,
  },
  {
    id: '03',
    title: 'E-commerce',
    description: 'Tiendas online con foco en conversión y operación eficiente.',
    icon: ShoppingCart,
  },
  {
    id: '04',
    title: 'Automatización',
    description: 'Workflows que automatizan procesos repetitivos en ventas, operación y soporte.',
    icon: Workflow,
  },
  {
    id: '05',
    title: 'Agentes de IA',
    description: 'Chatbots y agentes IA conectados a tu negocio para atención y automatización.',
    icon: Bot,
  },
  {
    id: '06',
    title: 'Seguridad',
    description: 'Auditorías, políticas y acompañamiento para proteger tu empresa.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-32 relative overflow-hidden"
      aria-labelledby="services-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d48e]/3 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm" aria-hidden="true">02</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" aria-hidden="true" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Servicios</span>
          </div>
          <h2 id="services-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seis disciplinas, <span className="text-[#00d48e]">un solo equipo</span>
          </h2>
          <p className="text-lg text-[#a0a8b8] max-w-2xl leading-relaxed">
            No importa el desafío. Tengo la experiencia para construirlo, operarlo y mejorarlo continuamente.
          </p>
        </motion.header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <article className="group p-6 rounded-xl border border-[#00d48e]/20 bg-[#0f1117]/60 hover:border-[#00d48e]/50 hover:bg-[#0f1117]/80 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[#00d48e]/10 border border-[#00d48e]/20">
                      <IconComponent className="w-5 h-5 text-[#00d48e]" aria-hidden="true" />
                    </div>
                    <span className="text-[#00d48e] font-mono text-sm opacity-60" aria-hidden="true">{service.id}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d48e] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#a0a8b8] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-1 text-[#00d48e] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explorar</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

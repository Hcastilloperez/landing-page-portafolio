'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, ShoppingCart, Workflow, Bot, Shield } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Software a medida',
    description: 'Aplicaciones web, plataformas internas y APIs con arquitectura escalable y mantenible a largo plazo.',
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

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-5">
      <span className="font-display italic text-2xl text-[#2e3bff]" aria-hidden="true">{index}</span>
      <span className="eyebrow text-[#6f6e67]">{label}</span>
      <div className="flex-1 h-px bg-[#1a1a18]/15" aria-hidden="true" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader index="02" label="Servicios" />
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="services-title"
              className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05]"
            >
              Seis disciplinas,{' '}
              <em className="italic font-normal text-[#2e3bff]">una sola voz</em>
            </h2>
            <p className="text-lg text-[#6f6e67] leading-relaxed">
              No importa el desafío. Tengo la experiencia para construirlo, operarlo y mejorarlo
              continuamente.
            </p>
          </div>
        </motion.header>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3" role="list">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group border-t border-[#1a1a18]/15 hover:bg-[#fffdf8] transition-colors"
              >
                <article className="h-full p-6 md:p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="w-11 h-11 flex items-center justify-center border border-[#1a1a18]/20 rounded-full group-hover:bg-[#2e3bff] group-hover:border-[#2e3bff] group-hover:text-white transition-all"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-xs text-[#6f6e67]" aria-hidden="true">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl mb-3 group-hover:italic transition-all">
                    {service.title}
                  </h3>

                  <p className="text-[#6f6e67] text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <span className="inline-flex items-center gap-2 eyebrow text-[10px] text-[#2e3bff] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    Explorar
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </article>
              </motion.li>
            );
          })}
        </ul>

        <div className="h-px bg-[#1a1a18]/15" aria-hidden="true" />
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, ShoppingCart, Workflow, Bot, Shield } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Software a medida',
    description: 'Aplicaciones web, plataformas internas y APIs con arquitectura escalable y mantenible a largo plazo.',
    icon: Code2,
    color: '#2e5bff',
    rotate: '-rotate-[0.6deg]',
  },
  {
    id: '02',
    title: 'Páginas web',
    description: 'Landings, sitios institucionales y portafolios SEO-first, con Core Web Vitals impecables.',
    icon: Globe,
    color: '#ff4b2b',
    rotate: 'rotate-[0.6deg]',
  },
  {
    id: '03',
    title: 'E-commerce',
    description: 'Tiendas online con foco en conversión y operación eficiente.',
    icon: ShoppingCart,
    color: '#ffc93c',
    rotate: '-rotate-[0.6deg]',
  },
  {
    id: '04',
    title: 'Automatización',
    description: 'Workflows que automatizan procesos repetitivos en ventas, operación y soporte.',
    icon: Workflow,
    color: '#17c49b',
    rotate: 'rotate-[0.6deg]',
  },
  {
    id: '05',
    title: 'Agentes de IA',
    description: 'Chatbots y agentes IA conectados a tu negocio para atención y automatización.',
    icon: Bot,
    color: '#ff86c8',
    rotate: '-rotate-[0.6deg]',
  },
  {
    id: '06',
    title: 'Seguridad',
    description: 'Auditorías, políticas y acompañamiento para proteger tu empresa.',
    icon: Shield,
    color: '#17171b',
    rotate: 'rotate-[0.6deg]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative" aria-labelledby="services-title">
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="font-display text-5xl text-outline" aria-hidden="true">02</span>
            <div className="h-[2px] w-12 bg-[#17171b]" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#57575f]">
              Servicios
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="services-title"
              className="font-display uppercase tracking-tight leading-[1.02] text-4xl md:text-6xl"
            >
              Seis disciplinas,
              <br />
              <span className="bg-[#ff4b2b] text-[#f2eddf] px-3 border-2 border-[#17171b] shadow-[4px_4px_0_0_#17171b] inline-block rotate-[-1deg] rounded-sm">
                un solo equipo
              </span>
            </h2>
            <p className="text-lg text-[#57575f] leading-relaxed">
              No importa el desafío. Tengo la experiencia para construirlo, operarlo y mejorarlo
              continuamente.
            </p>
          </div>
        </motion.header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-full"
              >
                <article
                  className={`group brutal-card brutal-card-hover p-0 bg-white h-full flex flex-col ${service.rotate}`}
                >
                  <div
                    className="h-3 border-b-2 border-[#17171b] rounded-t-[0.5rem]"
                    style={{ backgroundColor: service.color }}
                    aria-hidden="true"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-5">
                      <span
                        className="w-12 h-12 flex items-center justify-center border-2 border-[#17171b] shadow-[3px_3px_0_0_#17171b] rounded-sm"
                        style={{ backgroundColor: service.color }}
                        aria-hidden="true"
                      >
                        <IconComponent
                          className={`w-6 h-6 ${service.color === '#17171b' ? 'text-[#f2eddf]' : 'text-[#17171b]'}`}
                        />
                      </span>
                      <span className="font-display text-3xl text-outline opacity-60" aria-hidden="true">
                        {service.id}
                      </span>
                    </div>

                    <h3 className="font-display text-xl uppercase tracking-wide mb-3">
                      {service.title}
                    </h3>

                    <p className="text-[#57575f] text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                      Explorar
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
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

'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/section-header';

const services = [
  {
    id: '01',
    title: 'Software a medida',
    description: 'Aplicaciones web, plataformas internas y APIs con una arquitectura que se pueda mantener dentro de tres años.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    id: '02',
    title: 'SaaS multi-tenant',
    description: 'Productos con varios clientes sobre una misma base: aislamiento de datos, planes, cobros y operación.',
    tags: ['Prisma', 'Stripe', 'Cifrado'],
  },
  {
    id: '03',
    title: 'Agentes de IA',
    description: 'Chatbots y agentes conectados a tu negocio y a tus datos para atender, consultar y automatizar.',
    tags: ['AI SDK', 'WhatsApp', 'Tools'],
  },
  {
    id: '04',
    title: 'Automatización',
    description: 'Flujos que reemplazan el trabajo repetitivo en ventas, operación y soporte.',
    tags: ['Integraciones', 'Webhooks', 'Colas'],
  },
  {
    id: '05',
    title: 'Sitios y e-commerce',
    description: 'Landings, sitios institucionales y tiendas en línea rápidas, indexables y orientadas a convertir.',
    tags: ['SEO', 'Core Web Vitals', 'Pagos'],
  },
  {
    id: '06',
    title: 'Seguridad',
    description: 'Auditorías, políticas y acompañamiento para proteger la plataforma y los datos de tu empresa.',
    tags: ['Auditoría', 'Hardening', 'Políticas'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-ink/10" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader index="02" label="Servicios" />
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12">
          <div className="lg:col-span-4">
            <h2
              id="services-title"
              className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] lg:sticky lg:top-28"
            >
              Qué puedo construir contigo.
            </h2>
          </div>

          <ul className="lg:col-span-8 border-t border-ink/10">
            {services.map((service, i) => (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group grid sm:grid-cols-[3rem_1fr_auto] gap-x-6 gap-y-3 py-7 border-b border-ink/10 hover:bg-ink/[0.025] transition-colors sm:px-3 -mx-3 px-3"
              >
                <span className="font-mono text-xs text-soft pt-1.5" aria-hidden="true">{service.id}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight mb-2 group-hover:text-signal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-soft text-sm leading-relaxed max-w-md">{service.description}</p>
                </div>
                <ul className="flex sm:flex-col sm:items-end flex-wrap gap-1.5 sm:pt-1" aria-label="Tecnologías relacionadas">
                  {service.tags.map((tag) => (
                    <li key={tag} className="font-mono text-[11px] text-soft">
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

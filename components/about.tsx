'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/section-header';

/** Solo tecnologías que aparecen en los proyectos publicados. */
const stack = [
  { group: 'Frontend', items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'APIs REST'] },
  { group: 'Datos', items: ['PostgreSQL', 'Prisma'] },
  { group: 'IA y pagos', items: ['AI SDK', 'Stripe', 'WhatsApp Business'] },
  { group: 'Infraestructura', items: ['Proxmox', 'PM2', 'Cloudflare', 'Vercel'] },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-ink/10" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader index="04" label="Sobre mí y stack" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] mb-8"
            >
              Ingeniero de sistemas. Del código al servidor.
            </h2>
            <div className="space-y-5 text-soft leading-relaxed max-w-lg">
              <p>
                Empecé en seguridad electrónica y consultoría, pero siempre me llamó el desarrollo de
                software. Hoy combino ambas cosas: plataformas que funcionan, que son seguras y que se
                ven bien.
              </p>
              <p>
                Trabajo de punta a punta: modelo los datos, escribo la API y la interfaz, y despliego y
                monitoreo en mi propia infraestructura. Eso me permite decidir con información real
                —no con supuestos— cuando el producto crece.
              </p>
              <p>
                He trabajado con startups y empresas establecidas, de sistemas SaaS multi-tenant a
                agentes de IA.
              </p>
            </div>
            <p className="mt-10 border-l-2 border-signal pl-5 text-xl leading-snug tracking-tight max-w-md">
              La buena arquitectura se siente. La mala se paga después.
            </p>
          </motion.div>

          <div className="lg:col-span-6">
            <dl className="border-t border-ink/10">
              {stack.map((row, i) => (
                <motion.div
                  key={row.group}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-2 py-5 border-b border-ink/10"
                >
                  <dt className="font-mono text-xs text-signal pt-0.5">{row.group}</dt>
                  <dd className="flex flex-wrap gap-x-4 gap-y-1.5 text-lg tracking-tight">
                    {row.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

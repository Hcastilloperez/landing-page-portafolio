'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BellRing, CheckCheck, MessageCircle, ShieldCheck } from 'lucide-react';
import { site, whatsappUrl } from '@/lib/site';

const practices = [
  {
    icon: ShieldCheck,
    title: 'Consentimiento previo',
    description:
      'El cliente autoriza el contacto por WhatsApp al agendar su cita. Sin esa autorización no se envía ningún mensaje.',
  },
  {
    icon: BellRing,
    title: 'Solo citas',
    description:
      'Recordatorios, confirmaciones, reprogramaciones y cancelaciones. Sin publicidad, sin promociones y sin mensajes masivos.',
  },
  {
    icon: CheckCheck,
    title: 'Baja inmediata',
    description:
      'Responder BAJA detiene los envíos de inmediato y queda registrado para no volver a escribir a ese número.',
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

export default function WhatsAppConsent() {
  return (
    <section id="whatsapp" className="py-24 md:py-32 relative" aria-labelledby="whatsapp-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader index="06" label="WhatsApp Business" />
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="whatsapp-title"
              className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05]"
            >
              Recordatorios{' '}
              <em className="italic font-normal text-[#2e3bff]">con permiso</em>
            </h2>
            <p className="text-lg text-[#6f6e67] leading-relaxed">
              MediCitas y BarberControl usan la plataforma de WhatsApp Business para recordar y
              confirmar citas. Solo escribo a clientes que dieron su consentimiento, y cualquiera
              puede salir de la lista cuando quiera.
            </p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 divide-y divide-[#1a1a18]/15 border-y border-[#1a1a18]/15"
            role="list"
          >
            {practices.map((practice) => {
              const IconComponent = practice.icon;
              return (
                <li key={practice.title} className="flex gap-5 py-6">
                  <span
                    className="w-11 h-11 shrink-0 flex items-center justify-center border border-[#1a1a18]/20 rounded-full"
                    aria-hidden="true"
                  >
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl mb-1.5">{practice.title}</h3>
                    <p className="text-[#6f6e67] text-sm leading-relaxed">{practice.description}</p>
                  </div>
                </li>
              );
            })}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="border border-[#1a1a18] bg-[#1a1a18] text-[#f4f0e7] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span className="eyebrow text-[10px] text-[#f4f0e7]/70">Opción de baja</span>
              </div>
              <p className="font-display text-3xl leading-tight mb-3">
                Responde <span className="italic">BAJA</span> y listo.
              </p>
              <p className="text-sm leading-relaxed text-[#f4f0e7]/80">
                No hay formularios ni llamadas. La baja se aplica al número desde el que escribes y
                se respeta en todos los envíos posteriores. También puedes escribir a{' '}
                <a
                  href={`mailto:${site.email}?subject=Baja%20de%20mensajes%20WhatsApp`}
                  className="underline underline-offset-4 hover:text-white"
                >
                  {site.email}
                </a>
                .
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] border-b border-[#f4f0e7]/50 pb-1 hover:border-[#f4f0e7] transition-colors"
              >
                WhatsApp {site.phone.display}
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="border border-[#1a1a18]/20 bg-[#fffdf8] p-6 md:p-8">
              <p className="eyebrow text-[10px] text-[#6f6e67] mb-4">For Meta App Review</p>
              <ol className="space-y-3 text-sm leading-relaxed text-[#1a1a18] list-decimal list-inside marker:text-[#2e3bff] marker:font-mono">
                <li>
                  We use the WhatsApp Business Platform only to send appointment reminders and
                  confirmations to clients who gave prior opt-in consent when booking.
                </li>
                <li>
                  Clients can opt out at any time by replying BAJA or STOP; we record the request and
                  send no further messages to that number.
                </li>
              </ol>
              <p className="mt-5 text-xs leading-relaxed text-[#6f6e67]">
                Más detalle en la{' '}
                <a href="/privacidad" className="underline underline-offset-4 hover:text-[#2e3bff]">
                  política de privacidad
                </a>{' '}
                y en la página de{' '}
                <a href="/eliminacion-de-datos" className="underline underline-offset-4 hover:text-[#2e3bff]">
                  eliminación de datos
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { useState, useCallback, type FormEvent } from 'react';

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-5">
      <span className="font-display italic text-2xl text-[#2e3bff]" aria-hidden="true">{index}</span>
      <span className="eyebrow text-[#6f6e67]">{label}</span>
      <div className="flex-1 h-px bg-[#1a1a18]/15" aria-hidden="true" />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  }, []);

  const inputClass =
    'w-full bg-transparent border-b border-[#1a1a18]/25 py-3 text-[#1a1a18] placeholder-[#6f6e67]/70 focus:outline-none focus:border-[#2e3bff] transition-colors';

  return (
    <section id="contact" className="py-24 md:py-32 relative" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader index="06" label="Contacto" />
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="contact-title"
              className="font-display font-medium tracking-tight text-5xl md:text-7xl leading-[1.02]"
            >
              Hablemos<em className="italic font-normal text-[#2e3bff]">.</em>
            </h2>
            <p className="text-lg text-[#6f6e67] leading-relaxed">
              Cuéntame sobre tu proyecto. Me encantaría escuchar tu visión y explorar cómo puedo
              ayudarte a hacerla realidad.
            </p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="eyebrow text-[#6f6e67] mb-3 block">Escríbeme directo</span>
              <a
                href="mailto:hectorcastilloperez@gmail.com"
                className="block font-display text-base sm:text-lg md:text-2xl lg:text-xl tracking-tight whitespace-nowrap overflow-hidden text-ellipsis hover:text-[#2e3bff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
              >
                hectorcastilloperez@gmail.com
              </a>
              <div className="mt-5 h-px bg-[#1a1a18]/15" aria-hidden="true" />
            </div>

            <div>
              <span className="eyebrow text-[#6f6e67] mb-3 block">Disponibilidad</span>
              <p className="font-display text-2xl tracking-tight">
                Respuesta en{' '}
                <em className="italic font-normal text-[#2e3bff]">menos de 24h</em>
              </p>
              <p className="text-[#6f6e67] mt-2 text-sm">
                Lunes a viernes · LATAM / USA / EU
              </p>
              <div className="mt-5 h-px bg-[#1a1a18]/15" aria-hidden="true" />
            </div>

            <blockquote className="font-display italic text-2xl leading-snug">
              «El mejor momento para empezar fue ayer. El segundo mejor es hoy.»
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="border border-[#1a1a18]/20 bg-[#fffdf8] p-8 md:p-10 space-y-8"
              aria-label="Formulario de contacto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block eyebrow text-[10px] text-[#6f6e67] mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block eyebrow text-[10px] text-[#6f6e67] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block eyebrow text-[10px] text-[#6f6e67] mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="font-mono text-[11px] text-[#6f6e67]">
                  * Datos solo para responderte. Nada de spam.
                </p>
                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-editorial btn-editorial-accent disabled:opacity-60 disabled:pointer-events-none"
                >
                  {submitted ? '✓ ¡Mensaje enviado!' : 'Enviar mensaje'}
                  {!submitted && <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

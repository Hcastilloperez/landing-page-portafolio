'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState, useCallback, type FormEvent } from 'react';
import { site, whatsappUrl } from '@/lib/site';
import SectionHeader from '@/components/section-header';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setStatus('sending');
      setError('');

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'No se pudo enviar el mensaje.');
        }

        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } catch (err) {
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Error al enviar. Intenta de nuevo.');
      }
    },
    [formData]
  );

  const inputClass =
    'w-full bg-transparent border-b border-ink/25 py-3 text-ink placeholder-soft/70 focus:outline-none focus:border-signal transition-colors';

  return (
    <section id="contact" className="py-24 md:py-32 relative" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader index="07" label="Contacto" />
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="contact-title"
              className="font-display font-medium tracking-tight text-5xl md:text-7xl leading-[1.02]"
            >
              Hablemos<em className="font-normal text-signal">.</em>
            </h2>
            <p className="text-lg text-soft leading-relaxed">
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
              <span className="eyebrow text-soft mb-3 block">Datos de contacto</span>
              <address className="not-italic space-y-4">
                <div>
                  <span className="eyebrow text-[10px] text-soft block mb-1">Nombre</span>
                  <p className="font-display text-2xl tracking-tight">{site.name}</p>
                </div>
                <div>
                  <span className="eyebrow text-[10px] text-soft block mb-1">Ubicación</span>
                  <p className="font-display text-2xl tracking-tight">{site.location}</p>
                </div>
                <div>
                  <span className="eyebrow text-[10px] text-soft block mb-1">Teléfono y WhatsApp</span>
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="font-display text-2xl tracking-tight hover:text-signal transition-colors focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
                  >
                    {site.phone.display}
                  </a>
                </div>
                <div>
                  <span className="eyebrow text-[10px] text-soft block mb-1">Correo</span>
                  <a
                    href={`mailto:${site.email}`}
                    className="block font-display text-base sm:text-lg md:text-2xl lg:text-xl tracking-tight break-all hover:text-signal transition-colors focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
                  >
                    {site.email}
                  </a>
                </div>
              </address>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-text text-[11px]"
                >
                  Escribir por WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-6 h-px bg-ink/15" aria-hidden="true" />
            </div>

            <div>
              <span className="eyebrow text-soft mb-3 block">Disponibilidad</span>
              <p className="font-display text-2xl tracking-tight">
                Respuesta en{' '}
                <em className="font-normal text-signal">menos de 24h</em>
              </p>
              <p className="text-soft mt-2 text-sm">
                Lunes a viernes · LATAM / USA / EU
              </p>
              <div className="mt-5 h-px bg-ink/15" aria-hidden="true" />
            </div>

            <blockquote className="font-display text-2xl leading-snug">
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
              className="border border-ink/20 bg-panel p-8 md:p-10 space-y-8"
              aria-label="Formulario de contacto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block eyebrow text-[10px] text-soft mb-1"
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
                    className="block eyebrow text-[10px] text-soft mb-1"
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
                  className="block eyebrow text-[10px] text-soft mb-1"
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
                <div className="flex items-center gap-2">
                  {status === 'error' && (
                    <p className="font-mono text-[11px] text-red-600" role="alert">{error}</p>
                  )}
                  {status === 'sent' && (
                    <p className="font-mono text-[11px] text-signal" role="status">✓ ¡Mensaje enviado!</p>
                  )}
                  {status !== 'sent' && status !== 'error' && (
                    <p className="font-mono text-[11px] text-soft">
                      * Datos solo para responderte, según la{' '}
                      <a href="/privacidad" className="underline underline-offset-2 hover:text-signal">
                        política de privacidad
                      </a>
                      .
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="btn-editorial btn-editorial-accent disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === 'sending' ? 'Enviando...' : status === 'sent' ? '✓ ¡Mensaje enviado!' : 'Enviar mensaje'}
                  {status !== 'sending' && status !== 'sent' && <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

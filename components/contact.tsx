'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { useState, useCallback, type FormEvent } from 'react';

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
    'w-full px-4 py-3 bg-white border-2 border-[#17171b] rounded-sm text-[#17171b] placeholder-[#57575f]/60 focus:outline-none focus:shadow-[3px_3px_0_0_#2e5bff] focus:ring-2 focus:ring-[#2e5bff] transition-shadow';

  return (
    <section id="contact" className="py-24 md:py-32 relative" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="font-display text-5xl text-outline" aria-hidden="true">06</span>
            <div className="h-[2px] w-12 bg-[#17171b]" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#57575f]">
              Contacto
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="contact-title"
              className="font-display uppercase tracking-tight leading-[1.02] text-5xl md:text-7xl"
            >
              Hablemos<span className="text-[#ff4b2b]">.</span>
            </h2>
            <p className="text-lg text-[#57575f] leading-relaxed">
              Cuéntame sobre tu proyecto. Me encantaría escuchar tu visión y explorar cómo puedo
              ayudarte a hacerla realidad.
            </p>
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-5"
          >
            <div className="brutal-card bg-white p-6 rotate-[-0.6deg]">
              <span className="w-11 h-11 flex items-center justify-center bg-[#17c49b] border-2 border-[#17171b] shadow-[3px_3px_0_0_#17171b] rounded-sm mb-4" aria-hidden="true">
                <Mail className="w-5 h-5" />
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-[#57575f] mb-2">
                Escríbeme directo
              </p>
              <a
                href="mailto:hectorcastilloperez@gmail.com"
                className="font-display text-sm uppercase tracking-wide whitespace-nowrap hover:text-[#2e5bff] underline decoration-2 underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2e5bff] rounded-sm"
              >
                hectorcastilloperez@gmail.com
              </a>
            </div>

            <div className="brutal-card bg-[#ff86c8] p-6 rotate-[0.6deg]">
              <p className="font-display uppercase tracking-tight text-2xl leading-tight mb-2">
                Respuesta en menos de 24h
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-[#17171b]/70">
                Lunes a viernes · LATAM / USA / EU
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="brutal-card bg-[#fffdf4] p-6 md:p-8 space-y-5" aria-label="Formulario de contacto">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">
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
                  <label htmlFor="email" className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">
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
                <label htmlFor="message" className="block font-mono text-xs font-bold uppercase tracking-widest mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                  rows={6}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="brutal-btn w-full py-4 bg-[#2e5bff] text-white font-display uppercase tracking-wide text-xl rounded-sm disabled:opacity-60 disabled:pointer-events-none"
              >
                {submitted ? '✓ ¡Mensaje enviado!' : 'Enviar mensaje'}
                {!submitted && <ArrowUpRight className="w-5 h-5" aria-hidden="true" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

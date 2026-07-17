'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
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

  return (
    <section 
      id="contact" 
      className="py-32 relative"
      aria-labelledby="contact-title"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm" aria-hidden="true">05</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" aria-hidden="true" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Contacto</span>
          </div>
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos
          </h2>
          <p className="text-lg text-[#a0a8b8] leading-relaxed">
            Cuéntame sobre tu proyecto. Me encantaría escuchar tu visión y explorar cómo puedo ayudarte a hacerla realidad.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulario de contacto">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2 text-sm">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#686878] focus:outline-none focus:border-[#00d48e]/50 focus:ring-2 focus:ring-[#00d48e]/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#686878] focus:outline-none focus:border-[#00d48e]/50 focus:ring-2 focus:ring-[#00d48e]/30 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2 text-sm">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#686878] focus:outline-none focus:border-[#00d48e]/50 focus:ring-2 focus:ring-[#00d48e]/30 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00d48e] to-[#00b570] text-[#0f1117] font-bold hover:shadow-lg hover:shadow-[#00d48e]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#00d48e] focus:ring-offset-2 focus:ring-offset-[#0f1117] disabled:opacity-70"
            >
              {submitted ? '✓ Mensaje enviado' : 'Enviar Mensaje'}
            </button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-[#00d48e]/10 flex items-center gap-3"
          >
            <Mail className="w-5 h-5 text-[#00d48e]" aria-hidden="true" />
            <div>
              <span className="text-[#a0a8b8] text-sm">O escríbeme directamente:</span>
              <a 
                href="mailto:hectorcastilloperez@gmail.com" 
                className="block text-white font-medium hover:text-[#00d48e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d48e] rounded px-1"
              >
                hectorcastilloperez@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

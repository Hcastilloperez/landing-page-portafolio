'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm">03</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Contacto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos
          </h2>
          <p className="text-lg text-[#a0a8b8] leading-relaxed">
            Cuéntame sobre tu proyecto. Me encantaría escuchar tu visión y explorar cómo puedo ayudarte a hacerla realidad.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2 text-sm">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#686878] focus:outline-none focus:border-[#00d48e]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#686878] focus:outline-none focus:border-[#00d48e]/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-medium mb-2 text-sm">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#686878] focus:outline-none focus:border-[#00d48e]/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00d48e] to-[#00b570] text-[#0f1117] font-bold hover:shadow-lg hover:shadow-[#00d48e]/40 transition-all"
            >
              {submitted ? '✓ Mensaje enviado' : 'Enviar Mensaje'}
            </button>
          </form>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-[#00d48e]/10 flex items-center gap-3"
          >
            <Mail className="w-5 h-5 text-[#00d48e]" />
            <div>
              <span className="text-[#a0a8b8] text-sm">O escríbeme directamente:</span>
              <a href="mailto:hectorcastilloperez@gmail.com" className="block text-white font-medium hover:text-[#00d48e] transition-colors">
                hectorcastilloperez@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

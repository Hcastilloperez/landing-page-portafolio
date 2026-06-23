'use client';

import { motion } from 'framer-motion';
import { Mail, GitBranch, Share2, MessageCircle } from 'lucide-react';
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

  const socials = [
    { icon: Mail, label: 'Email', href: 'mailto:hectorcastilloperez@gmail.com', color: 'hover:text-[#00d48e]' },
    { icon: GitBranch, label: 'GitHub', href: 'https://github.com/Hcastilloperez', color: 'hover:text-[#ff6b35]' },
    { icon: Share2, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-[#4a90ff]' },
    { icon: MessageCircle, label: 'X/Twitter', href: 'https://twitter.com', color: 'hover:text-[#00d48e]' },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm">04</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Contacto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos
          </h2>
          <p className="text-lg text-[#a0a8b8] max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? ¿Una idea que quieres discutir? Me encantaría escuchar tu visión y explorar cómo puedo ayudarte a hacerla realidad.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#a0a8b8] focus:outline-none focus:border-[#00d48e]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#a0a8b8] focus:outline-none focus:border-[#00d48e]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#16213e] border border-[#00d48e]/20 text-white placeholder-[#a0a8b8] focus:outline-none focus:border-[#00d48e]/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00d48e] to-[#00b570] text-[#0f1117] font-bold hover:shadow-lg hover:shadow-[#00d48e]/40 transition-all"
              >
                {submitted ? '✓ Mensaje enviado' : 'Enviar Mensaje'}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contacto Directo</h3>
              <a href="mailto:hectorcastilloperez@gmail.com" className="block p-4 rounded-lg border border-[#00d48e]/20 hover:border-[#00d48e]/50 hover:bg-[#16213e]/50 transition-all group">
                <span className="text-[#a0a8b8] text-sm">Email</span>
                <p className="text-white font-medium group-hover:text-[#00d48e] transition-colors">hectorcastilloperez@gmail.com</p>
              </a>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Sígueme</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg border border-[#00d48e]/20 hover:border-[#00d48e]/50 hover:bg-[#16213e]/50 transition-all flex items-center justify-center group"
                    >
                      <Icon className={`w-5 h-5 text-[#a0a8b8] ${social.color} transition-colors`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="p-4 rounded-lg border border-[#ff6b35]/20 bg-[#ff6b35]/5">
              <p className="text-[#a0a8b8] text-sm">
                <span className="text-[#ff6b35] font-bold">⚡ Respondo dentro de 24 horas</span> a todos los mensajes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

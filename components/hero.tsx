'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0f1117] via-[#16213e] to-[#1a1a2e] pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 212, 142, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 142, 0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Glow effects */}
      <motion.div
        className="absolute top-20 right-40 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #00d48e 0%, transparent 70%)' }}
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-40 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #ff6b35 0%, transparent 70%)' }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d48e]/40 bg-[#00d48e]/10 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-[#00d48e] animate-pulse" />
          <span className="text-sm text-[#00d48e] font-medium">Disponible para trabajar</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Innovación mediante</span>
          <span className="block text-[#00d48e]">Tecnología & Creatividad</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-[#c8c8d8] mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Creo productos digitales que combinan inteligencia artificial, diseño elegante y experiencias inmersivas. Desde aplicaciones SaaS hasta soluciones empresariales.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#portfolio" className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00d48e] to-[#00b570] text-[#0f1117] font-semibold hover:shadow-lg hover:shadow-[#00d48e]/40 transition-all">
            Ver Portafolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#00d48e]/30 bg-[#00d48e]/5 text-white font-semibold hover:bg-[#00d48e]/15 hover:border-[#00d48e]/60 transition-all">
            Conocer más
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border border-[#00d48e]/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 bg-[#00d48e] rounded-full"
            />
          </div>
          <span className="text-xs text-[#a0a8b8] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}

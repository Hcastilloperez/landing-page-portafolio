'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap } from 'lucide-react';

export default function Athena() {
  return (
    <section id="athena" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d48e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff6b35]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm">03</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Proyecto Personal</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Athena: Asistente <span className="text-[#00d48e]">IA Personal</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden border border-[#00d48e]/20 bg-gradient-to-br from-[#16213e]/50 to-[#1a1a2e]/50 backdrop-blur-md"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 lg:p-16">
            
            {/* Athena Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-96 rounded-2xl overflow-hidden border border-[#00d48e]/40 group"
              >
                <Image
                  src="/athena.png"
                  alt="Athena - IA Personal Assistant"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1117]/50 via-transparent to-[#00d48e]/15" />
                
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#00d48e]/0 via-[#00d48e]/25 to-[#00d48e]/0"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
                
                {/* Corner accent lights - enhanced */}
                <motion.div 
                  className="absolute top-8 right-8 w-32 h-32 bg-[#00d48e] rounded-full blur-3xl opacity-0"
                  animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-8 left-8 w-40 h-40 bg-[#ff6b35] rounded-full blur-3xl opacity-0"
                  animate={{ opacity: [0, 0.3, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>

            {/* Athena Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-[#ff6b35]" />
                  <span className="text-[#ff6b35] text-sm font-mono uppercase tracking-widest">Mi Laboratorio de IA</span>
                </div>
                <p className="text-2xl text-[#a0a8b8] font-light mb-2">
                  Una versión personal inspirada en
                </p>
                <p className="text-lg text-[#a0a8b8] italic font-light">
                  Jarvis de Iron Man
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-[#00d48e]/50 to-transparent" />

              <p className="text-[#a0a8b8] leading-relaxed text-base">
                Athena es mi laboratorio de experiencias en inteligencia artificial conversacional, automatización de procesos complejos y control inteligente de sistemas. Un proyecto que combina mi pasión por la tecnología con la visión de crear asistentes verdaderamente útiles.
              </p>

              <p className="text-[#a0a8b8] leading-relaxed text-base">
                Exploro aquí conceptos avanzados de NLP, machine learning y arquitecturas de agentes autónomos. Cada iteración representa un paso más cerca de mi visión: tecnología que sea no solo inteligente, sino empática y accesible.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <motion.div 
                  className="p-4 rounded-lg bg-[#00d48e]/10 border border-[#00d48e]/30 hover:border-[#00d48e]/60 transition-all"
                  whileHover={{ scale: 1.05, borderColor: '#00d48e' }}
                >
                  <div className="text-[#00d48e] font-mono text-xs mb-2 uppercase tracking-widest">AI Core</div>
                  <p className="text-[#a0a8b8] text-xs leading-tight">NLP avanzado & ML</p>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-[#ff6b35]/10 border border-[#ff6b35]/30 hover:border-[#ff6b35]/60 transition-all"
                  whileHover={{ scale: 1.05, borderColor: '#ff6b35' }}
                >
                  <div className="text-[#ff6b35] font-mono text-xs mb-2 uppercase tracking-widest">Automation</div>
                  <p className="text-[#a0a8b8] text-xs leading-tight">Task scheduling</p>
                </motion.div>
                <motion.div 
                  className="p-4 rounded-lg bg-[#4a90ff]/10 border border-[#4a90ff]/30 hover:border-[#4a90ff]/60 transition-all"
                  whileHover={{ scale: 1.05, borderColor: '#4a90ff' }}
                >
                  <div className="text-[#4a90ff] font-mono text-xs mb-2 uppercase tracking-widest">Integration</div>
                  <p className="text-[#a0a8b8] text-xs leading-tight">Multi-device sync</p>
                </motion.div>
              </div>

              {/* Quote */}
              <motion.div 
                className="mt-8 p-6 rounded-lg border border-[#00d48e]/20 bg-[#00d48e]/5 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-[#a0a8b8] text-sm">
                  &quot;Athena no es solo un asistente. Es una visión del futuro donde la tecnología amplifica nuestra capacidad de crear, innovar y conectar con lo que realmente importa.&quot;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

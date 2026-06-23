'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Code2, Shield } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Desarrollo Web', level: 95 },
    { name: 'Inteligencia Artificial', level: 88 },
    { name: 'Arquitectura de Sistemas', level: 90 },
    { name: 'Diseño UX/UI', level: 85 },
  ];

  const passions = [
    { 
      icon: '🤖', 
      title: 'IA & Automatización', 
      desc: 'Fascina construir sistemas inteligentes que automatizan procesos complejos' 
    },
    { 
      icon: '🎨', 
      title: 'Diseño Digital', 
      desc: 'Crear interfaces bellas y funcionales que impacten la experiencia del usuario' 
    },
    { 
      icon: '🚀', 
      title: 'Innovación Tech', 
      desc: 'Explorar nuevas tecnologías y aplicarlas para resolver problemas reales' 
    },
    { 
      icon: '🔒', 
      title: 'Seguridad', 
      desc: 'Desarrollar soluciones seguras y confiables para proteger datos' 
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm">01</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Sobre Mí</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ingeniero de Sistemas & Desarrollador Full Stack
          </h2>
          <p className="text-lg text-[#a0a8b8] max-w-2xl leading-relaxed">
            Con más de 5 años de experiencia, me especializo en crear soluciones web innovadoras que combinan diseño elegante con arquitectura sólida. Mi pasión es transformar ideas en productos digitales que generan impacto real.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-[#a0a8b8] leading-relaxed">
              Inicio mi carrera en seguridad electrónica y consultoría, pero siempre sentí la llamada del desarrollo software. Hoy combino ambas pasiones para crear plataformas que no solo son funcionales, sino también seguras y hermosas.
            </p>
            <p className="text-[#a0a8b8] leading-relaxed">
              Cada proyecto es una oportunidad para aprender algo nuevo. Desde sistemas SaaS hasta agentes de IA, he trabajado con startups y empresas establecidas para llevar sus visiones a la realidad.
            </p>
            <p className="text-[#a0a8b8] leading-relaxed">
              Cuando no estoy codificando, estoy explorando nuevas tecnologías, contribuyendo a proyectos open source o disfrutando del aire libre. Creo que el equilibrio entre trabajo y vida es clave para la creatividad sostenida.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#00d48e] text-sm font-mono">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-[#16213e] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#00d48e] to-[#ff6b35] rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Passions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Mis Fascinaciones</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {passions.map((passion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#00d48e]/20 bg-[#16213e]/50 backdrop-blur hover:border-[#00d48e]/50 hover:bg-[#16213e]/80 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{passion.icon}</div>
                <h4 className="font-bold text-white mb-2">{passion.title}</h4>
                <p className="text-sm text-[#a0a8b8]">{passion.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Athena Personal Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-20 border-t border-[#00d48e]/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Athena Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-96 rounded-2xl overflow-hidden border border-[#00d48e]/30 group"
              >
                <Image
                  src="/athena.png"
                  alt="Athena - IA Personal Assistant"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1117]/40 via-transparent to-[#00d48e]/10" />
                
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#00d48e]/0 via-[#00d48e]/20 to-[#00d48e]/0"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Corner accent lights */}
                <motion.div 
                  className="absolute top-4 right-4 w-24 h-24 bg-[#00d48e] rounded-full blur-2xl opacity-0"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-32 h-32 bg-[#4a90ff] rounded-full blur-3xl opacity-0"
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>

            {/* Athena Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-[#ff6b35]" />
                  <span className="text-[#ff6b35] text-sm font-mono uppercase tracking-widest">Proyecto Personal</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Athena: Asistente IA Personal
                </h3>
              </div>

              <p className="text-[#a0a8b8] leading-relaxed text-lg">
                Una versión personal inspirada en Jarvis de Iron Man. Athena es mi laboratorio de experiencias en inteligencia artificial conversacional, automatización de procesos y control de sistemas inteligentes en el hogar.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#00d48e]/10 border border-[#00d48e]/20">
                  <div className="text-[#00d48e] font-mono text-sm mb-1">AI Core</div>
                  <p className="text-[#a0a8b8] text-xs">NLP avanzado</p>
                </div>
                <div className="p-4 rounded-lg bg-[#ff6b35]/10 border border-[#ff6b35]/20">
                  <div className="text-[#ff6b35] font-mono text-sm mb-1">Automation</div>
                  <p className="text-[#a0a8b8] text-xs">Task scheduling</p>
                </div>
                <div className="p-4 rounded-lg bg-[#4a90ff]/10 border border-[#4a90ff]/20">
                  <div className="text-[#4a90ff] font-mono text-sm mb-1">Integration</div>
                  <p className="text-[#a0a8b8] text-xs">Multi-device</p>
                </div>
              </div>

              <p className="text-[#a0a8b8] italic">
                &quot;Athena representa mi visión del futuro: tecnología que no solo es inteligente, sino también empática y accesible para todos.&quot;
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

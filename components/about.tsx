'use client';

import { motion } from 'framer-motion';

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


      </div>
    </section>
  );
}

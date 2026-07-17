'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 'faq-1',
    question: '¿En qué industrias trabajás?',
    answer: 'Trabajo con empresas de fintech, healthtech, retail, logística y SaaS. No importa el sector si hay un problema claro por resolver.',
  },
  {
    id: 'faq-2',
    question: '¿Tickets mínimos?',
    answer: 'Mínimo arranco con proyectos de USD 5,000. Para proyectos menores, puedo evaluar opciones de mantenimiento o consulting puntual.',
  },
  {
    id: 'faq-3',
    question: '¿Trabajan con NDA y código propietario?',
    answer: 'Sí. Todos mis contratos incluyen NDA por defecto. El código es 100% tuyo y entrego todo al finalizar.',
  },
  {
    id: 'faq-4',
    question: '¿Tiempos típicos al primer release?',
    answer: 'MVP en 4-8 semanas depending del scope. Para proyectos más grandes, el primer release funcional suele estar en 8-12 semanas.',
  },
  {
    id: 'faq-5',
    question: '¿Operan fuera de Colombia?',
    answer: 'Sí. Trabajo con clientes en LATAM, USA y Europa. Uso herramientas async-first para garantizar comunicación efectiva sin importar la zona horaria.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <section 
      id="faq" 
      className="py-32 relative overflow-hidden"
      aria-labelledby="faq-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d48e]/3 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#00d48e] font-mono text-sm" aria-hidden="true">04</span>
            <div className="h-px w-8 bg-gradient-to-r from-[#00d48e] to-transparent" aria-hidden="true" />
            <span className="text-[#a0a8b8] text-sm uppercase tracking-widest">Preguntas</span>
          </div>
          <h2 id="faq-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que más <span className="text-[#00d48e]">me preguntan</span>
          </h2>
          <p className="text-lg text-[#a0a8b8] leading-relaxed">
            Antes de la primera llamada. Si no está tu pregunta, escribinos.
          </p>
        </motion.header>

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-[#00d48e]/20 rounded-xl overflow-hidden bg-[#0f1117]/40 hover:border-[#00d48e]/40 transition-colors"
              role="listitem"
            >
              <button
                onClick={() => toggleIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleIndex(index);
                  }
                }}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-[#00d48e] focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
                id={`faq-question-${faq.id}`}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-5 h-5 text-[#00d48e] flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[#a0a8b8] leading-relaxed border-t border-[#00d48e]/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

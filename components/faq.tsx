'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

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
    question: '¿Trabajás con NDA y código propietario?',
    answer: 'Sí. Todos mis contratos incluyen NDA por defecto. El código es 100% tuyo y entrego todo al finalizar.',
  },
  {
    id: 'faq-4',
    question: '¿Tiempos típicos al primer release?',
    answer: 'MVP en 4-8 semanas dependiendo del alcance. Para proyectos más grandes, el primer release funcional suele estar en 8-12 semanas.',
  },
  {
    id: 'faq-5',
    question: '¿Operás fuera de Colombia?',
    answer: 'Sí. Trabajo con clientes en LATAM, USA y Europa. Uso herramientas async-first para garantizar comunicación efectiva sin importar la zona horaria.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = useCallback((index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32 relative" aria-labelledby="faq-title">
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="font-display text-5xl text-outline" aria-hidden="true">05</span>
            <div className="h-[2px] w-12 bg-[#17171b]" aria-hidden="true" />
            <span className="font-mono text-sm uppercase tracking-widest text-[#57575f]">
              Preguntas
            </span>
          </div>
          <h2
            id="faq-title"
            className="font-display uppercase tracking-tight leading-[1.02] text-4xl md:text-6xl mb-6"
          >
            Lo que más{' '}
            <span className="bg-[#2e5bff] text-[#f2eddf] px-3 border-2 border-[#17171b] shadow-[4px_4px_0_0_#17171b] inline-block rotate-[1deg] rounded-sm">
              me preguntan
            </span>
          </h2>
          <p className="text-lg text-[#57575f] leading-relaxed">
            Antes de la primera llamada. Si no está tu pregunta, escríbeme.
          </p>
        </motion.header>

        <div className="space-y-5" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`brutal-card ${
                  isOpen ? 'bg-[#ffc93c] shadow-[6px_6px_0_0_#17171b] translate-x-[-2px] translate-y-[-2px]' : 'bg-white'
                }`}
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
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-[#2e5bff] focus:ring-offset-2 focus:ring-offset-[#f2eddf] rounded-[0.5rem]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="font-display text-lg md:text-xl uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-9 h-9 flex items-center justify-center border-2 border-[#17171b] shadow-[2px_2px_0_0_#17171b] bg-white rounded-sm"
                    aria-hidden="true"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[#17171b] leading-relaxed border-t-2 border-[#17171b] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-5">
      <span className="font-display italic text-2xl text-[#2e3bff]" aria-hidden="true">{index}</span>
      <span className="eyebrow text-[#6f6e67]">{label}</span>
      <div className="flex-1 h-px bg-[#1a1a18]/15" aria-hidden="true" />
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = useCallback((index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32 relative" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader index="05" label="Preguntas" />
          <h2
            id="faq-title"
            className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05] mb-6"
          >
            Lo que más{' '}
            <em className="italic font-normal text-[#2e3bff]">me preguntan</em>
          </h2>
          <p className="text-lg text-[#6f6e67] leading-relaxed">
            Antes de la primera llamada. Si no está tu pregunta, escríbeme.
          </p>
        </motion.header>

        <div className="border-t border-[#1a1a18]/15" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-[#1a1a18]/15"
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
                  className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[#2e3bff] shrink-0" aria-hidden="true">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-display text-xl md:text-2xl tracking-tight ${
                        isOpen ? 'italic text-[#2e3bff]' : ''
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <Plus className={`w-5 h-5 ${isOpen ? 'text-[#2e3bff]' : 'text-[#1a1a18]'}`} />
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
                      <div className="pb-6 pl-8 text-[#6f6e67] leading-relaxed">
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

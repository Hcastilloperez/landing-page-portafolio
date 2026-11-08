'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Scissors, Stethoscope } from 'lucide-react';
import { products } from '@/lib/site';

const icons = [Stethoscope, Scissors];

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-5">
      <span className="font-display italic text-2xl text-[#2e3bff]" aria-hidden="true">{index}</span>
      <span className="eyebrow text-[#6f6e67]">{label}</span>
      <div className="flex-1 h-px bg-[#1a1a18]/15" aria-hidden="true" />
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 relative" aria-labelledby="products-title">
      <div className="max-w-6xl mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader index="05" label="Productos" />
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              id="products-title"
              className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05]"
            >
              Productos propios,{' '}
              <em className="italic font-normal text-[#2e3bff]">en producción</em>
            </h2>
            <p className="text-lg text-[#6f6e67] leading-relaxed">
              Dos SaaS que diseñé, construí y opero. Cada uno resuelve la agenda y la operación de un
              negocio real, y puedes entrar a probarlos ahora mismo.
            </p>
          </div>
        </motion.header>

        <ul className="grid md:grid-cols-2 gap-8" role="list">
          {products.map((product, index) => {
            const IconComponent = icons[index];
            return (
              <motion.li
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group h-full"
              >
                <article className="border border-[#1a1a18]/20 bg-[#fffdf8] h-full flex flex-col hover:border-[#1a1a18]/50 hover:shadow-[0_20px_50px_-20px_rgba(26,26,24,0.3)] transition-all duration-300">
                  <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-[#1a1a18]/15">
                    <span className="eyebrow text-[10px] text-[#6f6e67]">{product.category}</span>
                    <span className="font-display italic text-lg leading-none text-[#2e3bff]" aria-hidden="true">
                      {index === 0 ? 'A.' : 'B.'}
                    </span>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="w-12 h-12 flex items-center justify-center border border-[#1a1a18]/20 rounded-full group-hover:bg-[#2e3bff] group-hover:border-[#2e3bff] group-hover:text-white transition-all"
                        aria-hidden="true"
                      >
                        <IconComponent className="w-5 h-5" />
                      </span>
                      <h3 className="font-display text-3xl tracking-tight group-hover:italic transition-all">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-[#6f6e67] text-sm leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mb-7" role="list" aria-label={`Características de ${product.name}`}>
                      {product.tags.map((tag) => (
                        <li key={tag}>
                          <span className="eyebrow text-[10px] border border-[#1a1a18]/20 px-2 py-1">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial-text self-start text-[11px]"
                      aria-label={`Abrir ${product.name} (se abre en nueva pestaña)`}
                    >
                      Ver {product.name}
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>

        <p className="mt-10 font-display italic text-lg text-[#6f6e67]">
          ¿Quieres algo parecido para tu negocio?{' '}
          <a href="#contact" className="text-[#2e3bff] underline underline-offset-4 hover:no-underline">
            Escríbeme
          </a>
          .
        </p>
      </div>
    </section>
  );
}

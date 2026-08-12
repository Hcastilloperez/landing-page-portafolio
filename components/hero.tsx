'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Stethoscope } from 'lucide-react';

function Masthead() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 border-y border-[#1a1a18]/15 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a18]/15"
      aria-hidden="true"
    >
      <p className="eyebrow text-[#6f6e67] py-3">HE. — Portafolio</p>
      <p className="eyebrow text-[#6f6e67] py-3 sm:px-4">
        Ingeniero de Sistemas <span className="text-[#1a1a18]">·</span> Software Engineer
      </p>
      <p className="eyebrow text-[#6f6e67] py-3 sm:px-4">Colombia / 2026</p>
    </div>
  );
}

function FeaturedCard() {
  return (
    <div className="relative border border-[#1a1a18]/20 bg-[#fffdf8]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a18]/15">
        <span className="eyebrow text-[#1a1a18]">Último lanzamiento</span>
        <span className="eyebrow text-[#2e3bff]">2026</span>
      </div>

      <div className="px-5 py-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 flex items-center justify-center bg-[#0ea5e9] text-[#1a1a18] rounded-full" aria-hidden="true">
            <Stethoscope className="w-4 h-4" />
          </span>
          <div>
            <p className="font-display text-xl font-semibold leading-none">MediCitas</p>
            <p className="eyebrow text-[#6f6e67] mt-1.5">SaaS · Healthtech</p>
          </div>
        </div>

        <div className="mb-5" aria-hidden="true">
          <div className="flex items-center gap-2 mb-2">
            <span className="eyebrow text-[#6f6e67]">Agenda</span>
            <span className="eyebrow text-[#6f6e67]">Mar 4</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 space-y-1.5">
              {[
                ['08:00', '82%'],
                ['08:20', '58%'],
                ['09:00', '76%'],
              ].map(([time, w]) => (
                <div key={time} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[#6f6e67] w-9">{time}</span>
                  <span
                    className="h-2 bg-[#0ea5e9]/70"
                    style={{ width: w }}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              {[
                ['Hoy', '8'],
                ['Nuevos', '+3'],
              ].map(([k, v]) => (
                <div key={k} className="border border-[#1a1a18]/20 px-2 py-1.5">
                  <p className="eyebrow text-[10px] text-[#6f6e67]">{k}</p>
                  <p className="font-display text-lg leading-none">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="https://medicitas.hectorcastillo.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-editorial-text text-[11px]"
          aria-label="Ver proyecto MediCitas (se abre en nueva pestaña)"
        >
          Ver proyecto
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-16 md:pt-20 overflow-hidden" aria-labelledby="hero-title">
      <span
        className="absolute -top-24 -right-10 font-display italic text-[22rem] leading-none text-[#1a1a18]/[0.045] select-none hidden lg:block pointer-events-none"
        aria-hidden="true"
      >
        H
      </span>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="pt-10 pb-4">
          <Masthead />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 py-12 md:py-16 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex w-2 h-2" role="status" aria-label="Disponible para proyectos">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#e03c31] opacity-60 animate-ping" aria-hidden="true" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-[#e03c31]" aria-hidden="true" />
              </span>
              <span className="eyebrow text-[#1a1a18]">Disponible para nuevos proyectos — Q3 2026</span>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display font-medium tracking-tight text-[15vw] leading-[0.98] sm:text-7xl md:text-[5.2rem] mb-8"
            >
              Código con{' '}
              <em className="italic font-normal text-[#2e3bff]">propósito</em>
              <sup className="font-mono text-base align-super ml-1" aria-hidden="true">*</sup>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[#6f6e67] max-w-xl mb-10 leading-relaxed"
            >
              Construyo <strong className="font-semibold text-[#1a1a18]">SaaS, agentes de IA y plataformas empresariales</strong> donde
              el diseño editorial y la arquitectura de software trabajan en el mismo equipo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
            >
              <a href="#portfolio" className="btn-editorial btn-editorial-accent">
                Ver portafolio
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-editorial-text">
                Escríbeme
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 divide-x divide-[#1a1a18]/15 border-y border-[#1a1a18]/15 max-w-lg"
            >
              {[
                ['+5', 'años de experiencia'],
                ['3', 'SaaS en producción'],
                ['LATAM', 'clientes en 3 regiones'],
              ].map(([value, label]) => (
                <div key={label} className="px-4 py-4">
                  <p className="font-display text-3xl text-[#2e3bff] leading-none">{value}</p>
                  <p className="eyebrow text-[10px] text-[#6f6e67] mt-2">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-5 lg:pl-8"
          >
            <div className="animate-float-up">
              <FeaturedCard />
            </div>
            <p className="font-display italic text-lg text-[#6f6e67] mt-8 leading-snug">
              «El diseño no es solo cómo se ve. Es cómo funciona el software desde adentro.»
            </p>
          </motion.div>
        </div>

        <p className="font-mono text-[11px] text-[#6f6e67] pb-10">
          * Diseñado en Colombia, probado en producción.
        </p>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/section-header';

const chain = [
  { name: 'Cloudflare', note: 'DNS, TLS y caché' },
  { name: 'Nginx', note: 'Proxy inverso' },
  { name: 'PM2', note: 'Gestor de procesos' },
  { name: 'Next.js', note: 'Build standalone' },
];

const specs = [
  ['Virtualización', 'Proxmox VE'],
  ['Contenedor', 'LXC · Debian/Ubuntu'],
  ['Recursos', '1 vCPU · 512 MiB RAM'],
  ['Runtime', 'Node.js 20 · pnpm'],
  ['Procesos', 'PM2'],
  ['Borde', 'Nginx + Cloudflare'],
];

const deploySteps = [
  ['build', 'pnpm build en mi máquina (output standalone)'],
  ['pack', 'empaqueta .next/standalone + static + public (~50 MB)'],
  ['scp', 'sube el paquete al contenedor'],
  ['pm2', 'descomprime, reinicia el proceso y verifica'],
];

export default function Homelab() {
  return (
    <section id="homelab" className="py-24 md:py-32 border-t border-ink/10" aria-labelledby="homelab-title">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader index="03" label="Homelab" />

        <div className="grid lg:grid-cols-12 gap-6 mb-16">
          <h2
            id="homelab-title"
            className="lg:col-span-7 text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.02]"
          >
            Esta página corre en mi propio servidor.
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 text-soft leading-relaxed self-end">
            Un contenedor LXC en Proxmox con 512 MiB de RAM y una sola vCPU. Pequeño a propósito: me
            obliga a que el despliegue y el código sean eficientes.
          </p>
        </div>

        <motion.ol
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-lg overflow-hidden mb-8"
          aria-label="Ruta de una petición"
        >
          {chain.map((node, i) => (
            <li key={node.name} className="bg-panel p-5 relative">
              <p className="font-mono text-[11px] text-signal mb-6">{String(i + 1).padStart(2, '0')}</p>
              <p className="text-xl font-medium tracking-tight">{node.name}</p>
              <p className="font-mono text-[11px] text-soft mt-1">{node.note}</p>
              {i < chain.length - 1 && (
                <span
                  className="hidden lg:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 text-signal font-mono text-sm bg-paper rounded-full w-6 h-6 grid place-items-center border border-ink/10"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </motion.ol>

        <div className="grid lg:grid-cols-2 gap-8">
          <dl className="rounded-lg border border-ink/10 bg-panel divide-y divide-ink/10">
            {specs.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 px-5 py-3.5">
                <dt className="font-mono text-xs text-soft">{k}</dt>
                <dd className="text-sm text-right">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="rounded-lg border border-ink/15 bg-panel overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ink/10 font-mono text-[11px] text-soft">
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
                <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
                <i className="w-2.5 h-2.5 rounded-full bg-ink/15" />
              </span>
              <span className="ml-2">deploy.ps1</span>
            </div>
            <div className="p-5 font-mono text-xs leading-relaxed">
              <p className="text-soft mb-3">
                <span className="text-signal">$</span> .\deploy.ps1
              </p>
              <ul className="space-y-2">
                {deploySteps.map(([step, text]) => (
                  <li key={step} className="flex gap-3">
                    <span className="text-signal w-9 shrink-0">{step}</span>
                    <span className="text-ink/90">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-soft">
                El servidor nunca compila: compilar Next.js ahí tardaba ~10 minutos. Ahora el despliegue
                completo toma unos 15 segundos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

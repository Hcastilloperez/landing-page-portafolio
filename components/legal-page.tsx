import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from '@/components/footer';
import { legalLinks, site } from '@/lib/site';

type LegalPageProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function LegalPage({ title, subtitle, children }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-[#1a1a18]/15 bg-[#f4f0e7]">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-baseline gap-2 focus:outline-none focus:ring-2 focus:ring-[#2e3bff] rounded-sm"
            aria-label={`${site.name} — Inicio`}
          >
            <span className="font-display text-2xl font-semibold tracking-tight">
              Héctor <span className="italic font-normal">Castillo</span>
            </span>
            <span className="w-2 h-2 bg-[#2e3bff] inline-block" aria-hidden="true" />
          </Link>
          <Link href="/" className="eyebrow text-[#6f6e67] hover:text-[#1a1a18] transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main id="main-content" className="bg-[#f4f0e7] text-[#1a1a18] py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-4">
          <p className="eyebrow text-[#2e3bff] mb-4">
            Legal · Actualizado el {site.updated}
          </p>
          <h1 className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05] mb-6">
            {title}
          </h1>
          <p className="text-lg text-[#6f6e67] leading-relaxed">{subtitle}</p>

          <div className="legal-prose mt-12">{children}</div>

          <aside className="mt-16 border border-[#1a1a18]/20 bg-[#fffdf8] p-6 md:p-8">
            <h2 className="font-display text-2xl mb-4">Contacto del responsable</h2>
            <address className="not-italic text-sm leading-relaxed text-[#6f6e67] space-y-1.5">
              <p className="text-[#1a1a18] font-medium">{site.name}</p>
              <p>{site.location}</p>
              <p>
                Teléfono y WhatsApp:{' '}
                <a href={`tel:${site.phone.tel}`} className="underline underline-offset-4 hover:text-[#2e3bff]">
                  {site.phone.display}
                </a>
              </p>
              <p>
                Correo:{' '}
                <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-[#2e3bff]">
                  {site.email}
                </a>
              </p>
            </address>
          </aside>

          <nav aria-label="Documentos legales" className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-[10px] text-[#6f6e67] hover:text-[#2e3bff] underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}

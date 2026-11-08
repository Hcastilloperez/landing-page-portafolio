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
      <header className="border-b border-ink/15 bg-paper">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-baseline gap-2 focus:outline-none focus:ring-2 focus:ring-signal rounded-sm"
            aria-label={`${site.brand} — Inicio`}
          >
            <span className="font-display text-2xl font-semibold tracking-tight">
              Héctor <span className="font-normal">Castillo</span>
            </span>
            <span className="w-2 h-2 bg-signal inline-block" aria-hidden="true" />
          </Link>
          <Link href="/" className="eyebrow text-soft hover:text-ink transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main id="main-content" className="bg-paper text-ink py-16 md:py-24">
        <article className="max-w-3xl mx-auto px-4">
          <p className="eyebrow text-signal mb-4">
            Legal · Actualizado el {site.updated}
          </p>
          <h1 className="font-display font-medium tracking-tight text-4xl md:text-6xl leading-[1.05] mb-6">
            {title}
          </h1>
          <p className="text-lg text-soft leading-relaxed">{subtitle}</p>

          <div className="legal-prose mt-12">{children}</div>

          <aside className="mt-16 border border-ink/20 bg-panel p-6 md:p-8">
            <h2 className="font-display text-2xl mb-4">Contacto del responsable</h2>
            <address className="not-italic text-sm leading-relaxed text-soft space-y-1.5">
              <p className="text-ink font-medium">{site.name}</p>
              <p>{site.location}</p>
              <p>
                Teléfono y WhatsApp:{' '}
                <a href={`tel:${site.phone.tel}`} className="underline underline-offset-4 hover:text-signal">
                  {site.phone.display}
                </a>
              </p>
              <p>
                Correo:{' '}
                <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-signal">
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
                className="eyebrow text-[10px] text-soft hover:text-signal underline underline-offset-4"
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

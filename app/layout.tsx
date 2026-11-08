import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
})

/**
 * Código de verificación de dominio que entrega Meta (Business Manager →
 * Configuración del dominio → Verificación). Se define en .env.local como
 * META_DOMAIN_VERIFICATION y se inyecta como <meta name="facebook-domain-verification">.
 * Si la variable no existe, el sitio se construye sin la etiqueta.
 */
const metaDomainVerification = process.env.META_DOMAIN_VERIFICATION?.trim()

export const metadata: Metadata = {
  metadataBase: new URL('https://hectorcastillo.net'),
  title: {
    default: 'Héctor Castillo | Full Stack Developer & Software Engineer',
    template: '%s | Héctor Castillo',
  },
  description: 'Desarrollador Full Stack especializado en software a medida, IA y soluciones empresariales. Código con propósito. +5 años de experiencia.',
  applicationName: 'Héctor Castillo',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  verification: metaDomainVerification
    ? { other: { 'facebook-domain-verification': metaDomainVerification } }
    : undefined,
  keywords: [
    'desarrollador full stack',
    'software a medida',
    'IA',
    'agentes de IA',
    'automatización',
    'e-commerce',
    'desarrollo web',
    'Next.js',
    'React',
    'Node.js',
    'empresas',
    'Colombia',
  ],
  authors: [{ name: 'Héctor Castillo' }],
  creator: 'Héctor Castillo',
  publisher: 'Héctor Castillo',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://hectorcastillo.net',
    siteName: 'Héctor Castillo - Full Stack Developer',
    title: 'Héctor Castillo | Full Stack Developer & Software Engineer',
    description: 'Desarrollador Full Stack especializado en software a medida, IA y soluciones empresariales. Código con propósito.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Héctor Castillo - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Héctor Castillo | Full Stack Developer',
    description: 'Desarrollador Full Stack especializado en software a medida, IA y soluciones empresariales.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f0e7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${dmSans.variable} ${plexMono.variable}`}
    >
      <body className="font-sans bg-[#f4f0e7] text-[#1a1a18]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1a1a18] focus:text-[#f4f0e7] focus:rounded-none focus:font-bold"
        >
          Saltar al contenido principal
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

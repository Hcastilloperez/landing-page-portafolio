import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
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
  description: 'Desarrollador Full Stack especializado en software a medida, IA y soluciones empresariales. SaaS en producción para salud y barberías.',
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
  authors: [{ name: 'Héctor Rafael Castillo Pérez' }],
  creator: 'Héctor Rafael Castillo Pérez',
  publisher: 'Héctor Rafael Castillo Pérez',
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
  colorScheme: 'dark',
  themeColor: '#0c0d0b',
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
      className={`${geist.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans bg-paper text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-signal focus:text-paper focus:rounded-none focus:font-bold"
        >
          Saltar al contenido principal
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

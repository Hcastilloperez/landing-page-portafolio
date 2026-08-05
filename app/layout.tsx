import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Archivo_Black, Space_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({ variable: '--font-archivo', subsets: ['latin'] })
const archivoBlack = Archivo_Black({
  weight: '400',
  variable: '--font-archivo-black',
  subsets: ['latin'],
})
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  variable: '--font-space-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hectorcastillo.net'),
  title: {
    default: 'Héctor Castillo | Full Stack Developer & Software Engineer',
    template: '%s | Héctor Castillo',
  },
  description: 'Desarrollador Full Stack especializado en software a medida, IA y soluciones empresariales. Código con propósito. +5 años de experiencia.',
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
  themeColor: '#f2eddf',
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
      className={`${archivo.variable} ${archivoBlack.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans bg-[#f2eddf] text-[#17171b]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#ffc93c] focus:text-[#17171b] focus:rounded-lg focus:font-bold focus:border-2 focus:border-[#17171b] focus:shadow-[3px_3px_0_0_#17171b]"
        >
          Saltar al contenido principal
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

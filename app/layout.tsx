import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hectorcastillo.net'),
  verification: {
    other: { 'facebook-domain-verification': '1q4x43l3a5dbuo2rmz1ydiqzy9lhib' },
  },
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
  colorScheme: 'dark',
  themeColor: '#0f1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-[#05050a] text-white">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00d48e] focus:text-[#0f1117] focus:rounded-lg focus:font-semibold"
        >
          Saltar al contenido principal
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

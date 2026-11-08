/**
 * Datos públicos del sitio en un único lugar.
 * Cualquier cambio de contacto debe hacerse aquí.
 */
export const site = {
  name: 'Héctor Rafael Castillo Pérez',
  brand: 'Héctor Castillo',
  role: 'Ingeniero de Sistemas · Full Stack Developer',
  city: 'Barranquilla',
  country: 'Colombia',
  location: 'Barranquilla, Colombia',
  email: 'contacto@hectorcastillo.net',
  phone: {
    display: '+57 318 159 9454',
    tel: '+573181599454',
    whatsapp: '573181599454',
  },
  url: 'https://hectorcastillo.net',
  updated: '8 de noviembre de 2026',
} as const

export const whatsappUrl = `https://wa.me/${site.phone.whatsapp}`

export const products = [
  {
    name: 'MediCitas',
    category: 'SaaS · Healthtech',
    description:
      'Agenda médica en línea para profesionales de la salud: reservas 24/7, página pública por consultorio, historia clínica digital y recordatorios por WhatsApp con consentimiento del paciente.',
    href: 'https://medicitas.hectorcastillo.net/',
    tags: ['Multi-tenant', 'Agenda', 'Historia clínica'],
  },
  {
    name: 'BarberControl',
    category: 'SaaS · Barberías',
    description:
      'Gestión completa para barberías: clientes, barberos, reservas y KPIs en un solo panel, con una operación pensada para el día a día del negocio.',
    href: 'https://barbercontrol.hectorcastillo.net/',
    tags: ['Reservas', 'Equipo', 'KPIs'],
  },
] as const

export const legalLinks = [
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/terminos', label: 'Términos' },
  { href: '/eliminacion-de-datos', label: 'Eliminación de datos' },
] as const

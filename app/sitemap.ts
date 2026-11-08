import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-11-08')

  return [
    { url: site.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/privacidad`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${site.url}/terminos`, lastModified, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${site.url}/eliminacion-de-datos`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ]
}

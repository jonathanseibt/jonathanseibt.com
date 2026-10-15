import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/src/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/` }]
}

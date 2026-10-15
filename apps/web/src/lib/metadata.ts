import type { Metadata } from 'next'
import type { Person, WithContext } from 'schema-dts'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!
if (!SITE_URL) throw new Error('NEXT_PUBLIC_SITE_URL is not set')

export const SITE_NAME = 'Jonathan Seibt'
export const SITE_TITLE = SITE_NAME
export const SITE_IMAGE_OPEN_GRAPH = '/assets/jonathan-seibt-preview.jpg'
export const SITE_DESCRIPTION = "Hey! My name is Jonathan Seibt, and I'm a Software Engineer."

export const SITE_SOCIAL_LINKS = {
  LINKEDIN: 'https://goto.jonathanseibt.com/linkedin',
  GITHUB: 'https://goto.jonathanseibt.com/github',
} as const

export function canonicalUrl(path: string): string {
  return new URL(path, SITE_URL).toString()
}

export const SITE_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: canonicalUrl('/') },
  title: { default: SITE_TITLE, template: `%s · ${SITE_TITLE}` },
  description: SITE_DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: new URL(SITE_IMAGE_OPEN_GRAPH, SITE_URL).toString(), width: 512, height: 512 }],
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [new URL(SITE_IMAGE_OPEN_GRAPH, SITE_URL).toString()],
    card: 'summary_large_image',
    creator: '@jonathanseibt',
  },
  appleWebApp: { title: SITE_NAME },
  other: { 'theme-color': '#ffffff' },
}

export const SITE_PERSON_JSON_LD: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: 'Software Engineer',
  sameAs: [SITE_SOCIAL_LINKS.LINKEDIN, SITE_SOCIAL_LINKS.GITHUB],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Caxias do Sul',
    addressRegion: 'RS',
    addressCountry: 'BR',
  },
}

import 'lenis/dist/lenis.css'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Alegreya } from 'next/font/google'
import { SITE_METADATA, SITE_PERSON_JSON_LD } from '@/src/lib/metadata'
import { JsonLd } from '@/src/ui/json-ld'
import { SmoothScroll } from '@/src/ui/smooth-scroll'

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = SITE_METADATA

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' data-scroll-behavior='smooth' className={`font-sans antialiased ${alegreya.variable}`}>
      <body className='min-h-dvh w-full max-w-screen-2xl bg-brand-bg text-brand-ink'>
        <SmoothScroll>
          <JsonLd data={SITE_PERSON_JSON_LD} />
          {children}
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  )
}

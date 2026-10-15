'use client'

import './globals.css'
import { Alegreya } from 'next/font/google'
import { ErrorPage } from '@/src/ui/error-page'

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export default function GlobalError() {
  return (
    <html lang='en' className={`font-sans antialiased ${alegreya.variable}`}>
      <body className='min-h-dvh w-full max-w-screen-2xl bg-brand-bg text-brand-ink'>
        <ErrorPage />
      </body>
    </html>
  )
}

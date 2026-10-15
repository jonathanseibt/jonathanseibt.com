import type { Metadata } from 'next'
import { ErrorPage } from '@/src/ui/error-page'

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: 'Not found',
}

export default function NotFoundPage() {
  return <ErrorPage title='Not found' description='404' />
}

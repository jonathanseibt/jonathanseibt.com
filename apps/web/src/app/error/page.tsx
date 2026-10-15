import type { Metadata } from 'next'
import { ErrorPage } from '@/src/ui/error-page'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Internal error',
}

export default function ErrorPreviewPage() {
  return <ErrorPage />
}

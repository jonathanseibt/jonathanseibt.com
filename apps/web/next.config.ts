import type { NextConfig } from 'next'

const noindexAssets = ['/assets/hand-with-two-fingers-up-emoji.png'] as const

const nextConfig: NextConfig = {
  allowedDevOrigins: ['localhost', '127.0.0.1', new URL(process.env.NEXT_PUBLIC_SITE_URL!).hostname],
  images: {
    qualities: [1, 25, 50, 75, 100],
  },
  async headers() {
    return noindexAssets.map((source) => ({
      source,
      headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
    }))
  },
}

export default nextConfig

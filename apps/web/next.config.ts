import type { NextConfig } from 'next'

const noindexAssets = ['/assets/hand-with-two-fingers-up-emoji.png'] as const

const nextConfig: NextConfig = {
  allowedDevOrigins: ['localhost', '127.0.0.1', new URL(process.env.NEXT_PUBLIC_SITE_URL!).hostname],
  images: {
    minimumCacheTTL: 2678400,
    formats: ['image/webp'],
    qualities: [75],
    localPatterns: [{ pathname: '/assets/**', search: '' }],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return noindexAssets.map((source) => ({
      source,
      headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
    }))
  },
}

export default nextConfig

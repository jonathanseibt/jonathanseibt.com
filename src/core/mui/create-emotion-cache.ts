import createCache, { EmotionCache } from '@emotion/cache'

export default function createEmotionCache(): EmotionCache {
  let insertionPoint

  const isBrowser = typeof document !== 'undefined'
  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>('meta[name="emotion-cache"]')
    insertionPoint = emotionInsertionPoint ?? undefined
  }

  return createCache({ key: 'mui', insertionPoint })
}

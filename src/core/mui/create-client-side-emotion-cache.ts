import { EmotionCache } from '@emotion/cache'
import createEmotionCache from '@src/core/mui/create-emotion-cache'

export default function createClientSideEmotionCache(): EmotionCache {
  return createEmotionCache()
}

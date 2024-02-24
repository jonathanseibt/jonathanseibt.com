import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {
  CONST_APP_DESCRIPTION,
  CONST_APP_IMAGE,
  CONST_APP_TITLE,
  CONST_APP_TWITTER_CREATOR,
  CONST_APP_URL,
  theme,
} from '@src/config'
import { createClientSideEmotionCache } from '@src/core'
import { AppProps } from 'next/app'
import Head from 'next/head'

const clientSideEmotionCache = createClientSideEmotionCache()

export interface TMyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: TMyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{CONST_APP_TITLE}</title>

        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='description' content={CONST_APP_DESCRIPTION} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={CONST_APP_URL} />
        <meta property='og:title' content={CONST_APP_TITLE} />
        <meta property='og:site_name' content={CONST_APP_TITLE} />
        <meta property='og:description' content={CONST_APP_DESCRIPTION} />
        <meta property='og:image' content={CONST_APP_IMAGE} />
        <meta property='og:image:width' content='512' />
        <meta property='og:image:height' content='512' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={CONST_APP_TITLE} />
        <meta name='twitter:description' content={CONST_APP_DESCRIPTION} />
        <meta name='twitter:image' content={CONST_APP_IMAGE} />
        <meta name='twitter:image:alt' content={CONST_APP_DESCRIPTION} />
        <meta name='twitter:creator' content={CONST_APP_TWITTER_CREATOR} />
        <meta name='twitter:widgets:csp' content='on' />
        <meta name='twitter:widgets:new-embed-design' content='on' />

        <link rel='canonical' href={CONST_APP_URL} />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

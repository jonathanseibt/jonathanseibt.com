import { CacheProvider as EmotionCacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline as MuiCssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { CONSTANT_APP_DESCRIPTION, CONSTANT_APP_IMAGE, CONSTANT_APP_TITLE, CONSTANT_APP_URL, theme } from '@src/config';
import { createClientSideEmotionCache } from '@src/core';
import { AppProps } from 'next/app';
import NextHead from 'next/head';

const clientSideEmotionCache = createClientSideEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <EmotionCacheProvider value={emotionCache}>
      <NextHead>
        <meta name='viewport' content='initial-scale=1, width=device-width' />

        <title>{CONSTANT_APP_TITLE}</title>
        <meta name='description' content={CONSTANT_APP_DESCRIPTION} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={CONSTANT_APP_URL} />
        <meta property='og:title' content={CONSTANT_APP_TITLE} />
        <meta property='og:description' content={CONSTANT_APP_DESCRIPTION} />
        <meta property='og:image' content={CONSTANT_APP_IMAGE} />
        <meta property='og:image:secure_url' content={CONSTANT_APP_IMAGE} />
        <meta property='og:image:width' content='512' />
        <meta property='og:image:height' content='512' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={CONSTANT_APP_URL} />
        <meta property='twitter:title' content={CONSTANT_APP_TITLE} />
        <meta property='twitter:description' content={CONSTANT_APP_DESCRIPTION} />
        <meta property='twitter:image' content={CONSTANT_APP_IMAGE} />
      </NextHead>

      <MuiThemeProvider theme={theme}>
        <MuiCssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </EmotionCacheProvider>
  );
}

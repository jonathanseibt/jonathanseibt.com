import { CacheProvider as EmotionCacheProvider, EmotionCache as EmotionCacheType } from "@emotion/react";
import { CssBaseline as MuiCssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import { getEmotionCache, theme } from "src/core";

interface Props extends NextAppProps {
  emotionCache?: EmotionCacheType;
}

const clientSideEmotionCache = getEmotionCache();

const MyApp = ({ Component: App, pageProps: props, emotionCache = clientSideEmotionCache }: Props): JSX.Element => (
  <EmotionCacheProvider value={emotionCache}>
    <Head>
      <title>Jonathan Seibt • Senior Front End Engineer</title>
      <meta name='description' content="Hey! My name's Jonathan Seibt, and I'm a Senior Front End Engineer." />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://jonathanseibt.com/' />
      <meta property='og:title' content='Jonathan Seibt' />
      <meta property='og:description' content="Hey! My name's Jonathan Seibt, and I'm a Senior Front End Engineer." />
      <meta property='og:image' content='https://jonathanseibt.com/jonathan-seibt-preview.png' />
      <meta property='og:image:secure_url' content='https://jonathanseibt.com/jonathan-seibt-preview.png' />
      <meta property='og:image:width' content='512' />
      <meta property='og:image:height' content='512' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://jonathanseibt.com/' />
      <meta property='twitter:title' content='Jonathan Seibt' />
      <meta property='twitter:description' content="Hey! My name's Jonathan Seibt, and I'm a Senior Front End Engineer." />
      <meta property='twitter:image' content='https://jonathanseibt.com/jonathan-seibt-preview.png' />

      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
    </Head>

    <MuiThemeProvider theme={theme}>
      <MuiCssBaseline />
      <App {...props} />
    </MuiThemeProvider>
  </EmotionCacheProvider>
);

export default MyApp;

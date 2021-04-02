import { CssBaseline, ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC, useEffect } from 'react';
import useCustomTheme from 'src/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps: props }) => {
  const theme = useCustomTheme();

  useEffect(() => {
    const jssServerSide = document.querySelector('#jss-server-side');
    jssServerSide?.parentElement?.removeChild(jssServerSide);
  }, []);

  return (
    <>
      <Head>
        <title>Jonathan Seibt • Senior Front End Engineer</title>
        <meta name='description' content="Hey! My name is Jonathan Seibt, and I'm a Senior Front End Engineer." />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://jonathanseibt.com/' />
        <meta property='og:title' content='Jonathan Seibt' />
        <meta property='og:description' content="Hey! My name is Jonathan Seibt, and I'm a Senior Front End Engineer." />
        <meta property='og:image' content='https://jonathanseibt.com/jonathan-seibt-preview.png' />
        <meta property='og:image:secure_url' content='https://jonathanseibt.com/jonathan-seibt-preview.png' />
        <meta property='og:image:width' content='512' />
        <meta property='og:image:height' content='512' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://jonathanseibt.com/' />
        <meta property='twitter:title' content='Jonathan Seibt' />
        <meta property='twitter:description' content="Hey! My name is Jonathan Seibt, and I'm a Senior Front End Engineer." />
        <meta property='twitter:image' content='https://jonathanseibt.com/jonathan-seibt-preview.png' />

        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />

        <link rel='icon' href='favicon.ico' />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Component {...props} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;

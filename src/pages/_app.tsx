import { CssBaseline, ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC, useEffect } from 'react';
import { SnackbarProvider } from 'src/components';
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

        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />

        <link rel='icon' href='favicon.png' />
      </Head>

      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />

          <Component {...props} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;

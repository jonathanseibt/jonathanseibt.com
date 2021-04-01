import '../styles/globals.css';

import type { AppProps } from 'next/app';
import React, { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps: props }) => {
  return <Component {...props} />;
};

export default MyApp;

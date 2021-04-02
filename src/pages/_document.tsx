import { ServerStyleSheets } from '@material-ui/core';
import CleanCSS from 'clean-css';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { palette } from 'src/theme';

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const serverStyleSheets = new ServerStyleSheets();
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => serverStyleSheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(context);

    const ssrStyles = serverStyleSheets.getStyleElement();
    const css = ssrStyles?.props?.dangerouslySetInnerHTML?.__html;

    if (css) {
      const minifiedCss = new CleanCSS().minify(css).styles;

      ssrStyles.props.dangerouslySetInnerHTML.__html = minifiedCss;
    }

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), ssrStyles],
    };
  }

  render(): JSX.Element {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta name='theme-color' content={palette.primary.main} />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Alegreya:wght@100;200;300;400;500;600;700;800;900&display=swap' />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

import createEmotionServer from "@emotion/server/create-instance";
import { AppPropsType as NextAppPropsType, DocumentContext as NextDocumentContextType } from "next/dist/shared/lib/utils";
import NextDocument, { DocumentInitialProps as NextDocumentProps, Head, Html, Main, NextScript } from "next/document";
import { NextRouter as Router } from "next/router";
import { getEmotionCache, theme } from "src/core";

interface Props extends NextDocumentProps {
  emotionStyleTags: unknown;
}

export default class MyDocument extends NextDocument {
  render(): JSX.Element {
    const props = this.props as unknown as Props;

    return (
      <Html lang='en'>
        <Head>
          <>
            <meta name='theme-color' content={theme.palette.primary.main} />

            <link rel='icon' href='favicon.ico' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' />

            {props.emotionStyleTags}
          </>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (context: NextDocumentContextType): Promise<Props> => {
  const serverSideEmotionCache = getEmotionCache();

  const { extractCriticalToChunks } = createEmotionServer(serverSideEmotionCache);

  const renderPage = context.renderPage;
  context.renderPage = (): NextDocumentProps | Promise<NextDocumentProps> =>
    renderPage({
      enhanceApp:
        (
          App,
        ): ((props: NextAppPropsType<Router, {}>) => JSX.Element) => // eslint-disable-line @typescript-eslint/ban-types
        (props): JSX.Element =>
          (
            <App
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              emotionCache={serverSideEmotionCache}
              {...props}
            />
          ),
    });

  const initialProps = await NextDocument.getInitialProps(context);

  const emotionStyleTags = extractCriticalToChunks(initialProps.html).styles.map(
    (style): JSX.Element => <style data-emotion={`${style.key} ${style.ids.join(" ")}`} key={style.key} dangerouslySetInnerHTML={{ __html: style.css }} />,
  );

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

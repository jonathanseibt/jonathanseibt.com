import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '@src/core/mui/create-emotion-cache';
import { MyAppProps } from '@src/pages/_app';
import { AppPropsType as NextAppPropsType, AppType as NextAppType, DocumentContext as NextDocumentContext, DocumentInitialProps as NextDocumentInitialProps } from 'next/dist/shared/lib/utils';
import { Router as NextRouter } from 'next/router';
import { ComponentProps, ComponentType } from 'react';

export default function createServerSideEmotionCache(ctx: NextDocumentContext, initialProps: NextDocumentInitialProps): JSX.Element[] {
  const emotionCache = createEmotionCache();

  const renderPage = ctx.renderPage;
  const { extractCriticalToChunks } = createEmotionServer(emotionCache);

  ctx.renderPage = (): NextDocumentInitialProps | Promise<NextDocumentInitialProps> =>
    renderPage({
      enhanceApp:
        (App: ComponentType<ComponentProps<NextAppType> & MyAppProps>): ((props: NextAppPropsType<NextRouter>) => JSX.Element) =>
        (props): JSX.Element =>
          <App emotionCache={emotionCache} {...props} />,
    });

  return extractCriticalToChunks(initialProps.html).styles.map(
    (style): JSX.Element => <style key={style.key} data-emotion={`${style.key} ${style.ids.join(' ')}`} dangerouslySetInnerHTML={{ __html: style.css }} />,
  );
}

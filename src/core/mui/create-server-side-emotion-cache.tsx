import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from '@src/core/mui/create-emotion-cache'
import { TMyAppProps } from '@src/pages/_app'
import { AppPropsType, AppType, DocumentContext, DocumentInitialProps } from 'next/dist/shared/lib/utils'
import { Router } from 'next/router'
import { CP, CT } from 'react'

export default function createServerSideEmotionCache(
  ctx: DocumentContext,
  props: DocumentInitialProps,
): Array<JSX.Element> {
  const emotionCache = createEmotionCache()

  const renderPage = ctx.renderPage
  const { extractCriticalToChunks } = createEmotionServer(emotionCache)

  ctx.renderPage = (): DocumentInitialProps | Promise<DocumentInitialProps> =>
    renderPage({
      enhanceApp:
        (App: CT<CP<AppType> & TMyAppProps>): ((props: AppPropsType<Router>) => JSX.Element) =>
        (props): JSX.Element => <App emotionCache={emotionCache} {...props} />,
    })

  return extractCriticalToChunks(props.html).styles.map(
    (style): JSX.Element => (
      <style
        key={style.key}
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ),
  )
}

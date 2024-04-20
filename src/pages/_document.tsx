import { FontFamilyPrimary, theme } from '@src/config'
import { createServerSideEmotionCache } from '@src/core'
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

interface TMyDocumentInitialProps extends DocumentInitialProps {
  cache: Array<JSX.Element>
}

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<TMyDocumentInitialProps> => {
  const props = await NextDocument.getInitialProps(ctx)
  const cache = createServerSideEmotionCache(ctx, props)

  return { ...props, cache }
}

type TMyDocumentProps = TMyDocumentInitialProps & DocumentProps

export default function MyDocument(props: TMyDocumentProps): JSX.Element {
  const { cache } = props

  return (
    <Html lang='en' className={FontFamilyPrimary.className}>
      <Head>
        <meta name='theme-color' content={theme.palette.primary.main} />
        <link rel='shortcut icon' href='/favicon.ico?v1' />

        <meta name='emotion-cache' content='' />
        {cache}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

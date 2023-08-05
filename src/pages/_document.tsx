import { GoogleFontAlegreya, theme } from '@src/config'
import { createServerSideEmotionCache } from '@src/core'
import NextDocument, {
  DocumentContext as NextDocumentContext,
  DocumentInitialProps as NextDocumentInitialProps,
  DocumentProps as NextDocumentProps,
  Head as NextHead,
  Html as NextHtml,
  Main as NextMain,
  NextScript,
} from 'next/document'

type MyDocumentInitialProps = NextDocumentInitialProps & {
  emotionCache: JSX.Element[]
}

MyDocument.getInitialProps = async (ctx: NextDocumentContext): Promise<MyDocumentInitialProps> => {
  const initialProps = await NextDocument.getInitialProps(ctx)
  const emotionCache = createServerSideEmotionCache(ctx, initialProps)
  return { ...initialProps, emotionCache }
}

type MyDocumentProps = NextDocumentProps & MyDocumentInitialProps

export default function MyDocument(props: MyDocumentProps): JSX.Element {
  const { emotionCache } = props

  return (
    <NextHtml lang='en' className={GoogleFontAlegreya.className}>
      <NextHead>
        <meta name='theme-color' content={theme.palette.primary.main} />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='emotion-cache' content='' />
        {emotionCache}
      </NextHead>

      <body>
        <NextMain />
        <NextScript />
      </body>
    </NextHtml>
  )
}

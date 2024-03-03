import { createTheme, CSSInterpolation } from '@mui/material'
import Color from 'color'
import { Alegreya } from 'next/font/google'

export const FontFamilyPrimary = Alegreya({ subsets: ['latin'] })

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#303030',
    },
    text: {
      primary: '#303030',
    },
  },
  typography: {
    fontFamily: FontFamilyPrimary.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme): CSSInterpolation => ({
        '::selection': {
          background: Color(theme.palette.primary.main).alpha(0.5).hexa(),
        },
        img: {
          display: 'block',
        },
        figure: {
          display: 'contents',
          marginBlockStart: 'unset',
          marginBlockEnd: 'unset',
          marginInlineStart: 'unset',
          marginInlineEnd: 'unset',
        },
        hr: {
          display: 'block',
          unicodeBidi: 'unset',
          marginBlockStart: 'unset',
          marginBlockEnd: 'unset',
          marginInlineStart: 'unset',
          marginInlineEnd: 'unset',
          overflow: 'unset',
          borderStyle: 'none',
          borderWidth: 'unset',
        },
        ul: {
          display: 'block',
          listStyleType: 'none',
          marginBlockStart: 'unset',
          marginBlockEnd: 'unset',
          marginInlineStart: 'unset',
          marginInlineEnd: 'unset',
          paddingInlineStart: 'unset',
        },
        '@keyframes wave': {
          '0%,to': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(10deg)',
          },
          '50%': {
            transform: 'rotate(-10deg)',
          },
          '75%': {
            transform: 'rotate(5deg)',
          },
        },
        '.animation-wave': {
          animation: 'wave 2s infinite',
        },
      }),
    },
  },
})

export default theme

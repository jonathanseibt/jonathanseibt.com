import { createTheme as muiCreateTheme, Theme } from '@mui/material';
import { CSSInterpolation, SystemStyleObject } from '@mui/system';
import Color from 'color';
import { Alegreya } from 'next/font/google';

declare module '@mui/material' {
  export type SX = SystemStyleObject<Theme>;
}

export const GoogleFontAlegreya = Alegreya({ subsets: ['latin'] });

const theme = muiCreateTheme({
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
    fontFamily: GoogleFontAlegreya.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme): CSSInterpolation => ({
        '::selection': {
          background: Color(theme.palette.primary.main).alpha(0.5).hexa(),
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
      }),
    },
  },
});

export default theme;

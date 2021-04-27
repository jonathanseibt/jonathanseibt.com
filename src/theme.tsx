import { createMuiTheme, responsiveFontSizes, Theme, ThemeOptions, useMediaQuery } from '@material-ui/core';

export const palette = {
  background: {
    default: '#fafafa',
  },
  text: {
    primary: '#303030',
  },
  primary: {
    main: '#303030',
  },
};

const multiplierFHD = 1;
const multiplierWQHD = 1.4;
const multiplier4K = 2.165;

const mediaQueryWQHD = '@media (min-width: 2560px) and (min-height: 1440px)';
const mediaQuery4K = '@media (min-width: 3840px) and (min-height: 2160px)';

export interface ResponsivenessMultiplier {
  multiplier: number;
  multiply: (value: number) => number;
}

export const useResponsivenessMultiplier = (): ResponsivenessMultiplier => {
  const isWQHD = useMediaQuery(mediaQueryWQHD);
  const is4K = useMediaQuery(mediaQuery4K);

  const multiplier = is4K ? multiplier4K : isWQHD ? multiplierWQHD : multiplierFHD;

  const multiply = (value: number): number => {
    return Number(parseFloat(String(value * multiplier)).toFixed(2));
  };

  return { multiplier, multiply };
};

const multiplyFontSizeInRem = (sizeInRem: string | number | undefined, multiplier: number): string => {
  if (!sizeInRem) return '';

  const size = Number(String(sizeInRem).replace('rem', ''));
  const multipliedSize = size * multiplier;
  const multipliedSizeInRem = `${parseFloat(String(multipliedSize)).toFixed(2)}rem`;

  return multipliedSizeInRem;
};

const useCustomTheme = (): Theme => {
  const { multiply } = useResponsivenessMultiplier();

  const config: ThemeOptions = {
    palette,

    spacing: (factor) => `${multiply(0.25) * factor}rem`,

    shape: { borderRadius: multiply(8) },

    typography: { fontFamily: ['Alegreya', 'sans-serif'].join(',') },
  };

  const theme = responsiveFontSizes(createMuiTheme(config));

  theme.typography = {
    ...theme.typography,

    h1: {
      ...theme.typography.h1,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h1.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h1.fontSize, multiplier4K),
      },
    },
    h2: {
      ...theme.typography.h2,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h2.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h2.fontSize, multiplier4K),
      },
    },
    h3: {
      ...theme.typography.h3,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h3.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h3.fontSize, multiplier4K),
      },
    },
    h4: {
      ...theme.typography.h4,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h4.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h4.fontSize, multiplier4K),
      },
    },
    h5: {
      ...theme.typography.h5,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h5.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h5.fontSize, multiplier4K),
      },
    },
    h6: {
      ...theme.typography.h6,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h6.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.h6.fontSize, multiplier4K),
      },
    },
    subtitle1: {
      ...theme.typography.subtitle1,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.subtitle1.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.subtitle1.fontSize, multiplier4K),
      },
    },
    subtitle2: {
      ...theme.typography.subtitle2,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.subtitle2.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.subtitle2.fontSize, multiplier4K),
      },
    },
    body1: {
      ...theme.typography.body1,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.body1.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.body1.fontSize, multiplier4K),
      },
    },
    body2: {
      ...theme.typography.body2,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.body2.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.body2.fontSize, multiplier4K),
      },
    },
    button: {
      ...theme.typography.button,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.button.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.button.fontSize, multiplier4K),
      },
    },
    caption: {
      ...theme.typography.caption,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.caption.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.caption.fontSize, multiplier4K),
      },
    },
    overline: {
      ...theme.typography.overline,

      [mediaQueryWQHD]: {
        fontSize: multiplyFontSizeInRem(theme.typography.overline.fontSize, multiplierWQHD),
      },
      [mediaQuery4K]: {
        fontSize: multiplyFontSizeInRem(theme.typography.overline.fontSize, multiplier4K),
      },
    },
  };

  theme.overrides = {
    ...theme.overrides,

    MuiCssBaseline: {
      '@global': {
        '::selection': {
          color: theme.palette.background.default,
          background: theme.palette.primary.main,
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
        figure: {
          display: 'block',
          marginBlockStart: 'unset',
          marginBlockEnd: 'unset',
          marginInlineStart: 'unset',
          marginInlineEnd: 'unset',
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
      },
    },
  };

  return theme;
};

export default useCustomTheme;

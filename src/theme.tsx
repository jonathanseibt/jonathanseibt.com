import { createMuiTheme, responsiveFontSizes, Theme, ThemeOptions, useMediaQuery } from '@material-ui/core';

declare module '@material-ui/core/Box' {
  interface BoxProps {
    src?: string;
    alt?: string;
  }
}

export const palette = {
  text: {
    primary: '#000',
    secondary: '#000',
  },
  primary: {
    dark: '#000',
    main: '#000',
    light: '#000',
  },
  secondary: {
    dark: '#000',
    main: '#000',
    light: '#000',
  },
  success: {
    dark: '#33691e',
    main: '#558b2f',
    light: '#689f38',
  },
  info: {
    dark: '#01579b',
    main: '#0277bd',
    light: '#0288d1',
  },
  warning: {
    dark: '#e65100',
    main: '#ef6c00',
    light: '#f57c00',
  },
  error: {
    dark: '#bf360c',
    main: '#d84315',
    light: '#e64a19',
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

    typography: { fontFamily: ['Alegreya', 'Helvetica', 'Arial', 'sans-serif'].join(',') },
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

  return theme;
};

export default useCustomTheme;

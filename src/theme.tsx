import { createMuiTheme, responsiveFontSizes, Theme, ThemeOptions, useMediaQuery } from '@material-ui/core';

export const palette = {
  primary: {
    dark: '#263238',
    main: '#37474f',
    light: '#455a64',
  },
  secondary: {
    dark: '#546e7a',
    main: '#607d8b',
    light: '#78909c',
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
  text: {
    primary: '#212121',
    secondary: '#424242',
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
  const x = multiply;

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

  theme.shadows = [
    `none`,
    `0px ${x(2)}px ${x(1)}px ${x(-1)}px rgba(0, 0, 0, 0.2), 0px ${x(1)}px ${x(1)}px 0px rgba(0, 0, 0, 0.14), 0px ${x(1)}px ${x(3)}px 0px rgba(0, 0, 0, 0.12)`,
    `0px ${x(3)}px ${x(1)}px ${x(-2)}px rgba(0, 0, 0, 0.2), 0px ${x(2)}px ${x(2)}px 0px rgba(0, 0, 0, 0.14), 0px ${x(1)}px ${x(5)}px 0px rgba(0, 0, 0, 0.12)`,
    `0px ${x(3)}px ${x(3)}px ${x(-2)}px rgba(0, 0, 0, 0.2), 0px ${x(3)}px ${x(4)}px 0px rgba(0, 0, 0, 0.14), 0px ${x(1)}px ${x(8)}px 0px rgba(0, 0, 0, 0.12)`,
    `0px ${x(2)}px ${x(4)}px ${x(-1)}px rgba(0, 0, 0, 0.2), 0px ${x(4)}px ${x(5)}px 0px rgba(0, 0, 0, 0.14), 0px ${x(1)}px ${x(10)}px 0px rgba(0, 0, 0, 0.12)`,
    `0px ${x(3)}px ${x(5)}px ${x(-1)}px rgba(0, 0, 0, 0.2), 0px ${x(5)}px ${x(8)}px 0px rgba(0, 0, 0, 0.14), 0px ${x(1)}px ${x(14)}px 0px rgba(0, 0, 0, 0.12)`,
    `0px ${x(3)}px ${x(5)}px ${x(-1)}px rgba(0, 0, 0, 0.2), 0px ${x(6)}px ${x(10)}px 0px rgba(0, 0, 0, 0.14), 0px ${x(1)}px ${x(18)}px 0px rgba(0, 0, 0, 0.12)`,
    `0px ${x(4)}px ${x(5)}px ${x(-2)}px rgba(0, 0, 0, 0.2), 0px ${x(7)}px ${x(10)}px ${x(1)}px rgba(0, 0, 0, 0.14), 0px ${x(2)}px ${x(16)}px ${x(1)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(5)}px ${x(5)}px ${x(-3)}px rgba(0, 0, 0, 0.2), 0px ${x(8)}px ${x(10)}px ${x(1)}px rgba(0, 0, 0, 0.14), 0px ${x(3)}px ${x(14)}px ${x(2)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(5)}px ${x(6)}px ${x(-3)}px rgba(0, 0, 0, 0.2), 0px ${x(9)}px ${x(12)}px ${x(1)}px rgba(0, 0, 0, 0.14), 0px ${x(3)}px ${x(16)}px ${x(2)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(6)}px ${x(6)}px ${x(-3)}px rgba(0, 0, 0, 0.2), 0px ${x(10)}px ${x(14)}px ${x(1)}px rgba(0, 0, 0, 0.14), 0px ${x(4)}px ${x(18)}px ${x(3)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(6)}px ${x(7)}px ${x(-4)}px rgba(0, 0, 0, 0.2), 0px ${x(11)}px ${x(15)}px ${x(1)}px rgba(0, 0, 0, 0.14), 0px ${x(4)}px ${x(20)}px ${x(3)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(7)}px ${x(8)}px ${x(-4)}px rgba(0, 0, 0, 0.2), 0px ${x(12)}px ${x(17)}px ${x(2)}px rgba(0, 0, 0, 0.14), 0px ${x(5)}px ${x(22)}px ${x(4)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(7)}px ${x(8)}px ${x(-4)}px rgba(0, 0, 0, 0.2), 0px ${x(13)}px ${x(19)}px ${x(2)}px rgba(0, 0, 0, 0.14), 0px ${x(5)}px ${x(24)}px ${x(4)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(7)}px ${x(9)}px ${x(-4)}px rgba(0, 0, 0, 0.2), 0px ${x(14)}px ${x(21)}px ${x(2)}px rgba(0, 0, 0, 0.14), 0px ${x(5)}px ${x(26)}px ${x(4)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(8)}px ${x(9)}px ${x(-5)}px rgba(0, 0, 0, 0.2), 0px ${x(15)}px ${x(22)}px ${x(2)}px rgba(0, 0, 0, 0.14), 0px ${x(6)}px ${x(28)}px ${x(5)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(8)}px ${x(10)}px ${x(-5)}px rgba(0, 0, 0, 0.2), 0px ${x(16)}px ${x(24)}px ${x(2)}px rgba(0, 0, 0, 0.14), 0px ${x(6)}px ${x(30)}px ${x(5)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(8)}px ${x(11)}px ${x(-5)}px rgba(0, 0, 0, 0.2), 0px ${x(17)}px ${x(26)}px ${x(2)}px rgba(0, 0, 0, 0.14), 0px ${x(6)}px ${x(32)}px ${x(5)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(9)}px ${x(11)}px ${x(-5)}px rgba(0, 0, 0, 0.2), 0px ${x(18)}px ${x(28)}px ${x(2)}px rgba(0, 0, 0, 0.14), 0px ${x(7)}px ${x(34)}px ${x(6)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(9)}px ${x(12)}px ${x(-6)}px rgba(0, 0, 0, 0.2), 0px ${x(19)}px ${x(29)}px ${x(2)}px rgba(0, 0, 0, 0.14), 0px ${x(7)}px ${x(36)}px ${x(6)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(10)}px ${x(13)}px ${x(-6)}px rgba(0, 0, 0, 0.2), 0px ${x(20)}px ${x(31)}px ${x(3)}px rgba(0, 0, 0, 0.14), 0px ${x(8)}px ${x(38)}px ${x(7)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(10)}px ${x(13)}px ${x(-6)}px rgba(0, 0, 0, 0.2), 0px ${x(21)}px ${x(33)}px ${x(3)}px rgba(0, 0, 0, 0.14), 0px ${x(8)}px ${x(40)}px ${x(7)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(10)}px ${x(14)}px ${x(-6)}px rgba(0, 0, 0, 0.2), 0px ${x(22)}px ${x(35)}px ${x(3)}px rgba(0, 0, 0, 0.14), 0px ${x(8)}px ${x(42)}px ${x(7)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(11)}px ${x(14)}px ${x(-7)}px rgba(0, 0, 0, 0.2), 0px ${x(23)}px ${x(36)}px ${x(3)}px rgba(0, 0, 0, 0.14), 0px ${x(9)}px ${x(44)}px ${x(8)}px rgba(0, 0, 0, 0.12)`,
    `0px ${x(11)}px ${x(15)}px ${x(-7)}px rgba(0, 0, 0, 0.2), 0px ${x(24)}px ${x(38)}px ${x(3)}px rgba(0, 0, 0, 0.14), 0px ${x(9)}px ${x(46)}px ${x(8)}px rgba(0, 0, 0, 0.12)`,
  ];

  theme.overrides = {
    ...theme.overrides,

    MuiSvgIcon: {
      root: {
        fontSize: `${multiply(1.5)}rem`,
      },
    },

    MuiButton: {
      root: {
        transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 0ms, border 0ms',
        padding: `${multiply(6)}px ${multiply(16)}px`,
        minWidth: multiply(64),
      },
      outlined: {
        borderWidth: `${multiply(1)}px !important`,
        padding: `${multiply(6 - 1)}px ${multiply(16 - 1)}px`,
      },
      text: {
        padding: `${multiply(6)}px ${multiply(16)}px`,
      },
      startIcon: {
        marginLeft: multiply(-4),
        marginRight: multiply(8),
      },
      endIcon: {
        marginLeft: multiply(8),
        marginRight: multiply(-4),
      },
      iconSizeMedium: {
        '& > *:first-child': {
          fontSize: multiply(20),
        },
      },
    },

    MuiIconButton: {
      root: {
        transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 0ms, border 0ms',
        padding: multiply(8),
      },
    },

    MuiFormHelperText: {
      root: {
        marginTop: 0,
        minHeight: multiply(20),
        marginLeft: '0 !important',
        marginRight: '0 !important',
        fontWeight: 500,
        opacity: 0.75,

        '&.Mui-error': {
          color: theme.palette.error.light,
        },

        '&.Mui-disabled': {
          color: theme.palette.grey[500],
        },
      },
    },

    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, .05)',
        borderRadius: theme.shape.borderRadius,
      },
      input: {
        padding: `${multiply(27)}px ${multiply(12)}px ${multiply(10)}px`,

        '&:-webkit-autofill': {
          borderRadius: theme.shape.borderRadius,
        },
      },
      adornedEnd: {
        paddingRight: 0,
      },
      inputAdornedEnd: {
        '&:-webkit-autofill': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
      underline: {
        '&:before': {
          borderBottom: 0,
        },

        '&:hover:before': {
          borderBottom: 0,
        },

        '&:after': {
          width: `calc(100% - ${multiply(12)}px - ${multiply(12)}px)`,
          marginLeft: multiply(12),
          height: multiply(2),
          backgroundColor: theme.palette.primary.main,
          borderBottom: 'none',
        },

        '&.Mui-error:after': {
          transform: 'scaleX(0)',
          backgroundColor: theme.palette.error.main,
          borderBottom: 'none',
        },

        '&.Mui-focused:after': {
          transform: 'scaleX(1)',
        },
      },
    },

    MuiInputLabel: {
      filled: {
        transform: `translate(${multiply(12)}px, ${multiply(20)}px) scale(1)`,

        '&.MuiInputLabel-shrink': {
          transform: `translate(${multiply(12)}px, ${multiply(10)}px) scale(0.75)`,
        },

        '&.Mui-error': {
          color: theme.palette.error.light,
        },

        '&.Mui-disabled': {
          color: theme.palette.grey[500],
        },
      },
    },

    MuiInputAdornment: {
      root: {
        height: 0,
      },
      positionEnd: {
        marginLeft: multiply(4),
        marginRight: multiply(4),
      },
    },

    MuiFormControlLabel: {
      root: {
        marginLeft: multiply(-12),
        marginRight: multiply(16),
      },
    },

    MuiSwitch: {
      root: {
        width: multiply(58),
        height: multiply(38),
        padding: multiply(12),
      },
      track: {
        transition: 'opacity 0ms, background-color 0ms',
        borderRadius: multiply(7),
      },
      thumb: {
        width: multiply(20),
        height: multiply(20),
      },
      switchBase: {
        padding: multiply(9),
        transform: `translateX(${multiply(2.75)}px)`,

        '&.Mui-checked': {
          transform: `translateX(${multiply(17.25)}px)`,
        },
      },
    },

    MuiCheckbox: {
      root: {
        marginLeft: multiply(2),
        marginRight: multiply(2),
        padding: multiply(9),

        '& > .MuiIconButton-label': {
          width: multiply(20),
          height: multiply(20),
        },
      },
    },

    MuiTableCell: {
      root: {
        padding: multiply(16),
        lineHeight: `${multiply(1.5)}rem`,
      },
      head: {
        padding: multiply(16),
        lineHeight: `${multiply(1.5)}rem`,
      },
    },

    MuiListItemIcon: {
      root: {
        minWidth: theme.spacing(9),
      },
    },
  };

  return theme;
};

export default useCustomTheme;

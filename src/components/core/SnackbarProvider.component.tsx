import { Button, makeStyles, Theme } from '@material-ui/core';
import { SnackbarProvider as NotistackSnackbarProvider } from 'notistack';
import React, { FC, useRef } from 'react';
import { ResponsivenessMultiplier, useResponsivenessMultiplier } from 'src/theme';

const SnackbarProvider: FC = ({ children }) => {
  const AUTO_HIDE_SNACKBAR_IN_10_SECONDS = 10000;

  const { multiply } = useResponsivenessMultiplier();
  const styles = useStyles({ multiply });
  const snackbarRef = useRef<NotistackSnackbarProvider>(null);

  return (
    <NotistackSnackbarProvider
      ref={snackbarRef}
      maxSnack={3}
      hideIconVariant
      preventDuplicate
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={AUTO_HIDE_SNACKBAR_IN_10_SECONDS}
      classes={styles}
      action={(key) => <Button onClick={() => snackbarRef.current?.closeSnackbar(key)}>OK</Button>}>
      {children}
    </NotistackSnackbarProvider>
  );
};

type StyleProps = Pick<ResponsivenessMultiplier, 'multiply'>;

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  containerRoot: ({ multiply }) => ({
    alignItems: 'center',
    bottom: multiply(14),
    minWidth: multiply(288),

    '& > .MuiCollapse-container > .MuiCollapse-wrapper': {
      marginTop: multiply(6),
      marginBottom: multiply(6),
    },
  }),
  root: ({ multiply }) => ({
    '& > div': {
      width: '25vw',
      maxWidth: '90vw',
      fontWeight: 500,

      padding: `${multiply(6)}px ${multiply(16)}px`,
      borderRadius: theme.shape.borderRadius,
      minWidth: multiply(288),

      '& > div:first-child': {
        padding: `${multiply(8)}px 0`,
      },

      '& > div:last-child': {
        marginRight: multiply(-8),
        paddingLeft: multiply(16),
      },
    },

    '& .MuiButton-label': {
      fontWeight: 500,
      color: theme.palette.common.white,
    },
  }),
  variantSuccess: {
    background: `linear-gradient(to right, ${theme.palette.success.light} 0%, ${theme.palette.success.dark} 100%)`,
  },
  variantInfo: {
    background: `linear-gradient(to right, ${theme.palette.info.light} 0%, ${theme.palette.info.dark} 100%)`,
  },
  variantWarning: {
    background: `linear-gradient(to right, ${theme.palette.warning.light} 0%, ${theme.palette.warning.dark} 100%)`,
  },
  variantError: {
    background: `linear-gradient(to right, ${theme.palette.error.light} 0%, ${theme.palette.error.dark} 100%)`,
  },
}));

export default SnackbarProvider;

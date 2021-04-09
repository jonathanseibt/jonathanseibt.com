// eslint-disable-next-line no-restricted-imports
import { Box as MuiBox, BoxProps, makeStyles, Theme } from '@material-ui/core';
import classnames from 'classnames';
import * as CSS from 'csstype';
import React, { FC } from 'react';

declare module '@material-ui/core/Box' {
  interface BoxProps {
    src?: string;
    alt?: string;
  }
}

interface Props extends Omit<BoxProps, 'className' | 'style' | 'fontStyle' | 'bgcolor'> {
  backgroundColor?: CSS.Property.BackgroundColor;
}

const Box: FC<Props> = ({ backgroundColor, component, ...rest }) => {
  const styles = useStyles({ backgroundColor });

  return <MuiBox {...rest} {...(component ? { component: component } : undefined)} className={classnames(styles['Box-root'])} />;
};

export default Box;

type StyleProps = Pick<Props, 'backgroundColor'>;

const useStyles = makeStyles<Theme, StyleProps>({
  'Box-root': (style) => ({
    ...style,
  }),
});

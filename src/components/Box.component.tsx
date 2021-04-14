import {
  Box as MuiBox, // eslint-disable-line no-restricted-syntax
  BoxProps,
  makeStyles,
  Theme,
} from '@material-ui/core';
import classnames from 'classnames';
import * as CSS from 'csstype';
import React, { FC } from 'react';

declare module '@material-ui/core/Box' {
  interface BoxProps {
    src?: string;
    alt?: string;
  }
}

interface CustomStyleProps {
  backgroundColor?: CSS.Property.BackgroundColor;
}

type Props = CustomStyleProps & Omit<BoxProps, 'className' | 'style' | 'fontStyle' | 'bgcolor'>;

const Box: FC<Props> = ({ backgroundColor, component, ...rest }) => {
  const styles = useStyles({ backgroundColor });

  return <MuiBox {...rest} {...(component ? { component: component } : undefined)} className={classnames(styles['Box-root'])} />;
};

export default Box;

type StyleProps = CustomStyleProps;

const useStyles = makeStyles<Theme, StyleProps>({
  'Box-root': (style) => ({
    ...style,
  }),
});

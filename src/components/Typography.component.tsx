import {
  BoxProps,
  makeStyles,
  Theme,
  Typography as MuiTypography, // eslint-disable-line no-restricted-syntax
  TypographyProps,
} from '@material-ui/core';
import classnames from 'classnames';
import * as CSS from 'csstype';
import React, { FC } from 'react';

interface CustomStyleProps {
  fontWeight?: CSS.Property.FontWeight;
  lineHeight?: CSS.Property.LineHeight;
  fontSize?: CSS.Property.FontSize;
}

interface Props extends CustomStyleProps, Omit<TypographyProps, 'classes' | 'className' | 'style'>, Pick<BoxProps, 'component'> {
  spaceBefore?: boolean;
  spaceAfter?: boolean;
}

const Typography: FC<Props> = ({ fontWeight, lineHeight, fontSize, spaceBefore, spaceAfter, component, ...rest }) => {
  const styles = useStyles({ fontWeight, lineHeight, fontSize });

  return (
    <>
      {spaceBefore && ' '}

      <MuiTypography {...rest} {...(component ? { component: component } : undefined)} className={classnames(styles['Typography-root'])} />

      {spaceAfter && ' '}
    </>
  );
};

export default Typography;

type StyleProps = CustomStyleProps;

const useStyles = makeStyles<Theme, StyleProps>({
  'Typography-root': (style) => ({
    ...style,
  }),
});

import {
  BoxProps,
  LinkProps,
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
  color?: CSS.Property.Color;
}

interface Props extends CustomStyleProps, Omit<TypographyProps, 'classes' | 'className' | 'style' | 'color'>, Pick<BoxProps, 'component'>, Pick<LinkProps, 'href'> {
  spaceBefore?: boolean;
  spaceAfter?: boolean;
}

const Typography: FC<Props> = ({ fontWeight, lineHeight, fontSize, color, spaceBefore, spaceAfter, component, ...rest }) => {
  const customStyles = { fontWeight, lineHeight, fontSize, color };
  const styles = useStyles(customStyles);
  const hasCustomStyles = !!Object.values(customStyles)?.filter((style) => style)?.length;

  return (
    <>
      {spaceBefore && ' '}

      <MuiTypography {...rest} {...(component ? { component: component } : undefined)} className={classnames({ [styles['Typography-root']]: hasCustomStyles })} />

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

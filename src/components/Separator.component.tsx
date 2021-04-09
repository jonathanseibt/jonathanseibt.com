// eslint-disable-next-line no-restricted-imports
import { Box, BoxProps } from '@material-ui/core';
import classnames from 'classnames';
import React, { FC } from 'react';

type Props = BoxProps;

const Separator: FC<Props> = ({ component, className, ...rest }) => {
  return <Box {...rest} {...(component ? { component: component } : undefined)} className={classnames('Separator-root', className)} />;
};

export default Separator;

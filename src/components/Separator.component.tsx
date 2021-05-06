import {
  Box, // eslint-disable-line no-restricted-syntax
  BoxProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = Omit<BoxProps, 'component'>;

const Separator: FC<Props> = ({ width = 1, ...rest }) => {
  return <Box {...rest} component='hr' width={width} />;
};

export default Separator;

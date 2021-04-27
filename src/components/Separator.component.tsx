import {
  Box, // eslint-disable-line no-restricted-syntax
  BoxProps,
} from '@material-ui/core';
import React, { FC } from 'react';

type Props = Omit<BoxProps, 'component'>;

const Separator: FC<Props> = ({ ...rest }) => {
  return <Box {...rest} component='hr' />;
};

export default Separator;

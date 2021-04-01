import { Box } from '@material-ui/core';
import React, { FC } from 'react';

interface Props {
  before?: boolean;
  after?: boolean;
}

const TypographySpace: FC<Props> = ({ before, after, children }) => {
  return (
    <Box component='span'>
      {before && ' '}
      {children}
      {after && ' '}
    </Box>
  );
};

export default TypographySpace;

import React, { FC } from 'react';
import { Box } from 'src/components';

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

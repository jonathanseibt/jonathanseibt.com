import React, { ComponentProps, FC } from 'react';
import { Box } from 'src/components';

type Props = Omit<ComponentProps<typeof Box>, 'component'>;

const Image: FC<Props> = ({ display = 'block', ...rest }) => {
  return (
    <Box component='figure'>
      <Box component='img' display={display} {...rest} />
    </Box>
  );
};

export default Image;

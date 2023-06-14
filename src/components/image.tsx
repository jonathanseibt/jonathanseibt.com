import { Box } from '@mui/material';
import { ComponentProps, ImgHTMLAttributes } from 'react';

type ImageProps = Omit<ComponentProps<typeof Box>, 'component'> & Omit<ImgHTMLAttributes<'img'>, 'width' | 'height'>;

export default function Image(props: ImageProps): JSX.Element {
  return (
    <Box component='figure'>
      <Box {...props} component='img' />
    </Box>
  );
}

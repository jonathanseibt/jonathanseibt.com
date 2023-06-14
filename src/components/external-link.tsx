import { Link as MuiLink, SX } from '@mui/material';
import { ComponentProps } from 'react';

type ExternalLinkProps = ComponentProps<typeof MuiLink>;

export default function ExternalLink(props: ExternalLinkProps): JSX.Element {
  const { target = '_blank', rel = 'noreferrer', sx, children, ...rest } = props;

  return (
    <MuiLink
      target={target}
      rel={rel}
      sx={
        sx ||
        ((theme): SX => ({
          textDecoration: 'none',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: 2,
            transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
            borderBottom: 'none',
            pointerEvents: 'none',
            transform: 'scaleX(1)',
            backgroundColor: theme.palette.primary.main,
          },
          '&:hover::after': {
            transform: 'scaleX(.25)',
          },
        }))
      }
      {...rest}>
      {children}
    </MuiLink>
  );
}

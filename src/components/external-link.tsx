import { Link, SX } from '@mui/material'
import { CP } from 'react'

type TExternalLinkProps = CP<typeof Link>

export default function ExternalLink(props: TExternalLinkProps): JSX.Element {
  const { target = '_blank', rel = 'noreferrer', sx, children, ...rest } = props

  return (
    <Link
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
    </Link>
  )
}

import { Box } from '@mui/material'

interface TGapProps {
  horizontal?: number
  vertical?: number
}

export default function Gap(props: TGapProps): JSX.Element {
  const { horizontal, vertical } = props

  return (
    <Box
      component='hr'
      width={(theme): string | undefined => (horizontal ? theme.spacing(horizontal) : undefined)}
      height={(theme): string | undefined => (vertical ? theme.spacing(vertical) : undefined)}
    />
  )
}

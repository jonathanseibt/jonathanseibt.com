import { Box } from '@mui/material';

interface GapProps {
  horizontal?: number;
  vertical?: number;
}

export default function Gap(props: GapProps): JSX.Element {
  const { horizontal, vertical } = props;

  return (
    <Box
      component='hr'
      width={(theme): string | undefined => (horizontal ? theme.spacing(horizontal) : undefined)}
      height={(theme): string | undefined => (vertical ? theme.spacing(vertical) : undefined)}
    />
  );
}

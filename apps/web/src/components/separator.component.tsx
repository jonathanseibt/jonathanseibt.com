import { Box } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

interface Props {
  width?: number;
  height?: number;
}

const Separator = ({ width = 0, height = 0 }: Props): JSX.Element => (
  <Box component='hr' sx={(theme): SystemStyleObject => ({ marginX: theme.spacing(width / 2), marginY: theme.spacing(height / 2) })} />
);

export default Separator;

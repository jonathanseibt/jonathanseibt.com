import { Box, Theme } from "@mui/material";
import { SystemStyleObject as SX } from "@mui/system";

interface Props {
  height?: CSSNumberish;
  width?: CSSNumberish;
}

const Separator = ({ width = 0, height = 0 }: Props): JSX.Element => <Box component='hr' sx={(theme): SX<Theme> => ({ width: theme.spacing(width), height: theme.spacing(height) })} />;

export default Separator;

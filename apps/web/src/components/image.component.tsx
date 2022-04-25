import { Box } from "@mui/material";
import { ComponentProps, ImgHTMLAttributes } from "react";

type Props = Omit<ComponentProps<typeof Box>, "component"> & Omit<ImgHTMLAttributes<"img">, "width" | "height">;

const Image = (props: Props): JSX.Element => (
  <Box component='figure'>
    <Box component='img' {...props} />
  </Box>
);

export default Image;

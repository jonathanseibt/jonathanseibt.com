import { Link as MuiLink } from "@mui/material";
import { SystemStyleObject } from "@mui/system";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof MuiLink>, "target" | "rel" | "sx">;

const ExternalLink = ({ children, ...rest }: Props): JSX.Element => (
  <MuiLink
    target='_blank'
    rel='noreferrer'
    sx={(theme): SystemStyleObject => ({
      textDecoration: "none",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: 2,
        transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        borderBottom: "none",
        pointerEvents: "none",
        transform: "scaleX(1)",
        backgroundColor: theme.palette.primary.main,
      },
      "&:hover::after": {
        transform: "scaleX(.25)",
      },
    })}
    {...rest}>
    {children}
  </MuiLink>
);

export default ExternalLink;

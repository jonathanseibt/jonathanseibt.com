import { createTheme } from "@mui/material/styles";
import Color from "color";

export const palette = {
  primary: {
    main: "#303030",
  },
  text: {
    primary: "#303030",
  },
};

const theme = createTheme({
  palette,
  spacing: 4,
  typography: { fontFamily: '"Alegreya", "sans-serif"' },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          color: Color(palette.text.primary).alpha(50).hexa().toString(),
          background: palette.text.primary,
        },
        figure: {
          display: "contents",
          marginBlockStart: "unset",
          marginBlockEnd: "unset",
          marginInlineStart: "unset",
          marginInlineEnd: "unset",
        },
        hr: {
          display: "block",
          unicodeBidi: "unset",
          marginBlockStart: "unset",
          marginBlockEnd: "unset",
          marginInlineStart: "unset",
          marginInlineEnd: "unset",
          overflow: "unset",
          borderStyle: "none",
          borderWidth: "unset",
        },
        ul: {
          display: "block",
          listStyleType: "none",
          marginBlockStart: "unset",
          marginBlockEnd: "unset",
          marginInlineStart: "unset",
          marginInlineEnd: "unset",
          paddingInlineStart: "unset",
        },
      },
    },
  },
});

export default theme;

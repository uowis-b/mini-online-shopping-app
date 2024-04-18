"use client";

import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 1101,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          zIndex: 1100,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

const theme = createTheme(themeOptions);

export default theme;

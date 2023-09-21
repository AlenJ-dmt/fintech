import { createTheme, Theme, ThemeOptions } from "@mui/material";
import { colors } from "./colors";

const baseTheme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "3rem",
      lineHeight: "2.5rem",
      letterSpacing: 0,
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1.5rem",
      lineHeight: "2.125rem",
      letterSpacing: "0.069rem",
      fontFeatureSettings: `"zero" on`,
    },
    h3: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "1.125rem",
      lineHeight: "1.688rem",
      letterSpacing: "0.069rem",
    },
    h4: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "0.813rem",
      lineHeight: "1.375rem",
      letterSpacing: "0.069rem",
      textTransform: "uppercase",
    },
    h5: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "0.813rem",
      lineHeight: "1.125rem",
      letterSpacing: "0.038rem",
      textTransform: "uppercase",
    },
    h6: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "0.625rem",
      lineHeight: "0.938rem",
      letterSpacing: "0.063rem",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1rem",
      lineHeight: "1.688rem",
      letterSpacing: "0.063rem",
      fontFeatureSettings: `"zero" on`,
    },
    body2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1rem",
      lineHeight: "1.688rem",
      letterSpacing: "0.063rem",
      fontFeatureSettings: `"zero" on`,
      fontVariantNumeric: "tabular-nums",
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.05rem",
      letterSpacing: "0.053.rem",
      textTransform: "uppercase",
    },
  },
});

const lightPalette: ThemeOptions = {
  palette: {
    mode: "light",
    success: {
      main: "#34dea9",
      dark: "#2d8376",
    },
    info: {
      main: "#297ceb",
      dark: "#256faf",
      light: "#3BABFF",
    },
    error: {
      main: "#fd76a7",
      dark: "#7f5072",
    },
    warning: {
      main: "#ffb179",
      dark: "#94645f",
    },
    primary: {
      main: `${colors.main}`,
      light: `${colors.main}`,
      dark: "#000000",
    },
    secondary: {
      main: "#3babff",
      dark: "#76a7dc",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F1F3F9",
    },
    common: {
      black: "#ffffff",
      white: "#000000",
    },
  },
};

function createComponents(theme: Theme) {
  const components: ThemeOptions = {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              background: "transparent",
              width: "0.5rem",
              height: "0.5rem",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              background: theme.palette.primary.light,
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: theme.palette.primary.light,
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: theme.palette.primary.light,
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: theme.palette.secondary.main,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: baseTheme.spacing(3),
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.light,
            "&.Mui-focused": {
              color: theme.palette.secondary.main,
            },
          },
          outlined: {
            borderRadius: 4,
            padding: "0.125rem 0.375rem",
            "&.Mui-focused": {
              backgroundColor: "#2d3855",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.primary.dark,
            borderTop: "1px solid transparent",
            ":before": {
              borderBottom: `1px dotted ${theme.palette.primary.light}`,
            },
            "&.Mui-focused": {
              background: theme.palette.common.black,
              border: `1px solid ${theme.palette.secondary.main}`,
              borderBottom: "none !important",
              borderTop: `1px solid ${theme.palette.secondary.main}`,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.primary.light,

            "&.Mui-focused": {
              border: `1px solid #000000`,
            },
          },
          notchedOutline: {
            border: "1px solid black",
          },
        },
      },

      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            flex: 1,
            willChange: "background-color , color , border-color , box-shadow",
            transition:
              "background-color 200ms ease-in-out 0ms , color 200ms ease-in-out 0ms , border-color 200ms ease-in-out 0ms , box-shadow 200ms ease-in-out 0ms",
            boxShadow: `0 0 0 0rem ${theme.palette.primary.main}`,
            "&.Mui-disabled": {
              color: theme.palette.primary.dark,
            },
          },

          sizeSmall: {
            height: "1.25rem",
            fontWeight: 500,
            fontSize: "0.688rem",
            lineHeight: "0.825rem",
            letterSpacing: "0.047rem",
          },
          sizeMedium: {
            height: "1.813rem",
            fontWeight: 500,
          },
          sizeLarge: {
            height: "2.563rem",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: "1.05rem",
            letterSpacing: "0.053rem",
          },
          containedPrimary: {
            background: theme.palette.primary.light,
            color: theme.palette.primary.dark,
            "@media(hover: hover)": {
              "&:hover": {
                boxShadow: `0 0 0 0.4rem ${theme.palette.primary.dark}`,
                background: theme.palette.primary.light,
              },
            },
          },
          containedSecondary: {
            color: theme.palette.primary.main,
            background: theme.palette.primary.dark,
            "@media(hover: hover)": {
              "&:hover": {
                boxShadow: `0 0 0 0.4rem ${theme.palette.primary.dark}`,
                background: theme.palette.primary.dark,
              },
            },
          },
          outlinedPrimary: {
            color: theme.palette.primary.dark,
            border: "1px solid black",
            "@media(hover: hover)": {
              "&:hover": {
                transform: "scale(1.1)",
                border: "1px solid black",
                transition: ".2s ease-in-out",
              },
            },
          },
        },
      },
    },
  };
  return createTheme(theme, components);
}

export const theme = createComponents(createTheme(baseTheme, lightPalette));

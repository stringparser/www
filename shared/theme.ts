import { createMuiTheme, ThemeOptions } from "@material-ui/core";

const baseTheme: ThemeOptions = {
    typography: {
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
        }
    },

    props: {
        MuiLink: {
            color: 'textSecondary',
        },

        MuiButton: {
            variant: 'contained',
        },
    }
};

export const lightTheme = createMuiTheme({
    ...baseTheme,

    palette: {
        ...baseTheme.palette,

        type: 'light',
    },
});

export const darkTheme = createMuiTheme({
    ...baseTheme,

    palette: {
        ...baseTheme.palette,

        type: 'dark',
    },
});

export const defaultTheme =
  typeof window !== 'undefined'
  && window.localStorage.getItem('theme') === 'light' && lightTheme
  || darkTheme
;
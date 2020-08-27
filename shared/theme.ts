import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },

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
});

export default theme;
import { createTheme } from "@mui/material";

export const myTheme = createTheme({
    palette: {
        primary: {
            main: '#33BC7E',
            light: '#ECEEEE',
            contrastText: 'rgba(0, 0, 0, 0.6)',
            common: {
                white: 'rgb(255, 255, 255)',
                black: 'black'
            }
        },
        secondary: {
            main: 'rgb(236, 238, 238)',
            light: 'rgba(51, 188, 126, 0.12)',
            contrastText: 'rgba(35, 131, 88, 0.12)',
        },
        background: {
            default: '#F4F5F5',
            paper: "#272937",
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 8,
                    padding: '6px 16px',
                    letterSpacing: '0.5px',
                    backgroundColor: 'rgba(51, 188, 126, 0.12)',
                    color: '#33BC7E',
                    ":hover": { backgroundColor: 'rgba(35, 131, 88, 0.12)' }
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    border: 'none',
                    height: '30px',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                defaultChecked: 'true'
            }
        },
    },
    typography: {
        fontFamily: 'Lexend',
    },
})

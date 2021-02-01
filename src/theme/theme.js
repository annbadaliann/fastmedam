import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        common: {
            black: '#000000',
            white: '#FFFFFF',
        },
        primary: {
            main: '#7AC943',
        },
        secondary: {
            main: '#C60FAA',
        },
        error: {
            main: '#FF1744',
        },
        text: {
            primary: '#5F6D7C',
            secondary: '#4AA2FA',
        },
    },
    spacing: 8,
});

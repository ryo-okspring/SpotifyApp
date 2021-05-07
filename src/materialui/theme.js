import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#DBE4E8',
        },
        secondary: {
            main: '#2f506a',
        },
    },
    overrides: {
        MuiButton: {
            fullWidth: {
                maxWidth: '400px'
            }
        }
    },
    props: {
        MuiButton: {
            fullWidth: true,
        },

    }
});

export default theme;



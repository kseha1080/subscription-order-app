import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#E7902E',
    },
    error: { 
      main: '#D82A2A' 
    },
    action: {
      main: '#000'
    },
    background: {
      main: '#EEE'
    }
  },
  spacing: 8,
  typography: {
    htmlFontSize: 16,
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
});

theme = responsiveFontSizes(theme);

export default theme;

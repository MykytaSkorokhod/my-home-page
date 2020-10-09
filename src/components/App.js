import React from 'react';
import { grey } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import ContentPage from './contentPage/ContentPage';
import NavigationBar from './navigationBar/NavigationBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <ContentPage />
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundColor: grey[300],
        },
        head: {
          backgroundColor: grey[300],
        },
        body: {
          backgroundColor: grey[300],
        },
      },
    },
  },
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[600],
    },
  },
  background: {
    dark: grey[300],
  },
  typography: {
    fontFamily: "Roboto Mono"
  },
});

export default App;

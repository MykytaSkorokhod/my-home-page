import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import NavigationBar from './navigationBar/NavigationBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <Container>
        <Typography>
          Content about me soon...
      </Typography>
      </Container>
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

import React from 'react';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Calculator from './Pages/Calculator/index';
import Main from './Pages/Main';
import Layout from './Pages/Layout';
import Shortcut from './Pages/Shortcut';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#AAABD3'
    },
    secondary: {
      main: '#F7AA97'
    },
    error: {
      main: '#ff0000'
    },
    text: {
      primary: '#000000',
      
    }
  },
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path="/" exact={true}>
              <Main />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/shortcut">
              <Shortcut />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
      
  );
}

export default App;

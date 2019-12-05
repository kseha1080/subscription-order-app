import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from './store';
import routes from './routes';
import theme from '../theme';

import AppContainer from '../views/AppContainer';

const App = () => {
  const renderRoutes = routes.map((route) => {
    return (
      <Route
        exact
        key={route.name}
        path={route.path}
        component={route.component}
      />
    );
  });

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppContainer>{renderRoutes}</AppContainer>
          </ThemeProvider>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

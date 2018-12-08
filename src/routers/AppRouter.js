import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from '../components/Header';
import Forecast from '../components/Forecast';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          component={Forecast}
          exact={true}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

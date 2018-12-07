import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../components/Home';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route
          path="/"
          component={Home}
          exact={true}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

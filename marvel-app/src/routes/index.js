import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Characters from '../pages/Characters';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/characters/:id" exact component={Characters} />
  </Switch>
);

export default Routes;

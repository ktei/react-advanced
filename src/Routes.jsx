import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SpreadAttributes from './SpreadAttributes';
import FunctionsAsChildren from './FunctionsAsChildren';

export default () => ((
  <Switch>
    <Route exact path="/spread-attributes" component={SpreadAttributes} />
    <Route exact path="/functions-as-children" component={FunctionsAsChildren} />
  </Switch>
));

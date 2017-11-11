import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SpreadAttributes from './SpreadAttributes';
import FunctionsAsChildren from './FunctionsAsChildren';
import UsingRefs from './UsingRefs';

export default () => ((
  <Switch>
    <Route exact path="/spread-attributes" component={SpreadAttributes} />
    <Route exact path="/functions-as-children" component={FunctionsAsChildren} />
    <Route exact path="/using-refs" component={UsingRefs} />
  </Switch>
));

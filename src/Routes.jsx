import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CatalogView from './CatalogView';
import SpreadAttributes from './SpreadAttributes';
import FunctionsAsChildren from './FunctionsAsChildren';
import UsingRefs from './UsingRefs';
import GoogleMapView from './GoogleMapView';
import FragmentView from './FragmentView';
import PortalView from './PortalView';
import HOCView from './HOCView';

export default () => ((
  <Switch>
    <Route exact path="/" component={CatalogView} />
    <Route exact path="/spread-attributes" component={SpreadAttributes} />
    <Route exact path="/functions-as-children" component={FunctionsAsChildren} />
    <Route exact path="/using-refs" component={UsingRefs} />
    <Route exact path="/googlemap" component={GoogleMapView} />
    <Route exact path="/fragment" component={FragmentView} />
    <Route exact path="/portal" component={PortalView} />
    <Route exact path="/hoc" component={HOCView} />
  </Switch>
));

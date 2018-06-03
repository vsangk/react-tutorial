import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { UIUXDetails, DigitalDetails } from './components/details';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/creative-production" component={UIUXDetails} />
        <Route path="/digital" component={DigitalDetails} />
        <Route path="/ui-ux" component={UIUXDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { CreativeProductionDetails, UIUXDetails, SMMDetails } from './components/details';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/creative-production" component={CreativeProductionDetails} />
        <Route path="/social-medial-management" component={SMMDetails} />
        <Route path="/ui-ux" component={UIUXDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { BrandingDetails, DigitalDetails, BTLDetails } from './components/details';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/creative-production" component={BrandingDetails} />
        <Route path="/digital" component={DigitalDetails} />
        <Route path="/ui-ux" component={BTLDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;

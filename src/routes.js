import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { UIUXDetails, SocialMediaManagementDetails, CreativeContentDetails } from './components/details';
import AboutUs from './components/pages/AboutUs';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/creative-content" component={CreativeContentDetails} />
        <Route path="/social-media-management" component={SocialMediaManagementDetails} />
        <Route path="/ui-ux" component={UIUXDetails} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;

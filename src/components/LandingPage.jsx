import React from 'react';
import '../assets/styles/landingpage.scss';

import Home from './Home';
import BottomPage from './BottomPage';
import PartnersPage from './pages/PartnersPage';
import UIUX from './pages/UIUX';
import CreativeContent from './pages/CreativeContent';
import SocialMediaManagement from './pages/SMM';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <section className="section-one">
        <Home />
      </section>
      <div className="section-two">
        <UIUX />
      </div>
      <div className="section-three">
        <CreativeContent />
      </div>
      <div className="section-four">
        <SocialMediaManagement />
      </div>
      <section className="section-five">
        <PartnersPage />
      </section>
      <section className="section-six">
        <BottomPage />
      </section>
    </div>
  );
}

export default LandingPage;

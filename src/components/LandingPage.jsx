import React from 'react';
import '../assets/styles/landingpage.scss';

import Home from './Home';
import BottomPage from './BottomPage';
import PartnersPage from './pages/PartnersPage';
import UiUxPage from './pages/UiUxPage';
import CreativeContent from './pages/CreativeContent';
import DigitalPage from './pages/DigitalPage';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <section className="section-one">
        <Home />
      </section>
      <section className="section-two">
        <UiUxPage />
      </section>
      <section className="section-three">
        <CreativeContent />
      </section>
      <section className="section-four">
        <DigitalPage />
      </section>
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

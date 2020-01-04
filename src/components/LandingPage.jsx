import React from 'react';
import '../assets/styles/landingpage.scss';

import Home from './Home';

class LandingPage extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log('We are now scrolling bitches');
  }
  render() {
    return (
      <div className="landing-page-container">
        <section className="section-one">
          <Home />
        </section>
        <section className="section-two"></section>
        <section className="section-three"></section>
      </div>
    );
  }
}

export default LandingPage;

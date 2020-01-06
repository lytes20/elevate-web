import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/landingpage.scss';

import { handleEndScroll, handleIsScrolling } from '../actions/appActions';
import Home from './Home';
import Menu from './Menu';

class LandingPage extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const options = {};
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log(entry);
      });
    }, options);
    observer.observe(this.sectionOne);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { handleEndScroll, handleIsScrolling } = this.props;
    if (window.pageYOffset === 0) {
      handleEndScroll();
    } else {
      handleIsScrolling();
    }
  };
  render() {
    return (
      <div className="landing-page-container">
        <section className="section-one" ref={element => (this.sectionOne = element)}>
          <Home />
        </section>
        <section className="section-two"></section>
        <section className="section-three"></section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleEndScroll: () => dispatch(handleEndScroll()),
  handleIsScrolling: () => dispatch(handleIsScrolling())
});

export default connect(null, mapDispatchToProps)(LandingPage);

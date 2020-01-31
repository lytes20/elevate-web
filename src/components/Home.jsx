import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/home.scss';

import { handleEndScroll, handleIsScrolling } from '../actions/appActions';
import Header from './Header';
import Menu from './Menu';
import SocialMediaLinks from './SocialMediaLinks';
import SlideOne from './slides/SlideOne';
import SlideTwo from './slides/SlideTwo';
import SlideThree from './slides/SlideThree';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
      slides: document.getElementsByClassName('slides'),
      dots: document.getElementsByClassName('dot'),
      tooltips: document.getElementsByClassName('tool-tip')
    };
    this.timeoutFunction = null;
  }

  componentDidMount = () => {
    const { slideIndex } = this.state;
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(() => this.showSlides(slideIndex), 0.1);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleAutoPlay = duration => {
    this.timeoutFunction = setTimeout(() => this.gotoNext(), duration);
  };
  showSlides = slideIndex => {
    let i;
    const { slides, dots } = this.state;
    if (slideIndex > slides.length) {
      slideIndex = 1;
      this.setState({
        slideIndex: 1
      });
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
      this.setState({
        slideIndex: slides.length
      });
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('full-height');
      slides[i].classList.add('zero-height');
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex - 1].classList.add('full-height');
    slides[slideIndex - 1].classList.remove('zero-height');
    dots[slideIndex - 1].className += ' active';
    // this.handleAutoPlay(5000);
  };

  gotoNext = () => {
    clearTimeout(this.timeoutFunction);
    this.setState(prevState => {
      return { slideIndex: prevState.slideIndex + 1 };
    }, this.showSlides(this.state.slideIndex));
  };

  gotoPrev = () => {
    clearTimeout(this.timeoutFunction);
    this.setState(prevState => {
      return { slideIndex: prevState.slideIndex - 1 };
    }, this.showSlides(this.state.slideIndex));
  };
  handleDotOnHover = index => {
    const { tooltips } = this.state;
    tooltips[index].className += ' show';
  };
  handleDotOnHoverAway = index => {
    const { tooltips } = this.state;
    tooltips[index].className = tooltips[index].className.replace('show', '');
  };
  handleSlideChange = index => {
    clearTimeout(this.timeoutFunction);
    this.showSlides(index + 1);
  };
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
      <div className="home-container">
        <Header />
        <Menu />
        <div className="dots-container">
          {[1, 2, 3, 4].map((dot, index) => (
            <div key={index} className="dot-container">
              <div
                className="dot"
                onMouseOver={() => this.handleDotOnHover(index)}
                onClick={() => this.handleSlideChange(index)}
                onMouseOut={() => this.handleDotOnHoverAway(index)}
              ></div>
              <div className="tool-tip">
                <div className="arrow-left"></div>
                <div className="tool-tip-text">Slide</div>
              </div>
            </div>
          ))}
        </div>
        <SocialMediaLinks />
        <div className="landing-content-container slide-1 slides">
          <SlideOne />
        </div>
        <div className="landing-content-container slide-2 slides">
          <SlideTwo />
        </div>
        <div className="landing-content-container slide-3 slides">
          <SlideThree />
        </div>
        <div className="landing-content-container slide-4 slides">
          <h1>Something</h1>
        </div>
        <button className="prev" onClick={() => this.gotoPrev()}>
          &#10094;
        </button>
        <button className="next" onClick={() => this.gotoNext()}>
          &#10095;
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleEndScroll: () => dispatch(handleEndScroll()),
  handleIsScrolling: () => dispatch(handleIsScrolling())
});
export default connect(null, mapDispatchToProps)(Home);

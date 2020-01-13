import React from 'react';
import '../assets/styles/home.scss';
import Header from './Header';
import Menu from './Menu';

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
    setTimeout(() => this.showSlides(slideIndex), 0.1);
  };

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
        <div className="landing-content-container slide-1 slides">
          <h1>Branding</h1>
        </div>
        <div className="landing-content-container slide-2 slides">
          <h1>Digital</h1>
        </div>
        <div className="landing-content-container slide-3 slides">
          <h1>Btl</h1>
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

export default Home;

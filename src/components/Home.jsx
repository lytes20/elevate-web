import React from 'react';
import '../assets/styles/home.scss';
import Header from './Header';
import Menu from './Menu';

class Home extends React.Component {
  state = {
    slideIndex: 1,
    slides: document.getElementsByClassName('slides')
  };

  componentDidMount = () => {
    const { slideIndex } = this.state;
    this.showSlides(slideIndex);
  };

  handleAutoPlay = duration => {
    setTimeout(() => this.gotoNext(), duration);
  };
  showSlides = slideIndex => {
    let i;
    const { slides } = this.state;
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
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'grid';
    this.handleAutoPlay(5000);
  };

  gotoNext = () => {
    this.setState(prevState => {
      return { slideIndex: prevState.slideIndex + 1 };
    }, this.showSlides(this.state.slideIndex));
  };

  gotoPrev = () => {
    this.setState(prevState => {
      return { slideIndex: prevState.slideIndex - 1 };
    }, this.showSlides(this.state.slideIndex));
  };

  render() {
    return (
      <div className="home-container">
        <Header />
        <Menu />
        <div className="landing-content-container slide-1 slides" ref={element => (this.slideOne = element)}>
          <h1>Branding</h1>
        </div>
        <div className="landing-content-container slide-2 slides" ref={element => (this.slideTwo = element)}>
          <h1>Digital</h1>
        </div>
        <div className="landing-content-container slide-3 slides" ref={element => (this.slideThree = element)}>
          <h1>Btl</h1>
        </div>
        <div className="landing-content-container slide-4 slides" ref={element => (this.slideThree = element)}>
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

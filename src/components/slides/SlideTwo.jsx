import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slidetwo.scss';
import { heartMainImage, digitalTextImage, loveLovy } from '../../assets';

export default function SlideTwo() {
  const slideTwoContainer = useRef(null);
  const digitalImageContainer = useRef(null);
  const digitalTextContainer = useRef(null);
  const heartImage = useRef(null);
  let timeOutFunctionOne = null;
  let timeOutFunctionTwo = null;
  let timeOutFunctionThree = null;

  useEffect(() => {
    showBulb();
    setTimeout(() => showSlide(), 0.2);
    return () => {
      console.log('Clean up is called');
      clearTimeout(timeOutFunctionOne);
      clearTimeout(timeOutFunctionTwo);
      clearTimeout(timeOutFunctionThree);
    };
  }, []);
  const showSlide = () => {
    timeOutFunctionOne = slideTwoContainer.current.classList.add('full-height');
  };
  function showBulb() {
    timeOutFunctionTwo = setTimeout(() => {
      digitalTextContainer.current.className += ' show-digital-text';
      digitalImageContainer.current.className += ' show-heart';
    }, 1200);
    timeOutFunctionThree = setTimeout(() => {
      heartImage.current.classList.remove('imageSpin');
    }, 1800);
  }
  return (
    <div className="slide-two-container" ref={slideTwoContainer}>
      <div className="digital-text-container" ref={digitalTextContainer}>
        <img src={digitalTextImage} alt="digital text" />
      </div>
      <div className="split-letters-container">
        <div>Viralize</div>
        <div> Your</div>
        <div>Brand</div>
      </div>
      <div className="overlay">
        <div className="hearts" ref={digitalImageContainer}>
          <div className="hearts-container">
            <div className="love-gif-container love-gif-left">
              <img src={loveLovy} alt="double-tap" />
            </div>
            <div className="heart-image-container">
              <img className="imageSpin" src={heartMainImage} alt="heart main" ref={heartImage} />
            </div>
            <div className="love-gif-container love-gif-right">
              <img src={loveLovy} alt="double-tap" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

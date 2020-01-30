import React, { useRef, useEffect } from 'react';
import '../../assets/styles/slides/slidetwo.scss';
import { heartMainImage, digitalTextImage } from '../../assets';

export default function SlideTwo() {
  const bulbImageContainer = useRef(null);
  const brandingText = useRef(null);
  
  useEffect(() => showBulb());
  function showBulb() {
    setTimeout(() => {
      brandingText.current.className += ' show-branding-text'
      bulbImageContainer.current.className += ' show-bulb';
    }, 1200);
  }
  return (
    <div className="slide-two-container">
      <h1 className="branding-text" ref={brandingText}>
        <img src={digitalTextImage} alt="digital text" />
      </h1>
      <div className="bulb-image-container" ref={bulbImageContainer}>
        <img src={heartMainImage} alt="bulb" />
      </div>
    </div>
  );
}
